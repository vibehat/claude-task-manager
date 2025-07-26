/**
 * Core Issues Query Hooks
 *
 * Basic query hooks for fetching issues with Apollo Client caching
 */

import {
   useIssues as useIssuesQuery,
   useIssue as useIssueQuery,
   useStatuses,
   usePriorities,
   useLabels,
   useUsers,
   useProjects,
} from '../../graphql-client';
import type { IssueQueryResult, IssuesQueryResult } from './types';

/**
 * Enhanced useIssueQuery hook with Apollo caching
 */
export function useIssueQueryWithCache(id: string): IssueQueryResult {
   const { data: issue, loading, error, refetch } = useIssueQuery(id);

   return {
      issue: issue || null,
      loading,
      error,
      refetch,
      // Cache-aware utilities
      isStale: false, // Apollo manages staleness
      fromCache: !loading && !!issue, // If not loading and has data, likely from cache
   };
}

/**
 * Enhanced useIssuesQuery hook with Apollo caching
 */
export function useIssuesQueryWithCache(): IssuesQueryResult {
   const { data: issues = [], loading, error, refetch } = useIssuesQuery();

   return {
      issues,
      loading,
      error,
      refetch,
      fromCache: !loading && issues.length > 0,
   };
}

/**
 * Hook for fetching all reference data needed for issues
 */
export function useIssueReferenceData() {
   const { data: statuses = [] } = useStatuses();
   const { data: priorities = [] } = usePriorities();
   const { data: labels = [] } = useLabels();
   const { data: users = [] } = useUsers();
   const { data: projects = [] } = useProjects();

   return {
      statuses,
      priorities,
      labels,
      users,
      projects,
   };
}

/**
 * Combined hook for issues and reference data
 */
export function useIssuesWithReferenceData() {
   const issuesQuery = useIssuesQueryWithCache();
   const referenceData = useIssueReferenceData();

   return {
      ...issuesQuery,
      ...referenceData,
   };
}
