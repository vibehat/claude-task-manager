/**
 * Hook to fetch a single issue by ID
 *
 * @module queries/issues/use-issue
 */

import { useQuery, gql } from '@apollo/client';
import type { Issue } from '@/mock-data/issues';

// GraphQL Document
const GET_ISSUE = gql`
   query GetIssue($id: ID!) {
      issue(id: $id) {
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
         subissues
         createdAt
         updatedAt
         assignee {
            id
            name
            email
            avatarUrl
            status
            role
         }
         project {
            id
            name
            description
            color
            identifier
         }
         labels {
            id
            name
            color
            description
         }
         task {
            id
            title
            description
            status
            priority
            dependencies
            details
            testStrategy
            complexity
         }
      }
   }
`;

export interface UseIssueOptions {
   skip?: boolean;
   pollInterval?: number;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
   onCompleted?: (data: any) => void;
   onError?: (error: any) => void;
}

export type UseIssueResult = ReturnType<typeof useQuery<{ issue: Issue | null }>>;

/**
 * Hook to fetch a single issue by ID
 *
 * @param id - The issue ID to fetch
 * @param options - Query options
 * @returns Issue data, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { issue, loading, error } = useIssue('issue-123');
 *
 * // With options
 * const { issue, refetch } = useIssue('issue-123', {
 *   fetchPolicy: 'cache-and-network',
 *   onCompleted: (data) => console.log('Issue loaded:', data)
 * });
 *
 * // Skip if no ID
 * const { issue } = useIssue(issueId, {
 *   skip: !issueId
 * });
 * ```
 */
export function useIssue(id: string, options: UseIssueOptions = {}) {
   const {
      skip = false,
      pollInterval,
      fetchPolicy = 'cache-first',
      onCompleted,
      onError,
   } = options;

   return useQuery(GET_ISSUE, {
      variables: { id },
      skip: skip || !id,
      pollInterval,
      fetchPolicy,
      onCompleted,
      onError,
      notifyOnNetworkStatusChange: true,
   });
}
