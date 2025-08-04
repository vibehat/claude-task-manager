'use client';

import { useTaskMasterSync } from '@/hooks/useTaskMasterSync';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface TaskMasterSyncProviderProps {
  children: React.ReactNode;
  showNotifications?: boolean;
}

export function TaskMasterSyncProvider({
  children,
  showNotifications = false,
}: TaskMasterSyncProviderProps) {
  const { syncStatus: _syncStatus, isConnected, lastSync, error } = useTaskMasterSync();

  // Show notification when sync status changes (if enabled)
  useEffect(() => {
    if (!showNotifications) return;

    if (isConnected && !error) {
      console.log('[TaskMasterSyncProvider] Real-time sync enabled');
    } else if (error) {
      console.warn('[TaskMasterSyncProvider] Sync error:', error);
    }
  }, [isConnected, error, showNotifications]);

  // Show notification when data syncs (if enabled)
  useEffect(() => {
    if (!showNotifications || !lastSync) return;

    toast.success('Tasks synchronized', {
      description: `Updated at ${lastSync.toLocaleTimeString()}`,
      duration: 2000,
    });
  }, [lastSync, showNotifications]);

  return (
    <>
      {children}
      {/* Optional: Add a small sync status indicator */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 z-50">
          <div
            className={`w-3 h-3 rounded-full ${
              isConnected ? 'bg-green-500' : error ? 'bg-red-500' : 'bg-yellow-500'
            }`}
            title={
              isConnected
                ? 'TaskMaster sync connected'
                : error
                  ? `Sync error: ${error}`
                  : 'Connecting to sync...'
            }
          />
        </div>
      )}
    </>
  );
}
