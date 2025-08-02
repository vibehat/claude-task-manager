'use client';

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
   const { isOpen, taskId, panelWidth, closePanel } = useTaskSidePanelStore();

   const task = useTaskDetail(taskId);
   const { updateTask } = useDataStore();

   const handleUpdateField = async (
      field: 'title' | 'description' | 'details' | 'testStrategy',
      value: string
   ): Promise<void> => {
      if (!task) return;

      try {
         // Update the task using Zustand store
         await updateTask(task.id, { [field]: value });

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
         // Update the task using Zustand store
         await updateTask(task.id, { labelIds });

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
               initial={{ x: panelWidth }}
               animate={{ x: 0 }}
               exit={{ x: panelWidth }}
               transition={{ type: 'spring', damping: 30, stiffness: 300 }}
               className="fixed top-0 right-0 h-full bg-background border-l shadow-lg z-50 overflow-y-auto"
               style={{ width: panelWidth }}
            >
               <TaskHeader task={task} onClose={closePanel} />

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
            </motion.div>
         )}
      </AnimatePresence>
   );
}
