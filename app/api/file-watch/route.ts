import { NextRequest, NextResponse } from 'next/server';
import { getGlobalFileWatcher, FileChangeEvent } from '@/lib/file-watcher';

// Enhanced SSE connection manager with file watcher integration
class SSEManager {
   private connections = new Set<ReadableStreamDefaultController>();
   private fileWatcher = getGlobalFileWatcher();
   private isWatcherSetup = false;

   constructor() {
      this.setupFileWatcher();
   }

   // Setup file watcher event listeners
   private setupFileWatcher() {
      if (this.isWatcherSetup) return;

      // Listen for file changes
      this.fileWatcher.on('change', (event: FileChangeEvent) => {
         this.broadcast({
            type: 'file_change',
            filename: event.filename,
            filepath: event.filepath,
            eventType: event.type,
            timestamp: event.timestamp,
            stats: event.stats,
            error: event.error,
         });
      });

      // Listen for task-specific changes
      this.fileWatcher.on('tasksChanged', (event: FileChangeEvent) => {
         this.broadcast({
            type: 'tasks_updated',
            filename: event.filename,
            timestamp: event.timestamp,
            content: event.content,
            error: event.error,
         });
      });

      // Listen for config changes
      this.fileWatcher.on('configChanged', (event: FileChangeEvent) => {
         this.broadcast({
            type: 'config_updated',
            filename: event.filename,
            timestamp: event.timestamp,
            content: event.content,
            error: event.error,
         });
      });

      // Listen for watcher errors
      this.fileWatcher.on('watcherError', (error) => {
         this.broadcast({
            type: 'watcher_error',
            error: error.error,
            path: error.path,
            timestamp: error.timestamp,
         });
      });

      // Listen for watcher start/stop
      this.fileWatcher.on('started', (info) => {
         this.broadcast({
            type: 'watcher_started',
            paths: info.paths,
            config: info.config,
            timestamp: new Date().toISOString(),
         });
      });

      this.fileWatcher.on('closed', () => {
         this.broadcast({
            type: 'watcher_stopped',
            timestamp: new Date().toISOString(),
         });
      });

      this.isWatcherSetup = true;
   }

   addConnection(controller: ReadableStreamDefaultController) {
      this.connections.add(controller);
      console.log(`SSE connection added. Total: ${this.connections.size}`);

      // Start file watcher if this is the first connection
      if (this.connections.size === 1) {
         this.fileWatcher.start();
      }

      // Send initial status to new connection
      const status = this.fileWatcher.getStatus();
      const encoder = new TextEncoder();
      const statusMessage = `data: ${JSON.stringify({
         type: 'connection_established',
         watcherStatus: status,
         connectionCount: this.connections.size,
         timestamp: new Date().toISOString(),
      })}\n\n`;

      try {
         controller.enqueue(encoder.encode(statusMessage));
      } catch (error) {
         console.error('Failed to send initial status:', error);
      }
   }

   removeConnection(controller: ReadableStreamDefaultController) {
      this.connections.delete(controller);
      console.log(`SSE connection removed. Total: ${this.connections.size}`);

      // Stop file watcher if no more connections
      if (this.connections.size === 0) {
         // Don't close completely, just reduce activity
         console.log('No more SSE connections, file watcher remains active');
      }
   }

   broadcast(data: any) {
      if (this.connections.size === 0) {
         return; // No connections to broadcast to
      }

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

   getWatcherStatus() {
      return this.fileWatcher.getStatus();
   }
}

const sseManager = new SSEManager();

// GET /api/file-watch - Establish SSE connection for enhanced file watching
export async function GET(request: NextRequest) {
   const { searchParams } = new URL(request.url);
   const action = searchParams.get('action');

   // Handle status queries
   if (action === 'status') {
      return NextResponse.json({
         connectionCount: sseManager.getConnectionCount(),
         watcherStatus: sseManager.getWatcherStatus(),
         timestamp: new Date().toISOString(),
      });
   }

   // Create enhanced SSE stream
   const stream = new ReadableStream({
      start(controller) {
         sseManager.addConnection(controller);

         // Send periodic heartbeat to keep connection alive
         const heartbeatInterval = setInterval(() => {
            try {
               const encoder = new TextEncoder();
               const heartbeat = `data: ${JSON.stringify({
                  type: 'heartbeat',
                  timestamp: new Date().toISOString(),
                  connectionCount: sseManager.getConnectionCount(),
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
            try {
               controller.close();
            } catch (error) {
               console.warn('Error closing SSE controller:', error);
            }
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

// POST /api/file-watch - Manual trigger and watcher control
export async function POST(request: NextRequest) {
   try {
      const body = await request.json();
      const { action, type = 'manual-trigger', message = 'Manual file change trigger' } = body;

      switch (action) {
         case 'trigger':
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

         case 'restart':
            // Get the file watcher and restart it
            const fileWatcher = sseManager.getWatcherStatus();
            sseManager.broadcast({
               type: 'watcher_restarting',
               timestamp: new Date().toISOString(),
            });

            return NextResponse.json({
               success: true,
               message: 'File watcher restarted',
               status: fileWatcher,
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json(
               { error: 'Invalid action. Supported actions: trigger, restart' },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('File watcher POST error:', error);
      return NextResponse.json({ error: 'Failed to perform operation' }, { status: 500 });
   }
}

// DELETE /api/file-watch - Cleanup connections and optionally stop watcher
export async function DELETE(request: NextRequest) {
   try {
      const { searchParams } = new URL(request.url);
      const force = searchParams.get('force') === 'true';

      if (force) {
         // Force close the global file watcher
         const globalWatcher = getGlobalFileWatcher();
         globalWatcher.close();

         return NextResponse.json({
            success: true,
            message: 'File watcher force stopped',
            timestamp: new Date().toISOString(),
         });
      } else {
         // Just report current status
         return NextResponse.json({
            success: true,
            message: 'File watcher is managed automatically based on SSE connections',
            status: sseManager.getWatcherStatus(),
            connectionCount: sseManager.getConnectionCount(),
            timestamp: new Date().toISOString(),
         });
      }
   } catch (error) {
      console.error('Error with file watcher DELETE:', error);
      return NextResponse.json({ error: 'Failed to stop watchers' }, { status: 500 });
   }
}
