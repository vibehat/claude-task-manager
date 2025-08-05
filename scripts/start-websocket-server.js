#!/usr/bin/env node

/**
 * Start the WebSocket server for terminal
 */

const path = require('path');

// Register ts-node to handle TypeScript files
require('ts-node/register');

async function startServer() {
   try {
      console.log('🚀 Starting Terminal WebSocket server...');
      
      // Load and start the terminal server
      const { startTerminalServer } = require('../server/terminal-server.ts');
      const server = await startTerminalServer();
      
      console.log('✅ Terminal WebSocket server started successfully');
      const status = server.getStatus();
      console.log(`📡 Terminal sessions available at: ws://localhost:${status.port}`);
      
      // Handle graceful shutdown
      process.on('SIGINT', async () => {
         console.log('\n🛑 Shutting down Terminal WebSocket server...');
         try {
            await server.stop();
            console.log('✅ Terminal WebSocket server stopped successfully');
            process.exit(0);
         } catch (error) {
            console.error('❌ Error stopping server:', error);
            process.exit(1);
         }
      });
      
      process.on('SIGTERM', async () => {
         console.log('\n🛑 Received SIGTERM, shutting down Terminal WebSocket server...');
         try {
            await server.stop();
            console.log('✅ Terminal WebSocket server stopped successfully');
            process.exit(0);
         } catch (error) {
            console.error('❌ Error stopping server:', error);
            process.exit(1);
         }
      });
      
   } catch (error) {
      console.error('❌ Failed to start Terminal WebSocket server:', error);
      process.exit(1);
   }
}

startServer();