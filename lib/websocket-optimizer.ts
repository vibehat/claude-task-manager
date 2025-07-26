import { EventEmitter } from 'events';
import { getGlobalErrorHandler, ErrorType } from './error-handler';
import { getGlobalPerformanceCache } from './performance-cache';

// WebSocket optimization configuration
export interface WebSocketOptimizerConfig {
   batchSize: number; // Maximum messages per batch
   batchInterval: number; // Batch flush interval in milliseconds
   compressionThreshold: number; // Compress messages larger than this
   priorityLevels: number; // Number of priority levels (1-5)
   maxQueueSize: number; // Maximum queued messages per client
   enableHeartbeat: boolean; // Enable heartbeat monitoring
   heartbeatInterval: number; // Heartbeat interval in milliseconds
   connectionTimeout: number; // Connection timeout in milliseconds
   maxReconnectAttempts: number; // Maximum reconnection attempts
   backoffMultiplier: number; // Exponential backoff multiplier
   enableMetrics: boolean; // Enable performance metrics
   enableThrottling: boolean; // Enable message throttling
   throttleConfig: ThrottleConfig; // Throttling configuration
}

export interface ThrottleConfig {
   maxMessagesPerSecond: number;
   maxBytesPerSecond: number;
   burstLimit: number;
   windowSize: number;
}

// Message priority levels
export enum MessagePriority {
   CRITICAL = 1, // System critical, immediate delivery
   HIGH = 2, // User actions, high priority
   NORMAL = 3, // Regular updates
   LOW = 4, // Background updates
   BULK = 5, // Bulk operations, lowest priority
}

// Message types for optimization
export enum MessageType {
   TASK_UPDATE = 'task_update',
   TASK_CREATE = 'task_create',
   TASK_DELETE = 'task_delete',
   STATUS_CHANGE = 'status_change',
   FILE_CHANGE = 'file_change',
   CLI_OUTPUT = 'cli_output',
   SYSTEM_NOTIFICATION = 'system_notification',
   HEARTBEAT = 'heartbeat',
   BULK_UPDATE = 'bulk_update',
   ERROR_NOTIFICATION = 'error_notification',
}

// Optimized message structure
export interface OptimizedMessage {
   id: string;
   type: MessageType;
   priority: MessagePriority;
   payload: any;
   timestamp: number;
   clientId?: string;
   room?: string;
   compressed?: boolean;
   retryCount?: number;
   expiresAt?: number;
   metadata?: {
      source: string;
      version: string;
      correlationId?: string;
      batchId?: string;
   };
}

// Message batch for efficient delivery
export interface MessageBatch {
   id: string;
   messages: OptimizedMessage[];
   totalSize: number;
   priority: MessagePriority;
   createdAt: number;
   targetClients: string[];
   compressed: boolean;
}

// Client connection info
export interface ClientConnectionInfo {
   clientId: string;
   connectionId: string;
   connectedAt: number;
   lastSeen: number;
   messagesQueued: number;
   messagesSent: number;
   bytesReceived: number;
   bytesSent: number;
   room?: string;
   subscriptions: Set<string>;
   capabilities: ClientCapabilities;
   throttleState: ThrottleState;
}

export interface ClientCapabilities {
   compression: boolean;
   batchProcessing: boolean;
   maxMessageSize: number;
   supportedTypes: MessageType[];
}

export interface ThrottleState {
   messagesThisWindow: number;
   bytesThisWindow: number;
   windowStartTime: number;
   burstTokens: number;
   lastResetTime: number;
}

// Performance metrics
export interface WebSocketMetrics {
   totalConnections: number;
   activeConnections: number;
   totalMessagesSent: number;
   totalMessagesReceived: number;
   totalBytesSent: number;
   totalBytesReceived: number;
   messagesSinceLastReset: number;
   averageMessageSize: number;
   averageBatchSize: number;
   compressionRatio: number;
   deliveryLatency: number;
   throughputMbps: number;
   errorRate: number;
   reconnectionRate: number;
   queuedMessages: number;
   droppedMessages: number;
   throttledMessages: number;
}

