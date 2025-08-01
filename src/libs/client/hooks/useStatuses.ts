import { useEffect, useState } from 'react';
import { useDataStore } from '../stores/dataStore';

export function useStatuses() {
   const { statuses, isInitialized, isLoading, initialize } = useDataStore();
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

export function useStatus(id: string | undefined) {
   const { getStatusById } = useDataStore();
   const status = id ? getStatusById(id) : undefined;

   return {
      data: status,
      loading: false,
      error: undefined,
   };
}
