'use client';

import { FileText } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function BrowseFilesPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Browse Files"
        description="Simple navigation through all your markdown files and docs"
        icon={FileText}
        plannedFeatures={[
          'Clean file browser with thumbnail previews',
          'Search across all documentation content',
          'Recent files and frequently accessed docs',
          'Folder organization without overwhelming complexity',
          'Quick edit and view modes for markdown files',
          'Integration with Task Master documentation',
        ]}
        timeline="Phase 2 - Week 4"
        alternativeLinks={[
          {
            title: 'Terminal',
            description: 'Access files via command line',
            url: '/workspace/terminal',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
