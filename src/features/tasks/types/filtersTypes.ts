/**
 * Filter and Search Types for Tasks
 */

import type { Task } from './taskTypes';

export interface TaskFilterInput {
   search?: string;
   statusIds?: string[];
   assigneeIds?: string[];
   projectIds?: string[];
   priorityIds?: string[];
   labelIds?: string[];
   hasSubtasks?: boolean;
   parentTaskId?: string;
   taskType?: string;
   dueDate?: {
      from?: Date;
      to?: Date;
   };
   createdAt?: {
      from?: Date;
      to?: Date;
   };
}

export interface TaskOrderByInput {
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
   filter: TaskFilterInput;
   orderBy?: TaskOrderByInput[];
   isDefault?: boolean;
   createdAt: Date;
}

// Filter state for UI
export interface FilterState {
   activeFilters: TaskFilterInput;
   savedFilters: SavedFilter[];
   quickFilters: QuickFilter[];
}

export interface QuickFilter {
   id: string;
   name: string;
   filter: TaskFilterInput;
   icon?: string;
}

// Search types
export interface SearchOptions {
   query: string;
   filters?: TaskFilterInput;
   scope?: 'title' | 'description' | 'all';
   fuzzy?: boolean;
}

export interface SearchResult {
   tasks: Task[];
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
