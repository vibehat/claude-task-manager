'use client';

import React from 'react';
import { cn } from '@/libs/client/utils';
import { Button } from '@/components/ui/button';

interface TerminalTabProps {
  id: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export function TerminalTab({ title, isActive, onClick }: TerminalTabProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className={cn(
        'h-7 px-2.5 text-xs font-medium rounded-md transition-all duration-200',
        'relative overflow-hidden',
        isActive
          ? 'bg-primary text-primary-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
      )}
    >
      <span className="truncate max-w-24">{title}</span>
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-foreground/80" />
      )}
    </Button>
  );
}
