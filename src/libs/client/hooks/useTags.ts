import { useEffect, useState } from 'react';
import { useDataStore, useAllTags } from '../stores';

export function useTags() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  const tags = useAllTags();
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
    data: tags,
    loading,
    error,
  };
}

export function useTag(id: string | undefined) {
  // TODO: Implement useTagDetail in store
  const tag = null; // Placeholder

  return {
    data: id ? tag : undefined,
    loading: false,
    error: undefined,
  };
}
