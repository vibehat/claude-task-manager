import { WebSocketServer } from 'ws';
import * as http from 'http';

interface SignalConnection {
   ws: any;
   clientId: string;
   createdAt: Date;
   lastActiveAt: Date;
}

class SignalWebSocketServer {
   private wss: WebSocketServer | null = null;
   private server: http.Server | null = null;
   private connections = new Map<string, SignalConnection>();
   private port: number;

   constructor(port: number = 3002) {
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
               console.error('Signal WebSocket server error:', error);
            });

            this.server.listen(this.port, () => {
               console.log(`Signal WebSocket server listening on port ${this.port}`);
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
      console.log('New signal connection established');

      // Extract client ID from query params
      const url = new URL(request.url || '', `http://${request.headers.host}`);
      const clientId = url.searchParams.get('clientId') || `client_${Date.now()}`;

      // Store connection
      const connection: SignalConnection = {
         ws,
         clientId,
         createdAt: new Date(),
         lastActiveAt: new Date(),
      };
      this.connections.set(clientId, connection);

      // Send connection confirmation
      ws.send(
         JSON.stringify({
            type: 'connected',
            clientId,
         })
      );

      // Handle messages
      ws.on('message', (message: Buffer) => {
         try {
            const data = JSON.parse(message.toString());
            connection.lastActiveAt = new Date();

            // Echo message to all other clients (broadcast)
            this.broadcast(data, clientId);
         } catch (error) {
            console.error('Error processing message:', error);
         }
      });

      // Handle close
      ws.on('close', () => {
         console.log(`Signal connection ${clientId} disconnected`);
         this.connections.delete(clientId);
      });

      // Handle errors
      ws.on('error', (error: Error) => {
         console.error('WebSocket error:', error);
         this.connections.delete(clientId);
      });
   }

   // Broadcast message to all connected clients except sender
   broadcast(message: any, excludeClientId?: string) {
      const messageStr = JSON.stringify(message);

      this.connections.forEach((connection, clientId) => {
         if (clientId !== excludeClientId && connection.ws.readyState === connection.ws.OPEN) {
            connection.ws.send(messageStr);
         }
      });
   }

   // Send message to specific client
   sendToClient(clientId: string, message: any) {
      const connection = this.connections.get(clientId);
      if (connection && connection.ws.readyState === connection.ws.OPEN) {
         connection.ws.send(JSON.stringify(message));
      }
   }

   // Emit file change event to all clients
   emitFileChange(filePath: string, changeType: string) {
      this.broadcast({
         type: 'file-changed',
         filePath,
         changeType,
         timestamp: new Date().toISOString(),
      });
   }

   getStatus() {
      return {
         active: this.wss !== null,
         port: this.port,
         connections: this.connections.size,
         clients: Array.from(this.connections.keys()),
      };
   }

   stop(): Promise<void> {
      return new Promise((resolve) => {
         // Close all connections
         this.connections.forEach((connection) => {
            if (connection.ws.readyState === connection.ws.OPEN) {
               connection.ws.close();
            }
         });
         this.connections.clear();

         if (this.wss) {
            this.wss.close(() => {
               console.log('Signal WebSocket server closed');
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
let signalServer: SignalWebSocketServer | null = null;

export function getSignalServer(): SignalWebSocketServer {
   if (!signalServer) {
      signalServer = new SignalWebSocketServer();
   }
   return signalServer;
}

export async function startSignalServer(): Promise<SignalWebSocketServer> {
   const server = getSignalServer();
   await server.start();
   return server;
}

// Cleanup on process exit
process.on('exit', () => {
   if (signalServer) {
      signalServer.stop();
   }
});

process.on('SIGINT', () => {
   console.log('Received SIGINT, shutting down signal server...');
   if (signalServer) {
      signalServer.stop().then(() => {
         process.exit(0);
      });
   } else {
      process.exit(0);
   }
});

export default SignalWebSocketServer;
