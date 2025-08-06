'use client';

import { Clock } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function UpNextPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Up Next"
        description="2-3 tasks ready to go when you finish your current work"
        icon={Clock}
        plannedFeatures={[
          'Smart queue of 2-3 next tasks based on priorities',
          'Dependency-aware task ordering',
          'Quick preview of task requirements',
          'Drag and drop reordering of upcoming tasks',
          'Context switching preparation',
          'Estimated time and complexity indicators',
        ]}
        timeline="Phase 1 - Week 2"
        alternativeLinks={[
          {
            title: 'Current Tasks',
            description: 'View tasks for current tag',
            url: '/workspace/current-tasks',
          },
          {
            title: 'All Tasks',
            description: 'Browse and manage all tasks',
            url: '/workspace/tasks',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
