'use client';

import type { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GroupTasksGrid from './GroupTasksGrid';
import { cn } from '@/libs/client/utils';
import { CustomDragLayer } from '../../components/items/TaskDragType';
import type { TaskMasterTask } from '@/libs/client/types';
import { useTasksFilterStore } from '../../store/taskFilterStore';
import { createMockTagWithColor } from '@/libs/client/utils/tagUtils';
import type { GroupItem } from '../../types/groupTypes';

interface TaskGridViewProps {
  groupedTasks: Record<string, TaskMasterTask[]>;
  groups?: GroupItem[];
}

const TaskGridView: FC<TaskGridViewProps> = ({ groupedTasks, groups }) => {
  const { where } = useTasksFilterStore();

  const orderedGroups =
    groups || Object.entries(groupedTasks).map(([key]) => ({ key, label: key }) as GroupItem);

  return (
    <div className={cn('w-full h-full overflow-x-auto')}>
      <DndProvider backend={HTML5Backend}>
        <CustomDragLayer />
        <div className={cn('flex h-full gap-3 px-2 py-2 min-w-max')}>
          {orderedGroups.map((group) => {
            const groupKey = group.key;
            const tasks = groupedTasks[groupKey] || [];
            if (tasks.length === 0) return null;

            // Create a mock tag for the group
            const tag =
              groupKey === 'no-tag'
                ? createMockTagWithColor('no-tag', 'No Tag', '#6b7280')
                : createMockTagWithColor(groupKey, group.label, '#6b7280');

            return (
              <GroupTasksGrid
                key={groupKey}
                tag={tag}
                tasks={tasks}
                additionalFilter={where}
                groupIcon={group.icon}
              />
            );
          })}
        </div>
      </DndProvider>
    </div>
  );
};

export default TaskGridView;
