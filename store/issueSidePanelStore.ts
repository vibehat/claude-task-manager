import { create } from 'zustand';
import type { GetIssuesQuery, IssueDetailsFragment } from '@/libs/client/graphql-client/generated';

type IssueFromQuery = GetIssuesQuery['issues'][0];

interface IssueSidePanelStore {
   isOpen: boolean;
   issue: IssueDetailsFragment | null;
   panelWidth: number;
   openPanel: (issue: IssueFromQuery | IssueDetailsFragment) => void;
   closePanel: () => void;
   updateIssue: (issue: IssueDetailsFragment) => void;
}

export const useIssueSidePanelStore = create<IssueSidePanelStore>((set) => ({
   isOpen: false,
   issue: null,
   panelWidth: 600,
   openPanel: (issue) => set({ isOpen: true, issue: issue as IssueDetailsFragment }),
   closePanel: () => set({ isOpen: false, issue: null }),
   updateIssue: (issue) => set({ issue }),
}));
