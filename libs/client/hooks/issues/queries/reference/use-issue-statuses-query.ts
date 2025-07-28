/**
 * Hook to fetch all issue statuses (raw GraphQL query)
 *
 * @module queries/reference/use-issue-statuses-query
 */

import { useQuery, gql } from '@apollo/client';
import type {
   IssueStatusWhereInput,
   IssueStatusOrderByWithRelationInput,
   IssueStatusWhereUniqueInput,
} from '@/libs/server/types/graphql-generated';

// GraphQL Document
const GET_ISSUE_STATUSES = gql`
   query GetIssueStatuses(
      $where: IssueStatusWhereInput
      $orderBy: [IssueStatusOrderByWithRelationInput!]
      $cursor: IssueStatusWhereUniqueInput
      $take: Int
      $skip: Int
   ) {
      issueStatuses(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {
         id
         name
         color
         iconName
         createdAt
         updatedAt
      }
   }
`;

export interface UseIssueStatusesOptions {
   where?: IssueStatusWhereInput;
   orderBy?: IssueStatusOrderByWithRelationInput[];
   cursor?: IssueStatusWhereUniqueInput;
   take?: number;
   skip?: boolean;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
}

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
      variables: {
         where,
         orderBy,
         cursor,
         take,
         skip: skip ? undefined : 0,
      },
      skip,
      fetchPolicy,
   });
}
