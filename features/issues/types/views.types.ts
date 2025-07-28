/**
 * View Configuration Types for Issues
 */

import type { IssueFilterInput } from './filters.types';

export type ViewType = 'list' | 'grid' | 'kanban' | 'calendar';

export type GroupByOption = 'status' | 'assignee' | 'priority' | 'project' | 'label' | 'none';

export type SortOption = 'created' | 'updated' | 'priority' | 'title' | 'dueDate' | 'rank';

export interface ViewConfig {
   id: string;
   name: string;
   type: ViewType;
   groupBy: GroupByOption;
   sortBy: SortOption;
   sortDirection: 'asc' | 'desc';
   filters: IssueFilterInput;
   isDefault?: boolean;
   isPublic?: boolean;
   createdBy?: string;
   createdAt: Date;
   updatedAt: Date;
}

export interface ViewState {
   currentView: ViewType;
   groupBy: GroupByOption;
   sortBy: SortOption;
   sortDirection: 'asc' | 'desc';
   showCompletedIssues: boolean;
   showSubIssues: boolean;
   compactMode: boolean;
   gridColumns: number;
}

// Layout configurations
export interface ListViewConfig {
   showAssignee: boolean;
   showPriority: boolean;
   showStatus: boolean;
   showLabels: boolean;
   showDueDate: boolean;
   showProject: boolean;
   showCreatedDate: boolean;
   showUpdatedDate: boolean;
}

export interface GridViewConfig {
   columns: number;
   cardSize: 'small' | 'medium' | 'large';
   showSubIssues: boolean;
   showDescription: boolean;
}

export interface KanbanViewConfig {
   groupBy: 'status' | 'assignee' | 'priority';
   showLimits: boolean;
   swimlanes?: 'priority' | 'assignee' | 'project';
}

export interface CalendarViewConfig {
   dateField: 'dueDate' | 'createdAt' | 'updatedAt';
   showWeekends: boolean;
   startWeek: 'monday' | 'sunday';
}

// Selection types
export interface SelectionState {
   selectedIssueIds: string[];
   lastSelectedId?: string;
   isSelectionMode: boolean;
}

export interface BulkAction {
   id: string;
   name: string;
   icon?: string;
   action: (issueIds: string[]) => Promise<void>;
   requiresConfirmation?: boolean;
   confirmationMessage?: string;
}
