import { useEffect, useState } from 'react';
import { useDataStore } from '../stores/dataStore';

export function useStatuses() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { statuses, isInitialized, initialize } = useDataStore();

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
      data: statuses,
      loading,
      error,
   };
}

export function useStatus(id: string | undefined) {
   const { getStatusById } = useDataStore();
   const status = id ? getStatusById(id) : undefined;

   return {
      data: status,
      loading: false,
      error: undefined,
   };
}
