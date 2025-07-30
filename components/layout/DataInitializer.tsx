'use client';

import { useEffect } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { usePersistenceStore } from '@/libs/client/stores/persistenceStore';

export function DataInitializer({ children }: { children: React.ReactNode }) {
   const initialize = useDataStore((state) => state.initialize);
   const isInitialized = useDataStore((state) => state.isInitialized);
   const { loadFromLocalStorage, enablePersistence } = usePersistenceStore();

   useEffect(() => {
      const initData = async () => {
         // Try to load from localStorage first if persistence is enabled
         if (enablePersistence) {
            loadFromLocalStorage();
         }

         // If no data was loaded from localStorage, initialize with mock data
         if (!isInitialized) {
            await initialize();
         }
      };

      initData();
   }, []);

   return <>{children}</>;
}
