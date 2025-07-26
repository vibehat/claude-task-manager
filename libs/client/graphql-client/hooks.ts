/**
 * GraphQL Client - React hooks for data fetching
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { createGraphQLClient, GraphQLResponse } from './client';

export interface UseGraphQLQueryOptions {
   skip?: boolean;
   pollInterval?: number;
   errorPolicy?: 'none' | 'ignore' | 'all';
}

export interface UseGraphQLQueryResult<T> {
   data: T | null;
   loading: boolean;
   error: Error | null;
   refetch: () => Promise<void>;
   startPolling: (pollInterval: number) => void;
   stopPolling: () => void;
}

export interface UseGraphQLMutationOptions {
   errorPolicy?: 'none' | 'ignore' | 'all';
   onCompleted?: (data: any) => void;
   onError?: (error: Error) => void;
}

export interface UseGraphQLMutationResult<T, V = Record<string, any>> {
   mutate: (variables?: V) => Promise<T>;
   data: T | null;
   loading: boolean;
   error: Error | null;
   reset: () => void;
}

// Global client instance
const defaultClient = createGraphQLClient();

/**
 * Hook for GraphQL queries with caching and polling support
 */
export function useGraphQLQuery<T = any>(
   query: string,
   variables?: Record<string, any>,
   options: UseGraphQLQueryOptions = {}
): UseGraphQLQueryResult<T> {
   const [data, setData] = useState<T | null>(null);
   const [loading, setLoading] = useState(!options.skip);
   const [error, setError] = useState<Error | null>(null);

   const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);
   const mountedRef = useRef(true);

   const executeQuery = useCallback(async () => {
      if (options.skip || !mountedRef.current) return;

      try {
         setLoading(true);
         setError(null);

         const response: GraphQLResponse<T> = await defaultClient.query(query, variables);

         if (!mountedRef.current) return;

         if (response.errors && response.errors.length > 0) {
            const error = new Error(response.errors[0].message);

            if (options.errorPolicy === 'ignore') {
               // Ignore errors but still set data if available
               if (response.data) {
                  setData(response.data);
               }
            } else if (options.errorPolicy === 'all') {
               // Set both data and error
               if (response.data) {
                  setData(response.data);
               }
               setError(error);
            } else {
               // Default: only set error
               setError(error);
            }
         } else {
            setData(response.data || null);
         }
      } catch (err) {
         if (!mountedRef.current) return;
         setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
         if (mountedRef.current) {
            setLoading(false);
         }
      }
   }, [query, variables, options.skip, options.errorPolicy]);

   const refetch = useCallback(async () => {
      await executeQuery();
   }, [executeQuery]);

   const startPolling = useCallback(
      (pollInterval: number) => {
         if (pollIntervalRef.current) {
            clearInterval(pollIntervalRef.current);
         }

         pollIntervalRef.current = setInterval(() => {
            executeQuery();
         }, pollInterval);
      },
      [executeQuery]
   );

   const stopPolling = useCallback(() => {
      if (pollIntervalRef.current) {
         clearInterval(pollIntervalRef.current);
         pollIntervalRef.current = null;
      }
   }, []);

   // Initial query execution
   useEffect(() => {
      executeQuery();

      // Set up polling if specified
      if (options.pollInterval && options.pollInterval > 0) {
         startPolling(options.pollInterval);
      }

      return () => {
         stopPolling();
      };
   }, [executeQuery, options.pollInterval, startPolling, stopPolling]);

   // Cleanup on unmount
   useEffect(() => {
      return () => {
         mountedRef.current = false;
         stopPolling();
      };
   }, [stopPolling]);

   return {
      data,
      loading,
      error,
      refetch,
      startPolling,
      stopPolling,
   };
}

/**
 * Hook for GraphQL mutations
 */
export function useGraphQLMutation<T = any, V = Record<string, any>>(
   mutation: string,
   options: UseGraphQLMutationOptions = {}
): UseGraphQLMutationResult<T, V> {
   const [data, setData] = useState<T | null>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<Error | null>(null);

   const mutate = useCallback(
      async (variables?: V): Promise<T> => {
         try {
            setLoading(true);
            setError(null);

            const response: GraphQLResponse<T> = await defaultClient.mutate(mutation, variables);

            if (response.errors && response.errors.length > 0) {
               const error = new Error(response.errors[0].message);

               if (options.errorPolicy === 'ignore') {
                  // Ignore errors but still set data if available
                  if (response.data) {
                     setData(response.data);
                     options.onCompleted?.(response.data);
                     return response.data;
                  }
               } else if (options.errorPolicy === 'all') {
                  // Set both data and error
                  if (response.data) {
                     setData(response.data);
                     options.onCompleted?.(response.data);
                  }
                  setError(error);
                  options.onError?.(error);
                  throw error;
               } else {
                  // Default: only set error
                  setError(error);
                  options.onError?.(error);
                  throw error;
               }
            } else if (response.data) {
               setData(response.data);
               options.onCompleted?.(response.data);
               return response.data;
            }

            throw new Error('No data returned from mutation');
         } catch (err) {
            const error = err instanceof Error ? err : new Error('Unknown error');
            setError(error);
            options.onError?.(error);
            throw error;
         } finally {
            setLoading(false);
         }
      },
      [mutation, options]
   );

   const reset = useCallback(() => {
      setData(null);
      setError(null);
      setLoading(false);
   }, []);

   return {
      mutate,
      data,
      loading,
      error,
      reset,
   };
}

/**
 * Hook for lazy GraphQL queries (executed on demand)
 */
export function useLazyGraphQLQuery<T = any>(
   query: string,
   options: UseGraphQLQueryOptions = {}
): [(variables?: Record<string, any>) => Promise<void>, UseGraphQLQueryResult<T>] {
   const [variables, setVariables] = useState<Record<string, any> | undefined>();
   const [shouldSkip, setShouldSkip] = useState(true);

   const queryResult = useGraphQLQuery<T>(query, variables, {
      ...options,
      skip: shouldSkip || options.skip,
   });

   const executeQuery = useCallback(async (queryVariables?: Record<string, any>) => {
      setVariables(queryVariables);
      setShouldSkip(false);
   }, []);

   return [executeQuery, queryResult];
}

/**
 * Get the GraphQL client instance for direct use
 */
export function useGraphQLClient() {
   return defaultClient;
}
