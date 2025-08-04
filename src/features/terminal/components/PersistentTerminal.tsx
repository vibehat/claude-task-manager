'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useTerminalContext } from '../contexts/TerminalContext';
import { useTerminal } from '../hooks/useTerminal';
import { TerminalStatus } from './TerminalStatus';
import { XTermStyles } from './XTermStyles';
import type { PersistentTerminalProps } from '../types/terminal';
import { TerminalConnectionStatus } from '../types/terminal';
import { cn } from '@/libs/client/utils';
import { X, Minimize2, Maximize2, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';
import { useTheme } from 'next-themes';

export function PersistentTerminal({
  className,
  terminalId,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
}: PersistentTerminalProps) {
  const { theme } = useTheme();
  const terminalContext = useTerminalContext();
  const multiTerminalStore = useMultiTerminalStore();

  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const terminalMountedRef = useRef(false);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Get terminal instance from store
  const terminalInstance = terminalId ? multiTerminalStore.getTerminalById(terminalId) : null;

  // Create terminal hook - must be called before early returns
  const individualTerminal = useTerminal(terminalId || '', {
    theme: theme as 'light' | 'dark' | 'auto',
    fontSize: 14,
    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
    sessionId: terminalInstance?.sessionId, // For session restoration
    clientId: terminalId, // Use terminal ID as client identifier
    onConnect: () => console.log(`Terminal ${terminalId} connected`),
    onDisconnect: () => console.log(`Terminal ${terminalId} disconnected`),
    onError: (error: string) => console.error(`Terminal ${terminalId} error:`, error),
    onSessionRestored: (sessionId: string) => {
      console.log(`✅ Terminal ${terminalId} session restored: ${sessionId}`);
      if (terminalInstance) {
        multiTerminalStore.updateTerminalSession(terminalId, sessionId);
        multiTerminalStore.markTerminalAsRestored(terminalId);
      }
    },
  });

  // Use terminal instance data
  const {
    terminal,
    initializeTerminal,
    connectionStatus,
    session,
    connect,
    disconnect,
    fit,
    isConnected,
    error,
  } = individualTerminal;

  // Terminal state
  const isMinimized = terminalInstance.isMinimized;
  const isMaximized = terminalInstance.isMaximized;
  const title = terminalInstance.title;

  // Mount terminal to DOM
  const mountTerminal = useCallback(async () => {
    if (!terminalContainerRef.current || terminalMountedRef.current) {
      return;
    }

    try {
      // Initialize terminal if not already done
      const terminalInstanceToMount = terminal || (await initializeTerminal());

      if (!terminalInstanceToMount) {
        console.error('Failed to initialize persistent terminal');
        return;
      }

      console.log(`Mounting terminal ${terminalId} to DOM element:`, terminalContainerRef.current);
      console.log(`Container dimensions:`, {
        width: terminalContainerRef.current.offsetWidth,
        height: terminalContainerRef.current.offsetHeight,
        clientWidth: terminalContainerRef.current.clientWidth,
        clientHeight: terminalContainerRef.current.clientHeight,
      });

      terminalInstanceToMount.open(terminalContainerRef.current);
      terminalMountedRef.current = true;

      console.log(`Terminal ${terminalId} mounted. Element:`, terminalInstanceToMount.element);
      console.log(`Terminal dimensions after mount:`, {
        cols: terminalInstanceToMount.cols,
        rows: terminalInstanceToMount.rows,
      });

      // Focus the terminal and fit to container after mounting
      setTimeout(() => {
        console.log(`Focusing terminal ${terminalId} after mount`);
        terminalInstanceToMount.focus();
        fit();

        // Additional debugging after fit
        console.log(`Terminal dimensions after fit:`, {
          cols: terminalInstanceToMount.cols,
          rows: terminalInstanceToMount.rows,
          hasElement: !!terminalInstanceToMount.element,
        });
      }, 100);
    } catch (err) {
      console.error('Error mounting persistent terminal:', err);
    }
  }, [terminal, initializeTerminal, fit, terminalId]);

  // Setup resize observer
  useEffect(() => {
    if (!terminalContainerRef.current || isMinimized) return;

    const resizeObserver = new ResizeObserver(() => {
      if (terminalMountedRef.current && isConnected) {
        // Debounce resize calls
        setTimeout(() => {
          fit();
        }, 100);
      }
    });

    resizeObserver.observe(terminalContainerRef.current);
    resizeObserverRef.current = resizeObserver;

    return () => {
      resizeObserver.disconnect();
      resizeObserverRef.current = null;
    };
  }, [fit, isConnected, isMinimized]);

  // Mount terminal
  useEffect(() => {
    mountTerminal();
  }, [mountTerminal]);

  // Get active terminal ID from store
  const activeTerminalId = multiTerminalStore.activeTerminalId;

  // Focus terminal when it becomes active and is connected
  useEffect(() => {
    if (terminal && isConnected && !isMinimized && activeTerminalId === terminalId) {
      setTimeout(() => {
        terminal.focus();
      }, 100);
    }
  }, [terminal, isConnected, isMinimized, terminalId, activeTerminalId]);

  // Handle reconnect with restoration awareness
  const handleReconnect = useCallback(() => {
    console.log(`🔄 Manual reconnect requested for terminal ${terminalId}`);

    // Use store's reconnect method which handles the full reconnection logic
    multiTerminalStore
      .reconnectTerminal(terminalId)
      .then(() => {
        if (terminalInstance) {
          multiTerminalStore.markTerminalAsRestored(terminalId);
        }
      })
      .catch((error) => {
        console.error(`Failed to manually reconnect terminal ${terminalId}:`, error);
      });
  }, [multiTerminalStore, terminalId, terminalInstance]);

  // Handle minimize/maximize
  const handleMinimize = useCallback(() => {
    onMinimize?.(terminalId);
  }, [terminalId, onMinimize]);

  const handleMaximize = useCallback(() => {
    onMaximize?.(terminalId);
  }, [terminalId, onMaximize]);

  const handleClose = useCallback(() => {
    onClose?.(terminalId);
  }, [terminalId, onClose]);

  const handleFocus = useCallback(() => {
    // Ensure terminal is properly focused for input
    if (terminal && !isMinimized) {
      setTimeout(() => {
        terminal.focus();
      }, 0);
    }
    onFocus?.(terminalId);
  }, [terminalId, onFocus, terminal, isMinimized]);

  // Handle dragging
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isMaximized) return;

      setIsDragging(true);
      const rect = e.currentTarget.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [isMaximized]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || isMaximized) return;

      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      multiTerminalStore.updateTerminalPosition(terminalId, newX, newY);
    },
    [isDragging, terminalId, isMaximized, dragOffset, multiTerminalStore]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Auto-connect logic is now handled by the useTerminalAdapter and store
  useEffect(() => {
    if (!terminalInstance || !terminalId) return;

    // Auto-connect for fresh terminals
    if (connectionStatus === TerminalConnectionStatus.DISCONNECTED) {
      console.log(`🔗 Auto-connecting terminal ${terminalId} via adapter`);
      connect().catch((error) => {
        console.error(`❌ Failed to auto-connect terminal ${terminalId}:`, error);
      });
    }
  }, [terminalInstance, terminalId, connectionStatus, connect]);

  // Note: Safe startup check is now handled by TerminalStartupManager in DataInitializer
  // This avoids duplicate calls and infinite loops

  if (!terminalId || !terminalInstance) {
    return null; // Must have a terminal ID and instance
  }

  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl relative w-full h-full',
        className
      )}
      onClick={handleFocus}
    >
      <XTermStyles />
      {/* Terminal Header */}
      <div
        className={cn(
          'flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-t-lg',
          isDragging && 'cursor-grabbing',
          !isMaximized && 'cursor-grab'
        )}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <Move className="h-3 w-3 text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
          {session && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {session.shell} • {session.platform}
            </span>
          )}
          {terminalInstance?.isRestored && (
            <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full">
              Restored
            </span>
          )}
          {connectionStatus === TerminalConnectionStatus.RECONNECTING && (
            <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full">
              Reconnecting...
            </span>
          )}
        </div>

        <div className="flex items-center space-x-1">
          <Button size="sm" variant="ghost" onClick={handleMinimize} className="h-6 w-6 p-0">
            <Minimize2 className="h-3 w-3" />
          </Button>
          <Button size="sm" variant="ghost" onClick={handleMaximize} className="h-6 w-6 p-0">
            <Maximize2 className="h-3 w-3" />
          </Button>
          <Button size="sm" variant="ghost" onClick={handleClose} className="h-6 w-6 p-0">
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Terminal Status Bar */}
          <TerminalStatus
            status={connectionStatus}
            session={session}
            error={error}
            onReconnect={handleReconnect}
          />

          {/* Terminal Container */}
          <div
            ref={terminalContainerRef}
            className="flex-1 h-full terminal-container border-0 rounded-none"
            style={{
              height: isMaximized ? 'calc(100% - 100px)' : 'calc(100% - 90px)',
              minHeight: '200px',
              width: '100%',
              backgroundColor: '#000000', // Debug: Ensure black background for terminal
              position: 'relative', // Ensure proper positioning
            }}
            onClick={handleFocus}
          />

          {/* Loading/Restoration Overlay */}
          {(connectionStatus === TerminalConnectionStatus.CONNECTING ||
            connectionStatus === TerminalConnectionStatus.RECONNECTING) && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span className="text-sm font-medium">
                    {connectionStatus === TerminalConnectionStatus.RECONNECTING
                      ? 'Reconnecting to terminal...'
                      : 'Connecting to terminal...'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PersistentTerminal;
