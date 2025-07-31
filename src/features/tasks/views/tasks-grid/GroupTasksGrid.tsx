'use client';

import type { Task, TaskStatus, TaskWhereInput } from '@/libs/client/types';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { Plus } from 'lucide-react';
import type { FC } from 'react';
import { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Button } from '@/components/ui/button';
import { useCreateTaskStore } from '@/store/createTaskStore';
import { useSortTasksByPriority } from '@/features/tasks/hooks/useSortTasksByPriority';
import { useEdges } from '@/hooks/useEdges';
import { AnimatePresence, motion } from 'motion/react';
import TaskGrid, { TaskDragType } from '../../components/items/TaskDragType';
import { useTaskStatusIcon } from '../../hooks/useTaskStatusIcon';
import { EmptyStatusColumn } from '@/components/empty-states/EmptyStatusColumn';

type TaskStatusFromQuery = TaskStatus;
type TaskFromQuery = Task;

interface GroupTasksGridProps {
   status: TaskStatusFromQuery;
   tasks: TaskFromQuery[];
   additionalFilter?: TaskWhereInput;
}

function GroupTasksGrid({
   status,
   tasks,
   additionalFilter,
}: GroupTasksGridProps): React.JSX.Element {
   const { openModal } = useCreateTaskStore();
   const StatusIcon = useTaskStatusIcon(status);

   // Use the pre-filtered issues passed as props
   const loading = false;
   const error = null;
   const count = tasks.length;

   // Show loading state for this status
   if (loading) {
      return (
         <div className="overflow-hidden rounded-md h-full flex-shrink-0 w-[348px] flex flex-col bg-container">
            <div className="sticky top-0 z-10 bg-container w-full rounded-t-md h-[50px]">
               <div
                  className="w-full h-full flex items-center justify-between px-3"
                  style={{
                     backgroundColor: `${status.color}10`,
                  }}
               >
                  <div className="flex items-center gap-2">
                     <StatusIcon />
                     <span className="text-sm font-medium">{status.name}</span>
                     <span className="text-sm text-muted-foreground">...</span>
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-center h-32">
               <div className="text-xs text-muted-foreground">Loading...</div>
            </div>
         </div>
      );
   }

   // Show error state for this status
   if (error) {
      return (
         <div className="overflow-hidden rounded-md h-full flex-shrink-0 w-[348px] flex flex-col bg-container">
            <div className="sticky top-0 z-10 bg-container w-full rounded-t-md h-[50px]">
               <div
                  className="w-full h-full flex items-center justify-between px-3"
                  style={{
                     backgroundColor: `${status.color}10`,
                  }}
               >
                  <div className="flex items-center gap-2">
                     <StatusIcon />
                     <span className="text-sm font-medium">{status.name}</span>
                     <span className="text-sm text-red-500">Error</span>
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-center h-32">
               <div className="text-xs text-red-500">Failed to load</div>
            </div>
         </div>
      );
   }

   return (
      <div className="overflow-hidden rounded-md h-full flex-shrink-0 w-[348px] flex flex-col bg-container">
         <div className="sticky top-0 z-10 bg-container w-full rounded-t-md h-[50px]">
            <div
               className="w-full h-full flex items-center justify-between px-3"
               style={{
                  backgroundColor: `${status.color}10`,
               }}
            >
               <div className="flex items-center gap-2">
                  <StatusIcon />
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

         <TaskGridList tasks={tasks} status={status} />
      </div>
   );
}

const TaskGridList: FC<{ tasks: TaskFromQuery[]; status: TaskStatusFromQuery }> = ({
   tasks,
   status,
}): React.JSX.Element => {
   const ref = useRef<HTMLDivElement>(null);
   const { updateTask } = useDataStore();

   // Set up drop functionality to accept only task items.
   const [{ isOver }, drop] = useDrop(() => ({
      accept: TaskDragType,
      drop(item: TaskFromQuery, monitor): void {
         if (monitor.didDrop() && item.statusId !== status.id) {
            updateTask(item.id, {
               statusId: status.id,
            });
         }
      },
      collect: (monitor): { isOver: boolean } => ({
         isOver: !!monitor.isOver(),
      }),
   }));
   drop(ref);

   const sortedTasks = useSortTasksByPriority(tasks || []);

   return (
      <div
         ref={ref}
         className="flex-1 h-full overflow-y-auto p-2 space-y-2 bg-zinc-50/50 dark:bg-zinc-900/50 relative"
      >
         <AnimatePresence>
            {isOver && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="fixed top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center pointer-events-none bg-background/90"
                  style={{
                     width: ref.current?.getBoundingClientRect().width ?? '100%',
                     height: ref.current?.getBoundingClientRect().height ?? '100%',
                     transform: `translate(${ref.current?.getBoundingClientRect().left ?? 0}px, ${ref.current?.getBoundingClientRect().top ?? 0}px)`,
                  }}
               >
                  <div className="bg-background border border-border rounded-md p-3 shadow-md max-w-[90%]">
                     <p className="text-sm font-medium text-center">Board ordered by priority</p>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
         {sortedTasks.length > 0 ? (
            sortedTasks.map((task) => <TaskGrid key={task.id} task={task} />)
         ) : (
            <EmptyStatusColumn status={status} variant="grid" />
         )}
      </div>
   );
};

export default GroupTasksGrid;
