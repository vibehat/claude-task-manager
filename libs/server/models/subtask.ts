import type { Subtask, Task } from '../generated/prisma';
import { PrismaClient } from '../generated/prisma';
import type {
   ModelOperations,
   BaseFilterOptions,
   OrderByOptions,
   PaginationOptions,
   Status,
} from './types';
import { BaseModelClass, JSONHelper, ValidationHelper } from './types';

// Subtask with relations
export interface SubtaskWithRelations extends Subtask {
   parentTask: Task;
   dependencies: string[];
}

// Data transfer objects
export interface CreateSubtaskData {
   id: string;
   title: string;
   description: string;
   details?: string;
   testStrategy?: string;
   status?: Status;
   parentId: number;
   dependencies?: string[];
}

export interface UpdateSubtaskData {
   title?: string;
   description?: string;
   details?: string;
   testStrategy?: string;
   status?: Status;
   dependencies?: string[];
}

export interface SubtaskFilterOptions extends BaseFilterOptions {
   status?: Status[];
   parentId?: number;
   hasDependencies?: boolean;
}

export type SubtaskOrderByField = 'id' | 'title' | 'status' | 'createdAt' | 'updatedAt';

export class SubtaskModel
   extends BaseModelClass
   implements
      ModelOperations<
         SubtaskWithRelations,
         CreateSubtaskData,
         UpdateSubtaskData,
         SubtaskFilterOptions
      >
{
   private readonly includeRelations = {
      parentTask: true,
   };

   async create(data: CreateSubtaskData): Promise<SubtaskWithRelations> {
      try {
         this.validateCreateData(data);

         const existingSubtask = await this.prisma.subtask.findUnique({
            where: { id: data.id },
         });

         if (existingSubtask) {
            throw new Error(`Subtask with ID ${data.id} already exists`);
         }

         // Verify parent task exists
         const parentTask = await this.prisma.task.findUnique({
            where: { id: data.parentId },
         });

         if (!parentTask) {
            throw new Error(`Parent task with ID ${data.parentId} not found`);
         }

         const subtask = await this.prisma.subtask.create({
            data: {
               id: data.id,
               title: data.title,
               description: data.description,
               details: data.details,
               testStrategy: data.testStrategy,
               status: data.status || 'pending',
               parentId: data.parentId,
               dependencies: JSONHelper.stringify(data.dependencies || []),
            },
            include: this.includeRelations,
         });

         return this.transformSubtask(subtask);
      } catch (error) {
         this.handleError('create subtask', error);
      }
   }

   async update(id: string, data: UpdateSubtaskData): Promise<SubtaskWithRelations | null> {
      try {
         const existingSubtask = await this.prisma.subtask.findUnique({
            where: { id },
         });

         if (!existingSubtask) {
            return null;
         }

         const updateData: any = { ...data };

         // Handle dependencies
         if (data.dependencies !== undefined) {
            updateData.dependencies = JSONHelper.stringify(data.dependencies);
         }

         await this.prisma.subtask.update({
            where: { id },
            data: updateData,
         });

         return this.findById(id);
      } catch (error) {
         this.handleError('update subtask', error);
      }
   }

   async delete(id: string): Promise<boolean> {
      try {
         const subtask = await this.prisma.subtask.findUnique({
            where: { id },
         });

         if (!subtask) {
            return false;
         }

         await this.prisma.subtask.delete({ where: { id } });

         return true;
      } catch (error) {
         this.handleError('delete subtask', error);
      }
   }

   async findById(id: string): Promise<SubtaskWithRelations | null> {
      try {
         const subtask = await this.prisma.subtask.findUnique({
            where: { id },
            include: this.includeRelations,
         });

         return subtask ? this.transformSubtask(subtask) : null;
      } catch (error) {
         this.handleError('find subtask by ID', error);
      }
   }

   async findMany(options?: {
      filter?: SubtaskFilterOptions;
      orderBy?: OrderByOptions<SubtaskOrderByField>[];
      pagination?: PaginationOptions;
   }): Promise<SubtaskWithRelations[]> {
      try {
         const where = this.buildSubtaskWhereClause(options?.filter);
         const orderBy = this.buildOrderByClause(options?.orderBy);
         const pagination = this.buildPaginationClause(options?.pagination);

         const subtasks = await this.prisma.subtask.findMany({
            where,
            orderBy,
            ...pagination,
            include: this.includeRelations,
         });

         return subtasks.map((subtask) => this.transformSubtask(subtask));
      } catch (error) {
         this.handleError('find subtasks', error);
      }
   }

   // Convenience methods
   async findByParent(parentId: number): Promise<SubtaskWithRelations[]> {
      return this.findMany({ filter: { parentId } });
   }

   async findByStatus(status: Status): Promise<SubtaskWithRelations[]> {
      return this.findMany({ filter: { status: [status] } });
   }

   async search(query: string): Promise<SubtaskWithRelations[]> {
      return this.findMany({ filter: { search: query } });
   }

   async updateStatus(id: string, status: Status): Promise<SubtaskWithRelations | null> {
      return this.update(id, { status });
   }

   // Dependency management
   async addDependency(id: string, dependencyId: string): Promise<boolean> {
      try {
         const subtask = await this.findById(id);

         if (!subtask) {
            throw new Error(`Subtask with ID ${id} not found`);
         }

         const currentDeps = subtask.dependencies || [];

         if (!currentDeps.includes(dependencyId)) {
            const updatedDeps = [...currentDeps, dependencyId];
            await this.update(id, { dependencies: updatedDeps });
         }

         return true;
      } catch (error) {
         this.handleError('add subtask dependency', error);
      }
   }

   async removeDependency(id: string, dependencyId: string): Promise<boolean> {
      try {
         const subtask = await this.findById(id);

         if (!subtask) {
            return true; // Consider it successfully removed if subtask doesn't exist
         }

         const currentDeps = subtask.dependencies || [];
         const updatedDeps = currentDeps.filter((dep) => dep !== dependencyId);

         await this.update(id, { dependencies: updatedDeps });

         return true;
      } catch (error) {
         this.handleError('remove subtask dependency', error);
      }
   }

   async setDependencies(id: string, dependencies: string[]): Promise<boolean> {
      try {
         await this.update(id, { dependencies });
         return true;
      } catch (error) {
         this.handleError('set subtask dependencies', error);
      }
   }

   // Private helper methods
   private validateCreateData(data: CreateSubtaskData): void {
      if (!ValidationHelper.isValidId(data.id)) {
         throw new Error('Subtask ID is required');
      }

      if (!ValidationHelper.isNotEmpty(data.title)) {
         throw new Error('Subtask title is required');
      }

      if (!ValidationHelper.isNotEmpty(data.description)) {
         throw new Error('Subtask description is required');
      }

      if (!ValidationHelper.isValidId(data.parentId)) {
         throw new Error('Parent task ID is required');
      }
   }

   private buildSubtaskWhereClause(filter?: SubtaskFilterOptions): any {
      const where = this.buildWhereClause({
         ...filter,
         searchFields: ['title', 'description', 'details'],
      });

      if (!filter) return where;

      // Status filter
      if (filter.status?.length) {
         where.status = { in: filter.status };
      }

      // Parent ID filter
      if (filter.parentId !== undefined) {
         where.parentId = filter.parentId;
      }

      // Dependencies filter (simplified - checks if dependencies field is not empty)
      if (filter.hasDependencies !== undefined) {
         where.dependencies = filter.hasDependencies ? { not: '[]' } : '[]';
      }

      return where;
   }

   private transformSubtask(subtask: any): SubtaskWithRelations {
      return {
         ...subtask,
         dependencies: JSONHelper.parse<string>(subtask.dependencies),
      };
   }
}
