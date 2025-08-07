// Main exports for Working On feature
export { WorkingOnPage } from './views/WorkingOnPage';
export { WorkingOnPageClient } from './views/WorkingOnPageClient';
export { TaskDetailPage } from './views/TaskDetailPage';

// Components
export { ActiveTasksPanel } from './components/ActiveTasksPanel';
export { TaskCard } from './components/TaskCard';
export { AIActivityFeed } from './components/AIActivityFeed';
export { QuickActionsPanel } from './components/QuickActionsPanel';
export { BlockedTasksPanel } from './components/BlockedTasksPanel';
export { ContextView } from './components/ContextView';
export { TaskInformation } from './components/TaskInformation';

// Store
export { useWorkingOnStore } from './store/workingOnStore';

// Hooks
export {
  useCurrentFocusTask,
  useActiveTasks,
  useBlockedTasks,
  useWorkingOnUI,
  useWorkingOnLoading,
} from './hooks/useWorkingOnSelectors';

// Types
export type {
  Task,
  AISession,
  AIActivity,
  ContextItem,
  CommandSuggestion,
  WorkingOnState,
  TaskCardProps,
  ActiveTasksPanelProps,
  CurrentFocusCardProps,
  AIActivityFeedProps,
  ContextViewProps,
  QuickActionsPanelProps,
  BlockedTasksPanelProps,
  HandoffInterfaceProps,
} from './types/workingOnTypes';

// Data
export {
  dummyTasks,
  dummyAISessions,
  dummyContextItems,
  dummyCommandSuggestions,
  getTaskById,
  getActiveTasks,
  getBlockedTasks,
  getPendingTasks,
  getTasksByPriority,
  getContextByTaskId,
  getRecentActivities,
} from './data/dummyData';
