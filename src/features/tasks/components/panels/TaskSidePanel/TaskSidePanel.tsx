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
      if (!issue) return;

      try {
         // Update the issue using Zustand store
         await updateIssue(issue.id, { [field]: value });

         // Update the issue in the side panel store with the updated value
         updateIssueInStore({ ...issue, [field]: value });

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
      if (!issue) return;

      try {
         // Update the issue using Zustand store
         await updateIssue(issue.id, { labelIds });

         // Update the issue in the side panel store with the updated labels
         updateIssueInStore({ ...issue, labelIds });

         toast.success('Labels updated successfully');
      } catch (error) {
         toast.error('Failed to update labels');
         console.error('Update labels error:', error);
      }
   };

   return (
      <AnimatePresence>
         {isOpen && issue && (
            <motion.div
               initial={{ x: panelWidth }}
               animate={{ x: 0 }}
               exit={{ x: panelWidth }}
               transition={{ type: 'spring', damping: 30, stiffness: 300 }}
               className="fixed top-0 right-0 h-full bg-background border-l shadow-lg z-50 overflow-y-auto"
               style={{ width: panelWidth }}
            >
               <IssueHeader issue={issue} onClose={closePanel} />

               <div className="p-6 space-y-6">
                  <IssueTitleEditor
                     initialValue={issue.title}
                     onBlur={handleTitleUpdate}
                     disabled={false}
                  />

                  <IssueDescriptionSection
                     initialValue={issue.description || ''}
                     onSave={handleDescriptionUpdate}
                     disabled={false}
                  />

                  <Separator />

                  <SubtasksSection
                     issue={issue}
                     onSubtaskUpdate={handleSubtaskUpdate}
                     disabled={false}
                  />

                  <Separator />

                  <SubIssuesSection issue={issue} disabled={false} />

                  <Separator />

                  <IssueDetailsSection issue={issue} onLabelsUpdate={handleLabelsUpdate} />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
