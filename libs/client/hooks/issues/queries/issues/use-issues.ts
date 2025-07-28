/**
 * Hook to fetch all issues with optional filters
 *
 * @module queries/issues/use-issues
 */

import { useQuery, gql } from '@apollo/client';
import type { Issue } from '@/mock-data/issues';

// GraphQL Document
const GET_ISSUES = gql`
   query GetIssues(
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

// Types
export interface IssueFilterInput {
   status?: string[];
   priority?: string[];
   assigneeId?: string[];
   projectId?: string[];
   labelIds?: string[];
   search?: string;
   hasSubissues?: boolean;
   parentIssueId?: string;
   issueType?: string;
}

export interface IssueOrderByInput {
   field: 'createdAt' | 'updatedAt' | 'rank' | 'priority' | 'dueDate';
   direction: 'ASC' | 'DESC';
}

export interface PaginationInput {
   first?: number;
   after?: string;
   last?: number;
   before?: string;
}

export interface UseIssuesOptions {
   filter?: IssueFilterInput;
   orderBy?: IssueOrderByInput[];
   pagination?: PaginationInput;
   skip?: boolean;
   pollInterval?: number;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
}

export type UseIssuesResult = ReturnType<
   typeof useQuery<{ issues: { nodes: Issue[]; totalCount: number; pageInfo: any } }>
>;

/**
 * Hook to fetch all issues with optional filters, sorting, and pagination
 *
 * @param options - Query options including filters, sorting, and pagination
 * @returns Issues data, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { issues, loading, error } = useIssues();
 *
 * // With filters
 * const { issues } = useIssues({
 *   filter: {
 *     status: ['open', 'in-progress'],
 *     priority: ['high', 'urgent']
 *   }
 * });
 *
 * // With pagination
 * const { issues, pageInfo, fetchMore } = useIssues({
 *   pagination: { first: 20 }
 * });
 * ```
 */
export function useIssues(options: UseIssuesOptions = {}) {
   const {
      filter,
      orderBy = [{ rank: 'asc' }],
      pagination,
      skip = false,
      pollInterval,
      fetchPolicy = 'cache-first',
   } = options;

   return useQuery(GET_ISSUES, {
      variables: {
         where: filter,
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
