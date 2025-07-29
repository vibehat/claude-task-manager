import { create } from 'zustand';
import type { GetIssuesQuery } from '@/libs/client/graphql-client/generated';

type IssueFromQuery = GetIssuesQuery['issues'][0];

interface UpdateIssueStore {
   isOpen: boolean;
   issue: IssueFromQuery | null;
   openModal: (issue: IssueFromQuery) => void;
   closeModal: () => void;
}

export const useUpdateIssueStore = create<UpdateIssueStore>((set) => ({
   isOpen: false,
   issue: null,
   openModal: (issue) => set({ isOpen: true, issue }),
   closeModal: () => set({ isOpen: false, issue: null }),
}));
