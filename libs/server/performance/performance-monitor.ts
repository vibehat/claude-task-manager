import { EventEmitter } from 'events';
import { getGlobalErrorHandler, ErrorType } from '../core/error-handler';
import { getGlobalPerformanceCache } from './performance-cache';

// Performance monitoring configuration
export interface PerformanceMonitorConfig {
   enableRealTimeMonitoring: boolean;
   metricsCollectionInterval: number; // Collection interval in milliseconds
   alertThresholds: AlertThresholds;
   retentionPeriod: number; // How long to keep metrics (ms)
   enableAlerting: boolean;
   enableAutoOptimization: boolean;
   maxHistoryEntries: number;
   enableResourceTracking: boolean;
   enableTimingTracking: boolean;
   enableErrorTracking: boolean;
}

export interface AlertThresholds {
   cpuUsage: number; // CPU usage percentage
   memoryUsage: number; // Memory usage percentage
   responseTime: number; // Response time in milliseconds
   errorRate: number; // Error rate percentage
   connectionCount: number; // Maximum connections
   diskUsage: number; // Disk usage percentage
   networkLatency: number; // Network latency in milliseconds
}

// System metrics
export interface SystemMetrics {
   timestamp: number;
   cpu: {
      usage: number; // CPU usage percentage
      loadAverage: number[]; // Load average [1m, 5m, 15m]
      cores: number; // Number of CPU cores
   };
   memory: {
      total: number; // Total memory in bytes
      used: number; // Used memory in bytes
      free: number; // Free memory in bytes
      usage: number; // Memory usage percentage
      heapUsed: number; // Node.js heap used
      heapTotal: number; // Node.js heap total
      external: number; // External memory
      rss: number; // Resident set size
   };
   disk: {
      total: number; // Total disk space
      used: number; // Used disk space
      free: number; // Free disk space
      usage: number; // Disk usage percentage
   };
   network: {
      bytesReceived: number; // Network bytes received
      bytesSent: number; // Network bytes sent
      connectionsActive: number; // Active connections
      connectionsTotal: number; // Total connections
   };
   process: {
      uptime: number; // Process uptime in seconds
      pid: number; // Process ID
      nodeVersion: string; // Node.js version
      platform: string; // Operating system platform
   };
}

// Application metrics
export interface ApplicationMetrics {
   timestamp: number;
   api: {
      requestCount: number; // Total API requests
      requestsPerSecond: number; // Requests per second
      averageResponseTime: number; // Average response time
      errorCount: number; // Total errors
      errorRate: number; // Error rate percentage
      endpointStats: Map<string, EndpointStats>; // Per-endpoint statistics
   };
   database: {
      queryCount: number; // Total database queries
      averageQueryTime: number; // Average query time
      slowQueries: number; // Number of slow queries
      connectionPoolSize: number; // Connection pool size
      activeConnections: number; // Active connections
   };
   cache: {
      hitRate: number; // Cache hit rate
      missRate: number; // Cache miss rate
      evictionRate: number; // Cache eviction rate
      memoryUsage: number; // Cache memory usage
      totalEntries: number; // Total cache entries
   };
   websocket: {
      activeConnections: number; // Active WebSocket connections
      messagesSent: number; // Messages sent
      messagesReceived: number; // Messages received
      averageLatency: number; // Average message latency
      errorCount: number; // WebSocket errors
   };
   cli: {
      commandsExecuted: number; // CLI commands executed
      averageExecutionTime: number; // Average execution time
      failedCommands: number; // Failed commands
      activeProcesses: number; // Active CLI processes
   };
}

export interface EndpointStats {
   path: string;
   method: string;
   requestCount: number;
   totalResponseTime: number;
   averageResponseTime: number;
   errorCount: number;
   lastAccessed: number;
   statusCodes: Map<number, number>;
}

// Performance alerts
export interface PerformanceAlert {
   id: string;
   type: 'warning' | 'critical' | 'info';
   metric: string;
   threshold: number;
   currentValue: number;
   message: string;
   timestamp: number;
   resolved: boolean;
   resolvedAt?: number;
   acknowledgements: Acknowledgement[];
}

export interface Acknowledgement {
   userId: string;
   timestamp: number;
   comment?: string;
}

