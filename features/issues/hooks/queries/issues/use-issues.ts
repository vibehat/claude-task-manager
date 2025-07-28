/**
 * Hook to fetch all issues with optional filters
 *
 * @module queries/issues/use-issues
 */

import { useQuery, gql } from '@apollo/client';
import type { Issue } from '../../../types/issue.types';

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
const GET_ISSUES = gql`
   query GetIssues(
      $where: IssueWhereInput
      $orderBy: [IssueOrderByWithRelationInput!]
      $skip: Int
      $take: Int
   ) {
      issues(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
         ...IssueCore
      }
   }
   ${ISSUE_CORE_FRAGMENT}
`;

const GET_ISSUES_DETAILED = gql`
   query GetIssuesDetailed(
      $where: IssueWhereInput
      $orderBy: [IssueOrderByWithRelationInput!]
      $skip: Int
      $take: Int
   ) {
      issues(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
         ...IssueDetails
      }
   }
   ${ISSUE_DETAILS_FRAGMENT}
`;

const GET_ISSUES_BY_STATUS = gql`
   query GetIssuesByStatus(
      $status: String!
      $orderBy: [IssueOrderByWithRelationInput!]
      $skip: Int
      $take: Int
   ) {
      issues(where: { status: { equals: $status } }, orderBy: $orderBy, skip: $skip, take: $take) {
         ...IssueCore
      }
   }
   ${ISSUE_CORE_FRAGMENT}
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
   detailed?: boolean; // Whether to fetch detailed issue data with relations
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
      detailed = false,
   } = options;

   const query = detailed ? GET_ISSUES_DETAILED : GET_ISSUES;

   return useQuery(query, {
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
