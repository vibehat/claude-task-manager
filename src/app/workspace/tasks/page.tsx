import React from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { AllTasks } from '@/features/tasks/views/all-tasks';
import { Filter } from '@/features/tasks/layout/header/filter';

export default function WorkspaceTasksPage(): React.JSX.Element {
  return (
    <WorkspaceLayout showSearch filterOptions={<Filter />}>
      <AllTasks />
    </WorkspaceLayout>
  );
}
