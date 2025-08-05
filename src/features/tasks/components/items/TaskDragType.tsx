'use client';

import type { Task } from '@/libs/client/types';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { format } from 'date-fns';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { DragSourceMonitor } from 'react-dnd';
import { useDrag, useDragLayer, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { PrioritySelector } from '../selectors/PrioritySelector';
import { StatusSelector } from '../selectors/StatusSelector';
import { ContextMenu, ContextMenuTrigger } from '@/components/ui/ContextMenu';
import { TaskContextMenu } from './TaskContextMenu';

export const TaskDragType = 'TASK';

interface TaskGridProps {
  task: Task;
}

// Custom DragLayer component to render the drag preview
function TaskDragPreview({ task }: { task: Task }): React.JSX.Element {
  const priority = useDataStore((state) => state.prioritiesById[task.priorityId]);
  const status = useDataStore((state) => state.statusesById[task.statusId]);

  return (
    <div className="w-full p-3 bg-background rounded-md border border-border/50 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <PrioritySelector priority={priority?.id} taskId={task.id} />
          <span className="text-xs text-muted-foreground font-medium">{task.id}</span>
        </div>
        <StatusSelector status={status} taskId={task.id} />
      </div>

      <h3 className="text-sm font-semibold mb-3 line-clamp-2">{task.title}</h3>

      <div className="flex flex-wrap gap-1.5 mb-3 min-h-[1.5rem]">
        {/* Labels and project badges temporarily removed until GraphQL query includes them */}
      </div>

      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-xs text-muted-foreground">
          {format(new Date(task.createdAt), 'MMM dd')}
        </span>
      </div>
    </div>
  );
}

// Custom DragLayer to show custom preview during drag
export function CustomDragLayer(): React.JSX.Element | null {
  const { itemType, isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || itemType !== TaskDragType || !currentOffset) {
    return <></>;
  }

  return (
    <div
      className="fixed pointer-events-none z-50 left-0 top-0"
      style={{
        transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
        width: '348px', // Match the width of your cards
      }}
    >
      <TaskDragPreview task={item} />
    </div>
  );
}

export function TaskGrid({ task }: TaskGridProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const priority = useDataStore((state) => state.prioritiesById[task.priorityId]);
  const status = useDataStore((state) => state.statusesById[task.statusId]);

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
          className="w-full p-3 bg-background rounded-md shadow-xs border border-border/50 cursor-default"
          layoutId={`task-grid-${task.id}`}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: isDragging ? 'grabbing' : 'default',
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <PrioritySelector priority={priority?.id} taskId={task.id} />
              <span className="text-xs text-muted-foreground font-medium">{task.id}</span>
            </div>
            <StatusSelector status={status} taskId={task.id} />
          </div>
          <h3 className="text-sm font-semibold mb-3 line-clamp-2">{task.title}</h3>
          <div className="flex flex-wrap gap-1.5 mb-3 min-h-[1.5rem]">
            {/* Labels and project badges temporarily removed until GraphQL query includes them */}
          </div>
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-xs text-muted-foreground">
              {format(new Date(task.createdAt), 'MMM dd')}
            </span>
          </div>
        </motion.div>
      </ContextMenuTrigger>
      <TaskContextMenu taskId={task.id} task={task} />
    </ContextMenu>
  );
}

export default TaskGrid;
