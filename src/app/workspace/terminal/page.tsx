'use client';

import React, { useState } from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { useTerminalContext } from '@/features/terminal';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';
import { Terminal as TerminalIcon, Plus, Minimize2, Maximize2, X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/libs/client/utils';
import type { TerminalInstance } from '@/store/multiTerminalStore';

interface TerminalCardProps {
  terminal: TerminalInstance;
  isActive: boolean;
}

function TerminalCard({ terminal, isActive }: TerminalCardProps): React.JSX.Element {
  const { setActiveTerminal, closeTerminal } = useTerminalContext();
  const { restoreTerminal, minimizeTerminal, maximizeTerminal, bringTerminalToFront } =
    useMultiTerminalStore();

  const handleOpenTerminal = () => {
    setActiveTerminal(terminal.id);
    if (terminal.isMinimized) {
      restoreTerminal(terminal.id);
    }
    bringTerminalToFront(terminal.id);
  };

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    minimizeTerminal(terminal.id);
  };

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (terminal.isMaximized) {
      restoreTerminal(terminal.id);
    } else {
      maximizeTerminal(terminal.id);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeTerminal(terminal.id);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getStatusText = () => {
    if (terminal.isMinimized) return 'Minimized';
    if (terminal.isMaximized) return 'Maximized';
    return 'Normal';
  };

  const getStatusColor = () => {
    if (terminal.isMinimized)
      return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400';
    if (terminal.isMaximized)
      return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400';
    return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
  };

  return (
    <div
      className={cn(
        'group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600',
        isActive && 'ring-2 ring-blue-500 border-blue-500'
      )}
      onClick={handleOpenTerminal}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2 min-w-0 flex-1">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
            {terminal.title}
          </h3>
        </div>

        {/* Actions - show on hover or if active */}
        <div
          className={cn(
            'flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity',
            isActive && 'opacity-100'
          )}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={handleMinimize}
            className="h-6 w-6 p-0"
            title="Minimize"
          >
            <Minimize2 className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleMaximize}
            className="h-6 w-6 p-0"
            title={terminal.isMaximized ? 'Restore' : 'Maximize'}
          >
            <Maximize2 className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-6 w-6 p-0 hover:bg-red-100 hover:text-red-600"
            title="Close"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Status */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={cn(
            'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
            getStatusColor()
          )}
        >
          {getStatusText()}
        </span>
        {isActive && (
          <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Active</span>
        )}
      </div>

      {/* Info */}
      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        {terminal.shell && (
          <div className="flex items-center justify-between">
            <span>Shell:</span>
            <span className="font-mono text-xs">{terminal.shell}</span>
          </div>
        )}
        {terminal.cwd && (
          <div className="flex items-center justify-between">
            <span>Directory:</span>
            <span className="font-mono text-xs truncate max-w-32" title={terminal.cwd}>
              {terminal.cwd}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span>Created:</span>
          <span className="text-xs flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {formatDate(terminal.createdAt)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Position:</span>
          <span className="font-mono text-xs">
            {terminal.position.x}, {terminal.position.y}
          </span>
        </div>
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
      )}
    </div>
  );
}

function TerminalPageError(): React.JSX.Element {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
            <TerminalIcon className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Terminal Provider Not Available
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              The terminal functionality is not available. Please ensure you&apos;re accessing this
              page through the proper layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalPageContent(): React.JSX.Element {
  const { createTerminal, activeTerminalId } = useTerminalContext();
  const { terminals } = useMultiTerminalStore();

  const handleCreateNewTerminal = () => {
    createTerminal();
  };

  return (
    <div className="flex flex-col h-full p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <TerminalIcon className="h-6 w-6" />
            Terminal Manager
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Create and manage multiple terminal instances for running commands and Task Master CLI
          </p>
        </div>

        <Button
          onClick={handleCreateNewTerminal}
          variant="default"
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New Terminal
        </Button>
      </div>

      {/* Terminal List */}
      {terminals.length > 0 ? (
        <div className="flex-1">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {terminals.map((terminal) => (
              <TerminalCard
                key={terminal.id}
                terminal={terminal}
                isActive={terminal.id === activeTerminalId}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Terminal Info */
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <TerminalIcon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                No Terminal Instances
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Create a new terminal instance to start running commands. Each terminal runs
                independently and persists across page navigation.
              </p>
            </div>

            <Button onClick={handleCreateNewTerminal} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Your First Terminal
            </Button>

            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>
                💡 Pro tip: Create multiple terminals for different tasks - they all stay connected
                while you navigate between pages
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TerminalPage(): React.JSX.Element {
  const [hasProviderError, setHasProviderError] = useState(false);

  // Check if TerminalProvider is available
  React.useEffect(() => {
    try {
      // This is a hack to check if the provider is available
      // We can't use the hook directly in a try-catch block
    } catch {
      setHasProviderError(true);
    }
  }, [setHasProviderError]);

  if (hasProviderError) {
    return (
      <WorkspaceLayout>
        <TerminalPageError />
      </WorkspaceLayout>
    );
  }

  return (
    <WorkspaceLayout>
      <TerminalPageContent />
    </WorkspaceLayout>
  );
}
