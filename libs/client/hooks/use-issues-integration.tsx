/**
 * Issues Integration Hook
 *
 * Updated integration hook that uses GraphQL instead of the old store,
 * providing a smooth transition path for existing components.
 */

import { useEffect } from 'react';
import { useIssuesManagement } from './issues/management';

/**
 * Enhanced integration hook that replaces the old store-based approach
 * with GraphQL queries while maintaining the same interface.
 */
export function useIssuesIntegration() {
   const {
      issues,
      loading,
      error,
      addIssue,
      updateIssue,
      deleteIssue,
      filterByStatus,
      filterByPriority,
      filterByAssignee,
      filterByLabel,
      filterByProject,
      searchIssues,
      filterIssues,
      getIssueById,
      updateIssueStatus,
      updateIssuePriority,
      updateIssueAssignee,
      addIssueLabel,
      removeIssueLabel,
      updateIssueProject,
      issuesByStatus,
      refetch,
      fromCache,
   } = useIssuesManagement();

   // Log cache status for debugging
   useEffect(() => {
      if (fromCache) {
         console.log('📦 Issues loaded from Apollo cache');
      } else if (!loading) {
         console.log('🌐 Issues loaded from server');
      }
   }, [fromCache, loading]);

   // Enhanced error handling
   useEffect(() => {
      if (error) {
         console.error('GraphQL Issues Error:', error);
         // You could integrate with your error reporting service here
      }
   }, [error]);

   return {
      // Data - same interface as before
      issues,
      issuesByStatus,

      // Loading states - enhanced with cache awareness
      loading,
      error,
      fromCache,

      // Core operations - same interface, now with GraphQL
      addIssue,
      updateIssue,
      deleteIssue,
      getAllIssues: () => issues,
      getIssueById,

      // Filter functions - same interface
      filterByStatus,
      filterByPriority,
      filterByAssignee,
      filterByLabel,
      filterByProject,
      searchIssues,
      filterIssues,

      // Specific update functions - same interface
      updateIssueStatus,
      updateIssuePriority,
      updateIssueAssignee,
      addIssueLabel,
      removeIssueLabel,
      updateIssueProject,

      // GraphQL-specific utilities
      refetch,

      // Backward compatibility helpers
      initializeFromGraphQL: () => {
         // No-op since GraphQL handles initialization
         console.warn('initializeFromGraphQL is deprecated - GraphQL handles data automatically');
      },
      setLoading: () => {
         console.warn('setLoading is deprecated - GraphQL manages loading state');
      },
      setError: () => {
         console.warn('setError is deprecated - GraphQL manages error state');
      },
   };
}

// Export with the same name for drop-in replacement
export { useIssuesIntegration as useIssuesStore };
