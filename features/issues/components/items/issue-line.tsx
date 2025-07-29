'use client';

import type { GetIssuesQuery } from '@/libs/client/graphql-client/generated';
import { format } from 'date-fns';
import { AssigneeUser } from '../assignee-user';
import { LabelBadge } from '../badges/label-badge';
import { PrioritySelector } from '../selectors/priority-selector';
import { ProjectBadge } from '../badges/project-badge';
import { StatusSelector } from '../selectors/status-selector';
import { motion } from 'motion/react';

import { ContextMenu, ContextMenuTrigger } from '@/components/ui/context-menu';
import { IssueContextMenu } from './issue-context-menu';

type IssueFromQuery = GetIssuesQuery['issues'][0];

export function IssueLine({
   issue,
   layoutId = false,
}: {
   issue: IssueFromQuery;
   layoutId?: boolean;
}): React.JSX.Element {
   return (
      <ContextMenu>
         <ContextMenuTrigger asChild>
            <motion.div
               {...(layoutId && { layoutId: `issue-line-${issue.identifier}` })}
               //href={`/lndev-ui/issue/${issue.identifier}`}
               className="w-full flex items-center justify-start h-11 px-6 hover:bg-sidebar/50"
            >
               <div className="flex items-center gap-0.5">
                  <PrioritySelector priority={issue.issuePriority} issueId={issue.id} />
                  <span className="text-sm hidden sm:inline-block text-muted-foreground font-medium w-[66px] truncate shrink-0 mr-0.5">
                     {issue.identifier}
                  </span>
                  <StatusSelector status={issue.issueStatus} issueId={issue.id} />
               </div>
               <span className="min-w-0 flex items-center justify-start mr-1 ml-0.5">
                  <span className="text-xs sm:text-sm font-medium sm:font-semibold truncate">
                     {issue.title}
                  </span>
               </span>
               <div className="flex items-center justify-end gap-2 ml-auto sm:w-fit">
                  <div className="w-3 shrink-0"></div>
                  <div className="-space-x-5 hover:space-x-1 lg:space-x-1 items-center justify-end hidden sm:flex duration-200 transition-all">
                     {/* Labels and project badges temporarily removed until GraphQL query includes them */}
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline-block">
                     {format(new Date(issue.createdAt), 'MMM dd')}
                  </span>
                  <AssigneeUser user={issue.assignee} />
               </div>
            </motion.div>
         </ContextMenuTrigger>
         <IssueContextMenu issueId={issue.id} />
      </ContextMenu>
   );
}

export default IssueLine;
