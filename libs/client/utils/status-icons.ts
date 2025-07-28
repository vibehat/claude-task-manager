import type { FC } from 'react';
import {
   BacklogIcon,
   PausedIcon,
   ToDoIcon,
   InProgressIcon,
   TechnicalReviewIcon,
   CompletedIcon,
} from '@/mock-data/status';

const iconMap: Record<string, FC> = {
   'backlog': BacklogIcon,
   'paused': PausedIcon,
   'to-do': ToDoIcon,
   'in-progress': InProgressIcon,
   'technical-review': TechnicalReviewIcon,
   'completed': CompletedIcon,
};

/**
 * Resolves an icon component from an icon name string
 * @param iconName - The name of the icon to resolve
 * @returns The React component for the icon, or BacklogIcon as fallback
 */
export function resolveStatusIcon(iconName: string): FC {
   return iconMap[iconName] || BacklogIcon;
}

/**
 * Maps a status object with iconName to include the icon component
 * @param status - Status object with iconName property
 * @returns Status object with icon component added
 */
export function mapStatusWithIcon<T extends { iconName: string }>(status: T): T & { icon: FC } {
   return {
      ...status,
      icon: resolveStatusIcon(status.iconName),
   };
}
