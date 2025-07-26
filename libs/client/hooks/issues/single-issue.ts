/**
 * Single Issue Management Hook
 *
 * Focused hook for managing individual issues
 */

import { useIssueQueryWithCache } from './queries';
import { useSingleIssueMutations } from './mutations';
import type { SingleIssueManagementResult } from './types';

/**
 * Hook for managing a single issue with GraphQL and Apollo caching
 */
export function useIssueManagement(issueId: string): SingleIssueManagementResult {
   // Core data fetching
   const { issue, loading, error, refetch, fromCache } = useIssueQueryWithCache(issueId);

   // Mutation functions for this specific issue
   const { updateIssue, deleteIssue } = useSingleIssueMutations(issueId, issue || undefined);

   return {
      issue,
      loading,
      error,
      refetch,
      updateIssue,
      deleteIssue,
      fromCache,
   };
}
