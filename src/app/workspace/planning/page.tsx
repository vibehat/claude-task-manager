'use client';

import { Calendar } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function PlanningPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Planning"
        description="Timeline and milestone tracking for important deadlines"
        icon={Calendar}
        plannedFeatures={[
          'Visual timeline with drag-and-drop milestone management',
          'Deadline tracking with smart notifications',
          'Dependency visualization and critical path analysis',
          'Sprint and iteration planning tools',
          'Resource allocation and team coordination',
          'Integration with Task Master task scheduling',
        ]}
        timeline="Phase 3 - Week 6"
        alternativeLinks={[
          {
            title: 'Dashboard',
            description: 'Current project timeline',
            url: '/workspace/dashboard',
          },
          {
            title: 'All Tasks',
            description: 'View task dependencies',
            url: '/workspace/tasks',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
