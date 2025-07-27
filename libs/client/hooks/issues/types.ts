/**
 * Types and Interfaces for Issues GraphQL Hooks
 */

import type { Issue } from '@/mock-data-2/issues';
import type { LabelInterface } from '@/mock-data/labels';
import type { Priority } from '@/mock-data/priorities';
import type { Project } from '@/mock-data/projects';
import type { Status } from '@/mock-data/status';
import type { User } from '@/mock-data/users';

export interface FilterOptions {
   status?: string[];
   assignee?: string[];
   priority?: string[];
   labels?: string[];
   project?: string[];
}

export interface IssueQueryResult {
   issue: Issue | null;
   loading: boolean;
   error: any;
   refetch: () => Promise<any>;
   isStale: boolean;
   fromCache: boolean;
}

export interface IssuesQueryResult {
   issues: Issue[];
   loading: boolean;
   error: any;
   refetch: () => Promise<any>;
   fromCache: boolean;
}

export interface FilteredIssuesResult {
   issues: Issue[];
   groupedIssues: Record<string, Issue[]>;
   loading: boolean;
   error: any;
   count: number;
}

export interface SearchResult {
   results: Issue[];
   loading: boolean;
   error: any;
   count: number;
   hasQuery: boolean;
}

export interface StatusIssuesResult {
   issues: Issue[] | Record<string, Issue[]>;
   loading: boolean;
   error: any;
   count: number;
}

export interface IssueManagementResult {
   // Data
   issues: Issue[];
   issuesByStatus: Record<string, Issue[]>;
   statuses: Status[];
   priorities: Priority[];
   labels: LabelInterface[];
   users: User[];
   projects: Project[];

   // Loading states
   loading: boolean;
   error: any;
   fromCache: boolean;
   refetch: () => Promise<any>;

   // Filter functions
   filterByStatus: (statusId: string) => Issue[];
   filterByPriority: (priorityId: string) => Issue[];
   filterByAssignee: (userId: string | null) => Issue[];
   filterByLabel: (labelId: string) => Issue[];
   filterByProject: (projectId: string) => Issue[];
   searchIssues: (query: string) => Issue[];
   filterIssues: (filters: FilterOptions) => Issue[];
   getIssueById: (id: string) => Issue | undefined;

   // Mutation functions
   addIssue: (issueData: Partial<Issue>) => Promise<Issue | undefined>;
   updateIssue: (id: string, updates: Partial<Issue>) => Promise<Issue | undefined>;
   deleteIssue: (id: string) => Promise<void>;

   // Specific update functions
   updateIssueStatus: (issueId: string, newStatus: Status) => Promise<Issue | undefined>;
   updateIssuePriority: (issueId: string, newPriority: Priority) => Promise<Issue | undefined>;
   updateIssueAssignee: (issueId: string, newAssignee: User | null) => Promise<Issue | undefined>;
   addIssueLabel: (issueId: string, label: LabelInterface) => Promise<Issue | undefined>;
   removeIssueLabel: (issueId: string, labelId: string) => Promise<Issue | undefined>;
   updateIssueProject: (
      issueId: string,
      newProject: Project | undefined
   ) => Promise<Issue | undefined>;

   // Helper functions
   getAllIssues: () => Issue[];
}

export interface SingleIssueManagementResult {
   issue: Issue | null;
   loading: boolean;
   error: any;
   refetch: () => Promise<any>;
   updateIssue: (updates: Partial<Issue>) => Promise<Issue | undefined>;
   deleteIssue: () => Promise<void>;
   fromCache: boolean;
}

// Re-export common types
export type { Issue, LabelInterface, Priority, Project, Status, User };
