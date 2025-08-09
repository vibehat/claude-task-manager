import React from 'react';
import { AIActivityFeed } from '../components/AIActivityFeed';
import { QuickActionsPanel } from '../components/QuickActionsPanel';
import { BlockedTasksPanel } from '../components/BlockedTasksPanel';
import { ActiveTasksPanel } from '../components/ActiveTasksPanel';
import { CurrentFocusCard } from '../components/CurrentFocusCard';
import { TaskMasterMetrics } from '@/components/analytics/TaskMasterMetrics';
import { useWorkingOnStore } from '../store/workingOnStore';
import { useCommandPaletteStore } from '@/store/commandPaletteStore';
import {
  useActiveTasks,
  useBlockedTasks,
  useCurrentFocusTask,
} from '../hooks/useWorkingOnSelectors';
import { dummyActivities } from '../data/dummyData';

export function WorkingOnSingleMode(): React.JSX.Element {
  const { currentFocusId, setCurrentFocus, openContextView, startAISession, startAIHandoff } =
    useWorkingOnStore();
  const { openCommandPalette } = useCommandPaletteStore();

  const currentFocusTask = useCurrentFocusTask();
  const activeTasks = useActiveTasks();
  const blockedTasks = useBlockedTasks();

  const handleTaskSelect = (taskId: string) => setCurrentFocus(taskId);

  const handleCurrentFocusAction = (action: string) => {
    switch (action) {
      case 'continue':
      case 'start-ai':
        if (currentFocusId) startAISession(currentFocusId, 'claude');
        break;
      case 'switch-context':
        openCommandPalette();
        break;
      case 'view-context':
        if (currentFocusId) openContextView(currentFocusId);
        break;
      case 'research':
        openCommandPalette();
        break;
      case 'handoff':
        if (currentFocusId) startAIHandoff(currentFocusId);
        break;
      default:
        break;
    }
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'research':
      case 'command-palette':
        openCommandPalette();
        break;
      default:
        // placeholder for future actions
        break;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[600px]">
      {/* Left Panel */}
      <div className="space-y-6 min-h-[600px]">
        {currentFocusTask && (
          <CurrentFocusCard
            task={currentFocusTask}
            aiSession={currentFocusTask.aiSession || undefined}
            onAction={handleCurrentFocusAction}
          />
        )}

        <div>
          <ActiveTasksPanel
            tasks={activeTasks}
            onTaskSelect={handleTaskSelect}
            selectedTaskId={currentFocusId}
          />
        </div>

        {blockedTasks.length > 0 && (
          <div>
            <BlockedTasksPanel blockedTasks={blockedTasks} onTaskSelect={handleTaskSelect} />
          </div>
        )}
      </div>

      {/* Right Panel */}
      <div className="space-y-6 min-h-[600px]">
        <div>
          <AIActivityFeed activities={dummyActivities} />
        </div>

        <div>
          <TaskMasterMetrics complexityReport={null} taskMasterData={null} />
        </div>

        <div>
          <QuickActionsPanel onAction={handleQuickAction} />
        </div>
      </div>
    </div>
  );
}
