'use client';

import type { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GroupTasksGrid from './GroupTasksGrid';
import { cn } from '@/libs/client/utils';
import { CustomDragLayer } from '../../components/items/TaskDragType';
import type { TaskStatus, Task } from '@/libs/client/types';
import { useTasksFilterStore } from '../../store/taskFilterStore';

type TaskStatusFromQuery = TaskStatus;

interface TaskGridViewProps {
   statuses: TaskStatusFromQuery[];
   groupedTasks: Map<string, Task[]>;
}

const TaskGridView: FC<TaskGridViewProps> = ({ statuses, groupedTasks }) => {
   const { where } = useTasksFilterStore();

   return (
      <div className={cn('w-full h-full overflow-x-auto')}>
         <DndProvider backend={HTML5Backend}>
            <CustomDragLayer />
            <div className={cn('flex h-full gap-3 px-2 py-2 min-w-max')}>
               {statuses.map((status) => {
                  const statusTasks = groupedTasks.get(status.id) || [];
                  return (
                     <GroupTasksGrid
                        key={status.id}
                        status={status}
                        tasks={statusTasks}
                        additionalFilter={where}
                     />
                  );
               })}
            </div>
         </DndProvider>
      </div>
   );
};

export default TaskGridView;
