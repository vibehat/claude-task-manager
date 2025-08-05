'use client';

import { User } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function MySettingsPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="My Settings"
        description="Personal preferences for how the interface works - tailored to you"
        icon={User}
        plannedFeatures={[
          'Interface theme and appearance customization',
          'Keyboard shortcuts and workflow preferences',
          'Notification settings and focus mode controls',
          'Language and accessibility options',
          'Personal productivity settings and habits',
          'Data export and account management options',
        ]}
        timeline="Phase 4 - Week 8"
        alternativeLinks={[
          {
            title: 'Settings',
            description: 'Current workspace settings',
            url: '/workspace/settings',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
