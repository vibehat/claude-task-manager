'use client';

import { useEffect } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';

export function DataInitializer({ children }: { children: React.ReactNode }) {
  const initialize = useDataStore((state) => state.initialize);
  const isInitialized = useDataStore((state) => state.isInitialized);

  useEffect(() => {
    const initData = async () => {
      console.log('[DataInitializer] Starting simplified initialization...', {
        isInitialized,
      });

      // Simple initialization - just load raw data from API
      if (!isInitialized) {
        console.log('[DataInitializer] Initializing raw data from API...');
        await initialize();
      }
    };

    initData();
  }, []);

  return <>{children}</>;
}