// Performance trends
export interface PerformanceTrend {
   metric: string;
   timeRange: string;
   trend: 'increasing' | 'decreasing' | 'stable' | 'volatile';
   changePercentage: number;
   dataPoints: number;
   confidence: number;
}

// Performance recommendations
export interface PerformanceRecommendation {
   id: string;
   category: 'performance' | 'resource' | 'optimization' | 'scaling';
   priority: 'low' | 'medium' | 'high' | 'critical';
   title: string;
   description: string;
   impact: string;
   effort: 'low' | 'medium' | 'high';
   implementation: string[];
   metrics: string[];
   createdAt: number;
}

// Default configuration
const DEFAULT_CONFIG: PerformanceMonitorConfig = {
   enableRealTimeMonitoring: true,
   metricsCollectionInterval: 10000, // 10 seconds
   alertThresholds: {
      cpuUsage: 80, // 80%
      memoryUsage: 85, // 85%
      responseTime: 2000, // 2 seconds
      errorRate: 5, // 5%
      connectionCount: 1000, // 1000 connections
      diskUsage: 90, // 90%
      networkLatency: 500, // 500ms
   },
   retentionPeriod: 24 * 60 * 60 * 1000, // 24 hours
   enableAlerting: true,
   enableAutoOptimization: false,
   maxHistoryEntries: 1000,
   enableResourceTracking: true,
   enableTimingTracking: true,
   enableErrorTracking: true,
};

// Main performance monitor class
export class PerformanceMonitor extends EventEmitter {
   private config: PerformanceMonitorConfig;
   private errorHandler = getGlobalErrorHandler();
   private cache = getGlobalPerformanceCache();

   // Metrics storage
   private systemMetricsHistory: SystemMetrics[] = [];
   private applicationMetricsHistory: ApplicationMetrics[] = [];
   private endpointStats = new Map<string, EndpointStats>();
   private activeAlerts = new Map<string, PerformanceAlert>();
   private resolvedAlerts: PerformanceAlert[] = [];

   // Monitoring state
   private monitoringInterval: NodeJS.Timeout | null = null;
   private isMonitoring = false;
   private startTime = Date.now();

   // Current metrics
   private currentSystemMetrics: SystemMetrics | null = null;
   private currentApplicationMetrics: ApplicationMetrics | null = null;

   constructor(config: Partial<PerformanceMonitorConfig> = {}) {
      super();
      this.config = { ...DEFAULT_CONFIG, ...config };

      if (this.config.enableRealTimeMonitoring) {
         this.startMonitoring();
      }
   }

   // Start performance monitoring
   startMonitoring(): void {
      if (this.isMonitoring) return;

      this.isMonitoring = true;
      this.startTime = Date.now();

      this.monitoringInterval = setInterval(async () => {
         await this.collectMetrics();
      }, this.config.metricsCollectionInterval);

      this.emit('monitoring:started');
   }

   // Stop performance monitoring
   stopMonitoring(): void {
      if (!this.isMonitoring) return;

      this.isMonitoring = false;

      if (this.monitoringInterval) {
         clearInterval(this.monitoringInterval);
         this.monitoringInterval = null;
      }

      this.emit('monitoring:stopped');
   }

   // Collect all metrics
   private async collectMetrics(): Promise<void> {
      try {
         // Collect system metrics
         if (this.config.enableResourceTracking) {
            this.currentSystemMetrics = await this.collectSystemMetrics();
            this.systemMetricsHistory.push(this.currentSystemMetrics);
         }

         // Collect application metrics
         this.currentApplicationMetrics = await this.collectApplicationMetrics();
         this.applicationMetricsHistory.push(this.currentApplicationMetrics);

         // Trim history to max entries
         if (this.systemMetricsHistory.length > this.config.maxHistoryEntries) {
            this.systemMetricsHistory = this.systemMetricsHistory.slice(
               -this.config.maxHistoryEntries
            );
         }

         if (this.applicationMetricsHistory.length > this.config.maxHistoryEntries) {
            this.applicationMetricsHistory = this.applicationMetricsHistory.slice(
               -this.config.maxHistoryEntries
            );
         }

         // Check for alerts
         if (this.config.enableAlerting) {
            await this.checkAlerts();
         }

         // Auto-optimization
         if (this.config.enableAutoOptimization) {
            await this.performAutoOptimization();
         }

         // Cache current metrics
         await this.cacheCurrentMetrics();

         this.emit('metrics:collected', {
            systemMetrics: this.currentSystemMetrics,
            applicationMetrics: this.currentApplicationMetrics,
         });
      } catch (error) {
         const monitorError = this.errorHandler.createError(
            ErrorType.PARSING_ERROR,
            `Performance metrics collection failed: ${error.message}`,
            { component: 'PerformanceMonitor' },
            error as Error
         );

         await this.errorHandler.handleError(monitorError, true);
      }
   }

