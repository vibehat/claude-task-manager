import LexoRank from '@kayron013/lexorank';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

/**
 * Ordering system like JIRA's LexoRank algorithm.
 * @see https://youtu.be/OjQv9xMoFbg
 */
export { LexoRank };

/**
 * Formats a task ID for display by removing the 'tm-' prefix and adding '#' prefix
 * @param taskId - The raw task ID (e.g., 'tm-1.2', '1.2', or number)
 * @returns Formatted task ID for display (e.g., '#1.2')
 */
export function formatTaskIdForDisplay(taskId: string | number): string {
   // Convert to string first to handle numbers
   const taskIdStr = String(taskId);
   // Remove 'tm-' prefix if it exists
   const cleanId = taskIdStr.startsWith('tm-') ? taskIdStr.slice(3) : taskIdStr;
   // Add '#' prefix for display
   return `#${cleanId}`;
}
