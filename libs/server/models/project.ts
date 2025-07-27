import type { PrismaClient, Project } from '../generated/prisma';
import { GraphQLError } from 'graphql';

export interface ProjectWithRelations extends Project {
   issues?: any[]; // Issue type will be imported when resolvers are created
}

export interface CreateProjectData {
   name: string;
   description?: string;
   color?: string;
   identifier?: string;
}

export interface UpdateProjectData {
   name?: string;
   description?: string;
   color?: string;
   identifier?: string;
}

export interface ProjectFilterOptions {
   search?: string;
   identifier?: string;
}

export interface PaginationOptions {
   first?: number;
   after?: string;
   last?: number;
   before?: string;
   limit?: number;
}

export class ProjectModel {
   constructor(private prisma: PrismaClient) {}

   async createProject(data: CreateProjectData): Promise<ProjectWithRelations> {
      try {
         const project = await this.prisma.project.create({
            data: {
               name: data.name,
               description: data.description,
               color: data.color,
               identifier: data.identifier,
            },
            include: {
               issues: true,
            },
         });

         return project;
      } catch (error) {
         console.error('Error creating project:', error);
         throw new GraphQLError('Failed to create project');
      }
   }

   async updateProject(id: string, data: UpdateProjectData): Promise<ProjectWithRelations | null> {
      try {
         const existingProject = await this.prisma.project.findUnique({
            where: { id },
         });

         if (!existingProject) {
            throw new GraphQLError(`Project with ID ${id} not found`);
         }

         const project = await this.prisma.project.update({
            where: { id },
            data,
            include: {
               issues: true,
            },
         });

         return project;
      } catch (error) {
         console.error('Error updating project:', error);
         throw new GraphQLError('Failed to update project');
      }
   }

   async deleteProject(id: string): Promise<boolean> {
      try {
         const existingProject = await this.prisma.project.findUnique({
            where: { id },
         });

         if (!existingProject) {
            throw new GraphQLError(`Project with ID ${id} not found`);
         }

         // Update any issues to remove the project association
         await this.prisma.issue.updateMany({
            where: { projectId: id },
            data: { projectId: null },
         });

         // Delete the project
         await this.prisma.project.delete({
            where: { id },
         });

         return true;
      } catch (error) {
         console.error('Error deleting project:', error);
         throw new GraphQLError('Failed to delete project');
      }
   }

   async getProjectById(id: string): Promise<ProjectWithRelations | null> {
      try {
         const project = await this.prisma.project.findUnique({
            where: { id },
            include: {
               issues: true,
            },
         });

         return project;
      } catch (error) {
         console.error('Error fetching project by ID:', error);
         return null;
      }
   }

   async getProjects(
      filter?: ProjectFilterOptions,
      pagination?: PaginationOptions
   ): Promise<ProjectWithRelations[]> {
      try {
         const where: any = {};

         if (filter) {
            if (filter.search) {
               where.OR = [
                  { name: { contains: filter.search } },
                  { description: { contains: filter.search } },
               ];
            }

            if (filter.identifier) {
               where.identifier = { contains: filter.identifier };
            }
         }

         const projects = await this.prisma.project.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            take: pagination?.limit || pagination?.first || 50,
            skip: pagination?.first ? undefined : 0,
            include: {
               issues: true,
            },
         });

         return projects;
      } catch (error) {
         console.error('Error fetching projects:', error);
         return [];
      }
   }
}
