'use client';

import React, { useEffect } from 'react';
import { useWorkingOnStore } from '../store/workingOnStore';
import { useCommandPaletteStore } from '@/store/commandPaletteStore';
import {
  useCurrentFocusTask,
  useActiveTasks,
  useBlockedTasks,
} from '../hooks/useWorkingOnSelectors';
import { ActiveTasksPanel } from '../components/ActiveTasksPanel';
import { AIActivityFeed } from '../components/AIActivityFeed';
import { QuickActionsPanel } from '../components/QuickActionsPanel';
import { BlockedTasksPanel } from '../components/BlockedTasksPanel';
import { ContextView } from '../components/ContextView';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/useIsMobile';
import { dummyActivities } from '../data/dummyData';
import Link from 'next/link';
import { WorkingOnHeaderCard } from '../components/WorkingOnHeaderCard';
import { ContextPackageCard } from '../components/ContextPackageCard';

export function WorkingOnPage() {
  const isMobile = useIsMobile();

  // Store state
  const {
    currentFocusId,
    setCurrentFocus,
    contextViewOpen,
    selectedTaskId,
    openContextView,
    closeContextView,
    setLayout,
  } = useWorkingOnStore();

  // Global command palette store
  const { openCommandPalette } = useCommandPaletteStore();

  // Computed data
  const currentFocusTask = useCurrentFocusTask();
  const activeTasks = useActiveTasks();
  const blockedTasks = useBlockedTasks();

  // Update layout based on screen size
  useEffect(() => {
    setLayout(isMobile ? 'mobile' : 'desktop');
  }, [isMobile, setLayout]);

  // Keyboard shortcuts (excluding Cmd+K which is handled globally)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (contextViewOpen) {
          closeContextView();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [contextViewOpen, closeContextView]);

  // Action handlers
  const handleTaskSelect = (taskId: string) => {
    setCurrentFocus(taskId);
  };

  const _handleCurrentFocusAction = (action: string) => {
    switch (action) {
      case 'continue':
        console.log('Continue AI session');
        break;
      case 'switch-context':
        console.log('Switch to different task');
        break;
      case 'view-context':
        if (currentFocusId) {
          openContextView(currentFocusId);
        }
        break;
      case 'research':
        console.log('Research task');
        break;
      case 'handoff':
        console.log('Handoff to AI');
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'research':
        console.log('Quick research');
        break;
      case 'add-task':
        console.log('Add new task');
        break;
      case 'sync-tasks':
        console.log('Sync with Task Master CLI');
        break;
      case 'copy-context':
        console.log('Copy context to clipboard');
        break;
      case 'command-palette':
        openCommandPalette();
        break;
      case 'view-all':
        console.log('View all tasks');
        break;
      case 'next-task':
        console.log('Get next task');
        break;
      case 'add-note':
        console.log('Add note');
        break;
      case 'refresh':
        console.log('Refresh data');
        break;
      case 'chat':
        console.log('Open chat');
        break;
      default:
        console.log('Unknown quick action:', action);
    }
  };

  const _handleTaskAction = (action: string, taskId: string) => {
    switch (action) {
      case 'continue':
      case 'start-ai':
        console.log(`Start/Continue AI for task ${taskId}`);
        break;
      case 'view-chat':
        console.log(`View chat for task ${taskId}`);
        break;
      case 'add-context':
        openContextView(taskId);
        break;
      case 'research':
        console.log(`Research task ${taskId}`);
        break;
      case 'expand':
        console.log(`Expand task ${taskId}`);
        break;
      case 'prep-context':
        console.log(`Prepare context for task ${taskId}`);
        break;
      case 'view-blocker':
        console.log(`View blocker for task ${taskId}`);
        break;
      case 'view-details':
        openContextView(taskId);
        break;
      default:
        console.log('Unknown task action:', action, taskId);
    }
  };

  if (isMobile) {
    // Mobile layout - single column, stacked
    return (
      <div className="px-6 space-y-6">
        {/* Current Focus */}
        {currentFocusTask && (
          <Card className="min-h-[200px]">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Currently Focusing On</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Task {currentFocusTask.id} - {currentFocusTask.title}
              </p>
              <Button asChild>
                <Link href={`/workspace/task/${currentFocusTask.id}`}>View Full Details</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Active Tasks */}
        <div className="min-h-[300px]">
          <ActiveTasksPanel
            tasks={activeTasks}
            onTaskSelect={handleTaskSelect}
            selectedTaskId={currentFocusId}
          />
        </div>

        {/* Quick Actions */}
        <div className="min-h-[200px]">
          <QuickActionsPanel onAction={handleQuickAction} />
        </div>

        {/* AI Activity Feed */}
        <div className="min-h-[300px]">
          <AIActivityFeed activities={dummyActivities} maxItems={5} />
        </div>

        {/* Blocked Tasks */}
        {blockedTasks.length > 0 && (
          <div className="min-h-[300px]">
            <BlockedTasksPanel blockedTasks={blockedTasks} onTaskSelect={handleTaskSelect} />
          </div>
        )}

        {/* Modals */}

        {selectedTaskId && (
          <ContextView
            taskId={selectedTaskId}
            isOpen={contextViewOpen}
            onClose={closeContextView}
          />
        )}
      </div>
    );
  }

  // Desktop layout - 2-column layout optimized for MacBook Pro 13"
  return (
    <div className="px-6 space-y-6">
      {/* Working On header and context package per MVP wireframe */}
      <div className="space-y-4">
        <WorkingOnHeaderCard
          title={
            currentFocusTask
              ? `Working On — Task ${currentFocusTask.id}: ${currentFocusTask.title}`
              : 'Working On — No Task Selected'
          }
          status={
            currentFocusTask
              ? currentFocusTask.status === 'in-progress'
                ? 'In Progress'
                : currentFocusTask.status
              : 'Idle'
          }
          phase={currentFocusTask ? 'Planning → Implementation' : undefined}
          subtasks={
            currentFocusTask
              ? [
                  { id: 'gen', label: 'Gen', done: currentFocusTask.progress >= 20 },
                  { id: 'validate', label: 'Validate', done: currentFocusTask.progress >= 60 },
                  { id: 'tests', label: 'Tests', done: currentFocusTask.progress >= 90 },
                ]
              : []
          }
        />
        <ContextPackageCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[600px]">
        {/* Left Panel - Task Management */}
        <div className="space-y-6 min-h-[600px]">
          {/* Active Tasks */}
          <div>
            <ActiveTasksPanel
              tasks={activeTasks}
              onTaskSelect={handleTaskSelect}
              selectedTaskId={currentFocusId}
            />
          </div>

          {/* Quick Actions */}
          <div>
            <QuickActionsPanel onAction={handleQuickAction} />
          </div>

          {/* Blocked Tasks (if any exist) */}
          {blockedTasks.length > 0 && (
            <div>
              <BlockedTasksPanel blockedTasks={blockedTasks} onTaskSelect={handleTaskSelect} />
            </div>
          )}
        </div>

        {/* Right Panel - Activity & Overview */}
        <div className="space-y-6 min-h-[600px]">
          {/* AI Activity Feed */}
          <div>
            <AIActivityFeed activities={dummyActivities} />
          </div>

          {/* Task Overview Card */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Working Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentFocusTask ? (
                  <div className="text-center p-6">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="font-semibold mb-2">Currently Focusing On</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Task {currentFocusTask.id} - {currentFocusTask.title}
                    </p>
                    <Button asChild>
                      <Link href={`/workspace/task/${currentFocusTask.id}`}>View Full Details</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <div className="text-3xl mb-3">💤</div>
                    <h3 className="font-semibold mb-2">No Active Focus</h3>
                    <p className="text-muted-foreground text-sm">
                      Select a task from the left panel to start working
                    </p>
                  </div>
                )}

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-lg font-bold">{activeTasks.length}</div>
                    <div className="text-xs text-muted-foreground">Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{blockedTasks.length}</div>
                    <div className="text-xs text-muted-foreground">Blocked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">
                      {activeTasks.filter((t) => t.aiSession).length}
                    </div>
                    <div className="text-xs text-muted-foreground">AI Active</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modals */}

      {selectedTaskId && (
        <ContextView taskId={selectedTaskId} isOpen={contextViewOpen} onClose={closeContextView} />
      )}
    </div>
  );
}