// Default configuration
const DEFAULT_CONFIG: WebSocketOptimizerConfig = {
   batchSize: 10,
   batchInterval: 100, // 100ms
   compressionThreshold: 1024, // 1KB
   priorityLevels: 5,
   maxQueueSize: 1000,
   enableHeartbeat: true,
   heartbeatInterval: 30000, // 30 seconds
   connectionTimeout: 60000, // 60 seconds
   maxReconnectAttempts: 5,
   backoffMultiplier: 1.5,
   enableMetrics: true,
   enableThrottling: true,
   throttleConfig: {
      maxMessagesPerSecond: 100,
      maxBytesPerSecond: 1024 * 1024, // 1MB/s
      burstLimit: 20,
      windowSize: 1000, // 1 second
   },
};

// Main WebSocket optimizer class
export class WebSocketOptimizer extends EventEmitter {
   private config: WebSocketOptimizerConfig;
   private errorHandler = getGlobalErrorHandler();
   private cache = getGlobalPerformanceCache();

   // Connection management
   private connections = new Map<string, ClientConnectionInfo>();
   private messageQueues = new Map<string, Map<MessagePriority, OptimizedMessage[]>>();
   private batchTimer: NodeJS.Timeout | null = null;
   private heartbeatTimer: NodeJS.Timeout | null = null;

   // Metrics and monitoring
   private metrics: WebSocketMetrics;
   private metricsStartTime = Date.now();

   // Message compression
   private compressionCache = new Map<string, Buffer>();

   constructor(config: Partial<WebSocketOptimizerConfig> = {}) {
      super();
      this.config = { ...DEFAULT_CONFIG, ...config };

      this.metrics = {
         totalConnections: 0,
         activeConnections: 0,
         totalMessagesSent: 0,
         totalMessagesReceived: 0,
         totalBytesSent: 0,
         totalBytesReceived: 0,
         messagesSinceLastReset: 0,
         averageMessageSize: 0,
         averageBatchSize: 0,
         compressionRatio: 0,
         deliveryLatency: 0,
         throughputMbps: 0,
         errorRate: 0,
         reconnectionRate: 0,
         queuedMessages: 0,
         droppedMessages: 0,
         throttledMessages: 0,
      };

      this.startBatchProcessor();
      this.startHeartbeatMonitor();
   }

   // Register new client connection
   registerConnection(
      clientId: string,
      connectionId: string,
      capabilities: Partial<ClientCapabilities> = {}
   ): void {
      const defaultCapabilities: ClientCapabilities = {
         compression: true,
         batchProcessing: true,
         maxMessageSize: 64 * 1024, // 64KB
         supportedTypes: Object.values(MessageType),
      };

      const connectionInfo: ClientConnectionInfo = {
         clientId,
         connectionId,
         connectedAt: Date.now(),
         lastSeen: Date.now(),
         messagesQueued: 0,
         messagesSent: 0,
         bytesReceived: 0,
         bytesSent: 0,
         subscriptions: new Set(),
         capabilities: { ...defaultCapabilities, ...capabilities },
         throttleState: {
            messagesThisWindow: 0,
            bytesThisWindow: 0,
            windowStartTime: Date.now(),
            burstTokens: this.config.throttleConfig.burstLimit,
            lastResetTime: Date.now(),
         },
      };

      this.connections.set(clientId, connectionInfo);
      this.messageQueues.set(clientId, new Map());

      // Initialize priority queues
      for (let priority = 1; priority <= this.config.priorityLevels; priority++) {
         this.messageQueues.get(clientId)!.set(priority as MessagePriority, []);
      }

      this.metrics.totalConnections++;
      this.metrics.activeConnections++;

      this.emit('connection:registered', { clientId, connectionId });
   }

