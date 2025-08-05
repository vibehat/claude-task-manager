import { create } from 'zustand';
import type { TaskFilterInput, FilterState, FilterType } from '../types/filters';

// Re-export types for convenience
export type { TaskFilterInput, FilterState, FilterType };

export const useTasksFilterStore = create<FilterState>((set, get) => ({
  // Initial state - direct TaskFilterInput
  // Filter for main tasks (no subtask hierarchy needed)
  where: {},
  // Note: parentTaskId filtering removed - using taskId/subtaskId for hierarchy

  // Actions
  setFilter: (type, ids) => {
    set((state) => {
      const newWhere = { ...state.where };

      if (ids.length === 0) {
        // Clear filter
        switch (type) {
          case 'status':
            delete newWhere.statusId;
            break;
          case 'priority':
            delete newWhere.priorityId;
            break;
          case 'tag':
            delete newWhere.tagId;
            break;
          case 'labels':
            delete newWhere.labels;
            break;
        }
      } else {
        // Set filter
        switch (type) {
          case 'status':
            newWhere.statusId = { in: ids };
            break;
          case 'priority':
            newWhere.priorityId = { in: ids };
            break;
          case 'tag':
            newWhere.tagId = { in: ids };
            break;
          case 'labels':
            newWhere.labels = { some: { labelId: { in: ids } } };
            break;
        }
      }

      // Parent task filter removed - hierarchy handled by taskId/subtaskId

      return { where: newWhere };
    });
  },

  toggleFilter: (type, id) => {
    const currentIds = get().getFilterIds(type);
    const newIds = currentIds.includes(id)
      ? currentIds.filter((item) => item !== id)
      : [...currentIds, id];
    get().setFilter(type, newIds);
  },

  clearFilters: () => {
    set({ where: {} });
    // Parent task filter removed - no longer needed
  },

  clearFilterType: (type) => {
    get().setFilter(type, []);
  },

  setWhere: (where) => {
    // No automatic parent task filter needed
    set({ where });
  },

  // Utility
  hasActiveFilters: () => {
    const { where } = get();
    // Count all filter keys as active filters
    const filterKeys = Object.keys(where);
    return filterKeys.length > 0;
  },

  getActiveFiltersCount: () => {
    const { where } = get();
    let count = 0;

    if (where.statusId?.in) count += where.statusId.in.length;
    if (where.priorityId?.in) count += where.priorityId.in.length;
    if (where.tagId?.in) count += where.tagId.in.length;
    if (where.labels?.some?.labelId?.in) count += where.labels.some.labelId.in.length;

    return count;
  },

  getFilterIds: (type) => {
    const { where } = get();

    switch (type) {
      case 'status':
        return where.statusId?.in || [];
      case 'priority':
        return where.priorityId?.in || [];
      case 'tag':
        return where.tagId?.in || [];
      case 'labels':
        return where.labels?.some?.labelId?.in || [];
      default:
        return [];
    }
  },
}));
