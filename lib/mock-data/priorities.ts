import {
   Ellipsis,
   LucideIcon,
   OctagonAlert,
   SignalHigh,
   SignalLow,
   SignalMedium,
} from 'lucide-react';

export interface Priority {
   id: string;
   name: string;
   icon: LucideIcon;
}

export const priorities: Priority[] = [
   { id: 'no-priority', name: 'No priority', icon: Ellipsis },
   { id: 'high', name: 'High', icon: SignalHigh },
   { id: 'medium', name: 'Medium', icon: SignalMedium },
   { id: 'low', name: 'Low', icon: SignalLow },
   { id: 'critical', name: 'Critical', icon: OctagonAlert },
];
