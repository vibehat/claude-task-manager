'use client';

import React from 'react';
import { Loader2Icon } from 'lucide-react';

interface CommandEmptyStateProps {
  isLoading: boolean;
  emptyMessage?: string;
  loadingMessage?: string;
}

export function CommandEmptyState({
  isLoading,
  emptyMessage = 'No results found.',
  loadingMessage = 'Loading...',
}: CommandEmptyStateProps) {
  return (
    <div className="py-6 text-center">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <Loader2Icon className="w-4 h-4 animate-spin" />
          <span className="text-sm text-muted-foreground">{loadingMessage}</span>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">{emptyMessage}</p>
      )}
    </div>
  );
}
