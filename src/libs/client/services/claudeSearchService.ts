/**
 * Claude Search Service - Provides full-text search capabilities for Claude sessions
 * Uses Fuse.js for fuzzy search and content indexing with performance optimizations
 */

import Fuse from 'fuse.js';
import { cacheService } from './cacheService';
import type {
  ClaudeSession,
  SessionMessage,
  SearchResult,
  SearchResponse,
  SessionSearchQuery,
  SearchHighlight,
} from '../types/claude-history';

import { ClaudeLogService } from './claudeLogService';

export class ClaudeSearchService {
  private claudeLogService: ClaudeLogService;
  private sessionIndex: Fuse<ClaudeSession> | null = null;
  private messageIndex: Fuse<SessionMessage & { sessionId: string; projectName: string }> | null =
    null;
  private indexLastUpdated = 0;
  private indexTTL = 5 * 60 * 1000; // 5 minutes
  private sessionCount = 0;
  private messageCount = 0;

  constructor() {
    this.claudeLogService = new ClaudeLogService();
  }

  /**
   * Search across all Claude sessions and messages
   */
  async search(query: SessionSearchQuery): Promise<SearchResponse> {
    const startTime = Date.now();
    const cacheKey = `claude:search:${JSON.stringify(query)}`;
    const cached = cacheService.get<SearchResponse>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      await this.ensureIndexes();

      const searchIn = query.searchIn || ['content', 'code', 'filenames', 'metadata'];
      const limit = query.limit || 20;
      const offset = query.offset || 0;

      const results: SearchResult[] = [];

      // Search in session metadata if requested
      if (searchIn.includes('metadata') && this.sessionIndex) {
        const sessionResults = this.searchSessions(query.query, query);
        results.push(...sessionResults);
      }

      // Search in message content if requested
      if ((searchIn.includes('content') || searchIn.includes('code')) && this.messageIndex) {
        const messageResults = await this.searchMessages(query.query, query, searchIn);
        results.push(...messageResults);
      }

      // Search in filenames if requested
      if (searchIn.includes('filenames') && this.sessionIndex) {
        const fileResults = await this.searchFilenames(query.query, query);
        results.push(...fileResults);
      }

      // Combine and deduplicate results
      const uniqueResults = this.deduplicateResults(results);

      // Sort by relevance score
      uniqueResults.sort((a, b) => b.score - a.score);

      // Apply pagination
      const paginatedResults = uniqueResults.slice(offset, offset + limit);

      const response: SearchResponse = {
        results: paginatedResults,
        total: uniqueResults.length,
        took: Date.now() - startTime,
        query: query.query,
        filters: {
          project: query.project,
          searchIn: searchIn,
          dateFrom: query.dateFrom,
          dateTo: query.dateTo,
        },
      };

      // Cache search results for 30 seconds (searches change frequently)
      cacheService.set(cacheKey, response, 30 * 1000);
      return response;
    } catch (error) {
      console.error('Search error:', error);
      return {
        results: [],
        total: 0,
        took: Date.now() - startTime,
        query: query.query,
        filters: {},
      };
    }
  }

  /**
   * Search within session metadata (titles, summaries, file changes)
   */
  private searchSessions(query: string, searchQuery: SessionSearchQuery): SearchResult[] {
    if (!this.sessionIndex) return [];

    const fuseOptions = {
      threshold: 0.4, // More lenient for session search
      limit: searchQuery.limit || 20,
    };

    const results = this.sessionIndex.search(query, fuseOptions);

    return results.map((result) => ({
      sessionId: result.item.id,
      type: 'session' as const,
      title: result.item.summary || `Session in ${result.item.projectName}`,
      excerpt: this.generateSessionExcerpt(result.item),
      score: 1 - (result.score || 0), // Convert Fuse score to relevance score
      highlights: this.generateSessionHighlights(result.item, query),
      context: {
        projectName: result.item.projectName,
        sessionStartTime: result.item.startTime,
      },
    }));
  }

  /**
   * Search within message content and code blocks
   */
  private async searchMessages(
    query: string,
    searchQuery: SessionSearchQuery,
    searchIn: string[]
  ): Promise<SearchResult[]> {
    if (!this.messageIndex) return [];

    // Determine which fields to search based on searchIn parameter
    const keys = [];
    if (searchIn.includes('content')) keys.push('content');
    if (searchIn.includes('code')) keys.push('codeBlocks.code');

    const fuseOptions = {
      keys,
      threshold: 0.3, // Stricter for content search
      limit: (searchQuery.limit || 20) * 2, // Get more results to filter
      includeMatches: true,
    };

    const results = this.messageIndex.search(query, fuseOptions);

    return results.slice(0, searchQuery.limit || 20).map((result) => ({
      sessionId: result.item.sessionId,
      messageId: result.item.id,
      type: 'message' as const,
      title: `Message from ${result.item.projectName}`,
      excerpt: this.generateMessageExcerpt(result.item, query),
      score: 1 - (result.score || 0),
      highlights: this.generateMessageHighlights(Array.from(result.matches || []), query),
      context: {
        projectName: result.item.projectName,
        sessionStartTime: result.item.timestamp,
        messageIndex: parseInt(result.item.id),
        // surroundingMessages: await this.getSurroundingMessages(result.item.sessionId, result.item.id),
      },
    }));
  }

  /**
   * Search within file names mentioned in sessions
   */
  private async searchFilenames(
    query: string,
    searchQuery: SessionSearchQuery
  ): Promise<SearchResult[]> {
    if (!this.sessionIndex) return [];

    // Get all sessions for file search - we'll need to maintain our own list
    const allSessions = await this.claudeLogService.getAllSessions({ limit: 1000 });
    const results: SearchResult[] = [];

    for (const session of allSessions) {
      const matchingFiles = session.fileChanges.filter((file) =>
        file.toLowerCase().includes(query.toLowerCase())
      );

      if (matchingFiles.length > 0) {
        results.push({
          sessionId: session.id,
          type: 'file' as const,
          title: `Files in ${session.projectName}`,
          excerpt: matchingFiles.slice(0, 3).join(', '),
          score: 0.8, // Fixed score for file matches
          highlights: [
            {
              field: 'files',
              fragments: matchingFiles.slice(0, 5),
            },
          ],
          context: {
            projectName: session.projectName,
            sessionStartTime: session.startTime,
          },
        });
      }
    }

    return results;
  }

  /**
   * Ensure search indexes are built and up-to-date
   */
  private async ensureIndexes(): Promise<void> {
    const now = Date.now();

    if (this.sessionIndex && this.messageIndex && now - this.indexLastUpdated < this.indexTTL) {
      return; // Indexes are fresh
    }

    console.log('Building search indexes...');
    const startTime = Date.now();

    // Get all sessions and messages
    const sessions = await this.claudeLogService.getAllSessions({ limit: 1000 });
    const messagesWithContext: Array<SessionMessage & { sessionId: string; projectName: string }> =
      [];

    // Build message index with session context
    for (const session of sessions) {
      const sessionDetail = await this.claudeLogService.getSessionDetail(session.id);
      if (sessionDetail) {
        for (const message of sessionDetail.messages) {
          messagesWithContext.push({
            ...message,
            sessionId: session.id,
            projectName: session.projectName,
          });
        }
      }
    }

    // Build session search index
    this.sessionIndex = new Fuse(sessions, {
      keys: [
        { name: 'projectName', weight: 0.4 },
        { name: 'summary', weight: 0.3 },
        { name: 'fileChanges', weight: 0.2 },
        { name: 'tags', weight: 0.1 },
      ],
      includeScore: true,
    });

    // Build message search index
    this.messageIndex = new Fuse(messagesWithContext, {
      keys: [
        { name: 'content', weight: 0.7 },
        { name: 'codeBlocks.code', weight: 0.3 },
      ],
      includeScore: true,
    });

    // Store counts for statistics
    this.sessionCount = sessions.length;
    this.messageCount = messagesWithContext.length;

    this.indexLastUpdated = now;
    console.log(`Search indexes built in ${Date.now() - startTime}ms`);
  }

  /**
   * Generate excerpt for session search results
   */
  private generateSessionExcerpt(session: ClaudeSession): string {
    const parts = [];

    if (session.summary) {
      parts.push(session.summary);
    } else {
      parts.push(`${session.messageCount} messages, ${session.codeBlockCount} code blocks`);
    }

    if (session.fileChanges.length > 0) {
      parts.push(`Modified: ${session.fileChanges.slice(0, 3).join(', ')}`);
    }

    return parts.join(' • ');
  }

  /**
   * Generate excerpt for message search results
   */
  private generateMessageExcerpt(
    message: SessionMessage & { projectName: string },
    query: string
  ): string {
    const content = message.content;
    const queryWords = query.toLowerCase().split(/\s+/);

    // Find the best snippet containing query terms
    const sentences = content.split(/[.!?]+/).filter((s) => s.trim());
    let bestSentence = sentences[0] || content;
    let maxMatches = 0;

    for (const sentence of sentences) {
      const matches = queryWords.filter((word) => sentence.toLowerCase().includes(word)).length;

      if (matches > maxMatches) {
        maxMatches = matches;
        bestSentence = sentence;
      }
    }

    return bestSentence.trim().slice(0, 200) + (bestSentence.length > 200 ? '...' : '');
  }

  /**
   * Generate highlights for session search results
   */
  private generateSessionHighlights(session: ClaudeSession, query: string): SearchHighlight[] {
    const highlights: SearchHighlight[] = [];
    const queryLower = query.toLowerCase();

    // Check project name
    if (session.projectName.toLowerCase().includes(queryLower)) {
      highlights.push({
        field: 'projectName',
        fragments: [session.projectName],
      });
    }

    // Check file changes
    const matchingFiles = session.fileChanges.filter((file) =>
      file.toLowerCase().includes(queryLower)
    );

    if (matchingFiles.length > 0) {
      highlights.push({
        field: 'fileChanges',
        fragments: matchingFiles.slice(0, 5),
      });
    }

    return highlights;
  }

  /**
   * Generate highlights for message search results
   */
  private generateMessageHighlights(matches: any[], query: string): SearchHighlight[] {
    const highlights: SearchHighlight[] = [];

    for (const match of matches) {
      if (match.key === 'content') {
        highlights.push({
          field: 'content',
          fragments: this.extractHighlightFragments(match.value, query),
        });
      } else if (match.key === 'codeBlocks.code') {
        highlights.push({
          field: 'code',
          fragments: this.extractHighlightFragments(match.value, query),
        });
      }
    }

    return highlights;
  }

  /**
   * Extract highlight fragments around matching text
   */
  private extractHighlightFragments(text: string, query: string, contextSize = 50): string[] {
    const queryLower = query.toLowerCase();
    const textLower = text.toLowerCase();
    const fragments: string[] = [];

    let searchStart = 0;
    let matchIndex;

    while (
      (matchIndex = textLower.indexOf(queryLower, searchStart)) !== -1 &&
      fragments.length < 3
    ) {
      const start = Math.max(0, matchIndex - contextSize);
      const end = Math.min(text.length, matchIndex + query.length + contextSize);

      let fragment = text.slice(start, end);
      if (start > 0) fragment = '...' + fragment;
      if (end < text.length) fragment = fragment + '...';

      fragments.push(fragment);
      searchStart = matchIndex + query.length;
    }

    return fragments;
  }

  /**
   * Get surrounding messages for context
   */
  private async getSurroundingMessages(
    sessionId: string,
    messageId: string
  ): Promise<SessionMessage[]> {
    try {
      const sessionDetail = await this.claudeLogService.getSessionDetail(sessionId);
      if (!sessionDetail) return [];

      const messageIndex = sessionDetail.messages.findIndex((m) => m.id === messageId);
      if (messageIndex === -1) return [];

      // Get 2 messages before and after (if available)
      const start = Math.max(0, messageIndex - 2);
      const end = Math.min(sessionDetail.messages.length, messageIndex + 3);

      return sessionDetail.messages.slice(start, end);
    } catch (error) {
      console.warn('Failed to get surrounding messages:', error);
      return [];
    }
  }

  /**
   * Remove duplicate results and merge similar ones
   */
  private deduplicateResults(results: SearchResult[]): SearchResult[] {
    const seen = new Set<string>();
    const unique: SearchResult[] = [];

    for (const result of results) {
      const key = `${result.sessionId}-${result.type}-${result.messageId || ''}`;

      if (!seen.has(key)) {
        seen.add(key);
        unique.push(result);
      }
    }

    return unique;
  }

  /**
   * Clear search indexes (useful for testing or manual refresh)
   */
  clearIndexes(): void {
    this.sessionIndex = null;
    this.messageIndex = null;
    this.indexLastUpdated = 0;
    this.sessionCount = 0;
    this.messageCount = 0;
  }

  /**
   * Get index statistics
   */
  getIndexStats(): { sessionCount: number; messageCount: number; lastUpdated: Date | null } {
    return {
      sessionCount: this.sessionCount,
      messageCount: this.messageCount,
      lastUpdated: this.indexLastUpdated > 0 ? new Date(this.indexLastUpdated) : null,
    };
  }
}
