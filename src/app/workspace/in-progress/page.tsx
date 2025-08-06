'use client';

import { PlayCircle } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function InProgressPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="In Progress"
        description="Work you are actively developing with progress tracking"
        icon={PlayCircle}
        plannedFeatures={[
          'Active tasks with real-time progress indicators',
          'Time tracking and session history',
          'Context notes and implementation details',
          'Integration with git commits and branches',
          'Collaboration status for team coordination',
          'Quick status updates and blockers reporting',
        ]}
        timeline="Phase 1 - Week 3"
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
