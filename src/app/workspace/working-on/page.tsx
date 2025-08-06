import React from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { WorkingOnPageClient } from '@/features/working-on/views/WorkingOnPageClient';
import WorkspaceHeader from '@/components/layout/headers/workspace/WorkspaceHeader';
import { WorkingOnHeaderActions } from '@/features/working-on/components/WorkingOnHeaderActions';

export default function WorkingOnPageRoute(): React.JSX.Element {
  return (
    <WorkspaceLayout header={<WorkspaceHeader actions={<WorkingOnHeaderActions />} />}>
      <WorkingOnPageClient />
    </WorkspaceLayout>
  );
}