   // Unregister client connection
   unregisterConnection(clientId: string): void {
      const connection = this.connections.get(clientId);
      if (connection) {
         this.connections.delete(clientId);
         this.messageQueues.delete(clientId);
         this.metrics.activeConnections--;

         this.emit('connection:unregistered', { clientId });
      }
   }

   // Queue message for optimized delivery
   async queueMessage(message: OptimizedMessage, targetClients?: string[]): Promise<void> {
      try {
         // Generate message ID if not provided
         if (!message.id) {
            message.id = this.generateMessageId();
         }

         // Set timestamp if not provided
         if (!message.timestamp) {
            message.timestamp = Date.now();
         }

         // Determine target clients
         const clients =
            targetClients ||
            (message.clientId ? [message.clientId] : Array.from(this.connections.keys()));

         // Queue message for each target client
         for (const clientId of clients) {
            await this.queueForClient(clientId, message);
         }

         this.metrics.totalMessagesReceived++;
         this.updateMetrics();
      } catch (error) {
         const optimizerError = this.errorHandler.createError(
            ErrorType.NETWORK_ERROR,
            `Failed to queue message: ${error.message}`,
            {
               messageId: message.id,
               messageType: message.type,
               targetClients,
               component: 'WebSocketOptimizer',
            },
            error as Error
         );

         await this.errorHandler.handleError(optimizerError, true);
      }
   }

   // Queue message for specific client
   private async queueForClient(clientId: string, message: OptimizedMessage): Promise<void> {
      const connection = this.connections.get(clientId);
      if (!connection) {
         console.warn(`Connection not found for client: ${clientId}`);
         return;
      }

      const clientQueues = this.messageQueues.get(clientId);
      if (!clientQueues) {
         console.warn(`Message queue not found for client: ${clientId}`);
         return;
      }

      // Check throttling
      if (this.config.enableThrottling && !this.isAllowedByThrottle(connection, message)) {
         this.metrics.throttledMessages++;
         this.emit('message:throttled', { clientId, messageId: message.id });
         return;
      }

      // Check queue size limits
      if (connection.messagesQueued >= this.config.maxQueueSize) {
         // Drop oldest low-priority message
         this.dropOldestMessage(clientId);
         this.metrics.droppedMessages++;
      }

      // Add to appropriate priority queue
      const priorityQueue = clientQueues.get(message.priority);
      if (priorityQueue) {
         priorityQueue.push(message);
         connection.messagesQueued++;
         this.metrics.queuedMessages++;
      }

      // Update connection last seen
      connection.lastSeen = Date.now();
   }

   // Check if message is allowed by throttling rules
   private isAllowedByThrottle(
      connection: ClientConnectionInfo,
      message: OptimizedMessage
   ): boolean {
      const now = Date.now();
      const throttle = connection.throttleState;
      const config = this.config.throttleConfig;

      // Reset window if expired
      if (now - throttle.windowStartTime >= config.windowSize) {
         throttle.messagesThisWindow = 0;
         throttle.bytesThisWindow = 0;
         throttle.windowStartTime = now;
      }

      // Refill burst tokens
      const timeSinceReset = now - throttle.lastResetTime;
      if (timeSinceReset >= 1000) {
         // Refill every second
         const tokensToAdd = Math.floor(timeSinceReset / 1000);
         throttle.burstTokens = Math.min(config.burstLimit, throttle.burstTokens + tokensToAdd);
         throttle.lastResetTime = now;
      }

      const messageSize = this.calculateMessageSize(message);

      // Check rate limits
      const wouldExceedMessageLimit = throttle.messagesThisWindow >= config.maxMessagesPerSecond;
      const wouldExceedByteLimit =
         throttle.bytesThisWindow + messageSize > config.maxBytesPerSecond;

      // Allow if within burst limit
      if (throttle.burstTokens > 0 && !wouldExceedMessageLimit && !wouldExceedByteLimit) {
         throttle.burstTokens--;
         throttle.messagesThisWindow++;
         throttle.bytesThisWindow += messageSize;
         return true;
      }

      // Allow critical messages regardless of throttling
      if (message.priority === MessagePriority.CRITICAL) {
         throttle.messagesThisWindow++;
         throttle.bytesThisWindow += messageSize;
         return true;
      }

      return false;
   }

