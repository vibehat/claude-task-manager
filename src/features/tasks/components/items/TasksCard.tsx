'use client';

import type { Task } from '@/libs/client/types';
import { format } from 'date-fns';
import { LabelBadge } from '../badges/LabelBadge';
import { PrioritySelector } from '../selectors/PrioritySelector';
import { StatusSelector } from '../selectors/StatusSelector';
import { LabelSelector } from '../selectors/LabelSelector';
import { motion } from 'motion/react';
import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { formatTaskIdForDisplay } from '@/libs/client/utils';
import { useEffect, useRef } from 'react';
import type { DragSourceMonitor } from 'react-dnd';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { ContextMenu, ContextMenuTrigger } from '@/components/ui/ContextMenu';
import { TaskContextMenu } from './TaskContextMenu';

export const TaskDragType = 'TASK';

export function TasksCard({
   task,
   layoutId = true,
}: {
   task: Task;
   layoutId?: boolean;
}): React.JSX.Element {
   const ref = useRef<HTMLDivElement>(null);
   const { openPanel } = useTaskSidePanelStore();
   const { updateTask, getStatusById, getPriorityById, getLabelById } = useDataStore();

   const handleLabelChange = async (labelIds: string[]): Promise<void> => {
      try {
         await updateTask(task.id, { labelIds });
      } catch (error) {
         console.error('Failed to update task labels:', error);
      }
   };

   // Get related data
   const status = getStatusById(task.statusId);
   const priority = task.priorityId ? getPriorityById(task.priorityId) : null;
   const labels = task.labelIds
      .map((id) => {
         const label = getLabelById(id);
         return label ? { id, label } : null;
      })
      .filter(Boolean);

   // Set up drag functionality.
   const [{ isDragging }, drag, preview] = useDrag(() => ({
      type: TaskDragType,
      item: task,
      collect: (monitor: DragSourceMonitor): { isDragging: boolean } => ({
         isDragging: monitor.isDragging(),
      }),
   }));

   // Use empty image as drag preview (we'll create a custom one with DragLayer)
   useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
   }, [preview]);

   // Set up drop functionality.
   const [, drop] = useDrop(() => ({
      accept: TaskDragType,
   }));

   // Connect drag and drop to the element.
   drag(drop(ref));

   return (
      <ContextMenu>
         <ContextMenuTrigger asChild>
            <motion.div
               ref={ref}
               {...(layoutId && { layoutId: `task-card-${task.id}` })}
               className="w-full p-3 bg-background rounded-md shadow-xs border border-border/50 cursor-default hover:bg-sidebar/50 group"
               style={{
                  opacity: isDragging ? 0.5 : 1,
                  cursor: isDragging ? 'grabbing' : 'default',
               }}
            >
               {/* Header with priority, ID, and status */}
               <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                     <span className="text-xs text-muted-foreground font-medium">
                        {formatTaskIdForDisplay(task.id)}
                     </span>
                     <div onClick={(e) => e.stopPropagation()}>
                        <PrioritySelector priority={priority} taskId={task.id} />
                     </div>
                  </div>
                  <div onClick={(e) => e.stopPropagation()}>
                     <StatusSelector status={status} taskId={task.id} />
                  </div>
               </div>

               {/* Title and Description - clickable to open panel */}
               <button
                  className="w-full text-left mb-3 hover:text-white transition-all cursor-pointer group/content"
                  onClick={(e) => {
                     e.stopPropagation();
                     e.preventDefault();
                     openPanel(task);
                  }}
               >
                  <h3 className="text-sm font-semibold mb-1 line-clamp-2 group-hover/content:underline">
                     {task.title}
                  </h3>
                  {task.description && (
                     <p className="text-xs text-muted-foreground line-clamp-3">
                        {task.description}
                     </p>
                  )}
               </button>

               {/* Footer with date and labels */}
               <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-xs text-muted-foreground">
                     {format(new Date(task.createdAt), 'MMM dd')}
                  </span>

                  {/* Labels section */}
                  <div className="flex items-center gap-1">
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
                     {labels.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                           <LabelBadge labels={labels} />
                        </div>
                     )}
                  </div>
               </div>
            </motion.div>
         </ContextMenuTrigger>
         <TaskContextMenu taskId={task.id} task={task} />
      </ContextMenu>
   );
}

export default TasksCard;
