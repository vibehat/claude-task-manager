/**
 * Issue Filtering Utilities
 */

import { Issue } from '../types/issueTypes';
import { IssueFilterInput } from '../types/filtersTypes';

/**
 * Filter issues based on provided criteria
 */
export function filterIssues(issues: Issue[], filters: IssueFilterInput): Issue[] {
   return issues.filter((issue) => {
      // Text search
      if (filters.search) {
         const searchTerm = filters.search.toLowerCase();
         const matchesSearch =
            issue.title.toLowerCase().includes(searchTerm) ||
            issue.description.toLowerCase().includes(searchTerm) ||
            issue.identifier.toLowerCase().includes(searchTerm);

         if (!matchesSearch) return false;
      }

      // Status filter
      if (filters.statusIds && filters.statusIds.length > 0) {
         if (!filters.statusIds.includes(issue.status)) return false;
      }

      // Priority filter
      if (filters.priorityIds && filters.priorityIds.length > 0) {
         if (!filters.priorityIds.includes(issue.priority)) return false;
      }

      // Assignee filter
      if (filters.assigneeIds && filters.assigneeIds.length > 0) {
         if (!issue.assignee || !filters.assigneeIds.includes(issue.assignee.id)) {
            return false;
         }
      }

      // Project filter
      if (filters.projectIds && filters.projectIds.length > 0) {
         if (!issue.project || !filters.projectIds.includes(issue.project.id)) {
            return false;
         }
      }

      // Label filter
      if (filters.labelIds && filters.labelIds.length > 0) {
         const issueLabels = issue.labels.map((label) => label.id);
         const hasMatchingLabel = filters.labelIds.some((labelId) => issueLabels.includes(labelId));
         if (!hasMatchingLabel) return false;
      }

      // Issue type filter
      if (filters.issueType && issue.issueType !== filters.issueType) {
         return false;
      }

      // Parent issue filter
      if (filters.parentIssueId) {
         if (issue.parentIssueId !== filters.parentIssueId) return false;
      }

      // Has subissues filter
      if (typeof filters.hasSubissues === 'boolean') {
         const hasSubissues = issue.subIssues && issue.subIssues.length > 0;
         if (filters.hasSubissues !== hasSubissues) return false;
      }

      // Due date filter
      if (filters.dueDate) {
         if (!issue.dueDate) return false;

         const issueDate = new Date(issue.dueDate);

         if (filters.dueDate.from) {
            const fromDate = new Date(filters.dueDate.from);
            if (issueDate < fromDate) return false;
         }

         if (filters.dueDate.to) {
            const toDate = new Date(filters.dueDate.to);
            if (issueDate > toDate) return false;
         }
      }

      // Created date filter
      if (filters.createdAt) {
         const issueDate = new Date(issue.createdAt);

         if (filters.createdAt.from) {
            const fromDate = new Date(filters.createdAt.from);
            if (issueDate < fromDate) return false;
         }

         if (filters.createdAt.to) {
            const toDate = new Date(filters.createdAt.to);
            if (issueDate > toDate) return false;
         }
      }

      return true;
   });
}

/**
 * Create a quick filter for common use cases
 */
export function createQuickFilter(type: string, value?: any): IssueFilterInput {
   switch (type) {
      case 'my-issues':
         return { assigneeIds: [value] };

      case 'unassigned':
         return { assigneeIds: [] };

      case 'overdue':
         return {
            dueDate: {
               to: new Date(),
            },
         };

      case 'due-today':
         const today = new Date();
         const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
         const endOfDay = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            23,
            59,
            59
         );
         return {
            dueDate: {
               from: startOfDay,
               to: endOfDay,
            },
         };

      case 'high-priority':
         return { priorityIds: ['HIGH', 'URGENT', 'CRITICAL'] };

      case 'recently-created':
         const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
         return {
            createdAt: {
               from: weekAgo,
            },
         };

      case 'recently-updated':
         const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
         return {
            createdAt: {
               from: dayAgo,
            },
         };

      case 'no-labels':
         return { labelIds: [] };

      case 'with-subtasks':
         return { hasSubissues: true };

      case 'without-subtasks':
         return { hasSubissues: false };

      default:
         return {};
   }
}

/**
 * Combine multiple filters
 */
export function combineFilters(...filters: IssueFilterInput[]): IssueFilterInput {
   const combined: IssueFilterInput = {};

   filters.forEach((filter) => {
      Object.keys(filter).forEach((key) => {
         const filterKey = key as keyof IssueFilterInput;
         const value = filter[filterKey];

         if (Array.isArray(value)) {
            // Combine arrays
            const existing = (combined[filterKey] as string[]) || [];
            (combined as any)[filterKey] = [...existing, ...value];
         } else if (typeof value === 'object' && value !== null) {
            // Merge objects (like date ranges)
            (combined as any)[filterKey] = {
               ...((combined[filterKey] as object) || {}),
               ...value,
            };
         } else {
            // Overwrite primitive values
            (combined as any)[filterKey] = value;
         }
      });
   });

   return combined;
}

/**
 * Check if any filters are active
 */
export function hasActiveFilters(filters: IssueFilterInput): boolean {
   return Object.values(filters).some((value) => {
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === 'object' && value !== null) return Object.keys(value).length > 0;
      return value !== undefined && value !== null && value !== '';
   });
}

/**
 * Clear specific filter types
 */
export function clearFilter(
   filters: IssueFilterInput,
   filterType: keyof IssueFilterInput
): IssueFilterInput {
   const newFilters = { ...filters };
   delete newFilters[filterType];
   return newFilters;
}

/**
 * Get filter summary for display
 */
export function getFilterSummary(filters: IssueFilterInput): string[] {
   const summary: string[] = [];

   if (filters.search) {
      summary.push(`Search: "${filters.search}"`);
   }

   if (filters.statusIds && filters.statusIds.length > 0) {
      summary.push(`Status: ${filters.statusIds.join(', ')}`);
   }

   if (filters.priorityIds && filters.priorityIds.length > 0) {
      summary.push(`Priority: ${filters.priorityIds.join(', ')}`);
   }

   if (filters.assigneeIds && filters.assigneeIds.length > 0) {
      summary.push(`Assignee: ${filters.assigneeIds.length} selected`);
   }

   if (filters.projectIds && filters.projectIds.length > 0) {
      summary.push(`Project: ${filters.projectIds.length} selected`);
   }

   if (filters.labelIds && filters.labelIds.length > 0) {
      summary.push(`Labels: ${filters.labelIds.length} selected`);
   }

   if (filters.dueDate) {
      if (filters.dueDate.from && filters.dueDate.to) {
         summary.push(`Due: ${filters.dueDate.from} - ${filters.dueDate.to}`);
      } else if (filters.dueDate.from) {
         summary.push(`Due after: ${filters.dueDate.from}`);
      } else if (filters.dueDate.to) {
         summary.push(`Due before: ${filters.dueDate.to}`);
      }
   }

   return summary;
}
