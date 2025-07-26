'use client';

import { useEffect } from 'react';
import { useTasks } from '../graphql-client';
import { useIssuesStore } from '@/store/issues-store';

/**
 * Integration hook that connects GraphQL data fetching with Zustand store
 * This maintains the existing component interface while using GraphQL data
 *
 * Note: This is a transition hook that maps GraphQL Task data to the existing
 * Issues store interface for backward compatibility.
 */
export function useIssuesIntegration() {
   const { tasks, loading, error, refetch } = useTasks();
   const {
      initializeFromGraphQL,
      setLoading,
      setError,
      issues,
      issuesByStatus,
      loading: storeLoading,
      error: storeError,
   } = useIssuesStore();

   // Sync GraphQL data with store
   useEffect(() => {
      if (loading) {
         setLoading(true);
      } else if (error) {
         setError(error);
      } else if (tasks) {
         // Transform tasks to issues format for backward compatibility
         const transformedIssues = tasks.map((task) => ({
            id: task.id,
            identifier: `TASK-${task.id}`,
            title: task.title,
            description: task.description,
            status: { id: task.status.toLowerCase(), name: task.status },
            priority: { id: task.priority.toLowerCase(), name: task.priority },
            labels: [],
            assignee: null,
            project: null,
            subissues: [],
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
            dueDate: null,
            rank: task.id.toString(),
         }));

         initializeFromGraphQL({ issues: transformedIssues });
      }
   }, [tasks, loading, error, initializeFromGraphQL, setLoading, setError]);

   // Return store state for components to use
   return {
      issues,
      issuesByStatus,
      loading: storeLoading,
      error: storeError,
      refetch,
   };
}