   // Collect system metrics
   private async collectSystemMetrics(): Promise<SystemMetrics> {
      const memUsage = process.memoryUsage();

      // Note: In a real implementation, you'd use actual system monitoring libraries
      // like 'systeminformation' or 'node-os-utils' for accurate system metrics
      const systemMetrics: SystemMetrics = {
         timestamp: Date.now(),
         cpu: {
            usage: Math.random() * 100, // Placeholder - use actual CPU monitoring
            loadAverage: [0.5, 0.7, 0.8], // Placeholder
            cores: 4, // Placeholder
         },
         memory: {
            total: memUsage.heapTotal + memUsage.external + 1024 * 1024 * 1024, // Estimate
            used: memUsage.heapUsed + memUsage.external,
            free: memUsage.heapTotal - memUsage.heapUsed,
            usage:
               ((memUsage.heapUsed + memUsage.external) /
                  (memUsage.heapTotal + memUsage.external)) *
               100,
            heapUsed: memUsage.heapUsed,
            heapTotal: memUsage.heapTotal,
            external: memUsage.external,
            rss: memUsage.rss,
         },
         disk: {
            total: 1024 * 1024 * 1024 * 100, // 100GB placeholder
            used: 1024 * 1024 * 1024 * 50, // 50GB placeholder
            free: 1024 * 1024 * 1024 * 50, // 50GB placeholder
            usage: 50, // 50% placeholder
         },
         network: {
            bytesReceived: 0, // Placeholder
            bytesSent: 0, // Placeholder
            connectionsActive: 0, // Placeholder
            connectionsTotal: 0, // Placeholder
         },
         process: {
            uptime: process.uptime(),
            pid: process.pid,
            nodeVersion: process.version,
            platform: process.platform,
         },
      };

      return systemMetrics;
   }

   // Collect application metrics
   private async collectApplicationMetrics(): Promise<ApplicationMetrics> {
      const applicationMetrics: ApplicationMetrics = {
         timestamp: Date.now(),
         api: {
            requestCount: this.getTotalRequestCount(),
            requestsPerSecond: this.getRequestsPerSecond(),
            averageResponseTime: this.getAverageResponseTime(),
            errorCount: this.getTotalErrorCount(),
            errorRate: this.getErrorRate(),
            endpointStats: new Map(this.endpointStats),
         },
         database: {
            queryCount: 0, // Placeholder - integrate with actual DB
            averageQueryTime: 0, // Placeholder
            slowQueries: 0, // Placeholder
            connectionPoolSize: 10, // Placeholder
            activeConnections: 5, // Placeholder
         },
         cache: {
            hitRate: 0, // Will be filled from cache stats
            missRate: 0, // Will be filled from cache stats
            evictionRate: 0, // Will be filled from cache stats
            memoryUsage: 0, // Will be filled from cache stats
            totalEntries: 0, // Will be filled from cache stats
         },
         websocket: {
            activeConnections: 0, // Placeholder - integrate with WebSocket optimizer
            messagesSent: 0, // Placeholder
            messagesReceived: 0, // Placeholder
            averageLatency: 0, // Placeholder
            errorCount: 0, // Placeholder
         },
         cli: {
            commandsExecuted: 0, // Placeholder - integrate with CLI executor
            averageExecutionTime: 0, // Placeholder
            failedCommands: 0, // Placeholder
            activeProcesses: 0, // Placeholder
         },
      };

      // Fill cache metrics from performance cache
      try {
         const cacheStats = this.cache.getStats();
         applicationMetrics.cache = {
            hitRate: cacheStats.hitRate,
            missRate: cacheStats.missRate,
            evictionRate: 0, // Calculate from evictionCount over time
            memoryUsage: cacheStats.memoryUsage,
            totalEntries: cacheStats.totalEntries,
         };
      } catch (error) {
         console.warn('Failed to get cache metrics:', error);
      }

      return applicationMetrics;
   }

