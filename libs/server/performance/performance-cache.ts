import { EventEmitter } from 'events';
import { getGlobalErrorHandler, ErrorType } from '../core/error-handler';

// Cache configuration interfaces
export interface CacheConfig {
   maxMemorySize: number; // Maximum memory usage in bytes
   defaultTTL: number; // Default time-to-live in milliseconds
   cleanupInterval: number; // Cleanup interval in milliseconds
   compressionEnabled: boolean; // Enable gzip compression for large values
   persistToDisk: boolean; // Enable disk persistence
   diskCachePath?: string; // Path for disk cache
   maxDiskSize?: number; // Maximum disk cache size
   enableMetrics: boolean; // Enable performance metrics
}

// Cache entry interface
export interface CacheEntry<T = any> {
   key: string;
   value: T;
   size: number;
   ttl: number;
   createdAt: number;
   lastAccessed: number;
   accessCount: number;
   compressed: boolean;
   tags?: string[];
   metadata?: {
      source: string;
      version: string;
      checksum?: string;
   };
}

// Cache statistics interface
export interface CacheStats {
   totalEntries: number;
   memoryUsage: number;
   diskUsage: number;
   hitRate: number;
   missRate: number;
   totalHits: number;
   totalMisses: number;
   totalSets: number;
   totalDeletes: number;
   averageAccessTime: number;
   oldestEntry?: number;
   newestEntry?: number;
   compressionRatio: number;
   evictionCount: number;
}

// Cache operation result
export interface CacheResult<T = any> {
   hit: boolean;
   value?: T;
   key: string;
   accessTime: number;
   fromDisk?: boolean;
   wasDecompressed?: boolean;
   metadata?: CacheEntry<T>['metadata'];
}

// Cache key patterns for different data types
export const CACHE_KEY_PATTERNS = {
   TASKS: 'tasks:',
   TASK_DETAIL: 'task:',
   CLI_COMMAND: 'cli:',
   FILE_SYSTEM: 'fs:',
   WEBSOCKET: 'ws:',
   CONFIG: 'config:',
   METRICS: 'metrics:',
   USER_SESSION: 'session:',
   API_RESPONSE: 'api:',
} as const;

// Default cache configuration
const DEFAULT_CACHE_CONFIG: CacheConfig = {
   maxMemorySize: 100 * 1024 * 1024, // 100MB
   defaultTTL: 15 * 60 * 1000, // 15 minutes
   cleanupInterval: 5 * 60 * 1000, // 5 minutes
   compressionEnabled: true,
   persistToDisk: false,
   maxDiskSize: 500 * 1024 * 1024, // 500MB
   enableMetrics: true,
};

// LRU Cache with advanced features for Task Master
export class TaskMasterPerformanceCache extends EventEmitter {
   private cache = new Map<string, CacheEntry>();
   private config: CacheConfig;
   private errorHandler = getGlobalErrorHandler();
   private cleanupInterval: NodeJS.Timeout;
   private stats: CacheStats;
   private diskCache?: Map<string, string>; // For disk persistence
   private compressionWorker?: any; // For background compression

   constructor(config: Partial<CacheConfig> = {}) {
      super();
      this.config = { ...DEFAULT_CACHE_CONFIG, ...config };

      this.stats = {
         totalEntries: 0,
         memoryUsage: 0,
         diskUsage: 0,
         hitRate: 0,
         missRate: 0,
         totalHits: 0,
         totalMisses: 0,
         totalSets: 0,
         totalDeletes: 0,
         averageAccessTime: 0,
         compressionRatio: 0,
         evictionCount: 0,
      };

      // Initialize disk cache if enabled
      if (this.config.persistToDisk) {
         this.initializeDiskCache();
      }

      // Set up cleanup interval
      this.cleanupInterval = setInterval(() => {
         this.cleanup();
      }, this.config.cleanupInterval);

      // Set up compression worker if enabled
      if (this.config.compressionEnabled) {
         this.initializeCompression();
      }
   }

