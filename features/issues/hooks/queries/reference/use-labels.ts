/**
 * Hook to fetch all labels
 *
 * @module queries/reference/use-labels
 */

import { useQuery, gql } from '@apollo/client';

// GraphQL Document
const GET_LABELS = gql`
   query GetLabels($where: LabelWhereInput) {
      labels(where: $where) {
         nodes {
            id
            name
            color
            description
         }
      }
   }
`;

export interface LabelFilterInput {
   name?: string;
   color?: string;
   search?: string;
}

export interface UseLabelsOptions {
   filter?: LabelFilterInput;
   skip?: boolean;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
}

/**
 * Hook to fetch all available labels
 *
 * @param options - Query options including filters
 * @returns Label data, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { data, loading } = useLabels();
 * const labels = data?.labels?.nodes || [];
 *
 * // With filter
 * const { data } = useLabels({
 *   filter: {
 *     search: 'bug'
 *   }
 * });
 *
 * // Skip loading
 * const { data } = useLabels({
 *   skip: !shouldLoadLabels
 * });
 * ```
 */
export function useLabels(options: UseLabelsOptions = {}) {
   const { filter, skip = false, fetchPolicy = 'cache-first' } = options;

   return useQuery(GET_LABELS, {
      variables: {
         where: filter,
      },
      skip,
      fetchPolicy,
   });
}
