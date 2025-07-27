import { PrismaClient, User, UserStatus, UserRole } from '../generated/prisma';
import { GraphQLError } from 'graphql';

export interface UserWithRelations extends User {
   assignedIssues?: any[]; // Issue type will be imported when resolvers are created
}

export interface CreateUserData {
   name: string;
   email: string;
   avatarUrl?: string;
   status?: UserStatus;
   role?: UserRole;
   joinedDate: Date;
   teamIds?: string[];
}

export interface UpdateUserData {
   name?: string;
   avatarUrl?: string;
   status?: UserStatus;
   role?: UserRole;
   teamIds?: string[];
}

export interface UserFilterOptions {
   status?: UserStatus[];
   role?: UserRole[];
   search?: string;
   teamIds?: string[];
}

export interface PaginationOptions {
   first?: number;
   after?: string;
   last?: number;
   before?: string;
   limit?: number;
}

export class UserModel {
   constructor(private prisma: PrismaClient) {}

   async createUser(data: CreateUserData): Promise<UserWithRelations> {
      try {
         // Check if email is unique
         const existingUser = await this.prisma.user.findUnique({
            where: { email: data.email },
         });

         if (existingUser) {
            throw new GraphQLError(`User with email ${data.email} already exists`);
         }

         const user = await this.prisma.user.create({
            data: {
               name: data.name,
               email: data.email,
               avatarUrl: data.avatarUrl,
               status: data.status || 'OFFLINE',
               role: data.role || 'MEMBER',
               joinedDate: data.joinedDate,
               teamIds: JSON.stringify(data.teamIds || []),
            },
            include: {
               assignedIssues: true,
            },
         });

         return user;
      } catch (error) {
         console.error('Error creating user:', error);
         throw new GraphQLError('Failed to create user');
      }
   }

   async updateUser(id: string, data: UpdateUserData): Promise<UserWithRelations | null> {
      try {
         const existingUser = await this.prisma.user.findUnique({
            where: { id },
         });

         if (!existingUser) {
            throw new GraphQLError(`User with ID ${id} not found`);
         }

         const updateData: any = { ...data };
         if (data.teamIds !== undefined) {
            updateData.teamIds = JSON.stringify(data.teamIds);
         }

         const user = await this.prisma.user.update({
            where: { id },
            data: updateData,
            include: {
               assignedIssues: true,
            },
         });

         return user;
      } catch (error) {
         console.error('Error updating user:', error);
         throw new GraphQLError('Failed to update user');
      }
   }

   async deleteUser(id: string): Promise<boolean> {
      try {
         const existingUser = await this.prisma.user.findUnique({
            where: { id },
         });

         if (!existingUser) {
            throw new GraphQLError(`User with ID ${id} not found`);
         }

         // Update any assigned issues to remove the assignee
         await this.prisma.issue.updateMany({
            where: { assigneeId: id },
            data: { assigneeId: null },
         });

         // Delete the user
         await this.prisma.user.delete({
            where: { id },
         });

         return true;
      } catch (error) {
         console.error('Error deleting user:', error);
         throw new GraphQLError('Failed to delete user');
      }
   }

   async getUserById(id: string): Promise<UserWithRelations | null> {
      try {
         const user = await this.prisma.user.findUnique({
            where: { id },
            include: {
               assignedIssues: true,
            },
         });

         return user;
      } catch (error) {
         console.error('Error fetching user by ID:', error);
         return null;
      }
   }

   async getUsers(
      filter?: UserFilterOptions,
      pagination?: PaginationOptions
   ): Promise<UserWithRelations[]> {
      try {
         const where: any = {};

         if (filter) {
            if (filter.status && filter.status.length > 0) {
               where.status = { in: filter.status };
            }

            if (filter.role && filter.role.length > 0) {
               where.role = { in: filter.role };
            }

            if (filter.search) {
               where.OR = [
                  { name: { contains: filter.search } },
                  { email: { contains: filter.search } },
               ];
            }

            if (filter.teamIds && filter.teamIds.length > 0) {
               // This is a simplified filter - in production, you might want more sophisticated JSON querying
               where.teamIds = {
                  contains: filter.teamIds[0], // For simplicity, just check if the first team ID is contained
               };
            }
         }

         const users = await this.prisma.user.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            take: pagination?.limit || pagination?.first || 50,
            skip: pagination?.first ? undefined : 0,
            include: {
               assignedIssues: true,
            },
         });

         return users;
      } catch (error) {
         console.error('Error fetching users:', error);
         return [];
      }
   }
}
