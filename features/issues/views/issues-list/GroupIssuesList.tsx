'use client';

import type { GetIssueStatusesQuery } from '@/libs/client/graphql-client/generated';
import { cn } from '@/libs/client/utils';
import { Plus } from 'lucide-react';
import { useIssueStatusIcon } from '../../hooks/useIssueStatusIcon';
import { Button } from '@/components/ui/button';
import { useCreateIssueStore } from '@/store/createIssueStore';
import { useSortIssuesByPriority } from '@/features/issues/hooks/useSortIssuesByPriority';
import { useEdges } from '@/hooks/useEdges';
import type { IssueWhereInput } from '@/libs/client/graphql-client/generated';
import { useGetIssuesQuery } from '@/libs/client/graphql-client/generated';
import { IssueLine } from '../../components/items/IssueLine';

type IssueStatusFromQuery = GetIssueStatusesQuery['issueStatuses'][0];

interface GroupIssuesListProps {
   status: IssueStatusFromQuery;
   additionalFilter?: IssueWhereInput;
}

function GroupIssuesList({ status, additionalFilter }: GroupIssuesListProps): React.JSX.Element {
   const { openModal } = useCreateIssueStore();
   const StatusIcon = useIssueStatusIcon(status);

   // Fetch issues for this specific status
   const { data, loading, error } = useGetIssuesQuery({
      variables: {
         where: {
            statusId: {
               equals: status.id,
            },
            ...additionalFilter,
         },
      },
   });

   const issues = useEdges(data?.issues);
   const count = data?.issues?.length;
   const sortedIssues = useSortIssuesByPriority(issues);

   // Show loading state for this status
   if (loading) {
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
