/**
 * Core Task Types for Client-Side Usage
 * Simplified from GraphQL types for UI consumption
 */

// Enums
export enum TaskStatusEnum {
   OPEN = 'OPEN',
   IN_PROGRESS = 'IN_PROGRESS',
   DONE = 'DONE',
   CANCELLED = 'CANCELLED',
}

export enum TaskPriorityEnum {
   LOW = 'LOW',
   MEDIUM = 'MEDIUM',
   HIGH = 'HIGH',
   URGENT = 'URGENT',
}

export enum TaskType {
   TASK = 'TASK',
   SUBTASK = 'SUBTASK',
}

export enum TaskChangeType {
   CREATED = 'CREATED',
   UPDATED = 'UPDATED',
   DELETED = 'DELETED',
   STATUS_CHANGED = 'STATUS_CHANGED',
   ASSIGNED = 'ASSIGNED',
   PRIORITY_CHANGED = 'PRIORITY_CHANGED',
   LABEL_ADDED = 'LABEL_ADDED',
   LABEL_REMOVED = 'LABEL_REMOVED',
}

// Core Task Types
export interface Task {
   id: string;
   identifier: string;
   title: string;
   description: string;
   status: string;
   priority: string;
   labels: Label[];
   project?: Project;
   subtasks?: Task[];
   parentTask?: Task;
   parentTaskId?: string;
   createdAt: Date;
   updatedAt: Date;
   dueDate?: Date;
   rank: string;
   cycleId?: string;
   taskType: TaskType;
   taskId?: number;
   subtaskId?: string;
}

export interface User {
   id: string;
   name: string;
   email: string;
   avatarUrl: string;
}

export interface Project {
   id: string;
   name: string;
   identifier: string;
   description?: string;
   icon?: string;
   color: string;
   lead?: User;
}

export interface Label {
   id: string;
   name: string;
   color: string;
   description?: string;
}

export interface TaskStatus {
   id: string;
   name: string;
   color: string;
   icon?: string;
}

export interface TaskPriority {
   id: string;
   name: string;
   icon: string;
   color: string;
}

// Connection types for pagination
export interface PageInfo {
   hasNextPage: boolean;
   hasPreviousPage: boolean;
   startCursor?: string;
   endCursor?: string;
}

export interface TaskConnection {
   edges: TaskEdge[];
   nodes: Task[];
   pageInfo: PageInfo;
   totalCount: number;
}

export interface TaskEdge {
   node: Task;
   cursor: string;
}