   // Track API endpoint performance
   trackEndpoint(
      path: string,
      method: string,
      responseTime: number,
      statusCode: number,
      error?: Error
   ): void {
      const key = `${method}:${path}`;
      let stats = this.endpointStats.get(key);

      if (!stats) {
         stats = {
            path,
            method,
            requestCount: 0,
            totalResponseTime: 0,
            averageResponseTime: 0,
            errorCount: 0,
            lastAccessed: Date.now(),
            statusCodes: new Map(),
         };
         this.endpointStats.set(key, stats);
      }

      // Update statistics
      stats.requestCount++;
      stats.totalResponseTime += responseTime;
      stats.averageResponseTime = stats.totalResponseTime / stats.requestCount;
      stats.lastAccessed = Date.now();

      // Track status codes
      const currentCount = stats.statusCodes.get(statusCode) || 0;
      stats.statusCodes.set(statusCode, currentCount + 1);

      // Track errors
      if (error || statusCode >= 400) {
         stats.errorCount++;
      }

      this.emit('endpoint:tracked', { path, method, responseTime, statusCode });
   }

   // Check for alert conditions
   private async checkAlerts(): Promise<void> {
      if (!this.currentSystemMetrics || !this.currentApplicationMetrics) return;

      const alerts: PerformanceAlert[] = [];

      // CPU usage alert
      if (this.currentSystemMetrics.cpu.usage > this.config.alertThresholds.cpuUsage) {
         alerts.push({
            id: 'cpu-usage-high',
            type: 'warning',
            metric: 'cpu.usage',
            threshold: this.config.alertThresholds.cpuUsage,
            currentValue: this.currentSystemMetrics.cpu.usage,
            message: `CPU usage is ${this.currentSystemMetrics.cpu.usage.toFixed(1)}%, exceeding threshold of ${this.config.alertThresholds.cpuUsage}%`,
            timestamp: Date.now(),
            resolved: false,
            acknowledgements: [],
         });
      }

      // Memory usage alert
      if (this.currentSystemMetrics.memory.usage > this.config.alertThresholds.memoryUsage) {
         alerts.push({
            id: 'memory-usage-high',
            type: 'warning',
            metric: 'memory.usage',
            threshold: this.config.alertThresholds.memoryUsage,
            currentValue: this.currentSystemMetrics.memory.usage,
            message: `Memory usage is ${this.currentSystemMetrics.memory.usage.toFixed(1)}%, exceeding threshold of ${this.config.alertThresholds.memoryUsage}%`,
            timestamp: Date.now(),
            resolved: false,
            acknowledgements: [],
         });
      }

      // Response time alert
      if (
         this.currentApplicationMetrics.api.averageResponseTime >
         this.config.alertThresholds.responseTime
      ) {
         alerts.push({
            id: 'response-time-high',
            type: 'critical',
            metric: 'api.averageResponseTime',
            threshold: this.config.alertThresholds.responseTime,
            currentValue: this.currentApplicationMetrics.api.averageResponseTime,
            message: `Average response time is ${this.currentApplicationMetrics.api.averageResponseTime.toFixed(0)}ms, exceeding threshold of ${this.config.alertThresholds.responseTime}ms`,
            timestamp: Date.now(),
            resolved: false,
            acknowledgements: [],
         });
      }

      // Error rate alert
      if (this.currentApplicationMetrics.api.errorRate > this.config.alertThresholds.errorRate) {
         alerts.push({
            id: 'error-rate-high',
            type: 'critical',
            metric: 'api.errorRate',
            threshold: this.config.alertThresholds.errorRate,
            currentValue: this.currentApplicationMetrics.api.errorRate,
            message: `API error rate is ${this.currentApplicationMetrics.api.errorRate.toFixed(1)}%, exceeding threshold of ${this.config.alertThresholds.errorRate}%`,
            timestamp: Date.now(),
            resolved: false,
            acknowledgements: [],
         });
      }

      // Process new alerts
      for (const alert of alerts) {
         if (!this.activeAlerts.has(alert.id)) {
            this.activeAlerts.set(alert.id, alert);
            this.emit('alert:triggered', alert);
         }
      }

      // Check for resolved alerts
      const activeAlertIds = new Set(alerts.map((a) => a.id));
      for (const [alertId, alert] of this.activeAlerts.entries()) {
         if (!activeAlertIds.has(alertId) && !alert.resolved) {
            alert.resolved = true;
            alert.resolvedAt = Date.now();
            this.resolvedAlerts.push(alert);
            this.activeAlerts.delete(alertId);
            this.emit('alert:resolved', alert);
         }
      }
   }

