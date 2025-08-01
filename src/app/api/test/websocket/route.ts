import { NextResponse } from 'next/server';

// Simple test endpoint to verify API structure
export async function GET() {
   try {
      const endpoints = {
         message: 'WebSocket API Test Endpoints',
         timestamp: Date.now(),
         endpoints: {
            terminal: {
               url: '/api/terminal',
               methods: ['GET', 'POST'],
               description: 'Terminal WebSocket management',
            },
            sync: {
               url: '/api/sync',
               methods: ['GET', 'POST', 'DELETE'],
               description: 'Sync client management',
            },
            syncClients: {
               url: '/api/sync/clients',
               methods: ['GET', 'POST', 'DELETE'],
               description: 'Individual sync client control',
            },
            serverStatus: {
               url: '/api/websocket/status',
               methods: ['GET', 'POST'],
               description: 'Server health and control',
            },
         },
         testCommands: {
            checkTerminalStatus: 'curl http://localhost:3000/api/terminal',
            checkSyncStatus: 'curl http://localhost:3000/api/sync',
            checkServerHealth: 'curl http://localhost:3000/api/websocket/status',
            listSyncClients: 'curl http://localhost:3000/api/sync/clients',
            broadcastMessage:
               'curl -X POST http://localhost:3000/api/sync -H "Content-Type: application/json" -d \'{"action": "broadcast", "message": "test", "data": {"hello": "world"}}\'',
         },
      };

      return NextResponse.json(endpoints);
   } catch (error) {
      return NextResponse.json(
         {
            error: 'Test endpoint failed',
            message: error instanceof Error ? error.message : 'Unknown error',
            timestamp: Date.now(),
         },
         { status: 500 }
      );
   }
}
