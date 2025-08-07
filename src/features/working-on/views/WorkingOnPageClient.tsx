'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the page component to avoid SSR issues with Zustand
const WorkingOnPageContent = dynamic(
  () => import('./WorkingOnPage').then((mod) => ({ default: mod.WorkingOnPage })),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-12 w-48 bg-muted rounded"></div>
          <div className="h-64 w-full bg-muted rounded"></div>
        </div>
      </div>
    ),
  }
);

export function WorkingOnPageClient() {
  return <WorkingOnPageContent />;
}
