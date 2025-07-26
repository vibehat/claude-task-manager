import { jest } from '@jest/globals';
import { NextRequest, NextResponse } from 'next/server';

// Mock all external dependencies
jest.mock('@/lib/cli-executor', () => ({
   cliExecutor: {
      executeCommand: jest.fn(),
      getActiveProcesses: jest.fn(),
      getHistory: jest.fn(),
      getAvailableCommands: jest.fn(),
      getExecutionStats: jest.fn(),
      killProcess: jest.fn(),
      clearHistory: jest.fn(),
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
      getTasksFilePath: jest.fn(),
      getConfigFilePath: jest.fn(),
   },
   BackupManager: {
      listBackups: jest.fn(),
      createBackup: jest.fn(),
      restoreBackup: jest.fn(),
   },
   FileOperationError: class FileOperationError extends Error {},
}));

jest.mock('@/lib/types', () => ({
   TaskMasterAPIError: class TaskMasterAPIError extends Error {
      constructor(
         message: string,
         public statusCode: number = 500
      ) {
         super(message);
      }
   },
   validateTask: jest.fn(),
   validateTasksData: jest.fn(),
   safeParseTasksData: jest.fn(),
   DEFAULT_TASK_PRIORITY: 'medium',
}));

// Mock console to reduce noise
global.console = {
   ...console,
   error: jest.fn(),
   warn: jest.fn(),
   log: jest.fn(),
   info: jest.fn(),
};

// Helper to create mock NextRequest
const createMockRequest = (method: string, url: string, body?: any): NextRequest => {
   const fullUrl = url.startsWith('http') ? url : `http://localhost:3000${url}`;
   const request = {
      method,
      url: fullUrl,
      json: jest.fn().mockResolvedValue(body || {}),
      headers: new Map([['content-type', 'application/json']]),
   } as any;
   return request;
};

