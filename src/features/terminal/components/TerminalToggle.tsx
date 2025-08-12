'use client';

import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/libs/client/utils';
import { MultiTerminalTray } from './MultiTerminalTray';

interface TerminalToggleProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
}

export function TerminalToggle({ className, size = 'sm', variant = 'ghost' }: TerminalToggleProps) {
  const [showTerminals, setShowTerminals] = useState(false);

  return (
    <>
      <Button
        size={size}
        variant={variant}
        onClick={() => setShowTerminals(!showTerminals)}
        className={cn('flex items-center gap-2', className)}
        title={showTerminals ? 'Hide Terminals' : 'Show Terminals'}
      >
        <Terminal className="h-4 w-4" />
        <span className="hidden sm:inline">{showTerminals ? 'Hide' : 'Show'} Terminals</span>
      </Button>

      {showTerminals && <MultiTerminalTray />}
    </>
  );
}

export default TerminalToggle;
