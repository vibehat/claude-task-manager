'use client';

import * as React from 'react';
import { cn } from '@/libs/client/utils';

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
  return (
    <div className={cn('overflow-auto', className)} {...props}>
      {children}
    </div>
  );
}
