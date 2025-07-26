'use client';

import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// WebSocket connection states
export enum ConnectionState {
   DISCONNECTED = 'disconnected',
   CONNECTING = 'connecting',
   CONNECTED = 'connected',
   RECONNECTING = 'reconnecting',
   ERROR = 'error',
}

// WebSocket hook configuration
export interface UseWebSocketConfig {
   url?: string;
   path?: string;
   autoConnect?: boolean;
   reconnect?: boolean;
   reconnectAttempts?: number;
   reconnectDelay?: number;
   timeout?: number;
   transports?: ('websocket' | 'polling')[];
}

// WebSocket event handlers
export interface WebSocketEventHandlers {
   onConnect?: () => void;
   onDisconnect?: (reason: string) => void;
   onError?: (error: any) => void;
   onReconnect?: (attemptNumber: number) => void;
   onReconnectError?: (error: any) => void;
   onTasksUpdated?: (data: any) => void;
   onFileChanged?: (data: any) => void;
   onCliResult?: (data: any) => void;
   onSystemHeartbeat?: (data: any) => void;
   onWelcome?: (data: any) => void;
   [key: string]: ((data?: any) => void) | undefined;
}

// WebSocket hook return type
export interface UseWebSocketReturn {
   socket: Socket | null;
   connectionState: ConnectionState;
   isConnected: boolean;
   error: string | null;
   connect: () => void;
   disconnect: () => void;
   reconnect: () => void;
   joinRoom: (room: string) => void;
   leaveRoom: (room: string) => void;
   executeCli: (command: string, args: string[]) => Promise<any>;
   getTasks: () => void;
   watchFiles: (paths: string[]) => void;
   emit: (event: string, data?: any) => void;
   lastMessage: any;
   connectionInfo: {
      clientId?: string;
      connectedAt?: Date;
      serverTime?: string;
      connectedClients?: number;
   };
}

