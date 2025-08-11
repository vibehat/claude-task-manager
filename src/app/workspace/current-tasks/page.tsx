import React from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { CurrentTasks } from '@/features/tasks/views/current-tasks';
import { Filter } from '@/features/tasks/layout/header/filter';

export default function WorkspaceCurrentTasksPage(): React.JSX.Element {
  return (
    <WorkspaceLayout showSearch filterOptions={<Filter />}>
      <CurrentTasks />
    </WorkspaceLayout>
  );
}
