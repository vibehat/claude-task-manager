import type {
   Project,
   ProjectWithRelations,
   ProjectHealth,
   BaseService,
   ServiceOptions,
   Prisma,
} from './types';
import { BaseServiceClass, ValidationHelper, NotFoundError, ConflictError } from './types';

// Create and Update data types using Prisma
export type CreateProjectData = Omit<Prisma.ProjectCreateInput, 'issues' | 'lead' | 'teams'> & {
   leadId?: string;
   teamIds?: string[];
};

export type UpdateProjectData = Partial<CreateProjectData>;

// Filter options
export interface ProjectFilterOptions {
   search?: string;
   ids?: string[];
   health?: ProjectHealth[];
   leadId?: string;
   teamIds?: string[];
   percentComplete?: {
      min?: number;
      max?: number;
   };
   startDate?: {
      startDate?: Date;
      endDate?: Date;
   };
}

export type ProjectOrderByField = keyof Pick<
   Project,
   'id' | 'name' | 'health' | 'percentComplete' | 'startDate' | 'createdAt' | 'updatedAt'
>;

export class ProjectService
   extends BaseServiceClass
   implements
      BaseService<ProjectWithRelations, CreateProjectData, UpdateProjectData, ProjectFilterOptions>
{
   private readonly includeRelations = {
      issues: true,
      lead: true,
      teams: {
         include: { team: true },
      },
   } as const;

   async create(data: CreateProjectData): Promise<ProjectWithRelations> {
      try {
         this.validateCreateData(data);

         // Extract related data
         const { leadId, teamIds, ...projectData } = data;

         // Prepare Prisma create input
         const createData: Prisma.ProjectCreateInput = {
            ...projectData,
         };

         // Add lead relation
         if (leadId) {
            // Verify lead exists
            const lead = await this.prisma.user.findUnique({ where: { id: leadId } });
            if (!lead) {
               throw new NotFoundError('User (lead)', leadId);
            }
            createData.lead = { connect: { id: leadId } };
         }

         const project = await this.prisma.project.create({
            data: createData,
            include: this.includeRelations,
         });

         // Add team associations if provided
         if (teamIds?.length) {
            await this.addTeams(project.id, teamIds);
            // Return updated project with teams
            return this.findById(project.id) as Promise<ProjectWithRelations>;
         }

         return project;
      } catch (error) {
         this.handleError('create project', error);
      }
   }

   async update(id: string, data: UpdateProjectData): Promise<ProjectWithRelations | null> {
      try {
         const existing = await this.prisma.project.findUnique({ where: { id } });

         if (!existing) {
            return null;
         }

         // Extract related data
         const { leadId, teamIds, ...updateData } = data;

         // Prepare Prisma update input
         const prismaUpdateData: Prisma.ProjectUpdateInput = {
            ...updateData,
         };

         // Handle lead relation
         if (leadId !== undefined) {
            if (leadId) {
               // Verify lead exists
               const lead = await this.prisma.user.findUnique({ where: { id: leadId } });
               if (!lead) {
                  throw new NotFoundError('User (lead)', leadId);
               }
               prismaUpdateData.lead = { connect: { id: leadId } };
            } else {
               prismaUpdateData.lead = { disconnect: true };
            }
         }

         // Update the project
         await this.prisma.project.update({
            where: { id },
            data: prismaUpdateData,
         });

         // Handle team updates
         if (teamIds !== undefined) {
            await this.updateTeams(id, teamIds);
         }

         return this.findById(id);
      } catch (error) {
         this.handleError('update project', error);
      }
   }

   async delete(id: string): Promise<boolean> {
      try {
         const project = await this.prisma.project.findUnique({ where: { id } });

         if (!project) {
            return false;
         }

         // Prisma will handle cascade deletes for teams and set issues project to null
         await this.prisma.project.delete({ where: { id } });

         return true;
      } catch (error) {
         this.handleError('delete project', error);
      }
   }

   async findById(id: string): Promise<ProjectWithRelations | null> {
      try {
         const project = await this.prisma.project.findUnique({
            where: { id },
            include: this.includeRelations,
         });

         return project;
      } catch (error) {
         this.handleError('find project by ID', error);
      }
   }

   async findByIdentifier(identifier: string): Promise<ProjectWithRelations | null> {
      try {
         const project = await this.prisma.project.findFirst({
            where: { identifier },
            include: this.includeRelations,
         });

         return project;
      } catch (error) {
         this.handleError('find project by identifier', error);
      }
   }

   async findMany(options?: ServiceOptions): Promise<ProjectWithRelations[]> {
      try {
         const where = this.buildProjectWhereClause(options?.filter);
         const orderBy = this.buildOrderByClause(options?.orderBy);
         const pagination = this.buildPaginationClause(options?.pagination);

         const projects = await this.prisma.project.findMany({
            where,
            orderBy,
            ...pagination,
            include: this.includeRelations,
         });

         return projects;
      } catch (error) {
         this.handleError('find projects', error);
      }
   }

   // Convenience methods
   async findByHealth(health: ProjectHealth): Promise<ProjectWithRelations[]> {
      return this.findMany({ filter: { health: [health] } });
   }

   async findByLead(leadId: string): Promise<ProjectWithRelations[]> {
      return this.findMany({ filter: { leadId } });
   }

   async search(query: string): Promise<ProjectWithRelations[]> {
      return this.findMany({ filter: { search: query } });
   }

   async updateHealth(id: string, health: ProjectHealth): Promise<ProjectWithRelations | null> {
      return this.update(id, { health });
   }

   async updateProgress(id: string, percentComplete: number): Promise<ProjectWithRelations | null> {
      if (percentComplete < 0 || percentComplete > 100) {
         throw new Error('Progress must be between 0 and 100');
      }
      return this.update(id, { percentComplete });
   }

   // Team management
   async addTeam(projectId: string, teamId: string): Promise<boolean> {
      try {
         // Check if both project and team exist
         const [project, team] = await Promise.all([
            this.prisma.project.findUnique({ where: { id: projectId } }),
            this.prisma.team.findUnique({ where: { id: teamId } }),
         ]);

         if (!project) {
            throw new NotFoundError('Project', projectId);
         }

         if (!team) {
            throw new NotFoundError('Team', teamId);
         }

         // Check if association already exists
         const existing = await this.prisma.teamProject.findUnique({
            where: { teamId_projectId: { teamId, projectId } },
         });

         if (existing) {
            return true; // Already associated
         }

         await this.prisma.teamProject.create({
            data: { teamId, projectId },
         });

         return true;
      } catch (error) {
         this.handleError('add team to project', error);
      }
   }

   async removeTeam(projectId: string, teamId: string): Promise<boolean> {
      try {
         await this.prisma.teamProject.deleteMany({
            where: { teamId, projectId },
         });
         return true;
      } catch (error) {
         // Consider successful if association doesn't exist
         return true;
      }
   }

   async getTeams(projectId: string): Promise<any[]> {
      try {
         const teamProjects = await this.prisma.teamProject.findMany({
            where: { projectId },
            include: { team: true },
         });

         return teamProjects.map((tp) => tp.team);
      } catch (error) {
         this.handleError('get project teams', error);
      }
   }

   async getProjectsByTeam(teamId: string): Promise<ProjectWithRelations[]> {
      try {
         const teamProjects = await this.prisma.teamProject.findMany({
            where: { teamId },
            include: {
               project: {
                  include: this.includeRelations,
               },
            },
         });

         return teamProjects.map((tp) => tp.project);
      } catch (error) {
         this.handleError('get projects by team', error);
      }
   }

   // Statistics and analytics
   async getIssuesCount(projectId: string): Promise<number> {
      try {
         const count = await this.prisma.issue.count({
            where: { projectId },
         });

         return count;
      } catch (error) {
         this.handleError('get project issues count', error);
      }
   }

   async getIssuesByStatus(projectId: string): Promise<Record<string, number>> {
      try {
         const issues = await this.prisma.issue.groupBy({
            by: ['status'],
            where: { projectId },
            _count: { status: true },
         });

         const result: Record<string, number> = {};
         issues.forEach((item) => {
            result[item.status] = item._count.status;
         });

         return result;
      } catch (error) {
         this.handleError('get project issues by status', error);
      }
   }

   // Private helper methods
   private validateCreateData(data: CreateProjectData): void {
      if (!ValidationHelper.isNotEmpty(data.name)) {
         throw new Error('Project name is required');
      }

      if (
         data.percentComplete !== undefined &&
         (data.percentComplete < 0 || data.percentComplete > 100)
      ) {
         throw new Error('Project progress must be between 0 and 100');
      }

      if (data.startDate && !ValidationHelper.isValidDate(data.startDate)) {
         throw new Error('Invalid start date');
      }
   }

   private buildProjectWhereClause(filter?: ProjectFilterOptions): Prisma.ProjectWhereInput {
      const where: Prisma.ProjectWhereInput = {};

      if (!filter) return where;

      // Search across multiple fields
      if (filter.search) {
         where.OR = [
            { name: { contains: filter.search, mode: 'insensitive' } },
            { description: { contains: filter.search, mode: 'insensitive' } },
            { identifier: { contains: filter.search, mode: 'insensitive' } },
         ];
      }

      // ID filter
      if (filter.ids?.length) {
         where.id = { in: filter.ids };
      }

      // Health filter
      if (filter.health?.length) {
         where.health = { in: filter.health };
      }

      // Lead filter
      if (filter.leadId) {
         where.leadId = filter.leadId;
      }

      // Team filter
      if (filter.teamIds?.length) {
         where.teams = {
            some: {
               teamId: { in: filter.teamIds },
            },
         };
      }

      // Progress filter
      if (filter.percentComplete) {
         where.percentComplete = {};
         if (filter.percentComplete.min !== undefined) {
            where.percentComplete.gte = filter.percentComplete.min;
         }
         if (filter.percentComplete.max !== undefined) {
            where.percentComplete.lte = filter.percentComplete.max;
         }
      }

      // Start date filter
      if (filter.startDate) {
         where.startDate = {};
         if (filter.startDate.startDate) {
            where.startDate.gte = filter.startDate.startDate;
         }
         if (filter.startDate.endDate) {
            where.startDate.lte = filter.startDate.endDate;
         }
      }

      return where;
   }

   private async addTeams(projectId: string, teamIds: string[]): Promise<void> {
      if (!teamIds.length) return;

      // Verify all teams exist
      const teams = await this.prisma.team.findMany({
         where: { id: { in: teamIds } },
         select: { id: true },
      });

      const foundIds = teams.map((t) => t.id);
      const missingIds = teamIds.filter((id) => !foundIds.includes(id));

      if (missingIds.length) {
         throw new NotFoundError('Teams', missingIds.join(', '));
      }

      await this.prisma.teamProject.createMany({
         data: teamIds.map((teamId) => ({ teamId, projectId })),
         skipDuplicates: true,
      });
   }

   private async updateTeams(projectId: string, teamIds: string[]): Promise<void> {
      // Remove existing team associations
      await this.prisma.teamProject.deleteMany({
         where: { projectId },
      });

      // Add new team associations
      if (teamIds.length > 0) {
         await this.addTeams(projectId, teamIds);
      }
   }
}