// Main WebSocket hook
export function useWebSocket(
   config: UseWebSocketConfig = {},
   eventHandlers: WebSocketEventHandlers = {}
): UseWebSocketReturn {
   const {
      url = 'http://localhost:3002',
      path = '/socket.io',
      autoConnect = true,
      reconnect = true,
      reconnectAttempts = 5,
      reconnectDelay = 1000,
      timeout = 10000,
      transports = ['websocket', 'polling'],
   } = config;

   const [connectionState, setConnectionState] = useState<ConnectionState>(
      ConnectionState.DISCONNECTED
   );
   const [error, setError] = useState<string | null>(null);
   const [lastMessage, setLastMessage] = useState<any>(null);
   const [connectionInfo, setConnectionInfo] = useState<UseWebSocketReturn['connectionInfo']>({});

   const socketRef = useRef<Socket | null>(null);
   const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   const reconnectAttemptsRef = useRef(0);

   // Initialize socket connection
   const initializeSocket = () => {
      if (socketRef.current?.connected) {
         return;
      }

      setConnectionState(ConnectionState.CONNECTING);
      setError(null);

      try {
         const socket = io(url, {
            path,
            transports,
            timeout,
            autoConnect: false,
            reconnection: reconnect,
            reconnectionAttempts: reconnectAttempts,
            reconnectionDelay: reconnectDelay,
         });

         // Connection events
         socket.on('connect', () => {
            setConnectionState(ConnectionState.CONNECTED);
            setError(null);
            reconnectAttemptsRef.current = 0;
            console.log('WebSocket connected');
            eventHandlers.onConnect?.();
         });

         socket.on('disconnect', (reason) => {
            setConnectionState(ConnectionState.DISCONNECTED);
            console.log('WebSocket disconnected:', reason);
            eventHandlers.onDisconnect?.(reason);
         });

         socket.on('connect_error', (err) => {
            setConnectionState(ConnectionState.ERROR);
            setError(err.message);
            console.error('WebSocket connection error:', err);
            eventHandlers.onError?.(err);
         });

         socket.on('reconnect', (attemptNumber) => {
            setConnectionState(ConnectionState.CONNECTED);
            setError(null);
            console.log('WebSocket reconnected after', attemptNumber, 'attempts');
            eventHandlers.onReconnect?.(attemptNumber);
         });

         socket.on('reconnect_error', (err) => {
            setConnectionState(ConnectionState.RECONNECTING);
            setError(err.message);
            reconnectAttemptsRef.current++;
            console.error('WebSocket reconnection error:', err);
            eventHandlers.onReconnectError?.(err);
         });

         socket.on('reconnect_failed', () => {
            setConnectionState(ConnectionState.ERROR);
            setError('Failed to reconnect after maximum attempts');
            console.error('WebSocket reconnection failed');
         });

         // Welcome message with connection info
         socket.on('welcome', (data) => {
            setConnectionInfo({
               clientId: data.clientId,
               connectedAt: new Date(),
               serverTime: data.serverTime,
               connectedClients: data.connectedClients,
            });
            eventHandlers.onWelcome?.(data);
         });

         // Task Master specific events
         socket.on('tasks-updated', (data) => {
            setLastMessage({ type: 'tasks-updated', data, timestamp: new Date() });
            eventHandlers.onTasksUpdated?.(data);
         });

         socket.on('file-changed', (data) => {
            setLastMessage({ type: 'file-changed', data, timestamp: new Date() });
            eventHandlers.onFileChanged?.(data);
         });

         socket.on('cli-result', (data) => {
            setLastMessage({ type: 'cli-result', data, timestamp: new Date() });
            eventHandlers.onCliResult?.(data);
         });

         socket.on('system-heartbeat', (data) => {
            setLastMessage({ type: 'system-heartbeat', data, timestamp: new Date() });
            eventHandlers.onSystemHeartbeat?.(data);
         });

         // Generic event handler for any other events
         const originalEmit = socket.emit;
         socket.emit = function (event: string, ...args: any[]) {
            setLastMessage({ type: 'outgoing', event, args, timestamp: new Date() });
            return originalEmit.apply(this, [event, ...args]);
         };

         // Register custom event handlers
         Object.entries(eventHandlers).forEach(([event, handler]) => {
            if (event.startsWith('on') && handler) {
               const eventName = event.slice(2).toLowerCase();
               if (
                  !['connect', 'disconnect', 'error', 'reconnect', 'reconnecterror'].includes(
                     eventName
                  )
               ) {
                  socket.on(eventName, handler);
               }
            }
         });

         socketRef.current = socket;
      } catch (err) {
         setConnectionState(ConnectionState.ERROR);
         setError(`Failed to initialize socket: ${err.message}`);
         console.error('Socket initialization error:', err);
      }
   };

   // Connect to WebSocket
   const connect = () => {
      if (!socketRef.current) {
         initializeSocket();
      }

      if (socketRef.current && !socketRef.current.connected) {
         socketRef.current.connect();
      }
   };

   // Disconnect from WebSocket
   const disconnect = () => {
      if (reconnectTimeoutRef.current) {
         clearTimeout(reconnectTimeoutRef.current);
         reconnectTimeoutRef.current = null;
      }

      if (socketRef.current) {
         socketRef.current.disconnect();
         setConnectionState(ConnectionState.DISCONNECTED);
      }
   };

   // Manual reconnect
   const reconnectManually = () => {
      disconnect();
      setTimeout(() => {
         connect();
      }, 500);
   };

   // Join a room
   const joinRoom = (room: string) => {
      if (socketRef.current?.connected) {
         socketRef.current.emit('join-room', room);
      }
   };

   // Leave a room
   const leaveRoom = (room: string) => {
      if (socketRef.current?.connected) {
         socketRef.current.emit('leave-room', room);
      }
   };

   // Execute CLI command
   const executeCli = async (command: string, args: string[]): Promise<any> => {
      return new Promise((resolve, reject) => {
         if (!socketRef.current?.connected) {
            reject(new Error('Not connected to WebSocket'));
            return;
         }

         const timeout = setTimeout(() => {
            reject(new Error('CLI command timeout'));
         }, 30000);

         socketRef.current.once('cli-result', (result) => {
            clearTimeout(timeout);
            if (result.success) {
               resolve(result.result);
            } else {
               reject(new Error(result.error));
            }
         });

         socketRef.current.emit('execute-cli', { command, args });
      });
   };

   // Get tasks
   const getTasks = () => {
      if (socketRef.current?.connected) {
         socketRef.current.emit('get-tasks');
      }
   };

   // Watch files
   const watchFiles = (paths: string[]) => {
      if (socketRef.current?.connected) {
         socketRef.current.emit('watch-files', paths);
      }
   };

   // Generic emit function
   const emit = (event: string, data?: any) => {
      if (socketRef.current?.connected) {
         socketRef.current.emit(event, data);
      }
   };

   // Auto-connect on mount
   useEffect(() => {
      if (autoConnect) {
         initializeSocket();
         connect();
      }

      return () => {
         disconnect();
         if (socketRef.current) {
            socketRef.current.removeAllListeners();
            socketRef.current = null;
         }
      };
   }, []);

   // Periodic heartbeat
   useEffect(() => {
      if (connectionState === ConnectionState.CONNECTED) {
         const heartbeatInterval = setInterval(() => {
            if (socketRef.current?.connected) {
               socketRef.current.emit('heartbeat', {
                  clientTimestamp: new Date().toISOString(),
                  connectionDuration: connectionInfo.connectedAt
                     ? Date.now() - connectionInfo.connectedAt.getTime()
                     : 0,
               });
            }
         }, 30000); // Every 30 seconds

         return () => clearInterval(heartbeatInterval);
      }
   }, [connectionState, connectionInfo.connectedAt]);

   return {
      socket: socketRef.current,
      connectionState,
      isConnected: connectionState === ConnectionState.CONNECTED,
      error,
      connect,
      disconnect,
      reconnect: reconnectManually,
      joinRoom,
      leaveRoom,
      executeCli,
      getTasks,
      watchFiles,
      emit,
      lastMessage,
      connectionInfo,
   };
}

