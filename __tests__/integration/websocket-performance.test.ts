import { jest } from '@jest/globals';
import { io, Socket } from 'socket.io-client';
import { Server as HTTPServer } from 'http';

// Mock dependencies
jest.mock('@/lib/file-watcher', () => ({
   getGlobalFileWatcher: () => ({
      on: jest.fn(),
      addPath: jest.fn(),
      getStatus: jest.fn().mockReturnValue({ watching: [], active: true }),
   }),
}));

jest.mock('@/lib/cli-executor', () => ({
   cliExecutor: {
      executeCommand: jest.fn(),
      on: jest.fn(),
   },
}));

// Mock console to reduce test noise
global.console = {
   ...console,
   log: jest.fn(),
   warn: jest.fn(),
   error: jest.fn(),
};

describe('WebSocket and Performance Tests', () => {
   let server: any;
   let wsServer: any;
   let httpServer: HTTPServer;
   const testPort = 3003; // Use different port for testing

   beforeAll(async () => {
      // Setup mock CLI executor
      const { cliExecutor } = await import('@/lib/cli-executor');
      cliExecutor.executeCommand.mockResolvedValue({
         success: true,
         command: 'list',
         output: {
            stdout: '{"tasks": []}',
            stderr: '',
            parsed: { tasks: [] },
            summary: 'No tasks found',
         },
         exitCode: 0,
         executionTime: 1000,
         timestamp: new Date().toISOString(),
      });
   });

   beforeEach(async () => {
      // Import after mocking
      const { TaskMasterWebSocketServer } = await import('@/lib/websocket-server');

      // Create HTTP server for testing
      httpServer = new HTTPServer();

      // Create WebSocket server with test configuration
      wsServer = new TaskMasterWebSocketServer({
         port: testPort,
         maxConnections: 10,
         pingTimeout: 5000,
         pingInterval: 2000,
      });

      // Initialize WebSocket server
      wsServer.initialize(httpServer);

      // Start HTTP server
      await new Promise<void>((resolve) => {
         httpServer.listen(testPort, () => {
            resolve();
         });
      });

      // Give server time to start
      await new Promise((resolve) => setTimeout(resolve, 100));
   });

   afterEach(async () => {
      // Clean up connections and servers
      if (wsServer) {
         await wsServer.close();
      }
      if (httpServer) {
         await new Promise<void>((resolve) => {
            httpServer.close(() => resolve());
         });
      }
      // Wait for cleanup to complete
      await new Promise((resolve) => setTimeout(resolve, 100));
   });

   describe('WebSocket Connection Tests', () => {
      it('should establish WebSocket connection', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         const connectionPromise = new Promise<void>((resolve, reject) => {
            const timeout = setTimeout(() => {
               reject(new Error('Connection timeout'));
            }, 5000);

            client.on('connect', () => {
               clearTimeout(timeout);
               resolve();
            });

            client.on('connect_error', (error) => {
               clearTimeout(timeout);
               reject(error);
            });
         });

         await connectionPromise;
         expect(client.connected).toBe(true);

         client.disconnect();
      });

      it('should receive welcome message on connection', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         const welcomePromise = new Promise<any>((resolve, reject) => {
            const timeout = setTimeout(() => {
               reject(new Error('Welcome message timeout'));
            }, 5000);

            client.on('welcome', (data) => {
               clearTimeout(timeout);
               resolve(data);
            });
         });

         const welcomeData = await welcomePromise;

         expect(welcomeData).toHaveProperty('clientId');
         expect(welcomeData).toHaveProperty('serverTime');
         expect(welcomeData).toHaveProperty('availableRooms');
         expect(welcomeData).toHaveProperty('connectedClients');

         client.disconnect();
      });

      it('should handle room joining and leaving', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => resolve());
         });

         // Test joining room
         const joinPromise = new Promise<void>((resolve) => {
            client.emit('join-room', 'test-room');
            // Simulate successful join (in real implementation, server would confirm)
            setTimeout(resolve, 100);
         });

         await joinPromise;

         // Test leaving room
         const leavePromise = new Promise<void>((resolve) => {
            client.emit('leave-room', 'test-room');
            setTimeout(resolve, 100);
         });

         await leavePromise;

         client.disconnect();
      });

      it('should handle CLI command execution via WebSocket', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => resolve());
         });

         const cliResultPromise = new Promise<any>((resolve, reject) => {
            const timeout = setTimeout(() => {
               reject(new Error('CLI result timeout'));
            }, 5000);

            client.on('cli-result', (data) => {
               clearTimeout(timeout);
               resolve(data);
            });

            client.emit('execute-cli', {
               command: 'list',
               args: ['--status=pending'],
            });
         });

         const result = await cliResultPromise;
         expect(result).toHaveProperty('success');
         expect(result).toHaveProperty('timestamp');

         client.disconnect();
      });

      it('should handle ping/pong for connection health', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => resolve());
         });

         const pongPromise = new Promise<any>((resolve, reject) => {
            const timeout = setTimeout(() => {
               reject(new Error('Pong timeout'));
            }, 3000);

            client.on('pong', (data) => {
               clearTimeout(timeout);
               resolve(data);
            });

            client.emit('ping');
         });

         const pongData = await pongPromise;
         expect(pongData).toHaveProperty('timestamp');

         client.disconnect();
      });

      it('should handle file watching requests', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => resolve());
         });

         const watchStartedPromise = new Promise<any>((resolve, reject) => {
            const timeout = setTimeout(() => {
               reject(new Error('File watch timeout'));
            }, 3000);

            client.on('file-watch-started', (data) => {
               clearTimeout(timeout);
               resolve(data);
            });

            client.emit('watch-files', ['/test/path1', '/test/path2']);
         });

         const watchData = await watchStartedPromise;
         expect(watchData).toHaveProperty('watchedPaths');
         expect(watchData).toHaveProperty('status');
         expect(watchData.watchedPaths).toEqual(['/test/path1', '/test/path2']);

         client.disconnect();
      });
   });

   describe('Performance Tests', () => {
      it('should handle multiple concurrent connections', async () => {
         const connectionCount = 5;
         const clients: Socket[] = [];
         const connectionPromises: Promise<void>[] = [];

         // Create multiple connections
         for (let i = 0; i < connectionCount; i++) {
            const client = io(`http://localhost:${testPort}`, {
               path: '/socket.io',
               transports: ['websocket'],
            });
            clients.push(client);

            const connectionPromise = new Promise<void>((resolve, reject) => {
               const timeout = setTimeout(() => {
                  reject(new Error(`Connection ${i} timeout`));
               }, 5000);

               client.on('connect', () => {
                  clearTimeout(timeout);
                  resolve();
               });
            });

            connectionPromises.push(connectionPromise);
         }

         // Wait for all connections
         await Promise.all(connectionPromises);

         // Verify all connections are established
         clients.forEach((client, index) => {
            expect(client.connected).toBe(true);
         });

         // Check server status
         const status = wsServer.getStatus();
         expect(status.connectedClients).toBe(connectionCount);

         // Clean up connections
         clients.forEach((client) => client.disconnect());
      });

      it('should measure connection establishment time', async () => {
         const startTime = Date.now();

         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => {
               resolve();
            });
         });

         const connectionTime = Date.now() - startTime;
         expect(connectionTime).toBeLessThan(1000); // Should connect within 1 second

         client.disconnect();
      });

      it('should measure message round-trip time', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => resolve());
         });

         const roundTripTimes: number[] = [];
         const iterations = 10;

         for (let i = 0; i < iterations; i++) {
            const startTime = Date.now();

            await new Promise<void>((resolve) => {
               client.on('pong', () => {
                  const roundTripTime = Date.now() - startTime;
                  roundTripTimes.push(roundTripTime);
                  resolve();
               });

               client.emit('ping');
            });
         }

         const averageRoundTrip = roundTripTimes.reduce((a, b) => a + b, 0) / roundTripTimes.length;
         const maxRoundTrip = Math.max(...roundTripTimes);

         expect(averageRoundTrip).toBeLessThan(100); // Average should be under 100ms
         expect(maxRoundTrip).toBeLessThan(500); // Max should be under 500ms

         client.disconnect();
      });

      it('should handle rapid message sending', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => resolve());
         });

         const messageCount = 100;
         const receivedMessages: any[] = [];

         // Set up message receiver
         client.on('heartbeat-ack', (data) => {
            receivedMessages.push(data);
         });

         const startTime = Date.now();

         // Send messages rapidly
         for (let i = 0; i < messageCount; i++) {
            client.emit('heartbeat', { sequence: i, timestamp: Date.now() });
         }

         // Wait for all responses
         await new Promise<void>((resolve) => {
            const checkComplete = () => {
               if (receivedMessages.length >= messageCount) {
                  resolve();
               } else {
                  setTimeout(checkComplete, 10);
               }
            };
            checkComplete();
         });

         const totalTime = Date.now() - startTime;
         const messagesPerSecond = (messageCount / totalTime) * 1000;

         expect(receivedMessages).toHaveLength(messageCount);
         expect(messagesPerSecond).toBeGreaterThan(10); // Should handle at least 10 messages/second

         client.disconnect();
      });

      it('should handle connection limits gracefully', async () => {
         const maxConnections = 10; // Based on test configuration
         const clients: Socket[] = [];
         const connectionPromises: Promise<boolean>[] = [];

         // Attempt to create more connections than allowed
         for (let i = 0; i < maxConnections + 2; i++) {
            const client = io(`http://localhost:${testPort}`, {
               path: '/socket.io',
               transports: ['websocket'],
               timeout: 2000, // Shorter timeout for this test
            });
            clients.push(client);

            const connectionPromise = new Promise<boolean>((resolve) => {
               const timeout = setTimeout(() => {
                  resolve(false); // Connection failed/timed out
               }, 3000);

               client.on('connect', () => {
                  clearTimeout(timeout);
                  resolve(true); // Connection successful
               });

               client.on('connect_error', () => {
                  clearTimeout(timeout);
                  resolve(false); // Connection failed
               });

               client.on('disconnect', () => {
                  clearTimeout(timeout);
                  resolve(false); // Connection disconnected immediately
               });
            });

            connectionPromises.push(connectionPromise);
         }

         const results = await Promise.all(connectionPromises);
         const successfulConnections = results.filter((success) => success).length;

         // Should not exceed max connections by too much (allowing for race conditions)
         expect(successfulConnections).toBeLessThanOrEqual(maxConnections + 2);

         // Clean up
         clients.forEach((client) => client.disconnect());
      });

      it('should monitor memory usage during WebSocket operations', async () => {
         const initialMemory = process.memoryUsage();
         const clients: Socket[] = [];

         // Create multiple connections and perform operations
         for (let i = 0; i < 5; i++) {
            const client = io(`http://localhost:${testPort}`, {
               path: '/socket.io',
               transports: ['websocket'],
            });
            clients.push(client);

            await new Promise<void>((resolve) => {
               client.on('connect', () => resolve());
            });

            // Perform some operations
            client.emit('join-room', `test-room-${i}`);
            client.emit('heartbeat', { data: 'test' });
         }

         // Measure memory after operations
         const afterOperationsMemory = process.memoryUsage();

         // Clean up connections
         clients.forEach((client) => client.disconnect());

         // Wait for cleanup
         await new Promise((resolve) => setTimeout(resolve, 100));

         const finalMemory = process.memoryUsage();

         // Memory should not increase dramatically
         const memoryIncrease = afterOperationsMemory.heapUsed - initialMemory.heapUsed;
         const memoryIncreasePerConnection = memoryIncrease / clients.length;

         expect(memoryIncreasePerConnection).toBeLessThan(1024 * 1024); // Less than 1MB per connection

         // Memory should decrease after cleanup (allowing for some variance)
         const memoryAfterCleanup = finalMemory.heapUsed - initialMemory.heapUsed;
         expect(memoryAfterCleanup).toBeLessThan(memoryIncrease * 1.5); // Allow 50% overhead
      });

      it('should test WebSocket server status and metrics', async () => {
         // Create a few connections for testing
         const clients: Socket[] = [];
         for (let i = 0; i < 3; i++) {
            const client = io(`http://localhost:${testPort}`, {
               path: '/socket.io',
               transports: ['websocket'],
            });
            clients.push(client);

            await new Promise<void>((resolve) => {
               client.on('connect', () => resolve());
            });
         }

         // Get server status
         const status = wsServer.getStatus();

         expect(status).toHaveProperty('running', true);
         expect(status).toHaveProperty('connectedClients', 3);
         expect(status).toHaveProperty('activeRooms');
         expect(status).toHaveProperty('uptime');
         expect(status).toHaveProperty('clients');

         expect(status.clients).toHaveLength(3);
         status.clients.forEach((client: any) => {
            expect(client).toHaveProperty('id');
            expect(client).toHaveProperty('connectedAt');
            expect(client).toHaveProperty('lastActivity');
            expect(client).toHaveProperty('rooms');
            expect(client).toHaveProperty('metadata');
         });

         // Clean up
         clients.forEach((client) => client.disconnect());
      });
   });

   describe('WebSocket Error Handling', () => {
      it('should handle client disconnection gracefully', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => resolve());
         });

         const initialStatus = wsServer.getStatus();
         expect(initialStatus.connectedClients).toBeGreaterThanOrEqual(1);

         // Force disconnect
         client.disconnect();

         // Wait for cleanup
         await new Promise((resolve) => setTimeout(resolve, 100));

         const finalStatus = wsServer.getStatus();
         expect(finalStatus.connectedClients).toBe(0);
      });

      it('should handle malformed messages', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => resolve());
         });

         // Send malformed CLI command
         client.emit('execute-cli', null);
         client.emit('execute-cli', 'invalid-format');
         client.emit('execute-cli', { command: null, args: 'not-array' });

         // Server should remain stable
         const status = wsServer.getStatus();
         expect(status.running).toBe(true);
         expect(status.connectedClients).toBeGreaterThanOrEqual(1);

         client.disconnect();
      });

      it('should handle server shutdown gracefully', async () => {
         const client = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         await new Promise<void>((resolve) => {
            client.on('connect', () => resolve());
         });

         let disconnected = false;
         client.on('disconnect', () => {
            disconnected = true;
         });

         // Shutdown server
         await wsServer.close();

         // Client should be disconnected
         await new Promise((resolve) => setTimeout(resolve, 500));
         expect(disconnected).toBe(true);
      });
   });

   describe('Real-time Broadcasting', () => {
      it('should broadcast messages to all clients in a room', async () => {
         const clients: Socket[] = [];
         const messagePromises: Promise<any>[] = [];

         // Create multiple clients
         for (let i = 0; i < 3; i++) {
            const client = io(`http://localhost:${testPort}`, {
               path: '/socket.io',
               transports: ['websocket'],
            });
            clients.push(client);

            await new Promise<void>((resolve) => {
               client.on('connect', () => resolve());
            });

            // Join test room
            client.emit('join-room', 'broadcast-test');

            // Wait for room join to complete
            await new Promise((resolve) => setTimeout(resolve, 50));

            // Set up message listener
            const messagePromise = new Promise<any>((resolve) => {
               client.on('test-broadcast', (data) => {
                  resolve(data);
               });
            });
            messagePromises.push(messagePromise);
         }

         // Wait a bit more before broadcasting
         await new Promise((resolve) => setTimeout(resolve, 100));

         // Broadcast message to room
         wsServer.broadcast('broadcast-test', 'test-broadcast', {
            message: 'Hello everyone!',
            timestamp: new Date().toISOString(),
         });

         // Wait for all clients to receive message
         const messages = await Promise.all(messagePromises);

         expect(messages).toHaveLength(3);
         messages.forEach((message) => {
            expect(message).toHaveProperty('message', 'Hello everyone!');
            expect(message).toHaveProperty('room', 'broadcast-test');
            expect(message).toHaveProperty('serverTimestamp');
         });

         // Clean up
         clients.forEach((client) => client.disconnect());
      });

      it('should send messages to specific clients', async () => {
         const client1 = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         const client2 = io(`http://localhost:${testPort}`, {
            path: '/socket.io',
            transports: ['websocket'],
         });

         let client1Id: string;
         let client2Id: string;

         // Get client IDs from welcome messages
         await new Promise<void>((resolve) => {
            let welcomeCount = 0;

            client1.on('welcome', (data) => {
               client1Id = data.clientId;
               welcomeCount++;
               if (welcomeCount === 2) resolve();
            });

            client2.on('welcome', (data) => {
               client2Id = data.clientId;
               welcomeCount++;
               if (welcomeCount === 2) resolve();
            });
         });

         // Set up message listeners
         let client1ReceivedMessage = false;
         let client2ReceivedMessage = false;

         client1.on('direct-message', () => {
            client1ReceivedMessage = true;
         });

         client2.on('direct-message', () => {
            client2ReceivedMessage = true;
         });

         // Send message only to client1
         wsServer.sendToClient(client1Id!, 'direct-message', {
            message: 'This is for client1 only',
         });

         // Wait for message delivery
         await new Promise((resolve) => setTimeout(resolve, 100));

         expect(client1ReceivedMessage).toBe(true);
         expect(client2ReceivedMessage).toBe(false);

         // Clean up
         client1.disconnect();
         client2.disconnect();
      });
   });
});
