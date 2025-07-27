import type { PrismaClient } from '../generated/prisma';

// Base interfaces for all models
export interface BaseModel {
   id: string | number;
   createdAt: Date;
   updatedAt: Date;
}

// Pagination options
export interface PaginationOptions {
   limit?: number;
   offset?: number;
   cursor?: string;
}

// Order by options
export interface OrderByOptions<T extends string = string> {
   field: T;
   direction: 'asc' | 'desc';
}

// Filter base
export interface BaseFilterOptions {
   search?: string;
   ids?: (string | number)[];
}

// Model operation result
export interface ModelResult<T> {
   success: boolean;
   data?: T;
   error?: string;
}

// Model operations interface
export interface ModelOperations<T, CreateData, UpdateData, FilterOptions> {
   create(data: CreateData): Promise<T>;
   update(id: string | number, data: UpdateData): Promise<T | null>;
   delete(id: string | number): Promise<boolean>;
   findById(id: string | number): Promise<T | null>;
   findMany(options?: {
      filter?: FilterOptions;
      orderBy?: OrderByOptions[];
      pagination?: PaginationOptions;
   }): Promise<T[]>;
}

// Base model class
export abstract class BaseModelClass {
   constructor(protected readonly prisma: PrismaClient) {}

   protected handleError(operation: string, error: unknown): never {
      console.error(`Error in ${operation}:`, error);

      if (error instanceof Error) {
         throw new Error(`Failed to ${operation}: ${error.message}`);
      }

      throw new Error(`Failed to ${operation}: Unknown error`);
   }

   protected buildWhereClause(filter?: any): any {
      if (!filter) return {};

      const where: any = {};

      // Handle search across multiple fields
      if (filter.search && filter.searchFields) {
         where.OR = filter.searchFields.map((field: string) => ({
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
      return {
         take: pagination?.limit || 50,
         skip: pagination?.offset || 0,
      };
   }
}

// Common status and priority types
export type Status = 'pending' | 'in_progress' | 'done' | 'cancelled' | 'deferred' | 'blocked';
export type Priority = 'low' | 'medium' | 'high';

// JSON field helpers
export class JSONHelper {
   static stringify<T>(value: T[]): string {
      return JSON.stringify(value || []);
   }

   static parse<T>(value: string): T[] {
      try {
         return JSON.parse(value || '[]');
      } catch {
         return [];
      }
   }

   static contains(jsonField: string, value: string): any {
      return {
         contains: value,
      };
   }
}

// Validation helpers
export class ValidationHelper {
   static isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
   }

   static isNotEmpty(value: string | undefined): boolean {
      return !!value && value.trim().length > 0;
   }

   static isValidId(id: string | number): boolean {
      return id !== null && id !== undefined && String(id).trim().length > 0;
   }
}
