import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
   getWebSocketServer,
   startWebSocketServer,
   stopWebSocketServer,
} from '../../../../../server/terminal-server';
import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';

// Helper function to check file existence
function checkFileExists(filePath: string): boolean {
   try {
      return fs.existsSync(filePath);
   } catch {
      return false;
   }
}

// Helper function to get system information
function getSystemInfo() {
   return {
      platform: os.platform(),
      arch: os.arch(),
      nodeVersion: process.version,
      cwd: process.cwd(),
      uptime: process.uptime(),
      memory: {
         used: process.memoryUsage(),
         total: os.totalmem(),
         free: os.freemem(),
      },
      cpus: os.cpus().length,
      loadAverage: os.loadavg(),
   };
}

// Helper function to check TaskMaster files
function getTaskMasterFileStatus() {
   const taskMasterDir = path.join(process.cwd(), '.taskmaster');
   const tasksFile = path.join(taskMasterDir, 'tasks', 'tasks.json');
   const taskManagerFile = path.join(process.cwd(), 'taskmanager.json');

   return {
      taskMasterDirectory: {
         path: taskMasterDir,
         exists: checkFileExists(taskMasterDir),
      },
      tasksFile: {
         path: tasksFile,
         exists: checkFileExists(tasksFile),
         size: checkFileExists(tasksFile) ? fs.statSync(tasksFile).size : 0,
      },
      taskManagerFile: {
         path: taskManagerFile,
         exists: checkFileExists(taskManagerFile),
         size: checkFileExists(taskManagerFile) ? fs.statSync(taskManagerFile).size : 0,
      },
   };
}

// GET: Comprehensive server status and health check
export async function GET(_request: NextRequest): Promise<NextResponse> {
   try {
      const server = getWebSocketServer();
      const isRunning = server.isRunning();

      let serverStatus = null;
      let healthScore = 0;
      const healthIssues: string[] = [];

      if (isRunning) {
         serverStatus = server.getStatus();
         healthScore += 40; // Base score for running server

         // Check connections
         if (serverStatus.connections.total > 0) {
            healthScore += 20;
         }

         // Check file watcher
         if (serverStatus.fileWatcher.active) {
            healthScore += 20;
            if (serverStatus.fileWatcher.watchedFiles.length > 0) {
               healthScore += 10;
            }
         } else {
            healthIssues.push('File watcher is not active');
         }

         // Check uptime
         if (serverStatus.uptime > 10000) {
            // 10 seconds
            healthScore += 10;
         }
      } else {
         healthIssues.push('WebSocket server is not running');
      }

      const systemInfo = getSystemInfo();
      const taskMasterFiles = getTaskMasterFileStatus();

      // Check TaskMaster files
      if (taskMasterFiles.tasksFile.exists || taskMasterFiles.taskManagerFile.exists) {
         healthScore += 10;
      } else {
         healthIssues.push('No TaskMaster files found');
      }

      // Determine overall health status
      let healthStatus: 'healthy' | 'warning' | 'unhealthy';
      if (healthScore >= 80) {
         healthStatus = 'healthy';
      } else if (healthScore >= 50) {
         healthStatus = 'warning';
      } else {
         healthStatus = 'unhealthy';
      }

      const response = {
         status: healthStatus,
         healthScore,
         healthIssues,
         server: {
            isRunning,
            ...serverStatus,
         },
         system: systemInfo,
         taskMaster: taskMasterFiles,
         endpoints:
            isRunning && serverStatus
               ? {
                    terminal: `ws://localhost:${serverStatus.port}?type=terminal`,
                    sync: `ws://localhost:${serverStatus.port}?type=sync`,
                    api: {
                       terminal: '/api/terminal',
                       sync: '/api/sync',
                       syncClients: '/api/sync/clients',
                       status: '/api/websocket/status',
                    },
                 }
               : null,
         timestamp: Date.now(),
      };

      const httpStatus = healthStatus === 'healthy' ? 200 : healthStatus === 'warning' ? 200 : 503;

      return NextResponse.json(response, { status: httpStatus });
   } catch (error) {
      console.error('Error getting server status:', error);
      return NextResponse.json(
         {
            status: 'unhealthy',
            healthScore: 0,
            healthIssues: ['Failed to get server status'],
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: Date.now(),
         },
         { status: 500 }
      );
   }
}

