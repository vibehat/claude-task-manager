'use client';

import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import type { Command } from '../types';

interface CommandPaletteHeaderProps {
   currentCommand: Command | null;
   breadcrumbsLength: number;
   onBack: () => void;
}

export function CommandPaletteHeader({
   currentCommand,
   breadcrumbsLength,
   onBack,
}: CommandPaletteHeaderProps) {
   // Only show header if we have a current command or breadcrumbs
   if (!currentCommand && breadcrumbsLength === 0) {
      return null;
   }

   return (
      <div className="flex items-center gap-2 p-2 border-b">
         <button
            onClick={onBack}
            className="p-1 rounded hover:bg-accent transition-colors"
            aria-label="Go back"
         >
            <ArrowLeftIcon className="w-4 h-4" />
         </button>
         <div className="flex-1 text-sm text-muted-foreground">
            {currentCommand && (
               <span>
                  {typeof currentCommand.title === 'string' ? currentCommand.title : 'Command'}
               </span>
            )}
         </div>
      </div>
   );
}