   // Get value from cache
   async get<T>(key: string): Promise<CacheResult<T>> {
      const startTime = Date.now();

      try {
         // Check memory cache first
         let entry = this.cache.get(key);
         let fromDisk = false;

         // If not in memory, check disk cache
         if (!entry && this.diskCache?.has(key)) {
            entry = await this.loadFromDisk<T>(key);
            fromDisk = true;
         }

         if (!entry) {
            this.stats.totalMisses++;
            this.updateHitRate();

            return {
               hit: false,
               key,
               accessTime: Date.now() - startTime,
            };
         }

         // Check if entry is expired
         if (this.isExpired(entry)) {
            await this.delete(key);
            this.stats.totalMisses++;
            this.updateHitRate();

            return {
               hit: false,
               key,
               accessTime: Date.now() - startTime,
            };
         }

         // Update access statistics
         entry.lastAccessed = Date.now();
         entry.accessCount++;

         this.stats.totalHits++;
         this.updateHitRate();

         const accessTime = Date.now() - startTime;
         this.updateAverageAccessTime(accessTime);

         // Decompress if needed
         let value = entry.value;
         let wasDecompressed = false;

         if (entry.compressed && this.config.compressionEnabled) {
            value = await this.decompress(entry.value);
            wasDecompressed = true;
         }

         // Move to front (LRU)
         if (this.cache.has(key)) {
            this.cache.delete(key);
            this.cache.set(key, entry);
         }

         this.emit('cache:hit', { key, accessTime, fromDisk, wasDecompressed });

         return {
            hit: true,
            value,
            key,
            accessTime,
            fromDisk,
            wasDecompressed,
            metadata: entry.metadata,
         };
      } catch (error) {
         const cacheError = this.errorHandler.createError(
            ErrorType.PARSING_ERROR,
            `Cache get operation failed for key ${key}: ${error.message}`,
            { key, operation: 'get', component: 'PerformanceCache' },
            error as Error
         );

         await this.errorHandler.handleError(cacheError, true);

         this.stats.totalMisses++;
         this.updateHitRate();

         return {
            hit: false,
            key,
            accessTime: Date.now() - startTime,
         };
      }
   }

   // Set value in cache
   async set<T>(
      key: string,
      value: T,
      ttl?: number,
      tags?: string[],
      metadata?: CacheEntry<T>['metadata']
   ): Promise<boolean> {
      try {
         const now = Date.now();
         const entryTTL = ttl || this.config.defaultTTL;

         // Calculate value size
         const valueSize = this.calculateSize(value);

         // Check if we need to make space
         await this.ensureSpace(valueSize);

         // Compress if enabled and value is large enough
         let finalValue = value;
         let compressed = false;

         if (this.config.compressionEnabled && valueSize > 1024) {
            // Compress if > 1KB
            try {
               finalValue = await this.compress(value);
               compressed = true;
            } catch (compressionError) {
               // Continue without compression on error
               console.warn('Compression failed, storing uncompressed:', compressionError);
            }
         }

         const entry: CacheEntry<T> = {
            key,
            value: finalValue,
            size: compressed ? this.calculateSize(finalValue) : valueSize,
            ttl: entryTTL,
            createdAt: now,
            lastAccessed: now,
            accessCount: 0,
            compressed,
            tags,
            metadata,
         };

         // Store in memory cache
         this.cache.set(key, entry);

         // Store to disk if enabled
         if (this.config.persistToDisk && this.diskCache) {
            await this.saveToDisk(key, entry);
         }

         // Update statistics
         this.stats.totalSets++;
         this.stats.totalEntries = this.cache.size;
         this.stats.memoryUsage += entry.size;

         this.updateCompressionRatio();
         this.updateEntryTimestamps();

         this.emit('cache:set', { key, size: entry.size, compressed, ttl: entryTTL });

         return true;
      } catch (error) {
         const cacheError = this.errorHandler.createError(
            ErrorType.PARSING_ERROR,
            `Cache set operation failed for key ${key}: ${error.message}`,
            { key, operation: 'set', component: 'PerformanceCache' },
            error as Error
         );

         await this.errorHandler.handleError(cacheError, true);
         return false;
      }
   }

