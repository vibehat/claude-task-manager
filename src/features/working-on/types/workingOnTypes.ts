import type { TaskMasterTask } from '@/libs/client/stores/types';

/**
 * Core interfaces for the Working On feature
 * Compatible with existing TaskMasterTask types from dataStore.ts
 */

export interface WorkingOnState {
  // Current active task from existing dataStore
  activeTask: TaskMasterTask | null;
  isLoading: boolean;

  // Working On specific state
  focusMode: boolean;
  sessionStartTime: Date | null;
  timeSpent: number; // in seconds
  quickNotes: string;
  lastActiveTask: TaskMasterTask | null;

  // User preferences
  preferences: WorkingOnPreferences;
}

export interface WorkingOnPreferences {
  timerEnabled: boolean;
  pomodoroLength: number; // in minutes
  breakLength: number; // in minutes
  autoStartTimer: boolean;
  soundEnabled: boolean;
}

export interface SessionState {
  isActive: boolean;
  startTime: Date | null;
  totalTime: number; // in seconds
  isPaused: boolean;
  pausedAt: Date | null;
  resumedAt: Date | null;
}

export interface QuickNote {
  id: string;
  content: string;
  timestamp: Date;
  taskId: string;
}

export interface ActiveTaskDisplayProps {
  task: TaskMasterTask | null;
  isLoading: boolean;
  onComplete?: () => void;
  onEdit?: () => void;
  onShowDetails?: () => void;
}

export interface ActiveTaskState {
  showFullDescription: boolean;
  isCompleting: boolean;
  lastUpdated: Date;
}

export interface QuickActionBarProps {
  task: TaskMasterTask;
  onTaskComplete: (taskId: string) => void;
  onTaskSwitch: (taskId: string) => void;
  onAddNote: (note: string) => void;
  onToggleFocus: () => void;
}

export interface ProgressIndicatorProps {
  task: TaskMasterTask;
  variant?: 'linear' | 'circular' | 'minimal';
}

export interface ProgressData {
  completedSubtasks: number;
  totalSubtasks: number;
  percentage: number;
  status: 'not-started' | 'in-progress' | 'nearly-complete' | 'complete';
}

export interface SessionTimerProps {
  sessionState: SessionState;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
}

export interface FocusModeProps {
  isActive: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export interface QuickNotesProps {
  notes: QuickNote[];
  currentNote: string;
  onNoteChange: (note: string) => void;
  onSaveNote: () => void;
  isAutoSaving: boolean;
}

/**
 * Store interface for the Working On Zustand store
 */
export interface WorkingOnStore extends WorkingOnState {
  // Actions
  setActiveTask: (task: TaskMasterTask | null) => void;
  setIsLoading: (loading: boolean) => void;
  toggleFocusMode: () => void;
  startSession: () => void;
  endSession: () => void;
  pauseSession: () => void;
  resumeSession: () => void;
  updateQuickNotes: (notes: string) => void;
  addQuickNote: (content: string) => void;
  updatePreferences: (preferences: Partial<WorkingOnPreferences>) => void;

  // Computed getters
  getSessionDuration: () => number;
  isSessionActive: () => boolean;
  getProgressData: (task?: TaskMasterTask) => ProgressData | null;

  // Integration with dataStore
  syncWithDataStore: () => void;
  reset: () => void;
}

/**
 * Hook return types for better type safety
 */
export interface UseActiveTaskReturn {
  activeTask: TaskMasterTask | null;
  hasMultipleActive: boolean;
  isLoading: boolean;
  error: string | null;
  switchToTask: (taskId: string) => Promise<void>;
  completeTask: (taskId: string) => Promise<void>;
}

export interface UseSessionTrackingReturn {
  sessionState: SessionState;
  startSession: () => void;
  pauseSession: () => void;
  resumeSession: () => void;
  endSession: () => void;
  getFormattedDuration: () => string;
}

export interface UseFocusModeReturn {
  isActive: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

/**
 * Event types for analytics and tracking
 */
export interface WorkingOnAnalyticsEvent {
  type:
    | 'task_completed'
    | 'focus_mode_activated'
    | 'session_started'
    | 'task_switched'
    | 'note_added';
  timestamp: Date;
  data: Record<string, any>;
}

/**
 * Error types specific to Working On feature
 */
export interface WorkingOnError {
  code: 'NO_ACTIVE_TASK' | 'MULTIPLE_ACTIVE_TASKS' | 'SYNC_FAILED' | 'SESSION_EXPIRED';
  message: string;
  details?: any;
}
