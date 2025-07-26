'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useWebSocket } from './use-websocket';

// Sync operation status
export enum SyncOperationStatus {
   PENDING = 'pending',
   EXECUTING = 'executing',
   COMPLETED = 'completed',
   FAILED = 'failed',
   ROLLED_BACK = 'rolled_back',
}

// Sync state
export enum SyncState {
   IDLE = 'idle',
   SYNCING = 'syncing',
   ERROR = 'error',
}

// Sync operation interface
export interface SyncOperation {
   id: string;
   type: 'task_update' | 'task_create' | 'task_delete' | 'status_change' | 'batch_update';
   timestamp: number;
   source: 'ui' | 'cli' | 'file' | 'websocket';
   data: any;
   rollbackData?: any;
   status: SyncOperationStatus;
   retryCount: number;
   maxRetries: number;
}

// Sync conflict interface
export interface SyncConflict {
   id: string;
   operationA: SyncOperation;
   operationB: SyncOperation;
   conflictType: 'concurrent_update' | 'data_mismatch' | 'version_conflict';
   resolution: 'ui_wins' | 'cli_wins' | 'last_write_wins' | 'merge' | 'user_resolve';
   resolved: boolean;
   resolvedAt?: number;
   resolvedBy?: string;
}

// Sync status interface
export interface SyncStatus {
   state: SyncState;
   operations: SyncOperation[];
   conflicts: SyncConflict[];
   queueSize: number;
   optimisticUpdates: Record<string, any>;
}

// Hook configuration
export interface UseSyncConfig {
   autoSync?: boolean;
   syncInterval?: number;
   maxRetries?: number;
   enableOptimisticUpdates?: boolean;
   conflictResolution?: 'ui_wins' | 'cli_wins' | 'last_write_wins';
}

// Hook return type
export interface UseSyncReturn {
   // Status
   syncStatus: SyncStatus | null;
   isLoading: boolean;
   error: string | null;

   // Operations
   updateTaskStatus: (taskId: string, status: string) => Promise<string>;
   updateTask: (taskId: string, changes: any) => Promise<string>;
   createBatchUpdate: (operations: any[], options?: any) => Promise<string>;

   // Conflict resolution
   resolveConflict: (conflictId: string, resolution: string) => Promise<void>;
   retryOperation: (operationId: string) => Promise<void>;
   cancelOperation: (operationId: string) => Promise<void>;

   // Utils
   refreshStatus: () => Promise<void>;
   clearCompleted: () => Promise<void>;
   resetSync: () => Promise<void>;

   // Real-time updates
   lastSyncUpdate: any;
   optimisticUpdates: Record<string, any>;

   // Statistics
   syncHealth: {
      healthy: boolean;
      successRate: number;
      activeOperations: number;
      queuedOperations: number;
      unresolvedConflicts: number;
   } | null;
}

