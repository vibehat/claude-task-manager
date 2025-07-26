/**
 * Field-Level Caching for GraphQL Resolvers
 *
 * Provides caching decorators and utilities for expensive resolver operations
 * with automatic cache invalidation and performance tracking.
 */

import {
   getRedisCache,
   generateCacheKey,
   serializeForCache,
   deserializeFromCache,
   CACHE_KEY_PATTERNS,
   RedisCache,
} from './redis-cache';

/**
 * Cache configuration for field-level caching
 */
export interface FieldCacheConfig {
   ttl?: number; // Time to live in seconds
   keyGenerator?: (...args: any[]) => string;
   condition?: (args: any) => boolean; // Only cache if condition is true
   invalidateOn?: string[]; // Events that should invalidate this cache
}

/**
 * Cache decorator for resolver methods
 */
export function CacheField(config: FieldCacheConfig = {}) {
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      const cache = getRedisCache();

      descriptor.value = async function (...args: any[]) {
         const cacheKey = config.keyGenerator
            ? config.keyGenerator(...args)
            : generateDefaultCacheKey(propertyKey, args);

         // Check if we should cache this call
         if (config.condition && !config.condition(args)) {
            return originalMethod.apply(this, args);
         }

         try {
            // Try to get from cache first
            const cachedResult = await cache.get(cacheKey);
            if (cachedResult) {
               return deserializeFromCache(cachedResult);
            }

            // Execute original method
            const result = await originalMethod.apply(this, args);

            // Cache the result
            if (result !== null && result !== undefined) {
               await cache.set(cacheKey, serializeForCache(result), { ttl: config.ttl });
            }

            return result;
         } catch (error) {
            console.error(`Field cache error for ${propertyKey}:`, error);
            // Fall back to executing the original method
            return originalMethod.apply(this, args);
         }
      };

      return descriptor;
   };
}

/**
 * Generate default cache key for field operations
 */
function generateDefaultCacheKey(fieldName: string, args: any[]): string {
   const argsHash = JSON.stringify(args).replace(/\s/g, '');
   return `field:${fieldName}:${Buffer.from(argsHash).toString('base64').slice(0, 16)}`;
}

/**
 * Field-level cache manager for manual cache operations
 */
export class FieldCacheManager {
   private cache: RedisCache;

   constructor(cache?: RedisCache) {
      this.cache = cache || getRedisCache();
   }

   /**
    * Cache expensive task operations
    */
   async cacheTaskOperation(
      operationType: 'single' | 'list' | 'ready' | 'dependencies',
      key: string,
      data: any,
      ttl: number = 3600
   ): Promise<void> {
      const cacheKey = this.generateTaskCacheKey(operationType, key);
      await this.cache.set(cacheKey, serializeForCache(data), { ttl });
   }

   /**
    * Get cached task operation result
    */
   async getCachedTaskOperation(
      operationType: 'single' | 'list' | 'ready' | 'dependencies',
      key: string
   ): Promise<any | null> {
      const cacheKey = this.generateTaskCacheKey(operationType, key);
      const cached = await this.cache.get(cacheKey);
      return cached ? deserializeFromCache(cached) : null;
   }

   /**
    * Cache GraphQL query results with complexity-based TTL
    */
   async cacheQueryResult(queryHash: string, result: any, complexity: number): Promise<void> {
      // Higher complexity queries get longer cache times
      const baseTTL = 1800; // 30 minutes
      const ttl = Math.min(baseTTL + complexity * 10, 7200); // Max 2 hours

      const cacheKey = generateCacheKey('GRAPHQL_QUERY', queryHash);
      await this.cache.set(cacheKey, serializeForCache(result), { ttl });
   }

   /**
    * Get cached query result
    */
   async getCachedQueryResult(queryHash: string): Promise<any | null> {
      const cacheKey = generateCacheKey('GRAPHQL_QUERY', queryHash);
      const cached = await this.cache.get(cacheKey);
      return cached ? deserializeFromCache(cached) : null;
   }

   /**
    * Cache CLI operation results
    */
   async cacheCLIOperation(
      operation: string,
      args: any,
      result: any,
      ttl: number = 300 // 5 minutes for CLI operations
   ): Promise<void> {
      const key = `cli:${operation}:${JSON.stringify(args)}`;
      await this.cache.set(key, serializeForCache(result), { ttl });
   }

   /**
    * Invalidate caches based on data changes
    */
   async invalidateRelatedCaches(
      changeType: 'task' | 'tasks' | 'cli',
      identifier?: string
   ): Promise<void> {
      switch (changeType) {
         case 'task':
            if (identifier) {
               await this.cache.deletePattern(`*task*${identifier}*`);
            }
            break;
         case 'tasks':
            await this.cache.deletePattern('*tasks*');
            await this.cache.deletePattern('*ready*');
            break;
         case 'cli':
            await this.cache.deletePattern('cli:*');
            break;
      }
   }

   /**
    * Generate task-specific cache keys
    */
   private generateTaskCacheKey(operationType: string, key: string): string {
      return `task:${operationType}:${key}`;
   }
}

/**
 * Caching utilities for resolver functions
 */