   // Drop oldest message from client queue
   private dropOldestMessage(clientId: string): void {
      const clientQueues = this.messageQueues.get(clientId);
      const connection = this.connections.get(clientId);

      if (!clientQueues || !connection) return;

      // Find oldest message in lowest priority queue with messages
      for (let priority = this.config.priorityLevels; priority >= 1; priority--) {
         const queue = clientQueues.get(priority as MessagePriority);
         if (queue && queue.length > 0) {
            queue.shift(); // Remove oldest message
            connection.messagesQueued--;
            break;
         }
      }
   }

   // Process and send batched messages
   private async processBatches(): Promise<void> {
      const batches = new Map<string, MessageBatch>();

      // Create batches for each client
      for (const [clientId, connection] of this.connections.entries()) {
         const batch = await this.createBatchForClient(clientId);
         if (batch && batch.messages.length > 0) {
            batches.set(clientId, batch);
         }
      }

      // Send batches
      for (const [clientId, batch] of batches.entries()) {
         await this.sendBatch(clientId, batch);
      }
   }

   // Create message batch for client
   private async createBatchForClient(clientId: string): Promise<MessageBatch | null> {
      const clientQueues = this.messageQueues.get(clientId);
      const connection = this.connections.get(clientId);

      if (!clientQueues || !connection) return null;

      const messages: OptimizedMessage[] = [];
      let totalSize = 0;
      let highestPriority = MessagePriority.BULK;

      // Collect messages from priority queues
      for (let priority = 1; priority <= this.config.priorityLevels; priority++) {
         const queue = clientQueues.get(priority as MessagePriority);
         if (!queue || queue.length === 0) continue;

         while (messages.length < this.config.batchSize && queue.length > 0) {
            const message = queue.shift()!;

            // Check if message is expired
            if (message.expiresAt && Date.now() > message.expiresAt) {
               connection.messagesQueued--;
               continue;
            }

            // Compress message if needed
            if (this.shouldCompressMessage(message)) {
               message.payload = await this.compressPayload(message.payload);
               message.compressed = true;
            }

            messages.push(message);
            totalSize += this.calculateMessageSize(message);
            connection.messagesQueued--;

            if (priority < highestPriority) {
               highestPriority = priority as MessagePriority;
            }
         }

         // Stop if batch is full
         if (messages.length >= this.config.batchSize) break;
      }

      if (messages.length === 0) return null;

      return {
         id: this.generateBatchId(),
         messages,
         totalSize,
         priority: highestPriority,
         createdAt: Date.now(),
         targetClients: [clientId],
         compressed: messages.some((m) => m.compressed),
      };
   }

   // Send batch to client
   private async sendBatch(clientId: string, batch: MessageBatch): Promise<void> {
      try {
         const connection = this.connections.get(clientId);
         if (!connection) return;

         // Emit batch for actual WebSocket sending
         this.emit('batch:send', {
            clientId,
            batch,
            connectionId: connection.connectionId,
         });

         // Update metrics
         connection.messagesSent += batch.messages.length;
         connection.bytesSent += batch.totalSize;
         this.metrics.totalMessagesSent += batch.messages.length;
         this.metrics.totalBytesSent += batch.totalSize;
         this.metrics.queuedMessages -= batch.messages.length;

         this.updateMetrics();
      } catch (error) {
         const batchError = this.errorHandler.createError(
            ErrorType.NETWORK_ERROR,
            `Failed to send batch: ${error.message}`,
            {
               clientId,
               batchId: batch.id,
               messageCount: batch.messages.length,
               component: 'WebSocketOptimizer',
            },
            error as Error
         );

         await this.errorHandler.handleError(batchError, true);
         this.metrics.errorRate++;
      }
   }