describe.skip('API Routes Integration Tests', () => {
   beforeEach(() => {
      jest.clearAllMocks();
   });

   describe('/api/cli-execute', () => {
      let POST: any, GET: any, DELETE: any;

      beforeAll(async () => {
         const routes = await import('@/app/api/cli-execute/route');
         POST = routes.POST;
         GET = routes.GET;
         DELETE = routes.DELETE;
      });

      beforeEach(() => {
         const { cliExecutor } = require('@/lib/cli-executor');

         // Setup default mocks
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
         cliExecutor.killProcess.mockReturnValue(true);
         cliExecutor.clearHistory.mockReturnValue(undefined);
      });

      it('should execute valid CLI commands', async () => {
         const request = createMockRequest('POST', '/api/cli-execute', {
            command: 'list',
            args: ['--status=pending'],
            timeout: 10000,
            parseOutput: true,
         });

         const response = await POST(request);

         expect(response).toBeDefined();
         if (response) {
            const responseData = await response.json();
            expect(response.status).toBe(200);
            expect(responseData).toHaveProperty('success', true);
            expect(responseData).toHaveProperty('command');
            expect(responseData).toHaveProperty('output');
         }
      });

      it('should reject invalid command requests', async () => {
         const request = createMockRequest('POST', '/api/cli-execute', {});

         const response = await POST(request);
         const responseData = await response.json();

         expect(response.status).toBe(400);
         expect(responseData).toHaveProperty('error');
      });

      it('should get system status', async () => {
         const request = createMockRequest('GET', '/api/cli-execute?action=status');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('activeProcesses');
         expect(responseData).toHaveProperty('recentHistory');
         expect(responseData).toHaveProperty('systemInfo');
      });

      it('should get available commands', async () => {
         const request = createMockRequest('GET', '/api/cli-execute?action=commands');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('availableCommands');
      });

      it('should get execution statistics', async () => {
         const request = createMockRequest('GET', '/api/cli-execute?action=stats');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('statistics');
         expect(responseData).toHaveProperty('timestamp');
      });

      it('should clear history', async () => {
         const request = createMockRequest('DELETE', '/api/cli-execute?action=clear-history');

         const response = await DELETE(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('success', true);
         expect(responseData).toHaveProperty('message');
      });
   });

   describe('/api/tasks', () => {
      let GET: any, POST: any, PUT: any, DELETE: any;

      beforeAll(async () => {
         const routes = await import('@/app/api/tasks/route');
         GET = routes.GET;
         POST = routes.POST;
         PUT = routes.PUT;
         DELETE = routes.DELETE;
      });

      beforeEach(() => {
         const { TaskMasterFileOperations } = require('@/lib/fs-operations');

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

         TaskMasterFileOperations.readTasks.mockResolvedValue(mockTasksData);
         TaskMasterFileOperations.writeTasks.mockResolvedValue(undefined);
      });

      it('should get all tasks', async () => {
         const request = createMockRequest('GET', '/api/tasks');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('tasks');
         expect(responseData).toHaveProperty('metadata');
         expect(responseData).toHaveProperty('total');
         expect(responseData.tasks).toHaveLength(2);
      });

      it('should filter tasks by status', async () => {
         const request = createMockRequest('GET', '/api/tasks?status=pending');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData.tasks).toHaveLength(1);
         expect(responseData.tasks[0].status).toBe('pending');
      });

      it('should get specific task by ID', async () => {
         const request = createMockRequest('GET', '/api/tasks?id=1');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('task');
         expect(responseData.task.id).toBe(1);
      });

      it('should return 404 for non-existent task', async () => {
         const request = createMockRequest('GET', '/api/tasks?id=999');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(404);
         expect(responseData).toHaveProperty('error');
      });

      it('should create new task', async () => {
         const newTask = {
            title: 'New Test Task',
            description: 'New task description',
            priority: 'low',
            dependencies: [],
         };

         const request = createMockRequest('POST', '/api/tasks', newTask);

         const response = await POST(request);
         const responseData = await response.json();

         expect(response.status).toBe(201);
         expect(responseData).toHaveProperty('task');
         expect(responseData).toHaveProperty('message');
         expect(responseData.task.title).toBe(newTask.title);
         expect(responseData.task.status).toBe('pending');
      });

      it('should reject task creation without required fields', async () => {
         const request = createMockRequest('POST', '/api/tasks', { title: 'Incomplete Task' });

         const response = await POST(request);
         const responseData = await response.json();

         expect(response.status).toBe(400);
         expect(responseData).toHaveProperty('error');
      });

      it('should update existing task', async () => {
         const updates = {
            id: 1,
            status: 'completed',
            priority: 'high',
         };

         const request = createMockRequest('PUT', '/api/tasks', updates);

         const response = await PUT(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('task');
         expect(responseData).toHaveProperty('message');
         expect(responseData.task.status).toBe('completed');
         expect(responseData.task.priority).toBe('high');
      });

      it('should return 404 for updating non-existent task', async () => {
         const request = createMockRequest('PUT', '/api/tasks', { id: 999, status: 'completed' });

         const response = await PUT(request);
         const responseData = await response.json();

         expect(response.status).toBe(404);
         expect(responseData).toHaveProperty('error');
      });

      it('should cancel task (soft delete)', async () => {
         const request = createMockRequest('DELETE', '/api/tasks?id=1');

         const response = await DELETE(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('task');
         expect(responseData).toHaveProperty('message');
         expect(responseData.task.status).toBe('cancelled');
      });

      it('should return 404 for deleting non-existent task', async () => {
         const request = createMockRequest('DELETE', '/api/tasks?id=999');

         const response = await DELETE(request);
         const responseData = await response.json();

         expect(response.status).toBe(404);
         expect(responseData).toHaveProperty('error');
      });
   });

   describe('/api/fs-operations', () => {
      let GET: any, POST: any, DELETE: any;

      beforeAll(async () => {
         const routes = await import('@/app/api/fs-operations/route');
         GET = routes.GET;
         POST = routes.POST;
         DELETE = routes.DELETE;
      });

      beforeEach(() => {
         const { TaskMasterFileOperations, BackupManager } = require('@/lib/fs-operations');

         // Setup file operations mocks
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
         TaskMasterFileOperations.getTasksFilePath.mockReturnValue('/path/to/tasks.json');
         TaskMasterFileOperations.getConfigFilePath.mockReturnValue('/path/to/config.json');
      });

      it('should get file system status', async () => {
         const request = createMockRequest('GET', '/api/fs-operations?operation=status');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('tasks');
         expect(responseData).toHaveProperty('config');
         expect(responseData).toHaveProperty('timestamp');
      });

      it('should list backups', async () => {
         const request = createMockRequest('GET', '/api/fs-operations?operation=backups');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('tasks');
         expect(responseData).toHaveProperty('config');
         expect(Array.isArray(responseData.tasks)).toBe(true);
      });

      it('should initialize directories', async () => {
         const request = createMockRequest('GET', '/api/fs-operations?operation=initialize');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('message');
         expect(responseData).toHaveProperty('timestamp');
      });

      it('should reject invalid operations', async () => {
         const request = createMockRequest('GET', '/api/fs-operations?operation=invalid');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(400);
         expect(responseData).toHaveProperty('error');
      });

      it('should create backup', async () => {
         const request = createMockRequest('POST', '/api/fs-operations', {
            operation: 'create_backup',
            target: 'tasks',
         });

         const response = await POST(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('message');
         expect(responseData).toHaveProperty('backupPath');
         expect(responseData).toHaveProperty('timestamp');
      });

      it('should validate files', async () => {
         const request = createMockRequest('POST', '/api/fs-operations', {
            operation: 'validate_files',
         });

         const response = await POST(request);
         const responseData = await response.json();

         expect(response.status).toBe(200);
         expect(responseData).toHaveProperty('valid', true);
         expect(responseData).toHaveProperty('tasks');
         expect(responseData).toHaveProperty('config');
      });

      it('should reject invalid backup operations', async () => {
         const request = createMockRequest('POST', '/api/fs-operations', {
            operation: 'create_backup',
            target: 'invalid',
         });

         const response = await POST(request);
         const responseData = await response.json();

         expect(response.status).toBe(400);
         expect(responseData).toHaveProperty('error');
      });
   });

   describe('Error Handling', () => {
      it('should handle CLI execution errors', async () => {
         const { cliExecutor } = require('@/lib/cli-executor');
         cliExecutor.executeCommand.mockRejectedValue(new Error('CLI execution failed'));

         const { POST } = await import('@/app/api/cli-execute/route');
         const request = createMockRequest('POST', '/api/cli-execute', {
            command: 'list',
            args: [],
         });

         const response = await POST(request);
         const responseData = await response.json();

         expect(response.status).toBe(500);
         expect(responseData).toHaveProperty('error');
      });

      it('should handle file operation errors', async () => {
         const { TaskMasterFileOperations } = require('@/lib/fs-operations');
         TaskMasterFileOperations.readTasks.mockRejectedValue(new Error('File read error'));

         const { GET } = await import('@/app/api/tasks/route');
         const request = createMockRequest('GET', '/api/tasks');

         const response = await GET(request);
         const responseData = await response.json();

         expect(response.status).toBe(500);
         expect(responseData).toHaveProperty('error');
      });
   });
});
