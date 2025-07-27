/**
 * Performance Logging Utility
 *
 * Provides structured logging for performance data with configurable output
 * formats and levels.
 */

import type { QueryMetrics, SystemMetrics, PerformanceAlert } from './performance-metrics';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface PerformanceLogEntry {
   timestamp: string;
   level: LogLevel;
   type: 'query' | 'system' | 'alert' | 'general';
   message: string;
   data?: any;
   duration?: number;
   requestId?: string;
}

/**
 * Performance logger with structured output
 */
export class PerformanceLogger {
   private logLevel: LogLevel;
   private enableConsoleOutput: boolean;
   private enableFileOutput: boolean;
   private logBuffer: PerformanceLogEntry[] = [];

   constructor(logLevel: LogLevel = 'info', enableConsoleOutput = true, enableFileOutput = false) {
      this.logLevel = logLevel;
      this.enableConsoleOutput = enableConsoleOutput;
      this.enableFileOutput = enableFileOutput;
   }

   /**
    * Log query performance data
    */
   logQuery(metrics: QueryMetrics, requestId?: string): void {
      const entry: PerformanceLogEntry = {
         timestamp: new Date().toISOString(),
         level: metrics.duration > 1000 ? 'warn' : 'info',
         type: 'query',
         message: `GraphQL Query: ${metrics.operationName || 'Anonymous'} (${metrics.duration.toFixed(2)}ms)`,
         data: {
            queryHash: metrics.queryHash,
            operationName: metrics.operationName,
            duration: metrics.duration,
            complexity: metrics.complexity,
            cacheHit: metrics.cacheHit,
            resolverTimings: metrics.resolverTimings,
            error: metrics.error,
         },
         duration: metrics.duration,
         requestId,
      };

      this.writeLog(entry);
   }

   /**
    * Log system metrics
    */
   logSystemMetrics(metrics: SystemMetrics): void {
      const memoryWarning = metrics.memory.percentage > 80;
      const cacheWarning = metrics.redis.totalRequests > 0 && metrics.redis.hitRatio < 0.5;

      const entry: PerformanceLogEntry = {
         timestamp: new Date().toISOString(),
         level: memoryWarning || cacheWarning ? 'warn' : 'debug',
         type: 'system',
         message: `System Metrics: Memory ${metrics.memory.percentage.toFixed(1)}%, Cache Hit ${(metrics.redis.hitRatio * 100).toFixed(1)}%`,
         data: metrics,
      };

      this.writeLog(entry);
   }

   /**
    * Log performance alert
    */
   logAlert(alert: PerformanceAlert): void {
      const entry: PerformanceLogEntry = {
         timestamp: new Date().toISOString(),
         level: alert.severity === 'critical' ? 'error' : 'warn',
         type: 'alert',
         message: `Performance Alert [${alert.type}]: ${alert.message}`,
         data: {
            type: alert.type,
            severity: alert.severity,
            value: alert.value,
            threshold: alert.threshold,
            metadata: alert.metadata,
         },
      };

      this.writeLog(entry);
   }

   /**
    * Log general performance information
    */
   log(level: LogLevel, message: string, data?: any, duration?: number, requestId?: string): void {
      const entry: PerformanceLogEntry = {
         timestamp: new Date().toISOString(),
         level,
         type: 'general',
         message,
         data,
         duration,
         requestId,
      };

      this.writeLog(entry);
   }

   /**
    * Write log entry to configured outputs
    */
   private writeLog(entry: PerformanceLogEntry): void {
      // Check if this log level should be output
      if (!this.shouldLog(entry.level)) {
         return;
      }

      // Add to buffer
      this.logBuffer.push(entry);

      // Keep buffer size manageable
      if (this.logBuffer.length > 1000) {
         this.logBuffer.shift();
      }

      // Console output
      if (this.enableConsoleOutput) {
         this.writeToConsole(entry);
      }

      // File output (if implemented)
      if (this.enableFileOutput) {
         this.writeToFile(entry);
      }
   }

   /**
    * Check if log level should be output
    */
   private shouldLog(level: LogLevel): boolean {
      const levels: Record<LogLevel, number> = {
         debug: 0,
         info: 1,
         warn: 2,
         error: 3,
      };

      return levels[level] >= levels[this.logLevel];
   }

