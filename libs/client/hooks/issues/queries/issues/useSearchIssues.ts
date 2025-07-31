import { useSearchIssues as useSearchIssuesZustand } from '@/libs/client/hooks/useIssues';

export interface UseSearchIssuesOptions {
   query?: string;
   skip?: boolean;
}

export function useSearchIssues(options: UseSearchIssuesOptions = {}) {
   const { query = '', skip = false } = options;

   // Use the new Zustand-based hook
   const result = useSearchIssuesZustand(query, { skip: skip || !query });

   // Transform to match the old GraphQL API shape
   return {
      data: result.data ? { searchIssues: result.data } : undefined,
      loading: result.loading,
      error: result.error,
      refetch: result.refetch,
   };
}
