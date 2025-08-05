#!/usr/bin/env node

/**
 * Simple script to start the signal server with file watching
 */

const { startSignalServer } = require('../server/signal-server');
const { startFileWatcher } = require('../server/file-watcher');

async function start() {
   try {
      console.log('Starting signal server with file watcher...\n');

      // Start signal server
      const signalServer = await startSignalServer();
      console.log('✓ Signal server started on port 3002');

      // Start file watcher
      const fileWatcher = await startFileWatcher();
      console.log('✓ File watcher started');

      console.log('\nServer is running. Press Ctrl+C to stop.');

   } catch (error) {
      console.error('Failed to start:', error);
      process.exit(1);
   }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
   console.log('\nShutting down...');
   process.exit(0);
});

process.on('SIGTERM', async () => {
   console.log('\nShutting down...');
   process.exit(0);
});

// Start the servers
start();