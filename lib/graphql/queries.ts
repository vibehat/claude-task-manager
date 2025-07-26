import { gql } from 'graphql-tag';

// Task queries (existing)
export const GET_TASKS = gql`
   query GetTasks {
      tasks {
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
   }
`;

export const GET_TASK_BY_ID = gql`
   query GetTask($id: ID!) {
      task(id: $id) {
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
   }
`;

// Issue queries (new - to be implemented)
export const GET_ISSUES = gql`
   query GetIssues {
      issues {
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
            status
            role
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
            icon
            color
         }
         createdAt
         dueDate
         rank
      }
   }
`;

export const GET_USERS = gql`
   query GetUsers {
      users {
         id
         name
         email
         avatarUrl
         status
         role
         joinedDate
         teamIds
      }
   }
`;

export const GET_PROJECTS = gql`
   query GetProjects {
      projects {
         id
         name
         identifier
         description
         icon
         color
         status {
            id
            name
            color
         }
         priority {
            id
            name
            icon
            color
         }
         lead {
            id
            name
            email
            avatarUrl
         }
         members {
            id
            name
            email
            avatarUrl
         }
         createdAt
         updatedAt
      }
   }
`;

export const GET_STATUSES = gql`
   query GetStatuses {
      statuses {
         id
         name
         color
         icon
      }
   }
`;

export const GET_PRIORITIES = gql`
   query GetPriorities {
      priorities {
         id
         name
         icon
         color
      }
   }
`;

export const GET_LABELS = gql`
   query GetLabels {
      labels {
         id
         name
         color
      }
   }
`;

export const GET_TEAMS = gql`
   query GetTeams {
      teams {
         id
         name
         identifier
         description
         members {
            id
            name
            email
            avatarUrl
         }
         projects {
            id
            name
            identifier
         }
         createdAt
      }
   }
`;
