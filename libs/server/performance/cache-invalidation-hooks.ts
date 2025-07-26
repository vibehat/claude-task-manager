/**
 * Cache Invalidation Hooks
 *
 * Provides automatic cache invalidation when data changes through mutations
 * or external operations.
 */

import { createCacheInvalidationManager, getRedisCache } from './redis-cache';
import { FieldCacheManager } from './field-cache';

/**
 * Cache invalidation hooks for different mutation types
 */
export class CacheInvalidationHooks {
   private invalidationManager = createCacheInvalidationManager();
   private fieldCacheManager = new FieldCacheManager();

   /**
    * Hook to call after task mutations
    */
   async afterTaskMutation(
      mutationType: 'create' | 'update' | 'delete' | 'status_change',
      taskId: number,
      oldData?: any,
      newData?: any
   ): Promise<void> {
      console.log(`Invalidating cache after ${mutationType} for task ${taskId}`);

      // Invalidate specific task caches
      await this.invalidationManager.invalidateTask(taskId);

      // Invalidate related list caches
      await this.invalidationManager.invalidateTaskLists();

      // Invalidate GraphQL query caches
      await this.invalidationManager.invalidateGraphQLQueries();

      // If status changed, also invalidate ready tasks
      if (mutationType === 'status_change') {
         await this.fieldCacheManager.invalidateRelatedCaches('tasks');
      }
   }

   /**
    * Hook to call after CLI operations
    */
   async afterCLIOperation(
      operation: string,
      success: boolean,
      affectedTasks?: number[]
   ): Promise<void> {
      console.log(`Invalidating cache after CLI operation: ${operation}`);

      // Always invalidate CLI status
      await this.invalidationManager.invalidateCLIStatus();

      if (success && affectedTasks && affectedTasks.length > 0) {
         // Invalidate specific task caches
         for (const taskId of affectedTasks) {
            await this.invalidationManager.invalidateTask(taskId);
         }

         // Invalidate task lists
         await this.invalidationManager.invalidateTaskLists();
      }
   }

   /**
    * Hook to call after sync operations
    */
   async afterSyncOperation(
      syncType: 'full' | 'incremental',
      changedTaskIds?: number[]
   ): Promise<void> {
      console.log(`Invalidating cache after ${syncType} sync`);

      if (syncType === 'full') {
         // Full sync - invalidate everything
         await this.invalidateAllCaches();
      } else if (changedTaskIds && changedTaskIds.length > 0) {
         // Incremental sync - invalidate only changed tasks
         for (const taskId of changedTaskIds) {
            await this.invalidationManager.invalidateTask(taskId);
         }
         await this.invalidationManager.invalidateTaskLists();
      }
   }

   /**
    * Hook to call after data import/export operations
    */
   async afterDataOperation(operation: 'import' | 'export', scope: 'tasks' | 'all'): Promise<void> {
      console.log(`Invalidating cache after ${operation} of ${scope}`);

      if (operation === 'import') {
         if (scope === 'all') {
            await this.invalidateAllCaches();
         } else {
            await this.invalidationManager.invalidateTaskLists();
            await this.invalidationManager.invalidateGraphQLQueries();
         }
      }
      // Export operations don't affect cache
   }

   /**
    * Invalidate all caches (nuclear option)
    */
   async invalidateAllCaches(): Promise<void> {
      console.log('Performing full cache invalidation');

      const cache = getRedisCache();

      // Use Redis FLUSHDB to clear all data at once
      await cache.flush();

      console.log('All caches invalidated');
   }

   /**
    * Selective cache warming after invalidation
    */
   async warmCriticalCaches(): Promise<void> {
      console.log('Warming critical caches after invalidation');

      // This would typically pre-load frequently accessed data
      // Implementation depends on your specific use case

      try {
         // Example: Pre-load ready tasks
         const taskMasterDB = new (require('../taskmaster').TaskMasterDB)();
         const readyTasks = await taskMasterDB.getReadyTasks({ limit: 10 });

         if (readyTasks.length > 0) {
            await this.fieldCacheManager.cacheTaskOperation(
               'ready',
               'default',
               readyTasks,
               600 // 10 minutes
            );
         }

         console.log('Critical cache warming completed');
      } catch (error) {
         console.error('Critical cache warming failed:', error);
      }
   }
}