   // Delete value from cache
   async delete(key: string): Promise<boolean> {
      try {
         const entry = this.cache.get(key);

         if (entry) {
            this.cache.delete(key);
            this.stats.memoryUsage -= entry.size;
            this.stats.totalDeletes++;
            this.stats.totalEntries = this.cache.size;

            // Remove from disk cache if enabled
            if (this.diskCache?.has(key)) {
               this.diskCache.delete(key);
            }

            this.emit('cache:delete', { key, size: entry.size });
            return true;
         }

         return false;
      } catch (error) {
         const cacheError = this.errorHandler.createError(
            ErrorType.PARSING_ERROR,
            `Cache delete operation failed for key ${key}: ${error.message}`,
            { key, operation: 'delete', component: 'PerformanceCache' },
            error as Error
         );

         await this.errorHandler.handleError(cacheError, true);
         return false;
      }
   }

   // Clear all cache entries
   async clear(): Promise<void> {
      try {
         const entriesCleared = this.cache.size;

         this.cache.clear();

         if (this.diskCache) {
            this.diskCache.clear();
         }

         this.stats.totalEntries = 0;
         this.stats.memoryUsage = 0;
         this.stats.diskUsage = 0;

         this.emit('cache:clear', { entriesCleared });
      } catch (error) {
         const cacheError = this.errorHandler.createError(
            ErrorType.PARSING_ERROR,
            `Cache clear operation failed: ${error.message}`,
            { operation: 'clear', component: 'PerformanceCache' },
            error as Error
         );

         await this.errorHandler.handleError(cacheError, true);
      }
   }

   // Get multiple values by keys
   async getMultiple<T>(keys: string[]): Promise<Map<string, CacheResult<T>>> {
      const results = new Map<string, CacheResult<T>>();

      await Promise.all(
         keys.map(async (key) => {
            const result = await this.get<T>(key);
            results.set(key, result);
         })
      );

      return results;
   }

   // Set multiple values
   async setMultiple<T>(
      entries: {
         key: string;
         value: T;
         ttl?: number;
         tags?: string[];
         metadata?: CacheEntry<T>['metadata'];
      }[]
   ): Promise<number> {
      let successCount = 0;

      await Promise.all(
         entries.map(async (entry) => {
            const success = await this.set(
               entry.key,
               entry.value,
               entry.ttl,
               entry.tags,
               entry.metadata
            );
            if (success) successCount++;
         })
      );

      return successCount;
   }

   // Delete by tag
   async deleteByTag(tag: string): Promise<number> {
      let deletedCount = 0;

      for (const [key, entry] of this.cache.entries()) {
         if (entry.tags?.includes(tag)) {
            await this.delete(key);
            deletedCount++;
         }
      }

      return deletedCount;
   }

   // Delete by pattern
   async deleteByPattern(pattern: RegExp): Promise<number> {
      let deletedCount = 0;

      for (const key of this.cache.keys()) {
         if (pattern.test(key)) {
            await this.delete(key);
            deletedCount++;
         }
      }

      return deletedCount;
   }

   // Get keys by pattern
   getKeysByPattern(pattern: RegExp): string[] {
      return Array.from(this.cache.keys()).filter((key) => pattern.test(key));
   }

   // Check if key exists
   has(key: string): boolean {
      const entry = this.cache.get(key);
      return entry ? !this.isExpired(entry) : false;
   }

   // Get cache size
   size(): number {
      return this.cache.size;
   }

   // Get cache statistics
   getStats(): CacheStats {
      return { ...this.stats };
   }

   // Update cache configuration
   updateConfig(newConfig: Partial<CacheConfig>): void {
      this.config = { ...this.config, ...newConfig };
      this.emit('cache:config-updated', newConfig);
   }

   // Private helper methods

   private isExpired(entry: CacheEntry): boolean {
      return Date.now() > entry.createdAt + entry.ttl;
   }

   private calculateSize(value: any): number {
      if (Buffer.isBuffer(value)) {
         return value.length;
      }

      try {
         return Buffer.byteLength(JSON.stringify(value), 'utf8');
      } catch {
         return JSON.stringify(value).length * 2; // Rough estimate
      }
   }

