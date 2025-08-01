import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getWebSocketServer, startWebSocketServer } from '../../../../server/websocket-server';
import * as path from 'path';

// Check if port is available
async function isPortInUse(port: number): Promise<boolean> {
   return new Promise((resolve) => {
      const server = require('net').createServer();
      server.listen(port, () => {
         server.close();
         resolve(false); // Port is available
      });
      server.on('error', () => {
         resolve(true); // Port is in use
      });
   });
}

// Ensure WebSocket server is running or available
async function ensureServerStarted() {
   const server = getWebSocketServer();

   // Check if our instance is running
   if (server.isRunning()) {
      return server;
   }

   // Check if another instance is running on the port
   const port = 3002;
   const portInUse = await isPortInUse(port);

   if (portInUse) {
      console.log(`✅ WebSocket server detected running on port ${port} (external instance)`);
      // Return server instance that can provide status without actually running
      return server;
   }

   // Try to start our own instance
   try {
      await startWebSocketServer();
      console.log('WebSocket server started for sync API');
   } catch (error) {
      console.error('Failed to start WebSocket server:', error);
      throw error;
   }

   return server;
}

// GET: Sync connection info and status
export async function GET(_request: NextRequest): Promise<NextResponse> {
   try {
      const server = await ensureServerStarted();
      const port = 3002;
      const portInUse = await isPortInUse(port);

      // If port is in use, assume external server is running
      if (portInUse) {
         return NextResponse.json({
            message: 'TaskMaster WebSocket Sync API',
            websocketUrl: `ws://localhost:${port}?type=sync`,
            isRunning: true,
            port: port,
            connections: {
               total: 0, // Cannot query external instance
               terminal: 0,
               sync: 0,
            },
            syncClients: 0,
            fileWatcher: {
               active: true, // Assume active for external instance
               watchedFiles: ['tasks.json'],
            },
            endpoints: {
               connect: `ws://localhost:${port}?type=sync&clientId=<your-client-id>`,
               status: '/api/sync',
               broadcast: '/api/sync (POST)',
               clients: '/api/sync/clients',
            },
            externalInstance: true,
            timestamp: Date.now(),
         });
      }

      // Use local instance status
      const status = server.getStatus();
      return NextResponse.json({
         message: 'TaskMaster WebSocket Sync API',
         websocketUrl: `ws://localhost:${status.port}?type=sync`,
         ...status,
         syncClients: status.connections.sync,
         fileWatcher: status.fileWatcher,
         endpoints: {
            connect: `ws://localhost:${status.port}?type=sync&clientId=<your-client-id>`,
            status: '/api/sync',
            broadcast: '/api/sync (POST)',
            clients: '/api/sync/clients',
         },
         externalInstance: false,
         timestamp: Date.now(),
      });
   } catch (error) {
      console.error('Error in sync API GET:', error);
      return NextResponse.json(
         {
            error: 'Failed to get sync server status',
            message: error instanceof Error ? error.message : 'Unknown error',
            timestamp: Date.now(),
         },
         { status: 500 }
      );
   }
}

