/**
 * Hook to fetch all issue statuses
 *
 * @module queries/reference/use-statuses
 */

import { useQuery, gql } from '@apollo/client';
import type { Status } from '@/mock-data/status';

// GraphQL Document
const GET_ISSUE_STATUSES = gql`
   query GetIssueStatuses($filter: StatusFilterInput, $pagination: PaginationInput) {
      issueStatuses(filter: $filter, pagination: $pagination) {
         edges {
            node {
               id
               name
               color
               icon
               createdAt
               updatedAt
            }
            cursor
         }
         nodes {
            id
            name
            color
            icon
            createdAt
            updatedAt
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

export interface StatusFilterInput {
   name?: string;
   color?: string;
   search?: string;
}

export interface UseIssueStatusesOptions {
   filter?: StatusFilterInput;
   pagination?: {
      first?: number;
      after?: string;
      last?: number;
      before?: string;
   };
   skip?: boolean;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
}

export type UseIssueStatusesResult = ReturnType<
   typeof useQuery<{ issueStatuses: { nodes: Status[]; totalCount: number; pageInfo: any } }>
>;

/**
 * Hook to fetch all available issue statuses
 *
 * @param options - Query options including filters and pagination
 * @returns Status data, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { issueStatuses, loading } = useIssueStatuses();
 *
 * // With filter
 * const { issueStatuses } = useIssueStatuses({
 *   filter: {
 *     search: 'open'
 *   }
 * });
 *
 * // Cache-first policy (default)
 * const { issueStatuses } = useIssueStatuses({
 *   fetchPolicy: 'cache-first'
 * });
 * ```
 */
export function useIssueStatuses(options: UseIssueStatusesOptions = {}) {
   const { filter, pagination, skip = false, fetchPolicy = 'cache-first' } = options;

   return useQuery(GET_ISSUE_STATUSES, {
      variables: {
         filter,
         pagination,
      },
      skip,
      fetchPolicy,
   });
}
