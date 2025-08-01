'use client';

import React from 'react';
import { ArrowDownIcon } from 'lucide-react';

interface CommandInputHintProps {
   hint?: string;
}

export function CommandInputHint({ hint = 'Press ↓ to submit' }: CommandInputHintProps) {
   return (
      <div className="px-4 py-2 text-xs text-muted-foreground flex items-center gap-2">
         <ArrowDownIcon className="w-3 h-3" />
         {hint}
      </div>
   );
}
