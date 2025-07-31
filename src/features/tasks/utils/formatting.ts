/**
 * Task Formatting Utilities
 */

import type { Task } from '../types/taskTypes';

/**
 * Format issue identifier for display
 */
export function formatTaskIdentifier(issue: Task): string {
   return issue.identifier || `#${issue.id.slice(-6)}`;
}

/**
 * Format issue title with identifier
 */
export function formatTaskTitle(issue: Task, includeIdentifier = true): string {
   if (includeIdentifier) {
      return `${formatTaskIdentifier(issue)} ${issue.title}`;
   }
   return issue.title;
}

/**
 * Format issue status for display
 */
export function formatTaskStatus(status: string): string {
   const statusMap: Record<string, string> = {
      OPEN: 'Open',
      TODO: 'To Do',
      IN_PROGRESS: 'In Progress',
      DOING: 'Doing',
      REVIEW: 'In Review',
      TESTING: 'Testing',
      DONE: 'Done',
      COMPLETED: 'Completed',
      CANCELLED: 'Cancelled',
      BLOCKED: 'Blocked',
      ON_HOLD: 'On Hold',
   };
   return statusMap[status] || status.replace('_', ' ').toLowerCase();
}

/**
 * Format issue priority for display
 */
export function formatTaskPriority(priority: string): string {
   const priorityMap: Record<string, string> = {
      LOW: 'Low',
      MEDIUM: 'Medium',
      HIGH: 'High',
      URGENT: 'Urgent',
      CRITICAL: 'Critical',
   };
   return priorityMap[priority] || priority.toLowerCase();
}

/**
 * Format relative date
 */
export function formatRelativeDate(date: Date | string): string {
   const now = new Date();
   const targetDate = new Date(date);
   const diffInMs = now.getTime() - targetDate.getTime();
   const diffInSeconds = Math.floor(diffInMs / 1000);
   const diffInMinutes = Math.floor(diffInSeconds / 60);
   const diffInHours = Math.floor(diffInMinutes / 60);
   const diffInDays = Math.floor(diffInHours / 24);
   const diffInWeeks = Math.floor(diffInDays / 7);
   const diffInMonths = Math.floor(diffInDays / 30);
   const diffInYears = Math.floor(diffInDays / 365);

   if (diffInSeconds < 60) return 'just now';
   if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
   if (diffInHours < 24) return `${diffInHours}h ago`;
   if (diffInDays < 7) return `${diffInDays}d ago`;
   if (diffInWeeks < 4) return `${diffInWeeks}w ago`;
   if (diffInMonths < 12) return `${diffInMonths}mo ago`;
   return `${diffInYears}y ago`;
}

/**
 * Format absolute date
 */
export function formatAbsoluteDate(
   date: Date | string,
   format: 'short' | 'medium' | 'long' = 'medium'
): string {
   const targetDate = new Date(date);

   switch (format) {
      case 'short':
         return targetDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
         });
      case 'medium':
         return targetDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
         });
      case 'long':
         return targetDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
         });
      default:
         return targetDate.toLocaleDateString();
   }
}

/**
 * Format due date with context
 */
export function formatDueDate(dueDate: Date | string | null): {
   text: string;
   type: 'overdue' | 'today' | 'upcoming' | 'none';
} {
   if (!dueDate) {
      return { text: 'No due date', type: 'none' };
   }

   const now = new Date();
   const due = new Date(dueDate);
   const diffInMs = due.getTime() - now.getTime();
   const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

   if (diffInDays < 0) {
      return {
         text: `Overdue by ${Math.abs(diffInDays)} day${Math.abs(diffInDays) === 1 ? '' : 's'}`,
         type: 'overdue',
      };
   } else if (diffInDays === 0) {
      return { text: 'Due today', type: 'today' };
   } else if (diffInDays === 1) {
      return { text: 'Due tomorrow', type: 'upcoming' };
   } else if (diffInDays <= 7) {
      return { text: `Due in ${diffInDays} days`, type: 'upcoming' };
   } else {
      return { text: formatAbsoluteDate(due, 'short'), type: 'upcoming' };
   }
}

/**
 * Format assignee name
 */
export function formatAssigneeName(assignee: { name: string; email: string } | null): string {
   if (!assignee) return 'Unassigned';
   return assignee.name || assignee.email;
}

/**
 * Format issue progress as percentage
 */
export function formatTaskProgress(issue: Task): string {
   if (!issue.subtasks || issue.subtasks.length === 0) {
      return issue.status === 'DONE' || issue.status === 'COMPLETED' ? '100%' : '0%';
   }

   const completed = issue.subtasks.filter(
      (sub) => sub.status === 'DONE' || sub.status === 'COMPLETED'
   ).length;
   const percentage = Math.round((completed / issue.subtasks.length) * 100);

   return `${percentage}%`;
}

/**
 * Format labels as comma-separated string
 */
export function formatLabels(labels: Array<{ name: string }>): string {
   if (!labels || labels.length === 0) return 'No labels';
   return labels.map((label) => label.name).join(', ');
}

/**
 * Format issue description for preview
 */
export function formatTaskPreview(description: string, maxLength = 100): string {
   if (!description) return 'No description';

   // Remove markdown formatting
   const plainText = description
      .replace(/[#*`_~]/g, '') // Remove markdown symbols
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .trim();

   if (plainText.length <= maxLength) return plainText;
   return plainText.substring(0, maxLength - 3) + '...';
}

/**
 * Format file size
 */
export function formatFileSize(bytes: number): string {
   if (bytes === 0) return '0 B';

   const k = 1024;
   const sizes = ['B', 'KB', 'MB', 'GB'];
   const i = Math.floor(Math.log(bytes) / Math.log(k));

   return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * Format issue count
 */
export function formatTaskCount(count: number): string {
   if (count === 0) return 'No issues';
   if (count === 1) return '1 issue';
   return `${count.toLocaleString()} issues`;
}

/**
 * Format issue estimate (story points, hours, etc.)
 */
export function formatEstimate(
   estimate: number | null,
   unit: 'hours' | 'points' | 'days' = 'points'
): string {
   if (!estimate || estimate === 0) return 'No estimate';

   switch (unit) {
      case 'hours':
         return `${estimate}h`;
      case 'days':
         return `${estimate}d`;
      case 'points':
      default:
         return `${estimate} pt${estimate === 1 ? '' : 's'}`;
   }
}

/**
 * Format priority with icon
 */
export function formatPriorityWithIcon(priority: string): {
   text: string;
   icon: string;
   color: string;
} {
   const priorityConfig: Record<string, { text: string; icon: string; color: string }> = {
      LOW: { text: 'Low', icon: '⬇️', color: '#10b981' },
      MEDIUM: { text: 'Medium', icon: '➡️', color: '#f59e0b' },
      HIGH: { text: 'High', icon: '⬆️', color: '#f97316' },
      URGENT: { text: 'Urgent', icon: '🔥', color: '#ef4444' },
      CRITICAL: { text: 'Critical', icon: '🚨', color: '#dc2626' },
   };

   return priorityConfig[priority] || { text: priority, icon: '❓', color: '#6b7280' };
}

/**
 * Format time tracking
 */
export function formatTimeTracked(minutes: number): string {
   if (minutes < 60) return `${minutes}m`;

   const hours = Math.floor(minutes / 60);
   const remainingMinutes = minutes % 60;

   if (remainingMinutes === 0) return `${hours}h`;
   return `${hours}h ${remainingMinutes}m`;
}