   private async ensureSpace(requiredSize: number): Promise<void> {
      // Check if we have enough space
      if (this.stats.memoryUsage + requiredSize <= this.config.maxMemorySize) {
         return;
      }

      // Evict entries using LRU strategy
      const entries = Array.from(this.cache.entries());
      entries.sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);

      let freedSpace = 0;

      for (const [key, entry] of entries) {
         if (this.stats.memoryUsage - freedSpace + requiredSize <= this.config.maxMemorySize) {
            break;
         }

         await this.delete(key);
         freedSpace += entry.size;
         this.stats.evictionCount++;
      }

      this.emit('cache:eviction', { freedSpace, evictedCount: this.stats.evictionCount });
   }

   private async cleanup(): Promise<void> {
      const now = Date.now();
      const expiredKeys: string[] = [];

      // Find expired entries
      for (const [key, entry] of this.cache.entries()) {
         if (this.isExpired(entry)) {
            expiredKeys.push(key);
         }
      }

      // Remove expired entries
      for (const key of expiredKeys) {
         await this.delete(key);
      }

      if (expiredKeys.length > 0) {
         this.emit('cache:cleanup', { expiredCount: expiredKeys.length });
      }
   }

   private updateHitRate(): void {
      const total = this.stats.totalHits + this.stats.totalMisses;
      this.stats.hitRate = total > 0 ? (this.stats.totalHits / total) * 100 : 0;
      this.stats.missRate = total > 0 ? (this.stats.totalMisses / total) * 100 : 0;
   }

   private updateAverageAccessTime(accessTime: number): void {
      const total = this.stats.totalHits + this.stats.totalMisses;
      this.stats.averageAccessTime =
         (this.stats.averageAccessTime * (total - 1) + accessTime) / total;
   }

   private updateCompressionRatio(): void {
      let compressedSize = 0;
      let originalSize = 0;

      for (const entry of this.cache.values()) {
         if (entry.compressed) {
            compressedSize += entry.size;
            // Estimate original size (this is approximate)
            originalSize += entry.size * 2; // Rough estimate
         }
      }

      this.stats.compressionRatio =
         originalSize > 0 ? ((originalSize - compressedSize) / originalSize) * 100 : 0;
   }

   private updateEntryTimestamps(): void {
      const times = Array.from(this.cache.values()).map((entry) => entry.createdAt);
      if (times.length > 0) {
         this.stats.oldestEntry = Math.min(...times);
         this.stats.newestEntry = Math.max(...times);
      }
   }

   private async compress(value: any): Promise<any> {
      // Simplified compression - in a real implementation, you'd use gzip
      if (typeof value === 'string') {
         return JSON.stringify({ compressed: true, data: value });
      }
      return JSON.stringify({ compressed: true, data: JSON.stringify(value) });
   }

   private async decompress(value: any): Promise<any> {
      try {
         const parsed = JSON.parse(value);
         if (parsed.compressed) {
            return typeof parsed.data === 'string' ? JSON.parse(parsed.data) : parsed.data;
         }
         return value;
      } catch {
         return value;
      }
   }

   private async initializeDiskCache(): Promise<void> {
      // Simplified disk cache - in production, you'd use a proper disk storage
      this.diskCache = new Map();
   }

   private async loadFromDisk<T>(key: string): Promise<CacheEntry<T> | null> {
      if (!this.diskCache) return null;

      try {
         const serialized = this.diskCache.get(key);
         if (serialized) {
            return JSON.parse(serialized);
         }
      } catch (error) {
         console.warn('Failed to load from disk cache:', error);
      }

      return null;
   }

   private async saveToDisk<T>(key: string, entry: CacheEntry<T>): Promise<void> {
      if (!this.diskCache) return;

      try {
         const serialized = JSON.stringify(entry);
         this.diskCache.set(key, serialized);
         this.stats.diskUsage += serialized.length;
      } catch (error) {
         console.warn('Failed to save to disk cache:', error);
      }
   }

   private initializeCompression(): void {
      // Initialize compression worker if needed
      // This would be more sophisticated in a real implementation
   }

   // Cleanup resources
   async cleanup(): Promise<void> {
      if (this.cleanupInterval) {
         clearInterval(this.cleanupInterval);
      }

      await this.clear();
      this.removeAllListeners();
   }
}

