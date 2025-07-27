import {
   Subtask,
   SubtaskWithRelations,
   BaseServiceClass,
   BaseService,
   ServiceOptions,
   ValidationHelper,
   NotFoundError,
   ConflictError,
   JSONHelper,
   Prisma,
} from './types';

// Create and Update data types using Prisma
export type CreateSubtaskData = Omit<Prisma.SubtaskCreateInput, 'parentTask'> & {
   parentId: number;
   dependencies?: string[];
};

export type UpdateSubtaskData = Partial<Omit<CreateSubtaskData, 'id' | 'parentId'>>;

// Filter options
export interface SubtaskFilterOptions {
   search?: string;
   ids?: string[];
   status?: string[];
   parentId?: number;
   hasDependencies?: boolean;
}

export type SubtaskOrderByField = keyof Pick<
   Subtask,
   'id' | 'title' | 'status' | 'createdAt' | 'updatedAt'
>;

export class SubtaskService
   extends BaseServiceClass
   implements
      BaseService<SubtaskWithRelations, CreateSubtaskData, UpdateSubtaskData, SubtaskFilterOptions>
{
   private readonly includeRelations = {
      parentTask: true,
   } as const;

   async create(data: CreateSubtaskData): Promise<SubtaskWithRelations> {
      try {
         this.validateCreateData(data);

         // Check if subtask with this ID already exists
         const existing = await this.prisma.subtask.findUnique({
            where: { id: data.id },
         });

         if (existing) {
            throw new ConflictError(`Subtask with ID ${data.id} already exists`);
         }

         // Verify parent task exists
         const parentTask = await this.prisma.task.findUnique({
            where: { id: data.parentId },
         });

         if (!parentTask) {
            throw new NotFoundError('Parent task', data.parentId);
         }

         // Prepare data for creation
         const { dependencies, ...subtaskData } = data;
         const createData: Prisma.SubtaskCreateInput = {
            ...subtaskData,
            parentTask: { connect: { id: data.parentId } },
            dependencies: JSONHelper.stringify(dependencies || []),
         };

         const subtask = await this.prisma.subtask.create({
            data: createData,
            include: this.includeRelations,
         });

         return this.transformSubtask(subtask);
      } catch (error) {
         this.handleError('create subtask', error);
      }
   }

   async update(id: string, data: UpdateSubtaskData): Promise<SubtaskWithRelations | null> {
      try {
         const existing = await this.prisma.subtask.findUnique({ where: { id } });

         if (!existing) {
            return null;
         }

         // Prepare update data
         const { dependencies, ...updateData } = data;
         const prismaUpdateData: Prisma.SubtaskUpdateInput = {
            ...updateData,
         };

         // Handle dependencies
         if (dependencies !== undefined) {
            prismaUpdateData.dependencies = JSONHelper.stringify(dependencies);
         }

         await this.prisma.subtask.update({
            where: { id },
            data: prismaUpdateData,
         });

         return this.findById(id);
      } catch (error) {
         this.handleError('update subtask', error);
      }
   }

   async delete(id: string): Promise<boolean> {
      try {
         const subtask = await this.prisma.subtask.findUnique({ where: { id } });

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

   async findMany(options?: ServiceOptions): Promise<SubtaskWithRelations[]> {
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

   async findByStatus(status: string): Promise<SubtaskWithRelations[]> {
      return this.findMany({ filter: { status: [status] } });
   }

   async search(query: string): Promise<SubtaskWithRelations[]> {
      return this.findMany({ filter: { search: query } });
   }

   async updateStatus(id: string, status: string): Promise<SubtaskWithRelations | null> {
      return this.update(id, { status });
   }

   // Dependency management
   async addDependency(id: string, dependencyId: string): Promise<boolean> {
      try {
         const subtask = await this.findById(id);

         if (!subtask) {
            throw new NotFoundError('Subtask', id);
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
            return true; // Consider successful if subtask doesn't exist
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

   async getDependencies(id: string): Promise<string[]> {
      try {
         const subtask = await this.findById(id);
         return subtask?.dependencies || [];
      } catch (error) {
         this.handleError('get subtask dependencies', error);
      }
   }

   // Bulk operations
   async createMany(data: CreateSubtaskData[]): Promise<SubtaskWithRelations[]> {
      try {
         const results: SubtaskWithRelations[] = [];

         // Create subtasks one by one to handle validation and transformations
         for (const subtaskData of data) {
            const subtask = await this.create(subtaskData);
            results.push(subtask);
         }

         return results;
      } catch (error) {
         this.handleError('create many subtasks', error);
      }
   }

   async deleteByParent(parentId: number): Promise<number> {
      try {
         const result = await this.prisma.subtask.deleteMany({
            where: { parentId },
         });

         return result.count;
      } catch (error) {
         this.handleError('delete subtasks by parent', error);
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

      // Validate ID format (should be like "1.1", "2.3", etc.)
      const idPattern = /^\d+\.\d+$/;
      if (!idPattern.test(data.id)) {
         throw new Error('Subtask ID must be in format "parentId.subtaskNumber" (e.g., "1.1")');
      }
   }

   private buildSubtaskWhereClause(filter?: SubtaskFilterOptions): Prisma.SubtaskWhereInput {
      const where: Prisma.SubtaskWhereInput = {};

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
