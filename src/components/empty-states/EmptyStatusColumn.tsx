'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useCreateTaskStore } from '@/store/createTaskStore';
import type { TaskStatus } from '@/libs/client/types/dataModels';

interface EmptyStatusColumnProps {
  status: TaskStatus;
  variant?: 'list' | 'grid';
}

export function EmptyStatusColumn({
  status,
  variant = 'list',
}: EmptyStatusColumnProps): React.JSX.Element {
  const { openModal } = useCreateTaskStore();

  if (variant === 'grid') {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
        <p className="text-sm text-muted-foreground mb-3">No {status.name.toLowerCase()} tasks</p>
        <Button size="sm" variant="ghost" onClick={() => openModal(status)} className="text-xs">
          <Plus className="w-3 h-3 mr-1" />
          Add task
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-8 px-6 text-center">
      <div className="flex flex-col items-center">
        <p className="text-sm text-muted-foreground mb-2">No {status.name.toLowerCase()} tasks</p>
        <Button size="sm" variant="ghost" onClick={() => openModal(status)} className="text-xs">
          <Plus className="w-3 h-3 mr-1" />
          Add task
        </Button>
      </div>
    </div>
  );
}
