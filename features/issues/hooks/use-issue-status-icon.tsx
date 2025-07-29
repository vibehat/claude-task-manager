import type { FC } from 'react';
import type { IssueStatus } from '@/libs/client/graphql-client/generated';
import {
   BacklogIcon,
   PausedIcon,
   ToDoIcon,
   InProgressIcon,
   TechnicalReviewIcon,
   CompletedIcon,
} from '@/components/icons/issue-status-icons';

const iconMapById: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
   'in-progress': InProgressIcon,
   'technical-review': TechnicalReviewIcon,
   'completed': CompletedIcon,
   'paused': PausedIcon,
   'to-do': ToDoIcon,
   'backlog': BacklogIcon,
};

const iconMapByName: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
   BacklogIcon: BacklogIcon,
   PausedIcon: PausedIcon,
   ToDoIcon: ToDoIcon,
   InProgressIcon: InProgressIcon,
   TechnicalReviewIcon: TechnicalReviewIcon,
   CompletedIcon: CompletedIcon,
};

export function useIssueStatusIcon(
   status: Pick<IssueStatus, 'id' | 'iconName'>
): FC<React.SVGProps<SVGSVGElement>> {
   // First try to map by iconName
   if (status.iconName && iconMapByName[status.iconName]) {
      return iconMapByName[status.iconName];
   }

   // Fallback to mapping by id
   return iconMapById[status.id] || ToDoIcon;
}