   // Auto-optimization based on metrics
   private async performAutoOptimization(): Promise<void> {
      if (!this.currentSystemMetrics || !this.currentApplicationMetrics) return;

      const optimizations: string[] = [];

      // Memory optimization
      if (this.currentSystemMetrics.memory.usage > 70) {
         // Trigger garbage collection
         if (global.gc) {
            global.gc();
            optimizations.push('garbage-collection');
         }

         // Clear cache if memory usage is high
         if (this.currentSystemMetrics.memory.usage > 80) {
            await this.cache.clear();
            optimizations.push('cache-clear');
         }
      }

      // Cache optimization
      if (this.currentApplicationMetrics.cache.hitRate < 50) {
         // Increase cache TTL for better hit rates
         optimizations.push('cache-ttl-increase');
      }

      if (optimizations.length > 0) {
         this.emit('optimization:performed', { optimizations });
      }
   }

   // Cache current metrics
   private async cacheCurrentMetrics(): Promise<void> {
      try {
         if (this.currentSystemMetrics) {
            await this.cache.set(
               'performance:system:current',
               this.currentSystemMetrics,
               5 * 60 * 1000 // 5 minutes
            );
         }

         if (this.currentApplicationMetrics) {
            await this.cache.set(
               'performance:application:current',
               this.currentApplicationMetrics,
               5 * 60 * 1000 // 5 minutes
            );
         }
      } catch (error) {
         console.warn('Failed to cache performance metrics:', error);
      }
   }

   // Helper methods for calculating metrics
   private getTotalRequestCount(): number {
      let total = 0;
      for (const stats of this.endpointStats.values()) {
         total += stats.requestCount;
      }
      return total;
   }

   private getRequestsPerSecond(): number {
      const uptimeSeconds = process.uptime();
      const totalRequests = this.getTotalRequestCount();
      return uptimeSeconds > 0 ? totalRequests / uptimeSeconds : 0;
   }

   private getAverageResponseTime(): number {
      let totalTime = 0;
      let totalRequests = 0;

      for (const stats of this.endpointStats.values()) {
         totalTime += stats.totalResponseTime;
         totalRequests += stats.requestCount;
      }

      return totalRequests > 0 ? totalTime / totalRequests : 0;
   }

   private getTotalErrorCount(): number {
      let total = 0;
      for (const stats of this.endpointStats.values()) {
         total += stats.errorCount;
      }
      return total;
   }

   private getErrorRate(): number {
      const totalRequests = this.getTotalRequestCount();
      const totalErrors = this.getTotalErrorCount();
      return totalRequests > 0 ? (totalErrors / totalRequests) * 100 : 0;
   }

   // Public API methods

   // Get current system metrics
   getCurrentSystemMetrics(): SystemMetrics | null {
      return this.currentSystemMetrics;
   }

   // Get current application metrics
   getCurrentApplicationMetrics(): ApplicationMetrics | null {
      return this.currentApplicationMetrics;
   }

   // Get metrics history
   getMetricsHistory(
      type: 'system' | 'application',
      startTime?: number,
      endTime?: number
   ): SystemMetrics[] | ApplicationMetrics[] {
      const history =
         type === 'system' ? this.systemMetricsHistory : this.applicationMetricsHistory;

      if (!startTime && !endTime) {
         return [...history];
      }

      return history.filter((metric) => {
         if (startTime && metric.timestamp < startTime) return false;
         if (endTime && metric.timestamp > endTime) return false;
         return true;
      });
   }

   // Get endpoint statistics
   getEndpointStats(): Map<string, EndpointStats> {
      return new Map(this.endpointStats);
   }

   // Get active alerts
   getActiveAlerts(): PerformanceAlert[] {
      return Array.from(this.activeAlerts.values());
   }

   // Get resolved alerts
   getResolvedAlerts(): PerformanceAlert[] {
      return [...this.resolvedAlerts];
   }

