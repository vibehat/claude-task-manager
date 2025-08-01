#!/usr/bin/env node

/**
 * Start script for the unified WebSocket server
 * This can be used in development or production
 */

const { spawn } = require('child_process');
const path = require('path');

// Check if running directly or through npm/pnpm
const isDirectExecution = require.main === module;

// Server file path
const serverPath = path.join(__dirname, '..', 'server', 'server.ts');

// Determine the command based on environment
const isProduction = process.env.NODE_ENV === 'production';
const command = isProduction ? 'node' : 'tsx';
const args = isProduction ? [serverPath] : ['watch', serverPath];

console.log(`Starting unified server in ${isProduction ? 'production' : 'development'} mode...`);
console.log(`Command: ${command} ${args.join(' ')}`);

// Spawn the server process
const serverProcess = spawn(command, args, {
   stdio: 'inherit',
   env: {
      ...process.env,
      NODE_ENV: process.env.NODE_ENV || 'development',
      PORT: process.env.PORT || '3000'
   },
   shell: true
});

// Handle process events
serverProcess.on('error', (error) => {
   console.error('Failed to start server:', error);
   process.exit(1);
});

serverProcess.on('exit', (code) => {
   if (code !== 0 && code !== null) {
      console.error(`Server process exited with code ${code}`);
      process.exit(code);
   }
});

// Forward signals to the server process
['SIGINT', 'SIGTERM', 'SIGHUP'].forEach(signal => {
   process.on(signal, () => {
      console.log(`Received ${signal}, forwarding to server process...`);
      serverProcess.kill(signal);
   });
});

// Keep the script running
if (isDirectExecution) {
   console.log('Unified server is running. Press Ctrl+C to stop.');
}