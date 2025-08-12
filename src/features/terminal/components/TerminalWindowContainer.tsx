'use client';

import React from 'react';
import { X, Maximize2, Minimize2, Trash2 } from 'lucide-react';
import { cn } from '@/libs/client/utils';
import { Button } from '@/components/ui/button';

interface TerminalWindowContainerProps {
  id: string;
  title: string;
  isVisible: boolean;
  isMaximized?: boolean;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onDelete?: () => void;
}

export function TerminalWindowContainer({
  id,
  title,
  isVisible,
  isMaximized = false,
  onClose,
  onMinimize,
  onMaximize,
  onDelete,
}: TerminalWindowContainerProps) {
  return (
    <div
      className={cn(
        'fixed right-0 top-0 h-screen bg-background shadow-2xl overflow-hidden',
        'z-40 border-l border-border',
        isMaximized ? 'w-full rounded-none' : 'w-full md:w-2/3 lg:w-1/2 rounded-l-lg',
        isVisible ? 'block' : 'hidden'
      )}
    >
      {/* Header */}
      <div className="bg-card h-8 flex items-center justify-between px-3 border-b border-border">
        <h3 className="text-foreground text-xs font-medium truncate">{title}</h3>

        {/* Window controls - macOS style */}
        <div className="flex items-center gap-2">
          {/* Traffic light buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors group flex items-center justify-center"
              title="Close Terminal"
            >
              <X className="h-2 w-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {onMinimize && (
              <button
                onClick={onMinimize}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors group flex items-center justify-center"
                title="Minimize"
              >
                <Minimize2 className="h-1.5 w-1.5 text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            )}

            {onMaximize && (
              <button
                onClick={onMaximize}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors group flex items-center justify-center"
                title={isMaximized ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                <Maximize2 className="h-1.5 w-1.5 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            )}
          </div>

          {/* Separator */}
          <div className="w-px h-4 bg-border mx-1" />

          {/* Action buttons */}
          <div className="flex items-center">
            {onDelete && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onDelete}
                className="h-6 w-6 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                title="Delete Terminal"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Terminal iframe - Always rendered to preserve state */}
      <div className="h-[calc(100%-32px)] w-full bg-background">
        <iframe
          src="/simple-terminal"
          className="w-full h-full border-0 bg-background"
          title={`Terminal ${title}`}
        />
      </div>
    </div>
  );
}
