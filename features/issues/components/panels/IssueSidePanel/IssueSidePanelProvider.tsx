'use client';

import { useEffect } from 'react';
import { useIssueSidePanelStore } from '@/store/issueSidePanelStore';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { IssueSidePanel } from './IssueSidePanel';

export function IssueSidePanelProvider(): React.JSX.Element {
   const { issue, updateIssue } = useIssueSidePanelStore();
   const { getIssueById } = useDataStore();

   useEffect(() => {
      if (issue?.id) {
         // Get the latest issue data from the store
         const latestIssue = getIssueById(issue.id);
         if (latestIssue) {
            updateIssue(latestIssue);
         }
      }
   }, [issue?.id, getIssueById, updateIssue]);

   return <IssueSidePanel />;
}

export default IssueSidePanelProvider;
