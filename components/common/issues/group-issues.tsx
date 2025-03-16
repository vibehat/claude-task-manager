'use client';

import { cn } from '@/lib/utils';
import { Issue } from '@/mock-data/issues';
import { Status } from '@/mock-data/status';
import { useCreateIssueStore } from '@/store/create-issue-store';
import { useViewStore } from '@/store/view-store';
import { Plus } from 'lucide-react';
import { Button } from '../../ui/button';
import { IssueGrid } from './issue-grid';
import { IssueLine } from './issue-line';
import { sortIssuesByPriority } from '@/mock-data/issues';

interface GroupIssuesProps {
   status: Status;
   issues: Issue[];
   count: number;
}

export function GroupIssues({ status, issues, count }: GroupIssuesProps) {
   const { viewType } = useViewStore();
   const { openModal } = useCreateIssueStore();
   const sortedIssues = sortIssuesByPriority(issues);

   return (
      <div
         className={cn(
            'bg-conainer',
            viewType === 'grid'
               ? 'overflow-hidden rounded-md h-full flex-shrink-0 w-[348px] flex flex-col'
               : ''
         )}
      >
         <div
            className={cn(
               'sticky top-0 z-10 bg-container w-full',
               viewType === 'grid' ? 'rounded-t-md h-[50px]' : 'h-10'
            )}
         >
            <div
               className={cn(
                  'w-full h-full flex items-center justify-between',
                  viewType === 'grid' ? 'px-3' : 'px-6'
               )}
               style={{
                  backgroundColor: viewType === 'grid' ? `${status.color}10` : `${status.color}08`,
               }}
            >
               <div className="flex items-center gap-2">
                  <status.icon />
                  <span className="text-sm font-medium">{status.name}</span>
                  <span className="text-sm text-muted-foreground">{count}</span>
               </div>

               <Button
                  className="size-6"
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                     e.stopPropagation();
                     openModal(status);
                  }}
               >
                  <Plus className="size-4" />
               </Button>
            </div>
         </div>

         {viewType === 'list' ? (
            <div className="space-y-0">
               {sortedIssues.map((issue) => (
                  <IssueLine key={issue.id} issue={issue} layoutId={true} />
               ))}
            </div>
         ) : (
            <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-zinc-50/50 dark:bg-zinc-900/50">
               {sortedIssues.map((issue) => (
                  <IssueGrid key={issue.id} issue={issue} />
               ))}
            </div>
         )}
      </div>
   );
}
