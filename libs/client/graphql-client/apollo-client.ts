import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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
   typePolicies: {},

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
   updateTaskInCache: (taskId: string, updates: any) => {
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
   addTaskToCache: (task: any) => {
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
                        details
                        testStrategy
                        complexity
                        createdAt
                        updatedAt
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
