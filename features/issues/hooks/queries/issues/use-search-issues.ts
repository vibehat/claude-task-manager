/**
 * Hook to search issues by query string
 *
 * @module queries/issues/use-search-issues
 */

import { useQuery, gql } from '@apollo/client';
import type { Issue } from '@/mock-data/issues';
import type { IssueFilterInput, IssueOrderByInput, PaginationInput } from './use-issues';

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

// GraphQL Documents
const SEARCH_ISSUES = gql`
   query SearchIssues(
      $query: String!
      $where: IssueWhereInput
      $orderBy: [IssueOrderByWithRelationInput!]
      $skip: Int
      $take: Int
   ) {
      issues(
         where: {
            AND: [
               $where
               {
                  OR: [
                     { title: { contains: $query, mode: insensitive } }
                     { description: { contains: $query, mode: insensitive } }
                     { identifier: { contains: $query, mode: insensitive } }
                  ]
               }
            ]
         }
         orderBy: $orderBy
         skip: $skip
         take: $take
      ) {
         ...IssueDetails
      }
   }
   ${ISSUE_DETAILS_FRAGMENT}
`;

export interface UseSearchIssuesOptions {
   query: string;
   filter?: IssueFilterInput;
   orderBy?: IssueOrderByInput[];
   pagination?: PaginationInput;
   skip?: boolean;
   debounceMs?: number;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
}

export type UseSearchIssuesResult = ReturnType<
   typeof useQuery<{ searchIssues: { nodes: Issue[]; totalCount: number; pageInfo: any } }>
>;

/**
 * Hook to search issues by query string with optional filters
 *
 * @param options - Search options including query, filters, and pagination
 * @returns Search results, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic search
 * const { results, loading } = useSearchIssues({
 *   query: 'bug fix'
 * });
 *
 * // Search with filters
 * const { results } = useSearchIssues({
 *   query: 'performance',
 *   filter: {
 *     status: ['open'],
 *     priority: ['high', 'urgent']
 *   }
 * });
 *
 * // Skip search if query is empty
 * const { results } = useSearchIssues({
 *   query: searchTerm,
 *   skip: !searchTerm.trim()
 * });
 * ```
 */
export function useSearchIssues(options: UseSearchIssuesOptions) {
   const {
      query,
      filter = {},
      orderBy = [{ rank: 'asc' }],
      pagination,
      skip = false,
      fetchPolicy = 'cache-first',
   } = options;

   const trimmedQuery = query.trim();
   const shouldSkip = skip || !trimmedQuery;

   // Search logic is now handled in GraphQL query

   return useQuery(SEARCH_ISSUES, {
      variables: {
         query: trimmedQuery,
         where: filter,
         orderBy,
         skip: pagination?.after ? parseInt(pagination.after) : 0,
         take: pagination?.first || 50,
      },
      skip: shouldSkip,
      fetchPolicy,
      notifyOnNetworkStatusChange: true,
   });
}
