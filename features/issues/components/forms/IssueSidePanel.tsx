'use client';

import { Separator } from '@/components/ui/separator';
import { useIssueSidePanelStore } from '@/store/issueSidePanelStore';
import {
   useUpdateIssueMutation,
   useUpdateIssueLabelsMutation,
} from '@/libs/client/graphql-client/generated';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { IssueHeader } from './IssueHeader';
import { IssueTitleEditor } from './IssueTitleEditor';
import { IssueDescriptionSection } from './IssueDescriptionSection';
import { IssueDetailsSection } from './IssueDetailsSection';
import { SubtasksSection } from './SubtasksSection';

export function IssueSidePanel(): React.JSX.Element {
   const {
      isOpen,
      issue,
      panelWidth,
      closePanel,
      updateIssue: updateIssueInStore,
   } = useIssueSidePanelStore();
   const [updateIssue, { loading: updating }] = useUpdateIssueMutation();
   const [updateIssueLabels, { loading: updatingLabels }] = useUpdateIssueLabelsMutation();

   const handleUpdateField = async (
      field: 'title' | 'description',
      value: string
   ): Promise<void> => {
      if (!issue) return;

      try {
         const { data } = await updateIssue({
            variables: {
               where: { id: issue.id },
               data: { [field]: { set: value } },
            },
            refetchQueries: ['GetIssues'],
         });

         // Update the issue in the store with the response
         if (data?.updateOneIssue) {
            updateIssueInStore(data.updateOneIssue);
         }

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
         const connectLabels = labelIds.map((labelId) => ({
            label: { connect: { id: labelId } },
         }));

         const { data } = await updateIssueLabels({
            variables: {
               id: issue.id,
               connectLabels,
            },
            refetchQueries: ['GetIssues'],
         });

         // Update the issue in the store with the response
         if (data?.updateOneIssue) {
            updateIssueInStore(data.updateOneIssue);
         }

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
                     disabled={updating || updatingLabels}
                  />

                  <IssueDescriptionSection
                     initialValue={issue.description || ''}
                     onSave={handleDescriptionUpdate}
                     disabled={updating || updatingLabels}
                  />

                  <Separator />

                  <SubtasksSection
                     issue={issue}
                     onSubtaskUpdate={handleSubtaskUpdate}
                     disabled={updating || updatingLabels}
                  />

                  <Separator />

                  <IssueDetailsSection issue={issue} onLabelsUpdate={handleLabelsUpdate} />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