   // Start batch processing timer
   private startBatchProcessor(): void {
      this.batchTimer = setInterval(async () => {
         await this.processBatches();
      }, this.config.batchInterval);
   }

   // Start heartbeat monitoring
   private startHeartbeatMonitor(): void {
      if (!this.config.enableHeartbeat) return;

      this.heartbeatTimer = setInterval(async () => {
         await this.sendHeartbeats();
         this.checkConnectionTimeouts();
      }, this.config.heartbeatInterval);
   }

   // Send heartbeat messages
   private async sendHeartbeats(): Promise<void> {
      const heartbeatMessage: OptimizedMessage = {
         id: this.generateMessageId(),
         type: MessageType.HEARTBEAT,
         priority: MessagePriority.LOW,
         payload: { timestamp: Date.now() },
         timestamp: Date.now(),
      };

      const activeClients = Array.from(this.connections.keys());
      await this.queueMessage(heartbeatMessage, activeClients);
   }

   // Check for connection timeouts
   private checkConnectionTimeouts(): void {
      const now = Date.now();
      const timeoutThreshold = this.config.connectionTimeout;

      for (const [clientId, connection] of this.connections.entries()) {
         if (now - connection.lastSeen > timeoutThreshold) {
            this.unregisterConnection(clientId);
            this.emit('connection:timeout', { clientId });
         }
      }
   }

   // Helper methods

   private shouldCompressMessage(message: OptimizedMessage): boolean {
      if (!this.config.compressionThreshold) return false;

      const size = this.calculateMessageSize(message);
      return size > this.config.compressionThreshold;
   }

   private calculateMessageSize(message: OptimizedMessage): number {
      try {
         return Buffer.byteLength(JSON.stringify(message), 'utf8');
      } catch {
         return JSON.stringify(message).length * 2; // Rough estimate
      }
   }

   private async compressPayload(payload: any): Promise<any> {
      try {
         // Simplified compression - in production, use actual compression library
         const serialized = JSON.stringify(payload);
         if (serialized.length > this.config.compressionThreshold) {
            return {
               compressed: true,
               data: Buffer.from(serialized).toString('base64'),
               algorithm: 'base64', // Placeholder for real compression
            };
         }
         return payload;
      } catch (error) {
         console.warn('Compression failed:', error);
         return payload;
      }
   }

