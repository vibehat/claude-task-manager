'use client';

import { Issue } from '@/lib/mock-data/issues';
import { AssigneeUser } from './assignee-user';
import { format } from 'date-fns';
import { LabelBadge } from './label-badge';
import { ProjectBadge } from './project-badge';
import { PrioritySelector } from './priority-selector';
import { StatusSelector } from './status-selector';
import { motion } from 'motion/react';

export function IssueGrid({ issue }: { issue: Issue }) {
   return (
      <motion.div
         layoutId={`issue-grid-${issue.identifier}`}
         className="w-full p-3 bg-background rounded-md shadow-xs border border-border/50 cursor-pointer"
      >
         <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
               <PrioritySelector priority={issue.priority} issueId={issue.id} />
               <span className="text-xs text-muted-foreground font-medium">{issue.identifier}</span>
            </div>
            <StatusSelector status={issue.status} issueId={issue.id} />
         </div>

         <h3 className="text-sm font-semibold mb-3 line-clamp-2">{issue.title}</h3>

         <div className="flex flex-wrap gap-1.5 mb-3 min-h-[1.5rem]">
            <LabelBadge label={issue.labels} />
            {issue.project && <ProjectBadge project={issue.project} />}
         </div>

         <div className="flex items-center justify-between mt-auto pt-2 border-t">
            <span className="text-xs text-muted-foreground">
               {format(new Date(issue.createdAt), 'MMM dd')}
            </span>
            <AssigneeUser user={issue.assignees} />
         </div>
      </motion.div>
   );
}
