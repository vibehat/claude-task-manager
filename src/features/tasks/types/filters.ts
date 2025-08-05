// Task filtering specific types
export type FilterType = 'status' | 'priority' | 'labels' | 'tag';

// Filter input for task queries - matches the actual usage in taskFilterStore
export interface TaskFilterInput {
  // Simple filters with 'in' syntax for multiple values
  statusId?: { in: string[] };
  priorityId?: { in: string[] };
  tagId?: { in: string[] };
  assigneeId?: { in: string[] };

  // Complex nested filter for labels
  labels?: {
    some?: {
      labelId?: {
        in?: string[];
      };
    };
  };

  // Additional filters that might be needed
  id?: string | string[] | { in: string[] };
  title?: string;
  labelIds?: string | string[];
  createdAt?: {
    gte?: string;
    lte?: string;
  };
  updatedAt?: {
    gte?: string;
    lte?: string;
  };
}

// Filter state interface for the store
export interface FilterState {
  // Direct TaskFilterInput storage
  where: TaskFilterInput;

  // Actions
  setFilter: (type: FilterType, ids: string[]) => void;
  toggleFilter: (type: FilterType, id: string) => void;
  clearFilters: () => void;
  clearFilterType: (type: FilterType) => void;
  setWhere: (where: TaskFilterInput) => void;

  // Utility
  hasActiveFilters: () => boolean;
  getActiveFiltersCount: () => number;
  getFilterIds: (type: FilterType) => string[];
}