// Main sync hook
export function useSync(config: UseSyncConfig = {}): UseSyncReturn {
   const {
      autoSync = true,
      syncInterval = 5000,
      maxRetries = 3,
      enableOptimisticUpdates = true,
      conflictResolution = 'last_write_wins',
   } = config;

   const [syncStatus, setSyncStatus] = useState<SyncStatus | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [lastSyncUpdate, setLastSyncUpdate] = useState<any>(null);
   const [optimisticUpdates, setOptimisticUpdates] = useState<Record<string, any>>({});
   const [syncHealth, setSyncHealth] = useState<UseSyncReturn['syncHealth']>(null);

   const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

   // WebSocket integration for real-time updates
   const { isConnected, emit, lastMessage } = useWebSocket(
      {},
      {
         onConnect: () => {
            // Join sync room for real-time updates
            emit('join-room', 'sync');
         },
      }
   );

   // Handle WebSocket sync updates
   useEffect(() => {
      if (lastMessage && lastMessage.type?.startsWith('sync-')) {
         setLastSyncUpdate(lastMessage.data);

         // Update local state based on sync events
         if (lastMessage.type === 'sync-operation-completed') {
            refreshStatus();
         } else if (lastMessage.type === 'optimistic-update') {
            if (enableOptimisticUpdates) {
               setOptimisticUpdates((prev) => ({
                  ...prev,
                  [lastMessage.data.operationId]: lastMessage.data.data,
               }));
            }
         } else if (lastMessage.type === 'operation-rolled-back') {
            setOptimisticUpdates((prev) => {
               const newUpdates = { ...prev };
               delete newUpdates[lastMessage.data.operationId];
               return newUpdates;
            });
         }
      }
   }, [lastMessage, enableOptimisticUpdates]);

   // Fetch sync status
   const fetchSyncStatus = useCallback(async (): Promise<SyncStatus> => {
      const response = await fetch('/api/sync?action=status');
      if (!response.ok) {
         throw new Error(`Failed to fetch sync status: ${response.statusText}`);
      }
      const data = await response.json();
      return data.status;
   }, []);

   // Fetch sync health
   const fetchSyncHealth = useCallback(async () => {
      try {
         const response = await fetch('/api/sync?action=health');
         if (response.ok) {
            const data = await response.json();
            setSyncHealth(data.health);
         }
      } catch (error) {
         console.error('Failed to fetch sync health:', error);
      }
   }, []);

   // Refresh status
   const refreshStatus = useCallback(async () => {
      try {
         setIsLoading(true);
         setError(null);

         const [status] = await Promise.all([fetchSyncStatus(), fetchSyncHealth()]);

         setSyncStatus(status);
         setOptimisticUpdates(status.optimisticUpdates || {});
      } catch (err) {
         setError(err instanceof Error ? err.message : 'Failed to refresh sync status');
      } finally {
         setIsLoading(false);
      }
   }, [fetchSyncStatus, fetchSyncHealth]);

   // Update task status
   const updateTaskStatus = useCallback(
      async (taskId: string, status: string): Promise<string> => {
         try {
            const response = await fetch('/api/sync', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                  action: 'update-task-status',
                  data: { taskId, status, source: 'ui' },
               }),
            });

            if (!response.ok) {
               throw new Error(`Failed to update task status: ${response.statusText}`);
            }

            const data = await response.json();

            // Apply optimistic update
            if (enableOptimisticUpdates) {
               setOptimisticUpdates((prev) => ({
                  ...prev,
                  [data.operationId]: { taskId, status },
               }));
            }

            return data.operationId;
         } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to update task status');
            throw error;
         }
      },
      [enableOptimisticUpdates]
   );

   // Update task
   const updateTask = useCallback(
      async (taskId: string, changes: any): Promise<string> => {
         try {
            const response = await fetch('/api/sync', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                  action: 'update-task',
                  data: { taskId, changes, source: 'ui' },
               }),
            });

            if (!response.ok) {
               throw new Error(`Failed to update task: ${response.statusText}`);
            }

            const data = await response.json();

            // Apply optimistic update
            if (enableOptimisticUpdates) {
               setOptimisticUpdates((prev) => ({
                  ...prev,
                  [data.operationId]: { taskId, changes },
               }));
            }

            return data.operationId;
         } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to update task');
            throw error;
         }
      },
      [enableOptimisticUpdates]
   );

   // Create batch update
   const createBatchUpdate = useCallback(
      async (operations: any[], options: any = {}): Promise<string> => {
         try {
            const response = await fetch('/api/sync', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                  action: 'batch-update',
                  data: { operations, options },
               }),
            });

            if (!response.ok) {
               throw new Error(`Failed to create batch update: ${response.statusText}`);
            }

            const data = await response.json();
            return data.batchId;
         } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to create batch update');
            throw error;
         }
      },
      []
   );

   // Resolve conflict
   const resolveConflict = useCallback(
      async (conflictId: string, resolution: string): Promise<void> => {
         try {
            const response = await fetch('/api/sync', {
               method: 'PUT',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                  action: 'resolve-conflict',
                  data: { conflictId, resolution },
               }),
            });

            if (!response.ok) {
               throw new Error(`Failed to resolve conflict: ${response.statusText}`);
            }

            // Refresh status to get updated conflicts
            await refreshStatus();
         } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to resolve conflict');
            throw error;
         }
      },
      [refreshStatus]
   );

   // Retry operation
   const retryOperation = useCallback(
      async (operationId: string): Promise<void> => {
         try {
            const response = await fetch('/api/sync', {
               method: 'PUT',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                  action: 'retry-operation',
                  data: { operationId },
               }),
            });

            if (!response.ok) {
               throw new Error(`Failed to retry operation: ${response.statusText}`);
            }

            // Refresh status to get updated operation state
            await refreshStatus();
         } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to retry operation');
            throw error;
         }
      },
      [refreshStatus]
   );

   // Cancel operation
   const cancelOperation = useCallback(
      async (operationId: string): Promise<void> => {
         try {
            const response = await fetch(
               `/api/sync?action=cancel-operation&operationId=${operationId}`,
               {
                  method: 'DELETE',
               }
            );

            if (!response.ok) {
               throw new Error(`Failed to cancel operation: ${response.statusText}`);
            }

            // Remove optimistic update
            setOptimisticUpdates((prev) => {
               const newUpdates = { ...prev };
               delete newUpdates[operationId];
               return newUpdates;
            });

            // Refresh status
            await refreshStatus();
         } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to cancel operation');
            throw error;
         }
      },
      [refreshStatus]
   );

   // Clear completed operations
   const clearCompleted = useCallback(async (): Promise<void> => {
      try {
         const response = await fetch('/api/sync?action=clear-completed', {
            method: 'DELETE',
         });

         if (!response.ok) {
            throw new Error(`Failed to clear completed operations: ${response.statusText}`);
         }

         await refreshStatus();
      } catch (error) {
         setError(error instanceof Error ? error.message : 'Failed to clear completed operations');
         throw error;
      }
   }, [refreshStatus]);

   // Reset sync state
   const resetSync = useCallback(async (): Promise<void> => {
      try {
         const response = await fetch('/api/sync?action=reset-sync', {
            method: 'DELETE',
         });

         if (!response.ok) {
            throw new Error(`Failed to reset sync: ${response.statusText}`);
         }

         setOptimisticUpdates({});
         await refreshStatus();
      } catch (error) {
         setError(error instanceof Error ? error.message : 'Failed to reset sync');
         throw error;
      }
   }, [refreshStatus]);

   // Auto-sync polling
   useEffect(() => {
      if (autoSync && !isConnected) {
         pollIntervalRef.current = setInterval(refreshStatus, syncInterval);

         return () => {
            if (pollIntervalRef.current) {
               clearInterval(pollIntervalRef.current);
               pollIntervalRef.current = null;
            }
         };
      }
   }, [autoSync, isConnected, syncInterval, refreshStatus]);

   // Initial load
   useEffect(() => {
      refreshStatus();
   }, [refreshStatus]);

   // Auto-resolve conflicts
   useEffect(() => {
      if (syncStatus?.conflicts) {
         const unresolvedConflicts = syncStatus.conflicts.filter((c) => !c.resolved);

         for (const conflict of unresolvedConflicts) {
            // Auto-resolve based on configured strategy
            if (conflictResolution !== 'user_resolve') {
               resolveConflict(conflict.id, conflictResolution).catch((error) => {
                  console.error('Failed to auto-resolve conflict:', error);
               });
            }
         }
      }
   }, [syncStatus?.conflicts, conflictResolution, resolveConflict]);

   return {
      // Status
      syncStatus,
      isLoading,
      error,

      // Operations
      updateTaskStatus,
      updateTask,
      createBatchUpdate,

      // Conflict resolution
      resolveConflict,
      retryOperation,
      cancelOperation,

      // Utils
      refreshStatus,
      clearCompleted,
      resetSync,

      // Real-time updates
      lastSyncUpdate,
      optimisticUpdates,

      // Statistics
      syncHealth,
   };
}

