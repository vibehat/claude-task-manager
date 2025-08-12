'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useIndividualTerminal } from '@/features/terminal/hooks/useIndividualTerminal';
import { TerminalConnectionStatus } from '@/features/terminal/types/terminal';
import { XTermStyles } from '@/features/terminal/components/XTermStyles';

export default function SimpleTerminalPage(): React.JSX.Element {
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const terminalMountedRef = useRef(false);

  const { terminal, initializeTerminal, connectionStatus, connect, fit, isConnected, error } =
    useIndividualTerminal({
      theme: 'dark',
      fontSize: 14,
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      onConnect: () => console.log('Simple terminal connected'),
      onDisconnect: () => console.log('Simple terminal disconnected'),
      onError: (err) => console.error('Simple terminal error:', err),
    });

  // Mount terminal to DOM
  const mountTerminal = useCallback(async () => {
    if (!terminalContainerRef.current || terminalMountedRef.current) {
      return;
    }

    try {
      const terminalInstance = terminal || (await initializeTerminal());

      if (!terminalInstance) {
        console.error('Failed to initialize terminal');
        return;
      }

      terminalInstance.open(terminalContainerRef.current);
      terminalMountedRef.current = true;

      // Focus and fit terminal
      setTimeout(() => {
        terminalInstance.focus();
        fit();
      }, 100);
    } catch (err) {
      console.error('Error mounting terminal:', err);
    }
  }, [terminal, initializeTerminal, fit]);

  // Setup resize handling
  useEffect(() => {
    if (!terminalContainerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (terminalMountedRef.current && isConnected) {
        setTimeout(() => fit(), 100);
      }
    });

    resizeObserver.observe(terminalContainerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [fit, isConnected]);

  // Mount and connect terminal
  useEffect(() => {
    mountTerminal();
  }, [mountTerminal]);

  useEffect(() => {
    if (connectionStatus === TerminalConnectionStatus.DISCONNECTED) {
      connect();
    }
  }, [connect, connectionStatus]);

  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      <XTermStyles />

      {/* Header */}
      {/* <div className="bg-gray-800 text-white p-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Simple Terminal Test</h1>
        <div className="text-sm">
          Status: {connectionStatus} {error && `| Error: ${error}`}
        </div>
      </div> */}

      {/* Terminal Container */}
      <div ref={terminalContainerRef} className="flex-1 w-full terminal-container" />

      {/* Loading Overlay */}
      {connectionStatus === TerminalConnectionStatus.CONNECTING && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
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
