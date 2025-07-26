// GraphQL client utility for Task Master
export interface GraphQLRequest {
   query: string;
   variables?: Record<string, any>;
   operationName?: string;
}

export interface GraphQLResponse<T = any> {
   data?: T;
   errors?: Array<{
      message: string;
      locations?: Array<{ line: number; column: number }>;
      path?: string[];
      extensions?: Record<string, any>;
   }>;
}

class GraphQLClient {
   private endpoint: string;

   constructor(endpoint = '/api/graphql') {
      this.endpoint = endpoint;
   }

   async request<T = any>(
      query: string,
      variables?: Record<string, any>,
      operationName?: string
   ): Promise<T> {
      const response = await fetch(this.endpoint, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            query,
            variables,
            operationName,
         }),
      });

      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: GraphQLResponse<T> = await response.json();

      if (result.errors) {
         throw new Error(result.errors.map((e) => e.message).join(', '));
      }

      if (!result.data) {
         throw new Error('No data returned from GraphQL query');
      }

      return result.data;
   }

   // Convenience methods for common operations
   async query<T = any>(query: string, variables?: Record<string, any>): Promise<T> {
      return this.request<T>(query, variables);
   }

   async mutate<T = any>(mutation: string, variables?: Record<string, any>): Promise<T> {
      return this.request<T>(mutation, variables);
   }
}

// Export a default instance
export const graphqlClient = new GraphQLClient();

// Common GraphQL queries
export const SYNC_QUERIES = {
   GET_SYNC_STATUS: `
    query GetSyncStatus {
      syncStatus {
        state
        queueSize
        operations {
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
          }
          completedAt
        }
        conflicts {
          id
          operationType
          taskId
          uiVersion
          cliVersion
          timestamp
          resolved
          resolution
          resolvedAt
        }
        optimisticUpdatesCount
      }
    }
  `,

   GET_SYNC_OPERATIONS: `
    query GetSyncOperations($limit: Int = 50) {
      syncOperations(limit: $limit) {
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
        }
        completedAt
      }
    }
  `,
};

export const SYNC_MUTATIONS = {
   UPDATE_TASK_STATUS: `
    mutation UpdateTaskStatus($taskId: ID!, $status: TaskStatus!, $source: String = "ui") {
      updateTaskStatus(taskId: $taskId, status: $status, source: $source) {
        id
        type
        status
        timestamp
        source
        taskIds
        metadata
        retryCount
      }
    }
  `,

   RESOLVE_SYNC_CONFLICT: `
    mutation ResolveSyncConflict($conflictId: ID!, $resolution: ConflictResolution!) {
      resolveSyncConflict(conflictId: $conflictId, resolution: $resolution)
    }
  `,

   FORCE_SYNC: `
    mutation ForceSync {
      forceSync
    }
  `,
};

export const TASK_QUERIES = {
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

   GET_TASK: `
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
};

export const TASK_MUTATIONS = {
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

   DELETE_TASK: `
    mutation DeleteTask($id: ID!) {
      deleteTask(id: $id)
    }
  `,
};

export const CLI_QUERIES = {
   GET_CLI_STATUS: `
    query GetCLIStatus {
      cliStatus {
        activeProcesses
        recentCommands {
          id
          command
          args
          stdout
          stderr
          exitCode
          duration
          timestamp
          status
          taskId
          parsedOutput
          error {
            code
            message
            details
            stack
          }
        }
        systemInfo {
          nodeVersion
          platform
          memoryUsage {
            rss
            heapTotal
            heapUsed
            external
          }
          uptime
        }
      }
    }
  `,

   GET_CLI_HISTORY: `
    query GetCLIHistory($limit: Int = 50) {
      cliHistory(limit: $limit) {
        id
        command
        args
        stdout
        stderr
        exitCode
        duration
        timestamp
        status
        taskId
        parsedOutput
        error {
          code
          message
          details
          stack
        }
      }
    }
  `,
};

export const CLI_MUTATIONS = {
   EXECUTE_CLI_COMMAND: `
    mutation ExecuteCLICommand($input: CLICommandInput!) {
      executeCLICommand(input: $input) {
        id
        command
        args
        stdout
        stderr
        exitCode
        duration
        timestamp
        status
        taskId
        parsedOutput
        error {
          code
          message
          details
          stack
        }
      }
    }
  `,

   KILL_CLI_PROCESS: `
    mutation KillCLIProcess($processId: String!) {
      killCLIProcess(processId: $processId)
    }
  `,

   CLEAR_CLI_HISTORY: `
    mutation ClearCLIHistory {
      clearCLIHistory
    }
  `,
};
