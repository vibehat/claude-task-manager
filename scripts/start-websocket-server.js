#!/usr/bin/env node

/**
 * Start the WebSocket server for terminal and TaskMaster sync
 */

const path = require('path');

// Register ts-node to handle TypeScript files
require('ts-node/register');

async function loadServer() {
   try {
      // Load the WebSocket server
      return require('../server/websocket-server.ts');
   } catch (error) {
      console.error('Failed to load WebSocket server:', error);
      throw error;
   }
}

async function startServer() {
   try {
      console.log('🚀 Starting TaskMaster WebSocket server...');
      const serverModule = await loadServer();
      const server = await serverModule.startWebSocketServer();
      
      console.log('✅ TaskMaster WebSocket server started successfully');
      const status = server.getStatus();
      console.log(`📡 Terminal sessions available at: ws://localhost:${status.port}?type=terminal`);
      console.log(`🔄 TaskMaster sync available at: ws://localhost:${status.port}?type=sync`);
      console.log(`🏥 API endpoints available at: http://localhost:3000/api/test/websocket`);
      
      // Handle graceful shutdown
      process.on('SIGINT', async () => {
         console.log('\n🛑 Shutting down TaskMaster WebSocket server...');
         try {
            await server.stop();
            console.log('✅ TaskMaster WebSocket server stopped successfully');
            process.exit(0);
         } catch (error) {
            console.error('❌ Error stopping server:', error);
            process.exit(1);
         }
      });
      
      process.on('SIGTERM', async () => {
         console.log('\n🛑 Received SIGTERM, shutting down TaskMaster WebSocket server...');
         try {
            await server.stop();
            console.log('✅ TaskMaster WebSocket server stopped successfully');
            process.exit(0);
         } catch (error) {
            console.error('❌ Error stopping server:', error);
            process.exit(1);
         }
      });
      
   } catch (error) {
      console.error('❌ Failed to start TaskMaster WebSocket server:', error);
      process.exit(1);
   }
}

startServer();