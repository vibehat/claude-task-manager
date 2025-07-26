/**
 * Specialized Issues Hooks
 *
 * Focused hooks for specific use cases like filtering, searching, and status queries
 */

import { useMemo } from 'react';
import { useIssuesQueryWithCache } from './queries';
import { useIssueFilters, useIssueGrouping } from './filters';
import type {
   FilterOptions,
   FilteredIssuesResult,
   SearchResult,
   StatusIssuesResult,
} from './types';

/**
 * Hook for filtered issues with complex filtering logic
 */
export function useFilteredIssues(filters: FilterOptions): FilteredIssuesResult {
   const { issues, loading, error } = useIssuesQueryWithCache();
   const { filterIssues } = useIssueFilters(issues);
   const { issuesByStatus } = useIssueGrouping(issues);

   const filteredIssues = useMemo(() => {
      return filterIssues(filters);
   }, [filterIssues, filters]);

   const groupedIssues = useMemo(() => {
      const filtered = filterIssues(filters);
      const grouped: Record<string, any[]> = {};

      filtered.forEach((issue) => {
         const statusId = issue.status.id;
         if (!grouped[statusId]) {
            grouped[statusId] = [];
         }
         grouped[statusId].push(issue);
      });

      return grouped;
   }, [filterIssues, filters]);

   return {
      issues: filteredIssues,
      groupedIssues,
      loading,
      error,
      count: filteredIssues.length,
   };
}

/**
 * Hook for issue search functionality
 */
export function useIssueSearch(query: string): SearchResult {
   const { issues, loading, error } = useIssuesQueryWithCache();
   const { searchIssues } = useIssueFilters(issues);

   const searchResults = useMemo(() => {
      if (!query.trim()) {
         return [];
      }
      return searchIssues(query);
   }, [searchIssues, query]);

   return {
      results: searchResults,
      loading,
      error,
      count: searchResults.length,
      hasQuery: query.trim().length > 0,
   };
}

/**
 * Hook for issues organized by status
 */
export function useIssuesByStatus(statusId?: string, grouped: boolean = false): StatusIssuesResult {
   const { issues, loading, error } = useIssuesQueryWithCache();
   const { filterByStatus } = useIssueFilters(issues);
   const { issuesByStatus } = useIssueGrouping(issues);

   const result = useMemo(() => {
      if (grouped) {
         return issuesByStatus;
      }

      if (statusId) {
         return filterByStatus(statusId);
      }

      return issues;
   }, [issues, statusId, grouped, filterByStatus, issuesByStatus]);

   const count = useMemo(() => {
      if (Array.isArray(result)) {
         return result.length;
      }
      return Object.values(result).reduce((total, statusIssues) => total + statusIssues.length, 0);
   }, [result]);

   return {
      issues: result,
      loading,
      error,
      count,
   };
}

/**
 * Hook for issues by priority
 */
export function useIssuesByPriority(priorityId: string): FilteredIssuesResult {
   const { issues, loading, error } = useIssuesQueryWithCache();
   const { filterByPriority } = useIssueFilters(issues);

   const filteredIssues = useMemo(() => {
      return filterByPriority(priorityId);
   }, [filterByPriority, priorityId]);

   const groupedIssues = useMemo(() => {
      const grouped: Record<string, any[]> = {};

      filteredIssues.forEach((issue) => {
         const statusId = issue.status.id;
         if (!grouped[statusId]) {
            grouped[statusId] = [];
         }
         grouped[statusId].push(issue);
      });

      return grouped;
   }, [filteredIssues]);

   return {
      issues: filteredIssues,
      groupedIssues,
      loading,
      error,
      count: filteredIssues.length,
   };
}

/**
 * Hook for issues by assignee
 */
export function useIssuesByAssignee(userId: string | null): FilteredIssuesResult {
   const { issues, loading, error } = useIssuesQueryWithCache();
   const { filterByAssignee } = useIssueFilters(issues);

   const filteredIssues = useMemo(() => {
      return filterByAssignee(userId);
   }, [filterByAssignee, userId]);

   const groupedIssues = useMemo(() => {
      const grouped: Record<string, any[]> = {};

      filteredIssues.forEach((issue) => {
         const statusId = issue.status.id;
         if (!grouped[statusId]) {
            grouped[statusId] = [];
         }
         grouped[statusId].push(issue);
      });

      return grouped;
   }, [filteredIssues]);

   return {
      issues: filteredIssues,
      groupedIssues,
      loading,
      error,
      count: filteredIssues.length,
   };
}

/**
 * Hook for issues by project
 */
export function useIssuesByProject(projectId: string): FilteredIssuesResult {
   const { issues, loading, error } = useIssuesQueryWithCache();
   const { filterByProject } = useIssueFilters(issues);

   const filteredIssues = useMemo(() => {
      return filterByProject(projectId);
   }, [filterByProject, projectId]);

   const groupedIssues = useMemo(() => {
      const grouped: Record<string, any[]> = {};

      filteredIssues.forEach((issue) => {
         const statusId = issue.status.id;
         if (!grouped[statusId]) {
            grouped[statusId] = [];
         }
         grouped[statusId].push(issue);
      });

      return grouped;
   }, [filteredIssues]);

   return {
      issues: filteredIssues,
      groupedIssues,
      loading,
      error,
      count: filteredIssues.length,
   };
}

/**
 * Hook for issues by label
 */
export function useIssuesByLabel(labelId: string): FilteredIssuesResult {
   const { issues, loading, error } = useIssuesQueryWithCache();
   const { filterByLabel } = useIssueFilters(issues);

   const filteredIssues = useMemo(() => {
      return filterByLabel(labelId);
   }, [filterByLabel, labelId]);

   const groupedIssues = useMemo(() => {
      const grouped: Record<string, any[]> = {};

      filteredIssues.forEach((issue) => {
         const statusId = issue.status.id;
         if (!grouped[statusId]) {
            grouped[statusId] = [];
         }
         grouped[statusId].push(issue);
      });

      return grouped;
   }, [filteredIssues]);

   return {
      issues: filteredIssues,
      groupedIssues,
      loading,
      error,
      count: filteredIssues.length,
   };
}
