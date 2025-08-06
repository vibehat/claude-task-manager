'use client';

import React, { useEffect } from 'react';
import { useWorkingOnStore } from '../store/workingOnStore';
import {
  useCurrentFocusTask,
  useActiveTasks,
  useBlockedTasks,
} from '../hooks/useWorkingOnSelectors';
import { ActiveTasksPanel } from '../components/ActiveTasksPanel';
import { CurrentFocusCard } from '../components/CurrentFocusCard';
import { AIActivityFeed } from '../components/AIActivityFeed';
import { CommandPalette } from '../components/CommandPalette';
import { QuickActionsPanel } from '../components/QuickActionsPanel';
import { BlockedTasksPanel } from '../components/BlockedTasksPanel';
import { ContextView } from '../components/ContextView';
import { useIsMobile } from '@/hooks/useIsMobile';
import { dummyActivities } from '../data/dummyData';
import { cn } from '@/libs/client/utils';

export function WorkingOnPage() {
  const isMobile = useIsMobile();

  // Store state
  const {
    currentFocusId,
    setCurrentFocus,
    commandPaletteOpen,
    contextViewOpen,
    selectedTaskId,
    toggleCommandPalette,
    openContextView,
    closeContextView,
    setLayout,
  } = useWorkingOnStore();

  // Computed data
  const currentFocusTask = useCurrentFocusTask();
  const activeTasks = useActiveTasks();
  const blockedTasks = useBlockedTasks();

  // Update layout based on screen size
  useEffect(() => {
    setLayout(isMobile ? 'mobile' : 'desktop');
  }, [isMobile, setLayout]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleCommandPalette();
      }
      if (e.key === 'Escape') {
        if (commandPaletteOpen || contextViewOpen) {
          closeContextView();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, contextViewOpen, toggleCommandPalette, closeContextView]);

  // Action handlers
  const handleTaskSelect = (taskId: string) => {
    setCurrentFocus(taskId);
  };

  const handleCurrentFocusAction = (action: string) => {
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
        toggleCommandPalette();
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

  const handleTaskAction = (action: string, taskId: string) => {
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
      <div className="min-h-screen bg-background">
        {/* Mobile Header */}
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Working On</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleCommandPalette}
                className="p-2 hover:bg-muted rounded-md"
                title="Command Palette (⌘K)"
              >
                ⌘
              </button>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="p-4 space-y-4">
          {/* Current Focus */}
          {currentFocusTask && (
            <div className="h-96">
              <CurrentFocusCard
                task={currentFocusTask}
                aiSession={currentFocusTask.aiSession}
                onAction={handleCurrentFocusAction}
              />
            </div>
          )}

          {/* Active Tasks */}
          <div className="h-64">
            <ActiveTasksPanel
              tasks={activeTasks}
              onTaskSelect={handleTaskSelect}
              selectedTaskId={currentFocusId}
            />
          </div>

          {/* Quick Actions */}
          <div className="h-48">
            <QuickActionsPanel onAction={handleQuickAction} />
          </div>

          {/* AI Activity Feed */}
          <div className="h-64">
            <AIActivityFeed activities={dummyActivities} maxItems={5} />
          </div>

          {/* Blocked Tasks */}
          {blockedTasks.length > 0 && (
            <div className="h-64">
              <BlockedTasksPanel blockedTasks={blockedTasks} onTaskSelect={handleTaskSelect} />
            </div>
          )}
        </div>

        {/* Modals */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={toggleCommandPalette}
          currentContext={currentFocusId ? { taskId: currentFocusId } : undefined}
        />

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

  // Desktop layout - responsive grid
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Working On: JWT Authentication System</h1>
              <p className="text-muted-foreground text-sm">
                AI-agent collaboration orchestration hub
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleCommandPalette}
                className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-md transition-colors"
                title="Command Palette (⌘K)"
              >
                <span className="text-sm">Command Palette</span>
                <kbd className="px-2 py-1 text-xs bg-muted rounded">⌘K</kbd>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">Sync</span>
              </div>
              <button className="p-2 hover:bg-muted rounded-md" title="Settings">
                ⚙️
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Main Grid */}
      <div className="p-6 gap-6 grid grid-cols-12 min-h-[calc(100vh-120px)]">
        {/* Left Column - Active Tasks */}
        <div className="col-span-3">
          <ActiveTasksPanel
            tasks={activeTasks}
            onTaskSelect={handleTaskSelect}
            selectedTaskId={currentFocusId}
          />
        </div>

        {/* Middle Column - Current Focus */}
        <div className="col-span-6">
          {currentFocusTask ? (
            <CurrentFocusCard
              task={currentFocusTask}
              aiSession={currentFocusTask.aiSession}
              onAction={handleCurrentFocusAction}
            />
          ) : (
            <div className="h-full flex items-center justify-center border-2 border-dashed border-muted-foreground/20 rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <p className="text-muted-foreground">No task selected</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Select a task from the active tasks panel
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - AI Activity Feed */}
        <div className="col-span-3">
          <AIActivityFeed activities={dummyActivities} />
        </div>

        {/* Bottom Row - Quick Actions & Blocked Tasks */}
        <div className="col-span-6">
          <QuickActionsPanel onAction={handleQuickAction} />
        </div>

        <div className="col-span-6">
          <BlockedTasksPanel blockedTasks={blockedTasks} onTaskSelect={handleTaskSelect} />
        </div>
      </div>

      {/* Modals */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={toggleCommandPalette}
        currentContext={currentFocusId ? { taskId: currentFocusId } : undefined}
      />

      {selectedTaskId && (
        <ContextView taskId={selectedTaskId} isOpen={contextViewOpen} onClose={closeContextView} />
      )}
    </div>
  );
}
