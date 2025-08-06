import React from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { TaskDetailPage } from '@/features/working-on/views/TaskDetailPage';
import WorkspaceHeader from '@/components/layout/headers/workspace/WorkspaceHeader';

interface TaskDetailPageRouteProps {
  params: {
    taskId: string;
  };
}

export default function TaskDetailPageRoute({
  params,
}: TaskDetailPageRouteProps): React.JSX.Element {
  return (
    <WorkspaceLayout header={<WorkspaceHeader />}>
      <TaskDetailPage taskId={params.taskId} />
    </WorkspaceLayout>
  );
}
