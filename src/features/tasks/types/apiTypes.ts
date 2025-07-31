/**
 * API Response Types for Tasks
 */

import type { Task, TaskConnection, PageInfo } from './taskTypes';

// Query response types
export interface TasksQueryResponse {
   tasks: Task[];
   totalCount?: number;
   pageInfo?: PageInfo;
}

export interface TaskQueryResponse {
   task: Task | null;
}

export interface TaskConnectionQueryResponse {
   tasks: TaskConnection;
}

// Mutation response types
export interface CreateTaskResponse {
   task: Task;
   success: boolean;
   errors?: string[];
}

export interface UpdateTaskResponse {
   task: Task;
   success: boolean;
   errors?: string[];
}

export interface DeleteTaskResponse {
   id: string;
   success: boolean;
   errors?: string[];
}

export interface BulkUpdateTasksResponse {
   tasks: Task[];
   success: boolean;
   errors?: string[];
   affectedCount: number;
}

// Input types for mutations
export interface CreateTaskInput {
   title: string;
   description: string;
   projectId: string;
   statusId?: string;
   assigneeId?: string;
   priorityId: string;
   labelIds?: string[];
   dueDate?: Date;
   rank?: string;
   parentTaskId?: string;
}

export interface UpdateTaskInput {
   title?: string;
   description?: string;
   statusId?: string;
   assigneeId?: string;
   priorityId?: string;
   labelIds?: string[];
   dueDate?: Date;
   rank?: string;
   parentTaskId?: string;
}

export interface BulkUpdateInput {
   taskIds: string[];
   updates: Partial<UpdateTaskInput>;
}

// Error types
export interface APIError {
   message: string;
   code?: string;
   field?: string;
}

export interface ValidationError extends APIError {
   field: string;
   value?: any;
}

// Subscription types
export interface TaskUpdatePayload {
   task: Task;
   changeType: 'CREATED' | 'UPDATED' | 'DELETED';
   timestamp: Date;
   source: string;
   previousState?: Partial<Task>;
}

export interface TaskSubscriptionFilter {
   taskIds?: string[];
   projectIds?: string[];
   statusIds?: string[];
   assigneeIds?: string[];
   priorityIds?: string[];
}
