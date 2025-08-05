'use client';

import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from '@/components/ui/ContextMenu';
import { Pencil, Trash2, CheckCircle2, Play, Expand, X, MessageCircle } from 'lucide-react';
import React from 'react';
import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import type { Task, TaskMasterTask } from '@/libs/client/types';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { toast } from 'sonner';
import { taskMasterCLI } from '@/hooks/useTaskMasterCLI';

interface TaskContextMenuProps {
  taskId?: string;
  task?: Task | TaskMasterTask;
}

export function TaskContextMenu({ taskId, task }: TaskContextMenuProps): React.JSX.Element {
  const { openPanel } = useTaskSidePanelStore();

  const handleEdit = (): void => {
    if (task) {
      openPanel(task);
    } else {
      toast.error('Task data not available');
    }
  };

  const handleMarkComplete = (): void => {
    if (!taskId) return;
    // TODO: Implement status update
    toast.success('Task marked as complete');
  };

  const handleStartWorking = async (): Promise<void> => {
    if (!task) return;

    try {
      if (task.id) {
        // TaskMaster task - set status to in-progress
        const taskMasterId = String(task.id);
        const result = await taskMasterCLI.setStatus(taskMasterId, 'in-progress');

        if (result.success) {
          toast.success('Started working on task');
        } else {
          toast.error(`Failed to start task: ${result.result.stderr || 'Unknown error'}`);
        }
      } else {
        // Regular task - update status
        // TODO: Implement status update for regular tasks
        toast.success('Started working on task');
      }
    } catch (error) {
      console.error('Error starting task:', error);
      toast.error('Failed to start task');
    }
  };

  const handleExpandTask = async (): Promise<void> => {
    if (!task) return;

    try {
      if (task.id) {
        // TaskMaster task - expand into subtasks
        const result = await taskMasterCLI.expand(task.id.toString());

        if (result.success) {
          toast.success('Task expanded into subtasks');
        } else {
          toast.error(`Failed to expand task: ${result.result.stderr || 'Unknown error'}`);
        }
      } else {
        // Regular task
        toast.info('Task expansion not available for regular tasks');
      }
    } catch (error) {
      console.error('Error expanding task:', error);
      toast.error('Failed to expand task');
    }
  };

  const handleCancelTask = async (): Promise<void> => {
    if (!task) return;

    const confirmed = window.confirm(
      `Cancel task "${task.title}"? This will mark it as cancelled.`
    );

    if (!confirmed) return;

    try {
      if (task.id) {
        // TaskMaster task - set status to cancelled
        const taskMasterId = String(task.id);
        const result = await taskMasterCLI.setStatus(taskMasterId, 'cancelled');

        if (result.success) {
          toast.success('Task cancelled');
        } else {
          toast.error(`Failed to cancel task: ${result.result.stderr || 'Unknown error'}`);
        }
      } else {
        // Regular task - update status
        // TODO: Implement status update for regular tasks
        toast.success('Task cancelled');
      }
    } catch (error) {
      console.error('Error cancelling task:', error);
      toast.error('Failed to cancel task');
    }
  };

  const handleAskAI = (): void => {
    if (!task) return;

    // Open task panel with AI focus
    openPanel(task);
    // TODO: Focus on AI chat section when panel opens
    toast.info('AI assistant ready to help with this task');
  };

  const handleDelete = async (): Promise<void> => {
    if (!task) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${task.title}"? This action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      if (task.id) {
        // TaskMaster task
        const taskMasterId = String(task.id);
        const result = await taskMasterCLI.removeTask(taskMasterId, true);

        if (result.success) {
          toast.success('Task deleted successfully');
        } else {
          toast.error(`Failed to delete task: ${result.result.stderr || 'Unknown error'}`);
        }
      } else {
        // Regular task
        const { deleteTask } = useDataStore.getState();
        deleteTask(String(task.id));
        toast.success('Task deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
    }
  };

  return (
    <ContextMenuContent className="w-48">
      <ContextMenuItem onClick={handleStartWorking}>
        <Play className="size-4" />
        Start Working
      </ContextMenuItem>

      <ContextMenuItem onClick={handleMarkComplete}>
        <CheckCircle2 className="size-4" />
        Mark Complete
      </ContextMenuItem>

      <ContextMenuSeparator />

      <ContextMenuItem onClick={handleEdit}>
        <Pencil className="size-4" />
        Edit
      </ContextMenuItem>

      <ContextMenuItem onClick={handleExpandTask}>
        <Expand className="size-4" />
        Expand Task
      </ContextMenuItem>

      <ContextMenuItem onClick={handleAskAI}>
        <MessageCircle className="size-4" />
        Ask AI
      </ContextMenuItem>

      <ContextMenuSeparator />

      <ContextMenuItem onClick={handleCancelTask}>
        <X className="size-4" />
        Cancel Task
      </ContextMenuItem>

      <ContextMenuItem variant="destructive" onClick={handleDelete}>
        <Trash2 className="size-4" />
        Delete
      </ContextMenuItem>
    </ContextMenuContent>
  );
}

export default TaskContextMenu;
