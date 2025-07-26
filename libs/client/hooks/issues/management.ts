/**
 * Core Issues Management Hook
 *
 * Combines all modular components into the main management interface
 */

import { useIssuesQueryWithCache, useIssueReferenceData } from './queries';
import { useIssueMutations, useIssueUpdateHelpers } from './mutations';
import { useIssueFilters, useIssueGrouping } from './filters';
import type { IssueManagementResult } from './types';

/**
 * Main hook for comprehensive issues management with GraphQL and Apollo caching
 */
export function useIssuesManagement(): IssueManagementResult {
   // Core data fetching
   const { issues, loading, error, refetch, fromCache } = useIssuesQueryWithCache();
   const { statuses, priorities, labels, users, projects } = useIssueReferenceData();

   // Filter functions
   const {
      filterByStatus,
      filterByPriority,
      filterByAssignee,
      filterByLabel,
      filterByProject,
      searchIssues,
      filterIssues,
      getIssueById,
   } = useIssueFilters(issues);

   // Grouping functions
   const { issuesByStatus } = useIssueGrouping(issues);

   // Mutation functions
   const { addIssue, updateIssue, deleteIssue } = useIssueMutations();

   // Specific update helpers
   const {
      updateIssueStatus,
      updateIssuePriority,
      updateIssueAssignee,
      addIssueLabel,
      removeIssueLabel,
      updateIssueProject,
   } = useIssueUpdateHelpers(getIssueById);

   // Helper functions
   const getAllIssues = () => issues;

   return {
      // Data
      issues,
      issuesByStatus,
      statuses,
      priorities,
      labels,
      users,
      projects,

      // Loading states
      loading,
      error,
      fromCache,
      refetch,

      // Filter functions
      filterByStatus,
      filterByPriority,
      filterByAssignee,
      filterByLabel,
      filterByProject,
      searchIssues,
      filterIssues,
      getIssueById,

      // Mutation functions
      addIssue,
      updateIssue,
      deleteIssue,

      // Specific update functions
      updateIssueStatus,
      updateIssuePriority,
      updateIssueAssignee,
      addIssueLabel,
      removeIssueLabel,
      updateIssueProject,

      // Helper functions
      getAllIssues,
   };
}
