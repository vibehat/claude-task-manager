import { useEffect, useCallback } from 'react';
import { useWorkingOnStore } from '../stores/workingOnStore';

interface KeyboardShortcutsConfig {
  onCommandPalette?: () => void;
  onAddTask?: () => void;
  onToggleFocus?: () => void;
  onNavigateToTasks?: () => void;
  onNavigateToNotes?: () => void;
  onQuickSearch?: () => void;
}

export function useKeyboardShortcuts({
  onCommandPalette,
  onAddTask,
  onToggleFocus,
  onNavigateToTasks,
  onNavigateToNotes,
  onQuickSearch,
}: KeyboardShortcutsConfig): void {
  const { taskQueue, currentTask, viewState, selectTask, setFocusMode, setWorkflowPanelExpanded } =
    useWorkingOnStore();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement ||
        (event.target as HTMLElement)?.contentEditable === 'true'
      ) {
        return;
      }

      const { key, ctrlKey, metaKey, altKey, shiftKey } = event;
      const isModKey = ctrlKey || metaKey;

      // Primary Actions
      if (key === 'k' && isModKey) {
        event.preventDefault();
        onCommandPalette?.();
        return;
      }

      // Task Management Shortcuts
      if (!isModKey && !altKey && !shiftKey) {
        switch (key) {
          case 'n':
          case 'N':
            event.preventDefault();
            onAddTask?.();
            break;

          case 'f':
          case 'F':
            event.preventDefault();
            setFocusMode(!viewState.focusMode);
            break;

          case 'w':
          case 'W':
            event.preventDefault();
            setWorkflowPanelExpanded(!viewState.workflowPanelExpanded);
            break;

          case '/':
            event.preventDefault();
            onQuickSearch?.();
            break;

          // Switch workflow steps (1, 2, 3)
          case '1':
            event.preventDefault();
            if (taskQueue.length >= 1) {
              selectTask(taskQueue[0].id);
            }
            break;

          case '2':
            event.preventDefault();
            if (taskQueue.length >= 2) {
              selectTask(taskQueue[1].id);
            }
            break;

          case '3':
            event.preventDefault();
            if (taskQueue.length >= 3) {
              selectTask(taskQueue[2].id);
            }
            break;

          default:
            break;
        }
      }

      // Navigation Shortcuts with Cmd/Ctrl
      if (isModKey && !altKey && !shiftKey) {
        switch (key) {
          case '1':
            event.preventDefault();
            // Navigate to Working On (current page - could scroll to top)
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;

          case '2':
            event.preventDefault();
            onNavigateToTasks?.();
            break;

          case '3':
            event.preventDefault();
            onNavigateToNotes?.();
            break;

          default:
            break;
        }
      }

      // Task Status Shortcuts (S for status)
      if (key === 's' && !isModKey && !altKey && !shiftKey) {
        event.preventDefault();
        // TODO: Open status change modal/dropdown for current task
        console.log('Status shortcut triggered for task:', currentTask?.id);
      }

      // Expand task details (E)
      if (key === 'e' && !isModKey && !altKey && !shiftKey) {
        event.preventDefault();
        // TODO: Toggle expanded state of current task details
        console.log('Expand shortcut triggered');
      }
    },
    [
      taskQueue,
      currentTask,
      viewState,
      selectTask,
      setFocusMode,
      setWorkflowPanelExpanded,
      onCommandPalette,
      onAddTask,
      onToggleFocus,
      onNavigateToTasks,
      onNavigateToNotes,
      onQuickSearch,
    ]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Provide help text for keyboard shortcuts
  const getShortcutHelp = useCallback(() => {
    return {
      'Primary Actions': [
        { key: '⌘K / Ctrl+K', description: 'Open command palette' },
        { key: 'Tab', description: 'Navigate between areas' },
      ],
      'Task Management': [
        { key: 'N', description: 'New task' },
        { key: 'S', description: 'Set status' },
        { key: 'E', description: 'Expand task details' },
        { key: 'F', description: 'Toggle focus mode' },
        { key: 'W', description: 'Show/hide workflow panel' },
      ],
      'Workflow Navigation': [
        { key: '1, 2, 3', description: 'Switch workflow steps' },
        { key: '/', description: 'Quick search' },
      ],
      'Page Navigation': [
        { key: '⌘1 / Ctrl+1', description: 'Go to Right Now' },
        { key: '⌘2 / Ctrl+2', description: 'Go to My Work' },
        { key: '⌘3 / Ctrl+3', description: 'Go to Notes & Docs' },
      ],
    };
  }, []);

  return;
}

// Hook to get keyboard shortcuts help
export function useKeyboardShortcutsHelp() {
  return {
    'Primary Actions': [
      { key: '⌘K / Ctrl+K', description: 'Open command palette' },
      { key: 'Tab', description: 'Navigate between areas' },
    ],
    'Task Management': [
      { key: 'N', description: 'New task' },
      { key: 'S', description: 'Set status' },
      { key: 'E', description: 'Expand task details' },
      { key: 'F', description: 'Toggle focus mode' },
      { key: 'W', description: 'Show/hide workflow panel' },
    ],
    'Workflow Navigation': [
      { key: '1, 2, 3', description: 'Switch workflow steps' },
      { key: '/', description: 'Quick search' },
    ],
    'Page Navigation': [
      { key: '⌘1 / Ctrl+1', description: 'Go to Right Now' },
      { key: '⌘2 / Ctrl+2', description: 'Go to My Work' },
      { key: '⌘3 / Ctrl+3', description: 'Go to Notes & Docs' },
    ],
  };
}
