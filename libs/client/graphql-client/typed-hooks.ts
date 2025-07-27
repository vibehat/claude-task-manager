/**
 * GraphQL Client - Typed hooks for specific operations
 */

'use client';

import { useGraphQLQuery, useGraphQLMutation } from './hooks';
import type { CreateTaskVariables, UpdateTaskVariables } from './operations';
import { GRAPHQL_OPERATIONS } from './operations';

// Task-specific hooks
export function useTasks() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.TASKS.GET_TASKS);
}

export function useTask(id: string) {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.TASKS.GET_TASK_BY_ID, { id }, { skip: !id });
}

export function useCreateTask() {
   return useGraphQLMutation<any, CreateTaskVariables>(GRAPHQL_OPERATIONS.TASKS.CREATE_TASK);
}

export function useUpdateTask() {
   return useGraphQLMutation<any, UpdateTaskVariables>(GRAPHQL_OPERATIONS.TASKS.UPDATE_TASK);
}

export function useDeleteTask() {
   return useGraphQLMutation<boolean, { id: string }>(GRAPHQL_OPERATIONS.TASKS.DELETE_TASK);
}

// Issue-specific hooks
export function useIssues() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.ISSUES.GET_ISSUES);
}

export function useIssue(id: string) {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.ISSUES.GET_ISSUE_BY_ID, { id }, { skip: !id });
}

export function useCreateIssue() {
   return useGraphQLMutation(GRAPHQL_OPERATIONS.ISSUES.CREATE_ISSUE);
}

export function useUpdateIssue() {
   return useGraphQLMutation(GRAPHQL_OPERATIONS.ISSUES.UPDATE_ISSUE);
}

export function useDeleteIssue() {
   return useGraphQLMutation<boolean, { id: string }>(GRAPHQL_OPERATIONS.ISSUES.DELETE_ISSUE);
}

// User-specific hooks
export function useUsers() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.USERS.GET_USERS);
}

export function useUser(id: string) {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.USERS.GET_USER_BY_ID, { id }, { skip: !id });
}

// Project-specific hooks
export function useProjects() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.PROJECTS.GET_PROJECTS);
}

export function useProject(id: string) {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.PROJECTS.GET_PROJECT_BY_ID, { id }, { skip: !id });
}

// Reference data hooks
export function useStatuses() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.REFERENCE.GET_STATUSES);
}

export function usePriorities() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.REFERENCE.GET_PRIORITIES);
}

export function useLabels() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.REFERENCE.GET_LABELS);
}

export function useTeams() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.REFERENCE.GET_TEAMS);
}

// System hooks
export function useHealthCheck() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.SYSTEM.HEALTH_CHECK);
}

export function useHello() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.SYSTEM.HELLO);
}

export function useCLIStatus() {
   return useGraphQLQuery(GRAPHQL_OPERATIONS.SYSTEM.CLI_STATUS);
}

// Compound hooks for common patterns
export function useIssueManagement() {
   const issuesQuery = useIssues();
   const usersQuery = useUsers();
   const projectsQuery = useProjects();
   const statusesQuery = useStatuses();
   const prioritiesQuery = usePriorities();
   const labelsQuery = useLabels();

   const createIssueMutation = useCreateIssue();
   const updateIssueMutation = useUpdateIssue();
   const deleteIssueMutation = useDeleteIssue();

   return {
      // Data
      issues: issuesQuery.data,
      users: usersQuery.data,
      projects: projectsQuery.data,
      statuses: statusesQuery.data,
      priorities: prioritiesQuery.data,
      labels: labelsQuery.data,

      // Loading states
      loading:
         issuesQuery.loading ||
         usersQuery.loading ||
         projectsQuery.loading ||
         statusesQuery.loading ||
         prioritiesQuery.loading ||
         labelsQuery.loading,

      // Error states
      error:
         issuesQuery.error ||
         usersQuery.error ||
         projectsQuery.error ||
         statusesQuery.error ||
         prioritiesQuery.error ||
         labelsQuery.error,

      // Mutations
      createIssue: createIssueMutation.mutate,
      updateIssue: updateIssueMutation.mutate,
      deleteIssue: deleteIssueMutation.mutate,

      // Mutation states
      creating: createIssueMutation.loading,
      updating: updateIssueMutation.loading,
      deleting: deleteIssueMutation.loading,

      // Refetch functions
      refetch: () => {
         issuesQuery.refetch();
         usersQuery.refetch();
         projectsQuery.refetch();
         statusesQuery.refetch();
         prioritiesQuery.refetch();
         labelsQuery.refetch();
      },
   };
}

export function useTaskManagement() {
   const tasksQuery = useTasks();
   const createTaskMutation = useCreateTask();
   const updateTaskMutation = useUpdateTask();
   const deleteTaskMutation = useDeleteTask();

   return {
      // Data
      tasks: tasksQuery.data,

      // Loading states
      loading: tasksQuery.loading,

      // Error states
      error: tasksQuery.error,

      // Mutations
      createTask: createTaskMutation.mutate,
      updateTask: updateTaskMutation.mutate,
      deleteTask: deleteTaskMutation.mutate,

      // Mutation states
      creating: createTaskMutation.loading,
      updating: updateTaskMutation.loading,
      deleting: deleteTaskMutation.loading,

      // Refetch
      refetch: tasksQuery.refetch,
   };
}

// Polling hooks for real-time updates
export function useRealtimeIssues(pollInterval = 30000) {
   const query = useGraphQLQuery(GRAPHQL_OPERATIONS.ISSUES.GET_ISSUES, {}, { pollInterval });

   return query;
}

export function useRealtimeTasks(pollInterval = 30000) {
   const query = useGraphQLQuery(GRAPHQL_OPERATIONS.TASKS.GET_TASKS, {}, { pollInterval });

   return query;
}