// Specialized hooks for common use cases

// Hook for task management
export function useTaskWebSocket(
   eventHandlers: Pick<WebSocketEventHandlers, 'onTasksUpdated'> = {}
) {
   const ws = useWebSocket(
      {},
      {
         ...eventHandlers,
         onConnect: () => {
            ws.joinRoom('tasks');
            ws.getTasks();
         },
      }
   );

   return {
      ...ws,
      refreshTasks: () => ws.getTasks(),
      updateTaskStatus: (id: string, status: string) =>
         ws.executeCli('set-status', [`--id=${id}`, `--status=${status}`]),
      getTaskDetails: (id: string) => ws.executeCli('show', [`--id=${id}`]),
   };
}

// Hook for file monitoring
export function useFileWebSocket(
   paths: string[] = [],
   eventHandlers: Pick<WebSocketEventHandlers, 'onFileChanged'> = {}
) {
   const ws = useWebSocket(
      {},
      {
         ...eventHandlers,
         onConnect: () => {
            ws.joinRoom('files');
            if (paths.length > 0) {
               ws.watchFiles(paths);
            }
         },
      }
   );

   return {
      ...ws,
      addWatchPath: (path: string) => {
         const newPaths = [...paths, path];
         ws.watchFiles(newPaths);
      },
   };
}

// Hook for system monitoring
export function useSystemWebSocket(
   eventHandlers: Pick<WebSocketEventHandlers, 'onSystemHeartbeat'> = {}
) {
   const ws = useWebSocket(
      {},
      {
         ...eventHandlers,
         onConnect: () => {
            ws.joinRoom('system');
         },
      }
   );

   return ws;
}