   private generateMessageId(): string {
      return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   private generateBatchId(): string {
      return `batch_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   private updateMetrics(): void {
      const now = Date.now();
      const elapsedSeconds = (now - this.metricsStartTime) / 1000;

      if (this.metrics.totalMessagesSent > 0) {
         this.metrics.averageMessageSize =
            this.metrics.totalBytesSent / this.metrics.totalMessagesSent;
      }

      if (elapsedSeconds > 0) {
         this.metrics.throughputMbps =
            (this.metrics.totalBytesSent * 8) / (elapsedSeconds * 1000000);
      }

      // Calculate compression ratio
      let compressedSize = 0;
      let originalSize = 0;

      for (const [clientId, queues] of this.messageQueues.entries()) {
         for (const [priority, messages] of queues.entries()) {
            for (const message of messages) {
               const size = this.calculateMessageSize(message);
               if (message.compressed) {
                  compressedSize += size;
                  originalSize += size * 1.5; // Estimate original size
               } else {
                  originalSize += size;
               }
            }
         }
      }

      if (originalSize > 0) {
         this.metrics.compressionRatio = ((originalSize - compressedSize) / originalSize) * 100;
      }
   }

   // Public API methods

   // Get optimization metrics
   getMetrics(): WebSocketMetrics {
      this.updateMetrics();
      return { ...this.metrics };
   }

   // Get connection info
   getConnectionInfo(clientId: string): ClientConnectionInfo | null {
      return this.connections.get(clientId) || null;
   }

   // Get all active connections
   getActiveConnections(): ClientConnectionInfo[] {
      return Array.from(this.connections.values());
   }

   // Update client subscription
   updateSubscription(clientId: string, subscriptions: string[]): void {
      const connection = this.connections.get(clientId);
      if (connection) {
         connection.subscriptions = new Set(subscriptions);
         this.emit('subscription:updated', { clientId, subscriptions });
      }
   }

   // Force flush all queues
   async flushAll(): Promise<void> {
      await this.processBatches();
   }

   // Update configuration
   updateConfig(newConfig: Partial<WebSocketOptimizerConfig>): void {
      this.config = { ...this.config, ...newConfig };
      this.emit('config:updated', newConfig);
   }

   // Reset metrics
   resetMetrics(): void {
      this.metrics = {
         totalConnections: this.connections.size,
         activeConnections: this.connections.size,
         totalMessagesSent: 0,
         totalMessagesReceived: 0,
         totalBytesSent: 0,
         totalBytesReceived: 0,
         messagesSinceLastReset: 0,
         averageMessageSize: 0,
         averageBatchSize: 0,
         compressionRatio: 0,
         deliveryLatency: 0,
         throughputMbps: 0,
         errorRate: 0,
         reconnectionRate: 0,
         queuedMessages: this.getQueuedMessageCount(),
         droppedMessages: 0,
         throttledMessages: 0,
      };

      this.metricsStartTime = Date.now();
   }

   // Get total queued messages count
   private getQueuedMessageCount(): number {
      let total = 0;
      for (const connection of this.connections.values()) {
         total += connection.messagesQueued;
      }
      return total;
   }

   // Cleanup resources
   async cleanup(): Promise<void> {
      if (this.batchTimer) {
         clearInterval(this.batchTimer);
         this.batchTimer = null;
      }

      if (this.heartbeatTimer) {
         clearInterval(this.heartbeatTimer);
         this.heartbeatTimer = null;
      }

      // Flush remaining batches
      await this.processBatches();

      // Clear all connections and queues
      this.connections.clear();
      this.messageQueues.clear();
      this.compressionCache.clear();

      this.removeAllListeners();
   }
}

// Utility functions for WebSocket optimization
export const WebSocketUtils = {
   // Create optimized message
   createMessage: (
      type: MessageType,
      payload: any,
      priority: MessagePriority = MessagePriority.NORMAL,
      options: Partial<OptimizedMessage> = {}
   ): OptimizedMessage => {
      return {
         id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
         type,
         priority,
         payload,
         timestamp: Date.now(),
         ...options,
      };
   },

   // Calculate message priority based on type
   calculatePriority: (type: MessageType): MessagePriority => {
      switch (type) {
         case MessageType.ERROR_NOTIFICATION:
         case MessageType.SYSTEM_NOTIFICATION:
            return MessagePriority.CRITICAL;

         case MessageType.TASK_UPDATE:
         case MessageType.STATUS_CHANGE:
            return MessagePriority.HIGH;

         case MessageType.TASK_CREATE:
         case MessageType.CLI_OUTPUT:
            return MessagePriority.NORMAL;

         case MessageType.FILE_CHANGE:
            return MessagePriority.LOW;

         case MessageType.BULK_UPDATE:
         case MessageType.HEARTBEAT:
            return MessagePriority.BULK;

         default:
            return MessagePriority.NORMAL;
      }
   },

   // Validate message structure
   validateMessage: (message: any): message is OptimizedMessage => {
      return (
         typeof message === 'object' &&
         typeof message.id === 'string' &&
         typeof message.type === 'string' &&
         typeof message.priority === 'number' &&
         message.priority >= 1 &&
         message.priority <= 5 &&
         typeof message.timestamp === 'number' &&
         message.payload !== undefined
      );
   },
};

// Export singleton instance
let globalWebSocketOptimizer: WebSocketOptimizer | null = null;

export function getGlobalWebSocketOptimizer(): WebSocketOptimizer {
   if (!globalWebSocketOptimizer) {
      globalWebSocketOptimizer = new WebSocketOptimizer();
   }
   return globalWebSocketOptimizer;
}
