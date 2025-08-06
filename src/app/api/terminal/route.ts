import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getTerminalServer } from '../../../../server/terminal-server';
import * as os from 'os';

// Get terminal server instance (should be started by custom server)
function getServerInstance() {
  try {
    return getTerminalServer();
  } catch (error) {
    console.error('Terminal server not available:', error);
    return null;
  }
}

// Handle terminal server info requests
export async function GET(_request: NextRequest): Promise<NextResponse> {
  try {
    const server = getServerInstance();
    if (!server) {
      return NextResponse.json(
        {
          error: 'Terminal server not available',
          message: 'Make sure the custom server is running with all services',
          websocketUrl: 'ws://localhost:9001',
          platform: os.platform(),
          cwd: process.cwd(),
        },
        { status: 503 }
      );
    }

    const status = server.getStatus();

    return NextResponse.json({
      message: 'Terminal WebSocket API - Status Endpoint',
      websocketUrl: `ws://localhost:${status.port}`,
      ...status,
      platform: os.platform(),
      cwd: process.cwd(),
    });
  } catch (error) {
    console.error('Error in terminal API GET:', error);
    return NextResponse.json(
      {
        error: 'Failed to get terminal server status',
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
          const server = getServerInstance();
          if (!server) {
            return NextResponse.json({
              status: 'unavailable',
              message: 'Terminal server not running - start the custom server',
              timestamp: Date.now(),
            });
          }

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
        return NextResponse.json(
          {
            error: 'Server startup disabled',
            message:
              'Terminal server is managed by the custom server. Use `pnpm dev` to start all services.',
            timestamp: Date.now(),
          },
          { status: 400 }
        );

      case 'stop':
        return NextResponse.json(
          {
            error: 'Server shutdown disabled',
            message:
              'Terminal server is managed by the custom server. Stop the custom server to shutdown all services.',
            timestamp: Date.now(),
          },
          { status: 400 }
        );

      default:
        return NextResponse.json(
          {
            error: 'Invalid action',
            availableActions: ['status'],
            note: 'start/stop actions are disabled - use custom server instead',
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
