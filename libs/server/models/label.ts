import { PrismaClient, Label } from '../generated/prisma';
import { GraphQLError } from 'graphql';

export interface LabelWithRelations extends Label {
   issues?: any[]; // Issue type will be imported when resolvers are created
}

export interface CreateLabelData {
   name: string;
   color: string;
   description?: string;
}

export interface UpdateLabelData {
   name?: string;
   color?: string;
   description?: string;
}

export interface LabelFilterOptions {
   search?: string;
   color?: string;
}

export interface PaginationOptions {
   first?: number;
   after?: string;
   last?: number;
   before?: string;
   limit?: number;
}

export class LabelModel {
   constructor(private prisma: PrismaClient) {}

   async createLabel(data: CreateLabelData): Promise<LabelWithRelations> {
      try {
         const label = await this.prisma.label.create({
            data: {
               name: data.name,
               color: data.color,
               description: data.description,
            },
            include: {
               issues: {
                  include: {
                     issue: true,
                  },
               },
            },
         });

         return {
            ...label,
            issues: label.issues.map((il) => il.issue),
         };
      } catch (error) {
         console.error('Error creating label:', error);
         throw new GraphQLError('Failed to create label');
      }
   }

   async updateLabel(id: string, data: UpdateLabelData): Promise<LabelWithRelations | null> {
      try {
         const existingLabel = await this.prisma.label.findUnique({
            where: { id },
         });

         if (!existingLabel) {
            throw new GraphQLError(`Label with ID ${id} not found`);
         }

         const label = await this.prisma.label.update({
            where: { id },
            data,
            include: {
               issues: {
                  include: {
                     issue: true,
                  },
               },
            },
         });

         return {
            ...label,
            issues: label.issues.map((il) => il.issue),
         };
      } catch (error) {
         console.error('Error updating label:', error);
         throw new GraphQLError('Failed to update label');
      }
   }

   async deleteLabel(id: string): Promise<boolean> {
      try {
         const existingLabel = await this.prisma.label.findUnique({
            where: { id },
         });

         if (!existingLabel) {
            throw new GraphQLError(`Label with ID ${id} not found`);
         }

         // Delete all issue-label associations
         await this.prisma.issueLabel.deleteMany({
            where: { labelId: id },
         });

         // Delete the label
         await this.prisma.label.delete({
            where: { id },
         });

         return true;
      } catch (error) {
         console.error('Error deleting label:', error);
         throw new GraphQLError('Failed to delete label');
      }
   }

   async getLabelById(id: string): Promise<LabelWithRelations | null> {
      try {
         const label = await this.prisma.label.findUnique({
            where: { id },
            include: {
               issues: {
                  include: {
                     issue: true,
                  },
               },
            },
         });

         if (!label) {
            return null;
         }

         return {
            ...label,
            issues: label.issues.map((il) => il.issue),
         };
      } catch (error) {
         console.error('Error fetching label by ID:', error);
         return null;
      }
   }

   async getLabels(
      filter?: LabelFilterOptions,
      pagination?: PaginationOptions
   ): Promise<LabelWithRelations[]> {
      try {
         const where: any = {};

         if (filter) {
            if (filter.search) {
               where.OR = [
                  { name: { contains: filter.search } },
                  { description: { contains: filter.search } },
               ];
            }

            if (filter.color) {
               where.color = { contains: filter.color };
            }
         }

         const labels = await this.prisma.label.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            take: pagination?.limit || pagination?.first || 50,
            skip: pagination?.first ? undefined : 0,
            include: {
               issues: {
                  include: {
                     issue: true,
                  },
               },
            },
         });

         return labels.map((label) => ({
            ...label,
            issues: label.issues.map((il) => il.issue),
         }));
      } catch (error) {
         console.error('Error fetching labels:', error);
         return [];
      }
   }
}
