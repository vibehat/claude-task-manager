/**
 * DISABLED Redis Cache Stubs
 *
 * This file provides no-op implementations to replace Redis functionality
 * when Redis is not available or disabled.
 */

// Stub cache implementation using in-memory Map
export class RedisCache {
   private cache = new Map<string, { value: string; expires: number }>();

   async get(key: string): Promise<string | undefined> {
      const item = this.cache.get(key);
      if (!item) return undefined;

      if (Date.now() > item.expires) {
         this.cache.delete(key);
         return undefined;
      }

      return item.value;
   }

   async set(key: string, value: string, options?: { ttl?: number }): Promise<void> {
      const ttl = options?.ttl || 3600; // 1 hour default
      const expires = Date.now() + ttl * 1000;
      this.cache.set(key, { value, expires });
   }

   async delete(key: string): Promise<boolean> {
      return this.cache.delete(key);
   }

   async deletePattern(pattern: string): Promise<number> {
      // Simple pattern matching - only supports prefix patterns
      const prefix = pattern.replace('*', '');
      let count = 0;

      for (const key of this.cache.keys()) {
         if (key.startsWith(prefix)) {
            this.cache.delete(key);
            count++;
         }
      }

      return count;
   }

   async exists(key: string): Promise<boolean> {
      return this.cache.has(key);
   }

   async flush(): Promise<void> {
      this.cache.clear();
   }

   async close(): Promise<void> {
      // No-op for in-memory cache
   }

   getStats() {
      return {
         hits: 0,
         misses: 0,
         errors: 0,
         hitRatio: 0,
         totalRequests: 0,
      };
   }
}

// Global disabled cache instance
let disabledCacheInstance: RedisCache | null = null;

export function getRedisCache(config?: any): RedisCache {
   if (!disabledCacheInstance) {
      disabledCacheInstance = new RedisCache();
      console.warn('Redis is disabled - using in-memory cache fallback');
   }
   return disabledCacheInstance;
}

// Disabled cache invalidation manager
export class CacheInvalidationManager {
   constructor(cache: any) {
      console.warn('Redis cache invalidation disabled');
   }

   async invalidateTask(taskId: number): Promise<void> {
      // No-op
   }

   async invalidateTaskLists(): Promise<void> {
      // No-op
   }

   async invalidateGraphQLQueries(): Promise<void> {
      // No-op
   }

   async invalidateCLIStatus(): Promise<void> {
      // No-op
   }
}

export function createCacheInvalidationManager(cache?: any): CacheInvalidationManager {
   return new CacheInvalidationManager(cache);
}

// Cache key patterns (kept for compatibility)
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

export function generateCacheKey(
   pattern: keyof typeof CACHE_KEY_PATTERNS,
   ...args: (string | number)[]
): string {
   return `${CACHE_KEY_PATTERNS[pattern]}${args.join(':')}`;
}

export function serializeForCache(data: any): string {
   return JSON.stringify(data, null, 0);
}

export function deserializeFromCache<T = any>(data: string): T {
   return JSON.parse(data);
}
