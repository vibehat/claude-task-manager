/**
 * Issues Feature - Main Export
 *
 * Barrel export for the issues feature module.
 * Provides clean imports for components, hooks, types, and utilities.
 */

// Main view components
export { default as AllIssues } from './components/views/all-issues';
export { default as IssueGridView } from './components/views/issue-grid-view';
export { default as IssueListView } from './components/views/issue-list-view';
export { default as SearchIssues } from './components/views/search-issues';
export { default as GroupIssues } from './components/views/group-issues';

// Form components
export { default as CreateIssueModalProvider } from './components/forms/create-issue-modal-provider';

// Item components
export { default as IssueGrid } from './components/items/issue-grid';
export { default as IssueLine } from './components/items/issue-line';
export { default as IssueContextMenu } from './components/items/issue-context-menu';

// Selector components
export { default as StatusSelector } from './components/selectors/status-selector';
export { default as PrioritySelector } from './components/selectors/priority-selector';
export { default as AssigneeSelector } from './components/selectors/assignee-selector';

// Badge components
export { default as LabelBadge } from './components/badges/label-badge';
export { default as ProjectBadge } from './components/badges/project-badge';

// Header components
export { default as IssuesHeader } from './components/headers/header';
export { default as IssuesHeaderNav } from './components/headers/header-nav';
export { default as IssuesHeaderOptions } from './components/headers/header-options';
export { default as IssuesFilter } from './components/headers/filter';
export { default as IssuesNotifications } from './components/headers/notifications';

// Query hooks
export { useIssues } from './hooks/queries/issues/use-issues';
export { useIssue } from './hooks/queries/issues/use-issue';
export { useIssuesByStatus } from './hooks/queries/issues/use-issues-by-status';
export { useSearchIssues } from './hooks/queries/issues/use-search-issues';

// Reference data hooks
export { useDisplayIssueStatuses } from './hooks/reference/use-display-issue-statuses';
export { useIssueStatusesQuery } from './hooks/reference/use-issue-statuses-query';
export { usePriorities } from './hooks/reference/use-priorities';
export { useProjects } from './hooks/reference/use-projects';
export { useUsers } from './hooks/reference/use-users';
export { useUser } from './hooks/reference/use-user';

// Mutation hooks
export { useUpdateIssue } from './hooks/mutations/issues/use-update-issue';

// Stores
export { useCreateIssueStore } from './store/create-issue-store';
export { useFilterStore } from './store/filter-store';
export { useSearchStore } from './store/search-store';
export { useViewStore } from './store/view-store';

// Types
export type {
   Issue,
   User,
   Project,
   Label,
   IssueConnection,
   IssueEdge,
   PageInfo,
} from './types/issue.types';

export type {
   IssueFilterInput,
   IssueOrderByInput,
   PaginationInput,
   SavedFilter,
   FilterState,
   QuickFilter,
   SearchOptions,
   SearchResult,
   SearchFacets,
} from './types/filters.types';

export type {
   ViewType,
   GroupByOption,
   SortOption,
   ViewConfig,
   ViewState,
   ListViewConfig,
   GridViewConfig,
   KanbanViewConfig,
   CalendarViewConfig,
   SelectionState,
   BulkAction,
} from './types/views.types';

export type {
   IssuesQueryResponse,
   IssueQueryResponse,
   IssueConnectionQueryResponse,
   CreateIssueResponse,
   UpdateIssueResponse,
   DeleteIssueResponse,
   BulkUpdateIssuesResponse,
   CreateIssueInput,
   UpdateIssueInput,
   BulkUpdateInput,
   APIError,
   ValidationError,
   IssueUpdatePayload,
   IssueSubscriptionFilter,
} from './types/api.types';

export type {
   IssueStatus,
   IssuePriority,
   IssueStatusEnum,
   IssuePriorityEnum,
   IssueType,
   IssueChangeType,
} from './types/issue.types';

// Utilities
export {
   generateIssueIdentifier,
   isIssueOverdue,
   isIssueCompleted,
   isIssueInProgress,
   getPriorityLevel,
   getStatusColor,
   getPriorityColor,
   calculateIssueProgress,
   getRelativeTime,
   truncateTitle,
   extractMentions,
   formatIssueDescription,
   canEditIssue,
   sortIssues,
} from './utils/issue-helpers';

export {
   filterIssues,
   createQuickFilter,
   combineFilters,
   hasActiveFilters,
   clearFilter,
   getFilterSummary,
} from './utils/filtering';

export { groupIssues, sortGroups, filterGroupsByCount, getGroupStats } from './utils/grouping';
export type { IssueGroup } from './utils/grouping';

export {
   formatIssueIdentifier,
   formatIssueTitle,
   formatIssueStatus,
   formatIssuePriority,
   formatRelativeDate,
   formatAbsoluteDate,
   formatDueDate,
   formatAssigneeName,
   formatIssueProgress,
   formatLabels,
   formatIssuePreview,
   formatFileSize,
   formatIssueCount,
   formatEstimate,
   formatPriorityWithIcon,
   formatTimeTracked,
} from './utils/formatting';
