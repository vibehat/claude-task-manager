import { BacklogIcon, CompletedIcon, InProgressIcon, PausedIcon, TechnicalReviewIcon, ToDoIcon } from '@/components/icons/BacklogIcon';
import React from 'react';

export interface Status {
   id: string;
   name: string;
   color: string;
   icon: React.FC;
}
export const status: Status[] = [
   { id: 'in-progress', name: 'In Progress', color: '#facc15', icon: InProgressIcon },
   {
      id: 'technical-review',
      name: 'Technical Review',
      color: '#22c55e',
      icon: TechnicalReviewIcon,
   },
   { id: 'completed', name: 'Completed', color: '#8b5cf6', icon: CompletedIcon },
   { id: 'paused', name: 'Paused', color: '#0ea5e9', icon: PausedIcon },
   { id: 'to-do', name: 'Todo', color: '#f97316', icon: ToDoIcon },
   { id: 'backlog', name: 'Backlog', color: '#ec4899', icon: BacklogIcon },
];

export const StatusIcon: React.FC<{ statusId: string }> = ({ statusId }) => {
   const currentStatus = status.find((s) => s.id === statusId);
   if (!currentStatus) return null;

   const IconComponent = currentStatus.icon;
   return <IconComponent />;
};
