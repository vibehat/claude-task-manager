'use client';

import { Wrench } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function ProjectSetupPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Project Setup"
        description="Basic project configuration and integrations without complexity overload"
        icon={Wrench}
        plannedFeatures={[
          'Simple project initialization and configuration wizard',
          'Integration setup for git, Task Master, and development tools',
          'Team collaboration settings and permissions',
          'Project templates and starter configurations',
          'Environment and deployment settings management',
          'Backup and sync configuration for project data',
        ]}
        timeline="Phase 4 - Week 8"
        alternativeLinks={[
          {
            title: 'Settings',
            description: 'Current workspace settings',
            url: '/workspace/settings',
          },
          {
            title: 'Terminal',
            description: 'Configure via Task Master CLI',
            url: '/workspace/terminal',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
