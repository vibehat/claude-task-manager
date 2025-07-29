import type { GetIssueStatusesQuery } from '@/libs/client/graphql-client/generated';
import { create } from 'zustand';

type IssueStatusFromQuery = GetIssueStatusesQuery['issueStatuses'][0];

interface CreateIssueState {
   isOpen: boolean;
   defaultStatus: IssueStatusFromQuery | null;

   // Actions
   openModal: (status?: IssueStatusFromQuery) => void;
   closeModal: () => void;
   setDefaultStatus: (status: IssueStatusFromQuery | null) => void;
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
