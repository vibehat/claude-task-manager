'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { X, GripHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CompactTaskInfo } from './CompactTaskInfo';
import { CompactSubtasks } from './CompactSubtasks';
import { EssentialDetails } from './EssentialDetails';
import type { TaskMasterTask } from '@/libs/client/types';

interface TaskDetailDrawerProps {
  task: TaskMasterTask;
  onClose: () => void;
}

/**
 * Mobile slide-up drawer for task details
 * - Covers 85% of screen height
 * - Swipe-to-dismiss gesture support
 * - Sticky header with close button
 * - Scrollable content area
 */
export const TaskDetailDrawer: React.FC<TaskDetailDrawerProps> = ({ task, onClose }) => {
  const dragConstraints = useRef(null);

  return (
    <motion.div
      ref={dragConstraints}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={{ top: 0, bottom: 0.2 }}
      onDragEnd={(_, info) => {
        // Close drawer if dragged down more than 150px or velocity is high
        if (info.offset.y > 150 || info.velocity.y > 500) {
          onClose();
        }
      }}
      className="fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-xl shadow-2xl border-t"
      style={{ height: '85vh' }}
    >
      {/* Drag Handle */}
      <div className="flex justify-center pt-2 pb-1">
        <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <GripHorizontal className="h-4 w-4 text-muted-foreground" />
          <h2 className="font-semibold text-lg truncate">{task.title}</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 flex-shrink-0">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 overflow-y-auto">
        <div className="space-y-6 py-4 pb-8">
          {/* Task Information */}
          <CompactTaskInfo task={task} variant="mobile" />

          {/* Subtasks */}
          <CompactSubtasks task={task} variant="mobile" />

          {/* Essential Details */}
          <EssentialDetails task={task} variant="mobile" />
        </div>
      </div>

      {/* Quick Actions Footer */}
      <div className="px-4 py-3 border-t bg-background/95 backdrop-blur-sm">
        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => {
              // TODO: Implement task completion
              onClose();
            }}
          >
            Mark Complete
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // TODO: Implement quick edit
              onClose();
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskDetailDrawer;
