import { create } from 'zustand';
import type { Issue, IssueDetailsFragment } from '@/libs/client/types';

interface IssueSidePanelStore {
   isOpen: boolean;
   issue: IssueDetailsFragment | null;
   panelWidth: number;
   openPanel: (issue: Issue | IssueDetailsFragment) => void;
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
