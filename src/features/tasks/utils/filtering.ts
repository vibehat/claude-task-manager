/**
 * Task Filtering Utilities
 */

import type { Task } from '../../../libs/client/types/dataModels';
import type { TaskFilterInput } from '../types/filtersTypes';

/**
 * Filter issues based on provided criteria
 */
export function filterTasks(issues: Task[], filters: TaskFilterInput): Task[] {
  // Early return if no filters are active to avoid unnecessary processing
  const hasActiveFilters =
    filters.search ||
    (filters.statusIds && filters.statusIds.length > 0) ||
    (filters.priorityIds && filters.priorityIds.length > 0) ||
    (filters.labelIds && filters.labelIds.length > 0) ||
    (filters.tagIds && filters.tagIds.length > 0) ||
    // parentTaskId filter removed - using taskId/subtaskId for hierarchy
    filters.createdAt;

  if (!hasActiveFilters) {
    return issues;
  }

  // Pre-compute search term for performance
  const searchTerm = filters.search?.toLowerCase();

  // Create sets for O(1) lookup performance
  const statusSet = filters.statusIds ? new Set(filters.statusIds) : null;
  const prioritySet = filters.priorityIds ? new Set(filters.priorityIds) : null;
  const labelSet = filters.labelIds ? new Set(filters.labelIds) : null;
  const tagSet = filters.tagIds ? new Set(filters.tagIds) : null;

  return issues.filter((issue) => {
    // Text search - optimized with early exit
    if (searchTerm) {
      const titleMatch = issue.title.toLowerCase().includes(searchTerm);
      if (titleMatch) {
        // Continue with other filters if title matches
      } else {
        const descMatch = issue.description?.toLowerCase().includes(searchTerm);
        const idMatch = issue.id.toLowerCase().includes(searchTerm);
        if (!descMatch && !idMatch) return false;
      }
    }

    // Status filter - O(1) lookup
    if (statusSet && !statusSet.has(issue.statusId)) {
      return false;
    }

    // Priority filter - O(1) lookup with null check
    if (prioritySet && (!issue.priorityId || !prioritySet.has(issue.priorityId))) {
      return false;
    }

    // Label filter - optimized with Set lookup
    if (labelSet && !issue.labelIds.some((labelId) => labelSet.has(labelId))) {
      return false;
    }

    // Tag filter - O(1) lookup with null check
    if (tagSet && (!issue.tagId || !tagSet.has(issue.tagId))) {
      return false;
    }

    // Parent task filter removed - hierarchy now handled by taskId/subtaskId
    // Tasks are filtered by task type instead

    // Created date filter - optimized date comparison
    if (filters.createdAt) {
      const issueTime = issue.createdAt.getTime();

      if (filters.createdAt.from && issueTime < filters.createdAt.from.getTime()) {
        return false;
      }

      if (filters.createdAt.to && issueTime > filters.createdAt.to.getTime()) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Create a quick filter for common use cases
 */
export function createQuickFilter(type: string, _value?: any): TaskFilterInput {
  switch (type) {
    case 'my-issues':
      return {};

    case 'unassigned':
      return {};

    case 'overdue':
      return {
        dueDate: {
          to: new Date(),
        },
      };

    case 'due-today':
      const today = new Date();
      const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
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
      return { hasSubtasks: true };

    case 'without-subtasks':
      return { hasSubtasks: false };

    default:
      return {};
  }
}

/**
 * Combine multiple filters
 */
export function combineFilters(...filters: TaskFilterInput[]): TaskFilterInput {
  const combined: TaskFilterInput = {};

  filters.forEach((filter) => {
    Object.keys(filter).forEach((key) => {
      const filterKey = key as keyof TaskFilterInput;
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
export function hasActiveFilters(filters: TaskFilterInput): boolean {
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
  filters: TaskFilterInput,
  filterType: keyof TaskFilterInput
): TaskFilterInput {
  const newFilters = { ...filters };
  delete newFilters[filterType];
  return newFilters;
}

/**
 * Get filter summary for display
 */
export function getFilterSummary(filters: TaskFilterInput): string[] {
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
