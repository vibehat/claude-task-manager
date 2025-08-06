import { useMemo } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';
import type { TaskMasterTask } from '@/libs/client/stores/types';
import type { UseActiveTaskReturn } from '../types/workingOnTypes';

/**
 * Hook to get the current active task from the existing dataStore
 * Integrates with TaskMaster CLI via dataStore.ts and filters by current tag
 *
 * Tag-aware behavior:
 * - Prioritizes tasks from the current tag (taskMasterState.currentTag)
 * - Falls back to global "in-progress" tasks if no current tag is set
 *
 * Handles edge cases:
 * - No active task (none in "in-progress" status in current tag)
 * - Multiple active tasks (more than one "in-progress" task in current tag)
 * - Real-time synchronization with TaskMaster CLI changes
 */
export const useActiveTask = (): UseActiveTaskReturn => {
  const {
    tasksByStatus,
    tasksByCurrentTag,
    currentTag,
    isLoading,
    updateTask,
    forceSyncTaskMaster,
  } = useDataStore();

  // Get tasks with "in-progress" status from current tag only
  const inProgressTasks = useMemo(() => {
    // If we have a current tag, filter in-progress tasks to only those in the current tag
    if (currentTag && tasksByCurrentTag.length > 0) {
      const filteredTasks = tasksByCurrentTag.filter((task) => task.status === 'in-progress');
      console.log(
        `[useActiveTask] Current tag: ${currentTag}, tasks in tag: ${tasksByCurrentTag.length}, in-progress: ${filteredTasks.length}`
      );
      return filteredTasks;
    }

    // Fallback: use global in-progress tasks if no current tag is set
    const globalTasks = tasksByStatus['in-progress'] || [];
    console.log(
      `[useActiveTask] No current tag, using global in-progress tasks: ${globalTasks.length}`
    );
    return globalTasks;
  }, [tasksByStatus, tasksByCurrentTag, currentTag]);

  // Determine the single active task
  const activeTask = useMemo((): TaskMasterTask | null => {
    // If exactly one task is in progress, that's our active task
    if (inProgressTasks.length === 1) {
      return inProgressTasks[0];
    }

    // If multiple tasks are in progress, we need user to resolve this
    // Return null to show "multiple active tasks" state
    return null;
  }, [inProgressTasks]);

  // Check if we have multiple active tasks (edge case)
  const hasMultipleActive = useMemo(() => {
    return inProgressTasks.length > 1;
  }, [inProgressTasks.length]);

  // Generate error message based on current state
  const error = useMemo((): string | null => {
    if (hasMultipleActive) {
      return `Multiple tasks are marked as in-progress (${inProgressTasks.length}). Please complete or pause some tasks to focus on one.`;
    }
    return null;
  }, [hasMultipleActive, inProgressTasks.length]);

  // Switch to a different task (set it to in-progress)
  const switchToTask = async (taskId: string): Promise<void> => {
    try {
      // First, pause all current in-progress tasks
      for (const task of inProgressTasks) {
        updateTask(task.id.toString(), { status: 'pending' });
      }

      // Set the new task to in-progress
      updateTask(taskId, { status: 'in-progress' });

      // Force sync with TaskMaster CLI to ensure changes are persisted
      await forceSyncTaskMaster();
    } catch (err) {
      console.error('[useActiveTask] Failed to switch task:', err);
      throw new Error('Failed to switch task. Please try again.');
    }
  };

  // Complete the current active task
  const completeTask = async (taskId: string): Promise<void> => {
    try {
      // Mark task as done
      updateTask(taskId, { status: 'done' });

      // Force sync with TaskMaster CLI to ensure changes are persisted
      await forceSyncTaskMaster();
    } catch (err) {
      console.error('[useActiveTask] Failed to complete task:', err);
      throw new Error('Failed to complete task. Please try again.');
    }
  };

  return {
    activeTask,
    hasMultipleActive,
    isLoading,
    error,
    switchToTask,
    completeTask,
  };
};
