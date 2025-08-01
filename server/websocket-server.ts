import { WebSocketServer } from 'ws';
import * as os from 'os';
import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
import { watch, FSWatcher } from 'chokidar';
import { EventEmitter } from 'events';

// Try to import node-pty with fallback
let pty: typeof import('node-pty') | null = null;
try {
   pty = require('node-pty');
   console.log('node-pty loaded successfully');
} catch (error) {
   console.warn(
      'node-pty not available, falling back to child_process:',
      error instanceof Error ? error.message : 'Unknown error'
   );
}

// Types
interface WebSocketServerConfig {
   port: number;
   maxSessions: number;
   stabilityThreshold: number;
   pollInterval: number;
}

interface BaseConnection {
   id: string;
   type: 'terminal' | 'sync';
   ws: any;
   clientId?: string;
   createdAt: Date;
   lastActiveAt: Date;
   isActive: boolean;
}

interface TerminalSession extends BaseConnection {
   type: 'terminal';
   ptyProcess: any;
   sessionId: string;
   usingPty: boolean;
   cleanupTimeoutId?: NodeJS.Timeout;
   dataListeners?: Array<(...args: any[]) => void>;
}

interface SyncConnection extends BaseConnection {
   type: 'sync';
}

interface SyncNotification {
   type: 'taskmaster-sync' | 'sync-connected';
   event?: 'file-changed' | 'tasks-updated';
   file?: string;
   timestamp: string;
   clientId?: string;
}

class ModernWebSocketServer extends EventEmitter {
   private wss: WebSocketServer | null = null;
   private httpServer: http.Server | null = null;
   private fileWatcher: FSWatcher | null = null;
   private config: WebSocketServerConfig;
   private startTime: Date | null = null;

   // Connection stores
   private terminalSessions = new Map<string, TerminalSession>();
   private syncConnections = new Map<string, SyncConnection>();

   // Cleanup intervals
   private cleanupIntervalId?: NodeJS.Timeout;

   constructor(config?: Partial<WebSocketServerConfig>) {
      super();

      this.config = {
         port: 3002,
         maxSessions: 20,
         stabilityThreshold: 200,
         pollInterval: 100,
         ...config,
      };

      this.setMaxListeners(50);
   }

   async start(): Promise<void> {
      if (this.isRunning()) {
         console.warn('Server is already running');
         return;
      }

      try {
         console.log(`🚀 Starting WebSocket server on port ${this.config.port}`);

         // Create HTTP server
         this.httpServer = http.createServer();

         // Create WebSocket server
         this.wss = new WebSocketServer({
            server: this.httpServer,
            perMessageDeflate: false,
         });

         this.setupWebSocketHandlers();

         // Start HTTP server with port conflict handling
         await new Promise<void>((resolve, reject) => {
            // Set up error handler before attempting to listen
            this.httpServer!.on('error', (error: any) => {
               if (error.code === 'EADDRINUSE') {
                  console.warn(
                     `⚠️ Port ${this.config.port} is already in use. Server might already be running.`
                  );
                  // Mark as running to avoid future startup attempts
                  this.startTime = new Date();
                  resolve();
               } else {
                  reject(error);
               }
            });

            this.httpServer!.listen(this.config.port, () => {
               this.startTime = new Date();
               console.log(`✅ WebSocket server started on port ${this.config.port}`);
               resolve();
            });
         });

         // Only start file watcher and cleanup if server actually started
         if (this.httpServer?.listening) {
            // Start file watcher
            await this.startFileWatcher();

            // Start cleanup interval
            this.cleanupIntervalId = setInterval(() => {
               this.cleanupStaleSessions();
            }, 60000);

            this.logEndpoints();
         }
      } catch (error) {
         console.error('Failed to start WebSocket server:', error);
         await this.stop();
         throw error;
      }
   }

