import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {
  WorkingOnTask,
  WorkflowAction,
  TaskQueueItem,
  ProjectContext,
  QuickAction,
  WorkingOnViewState,
} from '../types';

interface WorkingOnStore {
  // Data state
  currentTask: WorkingOnTask | null;
  taskQueue: TaskQueueItem[];
  workflowActions: WorkflowAction[];
  projectContext: ProjectContext | null;
  quickActions: QuickAction[];

  // UI state
  viewState: WorkingOnViewState;

  // Loading states
  loading: {
    currentTask: boolean;
    taskQueue: boolean;
    workflowActions: boolean;
    refreshing: boolean;
  };

  // Error state
  error: string | null;

  // Actions
  setCurrentTask: (task: WorkingOnTask | null) => void;
  setTaskQueue: (queue: TaskQueueItem[]) => void;
  setWorkflowActions: (actions: WorkflowAction[]) => void;
  setProjectContext: (context: ProjectContext) => void;
  setQuickActions: (actions: QuickAction[]) => void;

  // Task actions
  selectTask: (taskId: number) => void;
  updateTask: (taskId: number, updates: Partial<WorkingOnTask>) => void;
  addTaskNote: (taskId: number, note: string) => void;
  updateTaskProgress: (taskId: number, progress: number) => void;

  // Workflow actions
  toggleWorkflowAction: (actionId: string) => void;
  addWorkflowAction: (action: Omit<WorkflowAction, 'id'>) => void;
  removeWorkflowAction: (actionId: string) => void;
  refreshWorkflowActions: () => Promise<void>;

  // View state actions
  setFocusMode: (enabled: boolean) => void;
  toggleSection: (sectionId: string) => void;
  setWorkflowPanelExpanded: (expanded: boolean) => void;

  // Loading actions
  setLoading: (key: keyof WorkingOnStore['loading'], loading: boolean) => void;
  setError: (error: string | null) => void;

  // Utility actions
  refresh: () => Promise<void>;
  reset: () => void;
}

const initialViewState: WorkingOnViewState = {
  focusMode: false,
  collapsedSections: [],
  selectedTaskId: null,
  workflowPanelExpanded: true,
  lastRefresh: new Date().toISOString(),
};

const initialLoadingState = {
  currentTask: false,
  taskQueue: false,
  workflowActions: false,
  refreshing: false,
};

