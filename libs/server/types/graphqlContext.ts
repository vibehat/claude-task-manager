/**
 * GraphQL Context Types
 * Context provided to all GraphQL resolvers
 */

import type { NextRequest } from 'next/server';
import type { Task } from './taskmaster';

/**
 * GraphQL execution context provided to all resolvers
 */
export interface GraphQLContext {
   /** The original HTTP request */
   req: NextRequest;

   /** Request timestamp */
   timestamp: string;

   /** User information (for future authentication) */
   user?: {
      id: string;
      name: string;
      email: string;
   };

   /** Data loaders for efficient data fetching */
   dataSources?: {
      tasks?: TaskDataSource;
      cli?: CLIDataSource;
      sync?: SyncDataSource;
   };
}

/**
 * Task data source interface
 */
export interface TaskDataSource {
   getAllTasks(): Promise<Task[]>;
   getTaskById(id: string): Promise<Task | null>;
   getTasksByStatus(status: string): Promise<Task[]>;
   createTask(input: any): Promise<Task>;
   updateTask(id: string, input: any): Promise<Task>;
   deleteTask(id: string): Promise<boolean>;
}

/**
 * CLI data source interface
 */
export interface CLIDataSource {
   executeCommand(command: string, args?: string[]): Promise<any>;
   getCommandHistory(): Promise<any[]>;
   getCommandById(id: string): Promise<any | null>;
   getSystemStatus(): Promise<any>;
}

/**
 * Sync data source interface
 */
export interface SyncDataSource {
   getSyncOperations(): Promise<any[]>;
   getSyncStatus(): Promise<any>;
   createSyncOperation(type: string, data: any): Promise<any>;
   resolveSyncConflict(conflictId: string, resolution: string): Promise<boolean>;
}

/**
 * Helper type for resolver parent objects
 */
export type ResolverParent<T = any> = T & {
   [key: string]: any;
};

/**
 * Common resolver arguments
 */
export interface PaginationArgs {
   first?: number;
   after?: string;
   last?: number;
   before?: string;
   limit?: number;
}

export interface FilterArgs {
   filter?: any;
   orderBy?: any[];
   pagination?: PaginationArgs;
}

/**
 * Resolver function type with proper context
 */
export type Resolver<TParent = any, TArgs = any, TResult = any> = (
   parent: TParent,
   args: TArgs,
   context: GraphQLContext,
   info?: any
) => TResult | Promise<TResult>;

/**
 * Field resolver type
 */
export type FieldResolver<TParent = any, TArgs = any, TResult = any> = Resolver<
   TParent,
   TArgs,
   TResult
>;

/**
 * Query resolver type
 */
export type QueryResolver<TArgs = any, TResult = any> = Resolver<{}, TArgs, TResult>;

/**
 * Mutation resolver type
 */
export type MutationResolver<TArgs = any, TResult = any> = Resolver<{}, TArgs, TResult>;
