/**
 * Task Master Database Operations
 *
 * Provides database query operations using Prisma client.
 * Focus on read operations and basic database interaction.
 */

import { PrismaClient } from '@prisma/client';
import type { TaskStatus, TaskPriority } from '../types/taskmaster';

import type {
   TaskMasterDBOptions,
   TaskQueryFilters,
   TaskOrderBy,
   TaskWithTimestamps,
} from './types';
import { TaskMasterDBError } from './types';

export class TaskMasterDB {
   private prisma: PrismaClient;

   constructor(prisma?: PrismaClient) {
      this.prisma = prisma || new PrismaClient();
   }

   /**
    * Get all tasks with optional filtering and ordering
    */
   async getTasks(
      filters: TaskQueryFilters = {},
      orderBy?: TaskOrderBy,
      options: TaskMasterDBOptions = {}
   ): Promise<TaskWithTimestamps[]> {
      try {
         const where = this.buildWhereClause(filters);
         const include = {
            subtasks: options.includeSubtasks !== false,
            dependencies: {
               include: {
                  dependsOn: {
                     select: { id: true, title: true, status: true },
                  },
               },
            },
         };

         const tasks = await this.prisma.task.findMany({
            where,
            include,
            orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : { id: 'asc' },
            take: options.limit,
            skip: options.offset,
         });

         return tasks.map((task) => this.transformTaskFromDB(task));
      } catch (error) {
         throw new TaskMasterDBError(`Failed to fetch tasks: ${error}`, 'QUERY_ERROR', error);
      }
   }

   /**
    * Get a single task by ID
    */
   async getTask(
      id: number,
      options: TaskMasterDBOptions = {}
   ): Promise<TaskWithTimestamps | null> {
      try {
         const include = {
            subtasks: options.includeSubtasks !== false,
            dependencies: {
               include: {
                  dependsOn: {
                     select: { id: true, title: true, status: true },
                  },
               },
            },
         };

         const task = await this.prisma.task.findUnique({
            where: { id },
            include,
         });

         return task ? this.transformTaskFromDB(task) : null;
      } catch (error) {
         throw new TaskMasterDBError(`Failed to fetch task ${id}: ${error}`, 'QUERY_ERROR', error);
      }
   }

   /**
    * Get subtasks for a specific task
    */
   async getSubtasks(parentId: number): Promise<any[]> {
      try {
         const subtasks = await this.prisma.subtask.findMany({
            where: { parentId },
            orderBy: { id: 'asc' },
         });

         return subtasks.map((subtask) => ({
            id: subtask.id.split('.')[1], // Extract subtask number from "parentId.subtaskId"
            fullId: subtask.id,
            title: subtask.title,
            description: subtask.description,
            details: subtask.details,
            testStrategy: subtask.testStrategy,
            status: subtask.status,
            dependencies: JSON.parse(subtask.dependencies),
            createdAt: subtask.createdAt,
            updatedAt: subtask.updatedAt,
         }));
      } catch (error) {
         throw new TaskMasterDBError(
            `Failed to fetch subtasks for task ${parentId}: ${error}`,
            'QUERY_ERROR',
            error
         );
      }
   }

   /**
    * Get tasks by status
    */
   async getTasksByStatus(
      status: TaskStatus,
      options: TaskMasterDBOptions = {}
   ): Promise<TaskWithTimestamps[]> {
      return this.getTasks({ status }, undefined, options);
   }

   /**
    * Get tasks by priority
    */
   async getTasksByPriority(
      priority: TaskPriority,
      options: TaskMasterDBOptions = {}
   ): Promise<TaskWithTimestamps[]> {
      return this.getTasks({ priority }, undefined, options);
   }

   /**
    * Search tasks by text in title and description
    */
   async searchTasks(
      searchText: string,
      options: TaskMasterDBOptions = {}
   ): Promise<TaskWithTimestamps[]> {
      return this.getTasks({ search: searchText }, undefined, options);
   }

