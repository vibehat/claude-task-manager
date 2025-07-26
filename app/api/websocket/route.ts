import { NextRequest, NextResponse } from 'next/server';
import { getGlobalWebSocketServer, RoomType } from '@/lib/websocket-server';

// Global WebSocket server instance
const wsServer = getGlobalWebSocketServer({
   port: 3002, // Different port to avoid conflicts
   cors: {
      origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
   },
   maxConnections: 50,
   pingTimeout: 30000,
   pingInterval: 25000,
});

// Initialize server on first request
let initialized = false;

function ensureInitialized() {
   if (!initialized) {
      try {
         wsServer.initialize();
         console.log('WebSocket server initialized via API route');
         initialized = true;
      } catch (error) {
         console.error('Failed to initialize WebSocket server:', error);
         throw error;
      }
   }
}

// GET /api/websocket - Get WebSocket server status and connection info
export async function GET(request: NextRequest) {
   const { searchParams } = new URL(request.url);
   const action = searchParams.get('action');

   try {
      ensureInitialized();

      switch (action) {
         case 'status':
            const status = wsServer.getStatus();
            return NextResponse.json({
               success: true,
               status,
               endpoints: {
                  websocket: `ws://localhost:3002/socket.io/`,
                  polling: `http://localhost:3002/socket.io/?transport=polling`,
               },
               timestamp: new Date().toISOString(),
            });

         case 'clients':
            const clients = wsServer.getConnectedClients();
            return NextResponse.json({
               success: true,
               clients: clients.map((client) => ({
                  id: client.id,
                  connected: client.connected,
                  connectedAt: client.connectedAt,
                  lastActivity: client.lastActivity,
                  rooms: Array.from(client.rooms),
                  metadata: client.metadata,
               })),
               total: clients.length,
               timestamp: new Date().toISOString(),
            });

         case 'rooms':
            const status2 = wsServer.getStatus();
            const roomsWithMembers = status2.rooms.map((roomName) => ({
               name: roomName,
               members: wsServer.getRoomMembers(roomName),
               memberCount: wsServer.getRoomMembers(roomName).length,
            }));

            return NextResponse.json({
               success: true,
               rooms: roomsWithMembers,
               total: roomsWithMembers.length,
               timestamp: new Date().toISOString(),
            });

         case 'health':
            const healthStatus = wsServer.getStatus();
            return NextResponse.json({
               success: true,
               health: {
                  running: healthStatus.running,
                  uptime: healthStatus.uptime,
                  connectedClients: healthStatus.connectedClients,
                  activeRooms: healthStatus.activeRooms,
                  memory: process.memoryUsage(),
                  timestamp: new Date().toISOString(),
               },
            });

         default:
            // Default response with connection information
            return NextResponse.json({
               message: 'Task Master WebSocket API',
               version: '1.0.0',
               description: 'WebSocket server for real-time Task Master integration',
               features: [
                  'Real-time task updates',
                  'CLI command execution',
                  'File system monitoring',
                  'Multi-client collaboration',
                  'Room-based communication',
                  'Connection health monitoring',
               ],
               connection: {
                  websocket: 'ws://localhost:3002/socket.io/',
                  polling: 'http://localhost:3002/socket.io/?transport=polling',
                  path: '/socket.io',
                  transports: ['websocket', 'polling'],
               },
               rooms: {
                  [RoomType.TASKS]: 'Task updates and management',
                  [RoomType.CLI]: 'CLI command execution and results',
                  [RoomType.FILES]: 'File system change notifications',
                  [RoomType.SYSTEM]: 'System status and health updates',
                  [RoomType.COLLABORATION]: 'Real-time collaboration features',
               },
               events: {
                  client: [
                     'welcome',
                     'tasks-data',
                     'cli-result',
                     'file-changed',
                     'system-heartbeat',
                     'heartbeat-ack',
                  ],
                  server: [
                     'join-room',
                     'leave-room',
                     'execute-cli',
                     'get-tasks',
                     'watch-files',
                     'heartbeat',
                     'ping',
                  ],
               },
               queryParameters: {
                  '?action=status': 'Get comprehensive server status',
                  '?action=clients': 'List all connected clients',
                  '?action=rooms': 'List all rooms with member counts',
                  '?action=health': 'Get server health metrics',
               },
               usage: {
                  clientLibrary: 'socket.io-client',
                  example: `
import { io } from 'socket.io-client';

const socket = io('http://localhost:3002', {
  path: '/socket.io',
  transports: ['websocket', 'polling']
});

socket.on('connect', () => {
  console.log('Connected to Task Master WebSocket');
  socket.emit('join-room', 'tasks');
  socket.emit('get-tasks');
});

socket.on('tasks-updated', (data) => {
  console.log('Tasks updated:', data);
});
            `.trim(),
               },
               timestamp: new Date().toISOString(),
            });
      }
   } catch (error) {
      console.error('WebSocket API GET error:', error);
      return NextResponse.json(
         {
            success: false,
            error: 'Failed to get WebSocket information',
            details: error.message,
            timestamp: new Date().toISOString(),
         },
         { status: 500 }
      );
   }
}

