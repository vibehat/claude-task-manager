import { Server as SocketIOServer } from 'socket.io';
import { EventEmitter } from 'events';
import { Server as HTTPServer } from 'http';
import { getGlobalFileWatcher } from './file-watcher';
import { cliExecutor } from './cli-executor';

// WebSocket event types
export interface WebSocketEvents {
   // Connection events
   connect: { clientId: string; timestamp: string };
   disconnect: { clientId: string; reason: string; timestamp: string };

   // Task Master events
   taskUpdated: { taskId: string; changes: any; timestamp: string };
   cliCommandExecuted: { command: string; result: any; timestamp: string };
   fileChanged: { filename: string; type: string; content?: any };

   // Real-time collaboration
   clientJoinedRoom: { clientId: string; room: string };
   clientLeftRoom: { clientId: string; room: string };

   // System events
   systemStatus: { status: string; metrics: any };
   error: { error: string; clientId?: string };
}

// Client connection information
export interface ClientConnection {
   id: string;
   socketId: string;
   connected: boolean;
   connectedAt: Date;
   lastActivity: Date;
   rooms: Set<string>;
   metadata: {
      userAgent?: string;
      ip?: string;
      version?: string;
   };
}

// Room types for organizing clients
export enum RoomType {
   TASKS = 'tasks',
   CLI = 'cli',
   FILES = 'files',
   SYSTEM = 'system',
   COLLABORATION = 'collaboration',
}

// WebSocket server configuration
export interface WebSocketConfig {
   port?: number;
   path?: string;
   cors?: {
      origin: string | string[];
      methods: string[];
   };
   pingTimeout?: number;
   pingInterval?: number;
   maxConnections?: number;
}

// Enhanced WebSocket server for Task Master integration
export class TaskMasterWebSocketServer extends EventEmitter {
   private io: SocketIOServer | null = null;
   private httpServer: HTTPServer | null = null;
   private clients = new Map<string, ClientConnection>();
   private rooms = new Map<string, Set<string>>();
   private config: Required<WebSocketConfig>;
   private fileWatcher = getGlobalFileWatcher();
   private heartbeatInterval: NodeJS.Timeout | null = null;

   constructor(config: WebSocketConfig = {}) {
      super();

      this.config = {
         port: config.port || 3001,
         path: config.path || '/socket.io',
         cors: config.cors || {
            origin: ['http://localhost:3000', 'http://localhost:3001'],
            methods: ['GET', 'POST'],
         },
         pingTimeout: config.pingTimeout || 30000,
         pingInterval: config.pingInterval || 25000,
         maxConnections: config.maxConnections || 100,
      };

      this.setupFileWatcherIntegration();
      this.setupCLIIntegration();
   }

   // Initialize WebSocket server
   initialize(httpServer?: HTTPServer): void {
      if (this.io) {
         console.warn('WebSocket server already initialized');
         return;
      }

      this.httpServer = httpServer || new HTTPServer();

      this.io = new SocketIOServer(this.httpServer, {
         path: this.config.path,
         cors: this.config.cors,
         pingTimeout: this.config.pingTimeout,
         pingInterval: this.config.pingInterval,
         transports: ['websocket', 'polling'],
         allowEIO3: true,
      });

      this.setupEventHandlers();
      this.startHeartbeat();

      if (!httpServer) {
         this.httpServer.listen(this.config.port, () => {
            console.log(`WebSocket server listening on port ${this.config.port}`);
         });
      }

      this.emit('serverStarted', {
         port: this.config.port,
         path: this.config.path,
         timestamp: new Date().toISOString(),
      });
   }

