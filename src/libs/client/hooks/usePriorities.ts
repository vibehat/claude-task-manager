import { useEffect, useState } from 'react';
import { useDataStore, useAllPriorities } from '../stores';

export function usePriorities() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  const priorities = useAllPriorities();
  const isInitialized = useDataStore((state) => state.isInitialized);
  const initialize = useDataStore((state) => state.initialize);

  useEffect(() => {
    if (!isInitialized) {
      initialize()
        .then(() => setLoading(false))
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [isInitialized]);

  return {
    data: priorities,
    loading,
    error,
  };
}

export function usePriority(id: string | undefined) {
  // TODO: Implement usePriorityDetail in store
  // const priority = usePriorityDetail(id || '');

  return {
    data: id ? undefined : undefined, // TODO: return actual priority data
    loading: false,
    error: undefined,
  };
}
