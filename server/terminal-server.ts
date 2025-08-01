import { WebSocketServer } from 'ws';
import * as os from 'os';
import * as http from 'http';
import { spawn } from 'child_process';

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
   lastActiveAt: Date;
   usingPty: boolean;
   clientId?: string;
   isActive: boolean;
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

      // Extract client ID from query params if available (for session restoration)
      const url = new URL(request.url || '', `http://${request.headers.host}`);
      const existingSessionId = url.searchParams.get('sessionId');
      const clientId = url.searchParams.get('clientId');

      // Try to restore existing session or create new one
      let sessionId = existingSessionId;
      let existingSession = existingSessionId ? this.sessions.get(existingSessionId) : null;

      if (existingSession && existingSession.isActive) {
         console.log(`🔄 Attempting to restore session ${existingSessionId}`);
         // Update session activity
         existingSession.lastActiveAt = new Date();
         existingSession.clientId = clientId || existingSession.clientId;

         // Send restoration confirmation
         ws.send(
            JSON.stringify({
               type: 'session-restored',
               sessionId: existingSessionId,
               shell: 'bash', // You might want to store this in the session
               platform: os.platform(),
               cwd: process.cwd(),
               usingPty: existingSession.usingPty,
               ptySupport: pty !== null,
            })
         );

         this.attachToExistingSession(ws, existingSession);
         return;
      }

      // Generate new session ID if not restoring
      if (!sessionId) {
         sessionId = Math.random().toString(36).substring(2, 15);
      }

      // Determine shell based on platform
      const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

      try {
         let ptyProcess: any;
         let usingPty = false;

         if (pty) {
            // Use node-pty if available
            try {
               console.log(`Spawning PTY with shell: ${shell}, cwd: ${process.cwd()}`);
               ptyProcess = pty.spawn(shell, [], {
                  name: 'xterm-color',
                  cols: 80,
                  rows: 30,
                  cwd: process.env.PWD || process.cwd(),
                  env: {
                     ...process.env,
                     TERM: 'xterm-color',
                     PS1: '$ ', // Simple prompt
                  },
               });
               usingPty = true;
               console.log(`Created pty terminal session ${sessionId} with ${shell}`);

               // Log PTY events for debugging
               ptyProcess.onSpawn?.(() => {
                  console.log(`PTY process spawned for session ${sessionId}`);
               });

               // Send initial command to trigger prompt
               setTimeout(() => {
                  console.log(`Sending initial newline to PTY session ${sessionId}`);
                  ptyProcess.write('\r');
               }, 100);
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
            lastActiveAt: new Date(),
            usingPty,
            clientId,
            isActive: true,
         };
         this.sessions.set(sessionId, session);

         // Handle terminal data output
         if (usingPty) {
            ptyProcess.onData((data: string) => {
               console.log(`PTY output for session ${sessionId}:`, JSON.stringify(data));
               if (ws.readyState === ws.OPEN) {
                  console.log(`Sending PTY data to WebSocket:`, JSON.stringify(data));
                  ws.send(
                     JSON.stringify({
                        type: 'data',
                        data: data,
                     })
                  );
               } else {
                  console.warn(
                     `WebSocket not open, cannot send PTY data. State: ${ws.readyState}. Stopping terminal process.`
                  );
                  // Stop the terminal process if WebSocket is closed
                  this.cleanupSession(sessionId);
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
               const dataStr = data.toString();
               console.log(
                  `Child process stdout for session ${sessionId}:`,
                  JSON.stringify(dataStr)
               );
               if (ws.readyState === ws.OPEN) {
                  console.log(`Sending stdout data to WebSocket:`, JSON.stringify(dataStr));
                  ws.send(
                     JSON.stringify({
                        type: 'data',
                        data: dataStr,
                     })
                  );
               } else {
                  console.warn(
                     `WebSocket not open, cannot send stdout data. State: ${ws.readyState}. Stopping terminal process.`
                  );
                  // Stop the terminal process if WebSocket is closed
                  this.cleanupSession(sessionId);
               }
            });

            ptyProcess.stderr?.on('data', (data: Buffer) => {
               const dataStr = data.toString();
               console.log(
                  `Child process stderr for session ${sessionId}:`,
                  JSON.stringify(dataStr)
               );
               if (ws.readyState === ws.OPEN) {
                  console.log(`Sending stderr data to WebSocket:`, JSON.stringify(dataStr));
                  ws.send(
                     JSON.stringify({
                        type: 'data',
                        data: dataStr,
                     })
                  );
               } else {
                  console.warn(
                     `WebSocket not open, cannot send stderr data. State: ${ws.readyState}. Stopping terminal process.`
                  );
                  // Stop the terminal process if WebSocket is closed
                  this.cleanupSession(sessionId);
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
                     console.log(
                        `Writing input to PTY (${usingPty ? 'pty' : 'child_process'}):`,
                        JSON.stringify(data)
                     );
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
                        if (cols > 0 && rows > 0 && cols < 1000 && rows < 1000) {
                           console.log(`Resizing PTY to ${cols}x${rows}`);
                           ptyProcess.resize(cols, rows);
                        } else {
                           console.warn('Invalid resize dimensions:', { cols, rows });
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

            // Mark session as inactive for potential restoration
            const session = this.sessions.get(sessionId);
            if (session) {
               session.isActive = false;
               session.lastActiveAt = new Date();
               console.log(`Session ${sessionId} marked inactive for potential restoration`);
            }

            // Clean up session after a shorter delay to prevent resource leaks
            setTimeout(() => {
               this.cleanupStaleSession(sessionId);
            }, 5000); // Reduced to 5 seconds to prevent accumulation of orphaned processes
         });

         // Handle WebSocket errors
         ws.on('error', (error: Error) => {
            console.error('WebSocket error:', error);

            // Mark as inactive on error
            const session = this.sessions.get(sessionId);
            if (session) {
               session.isActive = false;
            }
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

         // Send a test welcome message to verify the data flow works
         setTimeout(() => {
            console.log(`Sending welcome message to session ${sessionId}`);
            if (ws.readyState === ws.OPEN) {
               ws.send(
                  JSON.stringify({
                     type: 'data',
                     data: `Welcome to terminal session ${sessionId}!\r\n$ `,
                  })
               );
            }
         }, 500);
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

   private cleanupStaleSession(sessionId: string) {
      const session = this.sessions.get(sessionId);
      if (session && !session.isActive) {
         const timeSinceLastActive = new Date().getTime() - session.lastActiveAt.getTime();
         const STALE_THRESHOLD = 30000; // 30 seconds

         if (timeSinceLastActive > STALE_THRESHOLD) {
            console.log(`🧹 Cleaning up stale session ${sessionId}`);
            this.cleanupSession(sessionId);
         }
      }
   }

   private attachToExistingSession(ws: any, session: TerminalSession) {
      const sessionId = session.sessionId;

      // Handle terminal data output for restored session
      if (session.usingPty) {
         session.ptyProcess.onData((data: string) => {
            if (ws.readyState === ws.OPEN) {
               ws.send(JSON.stringify({ type: 'data', data }));
            }
         });
      } else {
         // For child_process, we need to re-attach listeners
         session.ptyProcess.stdout?.on('data', (data: Buffer) => {
            if (ws.readyState === ws.OPEN) {
               ws.send(JSON.stringify({ type: 'data', data: data.toString() }));
            }
         });

         session.ptyProcess.stderr?.on('data', (data: Buffer) => {
            if (ws.readyState === ws.OPEN) {
               ws.send(JSON.stringify({ type: 'data', data: data.toString() }));
            }
         });
      }

      // Handle WebSocket messages for restored session
      ws.on('message', (message: Buffer) => {
         try {
            const { type, data } = JSON.parse(message.toString());

            // Update activity timestamp
            session.lastActiveAt = new Date();

            switch (type) {
               case 'input':
                  if (session.usingPty) {
                     session.ptyProcess.write(data);
                  } else {
                     session.ptyProcess.stdin?.write(data);
                  }
                  break;

               case 'resize':
                  if (session.usingPty) {
                     const { cols, rows } = data;
                     if (cols && rows) {
                        session.ptyProcess.resize(cols, rows);
                     }
                  }
                  break;

               default:
                  console.warn('Unknown message type:', type);
            }
         } catch (error) {
            console.error('Error processing WebSocket message for restored session:', error);
         }
      });

      // Handle close for restored session
      ws.on('close', () => {
         console.log(`Restored terminal session ${sessionId} disconnected`);
         session.isActive = false;
         session.lastActiveAt = new Date();

         setTimeout(() => {
            this.cleanupStaleSession(sessionId);
         }, 5000); // Reduced to 5 seconds
      });

      ws.on('error', (error: Error) => {
         console.error('WebSocket error in restored session:', error);
         session.isActive = false;
      });
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
