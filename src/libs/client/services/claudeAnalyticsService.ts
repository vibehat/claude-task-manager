/**
 * Claude Analytics Service - Provides usage statistics and insights
 * Analyzes Claude Code session data to generate meaningful metrics with caching
 */

import { cacheService } from './cacheService';
import type {
  ClaudeSession,
  SessionMessage,
  SessionAnalytics,
  DailyStat,
  ToolUsageStat,
  LanguageStat,
  DurationStat,
} from '../types/claude-history';
import { ClaudeLogService } from './claudeLogService';

export class ClaudeAnalyticsService {
  private logService: ClaudeLogService;

  constructor() {
    this.logService = new ClaudeLogService();
  }

  /**
   * Generate comprehensive analytics for all sessions
   */
  async generateAnalytics(projectId?: string, days = 30): Promise<SessionAnalytics> {
    const cacheKey = `claude:analytics:${projectId || 'all'}:${days}`;
    const cached = cacheService.get<SessionAnalytics>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      // Get sessions based on scope
      const sessions = projectId
        ? await this.logService.getProjectSessions(projectId, { limit: 1000 })
        : await this.logService.getAllSessions({ limit: 1000 });

      // Filter by date range if specified
      const cutoffDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
      const recentSessions = sessions.filter(
        (session) => new Date(session.startTime) >= cutoffDate
      );

      // Collect detailed message data for analysis
      const allMessages: Array<SessionMessage & { sessionId: string; projectName: string }> = [];
      const toolUsage = new Map<string, number>();
      const languageUsage = new Map<string, number>();
      const dailyStats = new Map<string, DailyStat>();

      // Process each session
      for (const session of recentSessions) {
        const sessionDetail = await this.logService.getSessionDetail(session.id);

        if (sessionDetail) {
          // Collect messages with context
          for (const message of sessionDetail.messages) {
            allMessages.push({
              ...message,
              sessionId: session.id,
              projectName: session.projectName,
            });

            // Track tool usage
            if (message.toolCalls) {
              message.toolCalls.forEach((toolCall) => {
                toolUsage.set(toolCall.name, (toolUsage.get(toolCall.name) || 0) + 1);
              });
            }

            // Track language usage in code blocks
            if (message.codeBlocks) {
              message.codeBlocks.forEach((codeBlock) => {
                const lang = codeBlock.language || 'text';
                languageUsage.set(lang, (languageUsage.get(lang) || 0) + 1);
              });
            }
          }

          // Track daily statistics
          const date = new Date(session.startTime).toISOString().split('T')[0];
          const existingStat = dailyStats.get(date) || {
            date,
            sessionCount: 0,
            messageCount: 0,
            codeBlockCount: 0,
          };

          existingStat.sessionCount += 1;
          existingStat.messageCount += session.messageCount;
          existingStat.codeBlockCount += session.codeBlockCount;

          dailyStats.set(date, existingStat);
        }
      }

      // Calculate analytics
      const analytics: SessionAnalytics = {
        totalSessions: recentSessions.length,
        totalMessages: allMessages.length,
        totalCodeBlocks: recentSessions.reduce((sum, s) => sum + s.codeBlockCount, 0),
        averageSessionDuration: this.calculateAverageSessionDuration(recentSessions),
        mostActiveProject: this.findMostActiveProject(recentSessions),
        dailyActivity: this.processDailyStats(dailyStats, days),
        topTools: this.processToolUsageStats(toolUsage),
        languageDistribution: this.processLanguageStats(languageUsage),
        sessionDurationDistribution: this.processSessionDurationDistribution(recentSessions),
      };

      // Cache analytics for 5 minutes (analytics are expensive to compute)
      cacheService.set(cacheKey, analytics, 5 * 60 * 1000);
      return analytics;
    } catch (error) {
      console.error('Error generating analytics:', error);

      // Return empty analytics on error
      return {
        totalSessions: 0,
        totalMessages: 0,
        totalCodeBlocks: 0,
        averageSessionDuration: 0,
        mostActiveProject: '',
        dailyActivity: [],
        topTools: [],
        languageDistribution: [],
        sessionDurationDistribution: [],
      };
    }
  }

  /**
   * Get code extraction analytics - most used languages, patterns, etc.
   */
  async getCodeAnalytics(
    projectId?: string,
    days = 30
  ): Promise<{
    totalCodeBlocks: number;
    languageDistribution: LanguageStat[];
    averageCodeBlockSize: number;
    mostModifiedFiles: Array<{ file: string; count: number }>;
    codePatterns: Array<{ pattern: string; count: number; description: string }>;
  }> {
    try {
      const sessions = projectId
        ? await this.logService.getProjectSessions(projectId, { limit: 1000 })
        : await this.logService.getAllSessions({ limit: 1000 });

      const cutoffDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
      const recentSessions = sessions.filter(
        (session) => new Date(session.startTime) >= cutoffDate
      );

      const allCodeBlocks: Array<{ code: string; language: string; filename?: string }> = [];
      const fileModifications = new Map<string, number>();
      const languageUsage = new Map<string, number>();

      // Collect all code blocks and file modifications
      for (const session of recentSessions) {
        const sessionDetail = await this.logService.getSessionDetail(session.id);

        if (sessionDetail) {
          // Collect code blocks
          sessionDetail.messages.forEach((message) => {
            if (message.codeBlocks) {
              message.codeBlocks.forEach((codeBlock) => {
                allCodeBlocks.push(codeBlock);
                const lang = codeBlock.language || 'text';
                languageUsage.set(lang, (languageUsage.get(lang) || 0) + 1);
              });
            }
          });
        }

        // Track file modifications
        session.fileChanges.forEach((file) => {
          fileModifications.set(file, (fileModifications.get(file) || 0) + 1);
        });
      }

      // Analyze code patterns
      const codePatterns = this.analyzeCodePatterns(allCodeBlocks);

      // Calculate average code block size
      const totalCodeSize = allCodeBlocks.reduce((sum, block) => sum + block.code.length, 0);
      const averageCodeBlockSize =
        allCodeBlocks.length > 0 ? totalCodeSize / allCodeBlocks.length : 0;

      // Process most modified files
      const mostModifiedFiles = Array.from(fileModifications.entries())
        .map(([file, count]) => ({ file, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

      return {
        totalCodeBlocks: allCodeBlocks.length,
        languageDistribution: this.processLanguageStats(languageUsage),
        averageCodeBlockSize: Math.round(averageCodeBlockSize),
        mostModifiedFiles,
        codePatterns,
      };
    } catch (error) {
      console.error('Error generating code analytics:', error);
      return {
        totalCodeBlocks: 0,
        languageDistribution: [],
        averageCodeBlockSize: 0,
        mostModifiedFiles: [],
        codePatterns: [],
      };
    }
  }

  /**
   * Calculate average session duration
   */
  private calculateAverageSessionDuration(sessions: ClaudeSession[]): number {
    const sessionsWithDuration = sessions.filter((s) => s.duration && s.duration > 0);

    if (sessionsWithDuration.length === 0) return 0;

    const totalDuration = sessionsWithDuration.reduce((sum, s) => sum + (s.duration || 0), 0);
    return Math.round(totalDuration / sessionsWithDuration.length);
  }

  /**
   * Find most active project
   */
  private findMostActiveProject(sessions: ClaudeSession[]): string {
    const projectCounts = new Map<string, number>();

    sessions.forEach((session) => {
      projectCounts.set(session.projectName, (projectCounts.get(session.projectName) || 0) + 1);
    });

    let mostActive = '';
    let maxCount = 0;

    projectCounts.forEach((count, project) => {
      if (count > maxCount) {
        maxCount = count;
        mostActive = project;
      }
    });

    return mostActive;
  }

  /**
   * Process daily statistics for the specified time period
   */
  private processDailyStats(dailyStats: Map<string, DailyStat>, days: number): DailyStat[] {
    const result: DailyStat[] = [];

    // Generate all dates in range
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      const stat = dailyStats.get(date) || {
        date,
        sessionCount: 0,
        messageCount: 0,
        codeBlockCount: 0,
      };

      result.push(stat);
    }

    return result;
  }

  /**
   * Process tool usage statistics
   */
  private processToolUsageStats(toolUsage: Map<string, number>): ToolUsageStat[] {
    const totalCalls = Array.from(toolUsage.values()).reduce((sum, count) => sum + count, 0);

    if (totalCalls === 0) return [];

    return Array.from(toolUsage.entries())
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / totalCalls) * 100 * 100) / 100,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }

  /**
   * Process language usage statistics
   */
  private processLanguageStats(languageUsage: Map<string, number>): LanguageStat[] {
    const totalBlocks = Array.from(languageUsage.values()).reduce((sum, count) => sum + count, 0);

    if (totalBlocks === 0) return [];

    return Array.from(languageUsage.entries())
      .map(([language, count]) => ({
        language,
        count,
        percentage: Math.round((count / totalBlocks) * 100 * 100) / 100,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);
  }

  /**
   * Process session duration distribution
   */
  private processSessionDurationDistribution(sessions: ClaudeSession[]): DurationStat[] {
    const sessionsWithDuration = sessions.filter((s) => s.duration && s.duration > 0);
    const total = sessionsWithDuration.length;

    if (total === 0) return [];

    const ranges = [
      { range: '0-5min', min: 0, max: 300 },
      { range: '5-15min', min: 300, max: 900 },
      { range: '15-30min', min: 900, max: 1800 },
      { range: '30-60min', min: 1800, max: 3600 },
      { range: '1-2hrs', min: 3600, max: 7200 },
      { range: '2+ hrs', min: 7200, max: Infinity },
    ];

    return ranges
      .map(({ range, min, max }) => {
        const count = sessionsWithDuration.filter(
          (s) => (s.duration || 0) >= min && (s.duration || 0) < max
        ).length;

        return {
          range,
          count,
          percentage: Math.round((count / total) * 100 * 100) / 100,
        };
      })
      .filter((stat) => stat.count > 0);
  }

  /**
   * Analyze common code patterns
   */
  private analyzeCodePatterns(
    codeBlocks: Array<{ code: string; language: string }>
  ): Array<{ pattern: string; count: number; description: string }> {
    const patterns = [
      {
        pattern: 'function',
        regex: /\b(?:function|def|fn)\s+\w+/gi,
        description: 'Function definitions',
      },
      {
        pattern: 'class',
        regex: /\b(?:class|interface|type)\s+\w+/gi,
        description: 'Class/type definitions',
      },
      {
        pattern: 'import',
        regex: /\b(?:import|from|require|#include)\b/gi,
        description: 'Import statements',
      },
      {
        pattern: 'async',
        regex: /\b(?:async|await|Promise)\b/gi,
        description: 'Async/Promise usage',
      },
      {
        pattern: 'api_call',
        regex: /\b(?:fetch|axios|get|post|put|delete)\s*\(/gi,
        description: 'API calls',
      },
      {
        pattern: 'error_handling',
        regex: /\b(?:try|catch|except|error|throw)\b/gi,
        description: 'Error handling',
      },
      {
        pattern: 'loop',
        regex: /\b(?:for|while|map|forEach|filter)\b/gi,
        description: 'Loops and iteration',
      },
      {
        pattern: 'conditional',
        regex: /\b(?:if|else|switch|case|when)\b/gi,
        description: 'Conditional statements',
      },
    ];

    const patternCounts = patterns.map(({ pattern, regex, description }) => {
      let count = 0;

      codeBlocks.forEach((block) => {
        const matches = block.code.match(regex);
        if (matches) {
          count += matches.length;
        }
      });

      return { pattern, count, description };
    });

    return patternCounts
      .filter((p) => p.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }
}