export class ResolverCache {
   private fieldCache: FieldCacheManager;
   private cache: RedisCache;

   constructor() {
      this.cache = getRedisCache();
      this.fieldCache = new FieldCacheManager(this.cache);
   }

   /**
    * Wrap resolver with caching logic
    */
   withCache<T>(
      cacheKey: string,
      resolver: () => Promise<T>,
      options: { ttl?: number; condition?: () => boolean } = {}
   ): Promise<T> {
      return this.executeWithCache(cacheKey, resolver, options);
   }

   /**
    * Execute function with caching
    */
   private async executeWithCache<T>(
      cacheKey: string,
      fn: () => Promise<T>,
      options: { ttl?: number; condition?: () => boolean }
   ): Promise<T> {
      // Check condition if provided
      if (options.condition && !options.condition()) {
         return fn();
      }

      try {
         // Try cache first
         const cached = await this.cache.get(cacheKey);
         if (cached) {
            return deserializeFromCache(cached);
         }

         // Execute function
         const result = await fn();

         // Cache result
         if (result !== null && result !== undefined) {
            await this.cache.set(cacheKey, serializeForCache(result), {
               ttl: options.ttl || 3600,
            });
         }

         return result;
      } catch (error) {
         console.error(`Resolver cache error for key ${cacheKey}:`, error);
         return fn();
      }
   }

   /**
    * Cache task queries with smart TTL based on query complexity
    */
   async cacheTaskQuery<T>(
      queryType: 'single' | 'list' | 'search' | 'ready',
      params: any,
      resolver: () => Promise<T>,
      complexity: number = 1
   ): Promise<T> {
      const cacheKey = `task:query:${queryType}:${JSON.stringify(params)}`;
      const ttl = this.calculateTTL(queryType, complexity);

      return this.executeWithCache(cacheKey, resolver, { ttl });
   }

   /**
    * Calculate TTL based on query type and complexity
    */
   private calculateTTL(queryType: string, complexity: number): number {
      const baseTTLs = {
         single: 3600, // 1 hour for single tasks
         list: 1800, // 30 minutes for task lists
         search: 900, // 15 minutes for searches
         ready: 600, // 10 minutes for ready tasks (changes frequently)
      };

      const baseTTL = baseTTLs[queryType as keyof typeof baseTTLs] || 1800;

      // Adjust TTL based on complexity
      const complexityMultiplier = Math.min(1 + complexity / 100, 2);
      return Math.floor(baseTTL * complexityMultiplier);
   }
}

/**
 * Default resolver cache instance
 */
export const defaultResolverCache = new ResolverCache();

/**
 * Helper function to create cached resolvers
 */
export function createCachedResolver<T>(
   cacheKey: string,
   resolver: () => Promise<T>,
   options?: { ttl?: number; condition?: () => boolean }
): () => Promise<T> {
   return () => defaultResolverCache.withCache(cacheKey, resolver, options);
}

/**
 * Performance tracking for cached operations
 */
export class CachePerformanceTracker {
   private cache: RedisCache;
   private operationTimes: Map<string, number[]> = new Map();

   constructor(cache?: RedisCache) {
      this.cache = cache || getRedisCache();
   }

   /**
    * Track operation performance
    */
   async trackOperation<T>(operationName: string, operation: () => Promise<T>): Promise<T> {
      const startTime = Date.now();

      try {
         const result = await operation();
         const endTime = Date.now();
         const duration = endTime - startTime;

         this.recordOperationTime(operationName, duration);

         return result;
      } catch (error) {
         const endTime = Date.now();
         const duration = endTime - startTime;

         this.recordOperationTime(`${operationName}:error`, duration);
         throw error;
      }
   }

   /**
    * Record operation time
    */
   private recordOperationTime(operationName: string, duration: number): void {
      if (!this.operationTimes.has(operationName)) {
         this.operationTimes.set(operationName, []);
      }

      const times = this.operationTimes.get(operationName)!;
      times.push(duration);

      // Keep only last 100 operations
      if (times.length > 100) {
         times.shift();
      }
   }

   /**
    * Get performance statistics
    */
   getOperationStats(operationName: string) {
      const times = this.operationTimes.get(operationName);
      if (!times || times.length === 0) {
         return null;
      }

      const sortedTimes = [...times].sort((a, b) => a - b);
      const avg = times.reduce((sum, time) => sum + time, 0) / times.length;
      const p50 = sortedTimes[Math.floor(sortedTimes.length * 0.5)];
      const p95 = sortedTimes[Math.floor(sortedTimes.length * 0.95)];
      const p99 = sortedTimes[Math.floor(sortedTimes.length * 0.99)];

      return {
         count: times.length,
         avg: Math.round(avg),
         p50,
         p95,
         p99,
         min: sortedTimes[0],
         max: sortedTimes[sortedTimes.length - 1],
      };
   }

   /**
    * Get all performance statistics
    */
   getAllStats() {
      const stats: Record<string, any> = {};

      for (const [operationName] of this.operationTimes) {
         stats[operationName] = this.getOperationStats(operationName);
      }

      return stats;
   }
}

/**
 * Default performance tracker instance
 */
export const defaultPerformanceTracker = new CachePerformanceTracker();
