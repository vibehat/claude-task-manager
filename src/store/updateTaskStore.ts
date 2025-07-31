import { create } from 'zustand';
import type { Task } from '@/libs/client/types';

interface UpdateTaskStore {
   isOpen: boolean;
   task: Task | null;
   openModal: (task: Task) => void;
   closeModal: () => void;
}

export const useUpdateTaskStore = create<UpdateTaskStore>((set) => ({
   isOpen: false,
   task: null,
   openModal: (task) => set({ isOpen: true, task }),
   closeModal: () => set({ isOpen: false, task: null }),
}));
