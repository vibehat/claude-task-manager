'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/libs/client/utils';

export interface WorkflowItemData {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
}

interface WorkflowItemProps {
  item: WorkflowItemData;
  onAction: (id: string) => void;
  onDismiss?: (id: string) => void;
  actionLabel: string;
  className?: string;
  variant?: 'default' | 'compact';
}

export function WorkflowItem({
  item,
  onAction,
  onDismiss,
  actionLabel,
  className = '',
  variant = 'default',
}: WorkflowItemProps): React.JSX.Element {
  if (variant === 'compact') {
    return (
      <div className={cn('p-2 rounded border border-border bg-muted/20', className)}>
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h4
              className={cn(
                'font-medium text-sm text-foreground',
                item.completed && 'line-through'
              )}
            >
              {item.title}
            </h4>
            <p className="text-xs text-muted-foreground truncate">{item.description}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAction(item.id)}
            disabled={item.completed}
            className="ml-2 h-8 px-2"
          >
            {actionLabel}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'p-3 rounded-lg border border-border bg-muted/30',
        item.completed && 'opacity-60',
        className
      )}
    >
      <div className="flex-1 mb-3">
        <h3
          className={cn(
            'font-medium text-sm text-foreground mb-1',
            item.completed && 'line-through'
          )}
        >
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onAction(item.id)}
          disabled={item.completed}
        >
          {actionLabel}
        </Button>
        {onDismiss && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDismiss(item.id)}
            disabled={item.completed}
          >
            Dismiss
          </Button>
        )}
      </div>
    </div>
  );
}

export default WorkflowItem;