   /**
    * Get tasks that are ready to work on (no unmet dependencies)
    */
   async getReadyTasks(options: TaskMasterDBOptions = {}): Promise<TaskWithTimestamps[]> {
      try {
         // Find tasks that either have no dependencies or all dependencies are completed
         const tasks = await this.prisma.task.findMany({
            include: {
               subtasks: options.includeSubtasks !== false,
               dependencies: {
                  include: {
                     dependsOn: true,
                  },
               },
            },
            take: options.limit,
            skip: options.offset,
         });

         // Filter to only include tasks with no pending dependencies
         const readyTasks = tasks.filter((task) => {
            if (task.dependencies.length === 0) return true;
            return task.dependencies.every((dep) => dep.dependsOn.status === 'done');
         });

         return readyTasks.map((task) => this.transformTaskFromDB(task));
      } catch (error) {
         throw new TaskMasterDBError(`Failed to fetch ready tasks: ${error}`, 'QUERY_ERROR', error);
      }
   }

   /**
    * Get database statistics
    */
   async getStats(): Promise<{
      totalTasks: number;
      tasksByStatus: Record<TaskStatus, number>;
      tasksByPriority: Record<TaskPriority, number>;
      totalSubtasks: number;
   }> {
      try {
         const [totalTasks, totalSubtasks, statusCounts, priorityCounts] = await Promise.all([
            this.prisma.task.count(),
            this.prisma.subtask.count(),
            this.prisma.task.groupBy({
               by: ['status'],
               _count: true,
            }),
            this.prisma.task.groupBy({
               by: ['priority'],
               _count: true,
            }),
         ]);

         const tasksByStatus = {} as Record<TaskStatus, number>;
         const tasksByPriority = {} as Record<TaskPriority, number>;

         statusCounts.forEach((item) => {
            tasksByStatus[item.status as TaskStatus] = item._count;
         });

         priorityCounts.forEach((item) => {
            tasksByPriority[item.priority as TaskPriority] = item._count;
         });

         return {
            totalTasks,
            totalSubtasks,
            tasksByStatus,
            tasksByPriority,
         };
      } catch (error) {
         throw new TaskMasterDBError(`Failed to fetch statistics: ${error}`, 'QUERY_ERROR', error);
      }
   }

   /**
    * Build WHERE clause for Prisma queries based on filters
    */
   private buildWhereClause(filters: TaskQueryFilters): any {
      const where: any = {};

      if (filters.status) {
         where.status = Array.isArray(filters.status) ? { in: filters.status } : filters.status;
      }

      if (filters.priority) {
         where.priority = Array.isArray(filters.priority)
            ? { in: filters.priority }
            : filters.priority;
      }

      if (filters.ids) {
         where.id = { in: filters.ids };
      }

      if (filters.search) {
         where.OR = [
            { title: { contains: filters.search, mode: 'insensitive' } },
            { description: { contains: filters.search, mode: 'insensitive' } },
         ];
      }

      if (filters.hasDependencies !== undefined) {
         if (filters.hasDependencies) {
            where.dependencies = { some: {} };
         } else {
            where.dependencies = { none: {} };
         }
      }

      if (filters.hasSubtasks !== undefined) {
         if (filters.hasSubtasks) {
            where.subtasks = { some: {} };
         } else {
            where.subtasks = { none: {} };
         }
      }

      return where;
   }

   /**
    * Transform database task to application format
    */
   private transformTaskFromDB(dbTask: any): TaskWithTimestamps {
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
    * Get count of tasks matching filters (for pagination)
    */
   async getTaskCount(filters: TaskQueryFilters = {}): Promise<number> {
      try {
         const where = this.buildWhereClause(filters);
         return await this.prisma.task.count({ where });
      } catch (error) {
         throw new TaskMasterDBError(`Failed to count tasks: ${error}`, 'QUERY_ERROR', error);
      }
   }

   /**
    * Check database connection
    */
   async healthCheck(): Promise<boolean> {
      try {
         await this.prisma.$queryRaw`SELECT 1`;
         return true;
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
         return false;
      }
   }

   /**
    * Close database connection
    */
   async disconnect(): Promise<void> {
      await this.prisma.$disconnect();
   }
}
