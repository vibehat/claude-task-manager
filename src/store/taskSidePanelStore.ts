import { create } from 'zustand';
import type { Task, TaskDetailsFragment } from '@/libs/client/types';

interface TaskSidePanelStore {
   isOpen: boolean;
   taskId: string | null;
   panelWidth: number;
   openPanel: (task: Task | TaskDetailsFragment) => void;
   closePanel: () => void;
   setTaskId: (taskId: string) => void;
}

export const useTaskSidePanelStore = create<TaskSidePanelStore>((set) => ({
   isOpen: false,
   taskId: null,
   panelWidth: 600,
   openPanel: (task) => {
      set({ isOpen: true, taskId: task.id });
   },
   closePanel: () => set({ isOpen: false, taskId: null }),
   setTaskId: (taskId) => set({ taskId }),
}));
