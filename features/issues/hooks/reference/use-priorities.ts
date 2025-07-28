/**
 * Hook to fetch all issue priorities
 *
 * @module queries/reference/use-priorities
 */

import { useQuery, gql } from '@apollo/client';
import type { Priority } from '@/mock-data/priorities';

// GraphQL Document
const GET_PRIORITIES = gql`
   query GetPriorities(
      $where: IssuePriorityWhereInput
      $orderBy: [IssuePriorityOrderByWithRelationInput!]
      $skip: Int
      $take: Int
   ) {
      issuePriorities(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
         id
         name
         iconName
         order
         createdAt
         updatedAt
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
         where: filter,
         orderBy: [{ order: 'asc' }],
         skip: pagination?.after ? parseInt(pagination.after) : 0,
         take: pagination?.first || 50,
      },
      skip,
      fetchPolicy,
   });
}
