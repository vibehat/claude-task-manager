/**
 * Issue Helper Utilities
 */

import { Issue, IssueStatus, IssuePriority } from '../types/issueTypes';

/**
 * Generate a unique identifier for an issue
 */
export function generateIssueIdentifier(projectIdentifier: string, issueNumber: number): string {
   return `${projectIdentifier}-${issueNumber}`;
}

/**
 * Check if an issue is overdue
 */
export function isIssueOverdue(issue: Issue): boolean {
   if (!issue.dueDate) return false;
   return new Date(issue.dueDate) < new Date();
}

/**
 * Check if an issue is completed
 */
export function isIssueCompleted(issue: Issue): boolean {
   return issue.status === 'DONE' || issue.status === 'COMPLETED';
}

/**
 * Check if an issue is in progress
 */
export function isIssueInProgress(issue: Issue): boolean {
   return issue.status === 'IN_PROGRESS' || issue.status === 'DOING';
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
 * Calculate the completion percentage of an issue based on subtasks
 */
export function calculateIssueProgress(issue: Issue): number {
   if (!issue.subIssues || issue.subIssues.length === 0) {
      return isIssueCompleted(issue) ? 100 : 0;
   }

   const completedSubtasks = issue.subIssues.filter(isIssueCompleted).length;
   return Math.round((completedSubtasks / issue.subIssues.length) * 100);
}

/**
 * Get relative time string for issue dates
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
 * Truncate issue title for display
 */
export function truncateTitle(title: string, maxLength: number = 50): string {
   if (title.length <= maxLength) return title;
   return title.substring(0, maxLength - 3) + '...';
}

/**
 * Extract mentions from issue description
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
 * Format issue description for display (strip markdown, limit length)
 */
export function formatIssueDescription(description: string, maxLength: number = 100): string {
   // Remove markdown formatting
   const plainText = description
      .replace(/[#*`_~]/g, '') // Remove markdown symbols
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
      .replace(/\n/g, ' ') // Replace newlines with spaces
      .trim();

   return truncateTitle(plainText, maxLength);
}

/**
 * Check if a user can edit an issue
 */
export function canEditIssue(issue: Issue, userId: string, userRole: string): boolean {
   // Admin can edit all issues
   if (userRole === 'ADMIN') return true;

   // Assignee can edit their assigned issues
   if (issue.assignee?.id === userId) return true;

   // Project lead can edit issues in their project
   if (issue.project?.lead?.id === userId) return true;

   return false;
}

/**
 * Sort issues by multiple criteria
 */
export function sortIssues(
   issues: Issue[],
   sortBy: 'priority' | 'created' | 'updated' | 'dueDate' | 'title' | 'status',
   direction: 'asc' | 'desc' = 'desc'
): Issue[] {
   const sortedIssues = [...issues].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
         case 'priority':
            comparison = getPriorityLevel(a.priority) - getPriorityLevel(b.priority);
            break;
         case 'created':
            comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            break;
         case 'updated':
            comparison = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
            break;
         case 'dueDate':
            if (!a.dueDate && !b.dueDate) return 0;
            if (!a.dueDate) return 1;
            if (!b.dueDate) return -1;
            comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            break;
         case 'title':
            comparison = a.title.localeCompare(b.title);
            break;
         case 'status':
            comparison = a.status.localeCompare(b.status);
            break;
         default:
            return 0;
      }

      return direction === 'desc' ? -comparison : comparison;
   });

   return sortedIssues;
}
