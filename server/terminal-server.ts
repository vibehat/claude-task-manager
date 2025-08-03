import { WebSocketServer, WebSocket } from 'ws';
import * as os from 'os';
import * as http from 'http';
import * as fs from 'fs';
import { spawn } from 'child_process';

// Try to import node-pty with fallback
let pty: any = null;
try {
   pty = require('node-pty');
   console.log('✅ node-pty loaded');
} catch {
   console.log('⚠️  Using child_process fallback');
}

interface Session {
   id: string;
   process: any;
   clients: Set<WebSocket>;
   createdAt: Date;
   lastActiveAt: Date;
   usingPty: boolean;
   shell: string;
}

class TerminalServer {
   private wss: WebSocketServer | null = null;
   private server: http.Server | null = null;
   private sessions = new Map<string, Session>();
   private cleanupTimer: NodeJS.Timeout | null = null;
   private port: number;

   constructor(port = 3001) {
      this.port = port;
   }

   async start(): Promise<void> {
      return new Promise((resolve, reject) => {
         this.server = http.createServer();
         this.wss = new WebSocketServer({ server: this.server });

         this.wss.on('connection', (ws, req) => {
            const url = new URL(req.url || '', `http://${req.headers.host}`);
            const sessionId = url.searchParams.get('sessionId') || this.generateId();
            const requestedShell = url.searchParams.get('shell');
            this.handleConnection(ws, sessionId, requestedShell);
         });

         this.server.listen(this.port, () => {
            console.log(`🚀 Terminal server on port ${this.port}`);
            this.startCleanup();
            resolve();
         });

         this.server.on('error', reject);
      });
   }

   private generateId(): string {
      return Math.random().toString(36).substring(2, 10);
   }

   private handleConnection(ws: WebSocket, sessionId: string, requestedShell?: string | null) {
      let session = this.sessions.get(sessionId);

      if (session) {
         // Attach to existing session
         console.log(`🔄 Reconnecting to session ${sessionId} (${session.shell})`);
         session.clients.add(ws);
         session.lastActiveAt = new Date();
         this.send(ws, {
            type: 'connected',
            sessionId,
            shell: session.shell,
            usingPty: session.usingPty,
         });
      } else {
         // Create new session
         const shell = this.resolveShell(requestedShell);
         console.log(`🆕 Creating session ${sessionId} with ${shell}`);
         session = this.createSession(sessionId, shell);
         if (!session) {
            this.send(ws, { type: 'error', message: `Failed to create session with ${shell}` });
            ws.close();
            return;
         }
         session.clients.add(ws);
      }

      this.setupClient(ws, session);
   }

