'use client';

import type { TaskStatus, Task } from '@/libs/client/types/dataModels';
import { cn } from '@/libs/client/utils';
import { Plus } from 'lucide-react';
import { useMemo } from 'react';
import { useTaskStatusIcon } from '../../hooks/useTaskStatusIcon';
import { Button } from '@/components/ui/button';
import { useCreateTaskStore } from '@/store/createTaskStore';
import { useSortTasksByPriority } from '@/features/tasks/hooks/useSortTasksByPriority';
import { TaskLine } from '../../components/items/TaskLine';

interface GroupTasksListProps {
   status: TaskStatus;
   tasks: Task[];
}

function GroupTasksList({ status, tasks }: GroupTasksListProps): React.JSX.Element {
   const { openModal } = useCreateTaskStore();
   const StatusIcon = useTaskStatusIcon(status);

   // Sort the pre-filtered tasks by priority
   const sortedTasks = useSortTasksByPriority(tasks);
   const count = tasks.length;

   return (
      <div className="bg-container">
         <div className="sticky top-0 z-10 bg-container w-full h-10">
            <div
               className="w-full h-full flex items-center justify-between px-6"
               style={{
                  backgroundColor: `${status.color}08`,
               }}
            >
               <div className="flex items-center gap-2">
                  <StatusIcon className="size-4" />
                  <span className="text-sm font-medium">{status.name}</span>
                  <span className="text-sm text-muted-foreground">{count}</span>
               </div>

               <Button
                  className="size-6"
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                     e.stopPropagation();
                     openModal(status);
                  }}
               >
                  <Plus className="size-4" />
               </Button>
            </div>
         </div>

         <div className="space-y-0">
            {sortedTasks.map((task) => (
               <TaskLine key={task.id} task={task} layoutId={true} />
            ))}
         </div>
      </div>
   );
}

export default GroupTasksList;
