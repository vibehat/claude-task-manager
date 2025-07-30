import { EventEmitter } from 'events';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { PubSub } from 'graphql-subscriptions';

// Event types for subscriptions
export const SUBSCRIPTION_EVENTS = {
   TASK_UPDATED: 'TASK_UPDATED',
   CLI_COMMAND_PROGRESS: 'CLI_COMMAND_PROGRESS',
   SYNC_OPERATION_UPDATED: 'SYNC_OPERATION_UPDATED',
   FILE_WATCH_EVENT: 'FILE_WATCH_EVENT',
   // Extended events for Issue tracking
   ISSUE_UPDATED: 'ISSUE_UPDATED',
   PROJECT_UPDATED: 'PROJECT_UPDATED',
   USER_UPDATED: 'USER_UPDATED',
} as const;

export type SubscriptionEvent = (typeof SUBSCRIPTION_EVENTS)[keyof typeof SUBSCRIPTION_EVENTS];

// Global PubSub instance for GraphQL subscriptions
export const pubsub = new PubSub();

// Enhanced event emitter for the application
class TaskMasterEventEmitter extends EventEmitter {
   constructor() {
      super();
      this.setMaxListeners(100); // Increase limit for many subscribers
   }

   // Task-related events
   emitTaskUpdated(payload: any) {
      this.emit(SUBSCRIPTION_EVENTS.TASK_UPDATED, payload);
      pubsub.publish(SUBSCRIPTION_EVENTS.TASK_UPDATED, { taskUpdated: payload });
   }

   // CLI command events
   emitCLICommandProgress(payload: any) {
      this.emit(SUBSCRIPTION_EVENTS.CLI_COMMAND_PROGRESS, payload);
      pubsub.publish(SUBSCRIPTION_EVENTS.CLI_COMMAND_PROGRESS, { cliCommandProgress: payload });
   }

   // Sync operation events
   emitSyncOperationUpdated(payload: any) {
      this.emit(SUBSCRIPTION_EVENTS.SYNC_OPERATION_UPDATED, payload);
      pubsub.publish(SUBSCRIPTION_EVENTS.SYNC_OPERATION_UPDATED, { syncOperationUpdated: payload });
   }

   // File watch events
   emitFileWatchEvent(payload: any) {
      this.emit(SUBSCRIPTION_EVENTS.FILE_WATCH_EVENT, payload);
      pubsub.publish(SUBSCRIPTION_EVENTS.FILE_WATCH_EVENT, { fileWatchEvent: payload });
   }
}

// Global event emitter instance
export const eventEmitter = new TaskMasterEventEmitter();

// WebSocket connection management
export interface WebSocketConnection {
   id: string;
   socket: any;
   subscriptions: Set<string>;
   metadata: {
      connectedAt: Date;
      lastActivity: Date;
      userAgent?: string;
      remoteAddress?: string;
   };
}

class WebSocketManager {
   private connections = new Map<string, WebSocketConnection>();
   private server: WebSocketServer | null = null;
   private heartbeatInterval: NodeJS.Timeout | null = null;

   constructor() {
      this.startHeartbeat();
   }

   createServer(httpServer: any) {
      this.server = new WebSocketServer({
         server: httpServer,
         path: '/graphql-ws',
         verifyClient: (info) => {
            // Add authentication/authorization logic here
            return true;
         },
      });

      this.server.on('connection', (socket, request) => {
         const connectionId = this.generateConnectionId();
         const connection: WebSocketConnection = {
            id: connectionId,
            socket,
            subscriptions: new Set(),
            metadata: {
               connectedAt: new Date(),
               lastActivity: new Date(),
               userAgent: request.headers['user-agent'],
               remoteAddress: request.socket.remoteAddress,
            },
         };

         this.connections.set(connectionId, connection);
         console.log(`WebSocket connection established: ${connectionId}`);

         // Handle WebSocket messages
         socket.on('message', (data: Buffer) => {
            try {
               const message = JSON.parse(data.toString());
               this.handleMessage(connectionId, message);
               connection.metadata.lastActivity = new Date();
            } catch (error) {
               console.error('WebSocket message parse error:', error);
               socket.send(
                  JSON.stringify({
                     type: 'error',
                     payload: { message: 'Invalid message format' },
                  })
               );
            }
         });

         // Handle connection close
         socket.on('close', () => {
            console.log(`WebSocket connection closed: ${connectionId}`);
            this.connections.delete(connectionId);
         });

         // Handle errors
         socket.on('error', (error) => {
            console.error(`WebSocket error for connection ${connectionId}:`, error);
            this.connections.delete(connectionId);
         });

         // Send connection acknowledgment
         socket.send(
            JSON.stringify({
               type: 'connection_ack',
               payload: { connectionId },
            })
         );
      });

      return this.server;
   }

