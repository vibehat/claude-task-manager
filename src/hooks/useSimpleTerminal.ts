'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Terminal } from '@xterm/xterm';
import type { FitAddon } from '@xterm/addon-fit';

interface SimpleTerminalState {
  status: 'idle' | 'connecting' | 'connected' | 'error';
  error: string | null;
  logs: string[];
}

export function useSimpleTerminal() {
  const [state, setState] = useState<SimpleTerminalState>({
    status: 'idle',
    error: null,
    logs: [],
  });

  const terminalRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Add log helper
  const addLog = useCallback((message: string) => {
    console.log(`[SimpleTerminal] ${message}`);
    setState((prev) => ({
      ...prev,
      logs: [...prev.logs, `${new Date().toISOString()} - ${message}`],
    }));
  }, []);

  // Initialize terminal
  const initTerminal = useCallback(async () => {
    try {
      addLog('Initializing terminal...');

      // Dynamic imports
      const { Terminal } = await import('@xterm/xterm');
      const { FitAddon } = await import('@xterm/addon-fit');

      // Create terminal with minimal config
      const term = new Terminal({
        cols: 80,
        rows: 24,
        fontSize: 14,
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        theme: {
          background: '#000000',
          foreground: '#ffffff',
        },
      });

      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);

      terminalRef.current = term;
      fitAddonRef.current = fitAddon;

      addLog('Terminal created successfully');

      // Write initial message
      term.writeln('Simple Terminal - Debugging Mode');
      term.writeln('Waiting for WebSocket connection...');
      term.writeln('');

      return term;
    } catch (error) {
      const errorMsg = `Failed to initialize terminal: ${error}`;
      addLog(errorMsg);
      setState((prev) => ({ ...prev, status: 'error', error: errorMsg }));
      return null;
    }
  }, [addLog]);

  // Mount terminal to DOM
  const mountTerminal = useCallback(
    (container: HTMLDivElement) => {
      containerRef.current = container;

      if (!terminalRef.current || !container) {
        addLog('Cannot mount: terminal or container missing');
        return;
      }

      try {
        addLog('Mounting terminal to DOM...');
        terminalRef.current.open(container);

        // Fit after mount
        setTimeout(() => {
          if (fitAddonRef.current && terminalRef.current) {
            fitAddonRef.current.fit();
            addLog(`Terminal fitted: ${terminalRef.current.cols}x${terminalRef.current.rows}`);
          }
        }, 100);

        addLog('Terminal mounted successfully');
      } catch (error) {
        addLog(`Failed to mount terminal: ${error}`);
      }
    },
    [addLog]
  );

  // Connect WebSocket
  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      addLog('Already connected');
      return;
    }

    try {
      addLog('Connecting to WebSocket...');
      setState((prev) => ({ ...prev, status: 'connecting' }));

      const ws = new WebSocket('ws://localhost:3001');
      wsRef.current = ws;

      ws.onopen = () => {
        addLog('WebSocket connected!');
        setState((prev) => ({ ...prev, status: 'connected', error: null }));

        if (terminalRef.current) {
          terminalRef.current.clear();
          terminalRef.current.writeln('Connected to terminal server!');
          terminalRef.current.writeln('Type commands below:');
          terminalRef.current.writeln('');

          // Attach input handler
          terminalRef.current.onData((data) => {
            addLog(`Sending input: ${JSON.stringify(data)}`);
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({ type: 'input', data }));
            }
          });
        }
      };

      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          addLog(`Received: ${message.type}`);

          switch (message.type) {
            case 'connected':
              addLog(`Session: ${message.sessionId}, Shell: ${message.shell}`);
              break;

            case 'data':
              if (terminalRef.current && message.data) {
                // Log first 50 chars of data
                addLog(`Data: ${JSON.stringify(message.data.substring(0, 50))}...`);
                terminalRef.current.write(message.data);
              }
              break;

            case 'error':
              addLog(`Server error: ${message.message}`);
              break;
          }
        } catch (error) {
          addLog(`Failed to parse message: ${error}`);
        }
      };

      ws.onerror = (_event) => {
        const errorMsg = 'WebSocket error occurred';
        addLog(errorMsg);
        setState((prev) => ({ ...prev, status: 'error', error: errorMsg }));
      };

      ws.onclose = (event) => {
        addLog(`WebSocket closed: ${event.code} ${event.reason}`);
        setState((prev) => ({ ...prev, status: 'idle' }));
        wsRef.current = null;
      };
    } catch (error) {
      const errorMsg = `Connection failed: ${error}`;
      addLog(errorMsg);
      setState((prev) => ({ ...prev, status: 'error', error: errorMsg }));
    }
  }, [addLog]);

  // Disconnect
  const disconnect = useCallback(() => {
    if (wsRef.current) {
      addLog('Disconnecting...');
      wsRef.current.close();
      wsRef.current = null;
    }
  }, [addLog]);

  // Send command
  const sendCommand = useCallback(
    (command: string) => {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        addLog(`Executing command: ${command}`);
        wsRef.current.send(
          JSON.stringify({
            type: 'input',
            data: command + '\r',
          })
        );
      } else {
        addLog('Cannot send command: not connected');
      }
    },
    [addLog]
  );

  // Clear terminal
  const clear = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.clear();
      addLog('Terminal cleared');
    }
  }, [addLog]);

  // Clear logs
  const clearLogs = useCallback(() => {
    setState((prev) => ({ ...prev, logs: [] }));
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      disconnect();
      if (terminalRef.current) {
        terminalRef.current.dispose();
      }
    };
  }, [disconnect]);

  return {
    // State
    status: state.status,
    error: state.error,
    logs: state.logs,

    // Terminal instance
    terminal: terminalRef.current,

    // Actions
    initTerminal,
    mountTerminal,
    connect,
    disconnect,
    sendCommand,
    clear,
    clearLogs,

    // Refs for direct access
    terminalRef,
    wsRef,
    containerRef,
  };
}