// POST: Server control operations
export async function POST(request: NextRequest): Promise<NextResponse> {
   try {
      const body = await request.json();
      const { action, config } = body;

      switch (action) {
         case 'start':
            try {
               const server = await startWebSocketServer();
               const status = server.getStatus();

               return NextResponse.json({
                  message: 'WebSocket server started successfully',
                  server: status,
                  endpoints: {
                     terminal: `ws://localhost:${status.port}?type=terminal`,
                     sync: `ws://localhost:${status.port}?type=sync`,
                  },
                  timestamp: Date.now(),
               });
            } catch (error) {
               return NextResponse.json(
                  {
                     error: 'Failed to start WebSocket server',
                     message: error instanceof Error ? error.message : 'Unknown error',
                     timestamp: Date.now(),
                  },
                  { status: 500 }
               );
            }

         case 'stop':
            try {
               await stopWebSocketServer();

               return NextResponse.json({
                  message: 'WebSocket server stopped successfully',
                  timestamp: Date.now(),
               });
            } catch (error) {
               return NextResponse.json(
                  {
                     error: 'Failed to stop WebSocket server',
                     message: error instanceof Error ? error.message : 'Unknown error',
                     timestamp: Date.now(),
                  },
                  { status: 500 }
               );
            }

         case 'restart':
            try {
               console.log('Restarting WebSocket server...');

               // Stop if running
               const server = getWebSocketServer();
               if (server.isRunning()) {
                  await stopWebSocketServer();
                  // Small delay to ensure clean shutdown
                  await new Promise((resolve) => setTimeout(resolve, 1000));
               }

               // Start with new config if provided
               const newServer = await startWebSocketServer();
               const status = newServer.getStatus();

               return NextResponse.json({
                  message: 'WebSocket server restarted successfully',
                  server: status,
                  config: config || 'default configuration',
                  endpoints: {
                     terminal: `ws://localhost:${status.port}?type=terminal`,
                     sync: `ws://localhost:${status.port}?type=sync`,
                  },
                  timestamp: Date.now(),
               });
            } catch (error) {
               return NextResponse.json(
                  {
                     error: 'Failed to restart WebSocket server',
                     message: error instanceof Error ? error.message : 'Unknown error',
                     timestamp: Date.now(),
                  },
                  { status: 500 }
               );
            }

         case 'health-check':
            // Perform comprehensive health check
            const server = getWebSocketServer();
            const isRunning = server.isRunning();

            if (!isRunning) {
               return NextResponse.json(
                  {
                     status: 'unhealthy',
                     message: 'Server is not running',
                     timestamp: Date.now(),
                  },
                  { status: 503 }
               );
            }

            const status = server.getStatus();
            const taskMasterFiles = getTaskMasterFileStatus();

            const healthChecks = {
               serverRunning: isRunning,
               hasConnections: status.connections.total > 0,
               fileWatcherActive: status.fileWatcher.active,
               taskMasterFilesPresent:
                  taskMasterFiles.tasksFile.exists || taskMasterFiles.taskManagerFile.exists,
               memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024 < 500, // Less than 500MB
            };

            const healthScore = Object.values(healthChecks).filter(Boolean).length;
            const maxScore = Object.keys(healthChecks).length;

            return NextResponse.json({
               status:
                  healthScore >= maxScore * 0.8
                     ? 'healthy'
                     : healthScore >= maxScore * 0.6
                       ? 'warning'
                       : 'unhealthy',
               healthScore: `${healthScore}/${maxScore}`,
               checks: healthChecks,
               server: status,
               timestamp: Date.now(),
            });

         default:
            return NextResponse.json(
               {
                  error: 'Invalid action',
                  availableActions: ['start', 'stop', 'restart', 'health-check'],
               },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('Error in server control POST:', error);
      return NextResponse.json(
         {
            error: 'Request processing failed',
            message: error instanceof Error ? error.message : 'Unknown error',
            timestamp: Date.now(),
         },
         { status: 500 }
      );
   }
}
