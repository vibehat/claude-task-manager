'use client';

import type { Tag, TaskMasterTask } from '@/libs/client/types';
import type { FC } from 'react';
import { Plus, Tag as TagIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCreateTaskStore } from '@/store/createTaskStore';
import { useSortTasksByPriority } from '@/features/tasks/hooks/useSortTasksByPriority';
import { TaskLine } from '../../components/items/TaskLine';
import { useDataStore } from '@/libs/client/stores';
import { getTagColor } from '@/libs/client/utils/tagUtils';

interface GroupTasksListProps {
  tag: Tag;
  tasks: TaskMasterTask[];
  groupIcon?: FC<React.SVGProps<SVGSVGElement>>;
}

function GroupTasksList({ tag, tasks, groupIcon }: GroupTasksListProps): React.JSX.Element {
  const { openModal } = useCreateTaskStore();
  // TODO: Fix tagExtra property or use alternative approach
  const tagExtra = null;

  // Deduplicate tasks by ID first, then sort by priority
  const uniqueTasks = tasks.filter(
    (task, index, arr) => arr.findIndex((t) => t.id.toString() === task.id.toString()) === index
  );
  const sortedTasks = useSortTasksByPriority(uniqueTasks);
  const count = uniqueTasks.length;

  const tagColor = getTagColor(tag, tagExtra);
  const IconComponent = groupIcon || TagIcon;

  return (
    <div className="bg-container">
      <div className="sticky top-0 z-10 bg-container w-full h-10">
        <div
          className="w-full h-full flex items-center justify-between px-6"
          style={{
            backgroundColor: `${tagColor}08`,
          }}
        >
          <div className="flex items-center gap-2">
            <IconComponent className="size-4" />
            <span className="text-sm font-medium">{tag.name}</span>
            <span className="text-sm text-muted-foreground">{count}</span>
          </div>

          <Button
            className="size-6"
            size="icon"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              openModal(undefined, tag);
            }}
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-0">
        {sortedTasks.length > 0 ? (
          sortedTasks.map((task) => <TaskLine key={task.id} task={task} layoutId={true} />)
        ) : (
          <div className="flex items-center justify-center h-32">
            <span className="text-sm text-muted-foreground">No tasks in this tag</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default GroupTasksList;
