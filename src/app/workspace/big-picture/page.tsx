'use client';

import { BarChart3 } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function BigPicturePage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Big Picture"
        description="High-level project status and priority management without overwhelming complexity"
        icon={BarChart3}
        plannedFeatures={[
          'Project health dashboard with clear visual indicators',
          'Priority matrix for strategic task management',
          'Progress visualization across major project areas',
          'Risk and blocker identification with recommendations',
          'Resource allocation and capacity planning',
          'Strategic goal tracking and milestone progress',
        ]}
        timeline="Phase 3 - Week 5"
        alternativeLinks={[
          {
            title: 'Dashboard',
            description: 'Current project overview',
            url: '/workspace/dashboard',
          },
          {
            title: 'Analytics',
            description: 'Task completion insights',
            url: '/workspace/analytics',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
