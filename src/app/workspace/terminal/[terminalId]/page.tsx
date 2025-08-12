'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { useIndividualTerminal } from '@/features/terminal/hooks/useIndividualTerminal';
import { TerminalConnectionStatus } from '@/features/terminal/types/terminal';
import { TerminalStatus } from '@/features/terminal/components/TerminalStatus';
import { XTermStyles } from '@/features/terminal/components/XTermStyles';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Terminal as TerminalIcon } from 'lucide-react';

function IndividualTerminalContent(): React.JSX.Element {
  const params = useParams();
  const router = useRouter();
  const terminalId = params?.terminalId as string;

  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const terminalMountedRef = useRef(false);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

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
  } = useIndividualTerminal({
    theme: 'auto',
    fontSize: 14,
    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
    onConnect: () => {
      console.log(`Terminal ${terminalId} connected`);
    },
    onDisconnect: () => {
      console.log(`Terminal ${terminalId} disconnected`);
    },
    onError: (err) => {
      console.error(`Terminal ${terminalId} error:`, err);
    },
  });

  // Mount terminal to DOM
  const mountTerminal = useCallback(async () => {
    if (!terminalContainerRef.current || terminalMountedRef.current) {
      return;
    }

    try {
      // Initialize terminal if not already done
      const terminalInstance = terminal || (await initializeTerminal());

      if (!terminalInstance) {
        console.error('Failed to initialize terminal');
        return;
      }

      terminalInstance.open(terminalContainerRef.current);
      terminalMountedRef.current = true;

      // Focus the terminal and fit to container after mounting
      setTimeout(() => {
        terminalInstance.focus();
        fit();
      }, 100);
    } catch (err) {
      console.error('Error mounting terminal:', err);
    }
  }, [terminal, initializeTerminal, fit]);

  // Setup resize observer
  useEffect(() => {
    if (!terminalContainerRef.current) return;

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
  }, [fit, isConnected]);

  // Mount terminal when component mounts
  useEffect(() => {
    mountTerminal();
  }, [mountTerminal]);

  // Auto-connect when component mounts
  useEffect(() => {
    if (connectionStatus === TerminalConnectionStatus.DISCONNECTED) {
      connect();
    }
  }, [connect, connectionStatus]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      terminalMountedRef.current = false;
    };
  }, []);

  // Handle reconnect
  const handleReconnect = useCallback(() => {
    disconnect();
    setTimeout(() => {
      connect();
    }, 500);
  }, [connect, disconnect]);

  const handleBackToManager = () => {
    router.push('/workspace/terminal');
  };

  if (!terminalId) {
    return (
      <div className="flex flex-col h-full p-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
              <TerminalIcon className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Invalid Terminal ID
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                The requested terminal could not be found or is invalid.
              </p>
            </div>
            <Button onClick={handleBackToManager}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Terminal Manager
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <XTermStyles />

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={handleBackToManager}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <TerminalIcon className="h-5 w-5" />
              Terminal {terminalId}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Individual terminal session</p>
          </div>
        </div>

        {/* Terminal Status */}
        <TerminalStatus
          status={connectionStatus}
          session={session}
          error={error}
          onReconnect={handleReconnect}
        />
      </div>

      {/* Terminal Container */}
      <div className="flex-1 p-4">
        <div
          ref={terminalContainerRef}
          className="w-full h-full terminal-container border border-gray-200 dark:border-gray-700 rounded-lg"
          style={{ minHeight: '400px' }}
        />
      </div>

      {/* Loading Overlay */}
      {connectionStatus === TerminalConnectionStatus.CONNECTING && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              <span className="text-sm font-medium">Connecting to terminal...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function IndividualTerminalPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <IndividualTerminalContent />
    </WorkspaceLayout>
  );
}
