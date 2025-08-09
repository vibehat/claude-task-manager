import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ActiveTasksPanel } from '../components/ActiveTasksPanel';
import { BlockedTasksPanel } from '../components/BlockedTasksPanel';
import { AIActivityFeed } from '../components/AIActivityFeed';
import { TaskMasterMetrics } from '@/components/analytics/TaskMasterMetrics';
import { useWorkingOnStore } from '../store/workingOnStore';
import { useActiveTasks, useBlockedTasks } from '../hooks/useWorkingOnSelectors';
import { dummyActivities } from '../data/dummyData';

export function WorkingOnMultiMode(): React.JSX.Element {
  const { currentFocusId, setCurrentFocus } = useWorkingOnStore();
  const activeTasks = useActiveTasks();
  const blockedTasks = useBlockedTasks();

  const handleTaskSelect = (taskId: string) => setCurrentFocus(taskId);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            🔄 Multi-Task Orchestration (Preview)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            Coordinate multiple concurrent tasks with agent balance and dependency-aware scheduling.
            This view will include active task switching, global actions, and a multi-task activity
            stream.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
        <div className="space-y-6">
          <ActiveTasksPanel
            tasks={activeTasks}
            onTaskSelect={handleTaskSelect}
            selectedTaskId={currentFocusId}
          />
          {blockedTasks.length > 0 && (
            <BlockedTasksPanel blockedTasks={blockedTasks} onTaskSelect={handleTaskSelect} />
          )}
        </div>

        <div className="space-y-6">
          <AIActivityFeed activities={dummyActivities} />
          <TaskMasterMetrics complexityReport={null} taskMasterData={null} />
        </div>
      </div>
    </div>
  );
}
