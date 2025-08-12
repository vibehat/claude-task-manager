'use client';

import React from 'react';
import { cn } from '@/libs/client/utils';

interface KbdShortcutProps {
  keys: string | string[];
  className?: string;
  variant?: 'default' | 'outline' | 'muted';
  size?: 'sm' | 'default';
}

export function KbdShortcut({
  keys,
  className = '',
  variant = 'default',
  size = 'default',
}: KbdShortcutProps): React.JSX.Element {
  const keyArray = Array.isArray(keys) ? keys : [keys];

  const baseClasses = cn(
    'inline-flex items-center gap-1 font-mono rounded border',
    size === 'sm' ? 'px-1.5 py-0.5 text-xs' : 'px-2 py-1 text-sm',
    {
      'bg-muted text-muted-foreground border-border': variant === 'default',
      'bg-background text-foreground border-input': variant === 'outline',
      'bg-muted/50 text-muted-foreground border-muted': variant === 'muted',
    },
    className
  );

  if (keyArray.length === 1) {
    return <kbd className={baseClasses}>{keyArray[0]}</kbd>;
  }

  return (
    <span className={baseClasses}>
      {keyArray.map((key, index) => (
        <React.Fragment key={key}>
          <kbd className="bg-transparent border-0 p-0">{key}</kbd>
          {index < keyArray.length - 1 && (
            <span className="text-muted-foreground/50 text-xs">+</span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}

export default KbdShortcut;
