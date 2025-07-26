/**
 * Issues Utilities
 *
 * Helper functions and utilities for working with issues data
 */

import type { Issue, Status, Priority, User, LabelInterface, Project } from './types';

/**
 * Issue creation utilities
 */
export const issueUtils = {
   /**
    * Generate a new issue identifier
    */
   generateIdentifier: (prefix: string = 'ISS', count: number): string => {
      return `${prefix}-${String(count + 1).padStart(3, '0')}`;
   },

   /**
    * Create issue with default values
    */
   createIssueDefaults: (partial: Partial<Issue>): Partial<Issue> => {
      return {
         title: '',
         description: '',
         rank: new Date().toISOString(),
         createdAt: new Date().toISOString(),
         updatedAt: new Date().toISOString(),
         ...partial,
      };
   },

   /**
    * Validate issue data
    */
   validateIssue: (issue: Partial<Issue>): string[] => {
      const errors: string[] = [];

      if (!issue.title?.trim()) {
         errors.push('Title is required');
      }

      if (issue.title && issue.title.length > 200) {
         errors.push('Title must be less than 200 characters');
      }

      if (!issue.status) {
         errors.push('Status is required');
      }

      if (!issue.priority) {
         errors.push('Priority is required');
      }

      return errors;
   },

   /**
    * Calculate issue age in days
    */
   getIssueAge: (issue: Issue): number => {
      const created = new Date(issue.createdAt);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - created.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
   },

   /**
    * Check if issue is overdue (placeholder - would need due date field)
    */
   isOverdue: (issue: Issue): boolean => {
      // Placeholder implementation - would need a due date field
      return false;
   },

   /**
    * Get issue priority level as number for sorting
    */
   getPriorityLevel: (priority: Priority): number => {
      const levels: Record<string, number> = {
         urgent: 4,
         high: 3,
         medium: 2,
         low: 1,
      };
      return levels[priority.name.toLowerCase()] || 1;
   },

   /**
    * Sort issues by priority
    */
   sortByPriority: (issues: Issue[]): Issue[] => {
      return [...issues].sort((a, b) => {
         const aLevel = issueUtils.getPriorityLevel(a.priority);
         const bLevel = issueUtils.getPriorityLevel(b.priority);
         return bLevel - aLevel; // Higher priority first
      });
   },

   /**
    * Sort issues by creation date
    */
   sortByCreated: (issues: Issue[], ascending: boolean = false): Issue[] => {
      return [...issues].sort((a, b) => {
         const aTime = new Date(a.createdAt).getTime();
         const bTime = new Date(b.createdAt).getTime();
         return ascending ? aTime - bTime : bTime - aTime;
      });
   },

   /**
    * Sort issues by updated date
    */
   sortByUpdated: (issues: Issue[], ascending: boolean = false): Issue[] => {
      return [...issues].sort((a, b) => {
         const aTime = new Date(a.updatedAt).getTime();
         const bTime = new Date(b.updatedAt).getTime();
         return ascending ? aTime - bTime : bTime - aTime;
      });
   },
};

/**
 * Filter utilities
 */
export const filterUtils = {
   /**
    * Get unique statuses from issues
    */
   getUniqueStatuses: (issues: Issue[]): Status[] => {
      const statusMap = new Map<string, Status>();
      issues.forEach((issue) => {
         statusMap.set(issue.status.id, issue.status);
      });
      return Array.from(statusMap.values());
   },

   /**
    * Get unique priorities from issues
    */
   getUniquePriorities: (issues: Issue[]): Priority[] => {
      const priorityMap = new Map<string, Priority>();
      issues.forEach((issue) => {
         priorityMap.set(issue.priority.id, issue.priority);
      });
      return Array.from(priorityMap.values());
   },

   /**
    * Get unique assignees from issues
    */
   getUniqueAssignees: (issues: Issue[]): (User | null)[] => {
      const assigneeMap = new Map<string, User>();
      let hasUnassigned = false;

      issues.forEach((issue) => {
         if (issue.assignee) {
            assigneeMap.set(issue.assignee.id, issue.assignee);
         } else {
            hasUnassigned = true;
         }
      });

      const assignees = Array.from(assigneeMap.values());
      if (hasUnassigned) {
         assignees.push(null);
      }

      return assignees;
   },

   /**
    * Get unique labels from issues
    */
   getUniqueLabels: (issues: Issue[]): LabelInterface[] => {
      const labelMap = new Map<string, LabelInterface>();
      issues.forEach((issue) => {
         issue.labels.forEach((label) => {
            labelMap.set(label.id, label);
         });
      });
      return Array.from(labelMap.values());
   },

   /**
    * Get unique projects from issues
    */
   getUniqueProjects: (issues: Issue[]): (Project | null)[] => {
      const projectMap = new Map<string, Project>();
      let hasNoProject = false;

      issues.forEach((issue) => {
         if (issue.project) {
            projectMap.set(issue.project.id, issue.project);
         } else {
            hasNoProject = true;
         }
      });

      const projects = Array.from(projectMap.values());
      if (hasNoProject) {
         projects.push(null);
      }

      return projects;
   },
};

/**
 * Statistics utilities
 */
export const statsUtils = {
   /**
    * Get issue count by status
    */
   getCountByStatus: (issues: Issue[]): Record<string, number> => {
      const counts: Record<string, number> = {};
      issues.forEach((issue) => {
         const statusId = issue.status.id;
         counts[statusId] = (counts[statusId] || 0) + 1;
      });
      return counts;
   },

   /**
    * Get issue count by priority
    */
   getCountByPriority: (issues: Issue[]): Record<string, number> => {
      const counts: Record<string, number> = {};
      issues.forEach((issue) => {
         const priorityId = issue.priority.id;
         counts[priorityId] = (counts[priorityId] || 0) + 1;
      });
      return counts;
   },

   /**
    * Get issue count by assignee
    */
   getCountByAssignee: (issues: Issue[]): Record<string, number> => {
      const counts: Record<string, number> = {};
      issues.forEach((issue) => {
         const assigneeId = issue.assignee?.id || 'unassigned';
         counts[assigneeId] = (counts[assigneeId] || 0) + 1;
      });
      return counts;
   },

   /**
    * Get completion percentage
    */
   getCompletionPercentage: (issues: Issue[], completedStatusIds: string[]): number => {
      if (issues.length === 0) return 0;

      const completedCount = issues.filter((issue) =>
         completedStatusIds.includes(issue.status.id)
      ).length;

      return Math.round((completedCount / issues.length) * 100);
   },

   /**
    * Get average issue age
    */
   getAverageAge: (issues: Issue[]): number => {
      if (issues.length === 0) return 0;

      const totalAge = issues.reduce((sum, issue) => sum + issueUtils.getIssueAge(issue), 0);

      return Math.round(totalAge / issues.length);
   },
};

/**
 * Cache utilities
 */
export const cacheUtils = {
   /**
    * Generate cache key for filtered issues
    */
   generateFilterCacheKey: (filters: Record<string, any>): string => {
      const sortedFilters = Object.keys(filters)
         .sort()
         .reduce(
            (result, key) => {
               result[key] = filters[key];
               return result;
            },
            {} as Record<string, any>
         );

      return JSON.stringify(sortedFilters);
   },

   /**
    * Check if cache should be invalidated
    */
   shouldInvalidateCache: (lastUpdated: string, maxAge: number = 300000): boolean => {
      const now = Date.now();
      const updated = new Date(lastUpdated).getTime();
      return now - updated > maxAge;
   },
};
