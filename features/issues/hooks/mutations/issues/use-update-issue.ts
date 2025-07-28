/**
 * Hook to update an issue
 *
 * @module mutations/issues/use-update-issue
 */

import { useMutation, gql } from '@apollo/client';
import type { Issue } from '@/mock-data/issues';

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
const UPDATE_ISSUE = gql`
   mutation UpdateIssue($where: IssueWhereUniqueInput!, $data: IssueUpdateInput!) {
      updateOneIssue(where: $where, data: $data) {
         ...IssueDetails
      }
   }
   ${ISSUE_DETAILS_FRAGMENT}
`;

const CREATE_ISSUE = gql`
   mutation CreateIssue($data: IssueCreateInput!) {
      createOneIssue(data: $data) {
         ...IssueDetails
      }
   }
   ${ISSUE_DETAILS_FRAGMENT}
`;

const DELETE_ISSUE = gql`
   mutation DeleteIssue($where: IssueWhereUniqueInput!) {
      deleteOneIssue(where: $where) {
         id
         identifier
      }
   }
`;

const UPDATE_ISSUE_STATUS = gql`
   mutation UpdateIssueStatus($id: String!, $status: String!) {
      updateOneIssue(where: { id: $id }, data: { status: { set: $status } }) {
         ...IssueCore
      }
   }
   ${ISSUE_CORE_FRAGMENT}
`;

const UPDATE_ISSUE_PRIORITY = gql`
   mutation UpdateIssuePriority($id: String!, $priorityId: String!) {
      updateOneIssue(where: { id: $id }, data: { priorityId: { set: $priorityId } }) {
         ...IssueCore
      }
   }
   ${ISSUE_CORE_FRAGMENT}
`;

const UPDATE_ISSUE_ASSIGNEE = gql`
   mutation UpdateIssueAssignee($id: String!, $assigneeId: String) {
      updateOneIssue(where: { id: $id }, data: { assigneeId: { set: $assigneeId } }) {
         ...IssueCore
      }
   }
   ${ISSUE_CORE_FRAGMENT}
`;

const BULK_UPDATE_ISSUES = gql`
   mutation BulkUpdateIssues($where: IssueWhereInput!, $data: IssueUpdateManyMutationInput!) {
      updateManyIssue(where: $where, data: $data) {
         count
      }
   }
`;

// Types
export interface UpdateIssueInput {
   title?: string;
   description?: string;
   status?: string;
   priority?: string;
   assigneeId?: string | null;
   projectId?: string | null;
   labelIds?: string[];
   dueDate?: string | null;
   rank?: string;
}

export interface UseUpdateIssueOptions {
   onCompleted?: (data: { updateIssue: Issue }) => void;
   onError?: (error: Error) => void;
   refetchQueries?: string[];
}

/**
 * Hook to update an issue with optimistic updates
 *
 * @param options - Mutation options including callbacks and refetch queries
 * @returns Mutation function, loading state, error, and mutation data
 *
 * @example
 * ```typescript
 * // Basic usage
 * const [updateIssue, { loading, error }] = useUpdateIssue();
 *
 * // Update issue status
 * updateIssue({
 *   variables: {
 *     id: 'issue-1',
 *     input: { status: 'in-progress' }
 *   }
 * });
 *
 * // With callbacks
 * const [updateIssue] = useUpdateIssue({
 *   onCompleted: (data) => {
 *     console.log('Issue updated:', data.updateIssue);
 *   },
 *   onError: (error) => {
 *     console.error('Update failed:', error);
 *   }
 * });
 * ```
 */
export function useUpdateIssue(options: UseUpdateIssueOptions = {}) {
   const { onCompleted, onError, refetchQueries = [] } = options;

   return useMutation(UPDATE_ISSUE, {
      onCompleted,
      onError,
      refetchQueries,
      awaitRefetchQueries: true,
      errorPolicy: 'all',
   });
}
