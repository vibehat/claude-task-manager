import { useEffect, useState } from 'react';
import { useDataStore, useAllPriorities, usePriorityDetail } from '../stores';

export function usePriorities() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const priorities = useAllPriorities();
   const { isInitialized, initialize } = useDataStore();

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
   const priority = usePriorityDetail(id || '');

   return {
      data: id ? priority : undefined,
      loading: false,
      error: undefined,
   };
}
