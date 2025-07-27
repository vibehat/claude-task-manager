import {
   PrismaClient,
   Issue,
   User,
   Project,
   Label,
   IssueType,
   IssueLabel,
} from '../generated/prisma';
import { GraphQLError } from 'graphql';

export interface IssueWithRelations extends Issue {
   assignee?: User | null;
   project?: Project | null;
   labels?: Label[];
   task?: any | null; // Task type from existing schema
}

export interface CreateIssueData {
   identifier: string;
   title: string;
   description: string;
   status?: string;
   priority?: string;
   rank: string;
   cycleId?: string;
   dueDate?: Date;
   issueType?: IssueType;
   taskId?: number;
   subtaskId?: string;
   assigneeId?: string;
   projectId?: string;
   labelIds?: string[];
   subissues?: string[];
}

export interface UpdateIssueData {
   title?: string;
   description?: string;
   status?: string;
   priority?: string;
   rank?: string;
   cycleId?: string;
   dueDate?: Date;
   assigneeId?: string;
   projectId?: string;
   labelIds?: string[];
   subissues?: string[];
}

export interface IssueFilterOptions {
   status?: string[];
   priority?: string[];
   search?: string;
   createdAt?: { startDate?: Date; endDate?: Date };
   updatedAt?: { startDate?: Date; endDate?: Date };
   assigneeId?: string;
   projectId?: string;
   labelIds?: string[];
   issueType?: IssueType;
   dueDate?: { startDate?: Date; endDate?: Date };
   cycleId?: string;
   taskId?: number;
   subtaskId?: string;
}

export interface IssueOrderBy {
   field:
      | 'ID'
      | 'IDENTIFIER'
      | 'TITLE'
      | 'STATUS'
      | 'PRIORITY'
      | 'RANK'
      | 'CREATED_AT'
      | 'UPDATED_AT'
      | 'DUE_DATE';
   direction: 'ASC' | 'DESC';
}

export interface PaginationOptions {
   first?: number;
   after?: string;
   last?: number;
   before?: string;
   limit?: number;
}

export class IssueModel {
   constructor(private prisma: PrismaClient) {}

   async createIssue(data: CreateIssueData): Promise<IssueWithRelations> {
      try {
         // Check if identifier is unique
         const existingIssue = await this.prisma.issue.findUnique({
            where: { identifier: data.identifier },
         });

         if (existingIssue) {
            throw new GraphQLError(`Issue with identifier ${data.identifier} already exists`);
         }

         // Create the issue
         const issue = await this.prisma.issue.create({
            data: {
               identifier: data.identifier,
               title: data.title,
               description: data.description,
               status: data.status || 'to-do',
               priority: data.priority || 'medium',
               rank: data.rank,
               cycleId: data.cycleId,
               dueDate: data.dueDate,
               issueType: data.issueType || 'TASK',
               taskId: data.taskId,
               subtaskId: data.subtaskId,
               assigneeId: data.assigneeId,
               projectId: data.projectId,
               subissues: JSON.stringify(data.subissues || []),
            },
            include: {
               assignee: true,
               project: true,
               task: true,
               labels: {
                  include: {
                     label: true,
                  },
               },
            },
         });

         // Create label associations if provided
         if (data.labelIds && data.labelIds.length > 0) {
            await this.prisma.issueLabel.createMany({
               data: data.labelIds.map((labelId) => ({
                  issueId: issue.id,
                  labelId,
               })),
            });
         }

         return this.getIssueById(issue.id);
      } catch (error) {
         console.error('Error creating issue:', error);
         throw new GraphQLError('Failed to create issue');
      }
   }

   async updateIssue(id: string, data: UpdateIssueData): Promise<IssueWithRelations | null> {
      try {
         const existingIssue = await this.prisma.issue.findUnique({
            where: { id },
         });

         if (!existingIssue) {
            throw new GraphQLError(`Issue with ID ${id} not found`);
         }

         // Handle label updates separately
         if (data.labelIds !== undefined) {
            // Remove existing labels
            await this.prisma.issueLabel.deleteMany({
               where: { issueId: id },
            });

            // Add new labels
            if (data.labelIds.length > 0) {
               await this.prisma.issueLabel.createMany({
                  data: data.labelIds.map((labelId) => ({
                     issueId: id,
                     labelId,
                  })),
               });
            }
         }

         // Update the issue
         const updateData: any = { ...data };
         delete updateData.labelIds; // Remove labelIds from direct update

         if (data.subissues !== undefined) {
            updateData.subissues = JSON.stringify(data.subissues);
         }

         await this.prisma.issue.update({
            where: { id },
            data: updateData,
         });

         return this.getIssueById(id);
      } catch (error) {
         console.error('Error updating issue:', error);
         throw new GraphQLError('Failed to update issue');
      }
   }

   async deleteIssue(id: string): Promise<boolean> {
      try {
         const existingIssue = await this.prisma.issue.findUnique({
            where: { id },
         });

         if (!existingIssue) {
            throw new GraphQLError(`Issue with ID ${id} not found`);
         }

         // Delete label associations
         await this.prisma.issueLabel.deleteMany({
            where: { issueId: id },
         });

         // Delete the issue
         await this.prisma.issue.delete({
            where: { id },
         });

         return true;
      } catch (error) {
         console.error('Error deleting issue:', error);
         throw new GraphQLError('Failed to delete issue');
      }
   }

