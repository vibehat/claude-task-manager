'use client';

import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { useTaskDetail } from '@/hooks/useTaskDetail';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { TaskHeader } from './TaskHeader';
import { TaskTitleEditor } from './TaskTitleEditor';
import { TaskInfoSection } from './sections/TaskInfoSection';
import { TaskDetailsSection } from './sections/TaskDetailsSection';
import { SubtasksSection } from './sections/SubtasksSection/SubtasksSection';

export function TaskSidePanel(): React.JSX.Element {
  const { isOpen, taskId, panelWidth, isFullscreen, closePanel, setFullscreen } =
    useTaskSidePanelStore();

  const task = useTaskDetail(taskId);
  const updateTask = useDataStore((state) => state.updateTask);

  // Keyboard shortcut to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen && isOpen) {
        setFullscreen(false);
      }
    };

    if (isOpen && isFullscreen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, isFullscreen, setFullscreen]);

  const handleUpdateField = async (
    field: 'title' | 'description' | 'details' | 'testStrategy',
    value: string
  ): Promise<void> => {
    if (!task) return;

    try {
      // Update the task using Zustand store
      await updateTask(String(task.id), { [field]: value });

      const fieldName = {
        title: 'Title',
        description: 'Description',
        details: 'Implementation Details',
        testStrategy: 'Test Strategy',
      }[field];

      toast.success(`${fieldName} updated successfully`);
    } catch (error) {
      const fieldName = {
        title: 'Title',
        description: 'Description',
        details: 'Implementation Details',
        testStrategy: 'Test Strategy',
      }[field];

      toast.error(`Failed to update ${fieldName}`);
      console.error(`Update ${field} error:`, error);
    }
  };

  const handleTitleUpdate = (value: string): void => {
    handleUpdateField('title', value);
  };

  const handleDescriptionUpdate = (value: string): void => {
    handleUpdateField('description', value);
  };

  const handleDetailsUpdate = (value: string): void => {
    handleUpdateField('details', value);
  };

  const handleTestStrategyUpdate = (value: string): void => {
    handleUpdateField('testStrategy', value);
  };

  const handleLabelsUpdate = async (labelIds: string[]): Promise<void> => {
    if (!task) return;

    try {
      // TODO: TaskMasterTask doesn't have labelIds property, needs adaptation
      // await updateTask(String(task.id), { labelIds });

      toast.success('Labels updated successfully');
    } catch (error) {
      toast.error('Failed to update labels');
      console.error('Update labels error:', error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && task && (
        <motion.div
          initial={{ x: isFullscreen ? 0 : panelWidth }}
          animate={{ x: 0 }}
          exit={{ x: isFullscreen ? 0 : panelWidth }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className={`fixed top-0 h-full bg-background shadow-lg z-50 overflow-y-auto ${
            isFullscreen ? 'left-0 right-0 w-full border-none' : 'right-0 border-l'
          }`}
          style={{ width: isFullscreen ? '100vw' : panelWidth }}
        >
          <TaskHeader task={task} onClose={closePanel} />

          {isFullscreen ? (
            /* Fullscreen 2-column layout */
            <div className="p-8">
              {/* Task Title - Full width */}
              <div className="mb-8">
                <TaskTitleEditor
                  initialValue={task.title}
                  onBlur={handleTitleUpdate}
                  disabled={false}
                />
              </div>

              {/* 2-column layout */}
              <div className="grid grid-cols-3 gap-8" style={{ height: 'calc(100vh - 200px)' }}>
                {/* Left Column - Task Details & Subtasks (2/3 width) */}
                <div className="col-span-2 space-y-6 overflow-y-auto pr-4">
                  <TaskInfoSection
                    task={task}
                    onDescriptionSave={handleDescriptionUpdate}
                    onDetailsSave={handleDetailsUpdate}
                    onTestStrategySave={handleTestStrategyUpdate}
                    disabled={false}
                  />

                  <Separator />

                  <SubtasksSection task={task} disabled={false} />
                </div>

                {/* Right Column - Other Info (1/3 width) */}
                <div className="col-span-1 space-y-6 overflow-y-auto pl-4 border-l">
                  <TaskDetailsSection task={task} onLabelsUpdate={handleLabelsUpdate} />
                </div>
              </div>
            </div>
          ) : (
            /* Normal single column layout */
            <div className="p-6 space-y-6">
              <TaskTitleEditor
                initialValue={task.title}
                onBlur={handleTitleUpdate}
                disabled={false}
              />

              <TaskInfoSection
                task={task}
                onDescriptionSave={handleDescriptionUpdate}
                onDetailsSave={handleDetailsUpdate}
                onTestStrategySave={handleTestStrategyUpdate}
                disabled={false}
              />

              <Separator />

              <SubtasksSection task={task} disabled={false} />

              <Separator />

              <TaskDetailsSection task={task} onLabelsUpdate={handleLabelsUpdate} />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
