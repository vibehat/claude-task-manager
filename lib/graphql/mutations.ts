import { gql } from 'graphql-tag';

// Task mutations (existing)
export const CREATE_TASK = gql`
   mutation CreateTask($input: CreateTaskInput!) {
      createTask(input: $input) {
         id
         title
         description
         status
         priority
         dependencies
         details
         testStrategy
         complexity
         createdAt
         updatedAt
         progress
         isReady
      }
   }
`;

export const UPDATE_TASK = gql`
   mutation UpdateTask($id: ID!, $input: UpdateTaskInput!) {
      updateTask(id: $id, input: $input) {
         id
         title
         description
         status
         priority
         dependencies
         details
         testStrategy
         complexity
         createdAt
         updatedAt
         progress
         isReady
      }
   }
`;

export const DELETE_TASK = gql`
   mutation DeleteTask($id: ID!) {
      deleteTask(id: $id)
   }
`;

export const UPDATE_TASK_STATUS = gql`
   mutation UpdateTaskStatus($taskId: ID!, $status: TaskStatus!, $source: String) {
      updateTaskStatus(taskId: $taskId, status: $status, source: $source) {
         id
         type
         status
         timestamp
         source
         taskIds
         metadata
         retryCount
         error {
            code
            message
            details
            operationId
         }
      }
   }
`;

// Issue mutations (new - to be implemented)
export const CREATE_ISSUE = gql`
   mutation CreateIssue($input: CreateIssueInput!) {
      createIssue(input: $input) {
         id
         identifier
         title
         description
         status {
            id
            name
            color
         }
         assignee {
            id
            name
            email
            avatarUrl
         }
         priority {
            id
            name
            icon
            color
         }
         labels {
            id
            name
            color
         }
         project {
            id
            name
            identifier
         }
         createdAt
         rank
      }
   }
`;

export const UPDATE_ISSUE = gql`
   mutation UpdateIssue($id: ID!, $input: UpdateIssueInput!) {
      updateIssue(id: $id, input: $input) {
         id
         identifier
         title
         description
         status {
            id
            name
            color
         }
         assignee {
            id
            name
            email
            avatarUrl
         }
         priority {
            id
            name
            icon
            color
         }
         labels {
            id
            name
            color
         }
         project {
            id
            name
            identifier
         }
         createdAt
         dueDate
         rank
      }
   }
`;

export const DELETE_ISSUE = gql`
   mutation DeleteIssue($id: ID!) {
      deleteIssue(id: $id)
   }
`;

export const UPDATE_ISSUE_STATUS = gql`
   mutation UpdateIssueStatus($id: ID!, $statusId: ID!) {
      updateIssueStatus(id: $id, statusId: $statusId) {
         id
         status {
            id
            name
            color
         }
      }
   }
`;

export const ASSIGN_ISSUE = gql`
   mutation AssignIssue($id: ID!, $assigneeId: ID!) {
      assignIssue(id: $id, assigneeId: $assigneeId) {
         id
         assignee {
            id
            name
            email
            avatarUrl
         }
      }
   }
`;

export const UPDATE_ISSUE_PRIORITY = gql`
   mutation UpdateIssuePriority($id: ID!, $priorityId: ID!) {
      updateIssuePriority(id: $id, priorityId: $priorityId) {
         id
         priority {
            id
            name
            icon
            color
         }
      }
   }
`;
