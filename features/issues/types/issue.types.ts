/**
 * Core Issue Types for Client-Side Usage
 * Simplified from GraphQL types for UI consumption
 */

// Enums
export enum IssueStatusEnum {
   OPEN = 'OPEN',
   IN_PROGRESS = 'IN_PROGRESS',
   DONE = 'DONE',
   CANCELLED = 'CANCELLED',
}

export enum IssuePriorityEnum {
   LOW = 'LOW',
   MEDIUM = 'MEDIUM',
   HIGH = 'HIGH',
   URGENT = 'URGENT',
}

export enum IssueType {
   TASK = 'TASK',
   SUBTASK = 'SUBTASK',
}

export enum IssueChangeType {
   CREATED = 'CREATED',
   UPDATED = 'UPDATED',
   DELETED = 'DELETED',
   STATUS_CHANGED = 'STATUS_CHANGED',
   ASSIGNED = 'ASSIGNED',
   PRIORITY_CHANGED = 'PRIORITY_CHANGED',
   LABEL_ADDED = 'LABEL_ADDED',
   LABEL_REMOVED = 'LABEL_REMOVED',
}

// Core Issue Types
export interface Issue {
   id: string;
   identifier: string;
   title: string;
   description: string;
   status: string;
   priority: string;
   assignee?: User;
   labels: Label[];
   project?: Project;
   subIssues?: Issue[];
   parentIssue?: Issue;
   parentIssueId?: string;
   createdAt: Date;
   updatedAt: Date;
   dueDate?: Date;
   rank: string;
   cycleId?: string;
   issueType: IssueType;
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

export interface IssueStatus {
   id: string;
   name: string;
   color: string;
   icon?: string;
}

export interface IssuePriority {
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

export interface IssueConnection {
   edges: IssueEdge[];
   nodes: Issue[];
   pageInfo: PageInfo;
   totalCount: number;
}

export interface IssueEdge {
   node: Issue;
   cursor: string;
}
