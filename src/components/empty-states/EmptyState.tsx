'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
  };
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className = '',
}: EmptyStateProps): React.JSX.Element {
  return (
    <div className={`text-center py-6 text-muted-foreground ${className}`}>
      {icon && (
        <div className="w-8 h-8 mx-auto mb-2 bg-muted rounded-full flex items-center justify-center">
          {icon}
        </div>
      )}
      <p className="text-sm mb-2">{title}</p>
      {description && <p className="text-xs text-muted-foreground mb-3">{description}</p>}
      {action && (
        <Button
          onClick={action.onClick}
          size={action.size || 'sm'}
          variant={action.variant || 'outline'}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;
