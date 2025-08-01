'use client';

import React from 'react';
import { CommandInput } from '@/components/ui/command';

// CommandMode type moved to main types file
export type CommandMode = 'search' | 'select' | 'input' | 'input-with-actions';

interface CommandSearchInputProps {
   mode: CommandMode;
   value: string;
   onValueChange: (value: string) => void;
   inputPlaceholder?: string;
}

export function CommandSearchInput({
   mode,
   value,
   onValueChange,
   inputPlaceholder,
}: CommandSearchInputProps) {
   const getPlaceholder = () => {
      switch (mode) {
         case 'input':
            return inputPlaceholder || 'Type here...';
         case 'select':
            return 'Search options...';
         case 'search':
         default:
            return 'Search commands...';
      }
   };

   return (
      <CommandInput
         placeholder={getPlaceholder()}
         value={value}
         onValueChange={onValueChange}
         className="h-12"
         autoFocus
      />
   );
}
