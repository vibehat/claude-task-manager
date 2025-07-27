/**
 * Issues Filter Functions
 *
 * Memoized filter functions for issues data
 */

import { useMemo } from 'react';
import { groupIssuesByStatus } from '@/mock-data-2/issues';
import type { Issue, LabelInterface, FilterOptions } from './types';

/**
 * Hook for creating memoized filter functions for issues
 */
export function useIssueFilters(issues: Issue[]) {
   // Filter by status
   const filterByStatus = useMemo(
      () => (statusId: string) => issues.filter((issue: Issue) => issue.status.id === statusId),
      [issues]
   );

   // Filter by priority
   const filterByPriority = useMemo(
      () => (priorityId: string) =>
         issues.filter((issue: Issue) => issue.priority.id === priorityId),
      [issues]
   );

   // Filter by assignee
   const filterByAssignee = useMemo(
      () => (userId: string | null) => {
         if (userId === null) {
            return issues.filter((issue: Issue) => issue.assignee === null);
         }
         return issues.filter((issue: Issue) => issue.assignee?.id === userId);
      },
      [issues]
   );

   // Filter by label
   const filterByLabel = useMemo(
      () => (labelId: string) =>
         issues.filter((issue: Issue) =>
            issue.labels.some((label: LabelInterface) => label.id === labelId)
         ),
      [issues]
   );

   // Filter by project
   const filterByProject = useMemo(
      () => (projectId: string) => issues.filter((issue: Issue) => issue.project?.id === projectId),
      [issues]
   );

   // Search issues
   const searchIssues = useMemo(
      () => (query: string) => {
         const lowerCaseQuery = query.toLowerCase();
         return issues.filter(
            (issue: Issue) =>
               issue.title.toLowerCase().includes(lowerCaseQuery) ||
               issue.identifier.toLowerCase().includes(lowerCaseQuery)
         );
      },
      [issues]
   );

   // Complex filter function
   const filterIssues = useMemo(
      () => (filters: FilterOptions) => {
         let filteredIssues = issues;

         // Filter by status
         if (filters.status && filters.status.length > 0) {
            filteredIssues = filteredIssues.filter((issue: Issue) =>
               filters.status!.includes(issue.status.id)
            );
         }

         // Filter by assignee
         if (filters.assignee && filters.assignee.length > 0) {
            filteredIssues = filteredIssues.filter((issue: Issue) => {
               if (filters.assignee!.includes('unassigned')) {
                  if (issue.assignee === null) {
                     return true;
                  }
               }
               return issue.assignee && filters.assignee!.includes(issue.assignee.id);
            });
         }

         // Filter by priority
         if (filters.priority && filters.priority.length > 0) {
            filteredIssues = filteredIssues.filter((issue: Issue) =>
               filters.priority!.includes(issue.priority.id)
            );
         }

         // Filter by labels
         if (filters.labels && filters.labels.length > 0) {
            filteredIssues = filteredIssues.filter((issue: Issue) =>
               issue.labels.some((label: LabelInterface) => filters.labels!.includes(label.id))
            );
         }

         // Filter by project
         if (filters.project && filters.project.length > 0) {
            filteredIssues = filteredIssues.filter(
               (issue: Issue) => issue.project && filters.project!.includes(issue.project.id)
            );
         }

         return filteredIssues;
      },
      [issues]
   );

   // Get issue by ID
   const getIssueById = useMemo(
      () => (id: string) => issues.find((issue: Issue) => issue.id === id),
      [issues]
   );

   return {
      filterByStatus,
      filterByPriority,
      filterByAssignee,
      filterByLabel,
      filterByProject,
      searchIssues,
      filterIssues,
      getIssueById,
   };
}

/**
 * Hook for creating grouped issues data
 */
export function useIssueGrouping(issues: Issue[]) {
   // Group issues by status
   const issuesByStatus = useMemo(() => {
      if (!issues?.length) return {};
      return groupIssuesByStatus(issues);
   }, [issues]);

   // Sort issues by rank
   const sortedIssues = useMemo(() => {
      if (!issues?.length) return [];
      return [...issues].sort((a: Issue, b: Issue) => b.rank.localeCompare(a.rank));
   }, [issues]);

   return {
      issuesByStatus,
      sortedIssues,
   };
}
