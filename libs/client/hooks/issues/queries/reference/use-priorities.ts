/**
 * Hook to fetch all issue priorities
 *
 * @module queries/reference/use-priorities
 */

import { useQuery, gql } from '@apollo/client';
import type { Priority } from '@/mock-data/priorities';

// GraphQL Document
const GET_PRIORITIES = gql`
   query GetPriorities($filter: PriorityFilterInput, $pagination: PaginationInput) {
      priorities(filter: $filter, pagination: $pagination) {
         edges {
            node {
               id
               name
               icon
               color
               createdAt
               updatedAt
            }
            cursor
         }
         nodes {
            id
            name
            icon
            color
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

export interface PriorityFilterInput {
   name?: string;
   color?: string;
   search?: string;
}

export interface UsePrioritiesOptions {
   filter?: PriorityFilterInput;
   pagination?: {
      first?: number;
      after?: string;
      last?: number;
      before?: string;
   };
   skip?: boolean;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
}

export type UsePrioritiesResult = ReturnType<
   typeof useQuery<{ priorities: { nodes: Priority[]; totalCount: number; pageInfo: any } }>
>;

/**
 * Hook to fetch all available issue priorities
 *
 * @param options - Query options including filters and pagination
 * @returns Priority data, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { priorities, loading } = usePriorities();
 *
 * // With filter
 * const { priorities } = usePriorities({
 *   filter: {
 *     search: 'high'
 *   }
 * });
 *
 * // Skip loading
 * const { priorities } = usePriorities({
 *   skip: !shouldLoadPriorities
 * });
 * ```
 */
export function usePriorities(options: UsePrioritiesOptions = {}) {
   const { filter, pagination, skip = false, fetchPolicy = 'cache-first' } = options;

   return useQuery(GET_PRIORITIES, {
      variables: {
         filter,
         pagination,
      },
      skip,
      fetchPolicy,
   });
}
