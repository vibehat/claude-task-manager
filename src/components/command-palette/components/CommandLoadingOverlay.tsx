'use client';

import React from 'react';
import { Loader2Icon } from 'lucide-react';

interface CommandLoadingOverlayProps {
   isLoading: boolean;
   message?: string;
}

export function CommandLoadingOverlay({
   isLoading,
   message = 'Loading...',
}: CommandLoadingOverlayProps) {
   if (!isLoading) return null;

   return (
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
         <div className="flex flex-col items-center gap-2">
            <Loader2Icon className="w-6 h-6 animate-spin" />
            {message && <span className="text-sm text-muted-foreground">{message}</span>}
         </div>
      </div>
   );
}
