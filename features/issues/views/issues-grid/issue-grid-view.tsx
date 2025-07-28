'use client';

import type { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { GroupIssuesGrid } from './group-issues-grid';
import { cn } from '@/libs/client/utils';
import { CustomDragLayer } from '../../components/items/issue-grid';
import { IssueStatus } from '@/libs/client/graphql-client/generated';
import { useIssuesFilterStore } from '../../store/issue-filter-store';

interface IssueGridViewProps {
   statuses: IssueStatus[];
   loading?: boolean;
   error?: Error | null;
}

const IssueGridView: FC<IssueGridViewProps> = ({ statuses, loading, error }) => {
   const { where } = useIssuesFilterStore();

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
      <div className={cn('w-full h-full overflow-x-auto')}>
         <DndProvider backend={HTML5Backend}>
            <CustomDragLayer />
            <div className={cn('flex h-full gap-3 px-2 py-2 min-w-max')}>
               {statuses.map((status) => (
                  <GroupIssuesGrid key={status.id} status={status} additionalFilter={where} />
               ))}
            </div>
         </DndProvider>
      </div>
   );
};

export default IssueGridView;