// POST /api/websocket - Control WebSocket server and broadcast messages
export async function POST(request: NextRequest) {
   try {
      ensureInitialized();

      const body = await request.json();
      const { action, data } = body;

      switch (action) {
         case 'broadcast':
            const { room, event, message } = data;

            if (!room || !event || !message) {
               return NextResponse.json(
                  { error: 'Missing required fields: room, event, message' },
                  { status: 400 }
               );
            }

            wsServer.broadcast(room, event, message);

            return NextResponse.json({
               success: true,
               message: `Broadcasted "${event}" to room "${room}"`,
               data: { room, event, message },
               timestamp: new Date().toISOString(),
            });

         case 'send-to-client':
            const { clientId, event: clientEvent, message: clientMessage } = data;

            if (!clientId || !clientEvent || !clientMessage) {
               return NextResponse.json(
                  { error: 'Missing required fields: clientId, event, message' },
                  { status: 400 }
               );
            }

            wsServer.sendToClient(clientId, clientEvent, clientMessage);

            return NextResponse.json({
               success: true,
               message: `Sent "${clientEvent}" to client "${clientId}"`,
               data: { clientId, event: clientEvent, message: clientMessage },
               timestamp: new Date().toISOString(),
            });

         case 'system-announcement':
            const { message: announcement, priority = 'normal' } = data;

            if (!announcement) {
               return NextResponse.json(
                  { error: 'Missing required field: message' },
                  { status: 400 }
               );
            }

            wsServer.broadcast(RoomType.SYSTEM, 'system-announcement', {
               message: announcement,
               priority,
               timestamp: new Date().toISOString(),
            });

            return NextResponse.json({
               success: true,
               message: 'System announcement broadcasted',
               data: { announcement, priority },
               timestamp: new Date().toISOString(),
            });

         case 'trigger-task-refresh':
            wsServer.broadcast(RoomType.TASKS, 'refresh-tasks', {
               reason: 'manual_trigger',
               timestamp: new Date().toISOString(),
            });

            return NextResponse.json({
               success: true,
               message: 'Task refresh triggered for all clients',
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
      }
   } catch (error) {
      console.error('WebSocket API POST error:', error);
      return NextResponse.json(
         {
            success: false,
            error: 'Failed to perform WebSocket operation',
            details: error.message,
            timestamp: new Date().toISOString(),
         },
         { status: 500 }
      );
   }
}

// DELETE /api/websocket - Disconnect clients or stop server
export async function DELETE(request: NextRequest) {
   const { searchParams } = new URL(request.url);
   const action = searchParams.get('action');
   const clientId = searchParams.get('clientId');

   try {
      ensureInitialized();

      switch (action) {
         case 'disconnect-client':
            if (!clientId) {
               return NextResponse.json(
                  { error: 'clientId is required for disconnect-client action' },
                  { status: 400 }
               );
            }

            const disconnected = wsServer.disconnectClient(clientId, 'admin_disconnect');
            return NextResponse.json({
               success: disconnected,
               message: disconnected
                  ? `Client ${clientId} disconnected successfully`
                  : `Client ${clientId} not found or already disconnected`,
               clientId,
               timestamp: new Date().toISOString(),
            });

         case 'shutdown':
            await wsServer.close();
            initialized = false;

            return NextResponse.json({
               success: true,
               message: 'WebSocket server shutdown successfully',
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json(
               { error: 'Invalid action. Supported actions: disconnect-client, shutdown' },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('WebSocket API DELETE error:', error);
      return NextResponse.json(
         {
            success: false,
            error: 'Failed to perform WebSocket delete operation',
            details: error.message,
            timestamp: new Date().toISOString(),
         },
         { status: 500 }
      );
   }
}

// Graceful shutdown on process exit
process.on('SIGTERM', async () => {
   if (initialized) {
      console.log('Shutting down WebSocket server...');
      await wsServer.close();
   }
});

process.on('SIGINT', async () => {
   if (initialized) {
      console.log('Shutting down WebSocket server...');
      await wsServer.close();
   }
});
