import React from 'react';
import AllIssues from '@/features/issues/views/all-issues';
import IssuesHeader from '@/features/issues/components/headers/header';
import MainLayout from '@/components/layout/main-layout';

export default function AllIssuesPage(): React.JSX.Element {
   return (
      <MainLayout header={<IssuesHeader />}>
         <AllIssues />
      </MainLayout>
   );
}
