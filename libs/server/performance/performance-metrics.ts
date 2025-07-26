/**
 * Performance Metrics Collection and Monitoring
 *
 * Provides comprehensive performance monitoring with query execution tracking,
 * system metrics collection, and alerting capabilities.
 */

import { performance } from 'perf_hooks';
import { getRedisCache } from './redis-cache';

/**
 * Performance metric types
 */
export interface QueryMetrics {
   queryHash: string;
   operationName?: string;
   duration: number;
   complexity: number;
   cacheHit: boolean;
   resolverTimings: Record<string, number>;
   timestamp: number;
   variables?: any;
   error?: string;
}

export interface SystemMetrics {
   timestamp: number;
   memory: {
      used: number;
      total: number;
      percentage: number;
   };
   cpu: {
      usage: number;
   };
   redis: {
      hitRatio: number;
      totalRequests: number;
      errors: number;
   };
   graphql: {
      activeQueries: number;
      avgQueryDuration: number;
      slowQueries: number;
   };
}

export interface PerformanceAlert {
   type: 'slow_query' | 'high_memory' | 'high_cpu' | 'cache_miss' | 'error_rate';
   severity: 'warning' | 'critical';
   message: string;
   value: number;
   threshold: number;
   timestamp: number;
   metadata?: any;
}

/**
 * Performance thresholds configuration
 */
export interface PerformanceConfig {
   slowQueryThreshold: number; // milliseconds
   highMemoryThreshold: number; // percentage
   highCpuThreshold: number; // percentage
   lowCacheHitThreshold: number; // ratio
   highErrorRateThreshold: number; // percentage
   metricsRetentionDays: number;
   alertCooldownMinutes: number;
}

export const DEFAULT_PERFORMANCE_CONFIG: PerformanceConfig = {
   slowQueryThreshold: 1000, // 1 second
   highMemoryThreshold: 80, // 80%
   highCpuThreshold: 75, // 75%
   lowCacheHitThreshold: 0.5, // 50%
   highErrorRateThreshold: 5, // 5%
   metricsRetentionDays: 7,
   alertCooldownMinutes: 15,
};

/**
 * Query execution tracker with detailed timing
 */
export class QueryPerformanceTracker {
   private activeQueries = new Map<
      string,
      { startTime: number; resolverTimings: Record<string, number> }
   >();
   private queryMetrics: QueryMetrics[] = [];
   private config: PerformanceConfig;
   private cache = getRedisCache();

   constructor(config: Partial<PerformanceConfig> = {}) {
      this.config = { ...DEFAULT_PERFORMANCE_CONFIG, ...config };
   }

   /**
    * Start tracking a query
    */
   startQuery(queryHash: string, operationName?: string, complexity: number = 1): string {
      const queryId = `${queryHash}-${Date.now()}`;

      this.activeQueries.set(queryId, {
         startTime: performance.now(),
         resolverTimings: {},
      });

      return queryId;
   }

   /**
    * Track resolver execution time
    */
   trackResolver(queryId: string, resolverName: string, duration: number): void {
      const queryData = this.activeQueries.get(queryId);
      if (queryData) {
         queryData.resolverTimings[resolverName] = duration;
      }
   }

   /**
    * Complete query tracking
    */
   completeQuery(
      queryId: string,
      queryHash: string,
      operationName?: string,
      complexity: number = 1,
      cacheHit: boolean = false,
      variables?: any,
      error?: string
   ): QueryMetrics {
      const queryData = this.activeQueries.get(queryId);
      if (!queryData) {
         throw new Error(`Query ${queryId} not found in active queries`);
      }

      const duration = performance.now() - queryData.startTime;
      const metrics: QueryMetrics = {
         queryHash,
         operationName,
         duration,
         complexity,
         cacheHit,
         resolverTimings: queryData.resolverTimings,
         timestamp: Date.now(),
         variables,
         error,
      };

      // Store metrics
      this.queryMetrics.push(metrics);

      // Keep only recent metrics in memory
      if (this.queryMetrics.length > 1000) {
         this.queryMetrics.shift();
      }

      // Clean up active query
      this.activeQueries.delete(queryId);

      // Check for performance alerts
      this.checkQueryAlerts(metrics);

      return metrics;
   }

