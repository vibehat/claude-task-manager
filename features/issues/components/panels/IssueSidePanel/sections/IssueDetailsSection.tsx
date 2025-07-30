'use client';

import type { Issue } from '@/libs/client/types';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { format } from 'date-fns';
import { Calendar, Clock, User, Flag, Folder, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { StatusSelector } from '../../../selectors/StatusSelector';
import { PrioritySelector } from '../../../selectors/PrioritySelector';
import { LabelSelector } from '../../../selectors/LabelSelector';
import { AssigneeUser } from '../../../AssigneeUser';

interface IssueDetailsSectionProps {
   issue: Issue;
   onLabelsUpdate?: (labelIds: string[]) => void;
}

export function IssueDetailsSection({
   issue,
   onLabelsUpdate,
}: IssueDetailsSectionProps): React.JSX.Element {
   const { getUserById, getStatusById, getPriorityById, getLabelById } = useDataStore();

   // Get related data
   const assignee = issue.assigneeId ? getUserById(issue.assigneeId) : null;
   const priority = issue.priorityId ? getPriorityById(issue.priorityId) : null;
   const status = getStatusById(issue.statusId);
   const labels = issue.labelIds
      .map((id) => {
         const label = getLabelById(id);
         return label ? { id, label } : null;
      })
      .filter(Boolean);
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
                  {assignee ? (
                     <AssigneeUser user={assignee as any} />
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
                  <PrioritySelector priority={priority} issueId={issue.id} />
               </div>
            </div>

            {/* Status */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Flag className="h-4 w-4" />
                  <span>Status</span>
               </div>
               <div className="flex items-center gap-2">
                  <StatusSelector status={status} issueId={issue.id} />
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
                     selectedLabels={labels}
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
            {false && (
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Calendar className="h-4 w-4" />
                     <span>Due Date</span>
                  </div>
                  <span className="text-sm">
                     {(() => {
                        const date = new Date();
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
