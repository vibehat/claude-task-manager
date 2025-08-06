import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { useActiveTask } from '../hooks/useActiveTask';
import { useSessionTracking } from '../hooks/useSessionTracking';
import { useFocusMode } from '../hooks/useFocusMode';
import { useWorkingOnStore } from '../store/workingOnStore';
import { ActiveTaskDisplay } from './ActiveTaskDisplay';
import { QuickActionBar } from './QuickActionBar';
import { SessionTimer } from './SessionTimer';
import { TaskDetailPanel } from './TaskDetailPanel';
import type { WorkingOnAnalyticsEvent } from '../types/workingOnTypes';

/**
 * Focus Mode Overlay Component
 * Provides distraction-free interface when focus mode is enabled
 */
const FocusMode: React.FC<{
  isActive: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}> = ({ isActive, onToggle, children }) => {
  if (!isActive) return <>{children}</>;

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-auto">
      <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
        {/* Focus mode header */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Focus Mode Active</span>
          </div>
          <button
            onClick={onToggle}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Exit Focus (Esc)
          </button>
        </div>

        {/* Focused content */}
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

/**
 * Multiple Active Tasks Resolution Component
 */
const MultipleTasksResolver: React.FC<{
  taskCount: number;
  onClose: () => void;
}> = ({ taskCount, onClose }) => (
  <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
          Multiple Active Tasks Detected
        </h3>
        <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
          You have {taskCount} tasks marked as in-progress. For optimal focus, please complete or
          pause some tasks to work on one at a time.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => window.open('/workspace/in-progress', '_blank')}
            className="text-sm bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 px-3 py-1 rounded hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
          >
            Manage Tasks
          </button>
          <button
            onClick={onClose}
            className="text-sm text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Main Working On Page Component
 * The cornerstone feature that eliminates decision paralysis and enables focused development
 */
export const WorkingOnPage: React.FC = () => {
  // Hooks for data and state management
  const { activeTask, hasMultipleActive, isLoading, error, switchToTask, completeTask } =
    useActiveTask();

  const {
    sessionState,
    startSession,
    pauseSession,
    resumeSession,
    endSession,
    getFormattedDuration,
  } = useSessionTracking();

  const { isActive: focusMode, toggle: toggleFocus } = useFocusMode();

  const { quickNotes, updateQuickNotes, addQuickNote, setActiveTask, setIsLoading } =
    useWorkingOnStore();

  // Sync active task with store
  useEffect(() => {
    setActiveTask(activeTask);
    setIsLoading(isLoading);
  }, [activeTask, isLoading, setActiveTask, setIsLoading]);

  // Auto-start session when active task is set
  useEffect(() => {
    if (activeTask && !sessionState.isActive) {
      startSession();
      toast.success(`Started working on: ${activeTask.title}`);
    }
  }, [activeTask, sessionState.isActive, startSession]);

  // Handle task completion
  const handleTaskComplete = async (taskId: string) => {
    try {
      await completeTask(taskId);
      endSession();

      // Analytics event
      const event: WorkingOnAnalyticsEvent = {
        type: 'task_completed',
        timestamp: new Date(),
        data: {
          taskId,
          sessionDuration: getFormattedDuration(),
          completedFromWorkingOn: true,
        },
      };

      toast.success('Task completed! 🎉', {
        description: `Session time: ${getFormattedDuration()}`,
      });

      console.log('[WorkingOn] Task completed:', event);
    } catch (err) {
      toast.error('Failed to complete task. Please try again.');
      console.error('[WorkingOn] Task completion failed:', err);
    }
  };

  // Handle task switching
  const handleTaskSwitch = async (currentTaskId: string) => {
    // For now, just navigate to tasks page
    // In Phase 2, we'll implement a proper task switcher modal
    window.open('/workspace/tasks', '_blank');
  };

  // Handle adding notes
  const handleAddNote = (note: string) => {
    addQuickNote(note);
    toast.success('Note added');
  };

  // Handle focus mode toggle
  const handleToggleFocus = () => {
    toggleFocus();

    const event: WorkingOnAnalyticsEvent = {
      type: 'focus_mode_activated',
      timestamp: new Date(),
      data: {
        enabled: !focusMode,
        taskId: activeTask?.id,
      },
    };

    console.log('[WorkingOn] Focus mode toggled:', event);
  };

  // Dismiss multiple tasks warning
  const [showMultipleWarning, setShowMultipleWarning] = useState(true);

  // Task detail panel state
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  // Handle showing task details
  const handleShowTaskDetails = () => {
    setShowTaskDetails(true);
  };

  // Handle closing task details
  const handleCloseTaskDetails = () => {
    setShowTaskDetails(false);
  };

  // Main content
  const content = (
    <div className="space-y-6">
      {/* Multiple active tasks warning */}
      {hasMultipleActive && showMultipleWarning && (
        <MultipleTasksResolver
          taskCount={2} // Could be derived from actual data
          onClose={() => setShowMultipleWarning(false)}
        />
      )}

      {/* Error display */}
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      {/* Main active task display */}
      <ActiveTaskDisplay
        task={activeTask}
        isLoading={isLoading}
        onComplete={() => activeTask && handleTaskComplete(activeTask.id.toString())}
        onEdit={() => activeTask && window.open(`/workspace/tasks?task=${activeTask.id}`, '_blank')}
        onShowDetails={activeTask ? handleShowTaskDetails : undefined}
      />

      {/* Quick actions (only show if we have an active task) */}
      {activeTask && !hasMultipleActive && (
        <QuickActionBar
          task={activeTask}
          onTaskComplete={handleTaskComplete}
          onTaskSwitch={handleTaskSwitch}
          onAddNote={handleAddNote}
          onToggleFocus={handleToggleFocus}
        />
      )}

      {/* Session timer and notes (desktop layout) */}
      {activeTask && !focusMode && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Session timer */}
          <SessionTimer
            sessionState={sessionState}
            onStart={startSession}
            onPause={pauseSession}
            onResume={resumeSession}
            onStop={endSession}
          />

          {/* Quick notes preview */}
          {quickNotes && (
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium text-sm text-foreground mb-2">Quick Notes</h4>
              <p className="text-sm text-muted-foreground line-clamp-3">{quickNotes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <WorkspaceLayout>
      <FocusMode isActive={focusMode} onToggle={handleToggleFocus}>
        {content}
      </FocusMode>

      {/* Task Detail Panel */}
      {activeTask && (
        <TaskDetailPanel
          task={activeTask}
          isOpen={showTaskDetails}
          onClose={handleCloseTaskDetails}
          focusMode={focusMode}
        />
      )}
    </WorkspaceLayout>
  );
};
