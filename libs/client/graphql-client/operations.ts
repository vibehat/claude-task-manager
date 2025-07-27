/**
 * GraphQL Client - Predefined operations and queries
 */

// Task Management Operations
export const TASK_OPERATIONS = {
   // Queries
   GET_TASKS: `
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
  `,

   GET_TASK_BY_ID: `
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
  `,

   // Mutations
   CREATE_TASK: `
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
        createdAt
        updatedAt
      }
    }
  `,

   UPDATE_TASK: `
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
        updatedAt
      }
    }
  `,

   DELETE_TASK: `
    mutation DeleteTask($id: ID!) {
      deleteTask(id: $id)
    }
  `,
};

// Issue Management Operations (Extended Schema)
export const ISSUE_OPERATIONS = {
   // Queries
   GET_ISSUES: `
    query GetIssuesBasic {
      issues {
        id
        identifier
        title
        description
        status {
          id
          name
          color
          icon
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
        updatedAt
        dueDate
        rank
      }
    }
  `,

   GET_ISSUE_BY_ID: `
    query GetIssue($id: ID!) {
      issue(id: $id) {
        id
        identifier
        title
        description
        status {
          id
          name
          color
          icon
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
        subissues
        createdAt
        updatedAt
        dueDate
        rank
      }
    }
  `,

   // Mutations
   CREATE_ISSUE: `
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
        }
        priority {
          id
          name
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
  `,

   UPDATE_ISSUE: `
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
        }
        priority {
          id
          name
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
        updatedAt
        rank
      }
    }
  `,

   DELETE_ISSUE: `
    mutation DeleteIssue($id: ID!) {
      deleteIssue(id: $id)
    }
  `,
};

// User Management Operations
export const USER_OPERATIONS = {
   GET_USERS: `
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
  `,

   GET_USER_BY_ID: `
    query GetUser($id: ID!) {
      user(id: $id) {
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
  `,
};

// Project Management Operations
export const PROJECT_OPERATIONS = {
   GET_PROJECTS: `
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
  `,

   GET_PROJECT_BY_ID: `
    query GetProject($id: ID!) {
      project(id: $id) {
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
  `,
};

// Reference Data Operations
export const REFERENCE_OPERATIONS = {
   GET_STATUSES: `
    query GetStatuses {
      statuses {
        id
        name
        color
        icon
      }
    }
  `,

   GET_PRIORITIES: `
    query GetPriorities {
      priorities {
        id
        name
        icon
        color
      }
    }
  `,

   GET_LABELS: `
    query GetLabels {
      labels {
        id
        name
        color
      }
    }
  `,

   GET_TEAMS: `
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
  `,
};

// System Operations
export const SYSTEM_OPERATIONS = {
   HEALTH_CHECK: `
    query HealthCheck {
      health
    }
  `,

   HELLO: `
    query Hello {
      hello
    }
  `,

   CLI_STATUS: `
    query GetCLIStatus {
      cliStatus {
        activeProcesses
        recentCommands {
          id
          command
          args
          exitCode
          duration
          timestamp
          status
        }
        systemInfo {
          nodeVersion
          platform
          uptime
        }
      }
    }
  `,
};

// Combined operations export
export const GRAPHQL_OPERATIONS = {
   TASKS: TASK_OPERATIONS,
   ISSUES: ISSUE_OPERATIONS,
   USERS: USER_OPERATIONS,
   PROJECTS: PROJECT_OPERATIONS,
   REFERENCE: REFERENCE_OPERATIONS,
   SYSTEM: SYSTEM_OPERATIONS,
};

// Operation types for TypeScript
export interface TaskQueryVariables {
   id?: string;
}

export interface CreateTaskVariables {
   input: {
      title: string;
      description: string;
      priority?: 'HIGH' | 'MEDIUM' | 'LOW';
      dependencies?: string[];
      details?: string;
      testStrategy?: string;
   };
}

export interface UpdateTaskVariables {
   id: string;
   input: {
      title?: string;
      description?: string;
      status?: 'PENDING' | 'IN_PROGRESS' | 'DONE' | 'CANCELLED' | 'DEFERRED' | 'BLOCKED';
      priority?: 'HIGH' | 'MEDIUM' | 'LOW';
      dependencies?: string[];
      details?: string;
      testStrategy?: string;
   };
}
