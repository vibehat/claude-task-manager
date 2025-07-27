import type {
   Issue,
   IssueWithRelations,
   IssueType,
   BaseService,
   ServiceOptions,
   Prisma,
} from './types';
import {
   BaseServiceClass,
   ValidationHelper,
   NotFoundError,
   ConflictError,
   JSONHelper,
} from './types';

// Create and Update data types using Prisma
export type CreateIssueData = Omit<
   Prisma.IssueCreateInput,
   'assignee' | 'project' | 'cycle' | 'task' | 'labels'
> & {
   assigneeId?: string;
   projectId?: string;
   cycleId?: string;
   taskId?: number;
   labelIds?: string[];
   subissues?: string[];
};

export type UpdateIssueData = Partial<Omit<CreateIssueData, 'identifier'>>;

// Filter options
export interface IssueFilterOptions {
   search?: string;
   ids?: string[];
   status?: string[];
   priority?: string[];
   assigneeId?: string;
   projectId?: string;
   cycleId?: string;
   taskId?: number;
   subtaskId?: string;
   issueType?: IssueType;
   labelIds?: string[];
   dueDate?: {
      startDate?: Date;
      endDate?: Date;
   };
   createdAt?: {
      startDate?: Date;
      endDate?: Date;
   };
   updatedAt?: {
      startDate?: Date;
      endDate?: Date;
   };
}

export type IssueOrderByField = keyof Pick<
   Issue,
   | 'id'
   | 'identifier'
   | 'title'
   | 'status'
   | 'priority'
   | 'rank'
   | 'createdAt'
   | 'updatedAt'
   | 'dueDate'
>;

