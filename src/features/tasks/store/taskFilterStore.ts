import { create } from 'zustand';
import type { TaskWhereInput } from '@/libs/client/types';

export type FilterType = 'status' | 'assignee' | 'priority' | 'labels' | 'project';

export interface FilterState {
   // Direct TaskWhereInput storage
   where: TaskWhereInput;

   // Actions
   setFilter: (type: FilterType, ids: string[]) => void;
   toggleFilter: (type: FilterType, id: string) => void;
   clearFilters: () => void;
   clearFilterType: (type: FilterType) => void;
   setWhere: (where: TaskWhereInput) => void;

   // Utility
   hasActiveFilters: () => boolean;
   getActiveFiltersCount: () => number;
   getFilterIds: (type: FilterType) => string[];
}

export const useTasksFilterStore = create<FilterState>((set, get) => ({
   // Initial state - direct TaskWhereInput
   // Always filter for parent tasks only
   where: {
      parentTaskId: { equals: null },
   },

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
               case 'assignee':
                  delete newWhere.assigneeId;
                  break;
               case 'priority':
                  delete newWhere.priorityId;
                  break;
               case 'project':
                  delete newWhere.projectId;
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
               case 'assignee':
                  newWhere.assigneeId = { in: ids };
                  break;
               case 'priority':
                  newWhere.priorityId = { in: ids };
                  break;
               case 'project':
                  newWhere.projectId = { in: ids };
                  break;
               case 'labels':
                  newWhere.labels = { some: { labelId: { in: ids } } };
                  break;
            }
         }

         // Always keep parent task filter
         newWhere.parentTaskId = { equals: null };

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
      set({ where: { parentTaskId: { equals: null } } });
   },

   clearFilterType: (type) => {
      get().setFilter(type, []);
   },

   setWhere: (where) => {
      // Always include parent task filter
      set({ where: { ...where, parentTaskId: { equals: null } } });
   },

   // Utility
   hasActiveFilters: () => {
      const { where } = get();
      // Don't count parentTaskId filter as an active filter since it's always there
      const filterKeys = Object.keys(where).filter((key) => key !== 'parentTaskId');
      return filterKeys.length > 0;
   },

   getActiveFiltersCount: () => {
      const { where } = get();
      let count = 0;

      if (where.statusId?.in) count += where.statusId.in.length;
      if (where.assigneeId?.in) count += where.assigneeId.in.length;
      if (where.priorityId?.in) count += where.priorityId.in.length;
      if (where.projectId?.in) count += where.projectId.in.length;
      if (where.labels?.some?.labelId?.in) count += where.labels.some.labelId.in.length;

      return count;
   },

   getFilterIds: (type) => {
      const { where } = get();

      switch (type) {
         case 'status':
            return where.statusId?.in || [];
         case 'assignee':
            return where.assigneeId?.in || [];
         case 'priority':
            return where.priorityId?.in || [];
         case 'project':
            return where.projectId?.in || [];
         case 'labels':
            return where.labels?.some?.labelId?.in || [];
         default:
            return [];
      }
   },
}));