export const useWorkingOnStore = create<WorkingOnStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      currentTask: null,
      taskQueue: [],
      workflowActions: [],
      projectContext: null,
      quickActions: [],
      viewState: initialViewState,
      loading: initialLoadingState,
      error: null,

      // Basic setters
      setCurrentTask: (task) => set({ currentTask: task }),

      setTaskQueue: (queue) => set({ taskQueue: queue }),

      setWorkflowActions: (actions) => set({ workflowActions: actions }),

      setProjectContext: (context) => set({ projectContext: context }),

      setQuickActions: (actions) => set({ quickActions: actions }),

      // Task actions
      selectTask: (taskId) => {
        const state = get();

        // Update selected task ID
        set((prevState) => ({
          viewState: {
            ...prevState.viewState,
            selectedTaskId: taskId,
          },
        }));

        // Find the task in the queue
        const queueTask = state.taskQueue.find((t) => t.id === taskId);
        if (queueTask) {
          // Convert TaskQueueItem to WorkingOnTask for focus switching
          const focusTask: WorkingOnTask = {
            // Basic task properties from TaskQueueItem
            id: queueTask.id,
            title: queueTask.title,
            // Map queue status to TaskMaster status
            status:
              queueTask.status === 'working'
                ? 'in-progress'
                : queueTask.status === 'ready'
                  ? 'pending'
                  : queueTask.status === 'queued'
                    ? 'pending'
                    : queueTask.status === 'blocked'
                      ? 'blocked'
                      : 'pending',
            priority: queueTask.priority,
            description: `Task ${queueTask.id}: ${queueTask.title}`, // Default description
            dependencies: [], // TaskMaster Task property

            // Working-on specific properties
            progress: queueTask.progress || 0,
            timeLeft: undefined,
            relatedFiles: [],
            notes: [],
          };

          // Set as current task (switch focus)
          set({ currentTask: focusTask });

          console.log('Focus switched to task:', taskId, focusTask.title);
        }
      },

      updateTask: (taskId, updates) => {
        set((state) => ({
          currentTask:
            state.currentTask?.id === taskId
              ? { ...state.currentTask, ...updates }
              : state.currentTask,
        }));
      },

      addTaskNote: (taskId, note) => {
        set((state) => {
          if (state.currentTask?.id !== taskId) return state;

          const newNote = {
            id: `note-${Date.now()}`,
            content: note,
            timestamp: new Date().toISOString(),
            author: 'Current User',
          };

          return {
            currentTask: {
              ...state.currentTask,
              notes: [...state.currentTask.notes, newNote],
            },
          };
        });
      },

      updateTaskProgress: (taskId, progress) => {
        set((state) => ({
          currentTask:
            state.currentTask?.id === taskId
              ? { ...state.currentTask, progress }
              : state.currentTask,
          taskQueue: state.taskQueue.map((task) =>
            task.id === taskId ? { ...task, progress } : task
          ),
        }));
      },

      // Workflow actions
      toggleWorkflowAction: (actionId) => {
        set((state) => ({
          workflowActions: state.workflowActions.map((action) =>
            action.id === actionId ? { ...action, completed: !action.completed } : action
          ),
        }));
      },

      addWorkflowAction: (actionData) => {
        const newAction: WorkflowAction = {
          ...actionData,
          id: `action-${Date.now()}`,
        };

        set((state) => ({
          workflowActions: [...state.workflowActions, newAction],
        }));
      },

      removeWorkflowAction: (actionId) => {
        set((state) => ({
          workflowActions: state.workflowActions.filter((action) => action.id !== actionId),
        }));
      },

      refreshWorkflowActions: async () => {
        get().setLoading('workflowActions', true);

        try {
          // In a real implementation, this would call an API
          // For now, we simulate a refresh delay
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Refresh would update workflow actions based on current task state
          console.log('Refreshing workflow actions...');
        } catch (error) {
          console.error('Failed to refresh workflow actions:', error);
          get().setError('Failed to refresh workflow actions');
        } finally {
          get().setLoading('workflowActions', false);
        }
      },

      // View state actions
      setFocusMode: (enabled) => {
        set((state) => ({
          viewState: {
            ...state.viewState,
            focusMode: enabled,
          },
        }));
      },

      toggleSection: (sectionId) => {
        set((state) => {
          const collapsed = state.viewState.collapsedSections;
          const newCollapsed = collapsed.includes(sectionId)
            ? collapsed.filter((id) => id !== sectionId)
            : [...collapsed, sectionId];

          return {
            viewState: {
              ...state.viewState,
              collapsedSections: newCollapsed,
            },
          };
        });
      },

      setWorkflowPanelExpanded: (expanded) => {
        set((state) => ({
          viewState: {
            ...state.viewState,
            workflowPanelExpanded: expanded,
          },
        }));
      },

      // Loading actions
      setLoading: (key, loading) => {
        set((state) => ({
          loading: {
            ...state.loading,
            [key]: loading,
          },
        }));
      },

      setError: (error) => set({ error }),

      // Utility actions
      refresh: async () => {
        const store = get();
        store.setLoading('refreshing', true);
        store.setError(null);

        try {
          // In a real implementation, this would refresh all data from APIs
          await Promise.all([
            store.refreshWorkflowActions(),
            // refresh task queue,
            // refresh current task,
            // refresh project context
          ]);

          set((state) => ({
            viewState: {
              ...state.viewState,
              lastRefresh: new Date().toISOString(),
            },
          }));
        } catch (error) {
          console.error('Failed to refresh data:', error);
          store.setError('Failed to refresh data');
        } finally {
          store.setLoading('refreshing', false);
        }
      },

      reset: () => {
        set({
          currentTask: null,
          taskQueue: [],
          workflowActions: [],
          projectContext: null,
          quickActions: [],
          viewState: initialViewState,
          loading: initialLoadingState,
          error: null,
        });
      },
    }),
    {
      name: 'working-on-store',
      partialize: (state) => ({
        // Only persist view state, not data
        viewState: state.viewState,
      }),
    }
  )
);

// Selector hooks for performance optimization
export const useCurrentTask = () => useWorkingOnStore((state) => state.currentTask);
export const useTaskQueue = () => useWorkingOnStore((state) => state.taskQueue);
export const useWorkflowActions = () => useWorkingOnStore((state) => state.workflowActions);
export const useProjectContext = () => useWorkingOnStore((state) => state.projectContext);
export const useViewState = () => useWorkingOnStore((state) => state.viewState);
export const useWorkingOnLoading = () => useWorkingOnStore((state) => state.loading);
export const useWorkingOnError = () => useWorkingOnStore((state) => state.error);
