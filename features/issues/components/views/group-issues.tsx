'use client';

import type { Issue } from '@/mock-data/issues';
import type { Status } from '@/mock-data/status';
import { useUpdateIssue } from '@/features/issues/hooks/mutations/issues/use-update-issue';
import { useIssuesByStatus } from '@/features/issues/hooks/queries/use-issues-by-status';
import { useViewStore } from '@/store/view-store';
import { cn } from '@/libs/client/utils';
import { Plus } from 'lucide-react';
import type { FC } from 'react';
import { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Button } from '@/components/ui/button';
import { IssueDragType, IssueGrid } from '../items/issue-grid';
import { IssueLine } from '../items/issue-line';
import { useCreateIssueStore } from '@/store/create-issue-store';
import { sortIssuesByPriority } from '@/mock-data/issues';
import { AnimatePresence, motion } from 'motion/react';
import type { IssueFilterInput } from '@/features/issues/hooks/queries/use-issues';

interface GroupIssuesProps {
   status: Status;
   additionalFilter?: Omit<IssueFilterInput, 'status'>;
}

function GroupIssues({ status, additionalFilter }: GroupIssuesProps): React.JSX.Element {
   const { viewType } = useViewStore();
   const isViewTypeGrid = viewType === 'grid';
   const { openModal } = useCreateIssueStore();

   // Fetch issues for this specific status
   const { data, loading, error } = useIssuesByStatus({
      statusId: status.id,
      filter: additionalFilter,
   });

   const issues = data?.issues?.nodes || [];
   const count = data?.issues?.totalCount || 0;
   const sortedIssues = sortIssuesByPriority(issues);

   // Show loading state for this status
   if (loading) {
      return (
         <div
            className={cn(
               'bg-container',
               isViewTypeGrid
                  ? 'overflow-hidden rounded-md h-full flex-shrink-0 w-[348px] flex flex-col'
                  : ''
            )}
         >
            <div
               className={cn(
                  'sticky top-0 z-10 bg-container w-full',
                  isViewTypeGrid ? 'rounded-t-md h-[50px]' : 'h-10'
               )}
            >
               <div
                  className={cn(
                     'w-full h-full flex items-center justify-between',
                     isViewTypeGrid ? 'px-3' : 'px-6'
                  )}
                  style={{
                     backgroundColor: isViewTypeGrid ? `${status.color}10` : `${status.color}08`,
                  }}
               >
                  <div className="flex items-center gap-2">
                     <status.icon />
                     <span className="text-sm font-medium">{status.name}</span>
                     <span className="text-sm text-muted-foreground">...</span>
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-center h-32">
               <div className="text-xs text-muted-foreground">Loading...</div>
            </div>
         </div>
      );
   }

   // Show error state for this status
   if (error) {
      return (
         <div
            className={cn(
               'bg-container',
               isViewTypeGrid
                  ? 'overflow-hidden rounded-md h-full flex-shrink-0 w-[348px] flex flex-col'
                  : ''
            )}
         >
            <div
               className={cn(
                  'sticky top-0 z-10 bg-container w-full',
                  isViewTypeGrid ? 'rounded-t-md h-[50px]' : 'h-10'
               )}
            >
               <div
                  className={cn(
                     'w-full h-full flex items-center justify-between',
                     isViewTypeGrid ? 'px-3' : 'px-6'
                  )}
                  style={{
                     backgroundColor: isViewTypeGrid ? `${status.color}10` : `${status.color}08`,
                  }}
               >
                  <div className="flex items-center gap-2">
                     <status.icon />
                     <span className="text-sm font-medium">{status.name}</span>
                     <span className="text-sm text-red-500">Error</span>
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-center h-32">
               <div className="text-xs text-red-500">Failed to load</div>
            </div>
         </div>
      );
   }

   return (
      <div
         className={cn(
            'bg-container',
            isViewTypeGrid
               ? 'overflow-hidden rounded-md h-full flex-shrink-0 w-[348px] flex flex-col'
               : ''
         )}
      >
         <div
            className={cn(
               'sticky top-0 z-10 bg-container w-full',
               isViewTypeGrid ? 'rounded-t-md h-[50px]' : 'h-10'
            )}
         >
            <div
               className={cn(
                  'w-full h-full flex items-center justify-between',
                  isViewTypeGrid ? 'px-3' : 'px-6'
               )}
               style={{
                  backgroundColor: isViewTypeGrid ? `${status.color}10` : `${status.color}08`,
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
            <IssueGridList issues={issues} status={status} />
         )}
      </div>
   );
}

const IssueGridList: FC<{ issues: Issue[]; status: Status }> = ({
   issues,
   status,
}): React.JSX.Element => {
   const ref = useRef<HTMLDivElement>(null);
   const [updateIssue] = useUpdateIssue();

   // Set up drop functionality to accept only issue items.
   const [{ isOver }, drop] = useDrop(() => ({
      accept: IssueDragType,
      drop(item: Issue, monitor): void {
         if (monitor.didDrop() && item.status.id !== status.id) {
            updateIssue({
               variables: {
                  id: item.id,
                  input: { status: status.id },
               },
            });
         }
      },
      collect: (monitor): { isOver: boolean } => ({
         isOver: !!monitor.isOver(),
      }),
   }));
   drop(ref);

   const sortedIssues = sortIssuesByPriority(issues);

   return (
      <div
         ref={ref}
         className="flex-1 h-full overflow-y-auto p-2 space-y-2 bg-zinc-50/50 dark:bg-zinc-900/50 relative"
      >
         <AnimatePresence>
            {isOver && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="fixed top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center pointer-events-none bg-background/90"
                  style={{
                     width: ref.current?.getBoundingClientRect().width ?? '100%',
                     height: ref.current?.getBoundingClientRect().height ?? '100%',
                     transform: `translate(${ref.current?.getBoundingClientRect().left ?? 0}px, ${ref.current?.getBoundingClientRect().top ?? 0}px)`,
                  }}
               >
                  <div className="bg-background border border-border rounded-md p-3 shadow-md max-w-[90%]">
                     <p className="text-sm font-medium text-center">Board ordered by priority</p>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
         {sortedIssues.map((issue) => (
            <IssueGrid key={issue.id} issue={issue} />
         ))}
      </div>
   );
};

export { GroupIssues };
export default GroupIssues;
