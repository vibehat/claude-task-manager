import { NextRequest, NextResponse } from 'next/server';
import { watch } from 'fs';
import { join } from 'path';

// Store for active watchers (in production, consider using Redis or similar)
const activeWatchers = new Map<string, any>();

// File paths to watch
const WATCH_PATHS = {
  tasks: '.taskmaster/tasks/tasks.json',
  config: '.taskmaster/config.json',
  reports: '.taskmaster/reports/',
} as const;

// SSE connection manager
class SSEManager {
  private connections = new Set<ReadableStreamDefaultController>();

  addConnection(controller: ReadableStreamDefaultController) {
    this.connections.add(controller);
    console.log(`SSE connection added. Total: ${this.connections.size}`);
  }

  removeConnection(controller: ReadableStreamDefaultController) {
    this.connections.delete(controller);
    console.log(`SSE connection removed. Total: ${this.connections.size}`);
  }

  broadcast(data: any) {
    const message = `data: ${JSON.stringify(data)}\n\n`;
    const encoder = new TextEncoder();
    
    this.connections.forEach((controller) => {
      try {
        controller.enqueue(encoder.encode(message));
      } catch (error) {
        console.error('Failed to send SSE message:', error);
        this.connections.delete(controller);
      }
    });
  }

  getConnectionCount() {
    return this.connections.size;
  }
}

const sseManager = new SSEManager();

// Setup file watchers
function setupFileWatcher(watchPath: string, label: string) {
  const fullPath = join(process.cwd(), watchPath);
  
  if (activeWatchers.has(label)) {
    return; // Already watching
  }

  try {
    const watcher = watch(fullPath, { recursive: true }, (eventType, filename) => {
      const changeData = {
        type: 'file-change',
        path: watchPath,
        label,
        eventType,
        filename,
        timestamp: new Date().toISOString(),
      };

      console.log('File change detected:', changeData);
      sseManager.broadcast(changeData);
    });

    activeWatchers.set(label, watcher);
    console.log(`File watcher setup for ${label}: ${fullPath}`);
  } catch (error) {
    console.error(`Failed to setup watcher for ${label}:`, error);
  }
}

// Cleanup watchers
function cleanupWatchers() {
  activeWatchers.forEach((watcher, label) => {
    try {
      watcher.close();
      console.log(`Closed watcher for ${label}`);
    } catch (error) {
      console.error(`Error closing watcher for ${label}:`, error);
    }
  });
  activeWatchers.clear();
}

// Handle cleanup on process termination
process.on('SIGINT', cleanupWatchers);
process.on('SIGTERM', cleanupWatchers);

// GET /api/file-watch - Establish SSE connection for file watching
export async function GET(request: NextRequest) {
  // Setup watchers if not already active
  Object.entries(WATCH_PATHS).forEach(([label, path]) => {
    setupFileWatcher(path, label);
  });

  // Create SSE stream
  const stream = new ReadableStream({
    start(controller) {
      sseManager.addConnection(controller);

      // Send initial connection message
      const encoder = new TextEncoder();
      const initialMessage = `data: ${JSON.stringify({
        type: 'connection-established',
        timestamp: new Date().toISOString(),
        watching: Object.keys(WATCH_PATHS),
        connectionCount: sseManager.getConnectionCount(),
      })}\n\n`;
      
      controller.enqueue(encoder.encode(initialMessage));

      // Send periodic heartbeat
      const heartbeatInterval = setInterval(() => {
        try {
          const heartbeat = `data: ${JSON.stringify({
            type: 'heartbeat',
            timestamp: new Date().toISOString(),
          })}\n\n`;
          controller.enqueue(encoder.encode(heartbeat));
        } catch (error) {
          clearInterval(heartbeatInterval);
          sseManager.removeConnection(controller);
        }
      }, 30000); // 30 second heartbeat

      // Cleanup on connection close
      request.signal.addEventListener('abort', () => {
        clearInterval(heartbeatInterval);
        sseManager.removeConnection(controller);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Cache-Control',
    },
  });
}

// POST /api/file-watch - Manual trigger for file change events (for testing)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type = 'manual-trigger', message = 'Manual file change trigger' } = body;

    const testData = {
      type,
      message,
      timestamp: new Date().toISOString(),
      connectionCount: sseManager.getConnectionCount(),
    };

    sseManager.broadcast(testData);

    return NextResponse.json({
      success: true,
      message: 'Test event broadcasted',
      data: testData,
      activeConnections: sseManager.getConnectionCount(),
    });
  } catch (error) {
    console.error('Manual trigger error:', error);
    return NextResponse.json(
      { error: 'Failed to trigger test event' },
      { status: 500 }
    );
  }
}

// DELETE /api/file-watch - Stop all watchers
export async function DELETE() {
  try {
    cleanupWatchers();
    
    return NextResponse.json({
      success: true,
      message: 'All file watchers stopped',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error stopping watchers:', error);
    return NextResponse.json(
      { error: 'Failed to stop watchers' },
      { status: 500 }
    );
  }
}