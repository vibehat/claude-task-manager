/**
 * GraphQL Client - Typed hooks for specific operations
 */

'use client';

import {
   useGetTasksQuery,
   useGetTaskQuery,
   useGetReadyTasksQuery,
   useGetTasksConnectionQuery,
   useSearchTasksQuery,
   useGetTaskStatsQuery,
} from './generated';
import {
   useTasks,
   useTask,
   useReadyTasks,
   useTasksConnection,
   useSearchTasks,
   useTaskStats,
} from './hooks';

// Re-export enhanced hooks from hooks.ts
export {
   useTasks,
   useTask,
   useReadyTasks,
   useTasksConnection,
   useSearchTasks,
   useTaskStats,
} from './hooks';

// Re-export generated hooks for direct access if needed
export {
   useGetTasksQuery,
   useGetTaskQuery,
   useGetReadyTasksQuery,
   useGetTasksConnectionQuery,
   useSearchTasksQuery,
   useGetTaskStatsQuery,
} from './generated';
