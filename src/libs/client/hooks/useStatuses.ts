import { useEffect, useState } from 'react';
import { useDataStore } from '../stores/dataStore';

export function useStatuses() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { statuses, isInitialized, initialize } = useDataStore();

   useEffect(() => {
      console.log('useStatuses - effect triggered:', {
         isInitialized,
         statusesLength: statuses.length,
      });
      if (!isInitialized) {
         console.log('useStatuses - calling initialize()');
         initialize()
            .then(() => {
               console.log('useStatuses - initialize completed');
               setLoading(false);
            })
            .catch((err) => {
               console.error('useStatuses - initialize failed:', err);
               setError(err);
               setLoading(false);
            });
      } else {
         console.log('useStatuses - already initialized, setting loading false');
         setLoading(false);
      }
   }, [isInitialized, initialize]);

   console.log('useStatuses - render:', {
      statuses: statuses.length,
      loading,
      error,
      isInitialized,
   });

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
