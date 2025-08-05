'use client';

import type { TaskMasterTask } from '@/libs/client/types';
import type { FC } from 'react';
import GroupTasksList from './GroupTasksList';
import { createMockTagWithColor } from '@/libs/client/utils/tagUtils';
import type { GroupItem } from '../../types/groupTypes';

interface TaskListViewProps {
  groupedTasks: Record<string, TaskMasterTask[]>;
  groups?: GroupItem[];
  loading?: boolean;
  error?: Error | null;
}

const TaskListView: FC<TaskListViewProps> = ({ groupedTasks, groups, loading, error }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-sm text-muted-foreground">Loading tasks...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-sm text-red-500">Error loading tasks: {error.message}</div>
      </div>
    );
  }

  const orderedGroups =
    groups || Object.entries(groupedTasks).map(([key]) => ({ key, label: key }) as GroupItem);

  console.log('TaskListView render:', { orderedGroups, groupedTasks });

  return (
    <div className="w-full h-full">
      {orderedGroups.map((group) => {
        const groupKey = group.key;
        const tasks = groupedTasks[groupKey] || [];
        console.log(`Group ${groupKey}:`, tasks.length, 'tasks');
        if (tasks.length === 0) return null;

        // Create a mock tag for backward compatibility with existing GroupTasksList
        const tag =
          groupKey === 'no-tag'
            ? createMockTagWithColor('no-tag', 'No Tag', '#6b7280')
            : createMockTagWithColor(groupKey, group.label, '#6b7280');

        return <GroupTasksList key={groupKey} tag={tag} tasks={tasks} groupIcon={group.icon} />;
      })}
    </div>
  );
};

export default TaskListView;
