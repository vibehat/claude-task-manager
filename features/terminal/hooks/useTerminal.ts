'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Terminal } from '@xterm/xterm';
import type { FitAddon } from '@xterm/addon-fit';
import type { WebLinksAddon } from '@xterm/addon-web-links';
import {
   TerminalConnectionStatus,
   TerminalMessage,
   TerminalSession,
   UseTerminalReturn,
   TerminalTheme,
} from '../types/terminal';
import { getXTermConfig, getWebSocketUrl, getThemeForMode } from '../utils/terminalConfig';

interface UseTerminalOptions {
   theme?: 'light' | 'dark' | 'auto';
   fontSize?: number;
   fontFamily?: string;
   onConnect?: () => void;
   onDisconnect?: () => void;
   onError?: (error: string) => void;
}

export function useTerminal(options: UseTerminalOptions = {}): UseTerminalReturn {
   const {
      theme = 'auto',
      fontSize = 14,
      fontFamily = 'Monaco, Menlo, "Ubuntu Mono", monospace',
      onConnect,
      onDisconnect,
      onError,
   } = options;

   // State
   const [connectionStatus, setConnectionStatus] = useState<TerminalConnectionStatus>(
      TerminalConnectionStatus.DISCONNECTED
   );
   const [session, setSession] = useState<TerminalSession | null>(null);
   const [error, setError] = useState<string | null>(null);

   // Refs
   const terminalRef = useRef<Terminal | null>(null);
   const fitAddonRef = useRef<FitAddon | null>(null);
   const webSocketRef = useRef<WebSocket | null>(null);
   const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   const reconnectAttemptsRef = useRef(0);

   // Constants
   const maxReconnectAttempts = 5;
   const reconnectDelay = 1000;

   // Send input to terminal
   const sendInput = useCallback((data: string) => {
      if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
         webSocketRef.current.send(
            JSON.stringify({
               type: 'input',
               data,
            })
         );
      }
   }, []);

   // Initialize terminal
   const initializeTerminal = useCallback(async () => {
      if (terminalRef.current) return terminalRef.current;

      // Only initialize in browser environment
      if (typeof window === 'undefined') return null;

      try {
         // Dynamic imports to avoid SSR issues
         const { Terminal } = await import('@xterm/xterm');
         const { FitAddon } = await import('@xterm/addon-fit');
         const { WebLinksAddon } = await import('@xterm/addon-web-links');

         const terminalTheme = getThemeForMode(theme);
         const config = getXTermConfig(terminalTheme, fontSize, fontFamily);

         const terminal = new Terminal(config);
         const fitAddon = new FitAddon();
         const webLinksAddon = new WebLinksAddon();

         terminal.loadAddon(fitAddon);
         terminal.loadAddon(webLinksAddon);

         // Set up input handler immediately after terminal creation
         const disposable = terminal.onData((data) => {
            sendInput(data);
         });

         // Store disposable for cleanup
         if (!terminalRef.current) {
            (terminal as any)._inputDisposable = disposable;
         }

         terminalRef.current = terminal;
         fitAddonRef.current = fitAddon;
         return terminal;
      } catch (error) {
         console.error('Failed to initialize terminal:', error);
         return null;
      }
   }, [theme, fontSize, fontFamily, sendInput]);

   // Clear error
   const clearError = useCallback(() => {
      setError(null);
   }, []);

   // Connect to WebSocket
   const connect = useCallback(async () => {
      if (
         connectionStatus === TerminalConnectionStatus.CONNECTING ||
         connectionStatus === TerminalConnectionStatus.CONNECTED
      ) {
         return;
      }

      try {
         clearError();
         setConnectionStatus(TerminalConnectionStatus.CONNECTING);

         const websocketUrl = await getWebSocketUrl();
         const ws = new WebSocket(websocketUrl);
         webSocketRef.current = ws;

         ws.onopen = () => {
            console.log('Terminal WebSocket connected');
            setConnectionStatus(TerminalConnectionStatus.CONNECTED);
            reconnectAttemptsRef.current = 0;
            onConnect?.();
         };

         ws.onmessage = (event) => {
            try {
               const message: TerminalMessage = JSON.parse(event.data);

               switch (message.type) {
                  case 'connected':
                     if (message.sessionId && message.shell && message.platform) {
                        setSession({
                           sessionId: message.sessionId,
                           shell: message.shell,
                           platform: message.platform,
                           cwd: message.cwd || '',
                           connected: true,
                        });
                     }
                     break;

                  case 'data':
                     if (terminalRef.current && message.data) {
                        terminalRef.current.write(message.data);
                     }
                     break;

                  case 'exit':
                     console.log('Terminal process exited with code:', message.exitCode);
                     setSession((prev) => (prev ? { ...prev, connected: false } : null));
                     break;

                  case 'error':
                     const errorMsg = message.message || 'Terminal error occurred';
                     setError(errorMsg);
                     onError?.(errorMsg);
                     break;

                  default:
                     console.warn('Unknown message type:', message.type);
               }
            } catch (err) {
               console.error('Error parsing WebSocket message:', err);
            }
         };

         ws.onclose = (event) => {
            console.log('Terminal WebSocket closed:', event.code, event.reason);
            setConnectionStatus(TerminalConnectionStatus.DISCONNECTED);
            setSession((prev) => (prev ? { ...prev, connected: false } : null));
            webSocketRef.current = null;
            onDisconnect?.();

            // Attempt reconnection if not intentionally closed
            if (event.code !== 1000 && reconnectAttemptsRef.current < maxReconnectAttempts) {
               attemptReconnect();
            }
         };

         ws.onerror = (error) => {
            console.error('Terminal WebSocket error:', error);
            const errorMsg = 'WebSocket connection error';
            setError(errorMsg);
            setConnectionStatus(TerminalConnectionStatus.ERROR);
            onError?.(errorMsg);
         };
      } catch (err) {
         const errorMsg = err instanceof Error ? err.message : 'Failed to connect to terminal';
         setError(errorMsg);
         setConnectionStatus(TerminalConnectionStatus.ERROR);
         onError?.(errorMsg);
      }
   }, [connectionStatus, onConnect, onDisconnect, onError, clearError]);

   // Reconnection logic
   const attemptReconnect = useCallback(() => {
      if (reconnectAttemptsRef.current >= maxReconnectAttempts) {
         setError('Maximum reconnection attempts reached');
         return;
      }

      reconnectAttemptsRef.current++;
      setConnectionStatus(TerminalConnectionStatus.RECONNECTING);

      reconnectTimeoutRef.current = setTimeout(() => {
         console.log(
            `Reconnection attempt ${reconnectAttemptsRef.current}/${maxReconnectAttempts}`
         );
         connect();
      }, reconnectDelay * reconnectAttemptsRef.current);
   }, [connect]);

   // Disconnect from WebSocket
   const disconnect = useCallback(() => {
      if (reconnectTimeoutRef.current) {
         clearTimeout(reconnectTimeoutRef.current);
         reconnectTimeoutRef.current = null;
      }

      if (webSocketRef.current) {
         webSocketRef.current.close(1000, 'Intentional disconnect');
         webSocketRef.current = null;
      }

      setConnectionStatus(TerminalConnectionStatus.DISCONNECTED);
      setSession(null);
      reconnectAttemptsRef.current = 0;
   }, []);

   // Resize terminal
   const resize = useCallback((cols: number, rows: number) => {
      if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
         webSocketRef.current.send(
            JSON.stringify({
               type: 'resize',
               data: { cols, rows },
            })
         );
      }

      if (terminalRef.current) {
         terminalRef.current.resize(cols, rows);
      }
   }, []);

   // Clear terminal
   const clear = useCallback(() => {
      if (terminalRef.current) {
         terminalRef.current.clear();
      }
   }, []);

   // Fit terminal to container
   const fit = useCallback(() => {
      if (fitAddonRef.current) {
         try {
            fitAddonRef.current.fit();
            const { cols, rows } = terminalRef.current?.rows
               ? { cols: terminalRef.current.cols, rows: terminalRef.current.rows }
               : { cols: 80, rows: 24 };
            resize(cols, rows);
         } catch (err) {
            console.warn('Error fitting terminal:', err);
         }
      }
   }, [resize]);

   // Input handler is now set up during terminal initialization

   // Cleanup on unmount
   useEffect(() => {
      return () => {
         disconnect();
         if (terminalRef.current) {
            // Clean up input handler if it exists
            if ((terminalRef.current as any)._inputDisposable) {
               (terminalRef.current as any)._inputDisposable.dispose();
            }
            terminalRef.current.dispose();
            terminalRef.current = null;
         }
         fitAddonRef.current = null;
      };
   }, [disconnect]);

   return {
      terminal: terminalRef.current,
      initializeTerminal,
      connectionStatus,
      session,
      connect,
      disconnect,
      sendInput,
      resize,
      clear,
      fit,
      isConnected: connectionStatus === TerminalConnectionStatus.CONNECTED,
      error,
   };
}