   /**
    * Get query performance statistics
    */
   getQueryStats(timeWindowMs: number = 3600000): {
      totalQueries: number;
      avgDuration: number;
      slowQueries: number;
      cacheHitRatio: number;
      errorRate: number;
      topSlowQueries: QueryMetrics[];
      resolverStats: Record<string, { avgDuration: number; callCount: number }>;
   } {
      const cutoffTime = Date.now() - timeWindowMs;
      const recentQueries = this.queryMetrics.filter((q) => q.timestamp > cutoffTime);

      if (recentQueries.length === 0) {
         return {
            totalQueries: 0,
            avgDuration: 0,
            slowQueries: 0,
            cacheHitRatio: 0,
            errorRate: 0,
            topSlowQueries: [],
            resolverStats: {},
         };
      }

      const totalDuration = recentQueries.reduce((sum, q) => sum + q.duration, 0);
      const slowQueries = recentQueries.filter((q) => q.duration > this.config.slowQueryThreshold);
      const cacheHits = recentQueries.filter((q) => q.cacheHit);
      const errors = recentQueries.filter((q) => q.error);

      // Calculate resolver statistics
      const resolverStats: Record<string, { totalDuration: number; callCount: number }> = {};

      for (const query of recentQueries) {
         for (const [resolver, duration] of Object.entries(query.resolverTimings)) {
            if (!resolverStats[resolver]) {
               resolverStats[resolver] = { totalDuration: 0, callCount: 0 };
            }
            resolverStats[resolver].totalDuration += duration;
            resolverStats[resolver].callCount++;
         }
      }

      const finalResolverStats: Record<string, { avgDuration: number; callCount: number }> = {};
      for (const [resolver, stats] of Object.entries(resolverStats)) {
         finalResolverStats[resolver] = {
            avgDuration: stats.totalDuration / stats.callCount,
            callCount: stats.callCount,
         };
      }

      return {
         totalQueries: recentQueries.length,
         avgDuration: totalDuration / recentQueries.length,
         slowQueries: slowQueries.length,
         cacheHitRatio: cacheHits.length / recentQueries.length,
         errorRate: errors.length / recentQueries.length,
         topSlowQueries: recentQueries.sort((a, b) => b.duration - a.duration).slice(0, 10),
         resolverStats: finalResolverStats,
      };
   }

   /**
    * Check for query-related performance alerts
    */
   private checkQueryAlerts(metrics: QueryMetrics): void {
      // Slow query alert
      if (metrics.duration > this.config.slowQueryThreshold) {
         this.emitAlert({
            type: 'slow_query',
            severity:
               metrics.duration > this.config.slowQueryThreshold * 2 ? 'critical' : 'warning',
            message: `Slow query detected: ${metrics.operationName || metrics.queryHash}`,
            value: metrics.duration,
            threshold: this.config.slowQueryThreshold,
            timestamp: Date.now(),
            metadata: {
               queryHash: metrics.queryHash,
               operationName: metrics.operationName,
               complexity: metrics.complexity,
               resolverTimings: metrics.resolverTimings,
            },
         });
      }
   }

   /**
    * Emit performance alert
    */
   private emitAlert(alert: PerformanceAlert): void {
      console.warn(`[PERFORMANCE ALERT] ${alert.severity.toUpperCase()}: ${alert.message}`, {
         value: alert.value,
         threshold: alert.threshold,
         metadata: alert.metadata,
      });

      // Store alert for dashboard
      this.storeAlert(alert);
   }

   /**
    * Store alert in cache for dashboard access
    */
   private async storeAlert(alert: PerformanceAlert): Promise<void> {
      try {
         const alertKey = `performance:alerts:${Date.now()}`;
         await this.cache.set(alertKey, JSON.stringify(alert), { ttl: 86400 }); // 24 hours
      } catch (error) {
         console.error('Failed to store performance alert:', error);
      }
   }
}

/**
 * System metrics collector
 */
export class SystemMetricsCollector {
   private config: PerformanceConfig;
   private cache = getRedisCache();
   private intervalId: NodeJS.Timeout | null = null;

