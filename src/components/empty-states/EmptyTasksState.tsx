'use client';

import { Button } from '@/components/ui/button';
import { Plus, ListTodo, FolderOpen } from 'lucide-react';
import { useCreateTaskStore } from '@/store/createTaskStore';
import type { TaskStatus } from '@/libs/client/types/dataModels';

interface EmptyTasksStateProps {
  statuses?: TaskStatus[];
  variant?: 'no-data' | 'no-tasks' | 'error';
  title?: string;
  description?: string;
  showCreateButton?: boolean;
}

export function EmptyTasksState({
  statuses,
  variant = 'no-tasks',
  title,
  description,
  showCreateButton = true,
}: EmptyTasksStateProps): React.JSX.Element {
  const { openModal } = useCreateTaskStore();

  const getEmptyStateContent = () => {
    switch (variant) {
      case 'no-data':
        return {
          title: title || 'No Task Data Available',
          description:
            description ||
            'Task data could not be loaded. Try refreshing or check your TaskMaster integration.',
          icon: FolderOpen,
          action: null,
        };
      case 'error':
        return {
          title: title || 'Failed to Load Tasks',
          description: description || 'There was an error loading your tasks. Please try again.',
          icon: FolderOpen,
          action: (
            <Button variant="outline" onClick={() => window.location.reload()} className="mt-4">
              Retry
            </Button>
          ),
        };
      case 'no-tasks':
      default:
        return {
          title: title || 'No tasks yet',
          description:
            description || 'Create your first task to get started with project management.',
          icon: ListTodo,
          action: showCreateButton && (
            <Button onClick={() => openModal(statuses?.[0])} className="mt-4">
              <Plus className="w-4 h-4 mr-2" />
              Create Task
            </Button>
          ),
        };
    }
  };

  const {
    title: emptyTitle,
    description: emptyDescription,
    icon: Icon,
    action,
  } = getEmptyStateContent();

  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center px-4">
      <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{emptyTitle}</h3>
      <p className="text-sm text-muted-foreground max-w-md mb-4">{emptyDescription}</p>
      {action}
    </div>
  );
}
