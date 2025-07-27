import {
   PrismaClient,
   Task,
   Subtask,
   Issue,
   User,
   Project,
   Label,
   Cycle,
   Team,
   TaskDependency,
   IssueLabel,
   TeamMember,
   TeamProject,
   UserStatus,
   UserRole,
   IssueType,
   ProjectHealth,
   Prisma,
} from '../generated/prisma';

// Re-export Prisma types for convenience
export {
   Task,
   Subtask,
   Issue,
   User,
   Project,
   Label,
   Cycle,
   Team,
   TaskDependency,
   IssueLabel,
   TeamMember,
   TeamProject,
   UserStatus,
   UserRole,
   IssueType,
   ProjectHealth,
   Prisma,
};

// Prisma include types for relations
export type TaskWithRelations = Prisma.TaskGetPayload<{
   include: {
      subtasks: true;
      dependencies: { include: { dependsOn: true } };
      dependents: { include: { task: true } };
      issues: true;
   };
}>;

export type SubtaskWithRelations = Prisma.SubtaskGetPayload<{
   include: {
      parentTask: true;
   };
}>;

export type IssueWithRelations = Prisma.IssueGetPayload<{
   include: {
      assignee: true;
      project: true;
      cycle: true;
      task: true;
      labels: { include: { label: true } };
   };
}>;

export type UserWithRelations = Prisma.UserGetPayload<{
   include: {
      assignedIssues: true;
      teams: { include: { team: true } };
      ledProjects: true;
   };
}>;

export type ProjectWithRelations = Prisma.ProjectGetPayload<{
   include: {
      issues: true;
      lead: true;
      teams: { include: { team: true } };
   };
}>;

export type LabelWithRelations = Prisma.LabelGetPayload<{
   include: {
      issues: { include: { issue: true } };
   };
}>;

export type TeamWithRelations = Prisma.TeamGetPayload<{
   include: {
      members: { include: { user: true } };
      projects: { include: { project: true } };
      cycles: true;
   };
}>;

export type CycleWithRelations = Prisma.CycleGetPayload<{
   include: {
      team: true;
      issues: true;
   };
}>;

// Base service interfaces
export interface ServiceOptions {
   filter?: any;
   orderBy?: any[];
   pagination?: PaginationOptions;
}

export interface PaginationOptions {
   limit?: number;
   offset?: number;
   cursor?: string;
}

export interface OrderByOptions<T extends string = string> {
   field: T;
   direction: 'asc' | 'desc';
}

export interface BaseFilterOptions {
   search?: string;
   ids?: (string | number)[];
}

// Service operation results
export interface ServiceResult<T> {
   success: boolean;
   data?: T;
   error?: string;
}

// Base service interface
export interface BaseService<TModel, TCreate, TUpdate, TFilter> {
   create(data: TCreate): Promise<TModel>;
   update(id: string | number, data: TUpdate): Promise<TModel | null>;
   delete(id: string | number): Promise<boolean>;
   findById(id: string | number): Promise<TModel | null>;
   findMany(options?: ServiceOptions): Promise<TModel[]>;
}

// Base service class
export abstract class BaseServiceClass {
   constructor(protected readonly prisma: PrismaClient) {}

   protected handleError(operation: string, error: unknown): never {
      console.error(`Error in ${operation}:`, error);

      if (error instanceof Prisma.PrismaClientKnownRequestError) {
         // Handle specific Prisma errors
         switch (error.code) {
            case 'P2002':
               throw new Error(`Unique constraint violation: ${error.meta?.target}`);
            case 'P2025':
               throw new Error('Record not found');
            default:
               throw new Error(`Database error: ${error.message}`);
         }
      }

      if (error instanceof Error) {
         throw new Error(`Failed to ${operation}: ${error.message}`);
      }

      throw new Error(`Failed to ${operation}: Unknown error`);
   }

   protected buildWhereClause(filter?: any, searchFields?: string[]): any {
      if (!filter) return {};

      const where: any = {};

      // Handle search across multiple fields
      if (filter.search && searchFields?.length) {
         where.OR = searchFields.map((field: string) => ({
            [field]: { contains: filter.search, mode: 'insensitive' },
         }));
      }

      // Handle ID filtering
      if (filter.ids && filter.ids.length > 0) {
         where.id = { in: filter.ids };
      }

      return where;
   }

   protected buildOrderByClause(orderBy?: OrderByOptions[]): any[] {
      if (!orderBy || orderBy.length === 0) {
         return [{ createdAt: 'desc' }];
      }

      return orderBy.map((order) => ({
         [order.field]: order.direction,
      }));
   }

   protected buildPaginationClause(pagination?: PaginationOptions): any {
      const result: any = {};

      if (pagination?.limit) {
         result.take = pagination.limit;
      }

      if (pagination?.offset) {
         result.skip = pagination.offset;
      }

      if (pagination?.cursor) {
         result.cursor = { id: pagination.cursor };
         result.skip = 1; // Skip the cursor itself
      }

      return result;
   }
}

// JSON field helpers (for backward compatibility)
export class JSONHelper {
   static stringify<T>(value: T[]): string {
      return JSON.stringify(value || []);
   }

   static parse<T>(value: string | null): T[] {
      if (!value) return [];
      try {
         return JSON.parse(value);
      } catch {
         return [];
      }
   }
}

// Validation helpers
export class ValidationHelper {
   static isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
   }

   static isNotEmpty(value: string | undefined | null): boolean {
      return !!value && value.trim().length > 0;
   }

   static isValidId(id: string | number | undefined | null): boolean {
      return id !== null && id !== undefined && String(id).trim().length > 0;
   }

   static isValidDate(date: any): boolean {
      return date instanceof Date && !isNaN(date.getTime());
   }
}

// Common filter types
export interface StatusFilter {
   status?: string[];
}

export interface PriorityFilter {
   priority?: string[];
}

export interface DateRangeFilter {
   startDate?: Date;
   endDate?: Date;
}

export interface AssigneeFilter {
   assigneeId?: string;
}

export interface ProjectFilter {
   projectId?: string;
}

// Error types
export class ServiceError extends Error {
   constructor(
      message: string,
      public code: string = 'UNKNOWN_ERROR',
      public statusCode: number = 500
   ) {
      super(message);
      this.name = 'ServiceError';
   }
}

export class ValidationError extends ServiceError {
   constructor(message: string) {
      super(message, 'VALIDATION_ERROR', 400);
      this.name = 'ValidationError';
   }
}

export class NotFoundError extends ServiceError {
   constructor(resource: string, id: string | number) {
      super(`${resource} with ID ${id} not found`, 'NOT_FOUND', 404);
      this.name = 'NotFoundError';
   }
}

export class ConflictError extends ServiceError {
   constructor(message: string) {
      super(message, 'CONFLICT', 409);
      this.name = 'ConflictError';
   }
}
