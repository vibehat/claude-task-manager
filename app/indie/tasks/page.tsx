import React from 'react';
import AllIssues from '@/components/common/issues/all-issues';
import Header from '@/components/layout/headers/indie-tasks/header';
import { IndieLayout } from '@/components/layout/indie-layout';

export default function IndieTasksPage(): React.JSX.Element {
   return (
      <IndieLayout header={<Header />}>
         <AllIssues />
      </IndieLayout>
   );
}
