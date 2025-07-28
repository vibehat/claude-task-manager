/**
 * Hook to update an issue
 *
 * @module mutations/issues/use-update-issue
 */

import { useMutation, gql } from '@apollo/client';
import type { Issue } from '@/mock-data/issues';

// GraphQL Document
const UPDATE_ISSUE = gql`
   mutation UpdateIssue($where: IssueWhereUniqueInput!, $data: IssueUpdateInput!) {
      updateOneIssue(where: $where, data: $data) {
         id
         identifier
         title
         description
         status
         priority
         rank
         cycleId
         dueDate
         issueType
         taskId
         subtaskId
         assigneeId
         projectId
         createdAt
         updatedAt
      }
   }
`;

// Types
export interface UpdateIssueInput {
   title?: string;
   description?: string;
   status?: string;
   priority?: string;
   assigneeId?: string | null;
   projectId?: string | null;
   labelIds?: string[];
   dueDate?: string | null;
   rank?: string;
}

export interface UseUpdateIssueOptions {
   onCompleted?: (data: { updateIssue: Issue }) => void;
   onError?: (error: Error) => void;
   refetchQueries?: string[];
}

/**
 * Hook to update an issue with optimistic updates
 *
 * @param options - Mutation options including callbacks and refetch queries
 * @returns Mutation function, loading state, error, and mutation data
 *
 * @example
 * ```typescript
 * // Basic usage
 * const [updateIssue, { loading, error }] = useUpdateIssue();
 *
 * // Update issue status
 * updateIssue({
 *   variables: {
 *     id: 'issue-1',
 *     input: { status: 'in-progress' }
 *   }
 * });
 *
 * // With callbacks
 * const [updateIssue] = useUpdateIssue({
 *   onCompleted: (data) => {
 *     console.log('Issue updated:', data.updateIssue);
 *   },
 *   onError: (error) => {
 *     console.error('Update failed:', error);
 *   }
 * });
 * ```
 */
export function useUpdateIssue(options: UseUpdateIssueOptions = {}) {
   const { onCompleted, onError, refetchQueries = [] } = options;

   return useMutation(UPDATE_ISSUE, {
      onCompleted,
      onError,
      refetchQueries,
      awaitRefetchQueries: true,
      errorPolicy: 'all',
   });
}
