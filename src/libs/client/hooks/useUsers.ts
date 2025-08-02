import { useEffect, useState } from 'react';
import { useDataStore, useAllUsers, useUserDetail } from '../stores';

export function useUsers() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const users = useAllUsers();
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
      data: users,
      loading,
      error,
   };
}

export function useUser(id: string | undefined) {
   const user = useUserDetail(id || '');

   return {
      data: id ? user : undefined,
      loading: false,
      error: undefined,
   };
}
