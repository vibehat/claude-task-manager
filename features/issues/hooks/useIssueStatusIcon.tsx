import type { FC } from 'react';
import type { IssueStatus } from '@/libs/client/types';
import {
   BacklogIcon,
   PausedIcon,
   ToDoIcon,
   InProgressIcon,
   TechnicalReviewIcon,
   CompletedIcon,
} from '@/components/icons/BacklogIcon';

const iconMapByName: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
   backlog: BacklogIcon,
   todo: ToDoIcon,
   in_progress: InProgressIcon,
   technical_review: TechnicalReviewIcon,
   done: CompletedIcon,
   cancelled: PausedIcon,
};

export function useIssueStatusIcon(
   status: Pick<IssueStatus, 'id' | 'name'>
): FC<React.SVGProps<SVGSVGElement>> {
   // Map by status name
   return iconMapByName[status.name] || ToDoIcon;
}
