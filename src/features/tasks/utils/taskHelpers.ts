/**
 * Task Helper Utilities
 */

import type { Task } from '@/libs/client/types';
import type { TaskStatus, TaskPriority } from '@/libs/client/types';

/**
 * Generate a unique identifier for a task
 */
export function generateTaskIdentifier(projectIdentifier: string, taskNumber: number): string {
   return `${projectIdentifier}-${taskNumber}`;
}

/**
 * Check if a task is overdue
 */
export function isTaskOverdue(task: Task): boolean {
   // TODO: Add dueDate field to Task type if needed
   // if (!task.dueDate) return false;
   // return new Date(task.dueDate) < new Date();
   return false; // Placeholder implementation
}

/**
 * Check if a task is completed
 */
export function isTaskCompleted(task: Task): boolean {
   return task.statusId === 'done' || task.statusId === 'completed';
}

/**
 * Check if a task is in progress
 */
export function isTaskInProgress(task: Task): boolean {
   return task.statusId === 'in-progress' || task.statusId === 'doing';
}

/**
 * Get the priority level as a number for sorting
 */
export function getPriorityLevel(priority: string): number {
   const priorityMap: Record<string, number> = {
      LOW: 1,
      MEDIUM: 2,
      HIGH: 3,
      URGENT: 4,
      CRITICAL: 5,
   };
   return priorityMap[priority] || 0;
}

/**
 * Get the status color for display
 */
export function getStatusColor(status: string): string {
   const statusColors: Record<string, string> = {
      OPEN: '#94a3b8',
      TODO: '#94a3b8',
      IN_PROGRESS: '#f59e0b',
      DOING: '#f59e0b',
      REVIEW: '#8b5cf6',
      DONE: '#10b981',
      COMPLETED: '#10b981',
      CANCELLED: '#ef4444',
      BLOCKED: '#ef4444',
   };
   return statusColors[status] || '#6b7280';
}

/**
 * Get the priority color for display
 */
export function getPriorityColor(priority: string): string {
   const priorityColors: Record<string, string> = {
      LOW: '#10b981',
      MEDIUM: '#f59e0b',
      HIGH: '#f97316',
      URGENT: '#ef4444',
      CRITICAL: '#dc2626',
   };
   return priorityColors[priority] || '#6b7280';
}

/**
 * Calculate the completion percentage of an task based on subtasks
 */
export function calculateTaskProgress(task: Task): number {
   // TODO: Implement subtasks relationship properly
   // if (!task.subtasks || task.subtasks.length === 0) {
   //    return isTaskCompleted(task) ? 100 : 0;
   // }

   // const completedSubtasks = task.subtasks.filter(isTaskCompleted).length;
   // return Math.round((completedSubtasks / task.subtasks.length) * 100);
   return isTaskCompleted(task) ? 100 : 0;
}

/**
 * Get relative time string for task dates
 */
export function getRelativeTime(date: Date): string {
   const now = new Date();
   const diffInMs = now.getTime() - new Date(date).getTime();
   const diffInSeconds = Math.floor(diffInMs / 1000);
   const diffInMinutes = Math.floor(diffInSeconds / 60);
   const diffInHours = Math.floor(diffInMinutes / 60);
   const diffInDays = Math.floor(diffInHours / 24);

   if (diffInSeconds < 60) return 'just now';
   if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
   if (diffInHours < 24) return `${diffInHours}h ago`;
   if (diffInDays < 7) return `${diffInDays}d ago`;
   if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`;
   return `${Math.floor(diffInDays / 30)}mo ago`;
}

/**
 * Truncate task title for display
 */
export function truncateTitle(title: string, maxLength = 50): string {
   if (title.length <= maxLength) return title;
   return title.substring(0, maxLength - 3) + '...';
}

/**
 * Extract mentions from task description
 */
export function extractMentions(text: string): string[] {
   const mentionRegex = /@\[([^\]]+)\]\(([^)]+)\)/g;
   const mentions: string[] = [];
   let match;

   while ((match = mentionRegex.exec(text)) !== null) {
      mentions.push(match[2]); // The user ID
   }

   return mentions;
}

/**
 * Format task description for display (strip markdown, limit length)
 */
export function formatTaskDescription(description: string, maxLength = 100): string {
   // Remove markdown formatting
   const plainText = description
      .replace(/[#*`_~]/g, '') // Remove markdown symbols
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
      .replace(/\n/g, ' ') // Replace newlines with spaces
      .trim();

   return truncateTitle(plainText, maxLength);
}

/**
 * Check if a user can edit an task
 */
export function canEditTask(task: Task, userId: string, userRole: string): boolean {
   // Admin can edit all tasks
   if (userRole === 'ADMIN') return true;

   // TODO: Project lead check needs proper implementation
   // if (task.project?.lead?.id === userId) return true;

   return false;
}

/**
 * Sort tasks by multiple criteria
 */
export function sortTasks(
   tasks: Task[],
   sortBy: 'priority' | 'created' | 'updated' | 'dueDate' | 'title' | 'status',
   direction: 'asc' | 'desc' = 'desc'
): Task[] {
   const sortedTasks = [...tasks].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
         case 'priority':
            // TODO: Implement priority comparison with priorityId
            comparison = 0;
            break;
         case 'created':
            comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            break;
         case 'updated':
            comparison = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
            break;
         case 'dueDate':
            // TODO: Add dueDate field to Task type
            comparison = 0;
            break;
         case 'title':
            comparison = a.title.localeCompare(b.title);
            break;
         case 'status':
            // TODO: Implement status comparison with statusId
            comparison = 0;
            break;
         default:
            return 0;
      }

      return direction === 'desc' ? -comparison : comparison;
   });

   return sortedTasks;
}
