import { useEffect, useState } from 'react';
import { useDataStore } from '../stores/dataStore';
import { Label } from '../services/mockDataService';

export function useLabels() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { labels, isInitialized, initialize } = useDataStore();

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
   }, [isInitialized, initialize]);

   return {
      data: labels,
      loading,
      error,
   };
}

export function useLabel(id: string | undefined) {
   const { getLabelById } = useDataStore();
   const label = id ? getLabelById(id) : undefined;

   return {
      data: label,
      loading: false,
      error: undefined,
   };
}

export function useLabelMutations() {
   const { addLabel, updateLabel, deleteLabel } = useDataStore();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<Error | undefined>(undefined);

   const createLabel = async (data: Omit<Label, 'id' | 'createdAt' | 'updatedAt'>) => {
      setLoading(true);
      setError(undefined);
      try {
         const newLabel = addLabel(data);
         setLoading(false);
         return { data: newLabel };
      } catch (err) {
         setError(err as Error);
         setLoading(false);
         return { error: err as Error };
      }
   };

   return {
      createLabel,
      updateLabel,
      deleteLabel,
      loading,
      error,
   };
}
