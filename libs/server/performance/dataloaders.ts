/**
 * DataLoader instances for preventing N+1 queries
 *
 * Provides batching and caching for commonly queried entities
 */

import * as DataLoader from 'dataloader';
import type { PrismaClient } from '../generated/prisma';
import type { TaskWithTimestamps } from '../taskmaster/types';

export interface DataLoaders {
   taskById: DataLoader<number, TaskWithTimestamps | null>;
   subtasksByTaskId: DataLoader<number, any[]>;
   tasksByStatus: DataLoader<string, TaskWithTimestamps[]>;
   tasksByIds: DataLoader<number[], TaskWithTimestamps[]>;
   dependenciesByTaskId: DataLoader<number, any[]>;
}

/**
 * Creates DataLoader instances for efficient database querying
 */
export function createDataLoaders(prisma: PrismaClient): DataLoaders {
   // Task by ID loader
   const taskById = new DataLoader.default<number, TaskWithTimestamps | null>(
      async (taskIds: readonly number[]) => {
         const tasks = await prisma.task.findMany({
            where: { id: { in: [...taskIds] } },
            include: {
               subtasks: true,
               dependencies: {
                  include: {
                     dependsOn: {
                        select: { id: true, title: true, status: true },
                     },
                  },
               },
            },
         });

         // Create a map for O(1) lookups
         const taskMap = new Map(tasks.map((task) => [task.id, transformTaskFromDB(task)]));

         // Return results in the same order as requested IDs
         return taskIds.map((id) => taskMap.get(id) || null);
      },
      {
         cache: true,
         maxBatchSize: 100,
      }
   );

   // Subtasks by parent task ID loader
   const subtasksByTaskId = new DataLoader.default<number, any[]>(
      async (parentIds: readonly number[]) => {
         const subtasks = await prisma.subtask.findMany({
            where: { parentId: { in: [...parentIds] } },
            orderBy: { id: 'asc' },
         });

         // Group subtasks by parent ID
         const subtasksByParent = new Map<number, any[]>();
         for (const parentId of parentIds) {
            subtasksByParent.set(parentId, []);
         }

         subtasks.forEach((subtask) => {
            const parentId = subtask.parentId;
            const existing = subtasksByParent.get(parentId) || [];
            existing.push({
               id: subtask.id.split('.')[1], // Extract subtask number
               fullId: subtask.id,
               title: subtask.title,
               description: subtask.description,
               details: subtask.details,
               testStrategy: subtask.testStrategy,
               status: subtask.status,
               dependencies: JSON.parse(subtask.dependencies),
               createdAt: subtask.createdAt,
               updatedAt: subtask.updatedAt,
            });
            subtasksByParent.set(parentId, existing);
         });

         return parentIds.map((id) => subtasksByParent.get(id) || []);
      },
      {
         cache: true,
         maxBatchSize: 50,
      }
   );

   // Tasks by status loader
   const tasksByStatus = new DataLoader.default<string, TaskWithTimestamps[]>(
      async (statuses: readonly string[]) => {
         const tasks = await prisma.task.findMany({
            where: { status: { in: [...statuses] } },
            include: {
               subtasks: true,
               dependencies: {
                  include: {
                     dependsOn: {
                        select: { id: true, title: true, status: true },
                     },
                  },
               },
            },
            orderBy: { id: 'asc' },
         });

         // Group tasks by status
         const tasksByStatusMap = new Map<string, TaskWithTimestamps[]>();
         for (const status of statuses) {
            tasksByStatusMap.set(status, []);
         }

         tasks.forEach((task) => {
            const existing = tasksByStatusMap.get(task.status) || [];
            existing.push(transformTaskFromDB(task));
            tasksByStatusMap.set(task.status, existing);
         });

         return statuses.map((status) => tasksByStatusMap.get(status) || []);
      },
      {
         cache: true,
         maxBatchSize: 20,
      }
   );

   // Batch tasks by multiple IDs loader (for complex queries)
   const tasksByIds = new DataLoader.default<number[], TaskWithTimestamps[]>(
      async (idArrays: readonly number[][]) => {
         // Flatten all IDs and get unique ones
         const flatIds = idArrays.reduce((acc, ids) => acc.concat(ids), []);
         const allIds = Array.from(new Set(flatIds));

         const tasks = await prisma.task.findMany({
            where: { id: { in: allIds } },
            include: {
               subtasks: true,
               dependencies: {
                  include: {
                     dependsOn: {
                        select: { id: true, title: true, status: true },
                     },
                  },
               },
            },
         });

         const taskMap = new Map(tasks.map((task) => [task.id, transformTaskFromDB(task)]));

         // Return arrays of tasks for each requested ID array
         return idArrays.map(
            (ids) => ids.map((id) => taskMap.get(id)).filter(Boolean) as TaskWithTimestamps[]
         );
      },
      {
         cache: true,
         maxBatchSize: 10,
         cacheKeyFn: (ids: number[]) => ids.sort().join(','),
      }
   );

   // Dependencies by task ID loader
   const dependenciesByTaskId = new DataLoader.default<number, any[]>(
      async (taskIds: readonly number[]) => {
         const dependencies = await prisma.taskDependency.findMany({
            where: { taskId: { in: [...taskIds] } },
            include: {
               dependsOn: {
                  select: { id: true, title: true, status: true },
               },
            },
         });

         // Group dependencies by task ID
         const depsByTaskId = new Map<number, any[]>();
         for (const taskId of taskIds) {
            depsByTaskId.set(taskId, []);
         }

         dependencies.forEach((dep) => {
            const existing = depsByTaskId.get(dep.taskId) || [];
            existing.push(dep);
            depsByTaskId.set(dep.taskId, existing);
         });

         return taskIds.map((id) => depsByTaskId.get(id) || []);
      },
      {
         cache: true,
         maxBatchSize: 50,
      }
   );

   return {
      taskById,
      subtasksByTaskId,
      tasksByStatus,
      tasksByIds,
      dependenciesByTaskId,
   };
}

/**
 * Transform database task to application format
 * (Extracted from TaskMasterDB for reuse)
 */
function transformTaskFromDB(dbTask: any): TaskWithTimestamps {
   return {
      id: dbTask.id,
      title: dbTask.title,
      description: dbTask.description,
      status: dbTask.status,
      priority: dbTask.priority,
      dependencies: dbTask.dependencies?.map((dep: any) => dep.dependsOnId) || [],
      details: dbTask.details,
      testStrategy: dbTask.testStrategy,
      complexity: dbTask.complexity,
      subtasks:
         dbTask.subtasks?.map((subtask: any) => ({
            id: parseInt(subtask.id.split('.')[1]), // Extract numeric part
            title: subtask.title,
            description: subtask.description,
            status: subtask.status,
            dependencies: JSON.parse(subtask.dependencies || '[]'),
            details: subtask.details,
            testStrategy: subtask.testStrategy,
         })) || [],
      createdAt: dbTask.createdAt,
      updatedAt: dbTask.updatedAt,
   };
}

/**
 * Clear all DataLoader caches (useful for testing or cache invalidation)
 */
export function clearDataLoaderCaches(loaders: DataLoaders): void {
   Object.values(loaders).forEach((loader) => {
      loader.clearAll();
   });
}
