'use client';

import type { TaskStatus, Task } from '@/libs/client/types/dataModels';
import type { FC } from 'react';
import GroupTasksList from './GroupTasksList';

interface TaskListViewProps {
   statuses: TaskStatus[];
   groupedTasks: Map<string, Task[]>;
   loading?: boolean;
   error?: Error | null;
}

const TaskListView: FC<TaskListViewProps> = ({ statuses, groupedTasks, loading, error }) => {
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

   return (
      <div className="w-full h-full">
         {statuses.map((status) => {
            const statusTasks = groupedTasks.get(status.id) || [];
            return <GroupTasksList key={status.id} status={status} tasks={statusTasks} />;
         })}
      </div>
   );
};

export default TaskListView;