   async stop(): Promise<void> {
      if (!this.isRunning()) {
         return;
      }

      console.log('🛑 Stopping WebSocket server...');

      try {
         // Stop cleanup interval
         if (this.cleanupIntervalId) {
            clearInterval(this.cleanupIntervalId);
            this.cleanupIntervalId = undefined;
         }

         // Stop file watcher
         if (this.fileWatcher) {
            this.fileWatcher.close();
            this.fileWatcher = null;
            console.log('📁 File watcher stopped');
         }

         // Cleanup all sessions
         for (const session of this.terminalSessions.values()) {
            await this.cleanupTerminalSession(session);
         }
         this.terminalSessions.clear();
         this.syncConnections.clear();

         // Close WebSocket server
         if (this.wss) {
            await new Promise<void>((resolve) => {
               this.wss!.close(() => {
                  this.wss = null;
                  resolve();
               });
            });
         }

         // Close HTTP server
         if (this.httpServer) {
            await new Promise<void>((resolve) => {
               this.httpServer!.close(() => {
                  this.httpServer = null;
                  resolve();
               });
            });
         }

         this.startTime = null;
         console.log('✅ WebSocket server stopped successfully');
      } catch (error) {
         console.error('Error stopping WebSocket server:', error);
         throw error;
      }
   }

   isRunning(): boolean {
      return this.wss !== null && this.httpServer !== null;
   }

   getStatus() {
      return {
         isRunning: this.isRunning(),
         port: this.config.port,
         connections: {
            total: this.terminalSessions.size + this.syncConnections.size,
            terminal: this.terminalSessions.size,
            sync: this.syncConnections.size,
         },
         fileWatcher: {
            active: this.fileWatcher !== null,
            watchedFiles: this.getWatchedFiles(),
         },
         uptime: this.startTime ? Date.now() - this.startTime.getTime() : 0,
      };
   }

   private setupWebSocketHandlers(): void {
      if (!this.wss) return;

      this.wss.on('connection', async (ws, request) => {
         try {
            const url = new URL(request.url || '', `http://${request.headers.host}`);
            const connectionType = url.searchParams.get('type') || 'terminal';
            const clientId = url.searchParams.get('clientId');

            console.log(`🔗 New ${connectionType} connection`);

            if (connectionType === 'sync') {
               await this.handleSyncConnection(ws, clientId);
            } else {
               await this.handleTerminalConnection(ws, request);
            }
         } catch (error) {
            console.error('Error handling connection:', error);
            ws.close();
         }
      });

      this.wss.on('error', (error: any) => {
         // Don't log port conflict errors as they're handled elsewhere
         if (error.code !== 'EADDRINUSE') {
            console.error('WebSocket server error:', error);
         }
      });
   }

   private async handleSyncConnection(ws: any, clientId?: string | null): Promise<void> {
      const connection: SyncConnection = {
         id: `sync-${Date.now()}-${Math.random().toString(36).substring(7)}`,
         type: 'sync',
         ws,
         clientId: clientId || undefined,
         createdAt: new Date(),
         lastActiveAt: new Date(),
         isActive: true,
      };

      this.syncConnections.set(connection.id, connection);

      // Send connection confirmation
      ws.send(
         JSON.stringify({
            type: 'sync-connected',
            clientId: connection.clientId,
            timestamp: new Date().toISOString(),
         })
      );

      // Handle disconnection
      ws.on('close', () => {
         console.log(`🔌 Sync client disconnected: ${connection.clientId || connection.id}`);
         this.syncConnections.delete(connection.id);
      });

      ws.on('error', (error: Error) => {
         console.error('Sync WebSocket error:', error);
         this.syncConnections.delete(connection.id);
      });

      console.log(`✅ Sync client connected: ${connection.clientId || connection.id}`);
   }

   private async handleTerminalConnection(ws: any, request: http.IncomingMessage): Promise<void> {
      const url = new URL(request.url || '', `http://${request.headers.host}`);
      const existingSessionId = url.searchParams.get('sessionId');
      const clientId = url.searchParams.get('clientId');

      // Try to restore existing session
      if (existingSessionId && this.terminalSessions.has(existingSessionId)) {
         const session = this.terminalSessions.get(existingSessionId)!;
         if (session.isActive) {
            await this.restoreTerminalSession(ws, session, clientId);
            return;
         }
      }

      // Check session limit
      if (this.terminalSessions.size >= this.config.maxSessions) {
         console.warn('Maximum session limit reached');

         ws.send(
            JSON.stringify({
               type: 'error',
               message: 'Maximum terminal sessions reached. Please close some terminals.',
               timestamp: new Date().toISOString(),
            })
         );

         ws.close();
         return;
      }

      await this.createTerminalSession(ws, clientId);
   }

