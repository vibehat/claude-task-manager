'use client';

import type { Issue } from '@/libs/client/types';
import { format } from 'date-fns';
import { AssigneeUser } from '../AssigneeUser';
import { LabelBadge } from '../badges/LabelBadge';
import { PrioritySelector } from '../selectors/PrioritySelector';
import { StatusSelector } from '../selectors/StatusSelector';
import { LabelSelector } from '../selectors/LabelSelector';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useIssueSidePanelStore } from '@/store/issueSidePanelStore';
import { useDataStore } from '@/libs/client/stores/dataStore';

import { ContextMenu, ContextMenuTrigger } from '@/components/ui/ContextMenu';
import { IssueContextMenu } from './IssueContextMenu';

export function IssueLine({
   issue,
   layoutId = false,
}: {
   issue: Issue;
   layoutId?: boolean;
}): React.JSX.Element {
   const { openPanel } = useIssueSidePanelStore();
   const { updateIssue, getUserById, getStatusById, getPriorityById, getLabelById } =
      useDataStore();

   const handleLabelChange = async (labelIds: string[]): Promise<void> => {
      try {
         await updateIssue(issue.id, { labelIds });
      } catch (error) {
         console.error('Failed to update issue labels:', error);
      }
   };

   // Get related data
   const assignee = issue.assigneeId ? getUserById(issue.assigneeId) : null;
   const status = getStatusById(issue.statusId);
   const priority = issue.priorityId ? getPriorityById(issue.priorityId) : null;
   const labels = issue.labelIds
      .map((id) => {
         const label = getLabelById(id);
         return label ? { id, label } : null;
      })
      .filter(Boolean);
   return (
      <ContextMenu>
         <ContextMenuTrigger asChild>
            <motion.div
               {...(layoutId && { layoutId: `issue-line-${issue.id}` })}
               //href={`/lndev-ui/issue/${issue.identifier}`}
               className="w-full flex items-center justify-start h-11 px-6 hover:bg-sidebar/50 group"
            >
               <div className="flex items-center gap-0.5">
                  <div onClick={(e) => e.stopPropagation()}>
                     <PrioritySelector priority={priority} issueId={issue.id} />
                  </div>
                  <span className="text-sm hidden sm:inline-block text-muted-foreground font-medium w-[66px] truncate shrink-0 mr-0.5">
                     {issue.id}
                  </span>
                  <div onClick={(e) => e.stopPropagation()}>
                     <StatusSelector status={status} issueId={issue.id} />
                  </div>
               </div>
               <span className="min-w-0 flex items-center justify-start mr-1 ml-0.5">
                  <button
                     className="text-xs sm:text-sm font-medium sm:font-semibold truncate text-left hover:text-white hover:underline transition-all cursor-pointer"
                     onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        openPanel(issue);
                     }}
                  >
                     {issue.title}
                  </button>
               </span>
               <div className="flex items-center justify-end gap-2 ml-auto sm:w-fit">
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
                     <div className="flex items-center gap-1 hidden sm:flex">
                        <LabelBadge labels={labels} />
                     </div>
                  )}
                  <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline-block">
                     {format(new Date(issue.createdAt), 'MMM dd')}
                  </span>
                  <AssigneeUser user={assignee} />
               </div>
            </motion.div>
         </ContextMenuTrigger>
         <IssueContextMenu issueId={issue.id} issue={issue} />
      </ContextMenu>
   );
}

export default IssueLine;
