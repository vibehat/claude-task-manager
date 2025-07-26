/**
 * GraphQL Client - Main entry point
 */

// Core client functionality
export {
   GraphQLClient,
   createGraphQLClient,
   type GraphQLResponse,
   type GraphQLClientConfig,
} from './client';

// React hooks
export {
   useGraphQLQuery,
   useGraphQLMutation,
   useLazyGraphQLQuery,
   useGraphQLClient,
   type UseGraphQLQueryOptions,
   type UseGraphQLQueryResult,
   type UseGraphQLMutationOptions,
   type UseGraphQLMutationResult,
} from './hooks';

// Caching functionality
export {
   GraphQLCache,
   CachedGraphQLClient,
   defaultCache,
   type CacheEntry,
   type CacheOptions,
} from './cache';

// Predefined operations
export {
   GRAPHQL_OPERATIONS,
   TASK_OPERATIONS,
   ISSUE_OPERATIONS,
   USER_OPERATIONS,
   PROJECT_OPERATIONS,
   REFERENCE_OPERATIONS,
   SYSTEM_OPERATIONS,
   type TaskQueryVariables,
   type CreateTaskVariables,
   type UpdateTaskVariables,
} from './operations';

// Typed hooks for specific operations
export {
   // Task hooks
   useTasks,
   useTask,
   useCreateTask,
   useUpdateTask,
   useDeleteTask,

   // Issue hooks
   useIssues,
   useIssue,
   useCreateIssue,
   useUpdateIssue,
   useDeleteIssue,

   // User hooks
   useUsers,
   useUser,

   // Project hooks
   useProjects,
   useProject,

   // Reference data hooks
   useStatuses,
   usePriorities,
   useLabels,
   useTeams,

   // System hooks
   useHealthCheck,
   useHello,
   useCLIStatus,

   // Compound hooks
   useIssueManagement,
   useTaskManagement,

   // Real-time hooks
   useRealtimeIssues,
   useRealtimeTasks,
} from './typed-hooks';

// Default configured client instance
export { createGraphQLClient as createClient } from './client';

// Convenience function to create a client with caching
import { createGraphQLClient } from './client';
import { CachedGraphQLClient, defaultCache } from './cache';

export function createCachedClient(config?: Parameters<typeof createGraphQLClient>[0]) {
   const client = createGraphQLClient(config);
   return new CachedGraphQLClient(client, defaultCache);
}

// Re-export for backward compatibility
export { useIssues as useGraphQLIssues } from './typed-hooks';
export { useUsers as useGraphQLUsers } from './typed-hooks';
export { useProjects as useGraphQLProjects } from './typed-hooks';