   private async createTerminalSession(ws: any, clientId?: string | null): Promise<void> {
      const sessionId = `terminal-${Date.now()}-${Math.random().toString(36).substring(7)}`;
      const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

      let ptyProcess: any;
      let usingPty = false;

      // Try to create PTY process
      if (pty) {
         try {
            ptyProcess = pty.spawn(shell, [], {
               name: 'xterm-color',
               cols: 80,
               rows: 30,
               cwd: process.env.PWD || process.cwd(),
               env: {
                  ...process.env,
                  TERM: 'xterm-color',
                  PS1: '$ ',
               },
            });
            usingPty = true;
            console.log(`🖥️  Created PTY terminal session: ${sessionId}`);
         } catch (error) {
            console.warn('Failed to create PTY, falling back to child_process:', error);
            pty = null;
         }
      }

      // Fallback to child_process
      if (!pty) {
         ptyProcess = spawn(shell, [], {
            cwd: process.cwd(),
            env: process.env,
            stdio: ['pipe', 'pipe', 'pipe'],
         });
         usingPty = false;
         console.log(`🖥️  Created child_process terminal session: ${sessionId}`);
      }

      const session: TerminalSession = {
         id: sessionId,
         type: 'terminal',
         ws,
         clientId: clientId || undefined,
         createdAt: new Date(),
         lastActiveAt: new Date(),
         isActive: true,
         ptyProcess,
         sessionId,
         usingPty,
         dataListeners: [],
      };

      this.terminalSessions.set(sessionId, session);
      this.setupTerminalHandlers(session);

      // Send connection confirmation
      ws.send(
         JSON.stringify({
            type: 'connected',
            sessionId,
            shell,
            platform: os.platform(),
            cwd: process.cwd(),
            usingPty,
            ptySupport: pty !== null,
            timestamp: new Date().toISOString(),
         })
      );

      // Send welcome message
      setTimeout(() => {
         ws.send(
            JSON.stringify({
               type: 'data',
               data: `Welcome to terminal session ${sessionId}!\r\n$ `,
               timestamp: new Date().toISOString(),
            })
         );
      }, 500);
   }

   private async restoreTerminalSession(
      ws: any,
      session: TerminalSession,
      clientId?: string | null
   ): Promise<void> {
      console.log(`🔄 Restoring terminal session: ${session.sessionId}`);

      session.ws = ws;
      session.lastActiveAt = new Date();
      session.clientId = clientId || session.clientId;
      session.isActive = true;

      if (session.cleanupTimeoutId) {
         clearTimeout(session.cleanupTimeoutId);
         session.cleanupTimeoutId = undefined;
      }

      this.setupTerminalWebSocketHandlers(ws, session);

      ws.send(
         JSON.stringify({
            type: 'session-restored',
            sessionId: session.sessionId,
            shell: 'bash',
            platform: os.platform(),
            cwd: process.cwd(),
            usingPty: session.usingPty,
            ptySupport: pty !== null,
            timestamp: new Date().toISOString(),
         })
      );
   }

   private setupTerminalHandlers(session: TerminalSession): void {
      if (session.usingPty) {
         session.ptyProcess.onData((data: string) => {
            if (session.ws.readyState === session.ws.OPEN) {
               session.ws.send(
                  JSON.stringify({
                     type: 'data',
                     data,
                     timestamp: new Date().toISOString(),
                  })
               );
            }
         });

         session.ptyProcess.onExit((exitCode: any) => {
            console.log(
               `Terminal session ${session.sessionId} exited with code:`,
               exitCode.exitCode
            );
            if (session.ws.readyState === session.ws.OPEN) {
               session.ws.send(
                  JSON.stringify({
                     type: 'exit',
                     exitCode: exitCode.exitCode,
                     timestamp: new Date().toISOString(),
                  })
               );
            }
            this.terminalSessions.delete(session.sessionId);
         });
      } else {
         // Handle child_process
         const stdoutListener = (data: Buffer) => {
            if (session.ws.readyState === session.ws.OPEN) {
               session.ws.send(
                  JSON.stringify({
                     type: 'data',
                     data: data.toString(),
                     timestamp: new Date().toISOString(),
                  })
               );
            }
         };

         const stderrListener = (data: Buffer) => {
            if (session.ws.readyState === session.ws.OPEN) {
               session.ws.send(
                  JSON.stringify({
                     type: 'data',
                     data: data.toString(),
                     timestamp: new Date().toISOString(),
                  })
               );
            }
         };

         session.ptyProcess.stdout?.on('data', stdoutListener);
         session.ptyProcess.stderr?.on('data', stderrListener);
         session.dataListeners = [stdoutListener, stderrListener];

         session.ptyProcess.on('exit', (exitCode: number | null) => {
            console.log(`Terminal session ${session.sessionId} exited with code:`, exitCode);
            if (session.ws.readyState === session.ws.OPEN) {
               session.ws.send(
                  JSON.stringify({
                     type: 'exit',
                     exitCode: exitCode || 0,
                     timestamp: new Date().toISOString(),
                  })
               );
            }
            this.terminalSessions.delete(session.sessionId);
         });
      }

      this.setupTerminalWebSocketHandlers(session.ws, session);
   }