   private resolveShell(requested?: string | null): string {
      const platform = os.platform();
      const isWindows = platform === 'win32';

      // Available shells by platform with multiple possible paths
      const shellPaths: Record<string, string[]> = {
         // Cross-platform
         bash: isWindows
            ? [
                 'C:\\Program Files\\Git\\bin\\bash.exe',
                 'C:\\msys64\\usr\\bin\\bash.exe',
                 'bash.exe',
              ]
            : ['/bin/bash', '/usr/bin/bash', '/usr/local/bin/bash'],
         sh: isWindows
            ? ['C:\\Program Files\\Git\\bin\\sh.exe', 'C:\\msys64\\usr\\bin\\sh.exe', 'sh.exe']
            : ['/bin/sh', '/usr/bin/sh'],
         zsh: isWindows
            ? ['C:\\msys64\\usr\\bin\\zsh.exe', 'zsh.exe']
            : ['/bin/zsh', '/usr/bin/zsh', '/usr/local/bin/zsh'],

         // Windows specific
         cmd: ['cmd.exe'],
         powershell: ['powershell.exe'],
         pwsh: ['pwsh.exe'],
         gitbash: [
            'C:\\Program Files\\Git\\bin\\bash.exe',
            'C:\\Program Files (x86)\\Git\\bin\\bash.exe',
         ],
      };

      // Default shells by platform
      const defaultShell = isWindows ? 'powershell' : 'bash';

      if (!requested) {
         return this.findShellExecutable(shellPaths[defaultShell]) || shellPaths[defaultShell][0];
      }

      const normalized = requested.toLowerCase();

      // Direct match
      if (shellPaths[normalized]) {
         return this.findShellExecutable(shellPaths[normalized]) || shellPaths[normalized][0];
      }

      // Partial matches
      if (normalized.includes('bash'))
         return this.findShellExecutable(shellPaths['bash']) || shellPaths['bash'][0];
      if (normalized.includes('zsh'))
         return this.findShellExecutable(shellPaths['zsh']) || shellPaths['zsh'][0];
      if (normalized.includes('power'))
         return this.findShellExecutable(shellPaths['powershell']) || shellPaths['powershell'][0];
      if (normalized.includes('cmd')) return shellPaths['cmd'][0];
      if (normalized.includes('git'))
         return this.findShellExecutable(shellPaths['gitbash']) || shellPaths['gitbash'][0];

      console.warn(`⚠️  Unknown shell '${requested}', using default: ${defaultShell}`);
      return this.findShellExecutable(shellPaths[defaultShell]) || shellPaths[defaultShell][0];
   }

   private findShellExecutable(paths: string[]): string | null {
      for (const path of paths) {
         try {
            if (fs.existsSync(path)) {
               return path;
            }
         } catch (error) {
            // Continue to next path
         }
      }
      return null;
   }

   private getAvailableShells(): string[] {
      const available = [];
      const platform = os.platform();
      const isWindows = platform === 'win32';

      const shellsToCheck = ['bash', 'sh', 'zsh', 'cmd', 'powershell', 'pwsh', 'gitbash'];

      for (const shell of shellsToCheck) {
         if (shell === 'cmd' && isWindows) {
            available.push(shell);
         } else if ((shell === 'powershell' || shell === 'pwsh') && isWindows) {
            available.push(shell);
         } else {
            const executable = this.resolveShell(shell);
            if (executable && fs.existsSync(executable)) {
               available.push(shell);
            }
         }
      }

      return available;
   }

   private createSession(sessionId: string, shell: string): Session | null {
      try {
         let terminalProcess: any;
         let usingPty = false;

         // Try PTY first
         if (pty) {
            try {
               terminalProcess = pty.spawn(shell, [], {
                  name: 'xterm-color',
                  cols: 80,
                  rows: 30,
                  cwd: process.cwd(),
                  env: { ...process.env, TERM: 'xterm-color' },
               });
               usingPty = true;
               console.log(`✅ PTY session ${sessionId} with ${shell}`);
            } catch (error) {
               console.log(`⚠️  PTY failed for ${shell}, using child_process`);
            }
         }

         // Fallback to child_process
         if (!usingPty) {
            terminalProcess = spawn(shell, [], {
               cwd: process.cwd(),
               env: process.env,
               stdio: ['pipe', 'pipe', 'pipe'],
            });
            console.log(`✅ Child process session ${sessionId} with ${shell}`);
         }

         const session: Session = {
            id: sessionId,
            process: terminalProcess,
            clients: new Set(),
            createdAt: new Date(),
            lastActiveAt: new Date(),
            usingPty,
            shell,
         };

         this.sessions.set(sessionId, session);
         this.setupProcess(session);
         return session;
      } catch (error) {
         console.error(`❌ Failed to create session with ${shell}:`, error);
         return null;
      }
   }

