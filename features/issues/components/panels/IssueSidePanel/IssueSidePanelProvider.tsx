'use client';

import { useEffect } from 'react';
import { useIssueSidePanelStore } from '@/store/issueSidePanelStore';
import { useGetIssueLazyQuery } from '@/libs/client/graphql-client/generated';
import { IssueSidePanel } from './IssueSidePanel';

export function IssueSidePanelProvider(): React.JSX.Element {
   const { issue, updateIssue } = useIssueSidePanelStore();
   const [getIssue, { data }] = useGetIssueLazyQuery();

   useEffect(() => {
      if (issue?.id) {
         getIssue({ variables: { where: { id: issue.id } } });
      }
   }, [issue?.id, getIssue]);

   useEffect(() => {
      if (data?.issue) {
         updateIssue(data.issue);
      }
   }, [data, updateIssue]);

   return <IssueSidePanel />;
}

export default IssueSidePanelProvider;
