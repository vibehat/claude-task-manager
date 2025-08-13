import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {
  WorkflowAction,
  ActionExecutionResult,
  ActionExecutionContext,
  WorkflowActionStatus,
} from '../types/actions';
import { actionExecutionEngine } from '../services/ActionExecutionEngine';

interface WorkflowActionState {
  // Action data
  actions: WorkflowAction[];
  executionResults: Map<string, ActionExecutionResult>;

  // Execution state
  runningActions: Set<string>;
  actionQueue: string[];

  // UI state
  selectedActionId: string | null;
  showCreateDialog: boolean;
  showExecutionLogs: boolean;

  // Loading states
  loading: {
    actions: boolean;
    executing: boolean;
    creating: boolean;
  };

  // Error state
  error: string | null;
}

interface WorkflowActionActions {
  // Action management
  setActions: (actions: WorkflowAction[]) => void;
  addAction: (action: WorkflowAction) => void;
  updateAction: (actionId: string, updates: Partial<WorkflowAction>) => void;
  removeAction: (actionId: string) => void;

  // Action execution
  executeAction: (
    actionId: string,
    context?: Partial<ActionExecutionContext>
  ) => Promise<ActionExecutionResult>;
  executeMultipleActions: (
    actionIds: string[],
    sequential?: boolean
  ) => Promise<ActionExecutionResult[]>;
  cancelAction: (actionId: string) => void;
  cancelAllActions: () => void;

  // Queue management
  addToQueue: (actionId: string) => void;
  removeFromQueue: (actionId: string) => void;
  executeQueue: (sequential?: boolean) => Promise<ActionExecutionResult[]>;
  clearQueue: () => void;

  // UI actions
  selectAction: (actionId: string | null) => void;
  setShowCreateDialog: (show: boolean) => void;
  setShowExecutionLogs: (show: boolean) => void;

  // Utility actions
  getAction: (actionId: string) => WorkflowAction | undefined;
  getExecutionResult: (actionId: string) => ActionExecutionResult | undefined;
  getActionsByStatus: (status: WorkflowActionStatus) => WorkflowAction[];
  getActionsByType: (type: string) => WorkflowAction[];

  // Loading and error
  setLoading: (key: keyof WorkflowActionState['loading'], loading: boolean) => void;
  setError: (error: string | null) => void;

  // Reset
  reset: () => void;
}

type WorkflowActionStore = WorkflowActionState & WorkflowActionActions;

const initialState: WorkflowActionState = {
  actions: [],
  executionResults: new Map(),
  runningActions: new Set(),
  actionQueue: [],
  selectedActionId: null,
  showCreateDialog: false,
  showExecutionLogs: false,
  loading: {
    actions: false,
    executing: false,
    creating: false,
  },
  error: null,
};

