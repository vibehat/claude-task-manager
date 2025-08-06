// Core Types for Working On Feature

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'done' | 'blocked' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  progress: number; // 0-100
  estimatedTime: string;
  dependencies: string[];
  blockedTasks: string[];
  tags: string[];
  contextQuality: number; // 1-5 stars
  aiSession?: AISession;
  createdAt: string;
  updatedAt: string;
}

export interface AISession {
  id: string;
  taskId: string;
  agent: 'claude' | 'gpt' | 'gemini';
  status: 'idle' | 'implementing' | 'reviewing' | 'blocked';
  startTime: string;
  lastActivity: string;
  duration: string;
  activities: AIActivity[];
}

export interface AIActivity {
  id: string;
  sessionId: string;
  timestamp: string;
  type: 'progress' | 'question' | 'completion' | 'error' | 'research';
  message: string;
  metadata?: {
    filesChanged?: string[];
    linesAdded?: number;
    testsRun?: number;
  };
}

export interface ContextItem {
  id: string;
  type: 'documentation' | 'note' | 'research' | 'decision';
  title: string;
  content: string;
  relatedTasks: string[];
  tags: string[];
  createdAt: string;
}

export interface CommandSuggestion {
  command: string;
  description: string;
  confidence: number;
  contextRelevant: boolean;
}

export interface WorkingOnState {
  // Core Data
  tasks: Task[];
  activeTasks: Task[];
  currentFocusId: string | null;
  aiSessions: AISession[];
  contextItems: ContextItem[];

  // UI State
  layout: 'desktop' | 'mobile';
  contextViewOpen: boolean;
  handoffModalOpen: boolean;
  selectedTaskId: string | null;

  // Loading States
  loading: {
    tasks: boolean;
    context: boolean;
    handoff: boolean;
  };

  // Actions
  setCurrentFocus: (taskId: string) => void;
  updateTaskProgress: (taskId: string, progress: number) => void;
  addAIActivity: (sessionId: string, activity: AIActivity) => void;
  openContextView: (taskId: string) => void;
  closeContextView: () => void;
  startAIHandoff: (taskId: string) => void;
  updateContextQuality: (taskId: string, quality: number) => void;
  setLayout: (layout: 'desktop' | 'mobile') => void;
  setLoading: (key: 'tasks' | 'context' | 'handoff', loading: boolean) => void;
  closeHandoffModal: () => void;
  startAISession: (taskId: string, agent: 'claude' | 'gpt' | 'gemini') => void;
  stopAISession: (sessionId: string) => void;
  addContextItem: (item: ContextItem) => void;
  updateContextItem: (id: string, updates: Partial<ContextItem>) => void;

  // Computed Properties
  getActiveTasks: () => Task[];
  getBlockedTasks: () => Task[];
  getCurrentFocusTask: () => Task | null;
  getTaskById: (id: string) => Task | null;
  getContextByTaskId: (taskId: string) => ContextItem[];
}

// Component Props
export interface TaskCardProps {
  task: Task;
  variant: 'active' | 'idle' | 'blocked';
  onAction: (action: string, taskId: string) => void;
}

export interface ActiveTasksPanelProps {
  tasks: Task[];
  onTaskSelect: (id: string) => void;
  selectedTaskId: string | null;
}

export interface CurrentFocusCardProps {
  task: Task;
  aiSession?: AISession;
  onAction: (action: string) => void;
}

export interface AIActivityFeedProps {
  activities: AIActivity[];
  maxItems?: number;
  autoScroll?: boolean;
}

export interface ContextViewProps {
  taskId: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface HandoffInterfaceProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onHandoff: (method: HandoffMethod) => void;
}

export interface QuickActionsPanelProps {
  onAction: (action: string) => void;
}

export interface BlockedTasksPanelProps {
  blockedTasks: Task[];
  onTaskSelect: (id: string) => void;
}

// Handoff related types
export type HandoffMethod = 'direct' | 'clipboard' | 'file';

export interface HandoffContext {
  taskId: string;
  contextQuality: number;
  generatedContext: string;
  tokenCount: number;
}

// Utility types
export type TaskVariant = 'active' | 'idle' | 'blocked';
export type Priority = 'low' | 'medium' | 'high';
export type Status = 'pending' | 'in-progress' | 'done' | 'blocked' | 'cancelled';
export type AIAgent = 'claude' | 'gpt' | 'gemini';
export type ActivityType = 'progress' | 'question' | 'completion' | 'error' | 'research';