// POST: Sync management operations
export async function POST(request: NextRequest): Promise<NextResponse> {
   try {
      const body = await request.json();
      const { action, ...params } = body;

      const server = await ensureServerStarted();

      switch (action) {
         case 'status':
            const status = server.getStatus();
            return NextResponse.json({
               status: 'healthy',
               syncService: 'active',
               ...status,
               timestamp: Date.now(),
            });

         case 'broadcast':
            const { message, data } = params;
            if (!message) {
               return NextResponse.json(
                  { error: 'Message is required for broadcast action' },
                  { status: 400 }
               );
            }

            const broadcastCount = server.broadcastToSyncClients({
               type: message,
               ...data,
               timestamp: new Date().toISOString(),
            });

            return NextResponse.json({
               message: 'Broadcast sent successfully',
               sentToClients: broadcastCount,
               timestamp: Date.now(),
            });

         case 'simulate-file-change':
            const { file } = params;
            const fileName = file || 'tasks.json';

            const simulatedBroadcast = server.broadcastToSyncClients({
               type: 'taskmaster-sync',
               event: 'file-changed',
               file: fileName,
               simulated: true,
               timestamp: new Date().toISOString(),
            });

            return NextResponse.json({
               message: 'File change simulation sent',
               file: fileName,
               sentToClients: simulatedBroadcast,
               timestamp: Date.now(),
            });

         case 'get-clients':
            const syncClients = server.getSyncClients();
            return NextResponse.json({
               message: 'Active sync clients',
               clients: syncClients.map((client) => ({
                  id: client.id,
                  clientId: client.clientId,
                  connectedAt: client.createdAt,
                  lastActive: client.lastActiveAt,
                  isActive: client.isActive,
               })),
               totalClients: syncClients.length,
               timestamp: Date.now(),
            });

         case 'disconnect-client':
            const { clientId } = params;
            if (!clientId) {
               return NextResponse.json(
                  { error: 'clientId is required for disconnect-client action' },
                  { status: 400 }
               );
            }

            const syncClient = server
               .getSyncClients()
               .find((client) => client.clientId === clientId || client.id === clientId);

            if (!syncClient) {
               return NextResponse.json({ error: 'Client not found' }, { status: 404 });
            }

            // Close the WebSocket connection
            syncClient.ws.close();

            return NextResponse.json({
               message: 'Client disconnected successfully',
               clientId,
               timestamp: Date.now(),
            });

         case 'file-watcher-status':
            const fileWatcherStatus = server.getStatus().fileWatcher;
            return NextResponse.json({
               message: 'File watcher status',
               fileWatcher: fileWatcherStatus,
               watchedFiles: fileWatcherStatus.watchedFiles.map((file) => ({
                  name: file,
                  fullPath: path.join(process.cwd(), '.taskmaster', 'tasks', file),
               })),
               timestamp: Date.now(),
            });

         default:
            return NextResponse.json(
               {
                  error: 'Invalid action',
                  availableActions: [
                     'status',
                     'broadcast',
                     'simulate-file-change',
                     'get-clients',
                     'disconnect-client',
                     'file-watcher-status',
                  ],
               },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('Sync API POST error:', error);
      return NextResponse.json(
         {
            error: 'Request processing failed',
            message: error instanceof Error ? error.message : 'Unknown error',
            timestamp: Date.now(),
         },
         { status: 500 }
      );
   }
}

// PUT: Update sync configuration (future enhancement)
export async function PUT(request: NextRequest): Promise<NextResponse> {
   try {
      const body = await request.json();
      const { config } = body;

      // For now, return not implemented
      // Future: Allow updating file watch paths, notification settings, etc.

      return NextResponse.json(
         {
            message: 'Configuration update not yet implemented',
            receivedConfig: config,
            timestamp: Date.now(),
         },
         { status: 501 }
      );
   } catch (error) {
      return NextResponse.json(
         {
            error: 'Invalid request body',
            timestamp: Date.now(),
         },
         { status: 400 }
      );
   }
}

// DELETE: Cleanup or reset sync connections
export async function DELETE(_request: NextRequest): Promise<NextResponse> {
   try {
      const server = getWebSocketServer();

      if (!server.isRunning()) {
         return NextResponse.json({
            message: 'Server is not running',
            timestamp: Date.now(),
         });
      }

      // Disconnect all sync clients
      const syncClients = server.getSyncClients();
      let disconnectedCount = 0;

      syncClients.forEach((client) => {
         if (client.ws.readyState === client.ws.OPEN) {
            client.ws.close();
            disconnectedCount++;
         }
      });

      return NextResponse.json({
         message: 'All sync clients disconnected',
         disconnectedClients: disconnectedCount,
         timestamp: Date.now(),
      });
   } catch (error) {
      console.error('Sync API DELETE error:', error);
      return NextResponse.json(
         {
            error: 'Failed to cleanup sync connections',
            message: error instanceof Error ? error.message : 'Unknown error',
            timestamp: Date.now(),
         },
         { status: 500 }
      );
   }
}
