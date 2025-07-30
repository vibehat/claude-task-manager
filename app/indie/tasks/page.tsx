import React from 'react';
import AllIssues from '@/features/issues/views/all-issues';
import { IndieLayout } from '@/components/layout/IndieLayout';
import TasksOptions from '@/components/layout/headers/indie/TasksOptions';

export default function IndieTasksPage(): React.JSX.Element {
   return (
      <IndieLayout showSearch={true} filterOptions={<TasksOptions />}>
         <AllIssues />
      </IndieLayout>
   );
}
