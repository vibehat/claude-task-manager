import { create } from 'zustand';
import type { GetIssuesQuery } from '@/libs/client/graphql-client/generated';

type IssueFromQuery = GetIssuesQuery['issues'][0];

interface IssueSidePanelStore {
   isOpen: boolean;
   issue: IssueFromQuery | null;
   panelWidth: number;
   openPanel: (issue: IssueFromQuery) => void;
   closePanel: () => void;
}

export const useIssueSidePanelStore = create<IssueSidePanelStore>((set) => ({
   isOpen: false,
   issue: null,
   panelWidth: 600,
   openPanel: (issue) => set({ isOpen: true, issue }),
   closePanel: () => set({ isOpen: false, issue: null }),
}));
