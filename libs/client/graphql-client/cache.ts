/**
 * GraphQL Client - Simple caching layer
 */

export interface CacheEntry<T = any> {
   data: T;
   timestamp: number;
   ttl: number; // Time to live in milliseconds
}

export interface CacheOptions {
   ttl?: number; // Default TTL in milliseconds
   maxSize?: number; // Maximum number of entries
}

export class GraphQLCache {
   private cache = new Map<string, CacheEntry>();
   private defaultTTL: number;
   private maxSize: number;

   constructor(options: CacheOptions = {}) {
      this.defaultTTL = options.ttl || 5 * 60 * 1000; // 5 minutes default
      this.maxSize = options.maxSize || 100;
   }

   /**
    * Generate a cache key from query and variables
    */
   private generateKey(query: string, variables?: Record<string, any>): string {
      const variablesStr = variables ? JSON.stringify(variables) : '';
      return `${query}:${variablesStr}`;
   }

   /**
    * Check if a cache entry is valid (not expired)
    */
   private isValid(entry: CacheEntry): boolean {
      return Date.now() - entry.timestamp < entry.ttl;
   }

   /**
    * Clean up expired entries
    */
   private cleanup(): void {
      const now = Date.now();
      for (const [key, entry] of this.cache.entries()) {
         if (now - entry.timestamp >= entry.ttl) {
            this.cache.delete(key);
         }
      }
   }

   /**
    * Ensure cache doesn't exceed max size
    */
   private enforceMaxSize(): void {
      if (this.cache.size <= this.maxSize) return;

      // Remove oldest entries first
      const entries = Array.from(this.cache.entries());
      entries.sort(([, a], [, b]) => a.timestamp - b.timestamp);

      const entriesToRemove = entries.slice(0, this.cache.size - this.maxSize);
      for (const [key] of entriesToRemove) {
         this.cache.delete(key);
      }
   }

   /**
    * Get cached data for a query
    */
   get<T = any>(query: string, variables?: Record<string, any>): T | null {
      const key = this.generateKey(query, variables);
      const entry = this.cache.get(key);

      if (!entry) return null;

      if (!this.isValid(entry)) {
         this.cache.delete(key);
         return null;
      }

      return entry.data;
   }

   /**
    * Set cached data for a query
    */
   set<T = any>(query: string, data: T, variables?: Record<string, any>, ttl?: number): void {
      const key = this.generateKey(query, variables);
      const entry: CacheEntry<T> = {
         data,
         timestamp: Date.now(),
         ttl: ttl || this.defaultTTL,
      };

      this.cache.set(key, entry);

      // Maintain cache size and cleanliness
      this.enforceMaxSize();

      // Periodically cleanup expired entries
      if (Math.random() < 0.1) {
         // 10% chance to cleanup on each set
         this.cleanup();
      }
   }

   /**
    * Invalidate cached data for specific query
    */
   invalidate(query: string, variables?: Record<string, any>): void {
      const key = this.generateKey(query, variables);
      this.cache.delete(key);
   }

   /**
    * Invalidate all cached data matching a pattern
    */
   invalidatePattern(pattern: string): void {
      for (const key of this.cache.keys()) {
         if (key.includes(pattern)) {
            this.cache.delete(key);
         }
      }
   }

   /**
    * Clear all cached data
    */
   clear(): void {
      this.cache.clear();
   }

   /**
    * Get cache statistics
    */
   getStats(): {
      size: number;
      maxSize: number;
      hitRate: number;
      entries: { key: string; timestamp: number; ttl: number; valid: boolean }[];
   } {
      const entries = Array.from(this.cache.entries()).map(([key, entry]) => ({
         key,
         timestamp: entry.timestamp,
         ttl: entry.ttl,
         valid: this.isValid(entry),
      }));

      return {
         size: this.cache.size,
         maxSize: this.maxSize,
         hitRate: 0, // Would need hit/miss tracking for accurate hit rate
         entries,
      };
   }

   /**
    * Update cache configuration
    */
   updateConfig(options: CacheOptions): void {
      if (options.ttl !== undefined) {
         this.defaultTTL = options.ttl;
      }
      if (options.maxSize !== undefined) {
         this.maxSize = options.maxSize;
         this.enforceMaxSize();
      }
   }
}

// Default cache instance
export const defaultCache = new GraphQLCache({
   ttl: 5 * 60 * 1000, // 5 minutes
   maxSize: 100,
});

/**
 * Cache-enabled GraphQL client wrapper
 */
import type { GraphQLResponse } from './client';
import { GraphQLClient } from './client';

export class CachedGraphQLClient extends GraphQLClient {
   private cache: GraphQLCache;

   constructor(client: GraphQLClient, cache?: GraphQLCache) {
      super(client.getConfig());
      this.cache = cache || defaultCache;
   }

   async query<T = any>(
      query: string,
      variables?: Record<string, any>,
      options?: {
         headers?: Record<string, string>;
         timeout?: number;
         useCache?: boolean;
         cacheTTL?: number;
      }
   ): Promise<GraphQLResponse<T>> {
      const useCache = options?.useCache !== false; // Default to true

      // Try cache first
      if (useCache) {
         const cachedData = this.cache.get<GraphQLResponse<T>>(query, variables);
         if (cachedData) {
            return cachedData;
         }
      }

      // Execute query
      const response = await super.query<T>(query, variables, options);

      // Cache successful responses
      if (useCache && response.data && !response.errors) {
         this.cache.set(query, response, variables, options?.cacheTTL);
      }

      return response;
   }

   /**
    * Invalidate cache for specific queries
    */
   invalidateCache(query?: string, variables?: Record<string, any>): void {
      if (query) {
         this.cache.invalidate(query, variables);
      } else {
         this.cache.clear();
      }
   }

   /**
    * Get cache instance
    */
   getCache(): GraphQLCache {
      return this.cache;
   }
}
