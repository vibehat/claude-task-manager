import { useEffect, useState } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';
export function useStatuses() {
  const statuses = useDataStore((state) => state.allStatuses);
  const isInitialized = useDataStore((state) => state.isInitialized);
  const isLoading = useDataStore((state) => state.isLoading);
  const initialize = useDataStore((state) => state.initialize);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (!isInitialized) {
      initialize().catch((err) => {
        console.error('useStatuses: Failed to initialize data store:', err);
        setError(err);
      });
    }
  }, [isInitialized, initialize]);

  // Debug logging for troubleshooting
  useEffect(() => {
    console.log('[useStatuses] State update:', {
      statusesCount: statuses?.length,
      isInitialized,
      isLoading,
      hasError: !!error,
    });
  }, [statuses, isInitialized, isLoading, error]);

  return {
    data: statuses,
    loading: isLoading || !isInitialized,
    error,
  };
}