   private setupTerminalWebSocketHandlers(ws: any, session: TerminalSession): void {
      ws.on('message', async (data: Buffer) => {
         try {
            session.lastActiveAt = new Date();

            const message = JSON.parse(data.toString());

            switch (message.type) {
               case 'input':
                  if (session.usingPty) {
                     session.ptyProcess.write(message.data);
                  } else {
                     session.ptyProcess.stdin?.write(message.data);
                  }
                  break;

               case 'resize':
                  if (session.usingPty) {
                     const { cols, rows } = message.data;
                     if (cols > 0 && rows > 0 && cols < 1000 && rows < 1000) {
                        session.ptyProcess.resize(cols, rows);
                     }
                  }
                  break;
            }
         } catch (error) {
            console.error('Error handling terminal message:', error);
         }
      });

      ws.on('close', () => {
         console.log(`🔌 Terminal session ${session.sessionId} disconnected`);
         session.isActive = false;
         session.lastActiveAt = new Date();

         session.cleanupTimeoutId = setTimeout(() => {
            this.cleanupTerminalSession(session);
         }, 30000);
      });

      ws.on('error', (error: Error) => {
         console.error('Terminal WebSocket error:', error);
         session.isActive = false;
      });
   }

   private async startFileWatcher(): Promise<void> {
      try {
         const watchPaths = [
            path.join(process.cwd(), '.taskmaster', 'tasks', 'tasks.json'),
            path.join(process.cwd(), 'taskmanager.json'),
         ];

         const existingPaths = watchPaths.filter((filePath) => {
            try {
               return fs.existsSync(filePath);
            } catch {
               return false;
            }
         });

         if (existingPaths.length === 0) {
            console.log('📁 No TaskMaster files found to watch');
            return;
         }

         console.log(
            '📁 Starting file watcher for:',
            existingPaths.map((p) => path.basename(p))
         );

         this.fileWatcher = watch(existingPaths, {
            persistent: true,
            ignoreInitial: true,
            awaitWriteFinish: {
               stabilityThreshold: this.config.stabilityThreshold,
               pollInterval: this.config.pollInterval,
            },
         });

         this.fileWatcher.on('change', (filePath: string) => {
            console.log(`📝 TaskMaster file changed: ${path.basename(filePath)}`);
            this.broadcastSyncNotification({
               type: 'taskmaster-sync',
               event: 'file-changed',
               file: path.basename(filePath),
               timestamp: new Date().toISOString(),
            });
         });

         this.fileWatcher.on('add', (filePath: string) => {
            console.log(`📝 TaskMaster file added: ${path.basename(filePath)}`);
            this.broadcastSyncNotification({
               type: 'taskmaster-sync',
               event: 'file-changed',
               file: path.basename(filePath),
               timestamp: new Date().toISOString(),
            });
         });

         this.fileWatcher.on('error', (error: Error) => {
            console.error('📁 File watcher error:', error);
         });

         console.log(`📁 File watcher initialized for ${existingPaths.length} files`);
      } catch (error) {
         console.error('Failed to start file watcher:', error);
      }
   }

