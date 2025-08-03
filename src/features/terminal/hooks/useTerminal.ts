'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Terminal } from '@xterm/xterm';
import type { FitAddon } from '@xterm/addon-fit';
import type { UseTerminalReturn } from '../types/terminal';
import { TerminalConnectionStatus } from '../types/terminal';
import { getXTermConfig, getThemeForMode } from '../utils/terminalConfig';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';

interface UseTerminalOptions {
   theme?: 'light' | 'dark' | 'auto';
   fontSize?: number;
   fontFamily?: string;
   sessionId?: string; // For session restoration
   clientId?: string; // For client identification
   onConnect?: () => void;
   onDisconnect?: () => void;
   onError?: (error: string) => void;
   onSessionRestored?: (sessionId: string) => void;
}

export function useTerminal(
   terminalId: string,
   options: UseTerminalOptions = {}
): UseTerminalReturn {
   const {
      theme = 'auto',
      fontSize = 14,
      fontFamily = 'Monaco, Menlo, "Ubuntu Mono", monospace',
      sessionId,
      clientId,
      onConnect,
      onDisconnect,
      onError,
      onSessionRestored,
   } = options;

   // Store access
   const store = useMultiTerminalStore();

   // Local state for XTerm management
   const [localError, setLocalError] = useState<string | null>(null);
   const terminalRef = useRef<Terminal | null>(null);
   const fitAddonRef = useRef<FitAddon | null>(null);
   const websocketRef = useRef<WebSocket | null>(null);
   const messageHandlerRef = useRef<((event: MessageEvent) => void) | null>(null);

   // Get terminal data from store
   const terminal = store.getTerminalById(terminalId);
   const connectionStatus = store.getConnectionStatus(terminalId);
   const session = store.getSession(terminalId);
   const storeError = store.getError(terminalId);
   const isConnected = connectionStatus === TerminalConnectionStatus.CONNECTED;

   // Combined error state (local XTerm errors + store socket errors)
   const error = localError || storeError;

   // Initialize terminal XTerm instance
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

         // Load essential addons only
         terminal.loadAddon(fitAddon);
         terminal.loadAddon(webLinksAddon);

         console.log(`Terminal ${terminalId} created with XTerm instance`);

         terminalRef.current = terminal;
         fitAddonRef.current = fitAddon;
         return terminal;
      } catch (err) {
         const errorMsg = `Failed to initialize terminal ${terminalId}`;
         console.error(errorMsg, err);
         setLocalError(errorMsg);
         return null;
      }
   }, [theme, fontSize, fontFamily, terminalId]);

   // Attach input handler to terminal
   const attachInputHandler = useCallback(() => {
      if (!terminalRef.current || !isConnected) return null;

      console.log(`Attaching input handler to terminal ${terminalId}`);

      // Remove existing handler if any
      if ((terminalRef.current as any)._inputDisposable) {
         (terminalRef.current as any)._inputDisposable.dispose();
      }

      // Attach new input handler that uses store's sendInput
      const disposable = terminalRef.current.onData((data) => {
         console.log(`Terminal ${terminalId} input received:`, data);
         store.sendInput(terminalId, data);
      });

      // Store disposable for cleanup
      (terminalRef.current as any)._inputDisposable = disposable;
      return disposable;
   }, [terminalId, isConnected, store]);

   // Subscribe to WebSocket messages directly
   const subscribeToWebSocketMessages = useCallback(() => {
      if (!terminalRef.current) return;

      const websocket = store.getWebSocket(terminalId);
      if (!websocket) return;

      websocketRef.current = websocket;

      // Create message handler for WebSocket data
      const messageHandler = (event: MessageEvent) => {
         try {
            const message = JSON.parse(event.data);

            // Only handle data messages here - let store handle connection/session messages
            if (message.type === 'data' && message.data && terminalRef.current) {
               console.log(`Writing data to terminal ${terminalId}:`, JSON.stringify(message.data));
               terminalRef.current.write(message.data);

               // Force refresh after write
               setTimeout(() => {
                  if (terminalRef.current) {
                     terminalRef.current.refresh(0, terminalRef.current.rows - 1);
                     terminalRef.current.focus();
                  }
               }, 10);
            }
         } catch (err) {
            console.error(`Error handling WebSocket message for terminal ${terminalId}:`, err);
         }
      };

      // Store handler reference for cleanup
      messageHandlerRef.current = messageHandler;

      // Add listener to WebSocket
      websocket.addEventListener('message', messageHandler);
   }, [terminalId, store]);

   // Connect to websocket through store
   const connect = useCallback(async (): Promise<void> => {
      try {
         await store.connectTerminal(terminalId, {
            sessionId,
            clientId: clientId || terminalId,
         });
         onConnect?.();
      } catch (err) {
         const errorMsg = err instanceof Error ? err.message : 'Connection failed';
         setLocalError(errorMsg);
         onError?.(errorMsg);
         throw err;
      }
   }, [store, terminalId, sessionId, clientId, onConnect, onError]);

   // Disconnect from websocket through store
   const disconnect = useCallback(() => {
      store.disconnectTerminal(terminalId);
      onDisconnect?.();
   }, [store, terminalId, onDisconnect]);

   // Send input through store
   const sendInput = useCallback(
      (data: string) => {
         store.sendInput(terminalId, data);
      },
      [store, terminalId]
   );

   // Resize terminal
   const resize = useCallback(
      (cols: number, rows: number) => {
         // Resize XTerm instance
         if (terminalRef.current) {
            terminalRef.current.resize(cols, rows);
         }

         // Send resize to server through store
         store.resizeTerminal(terminalId, cols, rows);
      },
      [store, terminalId]
   );

   // Clear terminal
   const clear = useCallback(() => {
      if (terminalRef.current) {
         terminalRef.current.clear();
      }
   }, []);

   // Fit terminal to container
   const fit = useCallback(async () => {
      if (fitAddonRef.current && terminalRef.current) {
         try {
            fitAddonRef.current.fit();

            // Wait for next frame to ensure fit() completed
            await new Promise((resolve) => requestAnimationFrame(resolve));

            const cols = terminalRef.current.cols;
            const rows = terminalRef.current.rows;

            // Validate dimensions before sending
            if (cols > 0 && rows > 0) {
               console.log(`Fitting terminal ${terminalId} to ${cols}x${rows}`);
               resize(cols, rows);
            } else {
               console.warn(`Invalid terminal dimensions for ${terminalId}:`, { cols, rows });
            }
         } catch (err) {
            console.warn(`Error fitting terminal ${terminalId}:`, err);
         }
      }
   }, [resize, terminalId]);

   // Clear local error
   const clearError = useCallback(() => {
      setLocalError(null);
      store.clearError(terminalId);
   }, [store, terminalId]);

   // Subscribe to WebSocket messages when connected
   useEffect(() => {
      if (isConnected) {
         subscribeToWebSocketMessages();
         // Attach input handler when connected
         setTimeout(() => {
            attachInputHandler();
         }, 100);
      }
   }, [isConnected, subscribeToWebSocketMessages, attachInputHandler]);

   // Handle session restoration callback
   useEffect(() => {
      if (session && session.sessionId && onSessionRestored) {
         onSessionRestored(session.sessionId);
      }
   }, [session, onSessionRestored]);

   // Cleanup on unmount
   useEffect(() => {
      return () => {
         // Cleanup WebSocket message handler
         if (websocketRef.current && messageHandlerRef.current) {
            websocketRef.current.removeEventListener('message', messageHandlerRef.current);
         }

         // Cleanup XTerm instance
         if (terminalRef.current) {
            // Clean up input handler if it exists
            if ((terminalRef.current as any)._inputDisposable) {
               (terminalRef.current as any)._inputDisposable.dispose();
            }
            terminalRef.current.dispose();
            terminalRef.current = null;
         }
         fitAddonRef.current = null;
         websocketRef.current = null;
         messageHandlerRef.current = null;
      };
   }, []);

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
      isConnected,
      error,
   };
}
