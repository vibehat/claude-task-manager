import { create } from 'zustand';
import type { Issue } from '@/libs/client/types';

interface UpdateIssueStore {
   isOpen: boolean;
   issue: Issue | null;
   openModal: (issue: Issue) => void;
   closeModal: () => void;
}

export const useUpdateIssueStore = create<UpdateIssueStore>((set) => ({
   isOpen: false,
   issue: null,
   openModal: (issue) => set({ isOpen: true, issue }),
   closeModal: () => set({ isOpen: false, issue: null }),
}));
