import { useCallback, useMemo } from 'react';
import { useDataStore } from '../stores';
import type { TaskMasterTask } from '../stores/types';

export interface UseTaskMasterSyncResult {
  // State
  isLoading: boolean;
  isInitialized: boolean;

  // Data
  tasks: TaskMasterTask[];
  taskStats: {
    totalTasks: number;
    totalSubtasks: number;
    tasksByStatus: Record<string, number>;
    tasksByPriority: Record<string, number>;
  };

  // Actions
  initialize: () => Promise<void>;
  forceSync: () => Promise<void>;
  reset: () => void;
}

export function useTaskMasterSync(): UseTaskMasterSyncResult {
  const allTasks = useDataStore((state) => state.allTasks);
  const isLoading = useDataStore((state) => state.isLoading);
  const isInitialized = useDataStore((state) => state.isInitialized);
  const initialize = useDataStore((state) => state.initialize);
  const forceSyncTaskMaster = useDataStore((state) => state.forceSyncTaskMaster);
  const reset = useDataStore((state) => state.reset);

  // Calculate stats from current tasks
  const taskStats = useMemo(() => {
    const totalTasks = allTasks.length;
    const totalSubtasks = allTasks.reduce((count, task) => count + (task.subtasks?.length || 0), 0);

    const tasksByStatus: Record<string, number> = {};
    const tasksByPriority: Record<string, number> = {};

    allTasks.forEach((task) => {
      tasksByStatus[task.status] = (tasksByStatus[task.status] || 0) + 1;
      tasksByPriority[task.priority] = (tasksByPriority[task.priority] || 0) + 1;
    });

    return {
      totalTasks,
      totalSubtasks,
      tasksByStatus,
      tasksByPriority,
    };
  }, [allTasks]);

  const forceSync = useCallback(async () => {
    await forceSyncTaskMaster();
  }, [forceSyncTaskMaster]);

  return {
    // State
    isLoading,
    isInitialized,

    // Data
    tasks: allTasks,
    taskStats,

    // Actions
    initialize,
    forceSync,
    reset,
  };
}

// Additional hook for sync status indicator
export function useTaskMasterSyncStatus() {
  const isLoading = useDataStore((state) => state.isLoading);
  const isInitialized = useDataStore((state) => state.isInitialized);

  const syncStatusText = useMemo(() => {
    if (!isInitialized && isLoading) return 'Initializing...';
    if (!isInitialized) return 'Not initialized';
    if (isLoading) return 'Syncing...';
    return 'Ready';
  }, [isInitialized, isLoading]);

  const syncStatusColor = useMemo(() => {
    if (!isInitialized && isLoading) return 'yellow';
    if (!isInitialized) return 'gray';
    if (isLoading) return 'yellow';
    return 'green';
  }, [isInitialized, isLoading]);

  return {
    isEnabled: isInitialized,
    status: isLoading ? 'syncing' : 'ready',
    statusText: syncStatusText,
    statusColor: syncStatusColor,
    error: null,
    isActive: isInitialized,
  };
}
