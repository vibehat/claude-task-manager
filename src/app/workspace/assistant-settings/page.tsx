'use client';

import { Settings } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function AssistantSettingsPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Assistant Settings"
        description="Simple configuration for how AI helps you - no intimidating complexity"
        icon={Settings}
        plannedFeatures={[
          'Friendly AI personality and interaction preferences',
          'Communication style settings (concise vs detailed)',
          'Task assistance preferences and automation levels',
          'Context sharing and privacy controls',
          'Integration settings with Task Master and other tools',
          'Simple onboarding for AI features without overwhelming options',
        ]}
        timeline="Phase 4 - Week 8"
        alternativeLinks={[
          {
            title: 'My Settings',
            description: 'Personal workspace preferences',
            url: '/workspace/my-settings',
          },
          {
            title: 'Terminal',
            description: 'Access Task Master CLI configuration',
            url: '/workspace/terminal',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
