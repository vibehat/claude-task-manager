'use client';

import { PlusCircle } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function CreateNewPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Create New"
        description="Quick document creation when you need to capture thoughts"
        icon={PlusCircle}
        plannedFeatures={[
          'Instant markdown document creation with templates',
          'Quick capture for meeting notes and brainstorming',
          'Smart suggestions based on current tasks and context',
          'Integration with task documentation workflows',
          'Auto-save and version history',
          'Share and collaboration features',
        ]}
        timeline="Phase 2 - Week 4"
        alternativeLinks={[
          {
            title: 'Terminal',
            description: 'Create files via command line',
            url: '/workspace/terminal',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