   private generateConnectionId(): string {
      return `ws_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   private handleMessage(connectionId: string, message: any) {
      const connection = this.connections.get(connectionId);
      if (!connection) return;

      switch (message.type) {
         case 'ping':
            connection.socket.send(JSON.stringify({ type: 'pong', payload: message.payload }));
            break;

         case 'subscribe':
            if (message.subscription) {
               connection.subscriptions.add(message.subscription);
               console.log(`Connection ${connectionId} subscribed to ${message.subscription}`);
            }
            break;

         case 'unsubscribe':
            if (message.subscription) {
               connection.subscriptions.delete(message.subscription);
               console.log(`Connection ${connectionId} unsubscribed from ${message.subscription}`);
            }
            break;

         default:
            console.warn(`Unknown WebSocket message type: ${message.type}`);
      }
   }

   broadcast(event: string, payload: any, filter?: (connection: WebSocketConnection) => boolean) {
      for (const [connectionId, connection] of this.connections) {
         try {
            // Apply filter if provided
            if (filter && !filter(connection)) {
               continue;
            }

            // Check if connection is subscribed to this event
            if (!connection.subscriptions.has(event)) {
               continue;
            }

            // Send the event
            connection.socket.send(
               JSON.stringify({
                  type: 'data',
                  event,
                  payload,
               })
            );

            connection.metadata.lastActivity = new Date();
         } catch (error) {
            console.error(`Error broadcasting to connection ${connectionId}:`, error);
            // Remove failed connection
            this.connections.delete(connectionId);
         }
      }
   }

   getConnectionCount(): number {
      return this.connections.size;
   }

   getConnections(): WebSocketConnection[] {
      return Array.from(this.connections.values());
   }

   closeConnection(connectionId: string) {
      const connection = this.connections.get(connectionId);
      if (connection) {
         connection.socket.close();
         this.connections.delete(connectionId);
      }
   }

   closeAll() {
      for (const [connectionId, connection] of this.connections) {
         try {
            connection.socket.close();
         } catch (error) {
            console.error(`Error closing connection ${connectionId}:`, error);
         }
      }
      this.connections.clear();
   }

   private startHeartbeat() {
      this.heartbeatInterval = setInterval(() => {
         const now = Date.now();
         const staleThreshold = 30000; // 30 seconds

         for (const [connectionId, connection] of this.connections) {
            const lastActivity = connection.metadata.lastActivity.getTime();

            if (now - lastActivity > staleThreshold) {
               try {
                  // Send ping to check if connection is alive
                  connection.socket.ping();
               } catch (error) {
                  console.warn(`Removing stale connection ${connectionId}:`, error);
                  this.connections.delete(connectionId);
               }
            }
         }
      }, 15000); // Check every 15 seconds
   }

   shutdown() {
      if (this.heartbeatInterval) {
         clearInterval(this.heartbeatInterval);
         this.heartbeatInterval = null;
      }

      this.closeAll();

      if (this.server) {
         this.server.close();
         this.server = null;
      }
   }
}

// Global WebSocket manager instance
export const webSocketManager = new WebSocketManager();

// Utility functions for subscription filtering
export function createTaskFilter(filter?: any) {
   return (payload: any) => {
      if (!filter) return true;

      const { task } = payload;

      // Filter by task IDs
      if (filter.taskIds && filter.taskIds.length > 0) {
         if (!filter.taskIds.includes(task.id.toString())) {
            return false;
         }
      }

      // Filter by status
      if (filter.statuses && filter.statuses.length > 0) {
         if (!filter.statuses.includes(task.status.toUpperCase())) {
            return false;
         }
      }

      // Filter by priority
      if (filter.priorities && filter.priorities.length > 0) {
         if (!filter.priorities.includes(task.priority.toUpperCase())) {
            return false;
         }
      }

      // Filter by source
      if (filter.source && payload.source !== filter.source) {
         return false;
      }

      return true;
   };
}

export function createCLIFilter(filter?: any) {
   return (payload: any) => {
      if (!filter) return true;

      // Filter by command IDs
      if (filter.commandIds && filter.commandIds.length > 0) {
         if (!filter.commandIds.includes(payload.commandId)) {
            return false;
         }
      }

      // Filter by commands
      if (filter.commands && filter.commands.length > 0) {
         if (!filter.commands.includes(payload.command)) {
            return false;
         }
      }

      // Filter by status
      if (filter.statuses && filter.statuses.length > 0) {
         if (!filter.statuses.includes(payload.status)) {
            return false;
         }
      }

      return true;
   };
}

export function createSyncFilter(filter?: any) {
   return (payload: any) => {
      if (!filter) return true;

      const { operation } = payload;

      // Filter by operation IDs
      if (filter.operationIds && filter.operationIds.length > 0) {
         if (!filter.operationIds.includes(operation.id)) {
            return false;
         }
      }

      // Filter by types
      if (filter.types && filter.types.length > 0) {
         if (!filter.types.includes(operation.type)) {
            return false;
         }
      }

      // Filter by status
      if (filter.statuses && filter.statuses.length > 0) {
         if (!filter.statuses.includes(operation.status)) {
            return false;
         }
      }

      return true;
   };
}

// Export singleton instance
export default webSocketManager;
