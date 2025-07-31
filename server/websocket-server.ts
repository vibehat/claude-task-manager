import { WebSocketServer } from 'ws';
import * as os from 'os';
import * as http from 'http';
import { spawn, ChildProcess } from 'child_process';

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

interface TerminalSession {
   ptyProcess: any; // Can be either pty.IPty or ChildProcess
   sessionId: string;
   createdAt: Date;
   usingPty: boolean;
}

class TerminalWebSocketServer {
   private wss: WebSocketServer | null = null;
   private server: http.Server | null = null;
   private sessions = new Map<string, TerminalSession>();
   private port: number;

   constructor(port: number = 3001) {
      this.port = port;
   }

   start(): Promise<void> {
      return new Promise((resolve, reject) => {
         try {
            // Create HTTP server
            this.server = http.createServer();

            // Create WebSocket server
            this.wss = new WebSocketServer({
               server: this.server,
               perMessageDeflate: false,
            });

            this.wss.on('connection', (ws, request) => {
               this.handleConnection(ws, request);
            });

            this.wss.on('error', (error) => {
               console.error('WebSocket server error:', error);
            });

            this.server.listen(this.port, () => {
               console.log(`Terminal WebSocket server listening on port ${this.port}`);
               resolve();
            });

            this.server.on('error', (error) => {
               console.error('HTTP server error:', error);
               reject(error);
            });
         } catch (error) {
            reject(error);
         }
      });
   }

   private handleConnection(ws: any, request: http.IncomingMessage) {
      console.log('New terminal connection established');

      // Generate unique session ID
      const sessionId = Math.random().toString(36).substring(2, 15);

      // Determine shell based on platform
      const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

      try {
         let ptyProcess: any;
         let usingPty = false;

         if (pty) {
            // Use node-pty if available
            try {
               ptyProcess = pty.spawn(shell, [], {
                  name: 'xterm-color',
                  cols: 80,
                  rows: 30,
                  cwd: process.env.PWD || process.cwd(),
                  env: process.env,
               });
               usingPty = true;
               console.log(`Created pty terminal session ${sessionId} with ${shell}`);
            } catch (ptyError) {
               console.warn('Failed to create pty, falling back to child_process:', ptyError);
               pty = null; // Disable pty for future sessions
            }
         }

         if (!pty) {
            // Fallback to child_process
            ptyProcess = spawn(shell, [], {
               cwd: process.cwd(),
               env: process.env,
               stdio: ['pipe', 'pipe', 'pipe'],
            });
            usingPty = false;
            console.log(`Created child_process terminal session ${sessionId} with ${shell}`);
         }

         // Store session
         const session: TerminalSession = {
            ptyProcess,
            sessionId,
            createdAt: new Date(),
            usingPty,
         };
         this.sessions.set(sessionId, session);

         // Handle terminal data output
         if (usingPty) {
            ptyProcess.onData((data: string) => {
               if (ws.readyState === ws.OPEN) {
                  ws.send(
                     JSON.stringify({
                        type: 'data',
                        data: data,
                     })
                  );
               }
            });

            // Handle terminal exit
            ptyProcess.onExit((exitCode: any) => {
               console.log(`Terminal session ${sessionId} exited with code:`, exitCode);
               if (ws.readyState === ws.OPEN) {
                  ws.send(
                     JSON.stringify({
                        type: 'exit',
                        exitCode: exitCode.exitCode,
                     })
                  );
               }
               this.sessions.delete(sessionId);
            });
         } else {
            // Handle child_process stdout/stderr
            ptyProcess.stdout?.on('data', (data: Buffer) => {
               if (ws.readyState === ws.OPEN) {
                  ws.send(
                     JSON.stringify({
                        type: 'data',
                        data: data.toString(),
                     })
                  );
               }
            });

            ptyProcess.stderr?.on('data', (data: Buffer) => {
               if (ws.readyState === ws.OPEN) {
                  ws.send(
                     JSON.stringify({
                        type: 'data',
                        data: data.toString(),
                     })
                  );
               }
            });

            ptyProcess.on('exit', (exitCode: number | null) => {
               console.log(`Terminal session ${sessionId} exited with code:`, exitCode);
               if (ws.readyState === ws.OPEN) {
                  ws.send(
                     JSON.stringify({
                        type: 'exit',
                        exitCode: exitCode || 0,
                     })
                  );
               }
               this.sessions.delete(sessionId);
            });
         }

         // Handle WebSocket messages
         ws.on('message', (message: Buffer) => {
            try {
               const { type, data } = JSON.parse(message.toString());

               switch (type) {
                  case 'input':
                     // Write input to terminal
                     if (usingPty) {
                        ptyProcess.write(data);
                     } else {
                        ptyProcess.stdin?.write(data);
                     }
                     break;

                  case 'resize':
                     // Resize terminal (only works with pty)
                     if (usingPty) {
                        const { cols, rows } = data;
                        if (cols && rows) {
                           ptyProcess.resize(cols, rows);
                        }
                     } else {
                        console.warn('Terminal resize not supported with child_process fallback');
                     }
                     break;

                  default:
                     console.warn('Unknown message type:', type);
               }
            } catch (error) {
               console.error('Error processing WebSocket message:', error);
            }
         });

         // Handle WebSocket close
         ws.on('close', () => {
            console.log(`Terminal session ${sessionId} disconnected`);
            this.cleanupSession(sessionId);
         });

         // Handle WebSocket errors
         ws.on('error', (error: Error) => {
            console.error('WebSocket error:', error);
            this.cleanupSession(sessionId);
         });

         // Send initial connection confirmation
         ws.send(
            JSON.stringify({
               type: 'connected',
               sessionId,
               shell,
               platform: os.platform(),
               cwd: process.cwd(),
               usingPty,
               ptySupport: pty !== null,
            })
         );
      } catch (error) {
         console.error('Error creating terminal session:', error);
         ws.send(
            JSON.stringify({
               type: 'error',
               message: 'Failed to create terminal session',
            })
         );
         ws.close();
      }
   }

