'use client';

import type { GetIssuesQuery } from '@/libs/client/graphql-client/generated';
import { format } from 'date-fns';
import { AssigneeUser } from '../AssigneeUser';
import { LabelBadge } from '../badges/LabelBadge';
import { PrioritySelector } from '../selectors/PrioritySelector';
import { StatusSelector } from '../selectors/StatusSelector';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useIssueSidePanelStore } from '@/store/issueSidePanelStore';

import { ContextMenu, ContextMenuTrigger } from '@/components/ui/ContextMenu';
import { IssueContextMenu } from './IssueContextMenu';

type IssueFromQuery = GetIssuesQuery['issues'][0];

export function IssueLine({
   issue,
   layoutId = false,
}: {
   issue: IssueFromQuery;
   layoutId?: boolean;
}): React.JSX.Element {
   const { openPanel } = useIssueSidePanelStore();
   return (
      <ContextMenu>
         <ContextMenuTrigger asChild>
            <motion.div
               {...(layoutId && { layoutId: `issue-line-${issue.identifier}` })}
               //href={`/lndev-ui/issue/${issue.identifier}`}
               className="w-full flex items-center justify-start h-11 px-6 hover:bg-sidebar/50 group"
            >
               <div className="flex items-center gap-0.5">
                  <PrioritySelector priority={issue.issuePriority} issueId={issue.id} />
                  <span className="text-sm hidden sm:inline-block text-muted-foreground font-medium w-[66px] truncate shrink-0 mr-0.5">
                     {issue.identifier}
                  </span>
                  <StatusSelector status={issue.issueStatus} issueId={issue.id} />
               </div>
               <span className="min-w-0 flex items-center justify-start mr-1 ml-0.5">
                  <button
                     className="text-xs sm:text-sm font-medium sm:font-semibold truncate text-left hover:text-blue-600 transition-colors cursor-pointer"
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
                  <Button
                     size="icon"
                     variant="ghost"
                     className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
                     onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        openPanel(issue);
                     }}
                  >
                     <Pencil className="h-3 w-3" />
                  </Button>
                  {issue.labels && issue.labels.length > 0 && (
                     <div className="flex items-center gap-1 hidden sm:flex">
                        <LabelBadge labels={issue.labels} />
                     </div>
                  )}
                  <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline-block">
                     {format(new Date(issue.createdAt), 'MMM dd')}
                  </span>
                  <AssigneeUser user={issue.assignee} />
               </div>
            </motion.div>
         </ContextMenuTrigger>
         <IssueContextMenu issueId={issue.id} issue={issue} />
      </ContextMenu>
   );
}

export default IssueLine;
