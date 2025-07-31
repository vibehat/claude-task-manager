import { useEffect, useState } from 'react';
import { useDataStore } from '../stores/dataStore';

export function useUsers() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { users, isInitialized, initialize } = useDataStore();

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
      data: users,
      loading,
      error,
   };
}

export function useUser(id: string | undefined) {
   const { getUserById } = useDataStore();
   const user = id ? getUserById(id) : undefined;

   return {
      data: user,
      loading: false,
      error: undefined,
   };
}
