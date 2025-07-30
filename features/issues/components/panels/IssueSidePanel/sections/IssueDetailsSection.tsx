'use client';

import type { GetIssuesQuery } from '@/libs/client/graphql-client/generated';
import { format } from 'date-fns';
import { Calendar, Clock, User, Flag, Folder, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { StatusSelector } from '../../../selectors/StatusSelector';
import { PrioritySelector } from '../../../selectors/PrioritySelector';
import { LabelSelector } from '../../../selectors/LabelSelector';
import { AssigneeUser } from '../../../AssigneeUser';

type IssueFromQuery = GetIssuesQuery['issues'][0];

interface IssueDetailsSectionProps {
   issue: IssueFromQuery;
   onLabelsUpdate?: (labelIds: string[]) => void;
}

export function IssueDetailsSection({
   issue,
   onLabelsUpdate,
}: IssueDetailsSectionProps): React.JSX.Element {
   return (
      <div className="space-y-4">
         <h3 className="text-sm font-medium">Details</h3>

         <div className="grid gap-4">
            {/* Assignee */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>Assignee</span>
               </div>
               <div className="flex items-center gap-2">
                  {issue.assignee ? (
                     <AssigneeUser user={issue.assignee} />
                  ) : (
                     <span className="text-sm text-muted-foreground">Unassigned</span>
                  )}
               </div>
            </div>

            {/* Priority */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Flag className="h-4 w-4" />
                  <span>Priority</span>
               </div>
               <div className="flex items-center gap-2">
                  <PrioritySelector priority={issue.issuePriority} issueId={issue.id} />
               </div>
            </div>

            {/* Status */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Flag className="h-4 w-4" />
                  <span>Status</span>
               </div>
               <div className="flex items-center gap-2">
                  <StatusSelector status={issue.issueStatus} issueId={issue.id} />
               </div>
            </div>

            {/* Labels */}
            <div className="flex items-start justify-between">
               <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Tag className="h-4 w-4" />
                  <span>Labels</span>
               </div>
               <div className="flex-1 ml-4">
                  <LabelSelector
                     selectedLabels={issue.labels || []}
                     onChange={onLabelsUpdate || (() => {})}
                     disabled={false}
                  />
               </div>
            </div>

            {/* Project */}
            {issue.projectId && (
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Folder className="h-4 w-4" />
                     <span>Project</span>
                  </div>
                  <Badge variant="outline">Project ID: {issue.projectId}</Badge>
               </div>
            )}

            {/* Due Date */}
            {issue.dueDate && (
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Calendar className="h-4 w-4" />
                     <span>Due Date</span>
                  </div>
                  <span className="text-sm">
                     {(() => {
                        const date = new Date(issue.dueDate);
                        return isNaN(date.getTime())
                           ? 'Invalid date'
                           : format(date, 'MMM dd, yyyy');
                     })()}
                  </span>
               </div>
            )}

            {/* Created */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Created</span>
               </div>
               <span className="text-sm text-muted-foreground">
                  {(() => {
                     const date = new Date(issue.createdAt);
                     return isNaN(date.getTime()) ? 'Invalid date' : format(date, 'MMM dd, yyyy');
                  })()}
               </span>
            </div>

            {/* Updated */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Updated</span>
               </div>
               <span className="text-sm text-muted-foreground">
                  {(() => {
                     const date = new Date(issue.updatedAt);
                     return isNaN(date.getTime()) ? 'Invalid date' : format(date, 'MMM dd, yyyy');
                  })()}
               </span>
            </div>
         </div>
      </div>
   );
}

export default IssueDetailsSection;
