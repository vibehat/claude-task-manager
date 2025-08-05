'use client';

import { useEffect } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { terminalStartupManager } from '@/features/terminal/utils/terminalStartup';

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
