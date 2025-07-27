import type { Task, Subtask, TaskDependency } from '../generated/prisma';
import { PrismaClient } from '../generated/prisma';
import type {
   ModelOperations,
   BaseFilterOptions,
   OrderByOptions,
   PaginationOptions,
   Status,
   Priority,
} from './types';
import { BaseModelClass, ValidationHelper } from './types';

// Task with all relations included
export interface TaskWithRelations extends Task {
   subtasks: Subtask[];
   dependencies: (TaskDependency & { dependsOn: Task })[];
   dependents: (TaskDependency & { task: Task })[];
}

// Data transfer objects
export interface CreateTaskData {
   id: number;
   title: string;
   description: string;
   details?: string;
   testStrategy?: string;
   priority?: Priority;
   status?: Status;
   complexity?: number;
   dependencies?: number[];
}

export interface UpdateTaskData {
   title?: string;
   description?: string;
   details?: string;
   testStrategy?: string;
   priority?: Priority;
   status?: Status;
   complexity?: number;
   dependencies?: number[];
}

export interface TaskFilterOptions extends BaseFilterOptions {
   status?: Status[];
   priority?: Priority[];
   hasSubtasks?: boolean;
   hasDependencies?: boolean;
   parentId?: number;
}

export type TaskOrderByField = 'id' | 'title' | 'status' | 'priority' | 'createdAt' | 'updatedAt';

export class TaskModel
   extends BaseModelClass
   implements ModelOperations<TaskWithRelations, CreateTaskData, UpdateTaskData, TaskFilterOptions>
{
   private readonly includeRelations = {
      subtasks: true,
      dependencies: {
         include: { dependsOn: true },
      },
      dependents: {
         include: { task: true },
      },
   };

   async create(data: CreateTaskData): Promise<TaskWithRelations> {
      try {
         this.validateCreateData(data);

         const existingTask = await this.prisma.task.findUnique({
            where: { id: data.id },
         });

         if (existingTask) {
            throw new Error(`Task with ID ${data.id} already exists`);
         }

         // Create task without dependencies first
         const task = await this.prisma.task.create({
            data: {
               id: data.id,
               title: data.title,
               description: data.description,
               details: data.details,
               testStrategy: data.testStrategy,
               priority: data.priority || 'medium',
               status: data.status || 'pending',
               complexity: data.complexity,
            },
         });

         // Add dependencies if provided
         if (data.dependencies?.length) {
            await this.addDependencies(data.id, data.dependencies);
         }

         return this.findById(task.id);
      } catch (error) {
         this.handleError('create task', error);
      }
   }

   async update(id: number, data: UpdateTaskData): Promise<TaskWithRelations | null> {
      try {
         const existingTask = await this.prisma.task.findUnique({ where: { id } });

         if (!existingTask) {
            return null;
         }

         // Handle dependencies separately
         if (data.dependencies !== undefined) {
            await this.updateDependencies(id, data.dependencies);
         }

         // Update task data (excluding dependencies)
         const { dependencies, ...updateData } = data;

         if (Object.keys(updateData).length > 0) {
            await this.prisma.task.update({
               where: { id },
               data: updateData,
            });
         }

         return this.findById(id);
      } catch (error) {
         this.handleError('update task', error);
      }
   }

   async delete(id: number): Promise<boolean> {
      try {
         const task = await this.prisma.task.findUnique({ where: { id } });

         if (!task) {
            return false;
         }

         // Dependencies are automatically deleted due to cascade
         await this.prisma.task.delete({ where: { id } });

         return true;
      } catch (error) {
         this.handleError('delete task', error);
      }
   }

   async findById(id: number): Promise<TaskWithRelations | null> {
      try {
         const task = await this.prisma.task.findUnique({
            where: { id },
            include: this.includeRelations,
         });

         return task;
      } catch (error) {
         this.handleError('find task by ID', error);
      }
   }

   async findMany(options?: {
      filter?: TaskFilterOptions;
      orderBy?: OrderByOptions<TaskOrderByField>[];
      pagination?: PaginationOptions;
   }): Promise<TaskWithRelations[]> {
      try {
         const where = this.buildTaskWhereClause(options?.filter);
         const orderBy = this.buildOrderByClause(options?.orderBy);
         const pagination = this.buildPaginationClause(options?.pagination);

         const tasks = await this.prisma.task.findMany({
            where,
            orderBy,
            ...pagination,
            include: this.includeRelations,
         });

         return tasks;
      } catch (error) {
         this.handleError('find tasks', error);
      }
   }

   // Convenience methods
   async findByStatus(status: Status): Promise<TaskWithRelations[]> {
      return this.findMany({ filter: { status: [status] } });
   }

   async findByPriority(priority: Priority): Promise<TaskWithRelations[]> {
      return this.findMany({ filter: { priority: [priority] } });
   }

   async search(query: string): Promise<TaskWithRelations[]> {
      return this.findMany({ filter: { search: query } });
   }

   async updateStatus(id: number, status: Status): Promise<TaskWithRelations | null> {
      return this.update(id, { status });
   }

   // Dependency management
   async addDependency(taskId: number, dependsOnId: number): Promise<boolean> {
      try {
         const existing = await this.prisma.taskDependency.findUnique({
            where: { taskId_dependsOnId: { taskId, dependsOnId } },
         });

         if (existing) {
            return true;
         }

         await this.prisma.taskDependency.create({
            data: { taskId, dependsOnId },
         });

         return true;
      } catch (error) {
         this.handleError('add task dependency', error);
      }
   }

   async removeDependency(taskId: number, dependsOnId: number): Promise<boolean> {
      try {
         await this.prisma.taskDependency.delete({
            where: { taskId_dependsOnId: { taskId, dependsOnId } },
         });

         return true;
      } catch (error) {
         // If dependency doesn't exist, consider it successfully removed
         return true;
      }
   }

   // Private helper methods
   private validateCreateData(data: CreateTaskData): void {
      if (!ValidationHelper.isValidId(data.id)) {
         throw new Error('Task ID is required');
      }

      if (!ValidationHelper.isNotEmpty(data.title)) {
         throw new Error('Task title is required');
      }

      if (!ValidationHelper.isNotEmpty(data.description)) {
         throw new Error('Task description is required');
      }
   }

   private buildTaskWhereClause(filter?: TaskFilterOptions): any {
      const where = this.buildWhereClause({
         ...filter,
         searchFields: ['title', 'description', 'details'],
      });

      if (!filter) return where;

      // Status filter
      if (filter.status?.length) {
         where.status = { in: filter.status };
      }

      // Priority filter
      if (filter.priority?.length) {
         where.priority = { in: filter.priority };
      }

      // Subtasks filter
      if (filter.hasSubtasks !== undefined) {
         where.subtasks = filter.hasSubtasks ? { some: {} } : { none: {} };
      }

      // Dependencies filter
      if (filter.hasDependencies !== undefined) {
         where.dependencies = filter.hasDependencies ? { some: {} } : { none: {} };
      }

      return where;
   }

   private async addDependencies(taskId: number, dependencyIds: number[]): Promise<void> {
      if (!dependencyIds.length) return;

      await this.prisma.taskDependency.createMany({
         data: dependencyIds.map((depId) => ({ taskId, dependsOnId: depId })),
         skipDuplicates: true,
      });
   }

   private async updateDependencies(taskId: number, dependencyIds: number[]): Promise<void> {
      // Remove existing dependencies
      await this.prisma.taskDependency.deleteMany({
         where: { taskId },
      });

      // Add new dependencies
      await this.addDependencies(taskId, dependencyIds);
   }
}
