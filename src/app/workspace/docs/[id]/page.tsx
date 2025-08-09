'use client';

import React from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { DocumentViewEdit } from '@/features/notes/components/DocumentViewEdit/DocumentViewEdit';

interface DocumentPageRouteProps {
  params: {
    id: string;
  };
}

export default function DocumentPage({ params }: DocumentPageRouteProps): React.JSX.Element {
  // Decode the document path from the URL parameter
  const documentPath = decodeURIComponent(params.id);

  return (
    <WorkspaceLayout showSearch>
      <div className="px-2 py-2">
        <DocumentViewEdit documentPath={documentPath} />
      </div>
    </WorkspaceLayout>
  );
}
