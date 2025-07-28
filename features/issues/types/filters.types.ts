/**
 * Filter and Search Types for Issues
 */

import type { Issue } from './issue.types';

export interface IssueFilterInput {
   search?: string;
   statusIds?: string[];
   assigneeIds?: string[];
   projectIds?: string[];
   priorityIds?: string[];
   labelIds?: string[];
   hasSubissues?: boolean;
   parentIssueId?: string;
   issueType?: string;
   dueDate?: {
      from?: Date;
      to?: Date;
   };
   createdAt?: {
      from?: Date;
      to?: Date;
   };
}

export interface IssueOrderByInput {
   field: 'createdAt' | 'updatedAt' | 'rank' | 'priority' | 'dueDate' | 'title' | 'status';
   direction: 'ASC' | 'DESC';
}

export interface PaginationInput {
   first?: number;
   after?: string;
   last?: number;
   before?: string;
}

export interface SavedFilter {
   id: string;
   name: string;
   filter: IssueFilterInput;
   orderBy?: IssueOrderByInput[];
   isDefault?: boolean;
   createdAt: Date;
}

// Filter state for UI
export interface FilterState {
   activeFilters: IssueFilterInput;
   savedFilters: SavedFilter[];
   quickFilters: QuickFilter[];
}

export interface QuickFilter {
   id: string;
   name: string;
   filter: IssueFilterInput;
   icon?: string;
}

// Search types
export interface SearchOptions {
   query: string;
   filters?: IssueFilterInput;
   scope?: 'title' | 'description' | 'all';
   fuzzy?: boolean;
}

export interface SearchResult {
   issues: Issue[];
   totalCount: number;
   facets: SearchFacets;
}

export interface SearchFacets {
   statuses: Array<{ id: string; name: string; count: number }>;
   priorities: Array<{ id: string; name: string; count: number }>;
   assignees: Array<{ id: string; name: string; count: number }>;
   projects: Array<{ id: string; name: string; count: number }>;
   labels: Array<{ id: string; name: string; count: number }>;
}
