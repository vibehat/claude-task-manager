import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Task, TaskPriority } from './generated';

// GraphQL endpoint
const httpLink = createHttpLink({
   uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '/api/graphql',
});

// Auth link (for future authentication)
const authLink = setContext((_, { headers }) => {
   // Get auth token from localStorage or other secure storage
   const token = typeof window !== 'undefined' ? localStorage.getItem('auth-token') : null;

   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : '',
      },
   };
});

// Type policies for Apollo Client cache
const cache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            // Cache tasks with connection-based pagination
            tasks: {
               keyArgs: ['filter', 'orderBy'], // Cache separately for different filters/ordering
               merge(existing, incoming) {
                  // Merge connection data for pagination
                  if (!existing) return incoming;

                  return {
                     ...incoming,
                     edges: [...(existing.edges || []), ...(incoming.edges || [])],
                  };
               },
            },

            // Cache ready tasks separately
            readyTasks: {
               keyArgs: ['filter', 'orderBy'],
               merge(existing, incoming) {
                  if (!existing) return incoming;

                  return {
                     ...incoming,
                     edges: [...(existing.edges || []), ...(incoming.edges || [])],
                  };
               },
            },

            // Cache CLI history with pagination
            cliHistory: {
               keyArgs: ['filter', 'orderBy'],
               merge(existing, incoming) {
                  if (!existing) return incoming;

                  return {
                     ...incoming,
                     edges: [...(existing.edges || []), ...(incoming.edges || [])],
                  };
               },
            },

            // Cache sync operations with pagination
            syncOperations: {
               keyArgs: ['filter', 'orderBy'],
               merge(existing, incoming) {
                  if (!existing) return incoming;

                  return {
                     ...incoming,
                     edges: [...(existing.edges || []), ...(incoming.edges || [])],
                  };
               },
            },
         },
      },

      Task: {
         fields: {
            // Cache task dependencies as references
            dependencies: {
               merge(existing = [], incoming) {
                  return incoming;
               },
            },

            // Cache subtasks as embedded objects
            subtasks: {
               merge(existing = [], incoming) {
                  return incoming;
               },
            },

            // Compute progress based on subtasks completion
            progress: {
               read(existing, { readField }) {
                  if (existing !== undefined) return existing;

                  const subtasks = (readField('subtasks') as any[]) || [];
                  if (subtasks.length === 0) return 0;

                  const completed = subtasks.filter(
                     (subtask) => readField('status', subtask) === 'done'
                  ).length;

                  return Math.round((completed / subtasks.length) * 100);
               },
            },

            // Compute isReady based on dependencies status
            isReady: {
               read(existing, { readField, cache }) {
                  if (existing !== undefined) return existing;

                  const dependencies = (readField('dependencies') as string[]) || [];
                  if (dependencies.length === 0) return true;

                  // Check if all dependencies are completed
                  for (const depId of dependencies) {
                     const depTask = cache.readFragment({
                        id: cache.identify({ __typename: 'Task', id: depId }),
                        fragment: gql`
                           fragment TaskStatus on Task {
                              status
                           }
                        `,
                     }) as { status?: string } | null;

                     if (!depTask || !depTask.status || depTask.status !== 'done') {
                        return false;
                     }
                  }

                  return true;
               },
            },
         },
      },

      Subtask: {
         fields: {
            // Cache subtask dependencies
            dependencies: {
               merge(existing = [], incoming) {
                  return incoming;
               },
            },

            // Reference to parent task
            parentTask: {
               merge(existing, incoming) {
                  return incoming;
               },
            },
         },
      },

      CLICommandResult: {
         fields: {
            // Cache CLI command args
            args: {
               merge(existing = [], incoming) {
                  return incoming;
               },
            },

            // Parse and cache CLI error information
            error: {
               merge(existing, incoming) {
                  return incoming;
               },
            },
         },
      },

      SyncOperation: {
         fields: {
            // Cache task IDs affected by sync operation
            taskIds: {
               merge(existing = [], incoming) {
                  return incoming;
               },
            },

            // Cache sync operation metadata
            metadata: {
               merge(existing, incoming) {
                  return incoming || existing;
               },
            },
         },
      },

      SyncConflict: {
         fields: {
            // Cache conflict data versions
            uiVersion: {
               merge(existing, incoming) {
                  return incoming || existing;
               },
            },

            cliVersion: {
               merge(existing, incoming) {
                  return incoming || existing;
               },
            },
         },
      },

      // Cache control for different connection types
      TaskConnection: {
         keyFields: false, // Don't use object identity for connections
      },

      CLICommandConnection: {
         keyFields: false,
      },

      SyncOperationConnection: {
         keyFields: false,
      },

      SyncConflictConnection: {
         keyFields: false,
      },
   },

   // Possible types for interface/union handling
   possibleTypes: {
      // Add any interface implementations here if needed
   },

   // Data ID from object for normalization
   dataIdFromObject: (object: any) => {
      switch (object.__typename) {
         case 'Task':
         case 'Subtask':
         case 'CLICommandResult':
         case 'SyncOperation':
         case 'SyncConflict':
         case 'User':
            return `${object.__typename}:${object.id}`;
         default:
            return undefined;
      }
   },
});

// Create Apollo Client instance
export const apolloClient = new ApolloClient({
   link: authLink.concat(httpLink),
   cache,
   defaultOptions: {
      watchQuery: {
         fetchPolicy: 'cache-and-network',
         errorPolicy: 'all',
      },
      query: {
         fetchPolicy: 'cache-first',
         errorPolicy: 'all',
      },
      mutate: {
         errorPolicy: 'all',
      },
   },
   // Enable dev tools in development
   connectToDevTools: process.env.NODE_ENV === 'development',
});

// Cache helper functions
export const cacheHelpers = {
   // Update task in cache
   updateTaskInCache: (taskId: string, updates: Partial<Task>) => {
      cache.modify({
         id: cache.identify({ __typename: 'Task', id: taskId }),
         fields: {
            ...Object.fromEntries(
               Object.entries(updates).map(([key, value]) => [key, () => value])
            ),
         },
      });
   },

   // Invalidate queries that might be affected by task changes
   invalidateTaskQueries: () => {
      cache.evict({ fieldName: 'tasks' });
      cache.evict({ fieldName: 'readyTasks' });
      cache.gc();
   },

   // Add new task to cache
   addTaskToCache: (task: Task) => {
      cache.modify({
         fields: {
            tasks(existingTasksConnection = { edges: [], nodes: [] }) {
               const newTaskRef = cache.writeFragment({
                  data: task,
                  fragment: gql`
                     fragment NewTask on Task {
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
                  `,
               });

               return {
                  ...existingTasksConnection,
                  edges: [{ node: newTaskRef, cursor: task.id }, ...existingTasksConnection.edges],
                  nodes: [newTaskRef, ...existingTasksConnection.nodes],
               };
            },
         },
      });
   },

   // Remove task from cache
   removeTaskFromCache: (taskId: string) => {
      cache.evict({ id: cache.identify({ __typename: 'Task', id: taskId }) });
      cache.gc();
   },

   // Reset entire cache
   resetCache: () => {
      cache.reset();
   },
};

export default apolloClient;
