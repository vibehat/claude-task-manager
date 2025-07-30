'use client';

import type { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GroupIssuesGrid from './GroupIssuesGrid';
import { cn } from '@/libs/client/utils';
import { CustomDragLayer } from '../../components/items/IssueDragType';
import type { GetIssueStatusesQuery } from '@/libs/client/graphql-client/generated';
import { useIssuesFilterStore } from '../../store/issueFilterStore';

type IssueStatusFromQuery = GetIssueStatusesQuery['issueStatuses'][0];

interface IssueGridViewProps {
   statuses: IssueStatusFromQuery[];
}

const IssueGridView: FC<IssueGridViewProps> = ({ statuses }) => {
   const { where } = useIssuesFilterStore();

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
