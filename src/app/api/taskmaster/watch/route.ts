import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { TaskMasterWatcher } from '@/libs/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
   const { searchParams } = new URL(request.url);
   const tagName = searchParams.get('tag') || 'master';

   // Create a readable stream for server-sent events
   const stream = new ReadableStream({
      async start(controller) {
         // Send initial connection event
         const encoder = new TextEncoder();
         const send = (data: Record<string, unknown>) => {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
         };

         send({ type: 'connected', tagName });

         // Create and configure watcher
         const watcher = new TaskMasterWatcher({
            debounceDelay: 500,
         });

         try {
            // Set up event listeners
            watcher.on('connection-established', (event) => {
               console.log(`Started watching TaskMaster tasks.json for tag: ${tagName}`);
               send({
                  type: 'connection-established',
                  tagName,
                  watching: event.watching,
                  timestamp: event.timestamp,
               });
            });

            watcher.on('file-change', (event) => {
               console.log(`TaskMaster file changed: ${event.filename}`);
               send({
                  type: 'task-update',
                  tagName,
                  timestamp: event.timestamp,
               });
            });

            watcher.on('heartbeat', (event) => {
               send({
                  type: 'heartbeat',
                  tagName,
                  timestamp: event.timestamp,
                  connectionCount: event.connectionCount,
               });
            });

            // Start watching
            await watcher.start();

            // Send periodic heartbeats
            const heartbeatInterval = setInterval(() => {
               watcher.sendHeartbeat();
            }, 30000); // Every 30 seconds

            // Handle client disconnect
            const cleanup = () => {
               clearInterval(heartbeatInterval);
               watcher.stop();
               console.log(`Stopped watching TaskMaster tasks.json for tag: ${tagName}`);
            };

            // Store cleanup function for later use
            (request as Record<string, unknown>).cleanup = cleanup;
         } catch (error) {
            console.error('Failed to set up file watcher:', error);
            send({
               type: 'error',
               message: 'Failed to set up file watcher',
               error: (error as Error).message,
            });
         }
      },

      cancel() {
         // Cleanup when stream is cancelled
         const cleanup = (request as Record<string, unknown>).cleanup as (() => void) | undefined;
         if (cleanup) {
            cleanup();
         }
      },
   });

   return new NextResponse(stream, {
      headers: {
         'Content-Type': 'text/event-stream',
         'Cache-Control': 'no-cache',
         'Connection': 'keep-alive',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': 'Cache-Control',
      },
   });
}
