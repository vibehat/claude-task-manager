/**
 * Enhanced GraphQL hooks with better error handling and loading states
 */

import { useCallback } from 'react';
import {
   useGetTasksQuery,
   useGetTaskQuery,
   useGetReadyTasksQuery,
   useCreateTaskMutation,
   useUpdateTaskMutation,
   useDeleteTaskMutation,
   useUpdateTaskStatusMutation,
   useHealthQuery,
   useHelloQuery,
   type GetTasksQueryVariables,
   type GetTaskQueryVariables,
   type GetReadyTasksQueryVariables,
   type CreateTaskMutationVariables,
   type UpdateTaskMutationVariables,
   type DeleteTaskMutationVariables,
   type UpdateTaskStatusMutationVariables,
} from './generated';
import { cacheHelpers } from './apollo-client';

// Enhanced hooks with better error handling and loading states

/**
 * Enhanced tasks query hook with automatic error handling
 */
export function useTasks(variables?: GetTasksQueryVariables) {
   const result = useGetTasksQuery({
      variables,
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
   });

   return {
      ...result,
      tasks: result.data?.tasks?.nodes || [],
      connection: result.data?.tasks,
      hasNextPage: result.data?.tasks?.pageInfo?.hasNextPage || false,
      hasPreviousPage: result.data?.tasks?.pageInfo?.hasPreviousPage || false,
   };
}

/**
 * Enhanced single task query hook
 */
export function useTask(taskId: string) {
   const result = useGetTaskQuery({
      variables: { id: taskId },
      errorPolicy: 'all',
      skip: !taskId,
   });

   return {
      ...result,
      task: result.data?.task,
   };
}

/**
 * Enhanced ready tasks query hook
 */
export function useReadyTasks(variables?: GetReadyTasksQueryVariables) {
   const result = useGetReadyTasksQuery({
      variables,
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
   });

   return {
      ...result,
      tasks: result.data?.readyTasks?.nodes || [],
      connection: result.data?.readyTasks,
      hasNextPage: result.data?.readyTasks?.pageInfo?.hasNextPage || false,
      hasPreviousPage: result.data?.readyTasks?.pageInfo?.hasPreviousPage || false,
   };
}

/**
 * System health check hook
 */
export function useHealth() {
   const result = useHealthQuery({
      errorPolicy: 'all',
      // Poll every 30 seconds for health status
      pollInterval: 30000,
   });

   return {
      ...result,
      isHealthy: result.data?.health === 'OK',
      health: result.data?.health,
   };
}

/**
 * Hello query hook for testing
 */
export function useHello() {
   const result = useHelloQuery({
      errorPolicy: 'all',
   });

   return {
      ...result,
      message: result.data?.hello,
   };
}

// Utility hooks for common patterns

/**
 * Hook for managing task lists with pagination
 */
export function useTaskList(initialFilters?: GetTasksQueryVariables) {
   const { data, loading, error, fetchMore, refetch, tasks, connection, hasNextPage } =
      useTasks(initialFilters);

   const loadMore = useCallback(async () => {
      if (!hasNextPage || loading) return;

      try {
         await fetchMore({
            variables: {
               ...initialFilters,
               pagination: {
                  ...initialFilters?.pagination,
                  after: connection?.pageInfo?.endCursor,
               },
            },
         });
      } catch (error) {
         console.error('Error loading more tasks:', error);
      }
   }, [fetchMore, hasNextPage, loading, connection, initialFilters]);

   const refresh = useCallback(async () => {
      try {
         await refetch();
      } catch (error) {
         console.error('Error refreshing tasks:', error);
      }
   }, [refetch]);

   return {
      tasks,
      loading,
      error,
      hasNextPage,
      loadMore,
      refresh,
      connection,
   };
}