   async getIssueById(id: string): Promise<IssueWithRelations | null> {
      try {
         const issue = await this.prisma.issue.findUnique({
            where: { id },
            include: {
               assignee: true,
               project: true,
               task: true,
               labels: {
                  include: {
                     label: true,
                  },
               },
            },
         });

         if (!issue) {
            return null;
         }

         return {
            ...issue,
            labels: issue.labels.map((il) => il.label),
         };
      } catch (error) {
         console.error('Error fetching issue by ID:', error);
         return null;
      }
   }

   async getIssues(
      filter?: IssueFilterOptions,
      orderBy?: IssueOrderBy[],
      pagination?: PaginationOptions
   ): Promise<IssueWithRelations[]> {
      try {
         const where: any = {};

         if (filter) {
            if (filter.status && filter.status.length > 0) {
               where.status = { in: filter.status };
            }

            if (filter.priority && filter.priority.length > 0) {
               where.priority = { in: filter.priority };
            }

            if (filter.search) {
               where.OR = [
                  { title: { contains: filter.search } },
                  { description: { contains: filter.search } },
                  { identifier: { contains: filter.search } },
               ];
            }

            if (filter.assigneeId) {
               where.assigneeId = filter.assigneeId;
            }

            if (filter.projectId) {
               where.projectId = filter.projectId;
            }

            if (filter.issueType) {
               where.issueType = filter.issueType;
            }

            if (filter.cycleId) {
               where.cycleId = filter.cycleId;
            }

            if (filter.taskId) {
               where.taskId = filter.taskId;
            }

            if (filter.subtaskId) {
               where.subtaskId = filter.subtaskId;
            }

            if (filter.createdAt) {
               where.createdAt = {};
               if (filter.createdAt.startDate) {
                  where.createdAt.gte = filter.createdAt.startDate;
               }
               if (filter.createdAt.endDate) {
                  where.createdAt.lte = filter.createdAt.endDate;
               }
            }

            if (filter.updatedAt) {
               where.updatedAt = {};
               if (filter.updatedAt.startDate) {
                  where.updatedAt.gte = filter.updatedAt.startDate;
               }
               if (filter.updatedAt.endDate) {
                  where.updatedAt.lte = filter.updatedAt.endDate;
               }
            }

            if (filter.dueDate) {
               where.dueDate = {};
               if (filter.dueDate.startDate) {
                  where.dueDate.gte = filter.dueDate.startDate;
               }
               if (filter.dueDate.endDate) {
                  where.dueDate.lte = filter.dueDate.endDate;
               }
            }

            if (filter.labelIds && filter.labelIds.length > 0) {
               where.labels = {
                  some: {
                     labelId: { in: filter.labelIds },
                  },
               };
            }
         }

         const orderByClause: any[] = [];
         if (orderBy && orderBy.length > 0) {
            orderBy.forEach((order) => {
               const field = order.field.toLowerCase();
               orderByClause.push({ [field]: order.direction.toLowerCase() });
            });
         } else {
            orderByClause.push({ createdAt: 'desc' });
         }

         const issues = await this.prisma.issue.findMany({
            where,
            orderBy: orderByClause,
            take: pagination?.limit || pagination?.first || 50,
            skip: pagination?.first ? undefined : 0,
            include: {
               assignee: true,
               project: true,
               task: true,
               labels: {
                  include: {
                     label: true,
                  },
               },
            },
         });

         return issues.map((issue) => ({
            ...issue,
            labels: issue.labels.map((il) => il.label),
         }));
      } catch (error) {
         console.error('Error fetching issues:', error);
         return [];
      }
   }

   async assignIssue(issueId: string, assigneeId: string): Promise<IssueWithRelations | null> {
      try {
         await this.prisma.issue.update({
            where: { id: issueId },
            data: { assigneeId },
         });

         return this.getIssueById(issueId);
      } catch (error) {
         console.error('Error assigning issue:', error);
         throw new GraphQLError('Failed to assign issue');
      }
   }

   async updateIssueStatus(issueId: string, status: string): Promise<IssueWithRelations | null> {
      try {
         await this.prisma.issue.update({
            where: { id: issueId },
            data: { status },
         });

         return this.getIssueById(issueId);
      } catch (error) {
         console.error('Error updating issue status:', error);
         throw new GraphQLError('Failed to update issue status');
      }
   }

   async getIssuesByProject(
      projectId: string,
      filter?: IssueFilterOptions,
      orderBy?: IssueOrderBy[],
      pagination?: PaginationOptions
   ): Promise<IssueWithRelations[]> {
      const enhancedFilter = { ...filter, projectId };
      return this.getIssues(enhancedFilter, orderBy, pagination);
   }

   async getIssuesByAssignee(
      assigneeId: string,
      filter?: IssueFilterOptions,
      orderBy?: IssueOrderBy[],
      pagination?: PaginationOptions
   ): Promise<IssueWithRelations[]> {
      const enhancedFilter = { ...filter, assigneeId };
      return this.getIssues(enhancedFilter, orderBy, pagination);
   }

   async searchIssues(
      query: string,
      filter?: IssueFilterOptions,
      orderBy?: IssueOrderBy[],
      pagination?: PaginationOptions
   ): Promise<IssueWithRelations[]> {
      const enhancedFilter = { ...filter, search: query };
      return this.getIssues(enhancedFilter, orderBy, pagination);
   }
}
