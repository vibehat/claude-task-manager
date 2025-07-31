import type { IssueStatus } from '../types/issueTypes';
import { create } from 'zustand';

interface CreateIssueState {
   isOpen: boolean;
   defaultStatus: IssueStatus | null;

   // Actions
   openModal: (status?: IssueStatus) => void;
   closeModal: () => void;
   setDefaultStatus: (status: IssueStatus | null) => void;
}

export const useCreateIssueStore = create<CreateIssueState>((set) => ({
   // Initial state
   isOpen: false,
   defaultStatus: null,

   // Actions
   openModal: (status) => set({ isOpen: true, defaultStatus: status || null }),
   closeModal: () => set({ isOpen: false }),
   setDefaultStatus: (status) => set({ defaultStatus: status }),
}));
