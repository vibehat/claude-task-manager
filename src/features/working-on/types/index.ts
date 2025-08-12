import type { Task, Subtask, TaskStatus, TaskPriority } from '@/libs/client/types/taskmaster';

// Working On specific types that extend TaskMaster types
export interface WorkingOnTask extends Task {
  progress: number; // 0-100 percentage
  timeLeft?: string; // "2h left", "30m left", etc.
  relatedFiles: RelatedFile[];
  notes: TaskNote[];
}

export interface RelatedFile {
  path: string;
  status: 'new' | 'modified' | 'unchanged';
  description?: string;
}

export interface TaskNote {
  id: string;
  content: string;
  timestamp: string;
  author?: string;
}

export interface WorkflowAction {
  id: string;
  action: string;
  description: string;
  taskId?: string;
  taskTitle?: string;
  type:
    | 'implementation'
    | 'review'
    | 'research'
    | 'planning'
    | 'testing'
    | 'workflow'
    | 'prd'
    | 'feature'
    | 'deployment'
    | 'maintenance';
  priority: 'high' | 'medium' | 'low';
  estimatedTime?: string;
  completed: boolean;
  category: 'manual' | 'smart' | 'template';
  metadata?: {
    file?: string;
    command?: string;
    url?: string;
    workflowType?: string;
    conditions?: string[];
    executionContext?: Record<string, any>;
  };
}

export interface SmartWorkflowSuggestion {
  id: string;
  title: string;
  description: string;
  reasoning: string;
  actions: WorkflowAction[];
  triggers: WorkflowTrigger[];
  estimatedTotalTime?: string;
  complexity: 'low' | 'medium' | 'high';
  category:
    | 'project-management'
    | 'development'
    | 'research'
    | 'planning'
    | 'deployment'
    | 'maintenance';
}

export interface WorkflowTrigger {
  type: 'project-state' | 'task-status' | 'file-changes' | 'time-context' | 'git-status';
  condition: string;
  value: any;
  weight: number; // 0-1, importance of this trigger
}

export interface ProjectState {
  currentTask?: WorkingOnTask;
  taskQueue: TaskQueueItem[];
  gitStatus?: {
    branch: string;
    uncommittedFiles: number;
    unstagedFiles: number;
    ahead: number;
    behind: number;
  };
  recentActivity?: {
    lastCommit?: string;
    filesChanged?: string[];
    linesAdded?: number;
    linesRemoved?: number;
  };
  projectPhase: 'planning' | 'development' | 'testing' | 'review' | 'deployment' | 'maintenance';
  availableResources: {
    hasPRD: boolean;
    hasTests: boolean;
    hasDocs: boolean;
    hasTaskMaster: boolean;
  };
}

export interface TaskQueueItem {
  id: number;
  title: string;
  status: 'working' | 'ready' | 'queued' | 'blocked';
  indicator: '●' | '→' | '...' | '⏸';
  priority: TaskPriority;
  progress?: number;
}

export interface ProjectContext {
  tag: string;
  project: string;
  activeTasks: number;
  branch?: string;
  lastSync?: string;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  shortcut?: string;
  action: string;
  category: 'workflow' | 'navigation' | 'settings' | 'data';
}

export interface WorkingOnViewState {
  focusMode: boolean;
  collapsedSections: string[];
  selectedTaskId: number | null;
  workflowPanelExpanded: boolean;
  lastRefresh: string;
}

// Component Props Types
export interface ContextSectionProps {
  context: ProjectContext;
  onSettings: () => void;
  onTerminal?: () => void;
}

export interface MyTasksSectionProps {
  taskQueue: TaskQueueItem[];
  selectedTaskId: number | null;
  onTaskSelect: (taskId: number) => void;
  onAddTask: () => void;
}

export interface TaskDetailsSectionProps {
  task: WorkingOnTask | null;
  loading?: boolean;
  onStartWork: () => void;
  onAddNote: () => void;
}

export interface WorkflowSectionProps {
  workflowActions: WorkflowAction[];
  smartSuggestions: SmartWorkflowSuggestion[];
  projectState: ProjectState;
  onActionToggle: (actionId: string) => void;
  onAddAction: () => void;
  onRefresh: () => void;
  onExecuteWorkflow: (suggestionId: string) => void;
  onDismissSuggestion: (suggestionId: string) => void;
}

export interface QuickActionsSectionProps {
  actions: QuickAction[];
  onActionClick: (actionId: string) => void;
}

export interface WorkingOnHeaderActionsProps {
  focusMode: boolean;
  onToggleFocusMode: () => void;
  onRefresh?: () => void;
}

// Additional extracted component props
export interface SkipLinksProps {
  taskQueueHref?: string;
  taskDetailsHref?: string;
}

export interface MobileTaskQueueBarProps {
  taskQueue: TaskQueueItem[];
  onTaskSelect: (taskId: number) => void;
  onAddTask: () => void;
  onRefresh: () => void;
}

export interface RightPanelProps {
  workflowActions: WorkflowAction[];
  smartSuggestions: SmartWorkflowSuggestion[];
  projectState: ProjectState;
  quickActions: QuickAction[];
  onActionToggle: (actionId: string) => void;
  onAddAction: () => void;
  onRefresh: () => void;
  onExecuteWorkflow: (suggestionId: string) => void;
  onDismissSuggestion: (suggestionId: string) => void;
  onQuickActionClick: (actionId: string) => void;
}

export interface MobileWorkflowPanelProps {
  workflowActions: WorkflowAction[];
  smartSuggestions: SmartWorkflowSuggestion[];
  projectState: ProjectState;
  quickActions: QuickAction[];
  onActionToggle: (actionId: string) => void;
  onAddAction: () => void;
  onRefresh: () => void;
  onExecuteWorkflow: (suggestionId: string) => void;
  onDismissSuggestion: (suggestionId: string) => void;
  onQuickActionClick: (actionId: string) => void;
}
