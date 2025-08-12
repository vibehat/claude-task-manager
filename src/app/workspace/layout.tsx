import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workspace | Circle',
  description: 'Personal workspace for focused productivity and task management',
};

interface WorkspaceLayoutPageProps {
  children: React.ReactNode;
}

export default function WorkspaceLayoutPage({
  children,
}: WorkspaceLayoutPageProps): React.JSX.Element {
  return <>{children}</>;
}
