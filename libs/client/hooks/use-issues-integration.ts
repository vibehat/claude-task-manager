'use client';

import { useEffect } from 'react';
import { useIssues } from '../graphql-client';
import { useIssuesStore } from '@/store/issues-store';

/**
 * Integration hook that connects GraphQL data fetching with Zustand store
 * This maintains the existing component interface while using GraphQL data
 */
export function useIssuesIntegration() {
   const { data, loading, error, refetch } = useIssues();
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
      } else if (data) {
         initializeFromGraphQL(data);
      }
   }, [data, loading, error, initializeFromGraphQL, setLoading, setError]);

   // Return store state for components to use
   return {
      issues,
      issuesByStatus,
      loading: storeLoading,
      error: storeError,
      refetch,
   };
}
