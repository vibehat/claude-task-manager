'use client';

import { Issue } from '@/lib/mock-data/issues';
import { AssigneeUser } from './assignee-user';
import { format } from 'date-fns';
import { LabelBadge } from './label-badge';
import { ProjectBadge } from './project-badge';
import { PrioritySelector } from './priority-selector';
import { StatusSelector } from './status-selector';

export function IssueLine({ issue }: { issue: Issue }) {
   return (
      <div
         //href={`/lndev-ui/issue/${issue.identifier}`}
         className="w-full flex items-center justify-between h-11 px-6 hover:bg-sidebar/50"
      >
         <div className="flex items-center gap-0.5">
            <PrioritySelector priority={issue.priority} issueId={issue.id} />
            <span className="text-sm text-muted-foreground font-medium w-[68px] truncate shrink-0 mr-0.5">
               {issue.identifier}
            </span>
            <StatusSelector status={issue.status} issueId={issue.id} />
            <span className="text-sm font-semibold truncate">{issue.title}</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="space-x-1 flex items-center justify-end">
               <LabelBadge label={issue.labels} />
               {issue.project && <ProjectBadge project={issue.project} />}
            </div>
            <span className="text-xs text-muted-foreground shrink-0">
               {format(new Date(issue.createdAt), 'MMM dd')}
            </span>
            <AssigneeUser user={issue.assignees} />
         </div>
      </div>
   );
}
