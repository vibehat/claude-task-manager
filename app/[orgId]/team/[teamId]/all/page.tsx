import React from 'react';
import { AllIssues, IssuesHeader } from '@/features/issues';
import MainLayout from '@/components/layout/main-layout';

export default function AllIssuesPage(): React.JSX.Element {
   return (
      <MainLayout header={<IssuesHeader />}>
         <AllIssues />
      </MainLayout>
   );
}