   constructor(config: Partial<PerformanceConfig> = {}) {
      this.config = { ...DEFAULT_PERFORMANCE_CONFIG, ...config };
   }

   /**
    * Start collecting system metrics
    */
   start(intervalSeconds: number = 30): void {
      if (this.intervalId) {
         console.warn('System metrics collection already started');
         return;
      }

      this.intervalId = setInterval(async () => {
         try {
            const metrics = await this.collectMetrics();
            await this.storeMetrics(metrics);
            this.checkSystemAlerts(metrics);
         } catch (error) {
            console.error('Failed to collect system metrics:', error);
         }
      }, intervalSeconds * 1000);

      console.log(`System metrics collection started (interval: ${intervalSeconds}s)`);
   }

   /**
    * Stop collecting system metrics
    */
   stop(): void {
      if (this.intervalId) {
         clearInterval(this.intervalId);
         this.intervalId = null;
         console.log('System metrics collection stopped');
      }
   }

   /**
    * Collect current system metrics
    */
   async collectMetrics(): Promise<SystemMetrics> {
      const memoryUsage = process.memoryUsage();
      const cacheStats = this.cache.getStats();

      // Get CPU usage (simplified - in production you'd use a proper library)
      const cpuUsage = process.cpuUsage();
      const cpuPercent = (cpuUsage.user + cpuUsage.system) / 1000000; // Convert to seconds

      return {
         timestamp: Date.now(),
         memory: {
            used: memoryUsage.heapUsed,
            total: memoryUsage.heapTotal,
            percentage: (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100,
         },
         cpu: {
            usage: Math.min(cpuPercent, 100), // Cap at 100%
         },
         redis: {
            hitRatio: cacheStats.hitRatio,
            totalRequests: cacheStats.totalRequests,
            errors: cacheStats.errors,
         },
         graphql: {
            activeQueries: 0, // Would be set by query tracker
            avgQueryDuration: 0, // Would be calculated from recent queries
            slowQueries: 0, // Would be counted from recent queries
         },
      };
   }

   /**
    * Store metrics in cache
    */
   private async storeMetrics(metrics: SystemMetrics): Promise<void> {
      try {
         const metricsKey = `performance:system:${Math.floor(metrics.timestamp / 60000)}`; // Per minute
         await this.cache.set(metricsKey, JSON.stringify(metrics), {
            ttl: this.config.metricsRetentionDays * 86400,
         });
      } catch (error) {
         console.error('Failed to store system metrics:', error);
      }
   }

   /**
    * Check for system-related alerts
    */
   private checkSystemAlerts(metrics: SystemMetrics): void {
      // High memory usage
      if (metrics.memory.percentage > this.config.highMemoryThreshold) {
         this.emitAlert({
            type: 'high_memory',
            severity: metrics.memory.percentage > 90 ? 'critical' : 'warning',
            message: `High memory usage detected: ${metrics.memory.percentage.toFixed(1)}%`,
            value: metrics.memory.percentage,
            threshold: this.config.highMemoryThreshold,
            timestamp: Date.now(),
            metadata: { memoryUsage: metrics.memory },
         });
      }

      // Low cache hit ratio
      if (
         metrics.redis.totalRequests > 100 &&
         metrics.redis.hitRatio < this.config.lowCacheHitThreshold
      ) {
         this.emitAlert({
            type: 'cache_miss',
            severity: 'warning',
            message: `Low cache hit ratio: ${(metrics.redis.hitRatio * 100).toFixed(1)}%`,
            value: metrics.redis.hitRatio,
            threshold: this.config.lowCacheHitThreshold,
            timestamp: Date.now(),
            metadata: { redisStats: metrics.redis },
         });
      }
   }

   /**
    * Emit system alert
    */
   private emitAlert(alert: PerformanceAlert): void {
      console.warn(`[SYSTEM ALERT] ${alert.severity.toUpperCase()}: ${alert.message}`, {
         value: alert.value,
         threshold: alert.threshold,
         metadata: alert.metadata,
      });
   }
}

/**
 * GraphQL performance plugin for Apollo Server
 */
export function createPerformanceMonitoringPlugin(tracker: QueryPerformanceTracker) {
   return {
      requestDidStart() {
         return {
            didResolveOperation({ request, document }: any) {
               const operationName = request.operationName;
               const queryHash = require('crypto')
                  .createHash('sha256')
                  .update(request.query || '')
                  .digest('hex')
                  .substring(0, 16);

               // Start tracking this query
               const queryId = tracker.startQuery(queryHash, operationName);

               // Store queryId in context for resolver tracking
               (request as any)._performanceQueryId = queryId;
               (request as any)._performanceQueryHash = queryHash;
               (request as any)._performanceOperationName = operationName;
            },

            willSendResponse({ request, response }: any) {
               const queryId = (request as any)._performanceQueryId;
               const queryHash = (request as any)._performanceQueryHash;
               const operationName = (request as any)._performanceOperationName;

               if (queryId && queryHash) {
                  const hasError = response.errors && response.errors.length > 0;
                  const errorMessage = hasError ? response.errors[0].message : undefined;

                  tracker.completeQuery(
                     queryId,
                     queryHash,
                     operationName,
                     1, // Default complexity
                     response.http?.body?.kind === 'complete', // Simplified cache hit detection
                     request.variables,
                     errorMessage
                  );
               }
            },
         };
      },
   };
}

/**
 * Performance dashboard data provider
 */
export class PerformanceDashboard {
   private queryTracker: QueryPerformanceTracker;
   private systemCollector: SystemMetricsCollector;
   private cache = getRedisCache();

