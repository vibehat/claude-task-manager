/**
 * Redis Caching System
 *
 * Provides Redis-based caching for GraphQL queries and expensive operations
 * with cache invalidation, warming, and performance tracking.
 */

import Redis from 'ioredis';
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';

/**
 * Redis cache configuration
 */
export interface RedisCacheConfig {
   host: string;
   port: number;
   password?: string;
   db: number;
   keyPrefix: string;
   defaultTTL: number; // Time to live in seconds
   maxMemoryPolicy: string;
   retryDelayOnFailover: number;
   lazyConnect: boolean;
}

/**
 * Cache key patterns for different data types
 */
export const CACHE_KEY_PATTERNS = {
   TASK: 'task:',
   TASKS_LIST: 'tasks:list:',
   SUBTASKS: 'subtasks:parent:',
   READY_TASKS: 'tasks:ready',
   TASK_DEPENDENCIES: 'task:deps:',
   CLI_STATUS: 'cli:status',
   GRAPHQL_QUERY: 'gql:query:',
   COMPLEXITY_ANALYSIS: 'gql:complexity:',
} as const;

/**
 * Default Redis configuration
 */
export const DEFAULT_REDIS_CONFIG: RedisCacheConfig = {
   host: process.env.REDIS_HOST || 'localhost',
   port: parseInt(process.env.REDIS_PORT || '6379'),
   password: process.env.REDIS_PASSWORD,
   db: parseInt(process.env.REDIS_DB || '0'),
   keyPrefix: process.env.REDIS_KEY_PREFIX || 'taskmaster:',
   defaultTTL: parseInt(process.env.REDIS_DEFAULT_TTL || '3600'), // 1 hour
   maxMemoryPolicy: 'allkeys-lru',
   retryDelayOnFailover: 100,
   lazyConnect: true,
};

/**
 * Redis cache wrapper implementing KeyValueCache interface for Apollo Server
 */
export class RedisCache implements KeyValueCache<string> {
   private redis: Redis;
   private config: RedisCacheConfig;
   private hitCount = 0;
   private missCount = 0;
   private errorCount = 0;

   constructor(config: Partial<RedisCacheConfig> = {}) {
      this.config = { ...DEFAULT_REDIS_CONFIG, ...config };

      this.redis = new Redis({
         host: this.config.host,
         port: this.config.port,
         password: this.config.password,
         db: this.config.db,
         keyPrefix: this.config.keyPrefix,
         maxRetriesPerRequest: 3,
         retryDelayOnFailover: this.config.retryDelayOnFailover,
         lazyConnect: this.config.lazyConnect,
         maxMemoryPolicy: this.config.maxMemoryPolicy,
      });

      // Handle Redis connection events
      this.redis.on('connect', () => {
         console.log('Redis cache connected');
      });

      this.redis.on('error', (error) => {
         console.error('Redis cache error:', error);
         this.errorCount++;
      });

      this.redis.on('disconnect', () => {
         console.warn('Redis cache disconnected');
      });
   }

   /**
    * Get value from cache
    */
   async get(key: string): Promise<string | undefined> {
      try {
         const value = await this.redis.get(key);
         if (value !== null) {
            this.hitCount++;
            return value;
         }
         this.missCount++;
         return undefined;
      } catch (error) {
         console.error(`Redis GET error for key ${key}:`, error);
         this.errorCount++;
         return undefined;
      }
   }

   /**
    * Set value in cache with optional TTL
    */
   async set(key: string, value: string, options?: { ttl?: number }): Promise<void> {
      try {
         const ttl = options?.ttl || this.config.defaultTTL;
         await this.redis.setex(key, ttl, value);
      } catch (error) {
         console.error(`Redis SET error for key ${key}:`, error);
         this.errorCount++;
         throw error;
      }
   }

   /**
    * Delete key from cache
    */
   async delete(key: string): Promise<boolean> {
      try {
         const result = await this.redis.del(key);
         return result > 0;
      } catch (error) {
         console.error(`Redis DELETE error for key ${key}:`, error);
         this.errorCount++;
         return false;
      }
   }

   /**
    * Get multiple values at once
    */
   async mget(...keys: string[]): Promise<(string | undefined)[]> {
      try {
         const values = await this.redis.mget(...keys);
         return values.map((value) => (value === null ? undefined : value));
      } catch (error) {
         console.error(`Redis MGET error for keys ${keys.join(', ')}:`, error);
         this.errorCount++;
         return new Array(keys.length).fill(undefined);
      }
   }

   /**
    * Set multiple values at once
    */
   async mset(keyValuePairs: { key: string; value: string; ttl?: number }[]): Promise<void> {
      try {
         const pipeline = this.redis.pipeline();

         for (const { key, value, ttl } of keyValuePairs) {
            const finalTTL = ttl || this.config.defaultTTL;
            pipeline.setex(key, finalTTL, value);
         }

         await pipeline.exec();
      } catch (error) {
         console.error('Redis MSET error:', error);
         this.errorCount++;
         throw error;
      }
   }

   /**
    * Delete keys matching a pattern
    */
   async deletePattern(pattern: string): Promise<number> {
      try {
         const keys = await this.redis.keys(pattern);
         if (keys.length === 0) return 0;

         const result = await this.redis.del(...keys);
         return result;
      } catch (error) {
         console.error(`Redis DELETE PATTERN error for pattern ${pattern}:`, error);
         this.errorCount++;
         return 0;
      }
   }

   /**
    * Check if key exists
    */
   async exists(key: string): Promise<boolean> {
      try {
         const result = await this.redis.exists(key);
         return result === 1;
      } catch (error) {
         console.error(`Redis EXISTS error for key ${key}:`, error);
         this.errorCount++;
         return false;
      }
   }

