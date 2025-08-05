'use client';

import { useDataStore } from '@/libs/client/stores/dataStore';
import { format } from 'date-fns';
import { Calendar, Clock, Flag, Hash, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { StatusSelector } from '../../../components/selectors/StatusSelector';
import { PrioritySelector } from '../../../components/selectors/PrioritySelector';
import { LabelSelector } from '../../../components/selectors/LabelSelector';
import type { TaskMasterTask } from '@/libs/client/stores/types';

interface TaskDetailsSectionProps {
  task: TaskMasterTask;
  onLabelsUpdate?: (labelIds: string[]) => void;
}

export function TaskDetailsSection({
  task,
  onLabelsUpdate,
}: TaskDetailsSectionProps): React.JSX.Element {
  // TaskMasterTask has status and priority as strings, not IDs
  const allStatuses = useDataStore((state) => state.allStatuses);
  const allPriorities = useDataStore((state) => state.allPriorities);

  const status = allStatuses?.find((s) => s.name.toLowerCase() === task.status?.toLowerCase());
  const priority = allPriorities?.find(
    (p) => p.name.toLowerCase() === task.priority?.toLowerCase()
  );

  // TaskMasterTask doesn't have labelIds - this will need to be adapted later
  const labels: any[] = [];

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Details</h3>

      <div className="grid gap-4">
        {/* Priority */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Flag className="h-4 w-4" />
            <span>Priority</span>
          </div>
          <div className="flex items-center gap-2">
            <PrioritySelector priority={priority?.name} taskId={String(task.id)} />
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Flag className="h-4 w-4" />
            <span>Status</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusSelector status={status} taskId={String(task.id)} />
          </div>
        </div>

        {/* Labels */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Tag className="h-4 w-4" />
            <span>Labels</span>
          </div>
          <div className="flex-1 ml-4">
            <LabelSelector
              selectedLabels={labels}
              onChange={onLabelsUpdate || (() => {})}
              disabled={false}
            />
          </div>
        </div>

        {/* Tag - TaskMasterTask doesn't have tagId */}
        {false && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Hash className="h-4 w-4" />
              <span>Tag</span>
            </div>
            <Badge variant="outline">Tag ID: N/A</Badge>
          </div>
        )}

        {/* Due Date */}
        {false && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Due Date</span>
            </div>
            <span className="text-sm">
              {(() => {
                const date = new Date();
                return isNaN(date.getTime()) ? 'Invalid date' : format(date, 'MMM dd, yyyy');
              })()}
            </span>
          </div>
        )}

        {/* Created */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Created</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {/* TaskMasterTask doesn't have createdAt */}
            N/A
          </span>
        </div>

        {/* Updated */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Updated</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {/* TaskMasterTask doesn't have updatedAt */}
            N/A
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsSection;
