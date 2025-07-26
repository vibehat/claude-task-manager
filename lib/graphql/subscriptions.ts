import { gql } from 'graphql-tag';

// Task subscriptions (existing)
export const TASK_UPDATED = gql`
   subscription TaskUpdated($filter: TaskSubscriptionFilter) {
      taskUpdated(filter: $filter) {
         task {
            id
            title
            description
            status
            priority
            dependencies
            details
            testStrategy
            complexity
            subtasks {
               id
               title
               description
               status
               dependencies
               details
               testStrategy
               createdAt
               updatedAt
            }
            createdAt
            updatedAt
            progress
            isReady
         }
         changeType
         timestamp
         source
         previousState
      }
   }
`;

// Issue subscriptions (new - to be implemented)
export const ISSUE_UPDATED = gql`
   subscription IssueUpdated($filter: IssueSubscriptionFilter) {
      issueUpdated(filter: $filter) {
         issue {
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
         changeType
         timestamp
         source
         previousState
      }
   }
`;

export const SYNC_STATUS_UPDATED = gql`
   subscription SyncStatusUpdated {
      syncOperationUpdated {
         operation {
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
            completedAt
         }
         changeType
         timestamp
      }
   }
`;
