import React from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { CurrentTasks } from '@/features/tasks/views/current-tasks';
import Header from '@/features/tasks/layout/header/header';

export default function WorkspaceCurrentTasksPage(): React.JSX.Element {
  return (
    <WorkspaceLayout header={<Header />}>
      <CurrentTasks />
    </WorkspaceLayout>
  );
}
