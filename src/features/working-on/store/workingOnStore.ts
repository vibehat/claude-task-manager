import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import type {
  WorkingOnState,
  Task,
  AISession,
  AIActivity,
  ContextItem,
} from '../types/workingOnTypes';
import {
  dummyTasks,
  dummyAISessions,
  dummyContextItems,
  dummyActivities,
  getActiveTasks,
  getBlockedTasks,
} from '../data/dummyData';

// Task management slice
const createTaskSlice = (set: any, get: any) => ({
  tasks: dummyTasks,
  activeTasks: getActiveTasks(),
  currentFocusId: '28.2', // Default focus on the active JWT task

  setCurrentFocus: (taskId: string) => {
    set({ currentFocusId: taskId });
  },

  updateTaskProgress: (taskId: string, progress: number) => {
    set((state: WorkingOnState) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, progress, updatedAt: new Date().toISOString() } : task
      ),
    }));
  },

  updateContextQuality: (taskId: string, quality: number) => {
    set((state: WorkingOnState) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, contextQuality: quality } : task
      ),
    }));
  },

  // Computed properties
  getActiveTasks: () => {
    const { tasks } = get();
    return tasks.filter((task: Task) => task.status === 'in-progress' || task.aiSession);
  },

  getBlockedTasks: () => {
    const { tasks } = get();
    return tasks.filter((task: Task) => task.status === 'blocked');
  },

  getCurrentFocusTask: () => {
    const { tasks, currentFocusId } = get();
    return tasks.find((task: Task) => task.id === currentFocusId) || null;
  },

  getTaskById: (id: string) => {
    const { tasks } = get();
    return tasks.find((task: Task) => task.id === id) || null;
  },
});

// AI management slice
const createAISlice = (set: any, get: any) => ({
  aiSessions: dummyAISessions,

  addAIActivity: (sessionId: string, activity: AIActivity) => {
    set((state: WorkingOnState) => ({
      aiSessions: state.aiSessions.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              activities: [...session.activities, activity],
              lastActivity: activity.timestamp,
              duration: calculateDuration(session.startTime, activity.timestamp),
            }
          : session
      ),
    }));

    // Also update the corresponding task's session
    const { tasks } = get();
    const session = get().aiSessions.find((s: AISession) => s.id === sessionId);
    if (session) {
      set({
        tasks: tasks.map((task: Task) =>
          task.id === session.taskId && task.aiSession
            ? {
                ...task,
                aiSession: {
                  ...task.aiSession,
                  activities: [...task.aiSession.activities, activity],
                },
              }
            : task
        ),
      });
    }
  },

  startAISession: (taskId: string, agent: 'claude' | 'gpt' | 'gemini') => {
    const newSessionId = `session-${Date.now()}`;
    const newSession: AISession = {
      id: newSessionId,
      taskId,
      agent,
      status: 'implementing',
      startTime: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      duration: '0s',
      activities: [],
    };

    set((state: WorkingOnState) => ({
      aiSessions: [...state.aiSessions, newSession],
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, aiSession: newSession, status: 'in-progress' as const }
          : task
      ),
    }));
  },

  stopAISession: (sessionId: string) => {
    set((state: WorkingOnState) => ({
      aiSessions: state.aiSessions.map((session) =>
        session.id === sessionId ? { ...session, status: 'idle' as const } : session
      ),
      tasks: state.tasks.map((task) =>
        task.aiSession?.id === sessionId
          ? { ...task, aiSession: { ...task.aiSession, status: 'idle' as const } }
          : task
      ),
    }));
  },
});

// Context management slice
const createContextSlice = (set: any, get: any) => ({
  contextItems: dummyContextItems,

  addContextItem: (item: ContextItem) => {
    set((state: WorkingOnState) => ({
      contextItems: [...state.contextItems, item],
    }));
  },

  updateContextItem: (id: string, updates: Partial<ContextItem>) => {
    set((state: WorkingOnState) => ({
      contextItems: state.contextItems.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    }));
  },

  getContextByTaskId: (taskId: string) => {
    const { contextItems } = get();
    return contextItems.filter((item: ContextItem) => item.relatedTasks.includes(taskId));
  },
});

// UI management slice
const createUISlice = (set: any, get: any) => ({
  layout: 'desktop' as const,
  commandPaletteOpen: false,
  contextViewOpen: false,
  handoffModalOpen: false,
  selectedTaskId: null,

  loading: {
    tasks: false,
    context: false,
    handoff: false,
  },

  toggleCommandPalette: () => {
    set((state: WorkingOnState) => ({
      commandPaletteOpen: !state.commandPaletteOpen,
    }));
  },

  openContextView: (taskId: string) => {
    set({
      contextViewOpen: true,
      selectedTaskId: taskId,
    });
  },

  closeContextView: () => {
    set({
      contextViewOpen: false,
      selectedTaskId: null,
    });
  },

  startAIHandoff: (taskId: string) => {
    set({
      handoffModalOpen: true,
      selectedTaskId: taskId,
    });
  },

  closeHandoffModal: () => {
    set({
      handoffModalOpen: false,
      selectedTaskId: null,
    });
  },

  setLayout: (layout: 'desktop' | 'mobile') => {
    set({ layout });
  },

  setLoading: (key: 'tasks' | 'context' | 'handoff', loading: boolean) => {
    set((state: WorkingOnState) => ({
      loading: {
        ...state.loading,
        [key]: loading,
      },
    }));
  },
});

// Helper function to calculate duration
function calculateDuration(startTime: string, endTime: string): string {
  const start = new Date(startTime).getTime();
  const end = new Date(endTime).getTime();
  const diffMs = end - start;

  const minutes = Math.floor(diffMs / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}

// Main store
export const useWorkingOnStore = create<WorkingOnState>()(
  subscribeWithSelector((set, get) => ({
    ...createTaskSlice(set, get),
    ...createAISlice(set, get),
    ...createContextSlice(set, get),
    ...createUISlice(set, get),
  }))
);

// Selectors for optimized subscriptions
export const selectCurrentFocusTask = (state: WorkingOnState) => {
  const { tasks, currentFocusId } = state;
  return tasks.find((task) => task.id === currentFocusId) || null;
};

export const selectActiveTasks = (state: WorkingOnState) => {
  return state.tasks.filter((task) => task.status === 'in-progress' || task.aiSession);
};

export const selectBlockedTasks = (state: WorkingOnState) => {
  return state.tasks.filter((task) => task.status === 'blocked');
};

export const selectLoading = (state: WorkingOnState) => state.loading;

export const selectUIState = (state: WorkingOnState) => ({
  commandPaletteOpen: state.commandPaletteOpen,
  contextViewOpen: state.contextViewOpen,
  handoffModalOpen: state.handoffModalOpen,
  selectedTaskId: state.selectedTaskId,
  layout: state.layout,
});
