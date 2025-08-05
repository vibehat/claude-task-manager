import { create } from 'zustand';
import type { Task, TaskDetails, TaskMasterTask } from '@/libs/client/types';

interface TaskSidePanelStore {
  isOpen: boolean;
  taskId: string | null;
  panelWidth: number;
  isFullscreen: boolean;
  openPanel: (task: Task | TaskDetails | TaskMasterTask) => void;
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
    set({ isOpen: true, taskId: String(task.id) });
  },
  closePanel: () => set({ isOpen: false, taskId: null, isFullscreen: false }),
  setTaskId: (taskId) => set({ taskId }),
  toggleFullscreen: () => set((state) => ({ isFullscreen: !state.isFullscreen })),
  setFullscreen: (fullscreen) => set({ isFullscreen: fullscreen }),
}));