   // Acknowledge alert
   acknowledgeAlert(alertId: string, userId: string, comment?: string): boolean {
      const alert = this.activeAlerts.get(alertId);
      if (alert) {
         alert.acknowledgements.push({
            userId,
            timestamp: Date.now(),
            comment,
         });
         this.emit('alert:acknowledged', { alertId, userId, comment });
         return true;
      }
      return false;
   }

   // Generate performance trends
   generateTrends(timeRange: number = 60 * 60 * 1000): PerformanceTrend[] {
      const trends: PerformanceTrend[] = [];
      const cutoffTime = Date.now() - timeRange;

      // CPU usage trend
      const cpuData = this.systemMetricsHistory
         .filter((m) => m.timestamp > cutoffTime)
         .map((m) => m.cpu.usage);

      if (cpuData.length > 1) {
         trends.push(this.calculateTrend('cpu.usage', cpuData, 'last_hour'));
      }

      // Memory usage trend
      const memoryData = this.systemMetricsHistory
         .filter((m) => m.timestamp > cutoffTime)
         .map((m) => m.memory.usage);

      if (memoryData.length > 1) {
         trends.push(this.calculateTrend('memory.usage', memoryData, 'last_hour'));
      }

      // Response time trend
      const responseTimeData = this.applicationMetricsHistory
         .filter((m) => m.timestamp > cutoffTime)
         .map((m) => m.api.averageResponseTime);

      if (responseTimeData.length > 1) {
         trends.push(this.calculateTrend('api.averageResponseTime', responseTimeData, 'last_hour'));
      }

      return trends;
   }

   // Calculate trend for a metric
   private calculateTrend(metric: string, data: number[], timeRange: string): PerformanceTrend {
      if (data.length < 2) {
         return {
            metric,
            timeRange,
            trend: 'stable',
            changePercentage: 0,
            dataPoints: data.length,
            confidence: 0,
         };
      }

      const first = data[0];
      const last = data[data.length - 1];
      const changePercentage = first !== 0 ? ((last - first) / first) * 100 : 0;

      let trend: PerformanceTrend['trend'];
      if (Math.abs(changePercentage) < 5) {
         trend = 'stable';
      } else if (changePercentage > 20 || changePercentage < -20) {
         trend = 'volatile';
      } else if (changePercentage > 0) {
         trend = 'increasing';
      } else {
         trend = 'decreasing';
      }

      // Calculate confidence based on data consistency
      const variance = this.calculateVariance(data);
      const confidence = Math.min(
         100,
         Math.max(0, 100 - (variance / Math.abs(changePercentage || 1)) * 10)
      );

      return {
         metric,
         timeRange,
         trend,
         changePercentage,
         dataPoints: data.length,
         confidence,
      };
   }

   // Calculate variance for confidence calculation
   private calculateVariance(data: number[]): number {
      const mean = data.reduce((sum, val) => sum + val, 0) / data.length;
      const variance = data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / data.length;
      return Math.sqrt(variance);
   }

   // Generate performance recommendations
   generateRecommendations(): PerformanceRecommendation[] {
      const recommendations: PerformanceRecommendation[] = [];

      if (!this.currentSystemMetrics || !this.currentApplicationMetrics) {
         return recommendations;
      }

      // Memory optimization recommendation
      if (this.currentSystemMetrics.memory.usage > 75) {
         recommendations.push({
            id: 'memory-optimization',
            category: 'resource',
            priority: 'high',
            title: 'Optimize Memory Usage',
            description:
               'Memory usage is consistently high. Consider implementing memory optimization strategies.',
            impact: 'Reduce memory pressure and improve application stability',
            effort: 'medium',
            implementation: [
               'Implement object pooling for frequently created objects',
               'Review and optimize cache configurations',
               'Add memory profiling to identify memory leaks',
               'Consider enabling garbage collection monitoring',
            ],
            metrics: ['memory.usage', 'memory.heapUsed'],
            createdAt: Date.now(),
         });
      }

      // Response time optimization
      if (this.currentApplicationMetrics.api.averageResponseTime > 1000) {
         recommendations.push({
            id: 'response-time-optimization',
            category: 'performance',
            priority: 'high',
            title: 'Improve API Response Times',
            description: 'API response times are above acceptable thresholds.',
            impact: 'Improve user experience and system performance',
            effort: 'medium',
            implementation: [
               'Add response caching for frequently accessed endpoints',
               'Implement database query optimization',
               'Add connection pooling and keep-alive connections',
               'Consider implementing pagination for large datasets',
            ],
            metrics: ['api.averageResponseTime'],
            createdAt: Date.now(),
         });
      }

      // Cache optimization
      if (this.currentApplicationMetrics.cache.hitRate < 60) {
         recommendations.push({
            id: 'cache-optimization',
            category: 'optimization',
            priority: 'medium',
            title: 'Improve Cache Hit Rate',
            description: 'Cache hit rate is below optimal levels.',
            impact: 'Reduce database load and improve response times',
            effort: 'low',
            implementation: [
               'Review cache TTL settings and increase for stable data',
               'Implement cache warming strategies',
               'Add cache invalidation strategies for dynamic data',
               'Monitor cache size and implement LRU eviction',
            ],
            metrics: ['cache.hitRate', 'cache.missRate'],
            createdAt: Date.now(),
         });
      }

      return recommendations;
   }