   private setupProcess(session: Session) {
      if (session.usingPty) {
         session.process.onData((data: string) => {
            this.broadcast(session, { type: 'data', data });
         });

         session.process.onExit((code: any) => {
            console.log(`💀 Session ${session.id} exited`);
            this.broadcast(session, { type: 'exit', code: code?.exitCode || 0 });
            this.sessions.delete(session.id);
         });
      } else {
         session.process.stdout?.on('data', (data: Buffer) => {
            this.broadcast(session, { type: 'data', data: data.toString() });
         });

         session.process.stderr?.on('data', (data: Buffer) => {
            this.broadcast(session, { type: 'data', data: data.toString() });
         });

         session.process.on('exit', (code: number | null) => {
            console.log(`💀 Session ${session.id} exited`);
            this.broadcast(session, { type: 'exit', code: code || 0 });
            this.sessions.delete(session.id);
         });
      }
   }

   private setupClient(ws: WebSocket, session: Session) {
      ws.on('message', (data) => {
         try {
            const { type, data: payload } = JSON.parse(data.toString());
            session.lastActiveAt = new Date();

            if (type === 'input') {
               if (session.usingPty) {
                  session.process.write(payload);
               } else {
                  session.process.stdin?.write(payload);
               }
            } else if (type === 'resize' && session.usingPty) {
               const { cols, rows } = payload;
               if (cols > 0 && rows > 0) {
                  session.process.resize(cols, rows);
               }
            }
         } catch (error) {
            console.error('❌ Message error:', error);
         }
      });

      ws.on('close', () => {
         console.log(`🔌 Client disconnected from ${session.id}`);
         session.clients.delete(ws);
         session.lastActiveAt = new Date();
      });

      ws.on('error', (error) => {
         console.error('❌ WebSocket error:', error);
         session.clients.delete(ws);
      });
   }

   private send(ws: WebSocket, message: any) {
      if (ws.readyState === WebSocket.OPEN) {
         ws.send(JSON.stringify(message));
      }
   }

   private broadcast(session: Session, message: any) {
      const payload = JSON.stringify(message);
      session.clients.forEach((client) => {
         if (client.readyState === WebSocket.OPEN) {
            client.send(payload);
         }
      });
   }

   private startCleanup() {
      this.cleanupTimer = setInterval(() => {
         const now = Date.now();
         const stale = [];

         for (const [id, session] of this.sessions) {
            const inactive = now - session.lastActiveAt.getTime() > 300000; // 5 min
            const noClients = session.clients.size === 0;

            if (inactive && noClients) {
               stale.push(id);
            }
         }

         stale.forEach((id) => {
            console.log(`🧹 Cleaning up session ${id}`);
            const session = this.sessions.get(id);
            if (session) {
               session.clients.forEach((client) => client.close());
               session.process.kill?.();
               this.sessions.delete(id);
            }
         });
      }, 30000); // Every 30 seconds
   }

   getStatus() {
      return {
         port: this.port,
         sessions: this.sessions.size,
         availableShells: this.getAvailableShells(),
         platform: os.platform(),
         details: Array.from(this.sessions.values()).map((s) => ({
            id: s.id,
            shell: s.shell,
            clients: s.clients.size,
            usingPty: s.usingPty,
            created: s.createdAt,
         })),
      };
   }

   async stop(): Promise<void> {
      return new Promise((resolve) => {
         console.log('🛑 Stopping server...');

         if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
         }

         this.sessions.forEach((session) => {
            session.clients.forEach((client) => client.close());
            session.process.kill?.();
         });
         this.sessions.clear();

         if (this.wss) {
            this.wss.close(() => {
               if (this.server) {
                  this.server.close(() => resolve());
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

// Singleton
let server: TerminalServer | null = null;

export function getTerminalServer(): TerminalServer {
   if (!server) {
      server = new TerminalServer();
   }
   return server;
}

export async function startTerminalServer(): Promise<TerminalServer> {
   const s = getTerminalServer();
   await s.start();
   return s;
}

// Graceful shutdown
process.on('SIGINT', async () => {
   console.log('🛑 SIGINT received...');
   if (server) {
      await server.stop();
   }
   process.exit(0);
});

export default TerminalServer;
