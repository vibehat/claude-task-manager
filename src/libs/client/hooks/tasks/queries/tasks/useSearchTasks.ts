import { useSearchTasks as useSearchTasksZustand } from '@/libs/client/hooks/useTasks';

export interface UseSearchTasksOptions {
   query?: string;
   skip?: boolean;
}

export function useSearchTasks(options: UseSearchTasksOptions = {}) {
   const { query = '', skip = false } = options;

   // Use the new Zustand-based hook
   const result = useSearchTasksZustand(query, { skip: skip || !query });

   // Transform to match the old GraphQL API shape
   return {
      data: result.data ? { searchTasks: result.data } : undefined,
      loading: result.loading,
      error: result.error,
      refetch: result.refetch,
   };
}
