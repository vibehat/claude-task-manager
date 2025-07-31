import { useEffect, useState } from 'react';
import { useDataStore } from '../stores/dataStore';

export function usePriorities() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { priorities, isInitialized, initialize } = useDataStore();

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
      data: priorities,
      loading,
      error,
   };
}

export function usePriority(id: string | undefined) {
   const { getPriorityById } = useDataStore();
   const priority = id ? getPriorityById(id) : undefined;

   return {
      data: priority,
      loading: false,
      error: undefined,
   };
}
