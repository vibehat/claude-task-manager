import React from 'react';
import AllIssues from '@/components/common/issues/all-issues';
import { IndieLayout } from '@/components/layout/indie-layout';
import TasksOptions from '@/components/layout/headers/indie/tasks-options';

export default function IndieTasksPage(): React.JSX.Element {
   return (
      <IndieLayout showSearch={true} filterOptions={<TasksOptions />}>
         <AllIssues />
      </IndieLayout>
   );
}
