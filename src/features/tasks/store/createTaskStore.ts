import type { TaskStatus } from '../types/taskTypes';
import { create } from 'zustand';

interface CreateTaskState {
   isOpen: boolean;
   defaultStatus: TaskStatus | null;

   // Actions
   openModal: (status?: TaskStatus) => void;
   closeModal: () => void;
   setDefaultStatus: (status: TaskStatus | null) => void;
}

export const useCreateTaskStore = create<CreateTaskState>((set) => ({
   // Initial state
   isOpen: false,
   defaultStatus: null,

   // Actions
   openModal: (status) => set({ isOpen: true, defaultStatus: status || null }),
   closeModal: () => set({ isOpen: false }),
   setDefaultStatus: (status) => set({ defaultStatus: status }),
}));
