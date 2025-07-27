import {
   Label,
   LabelWithRelations,
   BaseServiceClass,
   BaseService,
   ServiceOptions,
   ValidationHelper,
   NotFoundError,
   ConflictError,
   Prisma,
} from './types';

// Create and Update data types using Prisma
export type CreateLabelData = Omit<Prisma.LabelCreateInput, 'issues'>;

export type UpdateLabelData = Partial<CreateLabelData>;

// Filter options
export interface LabelFilterOptions {
   search?: string;
   ids?: string[];
   colors?: string[];
}

export type LabelOrderByField = keyof Pick<
   Label,
   'id' | 'name' | 'color' | 'createdAt' | 'updatedAt'
>;

export class LabelService
   extends BaseServiceClass
   implements BaseService<LabelWithRelations, CreateLabelData, UpdateLabelData, LabelFilterOptions>
{
   private readonly includeRelations = {
      issues: {
         include: { issue: true },
      },
   } as const;

   async create(data: CreateLabelData): Promise<LabelWithRelations> {
      try {
         this.validateCreateData(data);

         // Check if label with this name already exists
         const existing = await this.prisma.label.findFirst({
            where: { name: data.name },
         });

         if (existing) {
            throw new ConflictError(`Label with name "${data.name}" already exists`);
         }

         const label = await this.prisma.label.create({
            data,
            include: this.includeRelations,
         });

         return this.transformLabel(label);
      } catch (error) {
         this.handleError('create label', error);
      }
   }

   async update(id: string, data: UpdateLabelData): Promise<LabelWithRelations | null> {
      try {
         const existing = await this.prisma.label.findUnique({ where: { id } });

         if (!existing) {
            return null;
         }

         // Check if name is being updated and if it conflicts
         if (data.name && data.name !== existing.name) {
            const nameConflict = await this.prisma.label.findFirst({
               where: {
                  name: data.name,
                  id: { not: id },
               },
            });

            if (nameConflict) {
               throw new ConflictError(`Label with name "${data.name}" already exists`);
            }
         }

         await this.prisma.label.update({
            where: { id },
            data,
         });

         return this.findById(id);
      } catch (error) {
         this.handleError('update label', error);
      }
   }

   async delete(id: string): Promise<boolean> {
      try {
         const label = await this.prisma.label.findUnique({ where: { id } });

         if (!label) {
            return false;
         }

         // Prisma will handle cascade deletes for issue associations
         await this.prisma.label.delete({ where: { id } });

         return true;
      } catch (error) {
         this.handleError('delete label', error);
      }
   }

   async findById(id: string): Promise<LabelWithRelations | null> {
      try {
         const label = await this.prisma.label.findUnique({
            where: { id },
            include: this.includeRelations,
         });

         return label ? this.transformLabel(label) : null;
      } catch (error) {
         this.handleError('find label by ID', error);
      }
   }

   async findByName(name: string): Promise<LabelWithRelations | null> {
      try {
         const label = await this.prisma.label.findFirst({
            where: { name },
            include: this.includeRelations,
         });

         return label ? this.transformLabel(label) : null;
      } catch (error) {
         this.handleError('find label by name', error);
      }
   }

   async findMany(options?: ServiceOptions): Promise<LabelWithRelations[]> {
      try {
         const where = this.buildLabelWhereClause(options?.filter);
         const orderBy = this.buildOrderByClause(options?.orderBy);
         const pagination = this.buildPaginationClause(options?.pagination);

         const labels = await this.prisma.label.findMany({
            where,
            orderBy,
            ...pagination,
            include: this.includeRelations,
         });

         return labels.map((label) => this.transformLabel(label));
      } catch (error) {
         this.handleError('find labels', error);
      }
   }

   // Convenience methods
   async findByColor(color: string): Promise<LabelWithRelations[]> {
      return this.findMany({ filter: { colors: [color] } });
   }

   async search(query: string): Promise<LabelWithRelations[]> {
      return this.findMany({ filter: { search: query } });
   }

   // Issue association management
   async getIssues(labelId: string): Promise<any[]> {
      try {
         const issueLabels = await this.prisma.issueLabel.findMany({
            where: { labelId },
            include: { issue: true },
         });

         return issueLabels.map((il) => il.issue);
      } catch (error) {
         this.handleError('get label issues', error);
      }
   }

   async getIssuesCount(labelId: string): Promise<number> {
      try {
         const count = await this.prisma.issueLabel.count({
            where: { labelId },
         });

         return count;
      } catch (error) {
         this.handleError('get label issues count', error);
      }
   }

   async addToIssue(labelId: string, issueId: string): Promise<boolean> {
      try {
         // Check if both label and issue exist
         const [label, issue] = await Promise.all([
            this.prisma.label.findUnique({ where: { id: labelId } }),
            this.prisma.issue.findUnique({ where: { id: issueId } }),
         ]);

         if (!label) {
            throw new NotFoundError('Label', labelId);
         }

         if (!issue) {
            throw new NotFoundError('Issue', issueId);
         }

         // Check if association already exists
         const existing = await this.prisma.issueLabel.findUnique({
            where: { issueId_labelId: { issueId, labelId } },
         });

         if (existing) {
            return true; // Already associated
         }

         await this.prisma.issueLabel.create({
            data: { issueId, labelId },
         });

         return true;
      } catch (error) {
         this.handleError('add label to issue', error);
      }
   }

   async removeFromIssue(labelId: string, issueId: string): Promise<boolean> {
      try {
         await this.prisma.issueLabel.deleteMany({
            where: { issueId, labelId },
         });
         return true;
      } catch (error) {
         // Consider successful if association doesn't exist
         return true;
      }
   }

   // Bulk operations
   async createMany(data: CreateLabelData[]): Promise<LabelWithRelations[]> {
      try {
         const results: LabelWithRelations[] = [];

         // Create labels one by one to handle validation and name uniqueness
         for (const labelData of data) {
            const label = await this.create(labelData);
            results.push(label);
         }

         return results;
      } catch (error) {
         this.handleError('create many labels', error);
      }
   }

   async deleteUnused(): Promise<number> {
      try {
         // Find labels that have no issue associations
         const unusedLabels = await this.prisma.label.findMany({
            where: {
               issues: { none: {} },
            },
            select: { id: true },
         });

         if (unusedLabels.length === 0) {
            return 0;
         }

         const result = await this.prisma.label.deleteMany({
            where: {
               id: { in: unusedLabels.map((l) => l.id) },
            },
         });

         return result.count;
      } catch (error) {
         this.handleError('delete unused labels', error);
      }
   }

   // Color management utilities
   async getUniqueColors(): Promise<string[]> {
      try {
         const labels = await this.prisma.label.findMany({
            select: { color: true },
            distinct: ['color'],
            orderBy: { color: 'asc' },
         });

         return labels.map((l) => l.color);
      } catch (error) {
         this.handleError('get unique label colors', error);
      }
   }

   async updateColor(id: string, color: string): Promise<LabelWithRelations | null> {
      return this.update(id, { color });
   }

   // Statistics
   async getLabelUsageStats(): Promise<
      Array<{ id: string; name: string; color: string; issueCount: number }>
   > {
      try {
         const labels = await this.prisma.label.findMany({
            include: {
               _count: {
                  select: { issues: true },
               },
            },
            orderBy: { name: 'asc' },
         });

         return labels.map((label) => ({
            id: label.id,
            name: label.name,
            color: label.color,
            issueCount: label._count.issues,
         }));
      } catch (error) {
         this.handleError('get label usage stats', error);
      }
   }

   // Private helper methods
   private validateCreateData(data: CreateLabelData): void {
      if (!ValidationHelper.isNotEmpty(data.name)) {
         throw new Error('Label name is required');
      }

      if (!ValidationHelper.isNotEmpty(data.color)) {
         throw new Error('Label color is required');
      }

      // Validate color format (hex color)
      const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      if (!hexColorRegex.test(data.color)) {
         throw new Error('Label color must be a valid hex color (e.g., #FF0000 or #F00)');
      }
   }

   private buildLabelWhereClause(filter?: LabelFilterOptions): Prisma.LabelWhereInput {
      const where: Prisma.LabelWhereInput = {};

      if (!filter) return where;

      // Search across multiple fields
      if (filter.search) {
         where.OR = [
            { name: { contains: filter.search, mode: 'insensitive' } },
            { description: { contains: filter.search, mode: 'insensitive' } },
         ];
      }

      // ID filter
      if (filter.ids?.length) {
         where.id = { in: filter.ids };
      }

      // Color filter
      if (filter.colors?.length) {
         where.color = { in: filter.colors };
      }

      return where;
   }

   private transformLabel(label: any): LabelWithRelations {
      return {
         ...label,
         issues: label.issues.map((il: any) => il.issue),
      };
   }
}
