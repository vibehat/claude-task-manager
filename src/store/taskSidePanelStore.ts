import { create } from 'zustand';
import type { Task, TaskDetailsFragment } from '@/libs/client/types';

interface TaskSidePanelStore {
  isOpen: boolean;
  taskId: string | null;
  panelWidth: number;
  isFullscreen: boolean;
  openPanel: (task: Task | TaskDetailsFragment) => void;
  closePanel: () => void;
  setTaskId: (taskId: string) => void;
  toggleFullscreen: () => void;
  setFullscreen: (fullscreen: boolean) => void;
}

export const useTaskSidePanelStore = create<TaskSidePanelStore>((set) => ({
  isOpen: false,
  taskId: null,
  panelWidth: 600,
  isFullscreen: false,
  openPanel: (task) => {
    set({ isOpen: true, taskId: task.id });
  },
  closePanel: () => set({ isOpen: false, taskId: null, isFullscreen: false }),
  setTaskId: (taskId) => set({ taskId }),
  toggleFullscreen: () => set((state) => ({ isFullscreen: !state.isFullscreen })),
  setFullscreen: (fullscreen) => set({ isFullscreen: fullscreen }),
}));
