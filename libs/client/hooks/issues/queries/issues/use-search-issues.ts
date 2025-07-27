/**
 * Hook to search issues by query string
 *
 * @module queries/issues/use-search-issues
 */

import { useQuery, gql } from '@apollo/client';
import type { Issue } from '@/mock-data/issues';
import type { IssueFilterInput, IssueOrderByInput, PaginationInput } from './use-issues';

// GraphQL Document
const SEARCH_ISSUES = gql`
   query SearchIssues(
      $query: String!
      $filter: IssueFilterInput
      $orderBy: [IssueOrderByInput!]
      $pagination: PaginationInput
   ) {
      searchIssues(query: $query, filter: $filter, orderBy: $orderBy, pagination: $pagination) {
         edges {
            node {
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
            }
            cursor
         }
         nodes {
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
         }
         pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
         }
         totalCount
      }
   }
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
      filter,
      orderBy = [{ field: 'rank', direction: 'ASC' }],
      pagination,
      skip = false,
      fetchPolicy = 'cache-first',
   } = options;

   const trimmedQuery = query.trim();
   const shouldSkip = skip || !trimmedQuery;

   return useQuery(SEARCH_ISSUES, {
      variables: {
         query: trimmedQuery,
         filter,
         orderBy,
         pagination,
      },
      skip: shouldSkip,
      fetchPolicy,
      notifyOnNetworkStatusChange: true,
   });
}