   /**
    * Set TTL for existing key
    */
   async expire(key: string, ttl: number): Promise<boolean> {
      try {
         const result = await this.redis.expire(key, ttl);
         return result === 1;
      } catch (error) {
         console.error(`Redis EXPIRE error for key ${key}:`, error);
         this.errorCount++;
         return false;
      }
   }

   /**
    * Get cache statistics
    */
   getStats(): {
      hits: number;
      misses: number;
      errors: number;
      hitRatio: number;
      totalRequests: number;
   } {
      const totalRequests = this.hitCount + this.missCount;
      const hitRatio = totalRequests > 0 ? this.hitCount / totalRequests : 0;

      return {
         hits: this.hitCount,
         misses: this.missCount,
         errors: this.errorCount,
         hitRatio: Math.round(hitRatio * 100) / 100,
         totalRequests,
      };
   }

   /**
    * Reset statistics
    */
   resetStats(): void {
      this.hitCount = 0;
      this.missCount = 0;
      this.errorCount = 0;
   }

   /**
    * Get Redis client info
    */
   async getInfo(): Promise<any> {
      try {
         const info = await this.redis.info();
         return info;
      } catch (error) {
         console.error('Redis INFO error:', error);
         return null;
      }
   }

   /**
    * Flush all cache data
    */
   async flush(): Promise<void> {
      try {
         await this.redis.flushdb();
      } catch (error) {
         console.error('Redis FLUSH error:', error);
         throw error;
      }
   }

   /**
    * Close Redis connection
    */
   async close(): Promise<void> {
      await this.redis.quit();
   }

   /**
    * Get the underlying Redis client (for advanced operations)
    */
   getClient(): Redis {
      return this.redis;
   }
}

/**
 * Cache invalidation manager
 */
export class CacheInvalidationManager {
   private cache: RedisCache;

   constructor(cache: RedisCache) {
      this.cache = cache;
   }

   /**
    * Invalidate cache for a specific task
    */
   async invalidateTask(taskId: number): Promise<void> {
      const patterns = [
         `${CACHE_KEY_PATTERNS.TASK}${taskId}`,
         `${CACHE_KEY_PATTERNS.SUBTASKS}${taskId}`,
         `${CACHE_KEY_PATTERNS.TASK_DEPENDENCIES}${taskId}`,
         `${CACHE_KEY_PATTERNS.TASKS_LIST}*`, // Invalidate all task lists
      ];

      await Promise.all(patterns.map((pattern) => this.cache.deletePattern(pattern)));
      console.log(`Invalidated cache for task ${taskId}`);
   }

   /**
    * Invalidate cache when tasks are modified
    */
   async invalidateTaskLists(): Promise<void> {
      await Promise.all([
         this.cache.deletePattern(`${CACHE_KEY_PATTERNS.TASKS_LIST}*`),
         this.cache.delete(CACHE_KEY_PATTERNS.READY_TASKS),
      ]);
      console.log('Invalidated task list caches');
   }

   /**
    * Invalidate all GraphQL query caches
    */
   async invalidateGraphQLQueries(): Promise<void> {
      await this.cache.deletePattern(`${CACHE_KEY_PATTERNS.GRAPHQL_QUERY}*`);
      console.log('Invalidated all GraphQL query caches');
   }

   /**
    * Invalidate CLI status cache
    */
   async invalidateCLIStatus(): Promise<void> {
      await this.cache.delete(CACHE_KEY_PATTERNS.CLI_STATUS);
      console.log('Invalidated CLI status cache');
   }
}

/**
 * Cache warming utilities
 */
export class CacheWarmer {
   private cache: RedisCache;

   constructor(cache: RedisCache) {
      this.cache = cache;
   }

   /**
    * Warm cache with frequently accessed data
    */
   async warmFrequentlyAccessedData(): Promise<void> {
      try {
         // This would typically be called during application startup
         console.log('Starting cache warming for frequently accessed data...');

         // Note: Actual cache warming would require access to data sources
         // This is a placeholder for the warming logic

         console.log('Cache warming completed');
      } catch (error) {
         console.error('Cache warming failed:', error);
      }
   }

   /**
    * Warm specific queries based on usage patterns
    */
   async warmPopularQueries(queries: string[]): Promise<void> {
      console.log(`Warming ${queries.length} popular queries...`);

      // Implementation would execute and cache these queries
      // This is a placeholder for the warming logic
   }
}

/**
 * Default Redis cache instance
 */
let defaultCacheInstance: RedisCache | null = null;

/**
 * Get or create default Redis cache instance
 */
export function getRedisCache(config?: Partial<RedisCacheConfig>): RedisCache {
   if (!defaultCacheInstance) {
      defaultCacheInstance = new RedisCache(config);
   }
   return defaultCacheInstance;
}

/**
 * Create cache invalidation manager
 */
export function createCacheInvalidationManager(cache?: RedisCache): CacheInvalidationManager {
   const cacheInstance = cache || getRedisCache();
   return new CacheInvalidationManager(cacheInstance);
}

/**
 * Create cache warmer
 */
export function createCacheWarmer(cache?: RedisCache): CacheWarmer {
   const cacheInstance = cache || getRedisCache();
   return new CacheWarmer(cacheInstance);
}

/**
 * Utility function to generate cache keys
 */
export function generateCacheKey(
   pattern: keyof typeof CACHE_KEY_PATTERNS,
   ...args: (string | number)[]
): string {
   return `${CACHE_KEY_PATTERNS[pattern]}${args.join(':')}`;
}

/**
 * Utility function to serialize complex objects for caching
 */
export function serializeForCache(data: any): string {
   return JSON.stringify(data, null, 0);
}

/**
 * Utility function to deserialize cached data
 */
export function deserializeFromCache<T = any>(data: string): T {
   return JSON.parse(data);
}
