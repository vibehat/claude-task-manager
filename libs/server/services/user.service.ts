import {
   User,
   UserWithRelations,
   UserStatus,
   UserRole,
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
export type CreateUserData = Omit<
   Prisma.UserCreateInput,
   'assignedIssues' | 'teams' | 'ledProjects'
> & {
   teamIds?: string[];
};

export type UpdateUserData = Partial<Omit<CreateUserData, 'email'>>;

// Filter options
export interface UserFilterOptions {
   search?: string;
   ids?: string[];
   status?: UserStatus[];
   role?: UserRole[];
   teamIds?: string[];
   joinedDate?: {
      startDate?: Date;
      endDate?: Date;
   };
}

export type UserOrderByField = keyof Pick<
   User,
   'id' | 'name' | 'email' | 'status' | 'role' | 'joinedDate' | 'createdAt' | 'updatedAt'
>;

export class UserService
   extends BaseServiceClass
   implements BaseService<UserWithRelations, CreateUserData, UpdateUserData, UserFilterOptions>
{
   private readonly includeRelations = {
      assignedIssues: true,
      teams: {
         include: { team: true },
      },
      ledProjects: true,
   } as const;

   async create(data: CreateUserData): Promise<UserWithRelations> {
      try {
         this.validateCreateData(data);

         // Check if user with this email already exists
         const existing = await this.prisma.user.findUnique({
            where: { email: data.email },
         });

         if (existing) {
            throw new ConflictError(`User with email ${data.email} already exists`);
         }

         // Prepare data for creation
         const { teamIds, ...userData } = data;
         const createData: Prisma.UserCreateInput = {
            ...userData,
            teamIds: JSONHelper.stringify(teamIds || []),
         };

         const user = await this.prisma.user.create({
            data: createData,
            include: this.includeRelations,
         });

         return this.transformUser(user);
      } catch (error) {
         this.handleError('create user', error);
      }
   }

   async update(id: string, data: UpdateUserData): Promise<UserWithRelations | null> {
      try {
         const existing = await this.prisma.user.findUnique({ where: { id } });

         if (!existing) {
            return null;
         }

         // Prepare update data
         const { teamIds, ...updateData } = data;
         const prismaUpdateData: Prisma.UserUpdateInput = {
            ...updateData,
         };

         // Handle teamIds
         if (teamIds !== undefined) {
            prismaUpdateData.teamIds = JSONHelper.stringify(teamIds);
         }

         await this.prisma.user.update({
            where: { id },
            data: prismaUpdateData,
         });

         return this.findById(id);
      } catch (error) {
         this.handleError('update user', error);
      }
   }

   async delete(id: string): Promise<boolean> {
      try {
         const user = await this.prisma.user.findUnique({ where: { id } });

         if (!user) {
            return false;
         }

         // Update any assigned issues to remove the assignee
         await this.prisma.issue.updateMany({
            where: { assigneeId: id },
            data: { assigneeId: null },
         });

         // Update any led projects to remove the lead
         await this.prisma.project.updateMany({
            where: { leadId: id },
            data: { leadId: null },
         });

         // Delete the user (team memberships will be cascade deleted)
         await this.prisma.user.delete({ where: { id } });

         return true;
      } catch (error) {
         this.handleError('delete user', error);
      }
   }

   async findById(id: string): Promise<UserWithRelations | null> {
      try {
         const user = await this.prisma.user.findUnique({
            where: { id },
            include: this.includeRelations,
         });

         return user ? this.transformUser(user) : null;
      } catch (error) {
         this.handleError('find user by ID', error);
      }
   }

   async findByEmail(email: string): Promise<UserWithRelations | null> {
      try {
         const user = await this.prisma.user.findUnique({
            where: { email },
            include: this.includeRelations,
         });

         return user ? this.transformUser(user) : null;
      } catch (error) {
         this.handleError('find user by email', error);
      }
   }

   async findMany(options?: ServiceOptions): Promise<UserWithRelations[]> {
      try {
         const where = this.buildUserWhereClause(options?.filter);
         const orderBy = this.buildOrderByClause(options?.orderBy);
         const pagination = this.buildPaginationClause(options?.pagination);

         const users = await this.prisma.user.findMany({
            where,
            orderBy,
            ...pagination,
            include: this.includeRelations,
         });

         return users.map((user) => this.transformUser(user));
      } catch (error) {
         this.handleError('find users', error);
      }
   }

   // Convenience methods
   async findByStatus(status: UserStatus): Promise<UserWithRelations[]> {
      return this.findMany({ filter: { status: [status] } });
   }

   async findByRole(role: UserRole): Promise<UserWithRelations[]> {
      return this.findMany({ filter: { role: [role] } });
   }

   async search(query: string): Promise<UserWithRelations[]> {
      return this.findMany({ filter: { search: query } });
   }

   async updateStatus(id: string, status: UserStatus): Promise<UserWithRelations | null> {
      return this.update(id, { status });
   }

   async updateRole(id: string, role: UserRole): Promise<UserWithRelations | null> {
      return this.update(id, { role });
   }

   // Team management
   async addToTeam(userId: string, teamId: string): Promise<boolean> {
      try {
         // Check if user exists
         const user = await this.prisma.user.findUnique({ where: { id: userId } });
         if (!user) {
            throw new NotFoundError('User', userId);
         }

         // Check if team exists
         const team = await this.prisma.team.findUnique({ where: { id: teamId } });
         if (!team) {
            throw new NotFoundError('Team', teamId);
         }

         // Check if membership already exists
         const existing = await this.prisma.teamMember.findUnique({
            where: { teamId_userId: { teamId, userId } },
         });

         if (existing) {
            return true; // Already a member
         }

         // Add team membership
         await this.prisma.teamMember.create({
            data: { teamId, userId },
         });

         // Update teamIds in user for backward compatibility
         const currentTeamIds = JSONHelper.parse<string>(user.teamIds);
         if (!currentTeamIds.includes(teamId)) {
            currentTeamIds.push(teamId);
            await this.prisma.user.update({
               where: { id: userId },
               data: { teamIds: JSONHelper.stringify(currentTeamIds) },
            });
         }

         return true;
      } catch (error) {
         this.handleError('add user to team', error);
      }
   }

   async removeFromTeam(userId: string, teamId: string): Promise<boolean> {
      try {
         // Remove team membership
         await this.prisma.teamMember.deleteMany({
            where: { teamId, userId },
         });

         // Update teamIds in user for backward compatibility
         const user = await this.prisma.user.findUnique({ where: { id: userId } });
         if (user) {
            const currentTeamIds = JSONHelper.parse<string>(user.teamIds);
            const updatedTeamIds = currentTeamIds.filter((id) => id !== teamId);
            await this.prisma.user.update({
               where: { id: userId },
               data: { teamIds: JSONHelper.stringify(updatedTeamIds) },
            });
         }

         return true;
      } catch (error) {
         this.handleError('remove user from team', error);
      }
   }

   async getTeams(userId: string): Promise<any[]> {
      try {
         const teamMemberships = await this.prisma.teamMember.findMany({
            where: { userId },
            include: { team: true },
         });

         return teamMemberships.map((tm) => tm.team);
      } catch (error) {
         this.handleError('get user teams', error);
      }
   }

   async getUsersByTeam(teamId: string): Promise<UserWithRelations[]> {
      try {
         const teamMemberships = await this.prisma.teamMember.findMany({
            where: { teamId },
            include: {
               user: {
                  include: this.includeRelations,
               },
            },
         });

         return teamMemberships.map((tm) => this.transformUser(tm.user));
      } catch (error) {
         this.handleError('get users by team', error);
      }
   }

   // Statistics and analytics
   async getAssignedIssuesCount(userId: string): Promise<number> {
      try {
         const count = await this.prisma.issue.count({
            where: { assigneeId: userId },
         });

         return count;
      } catch (error) {
         this.handleError('get assigned issues count', error);
      }
   }

   async getLedProjectsCount(userId: string): Promise<number> {
      try {
         const count = await this.prisma.project.count({
            where: { leadId: userId },
         });

         return count;
      } catch (error) {
         this.handleError('get led projects count', error);
      }
   }

   // Bulk operations
   async createMany(data: CreateUserData[]): Promise<UserWithRelations[]> {
      try {
         const results: UserWithRelations[] = [];

         // Create users one by one to handle validation and email uniqueness
         for (const userData of data) {
            const user = await this.create(userData);
            results.push(user);
         }

         return results;
      } catch (error) {
         this.handleError('create many users', error);
      }
   }

   async updateStatusBulk(userIds: string[], status: UserStatus): Promise<number> {
      try {
         const result = await this.prisma.user.updateMany({
            where: { id: { in: userIds } },
            data: { status },
         });

         return result.count;
      } catch (error) {
         this.handleError('bulk update user status', error);
      }
   }

   // Private helper methods
   private validateCreateData(data: CreateUserData): void {
      if (!ValidationHelper.isNotEmpty(data.name)) {
         throw new Error('User name is required');
      }

      if (!ValidationHelper.isNotEmpty(data.email)) {
         throw new Error('User email is required');
      }

      if (!ValidationHelper.isValidEmail(data.email)) {
         throw new Error('Invalid email format');
      }

      if (!ValidationHelper.isValidDate(data.joinedDate)) {
         throw new Error('Valid joined date is required');
      }
   }

   private buildUserWhereClause(filter?: UserFilterOptions): Prisma.UserWhereInput {
      const where: Prisma.UserWhereInput = {};

      if (!filter) return where;

      // Search across multiple fields
      if (filter.search) {
         where.OR = [
            { name: { contains: filter.search, mode: 'insensitive' } },
            { email: { contains: filter.search, mode: 'insensitive' } },
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

      // Role filter
      if (filter.role?.length) {
         where.role = { in: filter.role };
      }

      // Team filter (simplified - checks if any team ID is contained in teamIds JSON)
      if (filter.teamIds?.length) {
         where.OR = filter.teamIds.map((teamId) => ({
            teamIds: { contains: teamId },
         }));
      }

      // Joined date filter
      if (filter.joinedDate) {
         where.joinedDate = {};
         if (filter.joinedDate.startDate) {
            where.joinedDate.gte = filter.joinedDate.startDate;
         }
         if (filter.joinedDate.endDate) {
            where.joinedDate.lte = filter.joinedDate.endDate;
         }
      }

      return where;
   }

   private transformUser(user: any): UserWithRelations {
      return {
         ...user,
         teamIds: JSONHelper.parse<string>(user.teamIds),
      };
   }
}
