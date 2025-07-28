/**
 * Hook to fetch a single issue by ID
 *
 * @module queries/issues/use-issue
 */

import { useQuery, gql } from '@apollo/client';
import type { Issue } from '@/mock-data/issues';

// GraphQL Fragments
const ISSUE_CORE_FRAGMENT = gql`
   fragment IssueCore on Issue {
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
`;

const ISSUE_DETAILS_FRAGMENT = gql`
   fragment IssueDetails on Issue {
      ...IssueCore
      assignee {
         id
         name
         email
         avatarUrl
      }
      project {
         id
         name
         identifier
         color
         icon
      }
      labels {
         id
         name
         color
         description
      }
      parentIssue {
         id
         identifier
         title
      }
      subIssues {
         id
         identifier
         title
         status
      }
   }
   ${ISSUE_CORE_FRAGMENT}
`;

const ISSUE_RELATIONS_FRAGMENT = gql`
   fragment IssueRelations on Issue {
      parentIssue {
         id
         identifier
         title
         status
      }
      subIssues {
         id
         identifier
         title
         status
         assignee {
            id
            name
            avatarUrl
         }
      }
   }
`;

// GraphQL Documents
const GET_ISSUE = gql`
   query GetIssue($id: String!) {
      issue(where: { id: $id }) {
         ...IssueDetails
      }
   }
   ${ISSUE_DETAILS_FRAGMENT}
`;

const GET_ISSUE_WITH_RELATIONS = gql`
   query GetIssueWithRelations($id: String!) {
      issue(where: { id: $id }) {
         ...IssueDetails
         ...IssueRelations
      }
   }
   ${ISSUE_DETAILS_FRAGMENT}
   ${ISSUE_RELATIONS_FRAGMENT}
`;

export interface UseIssueOptions {
   skip?: boolean;
   pollInterval?: number;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
   onCompleted?: (data: any) => void;
   onError?: (error: any) => void;
   withRelations?: boolean; // Whether to fetch issue relations (parent/sub issues)
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
      withRelations = false,
   } = options;

   const query = withRelations ? GET_ISSUE_WITH_RELATIONS : GET_ISSUE;

   return useQuery(query, {
      variables: { id },
      skip: skip || !id,
      pollInterval,
      fetchPolicy,
      onCompleted,
      onError,
      notifyOnNetworkStatusChange: true,
   });
}