   // Setup Socket.IO event handlers
   private setupEventHandlers(): void {
      if (!this.io) return;

      this.io.on('connection', (socket) => {
         const clientId = this.generateClientId();

         // Register client
         const client: ClientConnection = {
            id: clientId,
            socketId: socket.id,
            connected: true,
            connectedAt: new Date(),
            lastActivity: new Date(),
            rooms: new Set(),
            metadata: {
               userAgent: socket.handshake.headers['user-agent'],
               ip: socket.handshake.address,
               version: socket.handshake.query.version as string,
            },
         };

         this.clients.set(clientId, client);
         console.log(`Client connected: ${clientId} (${socket.id})`);

         // Send welcome message
         socket.emit('welcome', {
            clientId,
            serverTime: new Date().toISOString(),
            availableRooms: Array.from(this.rooms.keys()),
            connectedClients: this.clients.size,
         });

         // Join default rooms
         this.joinRoom(clientId, RoomType.SYSTEM);
         this.joinRoom(clientId, RoomType.FILES);

         // Handle room joining
         socket.on('join-room', (roomName: string) => {
            this.joinRoom(clientId, roomName);
            socket.join(roomName);
         });

         // Handle room leaving
         socket.on('leave-room', (roomName: string) => {
            this.leaveRoom(clientId, roomName);
            socket.leave(roomName);
         });

         // Handle CLI command requests
         socket.on('execute-cli', async (data: { command: string; args: string[] }) => {
            try {
               const result = await cliExecutor.executeCommand({
                  command: data.command,
                  args: data.args,
                  parseOutput: true,
                  captureProgress: false,
               });

               socket.emit('cli-result', {
                  success: true,
                  result,
                  timestamp: new Date().toISOString(),
               });

               // Broadcast to CLI room
               this.broadcast(RoomType.CLI, 'cli-executed', {
                  clientId,
                  command: data.command,
                  success: true,
                  timestamp: new Date().toISOString(),
               });
            } catch (error) {
               socket.emit('cli-result', {
                  success: false,
                  error: error.message,
                  timestamp: new Date().toISOString(),
               });
            }
         });

         // Handle task status requests
         socket.on('get-tasks', () => {
            this.handleTasksRequest(socket, clientId);
         });

         // Handle file watching requests
         socket.on('watch-files', (paths: string[]) => {
            this.handleFileWatchRequest(socket, clientId, paths);
         });

         // Handle ping/pong for connection health
         socket.on('ping', () => {
            this.updateClientActivity(clientId);
            socket.emit('pong', { timestamp: new Date().toISOString() });
         });

         // Handle client heartbeat
         socket.on('heartbeat', (data) => {
            this.updateClientActivity(clientId);
            socket.emit('heartbeat-ack', {
               clientId,
               serverTime: new Date().toISOString(),
               data,
            });
         });

         // Handle disconnection
         socket.on('disconnect', (reason) => {
            this.handleClientDisconnect(clientId, reason);
         });

         // Handle errors
         socket.on('error', (error) => {
            console.error(`Socket error for client ${clientId}:`, error);
            this.emit('clientError', { clientId, error: error.message });
         });

         this.emit('clientConnected', { clientId, timestamp: new Date().toISOString() });
      });
   }

   // Setup file watcher integration
   private setupFileWatcherIntegration(): void {
      this.fileWatcher.on('change', (event) => {
         this.broadcast(RoomType.FILES, 'file-changed', {
            filename: event.filename,
            filepath: event.filepath,
            type: event.type,
            timestamp: event.timestamp,
            stats: event.stats,
            error: event.error,
         });
      });

      this.fileWatcher.on('tasksChanged', (event) => {
         this.broadcast(RoomType.TASKS, 'tasks-updated', {
            filename: event.filename,
            content: event.content,
            timestamp: event.timestamp,
            error: event.error,
         });
      });

      this.fileWatcher.on('configChanged', (event) => {
         this.broadcast(RoomType.SYSTEM, 'config-updated', {
            filename: event.filename,
            content: event.content,
            timestamp: event.timestamp,
            error: event.error,
         });
      });
   }

   // Setup CLI executor integration
   private setupCLIIntegration(): void {
      cliExecutor.on('commandStart', (data) => {
         this.broadcast(RoomType.CLI, 'cli-command-started', {
            command: data.command,
            args: data.args,
            timestamp: new Date().toISOString(),
         });
      });

      cliExecutor.on('commandComplete', (result) => {
         this.broadcast(RoomType.CLI, 'cli-command-completed', {
            command: result.command,
            success: result.success,
            executionTime: result.executionTime,
            timestamp: result.timestamp,
            output: result.output.summary,
         });
      });

      cliExecutor.on('commandError', (data) => {
         this.broadcast(RoomType.CLI, 'cli-command-error', {
            command: data.result.command,
            error: data.error.message,
            timestamp: data.result.timestamp,
         });
      });
   }

   // Handle tasks request
   private async handleTasksRequest(socket: any, clientId: string): void {
      try {
         const result = await cliExecutor.executeCommand({
            command: 'list',
            args: ['--format=json'],
            parseOutput: true,
         });

         socket.emit('tasks-data', {
            success: true,
            tasks: result.output.parsed,
            timestamp: new Date().toISOString(),
         });

         this.updateClientActivity(clientId);
      } catch (error) {
         socket.emit('tasks-data', {
            success: false,
            error: error.message,
            timestamp: new Date().toISOString(),
         });
      }
   }

   // Handle file watch request
   private handleFileWatchRequest(socket: any, clientId: string, paths: string[]): void {
      // Add paths to file watcher if not already watching
      for (const path of paths) {
         this.fileWatcher.addPath(path);
      }

      // Join the files room for updates
      this.joinRoom(clientId, RoomType.FILES);

      socket.emit('file-watch-started', {
         watchedPaths: paths,
         status: this.fileWatcher.getStatus(),
         timestamp: new Date().toISOString(),
      });

      this.updateClientActivity(clientId);
   }

   // Join a room
   private joinRoom(clientId: string, roomName: string): void {
      const client = this.clients.get(clientId);
      if (!client) return;

      client.rooms.add(roomName);

      if (!this.rooms.has(roomName)) {
         this.rooms.set(roomName, new Set());
      }
      this.rooms.get(roomName)!.add(clientId);

      this.emit('clientJoinedRoom', { clientId, room: roomName });
   }

