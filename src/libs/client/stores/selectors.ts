import { useDataStore } from './dataStore';
import type { Task, User, Tag, Label, TaskStatus, TaskPriority } from '../types/dataModels';
import { useMemo } from 'react';

// Task selectors
export const useTaskDetail = (id: string): Task | undefined => {
   return useDataStore((state) => state.taskEntities[id]);
};

export const useTasksByStatus = (statusId: string): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      return tasks.filter((task) => task.statusId === statusId);
   }, [taskEntities, statusId]);
};

export const useParentTasksByStatus = (statusId: string): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      return tasks.filter((task) => task.statusId === statusId && !task.parentTaskId);
   }, [taskEntities, statusId]);
};

export const useTasksByTag = (tagId: string): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      return tasks.filter((task) => task.tagId === tagId);
   }, [taskEntities, tagId]);
};

export const useTasksByAssignee = (assigneeId: string): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      return tasks.filter((task) => task.assigneeId === assigneeId);
   }, [taskEntities, assigneeId]);
};

export const useSubtasks = (parentTaskId: string): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      return tasks.filter((task) => task.parentTaskId === parentTaskId);
   }, [taskEntities, parentTaskId]);
};

export const useSearchTasks = (query: string): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      if (!query.trim()) return [];

      const tasks = Object.values(taskEntities);
      const lowerQuery = query.toLowerCase();
      return tasks.filter(
         (task) =>
            task.title.toLowerCase().includes(lowerQuery) ||
            task.description?.toLowerCase().includes(lowerQuery)
      );
   }, [taskEntities, query]);
};

export const useAllTasks = (): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => Object.values(taskEntities), [taskEntities]);
};

// User selectors
export const useUserDetail = (id: string): User | undefined => {
   return useDataStore((state) => state.userEntities[id]);
};

export const useAllUsers = (): User[] => {
   const userEntities = useDataStore((state) => state.userEntities);
   return useMemo(() => Object.values(userEntities), [userEntities]);
};

// Tag selectors
export const useTagDetail = (id: string): Tag | undefined => {
   return useDataStore((state) => state.tagEntities[id]);
};

export const useAllTags = (): Tag[] => {
   const tagEntities = useDataStore((state) => state.tagEntities);
   return useMemo(() => Object.values(tagEntities), [tagEntities]);
};

// Label selectors
export const useLabelDetail = (id: string): Label | undefined => {
   return useDataStore((state) => state.labelEntities[id]);
};

export const useAllLabels = (): Label[] => {
   const labelEntities = useDataStore((state) => state.labelEntities);
   return useMemo(() => Object.values(labelEntities), [labelEntities]);
};

// Status selectors
export const useStatusDetail = (id: string): TaskStatus | undefined => {
   return useDataStore((state) => state.statusEntities[id]);
};

export const useAllStatuses = (): TaskStatus[] => {
   const statusEntities = useDataStore((state) => state.statusEntities);
   return useMemo(() => Object.values(statusEntities), [statusEntities]);
};

// Priority selectors
export const usePriorityDetail = (id: string): TaskPriority | undefined => {
   return useDataStore((state) => state.priorityEntities[id]);
};

export const useAllPriorities = (): TaskPriority[] => {
   const priorityEntities = useDataStore((state) => state.priorityEntities);
   return useMemo(() => Object.values(priorityEntities), [priorityEntities]);
};

// Computed selectors
export const useTaskStats = () => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   const statusEntities = useDataStore((state) => state.statusEntities);

   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      const statuses = Object.values(statusEntities);

      const tasksByStatus = statuses.reduce(
         (acc, status) => {
            acc[status.id] = tasks.filter((task) => task.statusId === status.id).length;
            return acc;
         },
         {} as Record<string, number>
      );

      return {
         totalTasks: tasks.length,
         totalParentTasks: tasks.filter((task) => !task.parentTaskId).length,
         totalSubtasks: tasks.filter((task) => task.parentTaskId).length,
         tasksByStatus,
      };
   }, [taskEntities, statusEntities]);
};

export const useTaskMasterTasks = (): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      return tasks.filter((task) => task.taskId !== undefined);
   }, [taskEntities]);
};

export const useUITasks = (): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      return tasks.filter((task) => task.taskId === undefined);
   }, [taskEntities]);
};
