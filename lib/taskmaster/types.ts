/**
 * Task Master API Library Types
 *
 * Type definitions specific to the lib/taskmaster module,
 * extending the core Task Master types for database operations.
 */

import { Task, TaskStatus, TaskPriority, TasksData } from '../types/taskmaster';

// Database-specific types that extend the core Task Master types
export interface TaskMasterSyncOptions {
   /** Path to tasks.json file */
   tasksJsonPath?: string;
   /** Whether to perform incremental sync (only changed tasks) */
   incremental?: boolean;
   /** Whether to validate data integrity during sync */
   validateIntegrity?: boolean;
   /** Maximum number of retry attempts for failed operations */
   maxRetries?: number;
}

export interface SyncResult {
   /** Whether the sync operation was successful */
   success: boolean;
   /** Number of tasks that were created/updated */
   tasksProcessed: number;
   /** Number of subtasks that were created/updated */
   subtasksProcessed: number;
   /** Any errors that occurred during sync */
   errors: string[];
   /** Duration of sync operation in milliseconds */
   duration: number;
   /** Timestamp when sync was performed */
   timestamp: Date;
}

export interface TaskMasterDBOptions {
   /** Whether to include subtasks in queries by default */
   includeSubtasks?: boolean;
   /** Maximum number of results to return in queries */
   limit?: number;
   /** Offset for pagination */
   offset?: number;
}

// Query interfaces for database operations
export interface TaskQueryFilters {
   /** Filter by task status */
   status?: TaskStatus | TaskStatus[];
   /** Filter by task priority */
   priority?: TaskPriority | TaskPriority[];
   /** Filter by task IDs */
   ids?: number[];
   /** Filter by whether task has dependencies */
   hasDependencies?: boolean;
   /** Filter by whether task has subtasks */
   hasSubtasks?: boolean;
   /** Text search in title and description */
   search?: string;
}

export interface TaskOrderBy {
   /** Field to order by */
   field: 'id' | 'title' | 'status' | 'priority' | 'createdAt' | 'updatedAt';
   /** Order direction */
   direction: 'asc' | 'desc';
}

// Extended task interface for database operations
export interface TaskWithTimestamps extends Task {
   /** When the task was created in the database */
   createdAt: Date;
   /** When the task was last updated in the database */
   updatedAt: Date;
}

// Error types specific to lib/taskmaster
export class TaskMasterSyncError extends Error {
   constructor(
      message: string,
      public code: 'FILE_READ_ERROR' | 'DATABASE_ERROR' | 'VALIDATION_ERROR' | 'UNKNOWN_ERROR',
      public details?: any
   ) {
      super(message);
      this.name = 'TaskMasterSyncError';
   }
}

export class TaskMasterDBError extends Error {
   constructor(
      message: string,
      public code: 'CONNECTION_ERROR' | 'QUERY_ERROR' | 'NOT_FOUND' | 'UNKNOWN_ERROR',
      public details?: any
   ) {
      super(message);
      this.name = 'TaskMasterDBError';
   }
}
