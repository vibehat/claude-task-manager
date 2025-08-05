'use client';

import { Target } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function WorkingOnPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Working On"
        description="Your current active task with progress tracking and focus mode"
        icon={Target}
        plannedFeatures={[
          'Current active task display with detailed progress',
          'Focus mode to minimize distractions',
          'Time tracking and session management',
          'Quick task switching with context preservation',
          'Integration with Task Master CLI for real-time updates',
          'Pomodoro timer and productivity tools',
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
            description: 'Browse all available tasks',
            url: '/workspace/tasks',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
