'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CompactTaskInfo } from './CompactTaskInfo';
import { CompactSubtasks } from './CompactSubtasks';
import { EssentialDetails } from './EssentialDetails';
import type { TaskMasterTask } from '@/libs/client/types';

interface TaskDetailSidePanelProps {
  task: TaskMasterTask;
  onClose: () => void;
  embedded?: boolean; // When used inside fullscreen focus mode
}

/**
 * Desktop right-side panel for task details
 * - Fixed positioning from right edge
 * - Resizable width (400-600px) with localStorage persistence
 * - Backdrop blur for focus
 */
export const TaskDetailSidePanel: React.FC<TaskDetailSidePanelProps> = ({
  task,
  onClose,
  embedded = false,
}) => {
  const [panelWidth, setPanelWidth] = useState(500);
  const [isResizing, setIsResizing] = useState(false);

  // Load panel width from localStorage
  useEffect(() => {
    const savedWidth = localStorage.getItem('working-on-detail-panel-width');
    if (savedWidth) {
      const width = parseInt(savedWidth, 10);
      if (width >= 400 && width <= 600) {
        setPanelWidth(width);
      }
    }
  }, []);

  // Save panel width to localStorage
  const savePanelWidth = (width: number) => {
    localStorage.setItem('working-on-detail-panel-width', width.toString());
  };

  // Handle panel resizing
  const handleMouseDown = (e: React.MouseEvent) => {
    if (embedded) return; // No resizing in embedded mode

    setIsResizing(true);
    const startX = e.clientX;
    const startWidth = panelWidth;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = startX - e.clientX;
      const newWidth = Math.min(600, Math.max(400, startWidth + deltaX));
      setPanelWidth(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      savePanelWidth(panelWidth);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  if (embedded) {
    // Embedded mode for focus mode fullscreen
    return (
      <div className="space-y-6">
        <CompactTaskInfo task={task} variant="desktop" />
        <Separator />
        <CompactSubtasks task={task} variant="desktop" />
        <Separator />
        <EssentialDetails task={task} variant="desktop" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ x: panelWidth }}
      animate={{ x: 0 }}
      exit={{ x: panelWidth }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="fixed top-0 right-0 h-full bg-background shadow-2xl border-l z-50 flex"
      style={{ width: panelWidth }}
    >
      {/* Resize Handle */}
      <div
        className={`w-1 bg-border hover:bg-primary/20 cursor-col-resize transition-colors ${
          isResizing ? 'bg-primary/40' : ''
        }`}
        onMouseDown={handleMouseDown}
      />

      {/* Panel Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-background sticky top-0 z-10">
          <div className="flex items-center gap-2 min-w-0">
            <h2 className="font-semibold text-lg truncate">{task.title}</h2>
            <span className="text-sm text-muted-foreground flex-shrink-0">#{task.id}</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              title="Maximize"
              onClick={() => {
                // TODO: Implement fullscreen toggle
              }}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            {/* Task Information */}
            <CompactTaskInfo task={task} variant="desktop" />

            <Separator />

            {/* Subtasks */}
            <CompactSubtasks task={task} variant="desktop" />

            <Separator />

            {/* Essential Details */}
            <EssentialDetails task={task} variant="desktop" />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t bg-muted/20">
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
                // TODO: Implement task switching
              }}
            >
              Switch Task
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskDetailSidePanel;
