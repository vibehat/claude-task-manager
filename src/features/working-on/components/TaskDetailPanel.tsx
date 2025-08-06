'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { TaskDetailDrawer } from './details/TaskDetailDrawer';
import { TaskDetailSidePanel } from './details/TaskDetailSidePanel';
import type { TaskMasterTask } from '@/libs/client/types';

interface TaskDetailPanelProps {
  task: TaskMasterTask;
  isOpen: boolean;
  onClose: () => void;
  focusMode?: boolean;
}

/**
 * Main TaskDetailPanel component that provides responsive detailed task view
 * - Mobile: Slide-up drawer covering 85% of screen
 * - Desktop: Right-side panel (400-600px width)
 * - Focus Mode: Fullscreen overlay maintaining distraction-free philosophy
 */
export const TaskDetailPanel: React.FC<TaskDetailPanelProps> = ({
  task,
  isOpen,
  onClose,
  focusMode = false,
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Determine panel variant based on screen size and focus mode
  const panelVariant = focusMode ? 'fullscreen' : isMobile ? 'drawer' : 'panel';

  // Handle escape key to close panel
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  // Prevent body scroll when panel is open on mobile
  useEffect(() => {
    if (isOpen && (isMobile || focusMode)) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, isMobile, focusMode]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for desktop and focus mode */}
          {(panelVariant === 'panel' || panelVariant === 'fullscreen') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className={`fixed inset-0 z-40 ${
                panelVariant === 'fullscreen'
                  ? 'bg-background/95 backdrop-blur-sm'
                  : 'bg-black/20 backdrop-blur-sm'
              }`}
            />
          )}

          {/* Panel Content */}
          {panelVariant === 'drawer' && <TaskDetailDrawer task={task} onClose={onClose} />}

          {panelVariant === 'panel' && <TaskDetailSidePanel task={task} onClose={onClose} />}

          {panelVariant === 'fullscreen' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="w-full max-w-6xl max-h-full bg-background rounded-lg shadow-2xl border overflow-hidden">
                {/* Focus mode header */}
                <div className="flex items-center justify-between p-4 border-b bg-muted/30">
                  <div className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    <h2 className="font-semibold">Task Details</h2>
                    <span className="text-sm text-muted-foreground">#{task.id}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Focus mode content */}
                <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
                  <TaskDetailSidePanel task={task} onClose={onClose} embedded={true} />
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default TaskDetailPanel;
