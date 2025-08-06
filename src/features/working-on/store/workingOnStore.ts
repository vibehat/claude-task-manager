import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type {
  WorkingOnStore,
  SessionState,
  WorkingOnPreferences,
  ProgressData,
  QuickNote,
} from '../types/workingOnTypes';
import type { TaskMasterTask } from '@/libs/client/stores/types';

/**
 * Calculate task progress based on subtask completion
 */
const calculateTaskProgress = (task: TaskMasterTask): ProgressData => {
  if (!task.subtasks?.length) {
    // If no subtasks, progress is based on task status
    const percentage = task.status === 'done' ? 100 : task.status === 'in-progress' ? 50 : 0;
    return {
      completedSubtasks: 0,
      totalSubtasks: 0,
      percentage,
      status:
        task.status === 'done'
          ? 'complete'
          : task.status === 'in-progress'
            ? 'in-progress'
            : 'not-started',
    };
  }

  const completedSubtasks = task.subtasks.filter((subtask) => subtask.status === 'done').length;
  const totalSubtasks = task.subtasks.length;
  const percentage = Math.round((completedSubtasks / totalSubtasks) * 100);

  let status: ProgressData['status'];
  if (percentage === 0) {
    status = 'not-started';
  } else if (percentage >= 80) {
    status = 'nearly-complete';
  } else if (percentage === 100) {
    status = 'complete';
  } else {
    status = 'in-progress';
  }

  return {
    completedSubtasks,
    totalSubtasks,
    percentage,
    status,
  };
};

/**
 * Default preferences for new users
 */
const defaultPreferences: WorkingOnPreferences = {
  timerEnabled: true,
  pomodoroLength: 25, // 25 minutes
  breakLength: 5, // 5 minutes
  autoStartTimer: false,
  soundEnabled: true,
};

/**
 * Zustand store for Working On feature state management
 * Follows existing patterns in the codebase and integrates with dataStore
 */
export const useWorkingOnStore = create<WorkingOnStore>()(
  persist(
    (set, get) => ({
      // Initial state
      activeTask: null,
      isLoading: false,
      focusMode: false,
      sessionStartTime: null,
      timeSpent: 0,
      quickNotes: '',
      lastActiveTask: null,
      preferences: defaultPreferences,

      // Actions
      setActiveTask: (task: TaskMasterTask | null) => {
        const currentState = get();
        set({
          activeTask: task,
          lastActiveTask: currentState.activeTask || task || currentState.lastActiveTask,
        });
      },

      setIsLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      toggleFocusMode: () => {
        const currentState = get();
        set({ focusMode: !currentState.focusMode });
      },

      startSession: () => {
        const now = new Date();
        set({
          sessionStartTime: now,
          timeSpent: 0,
        });
      },

      endSession: () => {
        const currentState = get();
        if (currentState.sessionStartTime) {
          const endTime = new Date();
          const duration = Math.floor(
            (endTime.getTime() - currentState.sessionStartTime.getTime()) / 1000
          );
          set({
            sessionStartTime: null,
            timeSpent: currentState.timeSpent + duration,
          });
        }
      },

      pauseSession: () => {
        const currentState = get();
        if (currentState.sessionStartTime) {
          const pauseTime = new Date();
          const duration = Math.floor(
            (pauseTime.getTime() - currentState.sessionStartTime.getTime()) / 1000
          );
          set({
            sessionStartTime: null,
            timeSpent: currentState.timeSpent + duration,
          });
        }
      },

      resumeSession: () => {
        const now = new Date();
        set({ sessionStartTime: now });
      },

      updateQuickNotes: (notes: string) => {
        set({ quickNotes: notes });
      },

      addQuickNote: (content: string) => {
        // For now, just update the quick notes field
        // In Phase 2, we'll implement full note history
        const currentState = get();
        const timestamp = new Date().toLocaleTimeString();
        const newNote = `[${timestamp}] ${content}`;
        const updatedNotes = currentState.quickNotes
          ? `${currentState.quickNotes}\n${newNote}`
          : newNote;

        set({ quickNotes: updatedNotes });
      },

      updatePreferences: (newPreferences: Partial<WorkingOnPreferences>) => {
        const currentState = get();
        set({
          preferences: {
            ...currentState.preferences,
            ...newPreferences,
          },
        });
      },

      // Computed getters
      getSessionDuration: (): number => {
        const currentState = get();
        if (!currentState.sessionStartTime) {
          return currentState.timeSpent;
        }

        const now = new Date();
        const currentSessionTime = Math.floor(
          (now.getTime() - currentState.sessionStartTime.getTime()) / 1000
        );
        return currentState.timeSpent + currentSessionTime;
      },

      isSessionActive: (): boolean => {
        const currentState = get();
        return currentState.sessionStartTime !== null;
      },

      getProgressData: (task?: TaskMasterTask): ProgressData | null => {
        const currentState = get();
        const targetTask = task || currentState.activeTask;
        if (!targetTask) return null;

        return calculateTaskProgress(targetTask);
      },

      // Integration methods
      syncWithDataStore: () => {
        // This will be called when dataStore updates
        // For now, just a placeholder - integration happens in useActiveTask hook
        console.log('[WorkingOnStore] Syncing with dataStore...');
      },

      reset: () => {
        set({
          activeTask: null,
          isLoading: false,
          focusMode: false,
          sessionStartTime: null,
          timeSpent: 0,
          quickNotes: '',
          lastActiveTask: null,
          preferences: defaultPreferences,
        });
      },
    }),
    {
      name: 'working-on-store',
      storage: createJSONStorage(() => localStorage),

      // Only persist user preferences and session state, not active task
      // (active task comes from dataStore)
      partialize: (state) => ({
        focusMode: state.focusMode,
        timeSpent: state.timeSpent,
        quickNotes: state.quickNotes,
        preferences: state.preferences,
      }),
    }
  )
);
