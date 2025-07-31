import { useEffect, useState } from 'react';
import { useDataStore } from '../stores/dataStore';

export function useStatuses() {
   const { statuses, isInitialized, isLoading, initialize } = useDataStore();
   const [error, setError] = useState<Error | undefined>(undefined);

   useEffect(() => {
      if (!isInitialized) {
         initialize().catch((err) => {
            setError(err);
         });
      }
   }, [isInitialized, initialize]);

   return {
      data: statuses,
      loading: isLoading || !isInitialized,
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
