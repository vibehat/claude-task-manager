'use client';

import { useMultiTerminalStore } from '@/store/multiTerminalStore';

/**
 * Terminal startup utilities for safe initialization and cleanup
 */
export class TerminalStartupManager {
   private static instance: TerminalStartupManager | null = null;
   private hasRunStartupCheck = false;
   private initializationPromise: Promise<void> | null = null;

   private constructor() {}

   public static getInstance(): TerminalStartupManager {
      if (!TerminalStartupManager.instance) {
         TerminalStartupManager.instance = new TerminalStartupManager();
      }
      return TerminalStartupManager.instance;
   }

   /**
    * Run safe startup check - ensures this only runs once per app session
    */
   public async runSafeStartupCheck(): Promise<void> {
      if (this.hasRunStartupCheck || this.initializationPromise) {
         return this.initializationPromise || Promise.resolve();
      }

      this.initializationPromise = this.performStartupCheck();
      return this.initializationPromise;
   }

   private async performStartupCheck(): Promise<void> {
      console.log('🚀 Terminal Startup Manager: Beginning safe startup check...');

      try {
         // Wait for store hydration if needed
         await this.waitForStoreHydration();

         // Get the store instance
         const store = useMultiTerminalStore.getState();

         // Run the safe startup check
         await store.safeStartupCheck();

         // Mark as completed
         this.hasRunStartupCheck = true;

         console.log('✅ Terminal Startup Manager: Safe startup check completed');

         // Set session flag to prevent duplicate runs
         if (typeof window !== 'undefined') {
            sessionStorage.setItem('terminal-startup-manager-completed', 'true');
         }
      } catch (error) {
         console.error('❌ Terminal Startup Manager: Startup check failed:', error);
         throw error;
      } finally {
         this.initializationPromise = null;
      }
   }

   private async waitForStoreHydration(timeout = 5000): Promise<void> {
      const startTime = Date.now();

      return new Promise((resolve, reject) => {
         const checkHydration = () => {
            const store = useMultiTerminalStore.getState();

            if (store.isHydrated) {
               console.log('💧 Store hydration detected');
               resolve();
               return;
            }

            if (Date.now() - startTime > timeout) {
               console.warn('⚠️ Store hydration timeout - proceeding with startup check');
               resolve(); // Don't reject, just proceed
               return;
            }

            setTimeout(checkHydration, 100);
         };

         checkHydration();
      });
   }

   /**
    * Reset startup state (useful for testing or manual reinitialization)
    */
   public reset(): void {
      this.hasRunStartupCheck = false;
      this.initializationPromise = null;

      if (typeof window !== 'undefined') {
         sessionStorage.removeItem('terminal-startup-manager-completed');
      }
   }

   /**
    * Check if startup has been completed
    */
   public isStartupComplete(): boolean {
      return (
         this.hasRunStartupCheck ||
         (typeof window !== 'undefined' &&
            sessionStorage.getItem('terminal-startup-manager-completed') === 'true')
      );
   }
}

// Export singleton instance
export const terminalStartupManager = TerminalStartupManager.getInstance();

/**
 * React hook for terminal startup management
 */
export function useTerminalStartup() {
   const runStartupCheck = async () => {
      try {
         await terminalStartupManager.runSafeStartupCheck();
      } catch (error) {
         console.error('Terminal startup failed:', error);
      }
   };

   const isStartupComplete = () => terminalStartupManager.isStartupComplete();

   const resetStartup = () => terminalStartupManager.reset();

   return {
      runStartupCheck,
      isStartupComplete,
      resetStartup,
   };
}
