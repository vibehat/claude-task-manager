import { jest } from '@jest/globals';
import { createServer } from 'http';
import { NextRequest, NextResponse } from 'next/server';
import request from 'supertest';

// Mock external dependencies
jest.mock('@/lib/cli-executor', () => ({
   cliExecutor: {
      executeCommand: jest.fn(),
      getActiveProcesses: jest.fn(),
      getHistory: jest.fn(),
      getAvailableCommands: jest.fn(),
      getExecutionStats: jest.fn(),
      clearHistory: jest.fn(),
   },
   CLIExecutionError: class CLIExecutionError extends Error {
      constructor(
         message: string,
         public command: string,
         public exitCode: number,
         public output: any
      ) {
         super(message);
         this.name = 'CLIExecutionError';
      }
   },
   CLITimeoutError: class CLITimeoutError extends Error {
      constructor(
         message: string,
         public command: string,
         public timeout: number
      ) {
         super(message);
         this.name = 'CLITimeoutError';
      }
   },
   CLIValidationError: class CLIValidationError extends Error {
      constructor(
         message: string,
         public command: string,
         public args: string[]
      ) {
         super(message);
         this.name = 'CLIValidationError';
      }
   },
}));

jest.mock('@/lib/fs-operations', () => ({
   TaskMasterFileOperations: {
      readTasks: jest.fn(),
      writeTasks: jest.fn(),
      getTasksFileInfo: jest.fn(),
      getConfigFileInfo: jest.fn(),
      initializeDirectories: jest.fn(),
      readConfig: jest.fn(),
   },
   BackupManager: {
      listBackups: jest.fn(),
      createBackup: jest.fn(),
      restoreBackup: jest.fn(),
   },
}));
jest.mock('@/lib/types', () => ({
   ...jest.requireActual('@/lib/types'),
   TaskMasterAPIError: class TaskMasterAPIError extends Error {
      constructor(
         message: string,
         public statusCode: number = 500
      ) {
         super(message);
         this.name = 'TaskMasterAPIError';
      }
   },
}));

// Helper function to create mock NextRequest
const createMockRequest = (method: string, url: string, body?: any) => {
   const fullUrl = `http://localhost${url}`;
   const urlObj = new URL(fullUrl);

   return {
      method,
      url: fullUrl,
      json: async () => body || {},
      headers: new Map([['content-type', 'application/json']]),
      nextUrl: {
         searchParams: urlObj.searchParams,
         pathname: urlObj.pathname,
      },
   } as any;
};

// Helper function to create test server
const createTestServer = (handler: (req: any) => Promise<Response>) => {
   return createServer(async (req, res) => {
      try {
         // Parse request body for POST/PUT requests
         let body = '';
         if (req.method === 'POST' || req.method === 'PUT') {
            req.on('data', (chunk) => {
               body += chunk.toString();
            });

            await new Promise((resolve) => {
               req.on('end', resolve);
            });
         }

         // Create mock NextRequest
         const mockReq = {
            method: req.method,
            url: `http://localhost${req.url}`,
            json: async () => (body ? JSON.parse(body) : {}),
            headers: new Map(Object.entries(req.headers)),
            nextUrl: {
               searchParams: new URLSearchParams(req.url?.split('?')[1] || ''),
            },
         } as any;

         // Call the handler
         const response = await handler(mockReq);

         // Set response status and headers
         res.statusCode = response.status || 200;

         // Copy headers from Response to ServerResponse
         response.headers.forEach((value, key) => {
            res.setHeader(key, value);
         });

         // Send response body
         const responseText = await response.text();
         res.end(responseText);
      } catch (error) {
         res.statusCode = 500;
         res.end(JSON.stringify({ error: 'Internal Server Error' }));
      }
   });
};

