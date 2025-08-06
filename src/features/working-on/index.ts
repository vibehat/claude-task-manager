// Main exports for Working On feature
export { WorkingOnPage } from './views/WorkingOnPage';
export { WorkingOnPageClient } from './views/WorkingOnPageClient';

// Components
export { ActiveTasksPanel } from './components/ActiveTasksPanel';
export { CurrentFocusCard } from './components/CurrentFocusCard';
export { TaskCard } from './components/TaskCard';
export { AIActivityFeed } from './components/AIActivityFeed';
export { CommandPalette } from './components/CommandPalette';
export { QuickActionsPanel } from './components/QuickActionsPanel';
export { BlockedTasksPanel } from './components/BlockedTasksPanel';
export { ContextView } from './components/ContextView';

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
  CommandPaletteProps,
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
