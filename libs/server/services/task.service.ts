import {
   Task,
   TaskWithRelations,
   BaseServiceClass,
   BaseService,
   ServiceOptions,
   ValidationHelper,
   NotFoundError,
   ConflictError,
   Prisma,
} from './types';

// Create and Update data types using Prisma
export type CreateTaskData = Omit<
   Prisma.TaskCreateInput,
   'subtasks' | 'dependencies' | 'dependents' | 'issues'
> & {
   dependencies?: number[];
};

export type UpdateTaskData = Partial<CreateTaskData>;

// Filter options
export interface TaskFilterOptions {
   search?: string;
   ids?: number[];
   status?: string[];
   priority?: string[];
   hasSubtasks?: boolean;
   hasDependencies?: boolean;
   complexity?: {
      min?: number;
      max?: number;
   };
}

export type TaskOrderByField = keyof Pick<
   Task,
   'id' | 'title' | 'status' | 'priority' | 'createdAt' | 'updatedAt'
>;

export class TaskService
   extends BaseServiceClass
   implements BaseService<TaskWithRelations, CreateTaskData, UpdateTaskData, TaskFilterOptions>
{
   private readonly includeRelations = {
      subtasks: true,
      dependencies: {
         include: { dependsOn: true },
      },
      dependents: {
         include: { task: true },
      },
      issues: true,
   } as const;

   async create(data: CreateTaskData): Promise<TaskWithRelations> {
      try {
         this.validateCreateData(data);

         // Check if task with this ID already exists
         if (data.id) {
            const existing = await this.prisma.task.findUnique({
               where: { id: data.id },
            });

            if (existing) {
               throw new ConflictError(`Task with ID ${data.id} already exists`);
            }
         }

         // Extract dependencies from data
         const { dependencies, ...taskData } = data;

         // Create task first
         const task = await this.prisma.task.create({
            data: taskData,
            include: this.includeRelations,
         });

         // Add dependencies if provided
         if (dependencies?.length) {
            await this.addDependencies(task.id, dependencies);
            // Return updated task with dependencies
            return this.findById(task.id) as Promise<TaskWithRelations>;
         }

         return task;
      } catch (error) {
         this.handleError('create task', error);
      }
   }

   async update(id: number, data: UpdateTaskData): Promise<TaskWithRelations | null> {
      try {
         const existing = await this.prisma.task.findUnique({ where: { id } });

         if (!existing) {
            return null;
         }

         // Handle dependencies separately
         const { dependencies, ...updateData } = data;

         // Update task data
         if (Object.keys(updateData).length > 0) {
            await this.prisma.task.update({
               where: { id },
               data: updateData,
            });
         }

         // Update dependencies if provided
         if (dependencies !== undefined) {
            await this.updateDependencies(id, dependencies);
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

         // Prisma will handle cascade deletes for dependencies and subtasks
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

   async findMany(options?: ServiceOptions): Promise<TaskWithRelations[]> {
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
   async findByStatus(status: string): Promise<TaskWithRelations[]> {
      return this.findMany({ filter: { status: [status] } });
   }

   async findByPriority(priority: string): Promise<TaskWithRelations[]> {
      return this.findMany({ filter: { priority: [priority] } });
   }

   async search(query: string): Promise<TaskWithRelations[]> {
      return this.findMany({ filter: { search: query } });
   }

   async updateStatus(id: number, status: string): Promise<TaskWithRelations | null> {
      return this.update(id, { status });
   }

   async findWithComplexity(min?: number, max?: number): Promise<TaskWithRelations[]> {
      return this.findMany({
         filter: {
            complexity: { min, max },
         },
      });
   }

   // Dependency management
   async addDependency(taskId: number, dependsOnId: number): Promise<boolean> {
      try {
         // Check if both tasks exist
         const [task, dependsOn] = await Promise.all([
            this.prisma.task.findUnique({ where: { id: taskId } }),
            this.prisma.task.findUnique({ where: { id: dependsOnId } }),
         ]);

         if (!task) {
            throw new NotFoundError('Task', taskId);
         }

         if (!dependsOn) {
            throw new NotFoundError('Dependency task', dependsOnId);
         }

         // Check if dependency already exists
         const existing = await this.prisma.taskDependency.findUnique({
            where: { taskId_dependsOnId: { taskId, dependsOnId } },
         });

         if (existing) {
            return true; // Already exists
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
         await this.prisma.taskDependency.deleteMany({
            where: { taskId, dependsOnId },
         });
         return true;
      } catch (error) {
         // Consider successful if dependency doesn't exist
         return true;
      }
   }

   async getDependencies(taskId: number): Promise<Task[]> {
      try {
         const dependencies = await this.prisma.taskDependency.findMany({
            where: { taskId },
            include: { dependsOn: true },
         });

         return dependencies.map((dep) => dep.dependsOn);
      } catch (error) {
         this.handleError('get task dependencies', error);
      }
   }

   async getDependents(taskId: number): Promise<Task[]> {
      try {
         const dependents = await this.prisma.taskDependency.findMany({
            where: { dependsOnId: taskId },
            include: { task: true },
         });

         return dependents.map((dep) => dep.task);
      } catch (error) {
         this.handleError('get task dependents', error);
      }
   }

   // Private helper methods
   private validateCreateData(data: CreateTaskData): void {
      if (data.id !== undefined && !ValidationHelper.isValidId(data.id)) {
         throw new Error('Invalid task ID');
      }

      if (!ValidationHelper.isNotEmpty(data.title)) {
         throw new Error('Task title is required');
      }

      if (!ValidationHelper.isNotEmpty(data.description)) {
         throw new Error('Task description is required');
      }

      if (data.complexity !== undefined && (data.complexity < 0 || data.complexity > 100)) {
         throw new Error('Task complexity must be between 0 and 100');
      }
   }

   private buildTaskWhereClause(filter?: TaskFilterOptions): Prisma.TaskWhereInput {
      const where: Prisma.TaskWhereInput = {};

      if (!filter) return where;

      // Search across multiple fields
      if (filter.search) {
         where.OR = [
            { title: { contains: filter.search, mode: 'insensitive' } },
            { description: { contains: filter.search, mode: 'insensitive' } },
            { details: { contains: filter.search, mode: 'insensitive' } },
         ];
      }

      // ID filter
      if (filter.ids?.length) {
         where.id = { in: filter.ids };
      }

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

      // Complexity filter
      if (filter.complexity) {
         where.complexity = {};
         if (filter.complexity.min !== undefined) {
            where.complexity.gte = filter.complexity.min;
         }
         if (filter.complexity.max !== undefined) {
            where.complexity.lte = filter.complexity.max;
         }
      }

      return where;
   }

   private async addDependencies(taskId: number, dependencyIds: number[]): Promise<void> {
      if (!dependencyIds.length) return;

      // Verify all dependency tasks exist
      const dependencyTasks = await this.prisma.task.findMany({
         where: { id: { in: dependencyIds } },
         select: { id: true },
      });

      const foundIds = dependencyTasks.map((t) => t.id);
      const missingIds = dependencyIds.filter((id) => !foundIds.includes(id));

      if (missingIds.length) {
         throw new NotFoundError('Dependency tasks', missingIds.join(', '));
      }

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
      if (dependencyIds.length > 0) {
         await this.addDependencies(taskId, dependencyIds);
      }
   }
}
