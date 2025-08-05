import { useEffect, useState } from 'react';
import { useDataStore, useAllLabels } from '../stores';
import type { Label } from '../types/dataModels';

export function useLabels() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  const labels = useAllLabels();
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
    data: labels,
    loading,
    error,
  };
}

export function useLabel(id: string | undefined) {
  // TODO: Implement useLabelDetail in store
  // const label = useLabelDetail(id || '');

  return {
    data: id ? undefined : undefined, // TODO: return actual label data
    loading: false,
    error: undefined,
  };
}

export function useLabelMutations() {
  // TODO: Implement these methods in the data store
  // const addLabel = useDataStore((state) => state.addLabel);
  // const updateLabel = useDataStore((state) => state.updateLabel);
  // const deleteLabel = useDataStore((state) => state.deleteLabel);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const createLabel = async (data: Omit<Label, 'id' | 'createdAt' | 'updatedAt'>) => {
    setLoading(true);
    setError(undefined);
    try {
      // TODO: Implement addLabel in store
      // const newLabel = addLabel(data);
      setLoading(false);
      return { data: null }; // TODO: return actual new label
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      return { error: err as Error };
    }
  };

  const updateLabel = async () => {
    // TODO: Implement updateLabel in store
    return { data: null };
  };

  const deleteLabel = async () => {
    // TODO: Implement deleteLabel in store
    return { data: null };
  };

  return {
    createLabel,
    updateLabel,
    deleteLabel,
    loading,
    error,
  };
}
