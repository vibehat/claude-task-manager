'use client';

import type { IssueStatus } from '@/libs/client/types/dataModels';
import type { FC } from 'react';
import GroupIssuesList from './GroupIssuesList';

interface IssueListViewProps {
   statuses: IssueStatus[];
   loading?: boolean;
   error?: Error | null;
}

const IssueListView: FC<IssueListViewProps> = ({ statuses, loading, error }) => {
   if (loading) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-muted-foreground">Loading issues...</div>
         </div>
      );
   }

   if (error) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-red-500">Error loading issues: {error.message}</div>
         </div>
      );
   }

   return (
      <div className="w-full h-full">
         {statuses.map((status) => (
            <GroupIssuesList key={status.id} status={status} />
         ))}
      </div>
   );
};

export default IssueListView;