export const useWorkflowActionStore = create<WorkflowActionStore>()(
  devtools(
    (set, get) => ({
      ...initialState,

      // Action management
      setActions: (actions) => set({ actions }),

      addAction: (action) => {
        set((state) => ({
          actions: [...state.actions, action],
        }));
      },

      updateAction: (actionId, updates) => {
        set((state) => ({
          actions: state.actions.map((action) =>
            action.id === actionId ? { ...action, ...updates } : action
          ),
        }));
      },

      removeAction: (actionId) => {
        const state = get();

        // Cancel if running
        if (state.runningActions.has(actionId)) {
          actionExecutionEngine.cancelAction(actionId);
        }

        set((state) => ({
          actions: state.actions.filter((action) => action.id !== actionId),
          actionQueue: state.actionQueue.filter((id) => id !== actionId),
          runningActions: new Set([...state.runningActions].filter((id) => id !== actionId)),
          selectedActionId: state.selectedActionId === actionId ? null : state.selectedActionId,
        }));

        // Remove execution result
        const newResults = new Map(state.executionResults);
        newResults.delete(actionId);
        set({ executionResults: newResults });
      },

      // Action execution
      executeAction: async (actionId, contextOverrides = {}) => {
        const state = get();
        const action = state.actions.find((a) => a.id === actionId);

        if (!action) {
          throw new Error(`Action not found: ${actionId}`);
        }

        if (state.runningActions.has(actionId)) {
          throw new Error(`Action is already running: ${actionId}`);
        }

        // Create execution context
        const context: ActionExecutionContext = {
          sessionId: `session-${Date.now()}`,
          timestamp: new Date().toISOString(),
          environment: process.env as Record<string, string>,
          workingDirectory: process.cwd?.() || '.',
          ...contextOverrides,
        };

        // Update action status to running
        get().updateAction(actionId, { status: 'running' });

        // Add to running actions
        set((state) => ({
          runningActions: new Set([...state.runningActions, actionId]),
        }));

        try {
          // Execute the action
          const result = await actionExecutionEngine.executeAction(
            action,
            context,
            (status, resultData) => {
              // Update action status during execution
              get().updateAction(actionId, { status });
            }
          );

          // Store execution result
          const newResults = new Map(get().executionResults);
          newResults.set(actionId, result);

          // Update action with final status
          get().updateAction(actionId, {
            status: result.status,
            completed: result.status === 'completed',
            executedAt: result.endTime,
            executionTime: result.duration,
            error: result.error?.message,
          });

          set({ executionResults: newResults });

          return result;
        } catch (error) {
          // Handle execution error
          const errorMessage = error instanceof Error ? error.message : 'Unknown execution error';

          get().updateAction(actionId, {
            status: 'failed',
            error: errorMessage,
          });

          throw error;
        } finally {
          // Remove from running actions
          set((state) => ({
            runningActions: new Set([...state.runningActions].filter((id) => id !== actionId)),
          }));
        }
      },

      executeMultipleActions: async (actionIds, sequential = false) => {
        const state = get();
        const actions = actionIds
          .map((id) => state.actions.find((a) => a.id === id))
          .filter(Boolean) as WorkflowAction[];

        if (actions.length === 0) {
          return [];
        }

        const context: ActionExecutionContext = {
          sessionId: `batch-${Date.now()}`,
          timestamp: new Date().toISOString(),
          environment: process.env as Record<string, string>,
          workingDirectory: process.cwd?.() || '.',
        };

        if (sequential) {
          return actionExecutionEngine.executeActionsSequential(
            actions,
            context,
            (result) => {
              // Store individual results
              const newResults = new Map(get().executionResults);
              newResults.set(result.actionId, result);
              set({ executionResults: newResults });
            },
            (actionId, status) => {
              get().updateAction(actionId, { status });
            }
          );
        } else {
          return actionExecutionEngine.executeActionsParallel(
            actions,
            context,
            (result) => {
              // Store individual results
              const newResults = new Map(get().executionResults);
              newResults.set(result.actionId, result);
              set({ executionResults: newResults });
            },
            (actionId, status) => {
              get().updateAction(actionId, { status });
            }
          );
        }
      },

      cancelAction: (actionId) => {
        const cancelled = actionExecutionEngine.cancelAction(actionId);
        if (cancelled) {
          get().updateAction(actionId, { status: 'cancelled' });
          set((state) => ({
            runningActions: new Set([...state.runningActions].filter((id) => id !== actionId)),
          }));
        }
      },

      cancelAllActions: () => {
        const state = get();
        actionExecutionEngine.cancelAllActions();

        // Update all running actions to cancelled
        state.runningActions.forEach((actionId) => {
          get().updateAction(actionId, { status: 'cancelled' });
        });

        set({ runningActions: new Set() });
      },

      // Queue management
      addToQueue: (actionId) => {
        set((state) => ({
          actionQueue: state.actionQueue.includes(actionId)
            ? state.actionQueue
            : [...state.actionQueue, actionId],
        }));
      },

      removeFromQueue: (actionId) => {
        set((state) => ({
          actionQueue: state.actionQueue.filter((id) => id !== actionId),
        }));
      },

      executeQueue: async (sequential = true) => {
        const state = get();
        const queueIds = [...state.actionQueue];

        if (queueIds.length === 0) {
          return [];
        }

        try {
          const results = await get().executeMultipleActions(queueIds, sequential);

          // Clear queue after execution
          set({ actionQueue: [] });

          return results;
        } catch (error) {
          console.error('Queue execution failed:', error);
          throw error;
        }
      },

      clearQueue: () => set({ actionQueue: [] }),

      // UI actions
      selectAction: (actionId) => set({ selectedActionId: actionId }),
      setShowCreateDialog: (show) => set({ showCreateDialog: show }),
      setShowExecutionLogs: (show) => set({ showExecutionLogs: show }),

      // Utility actions
      getAction: (actionId) => {
        return get().actions.find((action) => action.id === actionId);
      },

      getExecutionResult: (actionId) => {
        return get().executionResults.get(actionId);
      },

      getActionsByStatus: (status) => {
        return get().actions.filter((action) => action.status === status);
      },

      getActionsByType: (type) => {
        return get().actions.filter((action) => action.type === type);
      },

      // Loading and error
      setLoading: (key, loading) => {
        set((state) => ({
          loading: {
            ...state.loading,
            [key]: loading,
          },
        }));
      },

      setError: (error) => set({ error }),

      // Reset
      reset: () => {
        const state = get();

        // Cancel all running actions
        state.runningActions.forEach((actionId) => {
          actionExecutionEngine.cancelAction(actionId);
        });

        set(initialState);
      },
    }),
    {
      name: 'workflow-action-store',
      partialize: (state) => ({
        // Only persist actions and queue, not execution state
        actions: state.actions,
        actionQueue: state.actionQueue,
        selectedActionId: state.selectedActionId,
      }),
    }
  )
);

// Selector hooks for performance optimization
export const useWorkflowActions = () => useWorkflowActionStore((state) => state.actions);
export const useRunningActions = () => useWorkflowActionStore((state) => state.runningActions);
export const useActionQueue = () => useWorkflowActionStore((state) => state.actionQueue);
export const useSelectedAction = () => {
  const selectedId = useWorkflowActionStore((state) => state.selectedActionId);
  const getAction = useWorkflowActionStore((state) => state.getAction);
  return selectedId ? getAction(selectedId) : null;
};
export const useExecutionResults = () => useWorkflowActionStore((state) => state.executionResults);
export const useWorkflowActionLoading = () => useWorkflowActionStore((state) => state.loading);
export const useWorkflowActionError = () => useWorkflowActionStore((state) => state.error);