   // Leave a room
   private leaveRoom(clientId: string, roomName: string): void {
      const client = this.clients.get(clientId);
      if (!client) return;

      client.rooms.delete(roomName);

      const room = this.rooms.get(roomName);
      if (room) {
         room.delete(clientId);
         if (room.size === 0) {
            this.rooms.delete(roomName);
         }
      }

      this.emit('clientLeftRoom', { clientId, room: roomName });
   }

   // Broadcast message to room
   broadcast(roomName: string, event: string, data: any): void {
      if (!this.io) return;

      this.io.to(roomName).emit(event, {
         ...data,
         room: roomName,
         serverTimestamp: new Date().toISOString(),
      });
   }

   // Send message to specific client
   sendToClient(clientId: string, event: string, data: any): void {
      const client = this.clients.get(clientId);
      if (!client || !this.io) return;

      this.io.to(client.socketId).emit(event, {
         ...data,
         targetClient: clientId,
         serverTimestamp: new Date().toISOString(),
      });
   }

   // Handle client disconnect
   private handleClientDisconnect(clientId: string, reason: string): void {
      const client = this.clients.get(clientId);
      if (!client) return;

      // Remove from all rooms
      for (const roomName of client.rooms) {
         this.leaveRoom(clientId, roomName);
      }

      this.clients.delete(clientId);
      console.log(`Client disconnected: ${clientId} (reason: ${reason})`);

      this.emit('clientDisconnected', { clientId, reason, timestamp: new Date().toISOString() });
   }

   // Update client activity timestamp
   private updateClientActivity(clientId: string): void {
      const client = this.clients.get(clientId);
      if (client) {
         client.lastActivity = new Date();
      }
   }

   // Generate unique client ID
   private generateClientId(): string {
      return `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   // Start heartbeat monitoring
   private startHeartbeat(): void {
      this.heartbeatInterval = setInterval(() => {
         const now = new Date();
         const staleThreshold = 60000; // 1 minute

         for (const [clientId, client] of this.clients.entries()) {
            const timeSinceLastActivity = now.getTime() - client.lastActivity.getTime();

            if (timeSinceLastActivity > staleThreshold) {
               console.log(`Removing stale client: ${clientId}`);
               this.handleClientDisconnect(clientId, 'stale_connection');
            }
         }

         // Broadcast system status
         this.broadcast(RoomType.SYSTEM, 'system-heartbeat', {
            connectedClients: this.clients.size,
            activeRooms: this.rooms.size,
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            timestamp: new Date().toISOString(),
         });
      }, 30000); // Every 30 seconds
   }

   // Get server status
   getStatus() {
      return {
         running: !!this.io,
         connectedClients: this.clients.size,
         activeRooms: this.rooms.size,
         rooms: Array.from(this.rooms.keys()),
         config: this.config,
         uptime: process.uptime(),
         clients: Array.from(this.clients.values()).map((client) => ({
            id: client.id,
            connectedAt: client.connectedAt,
            lastActivity: client.lastActivity,
            rooms: Array.from(client.rooms),
            metadata: client.metadata,
         })),
      };
   }

   // Close server
   async close(): Promise<void> {
      if (this.heartbeatInterval) {
         clearInterval(this.heartbeatInterval);
         this.heartbeatInterval = null;
      }

      if (this.io) {
         await new Promise<void>((resolve) => {
            this.io!.close(() => {
               console.log('WebSocket server closed');
               resolve();
            });
         });
         this.io = null;
      }

      if (this.httpServer) {
         await new Promise<void>((resolve) => {
            this.httpServer!.close(() => {
               resolve();
            });
         });
         this.httpServer = null;
      }

      this.clients.clear();
      this.rooms.clear();

      this.emit('serverClosed', { timestamp: new Date().toISOString() });
   }

   // Get connected clients
   getConnectedClients(): ClientConnection[] {
      return Array.from(this.clients.values());
   }

   // Get room members
   getRoomMembers(roomName: string): string[] {
      const room = this.rooms.get(roomName);
      return room ? Array.from(room) : [];
   }

   // Force disconnect client
   disconnectClient(clientId: string, reason: string = 'admin_disconnect'): boolean {
      const client = this.clients.get(clientId);
      if (!client || !this.io) return false;

      const socket = this.io.sockets.sockets.get(client.socketId);
      if (socket) {
         socket.disconnect(true);
         this.handleClientDisconnect(clientId, reason);
         return true;
      }

      return false;
   }
}

// Singleton instance
let globalWebSocketServer: TaskMasterWebSocketServer | null = null;

export function getGlobalWebSocketServer(config?: WebSocketConfig): TaskMasterWebSocketServer {
   if (!globalWebSocketServer) {
      globalWebSocketServer = new TaskMasterWebSocketServer(config);
   }
   return globalWebSocketServer;
}

// RoomType is already exported above with the enum declaration
