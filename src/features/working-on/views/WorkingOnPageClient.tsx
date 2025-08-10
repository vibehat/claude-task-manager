'use client';

import React, { useEffect } from 'react';
import { ContextSection } from '../components/ContextSection/ContextSection';
import { MyTasksSection } from '../components/MyTasksSection/MyTasksSection';
import { TaskDetailsSection } from '../components/TaskDetailsSection/TaskDetailsSection';
import { SkipLinks } from '../components/SkipLinks/SkipLinks';
import { MobileTaskQueueBar } from '../components/MobileTaskQueueBar/MobileTaskQueueBar';
import { RightPanel } from '../components/RightPanel/RightPanel';
import { MobileWorkflowPanel } from '../components/MobileWorkflowPanel/MobileWorkflowPanel';
import { useWorkingOnStore } from '../stores/workingOnStore';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import {
  ScreenReaderAnnouncer,
  setupFocusVisible,
  ARIA_LABELS,
  respectsReducedMotion,
} from '../utils/accessibility';
import {
  mockCurrentTask,
  mockTaskQueue,
  mockWorkflowActions,
  mockProjectContext,
  mockQuickActions,
  mockSmartSuggestions,
  mockProjectState,
} from '../utils/mockData';
import { cn } from '@/libs/client/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function WorkingOnPageClient(): React.JSX.Element {
  // Zustand store
  const {
    currentTask,
    taskQueue,
    workflowActions,
    projectContext,
    quickActions,
    viewState,
    loading,
    error,
    // Actions
    setCurrentTask,
    setTaskQueue,
    setWorkflowActions,
    setProjectContext,
    setQuickActions,
    selectTask,
    addTaskNote,
    toggleWorkflowAction,
    refreshWorkflowActions,
    refresh,
  } = useWorkingOnStore();

  // Initialize with mock data on mount
  useEffect(() => {
    setCurrentTask(mockCurrentTask);
    setTaskQueue(mockTaskQueue);
    setWorkflowActions(mockWorkflowActions);
    setProjectContext(mockProjectContext);
    setQuickActions(mockQuickActions);
  }, [setCurrentTask, setTaskQueue, setWorkflowActions, setProjectContext, setQuickActions]);

  // Setup accessibility features
  useEffect(() => {
    // Initialize screen reader announcer
    ScreenReaderAnnouncer.initialize();

    // Setup focus-visible detection for keyboard navigation
    setupFocusVisible();

    // Announce page load for screen readers
    ScreenReaderAnnouncer.announce(
      'Working On page loaded. Use Tab to navigate or press ? for keyboard shortcuts.'
    );

    return () => {
      ScreenReaderAnnouncer.cleanup();
    };
  }, []);

  // Focus mode removed

  // Event handlers (defined before keyboard shortcuts setup)
  const handleSettings = () => {
    console.log('Open settings');
    // TODO: Navigate to settings page
  };

  const handleTaskSelect = (taskId: number) => {
    selectTask(taskId);
  };

  const handleAddTask = () => {
    console.log('Add new task');
    // TODO: Open create task modal
  };

  const handleStartWork = () => {
    if (currentTask) {
      console.log('Start work on current task:', currentTask.id);
      // TODO: Update task status to in-progress and start timer
    }
  };

  const handleAddNote = () => {
    if (currentTask) {
      const note = prompt('Add a note:');
      if (note) {
        addTaskNote(currentTask.id, note);
      }
    }
  };

  const handleWorkflowActionToggle = (actionId: string) => {
    toggleWorkflowAction(actionId);
  };

  const handleAddWorkflowAction = () => {
    console.log('Add new workflow action');
    // TODO: Open workflow action creation modal
  };

  const handleRefreshWorkflow = () => {
    refreshWorkflowActions();
  };

  const handleExecuteWorkflow = (suggestionId: string) => {
    console.log('Execute workflow:', suggestionId);
    // TODO: Implement workflow execution logic
    // This would integrate with TaskMaster CLI commands
  };

  const handleDismissSuggestion = (suggestionId: string) => {
    console.log('Dismiss suggestion:', suggestionId);
    // TODO: Implement suggestion dismissal logic
  };

  const handleQuickActionClick = (actionId: string) => {
    console.log('Quick action clicked:', actionId);

    // Handle specific actions
    switch (actionId) {
      case 'sync-tasks':
        refresh();
        break;
      case 'command-palette':
        // Command palette is now handled at the page level
        console.log('Command palette action clicked - handled at page level');
        break;
      default:
        console.log('Unhandled action:', actionId);
    }
  };

  // Setup keyboard shortcuts (after all handlers are defined)
  useKeyboardShortcuts({
    onCommandPalette: () => {
      // Command palette is now handled at the page level
      console.log('Command palette triggered from keyboard shortcut');
    },
    onAddTask: handleAddTask,
    onNavigateToTasks: () => {
      console.log('Navigate to tasks');
      // TODO: Navigate to tasks page
    },
    onNavigateToNotes: () => {
      console.log('Navigate to notes');
      // TODO: Navigate to notes page
    },
    onQuickSearch: () => {
      console.log('Quick search');
      // TODO: Open search modal
    },
  });

  return (
    <main
      role="main"
      aria-label={ARIA_LABELS.contextSection}
      className={cn(
        'h-full w-full',
        // Responsive padding
        'p-3 sm:p-4 lg:p-6',
        // Focus management
        'focus-within:outline-none',
        // Reduced motion support
        respectsReducedMotion() ? 'motion-reduce' : ''
      )}
    >
      {error && (
        <div className="mb-4">
          <Alert variant="destructive">
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      {/* Skip links for screen readers */}
      <SkipLinks />

      {/* Desktop Layout: 9:3 Grid (1280px+) */}
      <div
        className="h-full w-full xl:grid xl:grid-cols-12 xl:gap-6 space-y-6 xl:space-y-0"
        role="document"
        aria-label="Working on page content"
      >
        {/* MAIN CONTENT - col-span-9 on desktop, full width on tablet/mobile */}
        <section
          className={cn('xl:col-span-9', 'flex flex-col gap-4 lg:gap-6 min-h-0')}
          aria-labelledby="main-content-heading"
        >
          <h1 id="main-content-heading" className="sr-only">
            Main Working On Content
          </h1>

          {/* Context Section */}
          <div role="region" aria-label={ARIA_LABELS.contextSection}>
            <ContextSection
              context={projectContext || mockProjectContext}
              onSettings={handleSettings}
            />
          </div>

          {/* Tablet/Mobile: Simplified Task Queue Bar */}
          <MobileTaskQueueBar
            taskQueue={taskQueue}
            onTaskSelect={handleTaskSelect}
            onAddTask={handleAddTask}
            onRefresh={handleRefreshWorkflow}
          />

          {/* Desktop: Full Task Section */}
          <section className="hidden xl:block" role="region" aria-label={ARIA_LABELS.taskQueue}>
            <MyTasksSection
              taskQueue={taskQueue}
              selectedTaskId={viewState.selectedTaskId || currentTask?.id || null}
              onTaskSelect={handleTaskSelect}
              onAddTask={handleAddTask}
            />
          </section>

          {/* Task Details Section - Collapsible on tablet */}
          <section
            id="task-details"
            className={cn(
              'xl:block',
              // Tablet: Make collapsible
              'lg:block md:block'
            )}
            role="region"
            aria-label={ARIA_LABELS.taskDetails}
            aria-live="polite"
            aria-atomic="false"
          >
            <TaskDetailsSection
              task={currentTask}
              loading={loading.currentTask}
              onStartWork={handleStartWork}
              onAddNote={handleAddNote}
            />
          </section>
        </section>

        {/* RIGHT PANEL - Desktop only, integrated into main flow on smaller screens */}
        <RightPanel
          workflowActions={workflowActions}
          smartSuggestions={mockSmartSuggestions}
          projectState={mockProjectState}
          quickActions={quickActions}
          onActionToggle={handleWorkflowActionToggle}
          onAddAction={handleAddWorkflowAction}
          onRefresh={handleRefreshWorkflow}
          onExecuteWorkflow={handleExecuteWorkflow}
          onDismissSuggestion={handleDismissSuggestion}
          onQuickActionClick={handleQuickActionClick}
        />

        {/* Mobile/Tablet: Workflow Panel - Below task details */}
        <MobileWorkflowPanel
          workflowActions={workflowActions}
          smartSuggestions={mockSmartSuggestions}
          projectState={mockProjectState}
          quickActions={quickActions}
          onActionToggle={handleWorkflowActionToggle}
          onAddAction={handleAddWorkflowAction}
          onRefresh={handleRefreshWorkflow}
          onExecuteWorkflow={handleExecuteWorkflow}
          onDismissSuggestion={handleDismissSuggestion}
          onQuickActionClick={handleQuickActionClick}
        />
      </div>

      {/* Help overlay for keyboard shortcuts - shown on ? key */}
      {/* TODO: Implement keyboard shortcuts help modal */}
    </main>
  );
}

export default WorkingOnPageClient;
