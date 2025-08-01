import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getWebSocketServer } from '../../../../../server/websocket-server';

// GET: List all connected sync clients
export async function GET(_request: NextRequest): Promise<NextResponse> {
   try {
      const server = getWebSocketServer();

      if (!server.isRunning()) {
         return NextResponse.json({
            message: 'WebSocket server is not running',
            clients: [],
            totalClients: 0,
            timestamp: Date.now(),
         });
      }

      const syncClients = server.getSyncClients();

      const clientDetails = syncClients.map((client) => ({
         id: client.id,
         clientId: client.clientId || null,
         type: client.type,
         connectedAt: client.createdAt,
         lastActive: client.lastActiveAt,
         isActive: client.isActive,
         connectionDuration: Date.now() - client.createdAt.getTime(),
         timeSinceLastActive: Date.now() - client.lastActiveAt.getTime(),
      }));

      return NextResponse.json({
         message: 'Connected sync clients',
         clients: clientDetails,
         totalClients: clientDetails.length,
         activeClients: clientDetails.filter((c) => c.isActive).length,
         timestamp: Date.now(),
      });
   } catch (error) {
      console.error('Error getting sync clients:', error);
      return NextResponse.json(
         {
            error: 'Failed to get sync clients',
            message: error instanceof Error ? error.message : 'Unknown error',
            clients: [],
            totalClients: 0,
            timestamp: Date.now(),
         },
         { status: 500 }
      );
   }
}

// POST: Send message to specific client
export async function POST(request: NextRequest): Promise<NextResponse> {
   try {
      const body = await request.json();
      const { clientId, message, data } = body;

      if (!clientId || !message) {
         return NextResponse.json(
            {
               error: 'clientId and message are required',
               example: {
                  clientId: 'client-123',
                  message: 'custom-notification',
                  data: { any: 'additional data' },
               },
            },
            { status: 400 }
         );
      }

      const server = getWebSocketServer();

      if (!server.isRunning()) {
         return NextResponse.json({ error: 'WebSocket server is not running' }, { status: 503 });
      }

      const syncClients = server.getSyncClients();
      const targetClient = syncClients.find(
         (client) => client.clientId === clientId || client.id === clientId
      );

      if (!targetClient) {
         return NextResponse.json(
            {
               error: 'Client not found',
               availableClients: syncClients.map((c) => ({
                  id: c.id,
                  clientId: c.clientId,
               })),
            },
            { status: 404 }
         );
      }

      if (!targetClient.isActive || targetClient.ws.readyState !== targetClient.ws.OPEN) {
         return NextResponse.json(
            { error: 'Client is not active or connection is closed' },
            { status: 410 }
         );
      }

      // Send message to specific client
      const messagePayload = {
         type: message,
         ...data,
         timestamp: new Date().toISOString(),
         targeted: true,
         clientId: targetClient.clientId,
      };

      try {
         targetClient.ws.send(JSON.stringify(messagePayload));

         return NextResponse.json({
            message: 'Message sent successfully',
            targetClient: {
               id: targetClient.id,
               clientId: targetClient.clientId,
            },
            sentMessage: messagePayload,
            timestamp: Date.now(),
         });
      } catch (sendError) {
         return NextResponse.json(
            {
               error: 'Failed to send message to client',
               message: sendError instanceof Error ? sendError.message : 'Unknown send error',
            },
            { status: 500 }
         );
      }
   } catch (error) {
      console.error('Error in sync clients POST:', error);
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

// DELETE: Disconnect specific client
export async function DELETE(request: NextRequest): Promise<NextResponse> {
   try {
      const url = new URL(request.url);
      const clientId = url.searchParams.get('clientId');

      if (!clientId) {
         return NextResponse.json(
            {
               error: 'clientId query parameter is required',
               example: '/api/sync/clients?clientId=client-123',
            },
            { status: 400 }
         );
      }

      const server = getWebSocketServer();

      if (!server.isRunning()) {
         return NextResponse.json({ error: 'WebSocket server is not running' }, { status: 503 });
      }

      const syncClients = server.getSyncClients();
      const targetClient = syncClients.find(
         (client) => client.clientId === clientId || client.id === clientId
      );

      if (!targetClient) {
         return NextResponse.json(
            {
               error: 'Client not found',
               availableClients: syncClients.map((c) => ({
                  id: c.id,
                  clientId: c.clientId,
               })),
            },
            { status: 404 }
         );
      }

      // Send disconnect notification before closing
      if (targetClient.isActive && targetClient.ws.readyState === targetClient.ws.OPEN) {
         try {
            targetClient.ws.send(
               JSON.stringify({
                  type: 'sync-disconnect',
                  reason: 'Server initiated disconnect',
                  timestamp: new Date().toISOString(),
               })
            );
         } catch (notifyError) {
            console.warn('Failed to send disconnect notification:', notifyError);
         }

         // Close the connection
         targetClient.ws.close();
      }

      return NextResponse.json({
         message: 'Client disconnected successfully',
         disconnectedClient: {
            id: targetClient.id,
            clientId: targetClient.clientId,
            wasActive: targetClient.isActive,
         },
         timestamp: Date.now(),
      });
   } catch (error) {
      console.error('Error disconnecting sync client:', error);
      return NextResponse.json(
         {
            error: 'Failed to disconnect client',
            message: error instanceof Error ? error.message : 'Unknown error',
            timestamp: Date.now(),
         },
         { status: 500 }
      );
   }
}
