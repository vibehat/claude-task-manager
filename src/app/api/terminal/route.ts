import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getTerminalServer, startTerminalServer } from '../../../../server/websocket-server';
import * as os from 'os';

// Initialize terminal server on first request
let serverInitialized = false;

async function ensureServerStarted() {
   if (!serverInitialized) {
      try {
         await startTerminalServer();
         serverInitialized = true;
         console.log('Terminal WebSocket server started');
      } catch (error) {
         console.error('Failed to start terminal server:', error);
         throw error;
      }
   }
   return getTerminalServer();
}

// Handle terminal server info requests
export async function GET(_request: NextRequest): Promise<NextResponse> {
   try {
      const server = await ensureServerStarted();
      const status = server.getStatus();

      return NextResponse.json({
         message: 'Terminal WebSocket API',
         websocketUrl: `ws://localhost:${status.port}`,
         ...status,
         platform: os.platform(),
         cwd: process.cwd(),
      });
   } catch (error) {
      console.error('Error in terminal API GET:', error);
      return NextResponse.json(
         {
            error: 'Failed to start terminal server',
            message: error instanceof Error ? error.message : 'Unknown error',
         },
         { status: 500 }
      );
   }
}

// Health check and control endpoint
export async function POST(request: NextRequest): Promise<NextResponse> {
   try {
      const body = await request.json();
      const { action } = body;

      switch (action) {
         case 'status':
            try {
               const server = await ensureServerStarted();
               const status = server.getStatus();

               return NextResponse.json({
                  status: 'healthy',
                  ...status,
                  platform: os.platform(),
                  timestamp: Date.now(),
               });
            } catch (error) {
               return NextResponse.json(
                  {
                     status: 'unhealthy',
                     error: error instanceof Error ? error.message : 'Unknown error',
                     timestamp: Date.now(),
                  },
                  { status: 500 }
               );
            }

         case 'start':
            try {
               const server = await ensureServerStarted();
               const status = server.getStatus();

               return NextResponse.json({
                  message: 'Terminal server started',
                  ...status,
                  timestamp: Date.now(),
               });
            } catch (error) {
               return NextResponse.json(
                  {
                     error: 'Failed to start terminal server',
                     message: error instanceof Error ? error.message : 'Unknown error',
                     timestamp: Date.now(),
                  },
                  { status: 500 }
               );
            }

         case 'stop':
            try {
               const server = getTerminalServer();
               await server.stop();
               serverInitialized = false;

               return NextResponse.json({
                  message: 'Terminal server stopped',
                  timestamp: Date.now(),
               });
            } catch (error) {
               return NextResponse.json(
                  {
                     error: 'Failed to stop terminal server',
                     message: error instanceof Error ? error.message : 'Unknown error',
                     timestamp: Date.now(),
                  },
                  { status: 500 }
               );
            }

         default:
            return NextResponse.json(
               {
                  error: 'Invalid action',
                  availableActions: ['status', 'start', 'stop'],
               },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('Terminal API POST error:', error);
      return NextResponse.json(
         {
            error: 'Invalid request body',
            timestamp: Date.now(),
         },
         { status: 400 }
      );
   }
}
