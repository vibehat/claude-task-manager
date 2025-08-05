'use client';

import type { TaskMasterTask } from '@/libs/client/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import { StatusSelector } from '../../components/selectors/StatusSelector';
import { PrioritySelector } from '../../components/selectors/PrioritySelector';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import { formatTaskIdForDisplay } from '@/libs/client/utils';

interface TaskHeaderProps {
  task: TaskMasterTask;
  onClose: () => void;
}

export function TaskHeader({ task, onClose }: TaskHeaderProps): React.JSX.Element {
  // TaskMasterTask has status and priority as strings, not IDs
  const allStatuses = useDataStore((state) => state.allStatuses);
  const allPriorities = useDataStore((state) => state.allPriorities);

  const status = allStatuses?.find((s) => s.name.toLowerCase() === task.status?.toLowerCase());
  const priority = allPriorities?.find(
    (p) => p.name.toLowerCase() === task.priority?.toLowerCase()
  );
  const { isFullscreen, toggleFullscreen } = useTaskSidePanelStore();

  return (
    <div className="p-6 pb-4 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="font-mono text-xs">
            {formatTaskIdForDisplay(task.id)}
          </Badge>
          <div className="flex items-center gap-2">
            <StatusSelector status={status} taskId={String(task.id)} />
            <PrioritySelector priority={priority?.name} taskId={String(task.id)} />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            className="h-6 w-6"
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TaskHeader;
