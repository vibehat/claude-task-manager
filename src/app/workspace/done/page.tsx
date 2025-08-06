'use client';

import { CheckCircle } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function DonePage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Done"
        description="Completed work that gives you a sense of accomplishment"
        icon={CheckCircle}
        plannedFeatures={[
          'Satisfying completed tasks gallery with celebration moments',
          'Productivity insights and completion statistics',
          'Archive management with search and filtering',
          'Achievement badges and milestone celebrations',
          'Time spent and effort tracking for completed work',
          'Export capabilities for reports and reviews',
        ]}
        timeline="Phase 1 - Week 4"
        alternativeLinks={[
          {
            title: 'Dashboard',
            description: 'View recent completed tasks',
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
