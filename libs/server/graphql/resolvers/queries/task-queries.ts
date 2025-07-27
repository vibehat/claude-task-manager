import { TaskMasterFileOperations } from '../../../core';
import { TaskMasterDB } from '../../../taskmaster';
import { transformTask, transformTaskFromDB } from '../shared/helpers';
import type { GraphQLContext } from '../../context';
import {
   defaultResolverCache,
   generateCacheKey,
   CACHE_KEY_PATTERNS,
} from '../../../performance/field-cache';

// Initialize TaskMaster instances
const taskMasterDB = new TaskMasterDB();

export const taskQueries = {
   // Task queries - Enhanced with lib/taskmaster integration and DataLoader
   tasks: async (
      _: any,
      {
         filter,
         orderBy,
         pagination,
      }: {
         filter?: any;
         orderBy?: any;
         pagination?: any;
      },
      context: GraphQLContext
   ) => {
      const queryParams = { filter, orderBy, pagination };
      const complexity = (filter?.search ? 3 : 1) + (orderBy ? 2 : 0);

      return defaultResolverCache.cacheTaskQuery(
         'list',
         queryParams,
         async () => {
            try {
               // For simple status-based queries, use DataLoader for better caching
               if (filter?.status && !filter.search && !filter.ids && !orderBy) {
                  const statusFilter = Array.isArray(filter.status)
                     ? filter.status[0]
                     : filter.status;
                  const tasks = await context.dataloaders.tasksByStatus.load(statusFilter);

                  // Apply client-side pagination if needed
                  const start = pagination?.offset || 0;
                  const limit = pagination?.first || pagination?.limit;
                  return limit ? tasks.slice(start, start + limit) : tasks.slice(start);
               }

               // Try to use database first, fall back to file operations
               try {
                  const dbTasks = await context.taskMasterDB.getTasks(filter || {}, orderBy, {
                     limit: pagination?.first || pagination?.limit,
                     offset: pagination?.offset || 0,
                     includeSubtasks: true,
                  });
                  return dbTasks.map(transformTaskFromDB);
               } catch (dbError) {
                  console.warn('Database query failed, falling back to file operations:', dbError);
                  // Fallback to file operations
                  const tasksData = await TaskMasterFileOperations.readTasks();
                  return tasksData.master.tasks.map(transformTask);
               }
            } catch (error) {
               console.error('Error fetching tasks:', error);
               return [];
            }
         },
         complexity
      );
   },

   task: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      const taskId = parseInt(id);
      if (isNaN(taskId)) {
         throw new Error('Invalid task ID');
      }

      return defaultResolverCache.cacheTaskQuery(
         'single',
         { id: taskId },
         async () => {
            try {
               // Use DataLoader for single task queries to benefit from caching
               try {
                  const task = await context.dataloaders.taskById.load(taskId);
                  return task;
               } catch (dbError) {
                  console.warn(
                     'DataLoader query failed, falling back to file operations:',
                     dbError
                  );
                  // Fallback to file operations
                  const tasksData = await TaskMasterFileOperations.readTasks();
                  const task = tasksData.master.tasks.find((t) => t.id === taskId);
                  return task ? transformTask(task) : null;
               }
            } catch (error) {
               console.error('Error fetching task:', error);
               return null;
            }
         },
         2 // Single task queries have moderate complexity
      );
   },

   readyTasks: async (_: any, { limit = 20 }: { limit?: number }, context: GraphQLContext) => {
      return defaultResolverCache.cacheTaskQuery(
         'ready',
         { limit },
         async () => {
            try {
               const dbTasks = await context.taskMasterDB.getReadyTasks({
                  limit,
                  includeSubtasks: true,
               });
               return dbTasks.map(transformTaskFromDB);
            } catch (error) {
               console.error('Error fetching ready tasks:', error);
               return [];
            }
         },
         4 // Ready tasks require dependency calculation, higher complexity
      );
   },
};
