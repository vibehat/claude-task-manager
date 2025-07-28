/**
 * Issue Grouping Utilities
 */

import { Issue } from '../types/issue.types';
import { GroupByOption } from '../types/views.types';

export interface IssueGroup {
   key: string;
   label: string;
   issues: Issue[];
   count: number;
   color?: string;
   icon?: string;
}

/**
 * Group issues by the specified criteria
 */
export function groupIssues(issues: Issue[], groupBy: GroupByOption): IssueGroup[] {
   switch (groupBy) {
      case 'status':
         return groupByStatus(issues);
      case 'assignee':
         return groupByAssignee(issues);
      case 'priority':
         return groupByPriority(issues);
      case 'project':
         return groupByProject(issues);
      case 'label':
         return groupByLabel(issues);
      case 'none':
      default:
         return [
            {
               key: 'all',
               label: 'All Issues',
               issues,
               count: issues.length,
            },
         ];
   }
}

/**
 * Group issues by status
 */
function groupByStatus(issues: Issue[]): IssueGroup[] {
   const groups = new Map<string, Issue[]>();

   issues.forEach((issue) => {
      const status = issue.status || 'No Status';
      if (!groups.has(status)) {
         groups.set(status, []);
      }
      groups.get(status)!.push(issue);
   });

   return Array.from(groups.entries()).map(([status, groupIssues]) => ({
      key: status,
      label: formatStatusLabel(status),
      issues: groupIssues,
      count: groupIssues.length,
      color: getStatusColor(status),
   }));
}

/**
 * Group issues by assignee
 */
function groupByAssignee(issues: Issue[]): IssueGroup[] {
   const groups = new Map<string, Issue[]>();

   issues.forEach((issue) => {
      const assigneeId = issue.assignee?.id || 'unassigned';
      if (!groups.has(assigneeId)) {
         groups.set(assigneeId, []);
      }
      groups.get(assigneeId)!.push(issue);
   });

   return Array.from(groups.entries()).map(([assigneeId, groupIssues]) => {
      const assignee = groupIssues[0]?.assignee;
      return {
         key: assigneeId,
         label: assignee ? assignee.name : 'Unassigned',
         issues: groupIssues,
         count: groupIssues.length,
         icon: assignee?.avatarUrl,
      };
   });
}

/**
 * Group issues by priority
 */
function groupByPriority(issues: Issue[]): IssueGroup[] {
   const priorityOrder = ['URGENT', 'HIGH', 'MEDIUM', 'LOW', 'No Priority'];
   const groups = new Map<string, Issue[]>();

   issues.forEach((issue) => {
      const priority = issue.priority || 'No Priority';
      if (!groups.has(priority)) {
         groups.set(priority, []);
      }
      groups.get(priority)!.push(issue);
   });

   // Sort groups by priority order
   const sortedGroups = priorityOrder
      .filter((priority) => groups.has(priority))
      .map((priority) => [priority, groups.get(priority)!] as [string, Issue[]]);

   return sortedGroups.map(([priority, groupIssues]) => ({
      key: priority,
      label: formatPriorityLabel(priority),
      issues: groupIssues,
      count: groupIssues.length,
      color: getPriorityColor(priority),
   }));
}

/**
 * Group issues by project
 */
function groupByProject(issues: Issue[]): IssueGroup[] {
   const groups = new Map<string, Issue[]>();

   issues.forEach((issue) => {
      const projectId = issue.project?.id || 'no-project';
      if (!groups.has(projectId)) {
         groups.set(projectId, []);
      }
      groups.get(projectId)!.push(issue);
   });

   return Array.from(groups.entries()).map(([projectId, groupIssues]) => {
      const project = groupIssues[0]?.project;
      return {
         key: projectId,
         label: project ? project.name : 'No Project',
         issues: groupIssues,
         count: groupIssues.length,
         color: project?.color,
         icon: project?.icon,
      };
   });
}

/**
 * Group issues by label (first label or no label)
 */
function groupByLabel(issues: Issue[]): IssueGroup[] {
   const groups = new Map<string, Issue[]>();

   issues.forEach((issue) => {
      const firstLabel = issue.labels?.[0];
      const labelId = firstLabel?.id || 'no-label';

      if (!groups.has(labelId)) {
         groups.set(labelId, []);
      }
      groups.get(labelId)!.push(issue);
   });

   return Array.from(groups.entries()).map(([labelId, groupIssues]) => {
      const label = groupIssues[0]?.labels?.[0];
      return {
         key: labelId,
         label: label ? label.name : 'No Label',
         issues: groupIssues,
         count: groupIssues.length,
         color: label?.color,
      };
   });
}

/**
 * Format status label for display
 */
function formatStatusLabel(status: string): string {
   const statusLabels: Record<string, string> = {
      OPEN: 'Open',
      TODO: 'To Do',
      IN_PROGRESS: 'In Progress',
      DOING: 'Doing',
      REVIEW: 'In Review',
      DONE: 'Done',
      COMPLETED: 'Completed',
      CANCELLED: 'Cancelled',
      BLOCKED: 'Blocked',
   };
   return statusLabels[status] || status;
}

/**
 * Format priority label for display
 */
function formatPriorityLabel(priority: string): string {
   const priorityLabels: Record<string, string> = {
      LOW: 'Low Priority',
      MEDIUM: 'Medium Priority',
      HIGH: 'High Priority',
      URGENT: 'Urgent',
      CRITICAL: 'Critical',
   };
   return priorityLabels[priority] || priority;
}

/**
 * Get status color
 */
function getStatusColor(status: string): string {
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
 * Get priority color
 */
function getPriorityColor(priority: string): string {
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
 * Sort groups by a specific criteria
 */
export function sortGroups(
   groups: IssueGroup[],
   sortBy: 'name' | 'count' | 'priority' = 'name',
   direction: 'asc' | 'desc' = 'asc'
): IssueGroup[] {
   return [...groups].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
         case 'name':
            comparison = a.label.localeCompare(b.label);
            break;
         case 'count':
            comparison = a.count - b.count;
            break;
         case 'priority':
            // Custom priority order for status groups
            const priorityOrder = ['URGENT', 'HIGH', 'MEDIUM', 'LOW'];
            const aPriority = priorityOrder.indexOf(a.key);
            const bPriority = priorityOrder.indexOf(b.key);
            comparison = aPriority - bPriority;
            break;
      }

      return direction === 'desc' ? -comparison : comparison;
   });
}

/**
 * Filter groups by minimum count
 */
export function filterGroupsByCount(groups: IssueGroup[], minCount: number = 1): IssueGroup[] {
   return groups.filter((group) => group.count >= minCount);
}

/**
 * Get group statistics
 */
export function getGroupStats(groups: IssueGroup[]) {
   const totalIssues = groups.reduce((sum, group) => sum + group.count, 0);
   const totalGroups = groups.length;
   const averagePerGroup = totalGroups > 0 ? Math.round(totalIssues / totalGroups) : 0;
   const largestGroup = groups.reduce(
      (max, group) => (group.count > max.count ? group : max),
      groups[0] || { count: 0, label: '' }
   );

   return {
      totalIssues,
      totalGroups,
      averagePerGroup,
      largestGroup: largestGroup.label,
      largestGroupCount: largestGroup.count,
   };
}
