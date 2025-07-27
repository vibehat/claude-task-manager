'use client';

import { useEffect } from 'react';
// import { useTasks } from '../graphql-client';
import { useIssuesStore } from '@/store/issues-store';

/**
 * Integration hook that connects GraphQL data fetching with Zustand store
 * This maintains the existing component interface while using GraphQL data
 *
 * Note: This is a transition hook that maps GraphQL Task data to the existing
 * Issues store interface for backward compatibility.
 *
 * TEMPORARY: GraphQL integration disabled due to schema mismatch
 */
export function useIssuesIntegration() {
   // Temporarily disable GraphQL integration
   const { tasks, loading, error, refetch } = {
      tasks: [],
      loading: false,
      error: null,
      refetch: async () => {},
   };

   const {
      initializeFromGraphQL,
      setLoading,
      setError,
      issues,
      issuesByStatus,
      loading: storeLoading,
      error: storeError,
   } = useIssuesStore();

   // Initialize with empty data for now
   useEffect(() => {
      setLoading(false);
      // Note: Store will use mock data by default when not initialized from GraphQL
   }, [setLoading]);

   // Return store state for components to use
   return {
      issues,
      issuesByStatus,
      loading: storeLoading,
      error: storeError,
      refetch,
   };
}
