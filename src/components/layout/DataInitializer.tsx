'use client';

import { useEffect } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { usePersistenceStore } from '@/libs/client/stores/persistenceStore';
import { terminalStartupManager } from '@/features/terminal/utils/terminalStartup';

export function DataInitializer({ children }: { children: React.ReactNode }) {
   const initialize = useDataStore((state) => state.initialize);
   const isInitialized = useDataStore((state) => state.isInitialized);
   const { loadFromLocalStorage, enablePersistence } = usePersistenceStore();

   useEffect(() => {
      const initData = async () => {
         console.log('[DataInitializer] Starting initialization...', {
            enablePersistence,
            isInitialized,
         });

         // Try to load from localStorage first if persistence is enabled
         if (enablePersistence) {
            loadFromLocalStorage();
         }

         // Wait a tick for localStorage loading to complete, then check if we need API data
         await new Promise((resolve) => setTimeout(resolve, 0));
         const currentState = useDataStore.getState();

         console.log('[DataInitializer] After localStorage load:', {
            isInitialized: currentState.isInitialized,
            statusCount: Object.keys(currentState.statusEntities).length,
         });

         // If no valid data was loaded from localStorage, initialize with API data
         if (!currentState.isInitialized) {
            console.log('[DataInitializer] No valid localStorage data, initializing from API...');
            await initialize();
         }

         // Run terminal startup check after data initialization
         try {
            console.log('[DataInitializer] Running terminal startup check...');
            await terminalStartupManager.runSafeStartupCheck();
            console.log('[DataInitializer] Terminal startup check completed');
         } catch (error) {
            console.error('[DataInitializer] Terminal startup check failed:', error);
         }
      };

      initData();
   }, []);

   return <>{children}</>;
}
