import React from 'react';
import {
  NoPriorityIcon,
  UrgentPriorityIcon,
  HighPriorityIcon,
  MediumPriorityIcon,
  LowPriorityIcon,
} from '../components/icons';

export interface Priority {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const priorities: Priority[] = [
  { id: 'no-priority', name: 'No priority', icon: NoPriorityIcon },
  { id: 'urgent', name: 'Urgent', icon: UrgentPriorityIcon },
  { id: 'high', name: 'High', icon: HighPriorityIcon },
  { id: 'medium', name: 'Medium', icon: MediumPriorityIcon },
  { id: 'low', name: 'Low', icon: LowPriorityIcon },
];