/**
 * Issues Hooks Module
 *
 * Modular GraphQL hooks for comprehensive issues management
 */

// Core management hooks
export { useIssuesManagement } from './management';
export { useIssueManagement } from './single-issue';

// Basic query hooks
export {
   useIssueQueryWithCache,
   useIssuesQueryWithCache,
   useIssueReferenceData,
   useIssuesWithReferenceData,
} from './queries';

// Mutation hooks
export { useIssueMutations, useIssueUpdateHelpers, useSingleIssueMutations } from './mutations';

// Filter hooks
export { useIssueFilters, useIssueGrouping } from './filters';

// Specialized hooks
export {
   useFilteredIssues,
   useIssueSearch,
   useIssuesByStatus,
   useIssuesByPriority,
   useIssuesByAssignee,
   useIssuesByProject,
   useIssuesByLabel,
} from './specialized';

// Utilities
export { issueUtils, filterUtils, statsUtils, cacheUtils } from './utilities';

// Types
export type {
   FilterOptions,
   IssueQueryResult,
   IssuesQueryResult,
   FilteredIssuesResult,
   SearchResult,
   StatusIssuesResult,
   IssueManagementResult,
   SingleIssueManagementResult,
   Issue,
   LabelInterface,
   Priority,
   Project,
   Status,
   User,
} from './types';

// Backward compatibility - re-export main hooks with original names
export { useIssuesManagement as useIssuesStore } from './management';
export { useIssueManagement as useIssueStore } from './single-issue';
