/**
 * API Response Types for Issues
 */

import { Issue, IssueConnection, PageInfo } from './issueTypes';

// Query response types
export interface IssuesQueryResponse {
   issues: Issue[];
   totalCount?: number;
   pageInfo?: PageInfo;
}

export interface IssueQueryResponse {
   issue: Issue | null;
}

export interface IssueConnectionQueryResponse {
   issues: IssueConnection;
}

// Mutation response types
export interface CreateIssueResponse {
   issue: Issue;
   success: boolean;
   errors?: string[];
}

export interface UpdateIssueResponse {
   issue: Issue;
   success: boolean;
   errors?: string[];
}

export interface DeleteIssueResponse {
   id: string;
   success: boolean;
   errors?: string[];
}

export interface BulkUpdateIssuesResponse {
   issues: Issue[];
   success: boolean;
   errors?: string[];
   affectedCount: number;
}

// Input types for mutations
export interface CreateIssueInput {
   title: string;
   description: string;
   projectId: string;
   statusId?: string;
   assigneeId?: string;
   priorityId: string;
   labelIds?: string[];
   dueDate?: Date;
   rank?: string;
   parentIssueId?: string;
}

export interface UpdateIssueInput {
   title?: string;
   description?: string;
   statusId?: string;
   assigneeId?: string;
   priorityId?: string;
   labelIds?: string[];
   dueDate?: Date;
   rank?: string;
   parentIssueId?: string;
}

export interface BulkUpdateInput {
   issueIds: string[];
   updates: Partial<UpdateIssueInput>;
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
export interface IssueUpdatePayload {
   issue: Issue;
   changeType: 'CREATED' | 'UPDATED' | 'DELETED';
   timestamp: Date;
   source: string;
   previousState?: Partial<Issue>;
}

export interface IssueSubscriptionFilter {
   issueIds?: string[];
   projectIds?: string[];
   statusIds?: string[];
   assigneeIds?: string[];
   priorityIds?: string[];
}