// Specialized cache instances for different data types
export class TaskCache extends TaskMasterPerformanceCache {
   constructor() {
      super({
         maxMemorySize: 50 * 1024 * 1024, // 50MB for tasks
         defaultTTL: 10 * 60 * 1000, // 10 minutes
         enableMetrics: true,
      });
   }

   async getTask(taskId: string): Promise<CacheResult> {
      return this.get(`${CACHE_KEY_PATTERNS.TASK_DETAIL}${taskId}`);
   }

   async setTask(taskId: string, task: any, ttl?: number): Promise<boolean> {
      return this.set(
         `${CACHE_KEY_PATTERNS.TASK_DETAIL}${taskId}`,
         task,
         ttl,
         ['task', `task-${taskId}`],
         { source: 'task-api', version: '1.0' }
      );
   }

   async getAllTasks(): Promise<CacheResult> {
      return this.get(`${CACHE_KEY_PATTERNS.TASKS}all`);
   }

   async setAllTasks(tasks: any[], ttl?: number): Promise<boolean> {
      return this.set(`${CACHE_KEY_PATTERNS.TASKS}all`, tasks, ttl, ['tasks', 'task-list'], {
         source: 'task-api',
         version: '1.0',
      });
   }

   async invalidateTask(taskId: string): Promise<void> {
      await this.delete(`${CACHE_KEY_PATTERNS.TASK_DETAIL}${taskId}`);
      await this.deleteByTag(`task-${taskId}`);
      await this.delete(`${CACHE_KEY_PATTERNS.TASKS}all`); // Invalidate task list
   }
}

export class CLICache extends TaskMasterPerformanceCache {
   constructor() {
      super({
         maxMemorySize: 20 * 1024 * 1024, // 20MB for CLI responses
         defaultTTL: 5 * 60 * 1000, // 5 minutes
         enableMetrics: true,
      });
   }

   async getCLIResult(command: string, args: string[]): Promise<CacheResult> {
      const key = this.generateCLIKey(command, args);
      return this.get(key);
   }

   async setCLIResult(
      command: string,
      args: string[],
      result: any,
      ttl?: number
   ): Promise<boolean> {
      const key = this.generateCLIKey(command, args);
      return this.set(key, result, ttl, ['cli', `command-${command}`], {
         source: 'cli-executor',
         version: '1.0',
      });
   }

   private generateCLIKey(command: string, args: string[]): string {
      const argsHash = Buffer.from(JSON.stringify(args)).toString('base64');
      return `${CACHE_KEY_PATTERNS.CLI_COMMAND}${command}:${argsHash}`;
   }
}

// Export singleton instances
let globalTaskCache: TaskCache | null = null;
let globalCLICache: CLICache | null = null;
let globalPerformanceCache: TaskMasterPerformanceCache | null = null;

export function getGlobalTaskCache(): TaskCache {
   if (!globalTaskCache) {
      globalTaskCache = new TaskCache();
   }
   return globalTaskCache;
}

export function getGlobalCLICache(): CLICache {
   if (!globalCLICache) {
      globalCLICache = new CLICache();
   }
   return globalCLICache;
}

export function getGlobalPerformanceCache(): TaskMasterPerformanceCache {
   if (!globalPerformanceCache) {
      globalPerformanceCache = new TaskMasterPerformanceCache();
   }
   return globalPerformanceCache;
}

// Export cache utilities
export const CacheUtils = {
   // Generate cache key with prefix
   generateKey: (prefix: string, ...parts: string[]): string => {
      return `${prefix}${parts.join(':')}`;
   },

   // Parse cache key
   parseKey: (key: string): { prefix: string; parts: string[] } => {
      const colonIndex = key.indexOf(':');
      if (colonIndex === -1) {
         return { prefix: key, parts: [] };
      }

      const prefix = key.substring(0, colonIndex + 1);
      const parts = key.substring(colonIndex + 1).split(':');

      return { prefix, parts };
   },

   // Generate hash for complex objects
   generateHash: (obj: any): string => {
      const str = JSON.stringify(obj, Object.keys(obj).sort());
      return Buffer.from(str).toString('base64');
   },
};