export class IssueService
   extends BaseServiceClass
   implements BaseService<IssueWithRelations, CreateIssueData, UpdateIssueData, IssueFilterOptions>
{
   private readonly includeRelations = {
      assignee: true,
      project: true,
      cycle: true,
      task: true,
      labels: {
         include: { label: true },
      },
   } as const;

   async create(data: CreateIssueData): Promise<IssueWithRelations> {
      try {
         this.validateCreateData(data);

         // Check if issue with this identifier already exists
         const existing = await this.prisma.issue.findUnique({
            where: { identifier: data.identifier },
         });

         if (existing) {
            throw new ConflictError(`Issue with identifier ${data.identifier} already exists`);
         }

         // Extract related data
         const { assigneeId, projectId, cycleId, taskId, labelIds, subissues, ...issueData } = data;

         // Prepare Prisma create input
         const createData: Prisma.IssueCreateInput = {
            ...issueData,
            subissues: JSONHelper.stringify(subissues || []),
         };

         // Add relations
         if (assigneeId) {
            createData.assignee = { connect: { id: assigneeId } };
         }

         if (projectId) {
            createData.project = { connect: { id: projectId } };
         }

         if (cycleId) {
            createData.cycle = { connect: { id: cycleId } };
         }

         if (taskId) {
            createData.task = { connect: { id: taskId } };
         }

         // Create the issue
         const issue = await this.prisma.issue.create({
            data: createData,
            include: this.includeRelations,
         });

         // Add label associations if provided
         if (labelIds?.length) {
            await this.addLabels(issue.id, labelIds);
            // Return updated issue with labels
            return this.findById(issue.id) as Promise<IssueWithRelations>;
         }

         return this.transformIssue(issue);
      } catch (error) {
         this.handleError('create issue', error);
      }
   }

   async update(id: string, data: UpdateIssueData): Promise<IssueWithRelations | null> {
      try {
         const existing = await this.prisma.issue.findUnique({ where: { id } });

         if (!existing) {
            return null;
         }

         // Extract related data
         const { assigneeId, projectId, cycleId, taskId, labelIds, subissues, ...updateData } =
            data;

         // Prepare Prisma update input
         const prismaUpdateData: Prisma.IssueUpdateInput = {
            ...updateData,
         };

         // Handle subissues
         if (subissues !== undefined) {
            prismaUpdateData.subissues = JSONHelper.stringify(subissues);
         }

         // Handle relations
         if (assigneeId !== undefined) {
            prismaUpdateData.assignee = assigneeId
               ? { connect: { id: assigneeId } }
               : { disconnect: true };
         }

         if (projectId !== undefined) {
            prismaUpdateData.project = projectId
               ? { connect: { id: projectId } }
               : { disconnect: true };
         }

         if (cycleId !== undefined) {
            prismaUpdateData.cycle = cycleId ? { connect: { id: cycleId } } : { disconnect: true };
         }

         if (taskId !== undefined) {
            prismaUpdateData.task = taskId ? { connect: { id: taskId } } : { disconnect: true };
         }

         // Update the issue
         await this.prisma.issue.update({
            where: { id },
            data: prismaUpdateData,
         });

         // Handle label updates
         if (labelIds !== undefined) {
            await this.updateLabels(id, labelIds);
         }

         return this.findById(id);
      } catch (error) {
         this.handleError('update issue', error);
      }
   }

   async delete(id: string): Promise<boolean> {
      try {
         const issue = await this.prisma.issue.findUnique({ where: { id } });

         if (!issue) {
            return false;
         }

         // Prisma will handle cascade deletes for labels
         await this.prisma.issue.delete({ where: { id } });

         return true;
      } catch (error) {
         this.handleError('delete issue', error);
      }
   }

   async findById(id: string): Promise<IssueWithRelations | null> {
      try {
         const issue = await this.prisma.issue.findUnique({
            where: { id },
            include: this.includeRelations,
         });

         return issue ? this.transformIssue(issue) : null;
      } catch (error) {
         this.handleError('find issue by ID', error);
      }
   }

   async findByIdentifier(identifier: string): Promise<IssueWithRelations | null> {
      try {
         const issue = await this.prisma.issue.findUnique({
            where: { identifier },
            include: this.includeRelations,
         });

         return issue ? this.transformIssue(issue) : null;
      } catch (error) {
         this.handleError('find issue by identifier', error);
      }
   }

   async findMany(options?: ServiceOptions): Promise<IssueWithRelations[]> {
      try {
         const where = this.buildIssueWhereClause(options?.filter);
         const orderBy = this.buildOrderByClause(options?.orderBy);
         const pagination = this.buildPaginationClause(options?.pagination);

         const issues = await this.prisma.issue.findMany({
            where,
            orderBy,
            ...pagination,
            include: this.includeRelations,
         });

         return issues.map((issue) => this.transformIssue(issue));
      } catch (error) {
         this.handleError('find issues', error);
      }
   }

   // Convenience methods
   async findByStatus(status: string): Promise<IssueWithRelations[]> {
      return this.findMany({ filter: { status: [status] } });
   }

   async findByPriority(priority: string): Promise<IssueWithRelations[]> {
      return this.findMany({ filter: { priority: [priority] } });
   }

   async findByAssignee(assigneeId: string): Promise<IssueWithRelations[]> {
      return this.findMany({ filter: { assigneeId } });
   }

   async findByProject(projectId: string): Promise<IssueWithRelations[]> {
      return this.findMany({ filter: { projectId } });
   }

   async findByCycle(cycleId: string): Promise<IssueWithRelations[]> {
      return this.findMany({ filter: { cycleId } });
   }

   async findByTask(taskId: number): Promise<IssueWithRelations[]> {
      return this.findMany({ filter: { taskId } });
   }

   async search(query: string): Promise<IssueWithRelations[]> {
      return this.findMany({ filter: { search: query } });
   }

   async updateStatus(id: string, status: string): Promise<IssueWithRelations | null> {
      return this.update(id, { status });
   }

   async assignToUser(id: string, assigneeId: string): Promise<IssueWithRelations | null> {
      return this.update(id, { assigneeId });
   }

   async unassign(id: string): Promise<IssueWithRelations | null> {
      return this.update(id, { assigneeId: undefined });
   }

   // Label management
   async addLabel(issueId: string, labelId: string): Promise<boolean> {
      try {
         // Check if association already exists
         const existing = await this.prisma.issueLabel.findUnique({
            where: { issueId_labelId: { issueId, labelId } },
         });

         if (existing) {
            return true; // Already exists
         }

         await this.prisma.issueLabel.create({
            data: { issueId, labelId },
         });

         return true;
      } catch (error) {
         this.handleError('add issue label', error);
      }
   }

   async removeLabel(issueId: string, labelId: string): Promise<boolean> {
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

   async getLabels(issueId: string): Promise<any[]> {
      try {
         const issueLabels = await this.prisma.issueLabel.findMany({
            where: { issueId },
            include: { label: true },
         });

         return issueLabels.map((il) => il.label);
      } catch (error) {
         this.handleError('get issue labels', error);
      }
   }

   // Private helper methods
   private validateCreateData(data: CreateIssueData): void {
      if (!ValidationHelper.isNotEmpty(data.identifier)) {
         throw new Error('Issue identifier is required');
      }

      if (!ValidationHelper.isNotEmpty(data.title)) {
         throw new Error('Issue title is required');
      }

      if (!ValidationHelper.isNotEmpty(data.description)) {
         throw new Error('Issue description is required');
      }

      if (!ValidationHelper.isNotEmpty(data.rank)) {
         throw new Error('Issue rank is required');
      }

      if (data.dueDate && !ValidationHelper.isValidDate(data.dueDate)) {
         throw new Error('Invalid due date');
      }
   }

   private buildIssueWhereClause(filter?: IssueFilterOptions): Prisma.IssueWhereInput {
      const where: Prisma.IssueWhereInput = {};

      if (!filter) return where;

      // Search across multiple fields
      if (filter.search) {
         where.OR = [
            { title: { contains: filter.search, mode: 'insensitive' } },
            { description: { contains: filter.search, mode: 'insensitive' } },
            { identifier: { contains: filter.search, mode: 'insensitive' } },
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

      // Assignee filter
      if (filter.assigneeId) {
         where.assigneeId = filter.assigneeId;
      }

      // Project filter
      if (filter.projectId) {
         where.projectId = filter.projectId;
      }

      // Cycle filter
      if (filter.cycleId) {
         where.cycleId = filter.cycleId;
      }

      // Task filter
      if (filter.taskId) {
         where.taskId = filter.taskId;
      }

      // Subtask filter
      if (filter.subtaskId) {
         where.subtaskId = filter.subtaskId;
      }

      // Issue type filter
      if (filter.issueType) {
         where.issueType = filter.issueType;
      }

      // Label filter
      if (filter.labelIds?.length) {
         where.labels = {
            some: {
               labelId: { in: filter.labelIds },
            },
         };
      }

      // Date filters
      this.addDateFilter(where, 'dueDate', filter.dueDate);
      this.addDateFilter(where, 'createdAt', filter.createdAt);
      this.addDateFilter(where, 'updatedAt', filter.updatedAt);

      return where;
   }

   private addDateFilter(
      where: any,
      field: string,
      dateFilter?: { startDate?: Date; endDate?: Date }
   ): void {
      if (!dateFilter) return;

      where[field] = {};
      if (dateFilter.startDate) {
         where[field].gte = dateFilter.startDate;
      }
      if (dateFilter.endDate) {
         where[field].lte = dateFilter.endDate;
      }
   }

   private async addLabels(issueId: string, labelIds: string[]): Promise<void> {
      if (!labelIds.length) return;

      await this.prisma.issueLabel.createMany({
         data: labelIds.map((labelId) => ({ issueId, labelId })),
         skipDuplicates: true,
      });
   }

   private async updateLabels(issueId: string, labelIds: string[]): Promise<void> {
      // Remove existing labels
      await this.prisma.issueLabel.deleteMany({
         where: { issueId },
      });

      // Add new labels
      if (labelIds.length > 0) {
         await this.addLabels(issueId, labelIds);
      }
   }

   private transformIssue(issue: any): IssueWithRelations {
      return {
         ...issue,
         subissues: JSONHelper.parse<string>(issue.subissues),
         labels: issue.labels.map((il: any) => il.label),
      };
   }
}
