'use client';

import { Separator } from '@/components/ui/separator';
import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { TaskHeader } from './TaskHeader';
import { TaskTitleEditor } from './TaskTitleEditor';
import { TaskDescriptionSection } from './sections/TaskDescriptionSection';
import { TaskDetailsSection } from './sections/TaskDetailsSection';
import { SubtasksSection } from './sections/SubtasksSection';
export function TaskSidePanel(): React.JSX.Element {
   const {
      isOpen,
      task,
      panelWidth,
      closePanel,
      updateTask: updateTaskInStore,
   } = useTaskSidePanelStore();
   const { updateTask } = useDataStore();

   const handleUpdateField = async (
      field: 'title' | 'description',
      value: string
   ): Promise<void> => {
      if (!task) return;

      try {
         // Update the task using Zustand store
         await updateTask(task.id, { [field]: value });

         // Update the task in the side panel store with the updated value
         updateTaskInStore({ ...task, [field]: value });

         toast.success(`${field === 'title' ? 'Title' : 'Description'} updated successfully`);
      } catch (error) {
         toast.error(`Failed to update ${field}`);
         console.error(`Update ${field} error:`, error);
      }
   };

   const handleTitleUpdate = (value: string): void => {
      handleUpdateField('title', value);
   };

   const handleDescriptionUpdate = (value: string): void => {
      handleUpdateField('description', value);
   };

   const handleSubtaskUpdate = (subtaskId: string, description: string): void => {
      // For now, just show a toast since we'd need a separate mutation for subtasks
      // This could be extended to call a subtask update mutation
      toast.info(`Subtask ${subtaskId} update requested`);
      console.log(`Updating subtask ${subtaskId} with description:`, description);
   };

   const handleLabelsUpdate = async (labelIds: string[]): Promise<void> => {
      if (!task) return;

      try {
         // Update the task using Zustand store
         await updateTask(task.id, { labelIds });

         // Update the task in the side panel store with the updated labels
         updateTaskInStore({ ...task, labelIds });

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

                  <TaskDescriptionSection
                     initialValue={task.description || ''}
                     onSave={handleDescriptionUpdate}
                     disabled={false}
                  />

                  <Separator />

                  <SubtasksSection
                     task={task}
                     onSubtaskUpdate={handleSubtaskUpdate}
                     disabled={false}
                  />

                  <Separator />

                  <TaskDetailsSection task={task} onLabelsUpdate={handleLabelsUpdate} />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
