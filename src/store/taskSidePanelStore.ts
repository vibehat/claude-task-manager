import { create } from 'zustand';
import type { Task, TaskDetailsFragment } from '@/libs/client/types';

interface TaskSidePanelStore {
   isOpen: boolean;
   task: TaskDetailsFragment | null;
   panelWidth: number;
   openPanel: (task: Task | TaskDetailsFragment) => void;
   closePanel: () => void;
   updateTask: (task: TaskDetailsFragment) => void;
}

export const useTaskSidePanelStore = create<TaskSidePanelStore>((set) => ({
   isOpen: false,
   task: null,
   panelWidth: 600,
   openPanel: (task) => set({ isOpen: true, task: task as TaskDetailsFragment }),
   closePanel: () => set({ isOpen: false, task: null }),
   updateTask: (task) => set({ task }),
}));
