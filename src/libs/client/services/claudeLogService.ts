/**
 * Claude Log Service - Parses JSONL files from ~/.claude/projects/
 * and converts them to structured session data with caching and performance optimizations
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import { cacheService } from './cacheService';
import type {
  ClaudeSession,
  SessionMessage,
  ClaudeProject,
  ToolCall,
  CodeBlock,
  RawClaudeLogEntry,
  ProcessedSessionData,
  SessionMetadata,
  SessionListQuery,
} from '../types/claude-history';

export class ClaudeLogService {
  private claudeProjectsPath: string;
  private cache = new Map<string, ProcessedSessionData>();
  private cacheEnabled = true;

  constructor(customPath?: string) {
    this.claudeProjectsPath = customPath || path.join(os.homedir(), '.claude', 'projects');
  }

  /**
   * Get all Claude projects
   */
  async getProjects(): Promise<ClaudeProject[]> {
    const cacheKey = 'claude:projects';
    const cached = cacheService.get<ClaudeProject[]>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      if (!fs.existsSync(this.claudeProjectsPath)) {
        return [];
      }

      const projects: ClaudeProject[] = [];
      const projectDirs = fs.readdirSync(this.claudeProjectsPath, { withFileTypes: true });

      for (const dir of projectDirs) {
        if (!dir.isDirectory()) continue;

        const projectPath = path.join(this.claudeProjectsPath, dir.name);
        const sessionFiles = this.getSessionFiles(projectPath);

        if (sessionFiles.length === 0) continue;

        // Get basic project metadata
        const sessions = await this.getProjectSessions(dir.name, { limit: 1000 });
        const sortedSessions = sessions.sort(
          (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
        );

        projects.push({
          id: dir.name,
          name: this.formatProjectName(dir.name),
          path: projectPath,
          sessionCount: sessions.length,
          totalMessages: sessions.reduce((total, session) => total + session.messageCount, 0),
          firstActivity: sortedSessions[0]?.startTime || '',
          lastActivity:
            sortedSessions[sortedSessions.length - 1]?.endTime ||
            sortedSessions[sortedSessions.length - 1]?.startTime ||
            '',
          isActive: this.isProjectActive(sortedSessions),
          sessionIds: sessions.map((s) => s.id),
        });
      }

      const sortedProjects = projects.sort(
        (a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
      );

      // Cache for 2 minutes
      cacheService.set(cacheKey, sortedProjects, 2 * 60 * 1000);
      return sortedProjects;
    } catch (error) {
      console.error('Error getting Claude projects:', error);
      return [];
    }
  }

  /**
   * Get sessions for a specific project
   */
  async getProjectSessions(
    projectId: string,
    query: SessionListQuery = {}
  ): Promise<ClaudeSession[]> {
    try {
      const projectPath = path.join(this.claudeProjectsPath, projectId);
      if (!fs.existsSync(projectPath)) {
        return [];
      }

      const sessionFiles = this.getSessionFiles(projectPath);
      const sessions: ClaudeSession[] = [];

      for (const file of sessionFiles) {
        try {
          const session = await this.parseSessionFile(file.path);
          if (session) {
            sessions.push(session);
          }
        } catch (error) {
          console.error(`Error parsing session file ${file.path}:`, error);
        }
      }

      const filtered = this.filterAndSortSessions(sessions, query);

      return filtered;
    } catch (error) {
      console.error(`Error getting sessions for project ${projectId}:`, error);
      return [];
    }
  }

  /**
   * Get all sessions across all projects
   */
  async getAllSessions(query: SessionListQuery = {}): Promise<ClaudeSession[]> {
    const cacheKey = `claude:sessions:${JSON.stringify(query)}`;
    const cached = cacheService.get<ClaudeSession[]>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const projects = await this.getProjects();
      const allSessions: ClaudeSession[] = [];

      for (const project of projects) {
        const sessions = await this.getProjectSessions(project.id, { limit: 1000 });
        allSessions.push(...sessions);
      }

      const filteredSessions = this.filterAndSortSessions(allSessions, query);

      // Cache for 1 minute (sessions change less frequently)
      cacheService.set(cacheKey, filteredSessions, 60 * 1000);
      return filteredSessions;
    } catch (error) {
      console.error('Error getting all sessions:', error);
      return [];
    }
  }

  /**
   * Get detailed session data with messages
   */
  async getSessionDetail(
    sessionId: string
  ): Promise<{ session: ClaudeSession; messages: SessionMessage[] } | null> {
    // Try cache first
    const cacheKey = `claude:session-detail:${sessionId}`;
    const cached = cacheService.get<{ session: ClaudeSession; messages: SessionMessage[] }>(
      cacheKey
    );
    if (cached) {
      return cached;
    }

    try {
      // Efficiently find the session file across all projects without loading all sessions
      const projects = await this.getProjects();

      for (const project of projects) {
        const sessionFilePath = this.findSessionFile(project.path, sessionId);
        if (sessionFilePath) {
          const processedData = await this.parseSessionFileWithMessages(sessionFilePath);
          if (processedData && processedData.session.id === sessionId) {
            const result = {
              session: processedData.session,
              messages: processedData.messages,
            };

            // Cache for 10 minutes (session details don't change often)
            cacheService.set(cacheKey, result, 10 * 60 * 1000);
            return result;
          }
        }
      }

      return null;
    } catch (error) {
      console.error(`Error getting session detail for ${sessionId}:`, error);
      return null;
    }
  }

  /**
   * Parse a JSONL session file to extract basic session info
   */
  private async parseSessionFile(filePath: string): Promise<ClaudeSession | null> {
    // Try cache first
    const cacheKey = `claude:session:${filePath}`;
    const cached = cacheService.get<ClaudeSession>(cacheKey);
    if (cached) {
      return cached;
    }

    if (this.cacheEnabled && this.cache.has(filePath)) {
      return this.cache.get(filePath)!.session;
    }

    try {
      // Use lightweight parsing for better performance
      const session = await this.parseSessionFileLightweight(filePath);
      if (session) {
        // Cache for 5 minutes
        cacheService.set(cacheKey, session, 5 * 60 * 1000);
      }
      return session;
    } catch (error) {
      console.error(`Error parsing session file ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Lightweight session parsing without full message content
   */
  private async parseSessionFileLightweight(filePath: string): Promise<ClaudeSession | null> {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const lines = fileContent
        .trim()
        .split('\n')
        .filter((line) => line.trim());

      if (lines.length === 0) {
        return null;
      }

      let messageCount = 0;
      let codeBlockCount = 0;
      let toolCallCount = 0;
      let startTime = '';
      let endTime = '';
      const fileChanges: Set<string> = new Set();
      let firstMessageTime = '';
      let lastMessageTime = '';

      // Process first and last few lines for metadata
      const samplesToCheck = Math.min(20, lines.length);
      const firstLines = lines.slice(0, samplesToCheck);
      const lastLines = lines.slice(-samplesToCheck);

      for (const line of [...firstLines, ...lastLines]) {
        try {
          const entry = JSON.parse(line) as RawClaudeLogEntry;

          // Handle message-like entries
          if (entry.type === 'user_message' || entry.type === 'assistant_message') {
            messageCount++;
            if (!firstMessageTime && entry.timestamp) {
              firstMessageTime = entry.timestamp;
            }
            if (entry.timestamp) {
              lastMessageTime = entry.timestamp;
            }
          }

          if (!startTime && entry.timestamp) {
            startTime = entry.timestamp;
          }
          if (entry.timestamp) {
            endTime = entry.timestamp;
          }

          // Quick scan for code blocks and tool calls in actual Claude format
          const message = (entry as any).message;
          if (message && message.content) {
            if (typeof message.content === 'string' && message.content.includes('```')) {
              const matches = message.content.match(/```/g);
              codeBlockCount += Math.floor((matches?.length || 0) / 2);
            }
            if (Array.isArray(message.content)) {
              message.content.forEach((item: any) => {
                if (item.type === 'tool_use') {
                  toolCallCount++;
                  // Extract file changes from tool calls
                  if (['Edit', 'Write', 'MultiEdit'].includes(item.name) && item.input?.file_path) {
                    fileChanges.add(item.input.file_path);
                  }
                }
                if (item.type === 'code') {
                  codeBlockCount++;
                }
              });
            }
          }

          // Fallback: Quick scan for code blocks and tool calls in old format
          const data = entry.data as any;
          if (data && data.content) {
            if (typeof data.content === 'string' && data.content.includes('```')) {
              const matches = data.content.match(/```/g);
              codeBlockCount += Math.floor((matches?.length || 0) / 2);
            }
            if (Array.isArray(data.content)) {
              data.content.forEach((item: any) => {
                if (item.type === 'tool_use') {
                  toolCallCount++;
                }
                if (item.type === 'code') {
                  codeBlockCount++;
                }
              });
            }
          }

          // Extract file changes from tool calls (old format)
          if (entry.type === 'tool_call' && data && data.tool_name) {
            if (
              ['Edit', 'Write', 'MultiEdit'].includes(data.tool_name) &&
              data.parameters?.file_path
            ) {
              fileChanges.add(data.parameters.file_path);
            }
          }
        } catch {
          // Skip malformed lines
          continue;
        }
      }

      // Estimate total counts based on sample
      const sampleRatio = lines.length / samplesToCheck;
      messageCount = Math.round((messageCount * sampleRatio) / 2); // Divide by 2 since we check both first and last
      codeBlockCount = Math.round((codeBlockCount * sampleRatio) / 2);
      toolCallCount = Math.round((toolCallCount * sampleRatio) / 2);

      const sessionId = path.basename(filePath, '.jsonl');
      const projectPath = path.dirname(filePath);
      const projectName = path.basename(projectPath);

      const session: ClaudeSession = {
        id: sessionId,
        projectPath,
        projectName,
        startTime: startTime || new Date().toISOString(),
        endTime: endTime || startTime || new Date().toISOString(),
        duration:
          endTime && startTime ? new Date(endTime).getTime() - new Date(startTime).getTime() : 0,
        messageCount,
        codeBlockCount,
        toolCallCount,
        fileChanges: Array.from(fileChanges),
        isBookmarked: false,
        isArchived: false,
        tags: [],
        metadata: {
          firstMessageTime: firstMessageTime || startTime,
          lastMessageTime: lastMessageTime || endTime,
        },
      };

      return session;
    } catch (error) {
      console.error(`Error in lightweight parsing of ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Parse a JSONL session file with full message details
   */
  private async parseSessionFileWithMessages(
    filePath: string
  ): Promise<ProcessedSessionData | null> {
    const startTime = Date.now();

    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content
        .trim()
        .split('\n')
        .filter((line) => line.trim());

      if (lines.length === 0) return null;

      const messages: SessionMessage[] = [];
      const toolCalls: ToolCall[] = [];
      const codeBlocks: CodeBlock[] = [];
      const fileChanges = new Set<string>();
      let sessionMetadata: Partial<SessionMetadata> = {};

      // Parse each JSONL line
      for (let i = 0; i < lines.length; i++) {
        try {
          const entry: RawClaudeLogEntry = JSON.parse(lines[i]);
          const parsedMessage = this.parseLogEntry(entry, i);

          if (parsedMessage) {
            messages.push(parsedMessage);

            // Extract metadata
            if (parsedMessage.toolCalls) {
              toolCalls.push(...parsedMessage.toolCalls);
              // Track file changes from tool calls
              parsedMessage.toolCalls.forEach((call) => {
                if (call.name === 'Edit' || call.name === 'Write') {
                  const filePath = call.parameters.file_path || call.parameters.path;
                  if (filePath) fileChanges.add(String(filePath));
                }
              });
            }

            if (parsedMessage.codeBlocks) {
              codeBlocks.push(...parsedMessage.codeBlocks);
            }

            // Update session metadata
            if (parsedMessage.model) {
              sessionMetadata.model = parsedMessage.model;
            }
          }
        } catch (parseError) {
          console.warn(`Failed to parse line ${i + 1} in ${filePath}:`, parseError);
        }
      }

      if (messages.length === 0) return null;

      // Build session metadata
      const firstMessage = messages[0];
      const lastMessage = messages[messages.length - 1];

      sessionMetadata = {
        ...sessionMetadata,
        firstMessageTime: firstMessage.timestamp,
        lastMessageTime: lastMessage.timestamp,
        totalTokens: messages.reduce((sum, msg) => sum + (msg.tokenCount || 0), 0),
      };

      // Create session object
      const sessionId = this.extractSessionIdFromPath(filePath);
      const projectPath = path.dirname(filePath);
      const projectName = this.formatProjectName(path.basename(path.dirname(filePath)));

      const startDateTime = new Date(firstMessage.timestamp);
      const endDateTime = lastMessage.timestamp ? new Date(lastMessage.timestamp) : undefined;
      const duration = endDateTime
        ? Math.floor((endDateTime.getTime() - startDateTime.getTime()) / 1000)
        : undefined;

      const session: ClaudeSession = {
        id: sessionId,
        projectPath,
        projectName,
        startTime: firstMessage.timestamp,
        endTime: lastMessage.timestamp,
        duration,
        messageCount: messages.length,
        codeBlockCount: codeBlocks.length,
        toolCallCount: toolCalls.length,
        fileChanges: Array.from(fileChanges),
        isBookmarked: false, // TODO: Load from persistent storage
        isArchived: false, // TODO: Load from persistent storage
        tags: [], // TODO: Load from persistent storage
        metadata: sessionMetadata as SessionMetadata,
      };

      const processedData: ProcessedSessionData = {
        rawPath: filePath,
        session,
        messages,
        processingTime: Date.now() - startTime,
        errors: [],
      };

      // Cache the result
      if (this.cacheEnabled) {
        this.cache.set(filePath, processedData);
      }

      return processedData;
    } catch (error) {
      console.error(`Error processing session file ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Parse individual log entry to SessionMessage
   */
  private parseLogEntry(entry: RawClaudeLogEntry, index: number): SessionMessage | null {
    try {
      const message: SessionMessage = {
        id: `${index}`,
        role: this.mapRoleFromEntry(entry),
        content: this.extractContentFromEntry(entry),
        timestamp: entry.timestamp,
        toolCalls: this.extractToolCallsFromEntry(entry),
        codeBlocks: this.extractCodeBlocksFromEntry(entry),
      };

      return message;
    } catch (error) {
      console.warn('Failed to parse log entry:', error);
      return null;
    }
  }

  /**
   * Extract and map role from log entry
   */
  private mapRoleFromEntry(entry: RawClaudeLogEntry): 'user' | 'assistant' | 'system' {
    if (entry.type === 'user_message') return 'user';
    if (entry.type === 'assistant_message') return 'assistant';
    const msgRole: unknown = (entry as any).message?.role;
    if (msgRole === 'user' || msgRole === 'assistant') return msgRole;
    return 'system';
  }

  /**
   * Extract content from log entry
   */
  private extractContentFromEntry(entry: RawClaudeLogEntry): string {
    // Handle actual Claude JSONL format: {"type": "user", "message": {"role": "user", "content": "..."}}
    const message = (entry as any).message;
    if (message && message.content) {
      if (typeof message.content === 'string') {
        return message.content;
      }
      if (Array.isArray(message.content)) {
        return message.content
          .map((item: any) => {
            if (item.type === 'text') return item.text || '';
            if (item.type === 'tool_use')
              return `Tool: ${item.name}\nInput: ${JSON.stringify(item.input)}`;
            return item.text || item.content || JSON.stringify(item);
          })
          .join('\n');
      }
      return JSON.stringify(message.content);
    }

    // Fallback to old format for backward compatibility
    const data = entry.data as any;
    if (data && typeof data === 'object') {
      if (typeof data.content === 'string') {
        return data.content;
      }

      if (Array.isArray(data.content)) {
        return data.content
          .map((item: any) => item.text || item.content || JSON.stringify(item))
          .join('\n');
      }

      if (data.message?.content) {
        return typeof data.message.content === 'string'
          ? data.message.content
          : JSON.stringify(data.message.content);
      }

      return JSON.stringify(data);
    }

    return '';
  }

  /**
   * Extract tool calls from log entry
   */
  private extractToolCallsFromEntry(entry: RawClaudeLogEntry): ToolCall[] | undefined {
    const toolCalls: ToolCall[] = [];

    // Handle actual Claude JSONL format
    const message = (entry as any).message;
    if (message && message.content && Array.isArray(message.content)) {
      message.content.forEach((item: any) => {
        if (item.type === 'tool_use') {
          toolCalls.push({
            name: item.name,
            parameters: item.input || {},
            timestamp: entry.timestamp,
          });
        }
      });
    }

    // Fallback to old format for backward compatibility
    const data = entry.data as any;
    if (data && typeof data === 'object') {
      if (entry.type === 'tool_call' && data.tool_name) {
        toolCalls.push({
          name: data.tool_name,
          parameters: data.parameters || {},
          timestamp: entry.timestamp,
        });
      }

      // Check for tool calls in message content
      if (data.content && Array.isArray(data.content)) {
        data.content.forEach((item: any) => {
          if (item.type === 'tool_use') {
            toolCalls.push({
              name: item.name,
              parameters: item.input || {},
              timestamp: entry.timestamp,
            });
          }
        });
      }
    }

    return toolCalls.length > 0 ? toolCalls : undefined;
  }

  /**
   * Extract code blocks from log entry content
   */
  private extractCodeBlocksFromEntry(entry: RawClaudeLogEntry): CodeBlock[] | undefined {
    const content = this.extractContentFromEntry(entry);
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const codeBlocks: CodeBlock[] = [];

    let match;
    while ((match = codeBlockRegex.exec(content)) !== null) {
      codeBlocks.push({
        language: match[1] || 'text',
        code: match[2].trim(),
      });
    }

    return codeBlocks.length > 0 ? codeBlocks : undefined;
  }

  /**
   * Get JSONL session files from project directory
   */
  private getSessionFiles(projectPath: string): { name: string; path: string; stats: fs.Stats }[] {
    try {
      if (!fs.existsSync(projectPath)) return [];

      const files = fs
        .readdirSync(projectPath)
        .filter((file) => file.endsWith('.jsonl'))
        .map((file) => {
          const fullPath = path.join(projectPath, file);
          return {
            name: file,
            path: fullPath,
            stats: fs.statSync(fullPath),
          };
        })
        .sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());

      return files;
    } catch (error) {
      console.error(`Error reading session files from ${projectPath}:`, error);
      return [];
    }
  }

  /**
   * Find specific session file by ID
   */
  private findSessionFile(projectPath: string, sessionId: string): string | null {
    const files = this.getSessionFiles(projectPath);
    const sessionFile = files.find(
      (f) => f.name.includes(sessionId) || this.extractSessionIdFromPath(f.path) === sessionId
    );
    return sessionFile?.path || null;
  }

  /**
   * Extract session ID from file path
   */
  private extractSessionIdFromPath(filePath: string): string {
    const fileName = path.basename(filePath, '.jsonl');
    // Handle UUID-style session IDs
    const uuidMatch = fileName.match(
      /([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/
    );
    if (uuidMatch) {
      return uuidMatch[1];
    }
    return fileName;
  }

  /**
   * Format project name for display
   */
  private formatProjectName(rawName: string): string {
    return rawName
      .replace(/^-/, '')
      .replace(/-/g, '/')
      .replace(/([A-Z])/g, ' $1')
      .trim();
  }

  /**
   * Check if project has recent activity
   */
  private isProjectActive(sessions: ClaudeSession[]): boolean {
    if (sessions.length === 0) return false;

    const lastSession = sessions[sessions.length - 1];
    const lastActivity = new Date(lastSession.endTime || lastSession.startTime);
    const daysSinceLastActivity = (Date.now() - lastActivity.getTime()) / (1000 * 60 * 60 * 24);

    return daysSinceLastActivity < 7; // Active if used within last 7 days
  }

  /**
   * Filter and sort sessions based on query parameters
   */
  private filterAndSortSessions(
    sessions: ClaudeSession[],
    query: SessionListQuery
  ): ClaudeSession[] {
    let filtered = [...sessions];

    // Apply filters
    if (query.isBookmarked !== undefined) {
      filtered = filtered.filter((s) => s.isBookmarked === query.isBookmarked);
    }

    if (query.isArchived !== undefined) {
      filtered = filtered.filter((s) => s.isArchived === query.isArchived);
    }

    if (query.tags && query.tags.length > 0) {
      filtered = filtered.filter((s) => query.tags!.some((tag) => s.tags.includes(tag)));
    }

    if (query.dateFrom) {
      const fromDate = new Date(query.dateFrom);
      filtered = filtered.filter((s) => new Date(s.startTime) >= fromDate);
    }

    if (query.dateTo) {
      const toDate = new Date(query.dateTo);
      filtered = filtered.filter((s) => new Date(s.startTime) <= toDate);
    }

    // Apply sorting
    const sortBy = query.sortBy || 'startTime';
    const sortOrder = query.sortOrder || 'desc';

    filtered.sort((a, b) => {
      let aVal: any, bVal: any;

      switch (sortBy) {
        case 'startTime':
          aVal = new Date(a.startTime).getTime();
          bVal = new Date(b.startTime).getTime();
          break;
        case 'endTime':
          aVal = new Date(a.endTime || a.startTime).getTime();
          bVal = new Date(b.endTime || b.startTime).getTime();
          break;
        case 'messageCount':
          aVal = a.messageCount;
          bVal = b.messageCount;
          break;
        case 'duration':
          aVal = a.duration || 0;
          bVal = b.duration || 0;
          break;
        default:
          aVal = a.startTime;
          bVal = b.startTime;
      }

      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    // Apply pagination only if explicitly requested (for backward compatibility)
    if (query.offset !== undefined || query.limit !== undefined) {
      const offset = query.offset || 0;
      const limit = query.limit || 50;
      return filtered.slice(offset, offset + limit);
    }

    return filtered;
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }
}
