'use client';

import React from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { NoteBrowser } from '@/features/notes/components/NoteBrowser/NoteBrowser';

export default function BrowseFilesPage(): React.JSX.Element {
  return (
    <WorkspaceLayout showSearch>
      <div className="px-2 py-2">
        <NoteBrowser />
      </div>
    </WorkspaceLayout>
  );
}
