'use client';

import type { TaskMasterTask } from '@/libs/client/types';
import { format } from 'date-fns';
import { LabelBadge } from '../badges/LabelBadge';
import { PrioritySelector } from '../selectors/PrioritySelector';
import { StatusSelector } from '../selectors/StatusSelector';
import { LabelSelector } from '../selectors/LabelSelector';
import { motion } from 'motion/react';
import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { formatTaskIdForDisplay } from '@/libs/client/utils';

import { ContextMenu, ContextMenuTrigger } from '@/components/ui/ContextMenu';
import { TaskContextMenu } from './TaskContextMenu';

export function TaskLine({
  task,
  layoutId = false,
}: {
  task: TaskMasterTask;
  layoutId?: boolean;
}): React.JSX.Element {
  const { openPanel } = useTaskSidePanelStore();
  const updateTask = useDataStore((state) => state.updateTask);

  const handleLabelChange = async (labelIds: string[]): Promise<void> => {
    try {
      // TODO: TaskMasterTask doesn't have labelIds, needs adaptation
      // await updateTask(task.id, { labelIds });
    } catch (error) {
      console.error('Failed to update task labels:', error);
    }
  };

  // Get related data - TaskMasterTask has status and priority as strings
  const allStatuses = useDataStore((state) => state.allStatuses);
  const allPriorities = useDataStore((state) => state.allPriorities);

  const status = allStatuses?.find((s) => s.name.toLowerCase() === task.status?.toLowerCase());
  const priority = allPriorities?.find(
    (p) => p.name.toLowerCase() === task.priority?.toLowerCase()
  );

  // TaskMasterTask doesn't have labelIds - empty arrays for now
  const labels: any[] = [];
  const labelData: any[] = [];

  console.log('TaskLine render:', { taskId: task.id, title: task.title });

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <motion.div
          {...(layoutId && { layoutId: `task-line-${task.id}` })}
          //href={`/lndev-ui/task/${task.identifier}`}
          className="w-full flex items-center justify-start h-11 px-6 hover:bg-sidebar/50 group"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono font-medium text-gray-600 w-[66px] truncate shrink-0">
              {formatTaskIdForDisplay(task.id)}
            </span>
            <div onClick={(e) => e.stopPropagation()}>
              <PrioritySelector priority={priority?.name} taskId={String(task.id)} />
            </div>
            <div onClick={(e) => e.stopPropagation()}>
              <StatusSelector status={status} taskId={String(task.id)} />
            </div>
          </div>
          <span className="min-w-0 flex items-center justify-start mr-1 ml-1">
            <button
              className="text-xs sm:text-sm font-medium sm:font-semibold truncate text-left text-foreground hover:text-primary hover:underline transition-all cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                openPanel(task);
              }}
            >
              {task.title}
            </button>
          </span>
          <div className="flex items-center justify-end gap-2 ml-auto sm:w-fit">
            {labels.length === 0 && (
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <LabelSelector selectedLabels={labels} onChange={handleLabelChange} />
              </div>
            )}
            {labelData.length > 0 && (
              <div className="flex items-center gap-1 hidden sm:flex">
                <LabelBadge labels={labelData} />
              </div>
            )}
            <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline-block">
              {/* TaskMasterTask doesn't have createdAt */}
              {task.id}
            </span>
          </div>
        </motion.div>
      </ContextMenuTrigger>
      <TaskContextMenu taskId={String(task.id)} task={task} />
    </ContextMenu>
  );
}

export default TaskLine;
