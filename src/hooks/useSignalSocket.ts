import { useEffect, useRef, useState, useCallback } from 'react';

export interface SignalMessage {
   type: string;
   clientId?: string;
   filePath?: string;
   changeType?: string;
   timestamp?: string;
   [key: string]: any;
}

export interface UseSignalSocketOptions {
   url?: string;
   clientId?: string;
   autoConnect?: boolean;
   onMessage?: (message: SignalMessage) => void;
   onFileChanged?: (filePath: string, changeType: string) => void;
   onConnect?: () => void;
   onDisconnect?: () => void;
   onError?: (error: Event) => void;
}

export function useSignalSocket(options: UseSignalSocketOptions = {}) {
   const {
      url = 'ws://localhost:3002',
      clientId = `client_${Date.now()}`,
      autoConnect = true,
      onMessage,
      onFileChanged,
      onConnect,
      onDisconnect,
      onError,
   } = options;

   const [isConnected, setIsConnected] = useState(false);
   const [connectionState, setConnectionState] = useState<
      'connecting' | 'connected' | 'disconnected' | 'error'
   >('disconnected');
   const [lastMessage, setLastMessage] = useState<SignalMessage | null>(null);
   const [fileChanges, setFileChanges] = useState<
      Array<{ filePath: string; changeType: string; timestamp: string }>
   >([]);

   const wsRef = useRef<WebSocket | null>(null);
   const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   const reconnectAttempts = useRef(0);
   const maxReconnectAttempts = 5;

   const connect = useCallback(() => {
      if (
         wsRef.current?.readyState === WebSocket.OPEN ||
         wsRef.current?.readyState === WebSocket.CONNECTING
      ) {
         return;
      }

      try {
         setConnectionState('connecting');
         const wsUrl = `${url}?clientId=${encodeURIComponent(clientId)}`;

         wsRef.current = new WebSocket(wsUrl);

         wsRef.current.onopen = () => {
            console.log('Signal WebSocket connected');
            setIsConnected(true);
            setConnectionState('connected');
            reconnectAttempts.current = 0;
            onConnect?.();
         };

         wsRef.current.onmessage = (event) => {
            try {
               const message: SignalMessage = JSON.parse(event.data);
               setLastMessage(message);

               // Handle file change messages
               if (message.type === 'file-changed' && message.filePath) {
                  const fileChange = {
                     filePath: message.filePath,
                     changeType: message.changeType || 'change',
                     timestamp: message.timestamp || new Date().toISOString(),
                  };

                  setFileChanges((prev) => [...prev.slice(-49), fileChange]); // Keep last 50 changes
                  onFileChanged?.(message.filePath, message.changeType || 'change');
               }

               onMessage?.(message);
            } catch (error) {
               console.error('Error parsing signal message:', error);
            }
         };

         wsRef.current.onclose = () => {
            console.log('Signal WebSocket disconnected');
            setIsConnected(false);
            setConnectionState('disconnected');
            onDisconnect?.();

            // Auto-reconnect with backoff
            if (autoConnect && reconnectAttempts.current < maxReconnectAttempts) {
               reconnectAttempts.current++;
               const delay = Math.min(1000 * Math.pow(2, reconnectAttempts.current), 10000); // Max 10 seconds

               reconnectTimeoutRef.current = setTimeout(() => {
                  console.log(
                     `Attempting to reconnect Signal WebSocket (${reconnectAttempts.current}/${maxReconnectAttempts})...`
                  );
                  connect();
               }, delay);
            }
         };

         wsRef.current.onerror = (error) => {
            console.error('Signal WebSocket error:', error);
            setConnectionState('error');
            onError?.(error);
         };
      } catch (error) {
         console.error('Failed to create signal WebSocket:', error);
         setConnectionState('error');
      }
   }, [url, clientId, autoConnect, onConnect, onDisconnect, onError, onMessage, onFileChanged]);

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

   const sendMessage = useCallback((message: any) => {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
         wsRef.current.send(JSON.stringify(message));
         return true;
      }
      return false;
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
      lastMessage,
      fileChanges,
      connect,
      disconnect,
      sendMessage,
   };
}
