/**
 * Hook to fetch all issue statuses (raw GraphQL query)
 *
 * @module queries/reference/use-issue-statuses-query
 */

import { useQuery, gql } from '@apollo/client';

// GraphQL Document
const GET_ISSUE_STATUSES = gql`
   query GetIssueStatuses {
      issueStatuses {
         nodes {
            id
            name
            color
            icon
         }
      }
   }
`;

export type UseIssueStatusesOptions = any;

interface IssueStatusQueryData {
   issueStatuses: {
      id: string;
      name: string;
      color: string;
      iconName: string;
      createdAt: string;
      updatedAt: string;
   }[];
}

export type UseIssueStatusesQueryResult = ReturnType<typeof useQuery<IssueStatusQueryData>>;

/**
 * Hook to fetch all available issue statuses (raw GraphQL data)
 *
 * @param options - Query options including where conditions, ordering, and pagination
 * @returns Raw GraphQL status data with iconName, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { data, loading } = useIssueStatusesQuery();
 * const statuses = data?.issueStatuses?.nodes || [];
 *
 * // With filter
 * const { data } = useIssueStatusesQuery({
 *   where: {
 *     name: {
 *       contains: 'open'
 *     }
 *   }
 * });
 *
 * // With ordering and pagination
 * const { data } = useIssueStatusesQuery({
 *   orderBy: [{ name: 'asc' }],
 *   take: 10,
 *   fetchPolicy: 'cache-first'
 * });
 * ```
 */
export function useIssueStatusesQuery(options: UseIssueStatusesOptions = {}) {
   const { where, orderBy, cursor, take, skip = false, fetchPolicy = 'cache-first' } = options;

   return useQuery(GET_ISSUE_STATUSES, {
      skip,
      fetchPolicy,
   });
}
