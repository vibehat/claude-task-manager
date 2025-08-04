'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Terminal } from '@xterm/xterm';
import type { FitAddon } from '@xterm/addon-fit';
import type { TerminalMessage, TerminalSession, UseTerminalReturn } from '../types/terminal';
import { TerminalConnectionStatus } from '../types/terminal';
import { getXTermConfig, getWebSocketUrl, getThemeForMode } from '../utils/terminalConfig';

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

export function useIndividualTerminal(options: UseTerminalOptions = {}): UseTerminalReturn {
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
    console.log(
      'Sending input to WebSocket:',
      data,
      'WebSocket state:',
      webSocketRef.current?.readyState
    ); // Debug logging
    if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
      webSocketRef.current.send(
        JSON.stringify({
          type: 'input',
          data,
        })
      );
    } else {
      console.warn('WebSocket not available for input:', webSocketRef.current?.readyState);
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

      // Load essential addons only
      terminal.loadAddon(fitAddon);
      terminal.loadAddon(webLinksAddon);

      console.log('Terminal created with DOM renderer - standard approach:', {
        fitAddonLoaded: true,
        webLinksAddonLoaded: true,
        rendererType: config.rendererType,
      });

      terminalRef.current = terminal;
      fitAddonRef.current = fitAddon;
      return terminal;
    } catch (error) {
      console.error('Failed to initialize terminal:', error);
      return null;
    }
  }, [theme, fontSize, fontFamily]);

  // Attach input handler to terminal
  const attachInputHandler = useCallback(() => {
    if (!terminalRef.current) return null;

    console.log('Attaching input handler to terminal');

    // Remove existing handler if any
    if ((terminalRef.current as any)._inputDisposable) {
      (terminalRef.current as any)._inputDisposable.dispose();
    }

    // Attach new input handler
    const disposable = terminalRef.current.onData((data) => {
      console.log('Terminal input received:', data, 'Connection status:', connectionStatus);
      sendInput(data);
    });

    // Store disposable for cleanup
    (terminalRef.current as any)._inputDisposable = disposable;
    return disposable;
  }, [sendInput, connectionStatus]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Connect to WebSocket with optional session restoration
  const connect = useCallback(async (): Promise<void> => {
    if (
      connectionStatus === TerminalConnectionStatus.CONNECTING ||
      connectionStatus === TerminalConnectionStatus.CONNECTED
    ) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      const connectInternal = async () => {
        try {
          clearError();
          setConnectionStatus(TerminalConnectionStatus.CONNECTING);

          let websocketUrl = await getWebSocketUrl();

          // Add session restoration parameters if available
          if (sessionId || clientId) {
            const urlParams = new URLSearchParams();
            if (sessionId) urlParams.set('sessionId', sessionId);
            if (clientId) urlParams.set('clientId', clientId);
            websocketUrl += `?${urlParams.toString()}`;
            console.log(`🔄 Attempting session restoration with URL: ${websocketUrl}`);
          }

          const ws = new WebSocket(websocketUrl);
          webSocketRef.current = ws;

          ws.onopen = () => {
            console.log('Terminal WebSocket connected');
            setConnectionStatus(TerminalConnectionStatus.CONNECTED);
            reconnectAttemptsRef.current = 0;

            // Attach input handler now that we're connected
            setTimeout(() => {
              attachInputHandler();
            }, 100);

            onConnect?.();
            resolve();
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

                case 'session-restored':
                  console.log(`✅ Session restored: ${message.sessionId}`);
                  if (message.sessionId && message.shell && message.platform) {
                    setSession({
                      sessionId: message.sessionId,
                      shell: message.shell,
                      platform: message.platform,
                      cwd: message.cwd || '',
                      connected: true,
                    });
                    onSessionRestored?.(message.sessionId);
                  }
                  break;

                case 'data':
                  console.log('Received data from server:', JSON.stringify(message.data));
                  if (terminalRef.current && message.data) {
                    console.log('Writing data to xterm:', JSON.stringify(message.data));
                    console.log('Terminal state:', {
                      cols: terminalRef.current.cols,
                      rows: terminalRef.current.rows,
                      element: terminalRef.current.element,
                      isOpen: !!terminalRef.current.element,
                      hasBuffer: !!terminalRef.current.buffer,
                    });
                    terminalRef.current.write(message.data);

                    // Debug: Check DOM content after write - force execution
                    setTimeout(() => {
                      console.log('=== DEBUGGING TERMINAL DOM CONTENT ===');
                      if (terminalRef.current && terminalRef.current.element) {
                        const canvas = terminalRef.current.element?.querySelector('canvas');
                        const viewport =
                          terminalRef.current.element?.querySelector('.xterm-viewport');
                        const screen = terminalRef.current.element?.querySelector('.xterm-screen');

                        const rows = terminalRef.current.element?.querySelector('.xterm-rows');
                        const rowElements = rows?.querySelectorAll('.xterm-row');

                        console.log('DOM ROWS ANALYSIS:');
                        console.log('Total rows found:', rowElements?.length || 0);

                        // Log ALL row contents individually
                        if (rowElements && rowElements.length > 0) {
                          Array.from(rowElements).forEach((row, i) => {
                            const spans = row.querySelectorAll('span');
                            console.log(`Row ${i}:`, {
                              innerHTML: row.innerHTML,
                              textContent: row.textContent,
                              hasSpans: spans.length,
                              spanContents: Array.from(spans).map((span) => ({
                                text: span.textContent,
                                html: span.innerHTML,
                                classes: span.className,
                                styles: span.getAttribute('style'),
                              })),
                            });
                          });
                        } else {
                          console.log('NO ROWS FOUND!');
                        }

                        console.log(
                          'Terminal element innerHTML sample:',
                          terminalRef.current.element?.innerHTML?.slice(0, 1000)
                        );

                        // Check if canvas has actual content and positioning
                        if (canvas) {
                          const ctx = canvas.getContext('2d');
                          if (ctx) {
                            const imageData = ctx.getImageData(
                              0,
                              0,
                              Math.min(50, canvas.width),
                              Math.min(20, canvas.height)
                            );
                            const hasContent = imageData.data.some((pixel) => pixel !== 0);

                            // Log actual canvas content as ASCII representation
                            const sampleWidth = Math.min(20, canvas.width);
                            const sampleHeight = Math.min(10, canvas.height);
                            const sampleData = ctx.getImageData(0, 0, sampleWidth, sampleHeight);
                            let canvasContent = '';
                            for (let y = 0; y < sampleHeight; y++) {
                              let row = '';
                              for (let x = 0; x < sampleWidth; x++) {
                                const i = (y * sampleWidth + x) * 4;
                                const r = sampleData.data[i];
                                const g = sampleData.data[i + 1];
                                const b = sampleData.data[i + 2];
                                const a = sampleData.data[i + 3];
                                // Convert to grayscale and check if it's visible
                                const gray = (r + g + b) / 3;
                                row += a > 0 && gray > 50 ? '#' : a > 0 && gray > 10 ? '.' : ' ';
                              }
                              canvasContent += row + '\n';
                            }
                            console.log('Canvas visual content (20x10 sample):\n' + canvasContent);

                            const canvasRect = canvas.getBoundingClientRect();
                            const containerRect =
                              terminalRef.current.element?.getBoundingClientRect();

                            console.log('Canvas detailed check:', {
                              hasContent,
                              canvasVisible: canvas.style.visibility !== 'hidden',
                              canvasOpacity: canvas.style.opacity,
                              canvasDisplay: canvas.style.display,
                              canvasPosition: canvas.style.position,
                              canvasZIndex: canvas.style.zIndex,
                              canvasRect: {
                                top: canvasRect.top,
                                left: canvasRect.left,
                                width: canvasRect.width,
                                height: canvasRect.height,
                                visible: canvasRect.width > 0 && canvasRect.height > 0,
                              },
                              containerRect: containerRect
                                ? {
                                    top: containerRect.top,
                                    left: containerRect.left,
                                    width: containerRect.width,
                                    height: containerRect.height,
                                  }
                                : 'no container',
                              canvasInView:
                                canvasRect.top >= 0 &&
                                canvasRect.left >= 0 &&
                                canvasRect.top < window.innerHeight &&
                                canvasRect.left < window.innerWidth,
                            });
                          }
                        }
                      }
                    }, 50);

                    // Force refresh/focus after write
                    setTimeout(() => {
                      if (terminalRef.current) {
                        console.log('Forcing terminal refresh and focus');
                        terminalRef.current.refresh(0, terminalRef.current.rows - 1);
                        terminalRef.current.focus();
                      }
                    }, 10);
                  } else {
                    console.warn('Cannot write to terminal:', {
                      hasTerminal: !!terminalRef.current,
                      hasData: !!message.data,
                    });
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
            reject(new Error(errorMsg));
          };
        } catch (err) {
          const errorMsg = err instanceof Error ? err.message : 'Failed to connect to terminal';
          setError(errorMsg);
          setConnectionStatus(TerminalConnectionStatus.ERROR);
          onError?.(errorMsg);
          reject(new Error(errorMsg));
        }
      };

      connectInternal();
    });
  }, [
    connectionStatus,
    sessionId,
    clientId,
    onConnect,
    onDisconnect,
    onError,
    onSessionRestored,
    clearError,
    attachInputHandler,
  ]);

  // Reconnection logic
  const attemptReconnect = useCallback(() => {
    if (reconnectAttemptsRef.current >= maxReconnectAttempts) {
      setError('Maximum reconnection attempts reached');
      return;
    }

    reconnectAttemptsRef.current++;
    setConnectionStatus(TerminalConnectionStatus.RECONNECTING);

    reconnectTimeoutRef.current = setTimeout(() => {
      console.log(`Reconnection attempt ${reconnectAttemptsRef.current}/${maxReconnectAttempts}`);
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
          console.log(`Fitting terminal to ${cols}x${rows}`);
          resize(cols, rows);
        } else {
          console.warn('Invalid terminal dimensions:', { cols, rows });
        }
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
