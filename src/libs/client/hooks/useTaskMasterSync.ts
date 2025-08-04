import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDataStore, useAllTasks } from '../stores';
import type { Task } from '../types/dataModels';

// TODO: Implement SyncOptions type when syncService is created
interface SyncOptions {
  enableRealTimeSync?: boolean;
  tagName?: string;
}

export interface UseTaskMasterSyncResult {
  // State
  isEnabled: boolean;
  syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  error: string | null;
  isRealTimeSyncActive: boolean;
  isLoading: boolean;

  // Data
  taskMasterTasks: Task[];
  taskMasterStats: {
    totalTasks: number;
    totalSubtasks: number;
    tasksByStatus: Record<string, number>;
    tasksByPriority: Record<string, number>;
  } | null;

  // Actions
  enableSync: (options?: SyncOptions) => Promise<void>;
  disableSync: () => Promise<void>;
  forceSync: (tagName?: string) => Promise<void>;
  toggleRealTimeSync: (enabled: boolean, options?: SyncOptions) => Promise<void>;
  refreshStats: (tagName?: string) => Promise<void>;
}

export interface UseTaskMasterSyncOptions {
  autoEnable?: boolean;
  enableRealTimeSync?: boolean;
  tagName?: string;
  syncOptions?: SyncOptions;
  onSyncComplete?: (tasks: Task[]) => void;
  onSyncError?: (error: Error) => void;
}

export function useTaskMasterSync(options: UseTaskMasterSyncOptions = {}): UseTaskMasterSyncResult {
  const {
    autoEnable = false,
    enableRealTimeSync = true,
    tagName = 'master',
    syncOptions = {},
    onSyncComplete,
    onSyncError,
  } = options;

  const {
    isTaskMasterEnabled,
    taskMasterSyncStatus,
    taskMasterError,
    isRealTimeSyncActive,
    isLoading,
    enableTaskMasterSync,
    disableTaskMasterSync,
    forceSyncTaskMaster,
    toggleRealTimeSync: storeToggleRealTimeSync,
    getTaskMasterStats,
  } = useDataStore();

  const tasks = useAllTasks();

  // Filter TaskMaster tasks
  const taskMasterTasks = useMemo(() => {
    return tasks.filter((task) => task.taskId !== undefined);
  }, [tasks]);

  // Stats state
  const [stats, setStats] = useState<UseTaskMasterSyncResult['taskMasterStats']>(null);

  // Auto-enable sync on mount if requested
  useEffect(() => {
    if (autoEnable && !isTaskMasterEnabled && taskMasterSyncStatus === 'idle') {
      enableSync({
        ...syncOptions,
        enableRealTimeSync,
        tagName,
      });
    }
  }, [autoEnable, isTaskMasterEnabled, taskMasterSyncStatus]);

  // Handle sync callbacks
  useEffect(() => {
    if (taskMasterSyncStatus === 'synced' && onSyncComplete) {
      onSyncComplete(taskMasterTasks);
    }
  }, [taskMasterSyncStatus, taskMasterTasks, onSyncComplete]);

  useEffect(() => {
    if (taskMasterSyncStatus === 'error' && taskMasterError && onSyncError) {
      onSyncError(new Error(taskMasterError));
    }
  }, [taskMasterSyncStatus, taskMasterError, onSyncError]);

  // Actions
  const enableSync = useCallback(
    async (_opts?: SyncOptions) => {
      try {
        await enableTaskMasterSync();
      } catch (error) {
        console.error('Failed to enable TaskMaster sync:', error);
        onSyncError?.(error as Error);
      }
    },
    [enableTaskMasterSync, syncOptions, onSyncError]
  );

  const disableSync = useCallback(async () => {
    try {
      await disableTaskMasterSync();
      setStats(null);
    } catch (error) {
      console.error('Failed to disable TaskMaster sync:', error);
      onSyncError?.(error as Error);
    }
  }, [disableTaskMasterSync, onSyncError]);

  const forceSync = useCallback(
    async (_tag?: string) => {
      try {
        await forceSyncTaskMaster();
        // Refresh stats after sync
        await refreshStats();
      } catch (error) {
        console.error('Failed to force sync TaskMaster:', error);
        onSyncError?.(error as Error);
        throw error;
      }
    },
    [forceSyncTaskMaster, tagName, onSyncError]
  );

  const toggleRealTimeSync = useCallback(
    async (enabled: boolean, _opts?: SyncOptions) => {
      try {
        await storeToggleRealTimeSync(enabled);
      } catch (error) {
        console.error('Failed to toggle real-time sync:', error);
        onSyncError?.(error as Error);
      }
    },
    [storeToggleRealTimeSync, syncOptions, onSyncError]
  );

  const refreshStats = useCallback(
    async (_tag?: string) => {
      if (!isTaskMasterEnabled) {
        setStats(null);
        return;
      }

      try {
        const newStats = getTaskMasterStats();
        setStats(newStats);
      } catch (error) {
        console.error('Failed to get TaskMaster stats:', error);
        onSyncError?.(error as Error);
      }
    },
    [isTaskMasterEnabled, getTaskMasterStats, tagName, onSyncError]
  );

  // Auto-refresh stats when sync completes
  useEffect(() => {
    if (taskMasterSyncStatus === 'synced') {
      refreshStats();
    }
  }, [taskMasterSyncStatus, refreshStats]);

  return {
    // State
    isEnabled: isTaskMasterEnabled,
    syncStatus: taskMasterSyncStatus,
    error: taskMasterError,
    isRealTimeSyncActive,
    isLoading,

    // Data
    taskMasterTasks,
    taskMasterStats: stats,

    // Actions
    enableSync,
    disableSync,
    forceSync,
    toggleRealTimeSync,
    refreshStats,
  };
}

// Additional hook for sync status indicator
export function useTaskMasterSyncStatus() {
  const { isTaskMasterEnabled, taskMasterSyncStatus, taskMasterError, isRealTimeSyncActive } =
    useDataStore();

  const syncStatusText = useMemo(() => {
    if (!isTaskMasterEnabled) return 'Disabled';

    switch (taskMasterSyncStatus) {
      case 'idle':
        return 'Ready';
      case 'syncing':
        return 'Syncing...';
      case 'synced':
        return isRealTimeSyncActive ? 'Live' : 'Synced';
      case 'error':
        return 'Error';
      default:
        return 'Unknown';
    }
  }, [isTaskMasterEnabled, taskMasterSyncStatus, isRealTimeSyncActive]);

  const syncStatusColor = useMemo(() => {
    if (!isTaskMasterEnabled) return 'gray';

    switch (taskMasterSyncStatus) {
      case 'idle':
        return 'blue';
      case 'syncing':
        return 'yellow';
      case 'synced':
        return isRealTimeSyncActive ? 'green' : 'blue';
      case 'error':
        return 'red';
      default:
        return 'gray';
    }
  }, [isTaskMasterEnabled, taskMasterSyncStatus, isRealTimeSyncActive]);

  return {
    isEnabled: isTaskMasterEnabled,
    status: taskMasterSyncStatus,
    statusText: syncStatusText,
    statusColor: syncStatusColor,
    error: taskMasterError,
    isRealTimeSyncActive,
  };
}