   private cleanupSession(sessionId: string) {
      const session = this.sessions.get(sessionId);
      if (session) {
         try {
            if (session.usingPty) {
               session.ptyProcess.kill();
            } else {
               session.ptyProcess.kill('SIGTERM');
            }
         } catch (error) {
            console.error('Error killing process:', error);
         }
         this.sessions.delete(sessionId);
      }
   }

   getStatus() {
      return {
         active: this.wss !== null,
         port: this.port,
         activeSessions: this.sessions.size,
         sessions: Array.from(this.sessions.values()).map((session) => ({
            sessionId: session.sessionId,
            createdAt: session.createdAt,
         })),
      };
   }

   stop(): Promise<void> {
      return new Promise((resolve) => {
         // Cleanup all sessions
         this.sessions.forEach((session, sessionId) => {
            this.cleanupSession(sessionId);
         });

         if (this.wss) {
            this.wss.close(() => {
               console.log('WebSocket server closed');
               this.wss = null;

               if (this.server) {
                  this.server.close(() => {
                     console.log('HTTP server closed');
                     this.server = null;
                     resolve();
                  });
               } else {
                  resolve();
               }
            });
         } else {
            resolve();
         }
      });
   }
}

// Global instance
let terminalServer: TerminalWebSocketServer | null = null;

export function getTerminalServer(): TerminalWebSocketServer {
   if (!terminalServer) {
      terminalServer = new TerminalWebSocketServer();
   }
   return terminalServer;
}

export async function startTerminalServer(): Promise<TerminalWebSocketServer> {
   const server = getTerminalServer();
   await server.start();
   return server;
}

// Cleanup on process exit
process.on('exit', () => {
   if (terminalServer) {
      terminalServer.stop();
   }
});

process.on('SIGINT', () => {
   console.log('Received SIGINT, shutting down terminal server...');
   if (terminalServer) {
      terminalServer.stop().then(() => {
         process.exit(0);
      });
   } else {
      process.exit(0);
   }
});

export default TerminalWebSocketServer;