   private broadcastSyncNotification(notification: SyncNotification): void {
      let sentCount = 0;
      const deadConnections: string[] = [];

      for (const [connectionId, connection] of this.syncConnections.entries()) {
         if (!connection.isActive) {
            deadConnections.push(connectionId);
            continue;
         }

         if (connection.ws.readyState === connection.ws.OPEN) {
            try {
               connection.ws.send(JSON.stringify(notification));
               sentCount++;
            } catch (error) {
               console.error('Failed to send sync notification:', error);
               deadConnections.push(connectionId);
            }
         } else {
            deadConnections.push(connectionId);
         }
      }

      // Clean up dead connections
      deadConnections.forEach((connectionId) => {
         this.syncConnections.delete(connectionId);
      });

      if (sentCount > 0) {
         console.log(
            `🔄 Broadcast sync notification to ${sentCount} clients: ${notification.event}`
         );
      }
   }

   private async cleanupTerminalSession(session: TerminalSession): Promise<void> {
      try {
         if (session.dataListeners && !session.usingPty) {
            session.dataListeners.forEach((listener) => {
               session.ptyProcess.stdout?.removeListener('data', listener);
               session.ptyProcess.stderr?.removeListener('data', listener);
            });
         }

         if (session.usingPty) {
            session.ptyProcess.kill();
         } else {
            session.ptyProcess.kill('SIGTERM');
            setTimeout(() => {
               if (!session.ptyProcess.killed) {
                  session.ptyProcess.kill('SIGKILL');
               }
            }, 1000);
         }

         this.terminalSessions.delete(session.sessionId);
      } catch (error) {
         console.error('Error cleaning up terminal session:', error);
      }
   }

   private cleanupStaleSessions(): void {
      const now = new Date().getTime();
      const staleThreshold = 300000; // 5 minutes

      let cleanedCount = 0;

      for (const [sessionId, session] of this.terminalSessions.entries()) {
         if (!session.isActive) {
            const timeSinceLastActive = now - session.lastActiveAt.getTime();
            if (timeSinceLastActive > staleThreshold) {
               console.log(`🧹 Cleaning up stale session: ${sessionId}`);
               this.cleanupTerminalSession(session);
               cleanedCount++;
            }
         }
      }

      if (cleanedCount > 0) {
         console.log(`🧹 Cleaned up ${cleanedCount} stale sessions`);
      }
   }

   private getWatchedFiles(): string[] {
      if (!this.fileWatcher) return [];

      const watched = this.fileWatcher.getWatched();
      const files: string[] = [];

      Object.keys(watched).forEach((dir) => {
         watched[dir].forEach((file) => {
            files.push(path.basename(file));
         });
      });

      return files;
   }

   private logEndpoints(): void {
      console.log('📡 WebSocket endpoints available:');
      console.log(`   Terminal: ws://localhost:${this.config.port}?type=terminal`);
      console.log(`   Sync:     ws://localhost:${this.config.port}?type=sync`);

      const watchedFiles = this.getWatchedFiles();
      if (watchedFiles.length > 0) {
         console.log('📁 File watcher monitoring:', watchedFiles);
      }
   }

   // Setup process handlers
   private setupProcessHandlers(): void {
      const cleanup = async (signal: string) => {
         console.log(`Received ${signal}, shutting down gracefully`);
         try {
            await this.stop();
            process.exit(0);
         } catch (error) {
            console.error('Error during shutdown:', error);
            process.exit(1);
         }
      };

      process.on('SIGINT', () => cleanup('SIGINT'));
      process.on('SIGTERM', () => cleanup('SIGTERM'));
      process.on('exit', () => console.log('Process exiting'));
   }
}

// Global instance management
let serverInstance: ModernWebSocketServer | null = null;

export function getWebSocketServer(): ModernWebSocketServer {
   if (!serverInstance) {
      serverInstance = new ModernWebSocketServer();
      serverInstance['setupProcessHandlers']();
   }
   return serverInstance;
}

export async function startWebSocketServer(): Promise<ModernWebSocketServer> {
   const server = getWebSocketServer();
   await server.start();
   return server;
}

export async function stopWebSocketServer(): Promise<void> {
   if (serverInstance) {
      await serverInstance.stop();
      serverInstance = null;
   }
}

// Backward compatibility
export const TerminalWebSocketServer = ModernWebSocketServer;
export const getTerminalServer = getWebSocketServer;
export const startTerminalServer = startWebSocketServer;

export default ModernWebSocketServer;
