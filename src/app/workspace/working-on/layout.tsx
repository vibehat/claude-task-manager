import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Working On | Task Master',
  description: 'Focus on your current task with integrated terminal and workflow tools',
};

interface WorkingOnLayoutProps {
  children: React.ReactNode;
}

export default function WorkingOnLayout({ children }: WorkingOnLayoutProps): React.JSX.Element {
  return <>{children}</>;
}