// Specialized hooks for common patterns

// Hook for task status updates with optimistic UI
export function useTaskStatusSync() {
   const sync = useSync({
      enableOptimisticUpdates: true,
      conflictResolution: 'ui_wins',
   });

   const updateStatus = useCallback(
      async (taskId: string, status: string) => {
         try {
            await sync.updateTaskStatus(taskId, status);
            return true;
         } catch (error) {
            console.error('Failed to update task status:', error);
            return false;
         }
      },
      [sync]
   );

   return {
      ...sync,
      updateStatus,
      hasOptimisticUpdate: (taskId: string) => {
         return Object.values(sync.optimisticUpdates).some(
            (update: any) => update.taskId === taskId
         );
      },
   };
}

// Hook for batch operations
export function useBatchSync() {
   const sync = useSync({
      conflictResolution: 'last_write_wins',
   });

   const executeBatch = useCallback(
      async (
         updates: Array<{ taskId: string; status?: string; changes?: any }>,
         options: { atomicity?: boolean; maxConcurrency?: number } = {}
      ) => {
         const operations = updates.map((update) => ({
            type: update.status ? 'status_change' : 'task_update',
            data: update.status
               ? { taskId: update.taskId, status: update.status }
               : { taskId: update.taskId, changes: update.changes },
            source: 'ui',
            maxRetries: 3,
         }));

         return sync.createBatchUpdate(operations, {
            atomicity: options.atomicity ?? true,
            maxConcurrency: options.maxConcurrency ?? 3,
         });
      },
      [sync]
   );

   return {
      ...sync,
      executeBatch,
      batchOperations: sync.syncStatus?.operations.filter((op) => op.type === 'batch_update') || [],
   };
}

// Hook for monitoring sync health
export function useSyncMonitor() {
   const sync = useSync({ autoSync: true, syncInterval: 2000 });

   const healthStatus = sync.syncHealth
      ? {
           status: sync.syncHealth.healthy ? 'healthy' : 'unhealthy',
           details: sync.syncHealth,
           issues: [
              ...(sync.syncHealth.successRate < 0.9 ? ['Low success rate'] : []),
              ...(sync.syncHealth.unresolvedConflicts > 0 ? ['Unresolved conflicts'] : []),
              ...(sync.syncHealth.queuedOperations > 10 ? ['High operation queue'] : []),
           ],
        }
      : null;

   return {
      ...sync,
      healthStatus,
      isHealthy: sync.syncHealth?.healthy ?? false,
      metrics: sync.syncHealth,
   };
}