   // Update monitoring configuration
   updateConfig(newConfig: Partial<PerformanceMonitorConfig>): void {
      const oldConfig = { ...this.config };
      this.config = { ...this.config, ...newConfig };

      // Restart monitoring if interval changed
      if (oldConfig.metricsCollectionInterval !== this.config.metricsCollectionInterval) {
         if (this.isMonitoring) {
            this.stopMonitoring();
            this.startMonitoring();
         }
      }

      this.emit('config:updated', { oldConfig, newConfig: this.config });
   }

   // Reset all metrics and history
   reset(): void {
      this.systemMetricsHistory = [];
      this.applicationMetricsHistory = [];
      this.endpointStats.clear();
      this.activeAlerts.clear();
      this.resolvedAlerts = [];
      this.currentSystemMetrics = null;
      this.currentApplicationMetrics = null;
      this.startTime = Date.now();

      this.emit('monitor:reset');
   }

   // Get monitoring status
   getStatus() {
      return {
         isMonitoring: this.isMonitoring,
         startTime: this.startTime,
         uptime: Date.now() - this.startTime,
         config: this.config,
         historyEntries: {
            system: this.systemMetricsHistory.length,
            application: this.applicationMetricsHistory.length,
         },
         endpointCount: this.endpointStats.size,
         activeAlerts: this.activeAlerts.size,
         resolvedAlerts: this.resolvedAlerts.length,
      };
   }

   // Cleanup resources
   async cleanup(): Promise<void> {
      this.stopMonitoring();
      this.reset();
      this.removeAllListeners();
   }
}

// Export singleton instance
let globalPerformanceMonitor: PerformanceMonitor | null = null;

export function getGlobalPerformanceMonitor(): PerformanceMonitor {
   if (!globalPerformanceMonitor) {
      globalPerformanceMonitor = new PerformanceMonitor();
   }
   return globalPerformanceMonitor;
}

// Utility functions for performance monitoring
export const PerformanceUtils = {
   // Format bytes to human readable format
   formatBytes: (bytes: number): string => {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return '0 Bytes';
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + sizes[i];
   },

   // Format percentage
   formatPercentage: (value: number): string => {
      return `${Math.round(value * 100) / 100}%`;
   },

   // Format duration
   formatDuration: (ms: number): string => {
      if (ms < 1000) return `${Math.round(ms)}ms`;
      if (ms < 60000) return `${Math.round((ms / 1000) * 100) / 100}s`;
      if (ms < 3600000) return `${Math.round((ms / 60000) * 100) / 100}m`;
      return `${Math.round((ms / 3600000) * 100) / 100}h`;
   },

   // Calculate percentile
   calculatePercentile: (data: number[], percentile: number): number => {
      const sorted = [...data].sort((a, b) => a - b);
      const index = Math.ceil((percentile / 100) * sorted.length) - 1;
      return sorted[Math.max(0, index)];
   },

   // Create performance timing decorator
   timing: (name: string) => {
      return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
         const method = descriptor.value;
         descriptor.value = async function (...args: any[]) {
            const start = Date.now();
            try {
               const result = await method.apply(this, args);
               const duration = Date.now() - start;
               getGlobalPerformanceMonitor().emit('timing:recorded', { name, duration });
               return result;
            } catch (error) {
               const duration = Date.now() - start;
               getGlobalPerformanceMonitor().emit('timing:error', { name, duration, error });
               throw error;
            }
         };
      };
   },
};