   /**
    * Write to console with appropriate formatting
    */
   private writeToConsole(entry: PerformanceLogEntry): void {
      const timestamp = entry.timestamp;
      const levelUpper = entry.level.toUpperCase();
      const typeUpper = entry.type.toUpperCase();

      const prefix = `[${timestamp}] ${levelUpper} [${typeUpper}]`;
      const message = `${prefix} ${entry.message}`;

      switch (entry.level) {
         case 'debug':
            console.debug(message, entry.data);
            break;
         case 'info':
            console.info(message, entry.data);
            break;
         case 'warn':
            console.warn(message, entry.data);
            break;
         case 'error':
            console.error(message, entry.data);
            break;
      }
   }

   /**
    * Write to file (placeholder for file logging implementation)
    */
   private writeToFile(entry: PerformanceLogEntry): void {
      // In a real implementation, you would write to a log file
      // This could use libraries like winston or pino for more sophisticated logging
      console.log('[FILE LOG]', JSON.stringify(entry));
   }

   /**
    * Get recent log entries
    */
   getRecentLogs(count = 100, level?: LogLevel, type?: string): PerformanceLogEntry[] {
      let logs = [...this.logBuffer];

      if (level) {
         logs = logs.filter((log) => log.level === level);
      }

      if (type) {
         logs = logs.filter((log) => log.type === type);
      }

      return logs.slice(-count);
   }

   /**
    * Clear log buffer
    */
   clearLogs(): void {
      this.logBuffer = [];
   }

   /**
    * Get performance summary
    */
   getPerformanceSummary(timeWindowMs = 3600000): {
      totalQueries: number;
      slowQueries: number;
      errorQueries: number;
      avgDuration: number;
      alertCount: number;
   } {
      const cutoffTime = Date.now() - timeWindowMs;
      const cutoffIso = new Date(cutoffTime).toISOString();

      const recentLogs = this.logBuffer.filter((log) => log.timestamp > cutoffIso);
      const queryLogs = recentLogs.filter((log) => log.type === 'query');
      const alertLogs = recentLogs.filter((log) => log.type === 'alert');

      const slowQueries = queryLogs.filter((log) => (log.duration || 0) > 1000);
      const errorQueries = queryLogs.filter((log) => log.data?.error);

      const totalDuration = queryLogs.reduce((sum, log) => sum + (log.duration || 0), 0);
      const avgDuration = queryLogs.length > 0 ? totalDuration / queryLogs.length : 0;

      return {
         totalQueries: queryLogs.length,
         slowQueries: slowQueries.length,
         errorQueries: errorQueries.length,
         avgDuration,
         alertCount: alertLogs.length,
      };
   }

   /**
    * Export logs in various formats
    */
   exportLogs(format: 'json' | 'csv' | 'text' = 'json'): string {
      switch (format) {
         case 'json':
            return JSON.stringify(this.logBuffer, null, 2);

         case 'csv':
            const headers = 'timestamp,level,type,message,duration,requestId';
            const rows = this.logBuffer.map(
               (log) =>
                  `${log.timestamp},${log.level},${log.type},"${log.message}",${log.duration || ''},${log.requestId || ''}`
            );
            return [headers, ...rows].join('\n');

         case 'text':
            return this.logBuffer
               .map(
                  (log) =>
                     `[${log.timestamp}] ${log.level.toUpperCase()} [${log.type.toUpperCase()}] ${log.message}`
               )
               .join('\n');

         default:
            return JSON.stringify(this.logBuffer, null, 2);
      }
   }
}

/**
 * Default performance logger instance
 */
export const defaultPerformanceLogger = new PerformanceLogger(
   process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
   true, // Console output
   process.env.NODE_ENV === 'production' // File output in production
);

/**
 * Utility functions for common logging patterns
 */
export const logQuery = (metrics: QueryMetrics, requestId?: string) =>
   defaultPerformanceLogger.logQuery(metrics, requestId);

export const logSystemMetrics = (metrics: SystemMetrics) =>
   defaultPerformanceLogger.logSystemMetrics(metrics);

export const logAlert = (alert: PerformanceAlert) => defaultPerformanceLogger.logAlert(alert);

export const logPerformance = (
   level: LogLevel,
   message: string,
   data?: any,
   duration?: number,
   requestId?: string
) => defaultPerformanceLogger.log(level, message, data, duration, requestId);