   constructor(queryTracker: QueryPerformanceTracker, systemCollector: SystemMetricsCollector) {
      this.queryTracker = queryTracker;
      this.systemCollector = systemCollector;
   }

   /**
    * Get comprehensive performance overview
    */
   async getPerformanceOverview(timeWindowMs: number = 3600000) {
      const queryStats = this.queryTracker.getQueryStats(timeWindowMs);
      const currentMetrics = await this.systemCollector.collectMetrics();
      const recentAlerts = await this.getRecentAlerts();

      return {
         queries: queryStats,
         system: currentMetrics,
         alerts: recentAlerts,
         timestamp: Date.now(),
      };
   }

   /**
    * Get recent performance alerts
    */
   async getRecentAlerts(limit: number = 50): Promise<PerformanceAlert[]> {
      try {
         // Get alert keys from Redis
         const alertKeys = await this.cache.getClient().keys('performance:alerts:*');
         const sortedKeys = alertKeys.sort().reverse().slice(0, limit);

         const alerts: PerformanceAlert[] = [];
         for (const key of sortedKeys) {
            const alertData = await this.cache.get(key);
            if (alertData) {
               alerts.push(JSON.parse(alertData));
            }
         }

         return alerts;
      } catch (error) {
         console.error('Failed to get recent alerts:', error);
         return [];
      }
   }

   /**
    * Get historical metrics
    */
   async getHistoricalMetrics(hours: number = 24): Promise<SystemMetrics[]> {
      try {
         const endTime = Math.floor(Date.now() / 60000); // Current minute
         const startTime = endTime - hours * 60; // Hours ago

         const metrics: SystemMetrics[] = [];

         for (let time = startTime; time <= endTime; time++) {
            const key = `performance:system:${time}`;
            const data = await this.cache.get(key);
            if (data) {
               metrics.push(JSON.parse(data));
            }
         }

         return metrics;
      } catch (error) {
         console.error('Failed to get historical metrics:', error);
         return [];
      }
   }
}

/**
 * Default performance monitoring instances
 */
export const defaultQueryTracker = new QueryPerformanceTracker();
export const defaultSystemCollector = new SystemMetricsCollector();
export const defaultPerformanceDashboard = new PerformanceDashboard(
   defaultQueryTracker,
   defaultSystemCollector
);

/**
 * Initialize performance monitoring
 */
export function initializePerformanceMonitoring(config?: Partial<PerformanceConfig>) {
   console.log('Initializing performance monitoring...');

   // Start system metrics collection
   defaultSystemCollector.start(30); // Every 30 seconds

   console.log('Performance monitoring initialized');

   return {
      queryTracker: defaultQueryTracker,
      systemCollector: defaultSystemCollector,
      dashboard: defaultPerformanceDashboard,
   };
}
