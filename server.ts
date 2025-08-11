/**
 * Custom Next.js server that runs all services:
 * - Next.js HTTP server
 * - Terminal WebSocket server (port 9001)
 * - Signal WebSocket server (port 9002)
 */

import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { startTerminalServer } from './server/terminal-server';
import { startSignalServer } from './server/signal-server';
import { startFileWatcher } from './server/file-watcher';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

async function startAllServers() {
  try {
    console.log('🚀 Starting all servers...\n');

    // 1. Create Next.js app
    const app = next({ dev, hostname, port });
    const handle = app.getRequestHandler();
    await app.prepare();

    // 2. Create HTTP server for Next.js
    const server = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url!, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Error occurred handling', req.url, err);
        res.statusCode = 500;
        res.end('internal server error');
      }
    });

    // 3. Start Next.js server
    server.listen(port, () => {
      console.log(`✅ Next.js ready on http://${hostname}:${port}`);
    });

    let terminalServer = null;
    let signalServer = null;
    let fileWatcher = null;

    // 4. Start Terminal WebSocket server (optional)
    try {
      terminalServer = await startTerminalServer(9001);
      console.log('✅ Terminal WebSocket server ready on ws://localhost:9001');
    } catch (error) {
      console.log('⚠️ Terminal WebSocket server failed to start (optional feature)');
    }

    // 5. Start Signal WebSocket server (optional)
    try {
      signalServer = await startSignalServer(9002);
      console.log('✅ Signal WebSocket server ready on ws://localhost:9002');
    } catch (error) {
      console.log('⚠️ Signal WebSocket server failed to start (optional feature)');
    }

    // 6. Start File Watcher (optional)
    try {
      fileWatcher = await startFileWatcher();
      console.log('✅ File watcher started');
    } catch (error) {
      console.log('⚠️ File watcher failed to start (optional feature)');
    }

    console.log('\n📡 Next.js server running:');
    console.log(`  - HTTP: http://localhost:${port}`);
    if (terminalServer) console.log(`  - Terminal: ws://localhost:9001`);
    if (signalServer) console.log(`  - Signal: ws://localhost:9002`);
    console.log('\nPress Ctrl+C to stop all servers\n');

    // Handle graceful shutdown
    const shutdown = async (signal: string) => {
      console.log(`\n${signal} received, shutting down all servers...`);

      try {
        // Stop file watcher
        if (fileWatcher) {
          await fileWatcher.stop();
          console.log('✓ File watcher stopped');
        }

        // Stop signal server
        if (signalServer) {
          await signalServer.stop();
          console.log('✓ Signal server stopped');
        }

        // Stop terminal server
        if (terminalServer) {
          await terminalServer.stop();
          console.log('✓ Terminal server stopped');
        }

        // Close HTTP server
        server.close(() => {
          console.log('✓ HTTP server closed');
          process.exit(0);
        });

        // Force exit after 10 seconds
        setTimeout(() => {
          console.error('Could not close connections in time, forcefully shutting down');
          process.exit(1);
        }, 10000);
      } catch (error) {
        console.error('Error during shutdown:', error);
        process.exit(1);
      }
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
  } catch (error) {
    console.error('❌ Failed to start servers:', error);
    process.exit(1);
  }
}

// Start all servers
startAllServers();