/**
 * Default cache invalidation hooks instance
 */
export const defaultCacheInvalidationHooks = new CacheInvalidationHooks();

/**
 * Middleware function to automatically invalidate caches after mutations
 */
export function withCacheInvalidation<T>(mutationType: 'task' | 'cli' | 'sync', operation: string) {
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;

      descriptor.value = async function (...args: any[]) {
         try {
            // Execute the original mutation
            const result = await originalMethod.apply(this, args);

            // Perform cache invalidation based on mutation type
            switch (mutationType) {
               case 'task':
                  if (result && typeof result === 'object' && result.id) {
                     await defaultCacheInvalidationHooks.afterTaskMutation(
                        operation as any,
                        result.id,
                        args[1], // old data
                        result // new data
                     );
                  }
                  break;

               case 'cli':
                  const success = result && !result.error;
                  const affectedTasks = result?.affectedTasks || [];
                  await defaultCacheInvalidationHooks.afterCLIOperation(
                     operation,
                     success,
                     affectedTasks
                  );
                  break;

               case 'sync':
                  const changedTaskIds = result?.changedTasks || [];
                  await defaultCacheInvalidationHooks.afterSyncOperation(
                     operation as any,
                     changedTaskIds
                  );
                  break;
            }

            return result;
         } catch (error) {
            // Even if the mutation fails, we might need to invalidate some caches
            console.error(`Mutation ${propertyKey} failed:`, error);
            throw error;
         }
      };

      return descriptor;
   };
}

/**
 * Express/Next.js middleware for cache invalidation
 */
export function createCacheInvalidationMiddleware() {
   return async (req: any, res: any, next: any) => {
      // Store original res.json to intercept successful responses
      const originalJson = res.json;

      res.json = function (data: any) {
         // Check if this was a mutation that affects cache
         if (req.method === 'POST' && req.url?.includes('/graphql')) {
            const query = req.body?.query || '';

            if (query.includes('mutation')) {
               // Extract mutation type and perform invalidation
               // This is a simplified example - you'd want more sophisticated parsing
               if (query.includes('updateTaskStatus')) {
                  defaultCacheInvalidationHooks.afterTaskMutation('status_change', 0);
               } else if (query.includes('executeCliCommand')) {
                  defaultCacheInvalidationHooks.afterCLIOperation('command', true);
               }
            }
         }

         return originalJson.call(this, data);
      };

      next();
   };
}

/**
 * Scheduled cache maintenance
 */
export class CacheMaintenanceScheduler {
   private invalidationHooks = new CacheInvalidationHooks();
   private intervalId: NodeJS.Timeout | null = null;

   /**
    * Start scheduled cache maintenance
    */
   start(intervalMinutes: number = 60): void {
      if (this.intervalId) {
         console.warn('Cache maintenance already scheduled');
         return;
      }

      this.intervalId = setInterval(
         async () => {
            try {
               console.log('Running scheduled cache maintenance');

               // Get cache statistics
               const cache = getRedisCache();
               const stats = cache.getStats();

               console.log('Cache stats:', stats);

               // If hit ratio is very low, consider warming critical caches
               if (stats.hitRatio < 0.3 && stats.totalRequests > 100) {
                  console.log('Low cache hit ratio detected, warming critical caches');
                  await this.invalidationHooks.warmCriticalCaches();
               }

               // Reset statistics periodically
               if (stats.totalRequests > 10000) {
                  cache.resetStats();
                  console.log('Cache statistics reset');
               }
            } catch (error) {
               console.error('Cache maintenance failed:', error);
            }
         },
         intervalMinutes * 60 * 1000
      );

      console.log(`Cache maintenance scheduled every ${intervalMinutes} minutes`);
   }

   /**
    * Stop scheduled cache maintenance
    */
   stop(): void {
      if (this.intervalId) {
         clearInterval(this.intervalId);
         this.intervalId = null;
         console.log('Cache maintenance stopped');
      }
   }
}

/**
 * Default cache maintenance scheduler
 */
export const defaultCacheMaintenanceScheduler = new CacheMaintenanceScheduler();
