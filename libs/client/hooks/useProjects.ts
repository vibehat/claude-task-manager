import { useEffect, useState } from 'react';
import { useDataStore } from '../stores/dataStore';

export function useProjects() {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { projects, isInitialized, initialize } = useDataStore();

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
      data: projects,
      loading,
      error,
   };
}

export function useProject(id: string | undefined) {
   const { getProjectById } = useDataStore();
   const project = id ? getProjectById(id) : undefined;

   return {
      data: project,
      loading: false,
      error: undefined,
   };
}
