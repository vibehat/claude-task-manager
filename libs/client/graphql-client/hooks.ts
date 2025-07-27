/**
 * Enhanced GraphQL hooks with better error handling and loading states
 */

import { useCallback } from 'react';
import {
   useGetTasksQuery,
   useGetTaskQuery,
   useGetReadyTasksQuery,
   useGetTasksConnectionQuery,
   useSearchTasksQuery,
   useGetTaskStatsQuery,
   type GetTasksQueryVariables,
   type GetTaskQueryVariables,
   type GetReadyTasksQueryVariables,
   type GetTasksConnectionQueryVariables,
   type SearchTasksQueryVariables,
   type GetTaskStatsQueryVariables,
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
      tasks: result.data?.tasks || [],
   };
}

/**
 * Enhanced single task query hook
 */
export function useTask(taskId: number, options?: any) {
   const result = useGetTaskQuery({
      variables: { id: taskId, options },
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
      tasks: result.data?.readyTasks || [],
   };
}

/**
 * Enhanced tasks connection query hook with pagination
 */
export function useTasksConnection(variables?: GetTasksConnectionQueryVariables) {
   const result = useGetTasksConnectionQuery({
      variables,
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
   });

   return {
      ...result,
      tasks: result.data?.tasksConnection?.edges?.map((edge) => edge.node) || [],
      connection: result.data?.tasksConnection,
      hasNextPage: result.data?.tasksConnection?.pageInfo?.hasNextPage || false,
      hasPreviousPage: result.data?.tasksConnection?.pageInfo?.hasPreviousPage || false,
   };
}

/**
 * Search tasks hook
 */
export function useSearchTasks(searchText: string, options?: any) {
   const result = useSearchTasksQuery({
      variables: { searchText, options },
      errorPolicy: 'all',
      skip: !searchText,
   });

   return {
      ...result,
      tasks: result.data?.searchTasks || [],
   };
}

/**
 * Task statistics hook
 */
export function useTaskStats() {
   const result = useGetTaskStatsQuery({
      errorPolicy: 'all',
   });

   return {
      ...result,
      stats: result.data?.taskStats,
   };
}

// Utility hooks for common patterns

/**
 * Hook for managing task lists with pagination
 */
export function useTaskList(initialFilters?: GetTasksConnectionQueryVariables) {
   const { data, loading, error, fetchMore, refetch, tasks, connection, hasNextPage } =
      useTasksConnection(initialFilters);

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
