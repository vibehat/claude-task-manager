/**
 * Hook to fetch issues for a specific status
 *
 * @module queries/issues/use-issues-by-status
 */

import { useQuery, gql } from '@apollo/client';
import type { Issue } from '@/mock-data/issues';
import type { IssueFilterInput, IssueOrderByInput, PaginationInput } from './use-issues';

// GraphQL Document for fetching issues by status
const GET_ISSUES_BY_STATUS = gql`
   query GetIssuesByStatus(
      $where: IssueWhereInput
      $orderBy: [IssueOrderByWithRelationInput!]
      $skip: Int
      $take: Int
   ) {
      issues(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
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
   }
`;

export interface UseIssuesByStatusOptions {
   statusId: string;
   filter?: Omit<IssueFilterInput, 'status'>; // Exclude status since it's handled by statusId
   orderBy?: IssueOrderByInput[];
   pagination?: PaginationInput;
   skip?: boolean;
   pollInterval?: number;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
}

export type UseIssuesByStatusResult = ReturnType<
   typeof useQuery<{ issues: { nodes: Issue[]; totalCount: number; pageInfo: any } }>
>;

/**
 * Hook to fetch issues for a specific status with optional additional filters
 *
 * @param options - Query options including statusId and additional filters
 * @returns Issues data, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { data, loading, error } = useIssuesByStatus({ statusId: 'in-progress' });
 *
 * // With additional filters
 * const { data } = useIssuesByStatus({
 *   statusId: 'open',
 *   filter: {
 *     priority: ['high', 'urgent'],
 *     assigneeId: ['user-123']
 *   }
 * });
 *
 * // With ordering
 * const { data } = useIssuesByStatus({
 *   statusId: 'completed',
 *   orderBy: [{ field: 'updatedAt', direction: 'DESC' }]
 * });
 * ```
 */
export function useIssuesByStatus(options: UseIssuesByStatusOptions) {
   const {
      statusId,
      filter = {},
      orderBy = [{ rank: 'asc' }],
      pagination,
      skip = false,
      pollInterval,
      fetchPolicy = 'cache-first',
   } = options;

   // Merge status filter with additional filters
   const where = {
      ...filter,
      status: { equals: statusId },
   };

   return useQuery(GET_ISSUES_BY_STATUS, {
      variables: {
         where,
         orderBy,
         skip: pagination?.after ? parseInt(pagination.after) : 0,
         take: pagination?.first || 50,
      },
      skip,
      pollInterval,
      fetchPolicy,
      notifyOnNetworkStatusChange: true,
   });
}
