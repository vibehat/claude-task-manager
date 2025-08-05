import { useEffect, useRef, useState, useCallback } from 'react';

export interface TerminalMessage {
  type: 'connected' | 'data' | 'exit' | 'error' | 'session-restored';
  sessionId?: string;
  data?: string;
  exitCode?: number;
  message?: string;
  shell?: string;
  platform?: string;
  cwd?: string;
  usingPty?: boolean;
  ptySupport?: boolean;
}

export interface UseTerminalSocketOptions {
  url?: string;
  sessionId?: string;
  clientId?: string;
  autoConnect?: boolean;
  onData?: (data: string) => void;
  onConnect?: (info: TerminalMessage) => void;
  onDisconnect?: () => void;
  onError?: (error: Event) => void;
  onExit?: (exitCode: number) => void;
}

export function useTerminalSocket(options: UseTerminalSocketOptions = {}) {
  const {
    url = 'ws://localhost:3001',
    sessionId,
    clientId,
    autoConnect = true,
    onData,
    onConnect,
    onDisconnect,
    onError,
    onExit,
  } = options;

  const [isConnected, setIsConnected] = useState(false);
  const [connectionState, setConnectionState] = useState<
    'connecting' | 'connected' | 'disconnected' | 'error'
  >('disconnected');
  const [terminalInfo, setTerminalInfo] = useState<TerminalMessage | null>(null);
  const [terminalOutput, setTerminalOutput] = useState<string>('');

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttempts = useRef(0);
  const maxReconnectAttempts = 3;

  const connect = useCallback(() => {
    if (
      wsRef.current?.readyState === WebSocket.OPEN ||
      wsRef.current?.readyState === WebSocket.CONNECTING
    ) {
      return;
    }

    try {
      setConnectionState('connecting');

      // Build WebSocket URL with parameters
      const params = new URLSearchParams();
      if (sessionId) params.append('sessionId', sessionId);
      if (clientId) params.append('clientId', clientId);

      const wsUrl = `${url}${params.toString() ? '?' + params.toString() : ''}`;

      wsRef.current = new WebSocket(wsUrl);

      wsRef.current.onopen = () => {
        console.log('Terminal WebSocket connected');
        setIsConnected(true);
        setConnectionState('connected');
        reconnectAttempts.current = 0;
      };

      wsRef.current.onmessage = (event) => {
        try {
          const message: TerminalMessage = JSON.parse(event.data);

          switch (message.type) {
            case 'connected':
            case 'session-restored':
              setTerminalInfo(message);
              onConnect?.(message);
              break;

            case 'data':
              if (message.data) {
                setTerminalOutput((prev) => prev + message.data);
                onData?.(message.data);
              }
              break;

            case 'exit':
              onExit?.(message.exitCode || 0);
              break;

            case 'error':
              console.error('Terminal error:', message.message);
              break;
          }
        } catch (error) {
          console.error('Error parsing terminal message:', error);
        }
      };

      wsRef.current.onclose = () => {
        console.log('Terminal WebSocket disconnected');
        setIsConnected(false);
        setConnectionState('disconnected');
        onDisconnect?.();

        // Auto-reconnect for terminal sessions
        if (autoConnect && reconnectAttempts.current < maxReconnectAttempts) {
          reconnectAttempts.current++;
          const delay = Math.min(1000 * Math.pow(2, reconnectAttempts.current), 10000);

          reconnectTimeoutRef.current = setTimeout(() => {
            console.log(
              `Attempting to reconnect terminal (${reconnectAttempts.current}/${maxReconnectAttempts})...`
            );
            connect();
          }, delay);
        }
      };

      wsRef.current.onerror = (error) => {
        console.error('Terminal WebSocket error:', error);
        setConnectionState('error');
        onError?.(error);
      };
    } catch (error) {
      console.error('Failed to create terminal WebSocket:', error);
      setConnectionState('error');
    }
  }, [url, sessionId, clientId, autoConnect, onConnect, onDisconnect, onError, onData, onExit]);

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }

    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    setIsConnected(false);
    setConnectionState('disconnected');
  }, []);

  const sendInput = useCallback((input: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: 'input',
          data: input,
        })
      );
      return true;
    }
    return false;
  }, []);

  const sendCommand = useCallback(
    (command: string) => {
      return sendInput(command + '\r\n');
    },
    [sendInput]
  );

  const resize = useCallback((cols: number, rows: number) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: 'resize',
          data: { cols, rows },
        })
      );
      return true;
    }
    return false;
  }, []);

  const clearOutput = useCallback(() => {
    setTerminalOutput('');
  }, []);

  // Auto-connect on mount
  useEffect(() => {
    if (autoConnect) {
      connect();
    }

    return () => {
      disconnect();
    };
  }, [autoConnect, connect, disconnect]);

  return {
    isConnected,
    connectionState,
    terminalInfo,
    terminalOutput,
    connect,
    disconnect,
    sendInput,
    sendCommand,
    resize,
    clearOutput,
  };
}
