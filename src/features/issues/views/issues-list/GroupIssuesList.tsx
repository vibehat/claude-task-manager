'use client';

import type { IssueStatus } from '@/libs/client/services/mockDataService';
import { cn } from '@/libs/client/utils';
import { Plus } from 'lucide-react';
import { useIssueStatusIcon } from '../../hooks/useIssueStatusIcon';
import { Button } from '@/components/ui/button';
import { useCreateIssueStore } from '@/store/createIssueStore';
import { useSortIssuesByPriority } from '@/features/issues/hooks/useSortIssuesByPriority';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { IssueLine } from '../../components/items/IssueLine';
import { useMemo } from 'react';

interface GroupIssuesListProps {
   status: IssueStatus;
}

function GroupIssuesList({ status }: GroupIssuesListProps): React.JSX.Element {
   const { openModal } = useCreateIssueStore();
   const StatusIcon = useIssueStatusIcon(status);

   // Get issues filtered by status
   const getIssuesByStatus = useDataStore((state) => state.getIssuesByStatus);
   const issues = useMemo(() => {
      const statusIssues = getIssuesByStatus(status.id);
      // Filter parent issues only
      return statusIssues.filter((issue) => !issue.parentIssueId);
   }, [getIssuesByStatus, status.id]);

   const count = issues.length;
   const sortedIssues = useSortIssuesByPriority(issues);

   return (
      <div className="bg-container">
         <div className="sticky top-0 z-10 bg-container w-full h-10">
            <div
               className="w-full h-full flex items-center justify-between px-6"
               style={{
                  backgroundColor: `${status.color}08`,
               }}
            >
               <div className="flex items-center gap-2">
                  <StatusIcon className="size-4" />
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

         <div className="space-y-0">
            {sortedIssues.map((issue) => (
               <IssueLine key={issue.id} issue={issue} layoutId={true} />
            ))}
         </div>
      </div>
   );
}

export default GroupIssuesList;
