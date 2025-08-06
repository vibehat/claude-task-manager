import React from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { AllTasks } from '@/features/tasks/views/all-tasks';
import Header from '@/features/tasks/layout/header/header';

export default function WorkspaceTasksPage(): React.JSX.Element {
  return (
    <WorkspaceLayout header={<Header />}>
      <AllTasks />
    </WorkspaceLayout>
  );
}