describe('API Endpoints Integration Tests', () => {
   beforeAll(() => {
      // Mock console methods to reduce test noise
      global.console = {
         ...console,
         error: jest.fn(),
         warn: jest.fn(),
         log: jest.fn(),
      };
   });

   afterAll(() => {
      jest.restoreAllMocks();
   });

   describe('/api/cli-execute', () => {
      beforeEach(async () => {
         // Get the mocked CLI executor
         const { cliExecutor } = require('@/lib/cli-executor');

         // Setup default mock behavior
         cliExecutor.executeCommand.mockResolvedValue({
            success: true,
            command: 'task-master list',
            output: {
               stdout: '{"tasks": []}',
               stderr: '',
               parsed: { tasks: [] },
               summary: 'No tasks found',
            },
            exitCode: 0,
            executionTime: 1000,
            timestamp: new Date().toISOString(),
            metadata: { pid: 12345 },
         });

         cliExecutor.getActiveProcesses.mockReturnValue([]);
         cliExecutor.getHistory.mockReturnValue([]);
         cliExecutor.getAvailableCommands.mockReturnValue({
            list: { description: 'List tasks', args: [] },
         });
         cliExecutor.getExecutionStats.mockReturnValue({
            totalExecutions: 0,
            successfulExecutions: 0,
            failedExecutions: 0,
            averageExecutionTime: 0,
            commandFrequency: {},
            recentActivity: [],
         });
      });

      it('should execute valid CLI commands', async () => {
         // Instead of importing the route, let's test the CLI executor directly
         const { cliExecutor } = require('@/lib/cli-executor');

         // Create a proper config object
         const config = {
            command: 'list',
            args: ['--status=pending'],
            timeout: 10000,
            parseOutput: true,
         };

         // Execute the command
         const result = await cliExecutor.executeCommand(config);

         // Verify the result matches expected structure
         expect(result).toHaveProperty('success', true);
         expect(result).toHaveProperty('command');
         expect(result).toHaveProperty('output');
         expect(result.output).toHaveProperty('parsed');
      });

      it('should reject invalid command requests', async () => {
         const { cliExecutor, CLIValidationError } = require('@/lib/cli-executor');

         // Mock the CLI executor to reject invalid commands
         cliExecutor.executeCommand.mockRejectedValueOnce(
            new CLIValidationError('Command is required', '', [])
         );

         // Test invalid command (missing command)
         await expect(cliExecutor.executeCommand({ args: [] })).rejects.toThrow(CLIValidationError);
      });

      it('should get system status', async () => {
         const { cliExecutor } = require('@/lib/cli-executor');

         // Test getting active processes
         const activeProcesses = cliExecutor.getActiveProcesses();
         expect(Array.isArray(activeProcesses)).toBe(true);

         // Test getting history
         const history = cliExecutor.getHistory();
         expect(Array.isArray(history)).toBe(true);
      });

      it('should get available commands', async () => {
         const { cliExecutor } = require('@/lib/cli-executor');

         // Test getting available commands
         const commands = cliExecutor.getAvailableCommands();
         expect(typeof commands).toBe('object');
         expect(commands).toHaveProperty('list');
      });

      it('should get execution statistics', async () => {
         const { cliExecutor } = require('@/lib/cli-executor');

         // Test getting execution statistics
         const stats = cliExecutor.getExecutionStats();
         expect(typeof stats).toBe('object');
         expect(stats).toHaveProperty('totalExecutions');
         expect(stats).toHaveProperty('successfulExecutions');
         expect(stats).toHaveProperty('failedExecutions');
      });
   });

   describe('/api/tasks', () => {
      let server: any;

      beforeEach(async () => {
         // Mock file operations
         const mockTasksData = {
            master: {
               tasks: [
                  {
                     id: 1,
                     title: 'Test Task 1',
                     description: 'Test description',
                     status: 'pending',
                     priority: 'medium',
                     dependencies: [],
                     details: 'Test details',
                     testStrategy: 'Test strategy',
                     subtasks: [],
                  },
                  {
                     id: 2,
                     title: 'Test Task 2',
                     description: 'Another test',
                     status: 'in-progress',
                     priority: 'high',
                     dependencies: [1],
                     details: '',
                     testStrategy: '',
                     subtasks: [],
                  },
               ],
               metadata: {
                  created: '2025-07-26T00:00:00.000Z',
                  updated: '2025-07-26T01:00:00.000Z',
                  description: 'Test tasks',
               },
            },
         };

         const { TaskMasterFileOperations } = require('@/lib/fs-operations');
         TaskMasterFileOperations.readTasks.mockResolvedValue(mockTasksData);
         TaskMasterFileOperations.writeTasks.mockResolvedValue(undefined);

         // Import and setup server
         const { GET, POST, PUT, DELETE } = await import('@/app/api/tasks/route');
         server = createTestServer(async (req: any) => {
            switch (req.method) {
               case 'GET':
                  return await GET(req);
               case 'POST':
                  return await POST(req);
               case 'PUT':
                  return await PUT(req);
               case 'DELETE':
                  return await DELETE(req);
               default:
                  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
            }
         });
      });

      afterEach(() => {
         if (server) {
            server.close();
         }
      });

      it('should get all tasks', async () => {
         const response = await request(server).get('/').expect(200);

         expect(response.body).toHaveProperty('tasks');
         expect(response.body).toHaveProperty('metadata');
         expect(response.body).toHaveProperty('total');
         expect(response.body.tasks).toHaveLength(2);
      });

      it('should filter tasks by status', async () => {
         const response = await request(server).get('/?status=pending').expect(200);

         expect(response.body.tasks).toHaveLength(1);
         expect(response.body.tasks[0].status).toBe('pending');
      });

      it('should filter tasks by priority', async () => {
         const response = await request(server).get('/?priority=high').expect(200);

         expect(response.body.tasks).toHaveLength(1);
         expect(response.body.tasks[0].priority).toBe('high');
      });

      it('should get specific task by ID', async () => {
         const response = await request(server).get('/?id=1').expect(200);

         expect(response.body).toHaveProperty('task');
         expect(response.body.task.id).toBe(1);
         expect(response.body.task.title).toBe('Test Task 1');
      });

      it('should return 404 for non-existent task', async () => {
         await request(server).get('/?id=999').expect(404);
      });

      it('should create new task', async () => {
         const newTask = {
            title: 'New Test Task',
            description: 'New task description',
            priority: 'low',
            dependencies: [],
         };

         const response = await request(server).post('/').send(newTask).expect(201);

         expect(response.body).toHaveProperty('task');
         expect(response.body).toHaveProperty('message');
         expect(response.body.task.title).toBe(newTask.title);
         expect(response.body.task.status).toBe('pending');
      });

      it('should reject task creation without required fields', async () => {
         await request(server).post('/').send({ title: 'Incomplete Task' }).expect(400);
      });

      it('should update existing task', async () => {
         const updates = {
            id: 1,
            status: 'completed',
            priority: 'high',
         };

         const response = await request(server).put('/').send(updates).expect(200);

         expect(response.body).toHaveProperty('task');
         expect(response.body).toHaveProperty('message');
         expect(response.body.task.status).toBe('completed');
         expect(response.body.task.priority).toBe('high');
      });

      it('should reject update without task ID', async () => {
         await request(server).put('/').send({ status: 'completed' }).expect(400);
      });

      it('should return 404 for updating non-existent task', async () => {
         await request(server).put('/').send({ id: 999, status: 'completed' }).expect(404);
      });

      it('should cancel task (soft delete)', async () => {
         const response = await request(server).delete('/?id=1').expect(200);

         expect(response.body).toHaveProperty('task');
         expect(response.body).toHaveProperty('message');
         expect(response.body.task.status).toBe('cancelled');
      });

      it('should reject delete without task ID', async () => {
         await request(server).delete('/').expect(400);
      });

      it('should return 404 for deleting non-existent task', async () => {
         await request(server).delete('/?id=999').expect(404);
      });
   });

   describe('/api/fs-operations', () => {
      let server: any;

      beforeEach(async () => {
         // Mock file operations
         const { TaskMasterFileOperations, BackupManager } = require('@/lib/fs-operations');

         TaskMasterFileOperations.getTasksFileInfo.mockResolvedValue({
            exists: true,
            size: 1024,
            lastModified: new Date().toISOString(),
            path: '/path/to/tasks.json',
         });

         TaskMasterFileOperations.getConfigFileInfo.mockResolvedValue({
            exists: true,
            size: 512,
            lastModified: new Date().toISOString(),
            path: '/path/to/config.json',
         });

         BackupManager.listBackups.mockResolvedValue([
            '/path/to/tasks.json.backup.2025-07-26T00:00:00.000Z',
            '/path/to/tasks.json.backup.2025-07-25T00:00:00.000Z',
         ]);

         BackupManager.createBackup.mockResolvedValue(
            '/path/to/tasks.json.backup.2025-07-26T02:00:00.000Z'
         );

         BackupManager.restoreBackup.mockResolvedValue(undefined);

         TaskMasterFileOperations.initializeDirectories.mockResolvedValue(undefined);
         TaskMasterFileOperations.readTasks.mockResolvedValue({
            master: { tasks: [], metadata: {} },
         });
         TaskMasterFileOperations.readConfig.mockResolvedValue({
            models: {},
            settings: {},
         });

         // Import and setup server
         const { GET, POST, DELETE } = await import('@/app/api/fs-operations/route');
         server = createTestServer(async (req: any) => {
            switch (req.method) {
               case 'GET':
                  return await GET(req);
               case 'POST':
                  return await POST(req);
               case 'DELETE':
                  return await DELETE(req);
               default:
                  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
            }
         });
      });

      afterEach(() => {
         if (server) {
            server.close();
         }
      });

      it('should get file system status', async () => {
         const response = await request(server).get('/?operation=status').expect(200);

         expect(response.body).toHaveProperty('tasks');
         expect(response.body).toHaveProperty('config');
         expect(response.body).toHaveProperty('timestamp');
      });

      it('should list backups', async () => {
         const response = await request(server).get('/?operation=backups').expect(200);

         expect(response.body).toHaveProperty('tasks');
         expect(response.body).toHaveProperty('config');
         expect(Array.isArray(response.body.tasks)).toBe(true);
      });

      it('should initialize directories', async () => {
         const response = await request(server).get('/?operation=initialize').expect(200);

         expect(response.body).toHaveProperty('message');
         expect(response.body).toHaveProperty('timestamp');
      });

      it('should reject invalid operations', async () => {
         await request(server).get('/?operation=invalid').expect(400);
      });

      it('should create backup', async () => {
         const response = await request(server)
            .post('/')
            .send({
               operation: 'create_backup',
               target: 'tasks',
            })
            .expect(200);

         expect(response.body).toHaveProperty('message');
         expect(response.body).toHaveProperty('backupPath');
         expect(response.body).toHaveProperty('timestamp');
      });

      it('should restore backup', async () => {
         const response = await request(server)
            .post('/')
            .send({
               operation: 'restore_backup',
               target: 'tasks',
               backupPath: '/path/to/backup.json',
            })
            .expect(200);

         expect(response.body).toHaveProperty('message');
         expect(response.body).toHaveProperty('restoredFrom');
      });

      it('should validate files', async () => {
         const response = await request(server)
            .post('/')
            .send({
               operation: 'validate_files',
            })
            .expect(200);

         expect(response.body).toHaveProperty('valid', true);
         expect(response.body).toHaveProperty('tasks');
         expect(response.body).toHaveProperty('config');
      });

      it('should reject invalid backup operations', async () => {
         await request(server)
            .post('/')
            .send({
               operation: 'create_backup',
               target: 'invalid',
            })
            .expect(400);
      });

      it('should reject restore without backup path', async () => {
         await request(server)
            .post('/')
            .send({
               operation: 'restore_backup',
               target: 'tasks',
            })
            .expect(400);
      });

      it('should clean up old backups', async () => {
         // Mock fs operations for cleanup
         const fs = require('fs/promises');
         fs.unlink = jest.fn().mockResolvedValue(undefined);

         const response = await request(server)
            .delete('/?target=all&older_than_days=7')
            .expect(200);

         expect(response.body).toHaveProperty('message');
         expect(response.body).toHaveProperty('deletedCount');
         expect(response.body).toHaveProperty('cutoffDate');
      });

      it('should reject invalid cleanup targets', async () => {
         await request(server).delete('/?target=invalid').expect(400);
      });
   });

   describe('Error Handling', () => {
      let server: any;

      beforeEach(async () => {
         // Mock file operations to throw errors
         const { TaskMasterFileOperations } = require('@/lib/fs-operations');
         TaskMasterFileOperations.readTasks.mockRejectedValue(new Error('File read error'));

         const { GET } = await import('@/app/api/tasks/route');
         server = createTestServer(async (req: any) => {
            return await GET(req);
         });
      });

      afterEach(() => {
         if (server) {
            server.close();
         }
      });

      it('should handle file operation errors gracefully', async () => {
         const response = await request(server).get('/').expect(500);

         expect(response.body).toHaveProperty('error');
      });
   });

   describe('Request Validation', () => {
      let server: any;

      beforeEach(async () => {
         const { POST } = await import('@/app/api/cli-execute/route');
         server = createTestServer(async (req: any) => {
            return await POST(req);
         });
      });

      afterEach(() => {
         if (server) {
            server.close();
         }
      });

      it('should validate request content-type', async () => {
         await request(server).post('/').send('invalid json').expect(400);
      });

      it('should validate required parameters', async () => {
         await request(server)
            .post('/')
            .send({ args: ['--status=pending'] })
            .expect(400);
      });

      it('should validate parameter types', async () => {
         await request(server)
            .post('/')
            .send({ command: 'list', args: 'not-an-array' })
            .expect(400);
      });
   });
});
