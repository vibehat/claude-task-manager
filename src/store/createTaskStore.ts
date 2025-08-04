import type { TaskStatus, Tag } from '@/libs/client/types';
import { create } from 'zustand';

interface CreateTaskState {
  isOpen: boolean;
  defaultStatus: TaskStatus | null;
  defaultTag: Tag | null;

  // Actions
  openModal: (status?: TaskStatus, tag?: Tag) => void;
  closeModal: () => void;
  setDefaultStatus: (status: TaskStatus | null) => void;
  setDefaultTag: (tag: Tag | null) => void;
}

export const useCreateTaskStore = create<CreateTaskState>((set) => ({
  // Initial state
  isOpen: false,
  defaultStatus: null,
  defaultTag: null,

  // Actions
  openModal: (status, tag) =>
    set({ isOpen: true, defaultStatus: status || null, defaultTag: tag || null }),
  closeModal: () => set({ isOpen: false }),
  setDefaultStatus: (status) => set({ defaultStatus: status }),
  setDefaultTag: (tag) => set({ defaultTag: tag }),
}));
