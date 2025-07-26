import { jest } from '@jest/globals';

// Create mock NextRequest class that behaves like the real one
class MockNextRequest {
   url: string;
   method: string;
   headers: Headers;
   private body: string | undefined;

   constructor(url: string, init?: RequestInit) {
      this.url = url;
      this.method = init?.method || 'GET';
      this.headers = new Headers(init?.headers || {});
      this.body = init?.body as string | undefined;
   }

   async json() {
      if (this.body) {
         try {
            return JSON.parse(this.body);
         } catch (error) {
            throw new Error('Invalid JSON in request body');
         }
      }
      return {};
   }

   get nextUrl() {
      const urlObj = new URL(this.url);
      return {
         searchParams: urlObj.searchParams,
         pathname: urlObj.pathname,
      };
   }
}

class MockNextResponse extends Response {
   static json(body: any, init?: ResponseInit) {
      return new Response(JSON.stringify(body), {
         ...init,
         headers: {
            'content-type': 'application/json',
            ...(init?.headers || {}),
         },
      });
   }
}

// Override the imports
jest.mock('next/server', () => ({
   NextRequest: MockNextRequest,
   NextResponse: MockNextResponse,
}));

// Mock modules
jest.mock('@/lib/fs-operations', () => ({
   TaskMasterFileOperations: {
      readTasks: jest.fn(),
      writeTasks: jest.fn(),
      getTasksFileInfo: jest.fn(),
      getConfigFileInfo: jest.fn(),
      initializeDirectories: jest.fn(),
      readConfig: jest.fn(),
      getTasksFilePath: jest.fn().mockReturnValue('/path/to/tasks.json'),
      getConfigFilePath: jest.fn().mockReturnValue('/path/to/config.json'),
   },
   BackupManager: {
      listBackups: jest.fn(),
      createBackup: jest.fn(),
      restoreBackup: jest.fn(),
   },
   FileOperationError: class FileOperationError extends Error {
      constructor(
         message: string,
         public operation: string,
         public filePath: string
      ) {
         super(message);
         this.name = 'FileOperationError';
      }
   },
}));

describe('API Routes Direct Tests', () => {
   describe('/api/tasks', () => {
      let GET: any, POST: any, PUT: any, DELETE: any;

      beforeAll(async () => {
         const tasksRoute = await import('@/app/api/tasks/route');
         GET = tasksRoute.GET;
         POST = tasksRoute.POST;
         PUT = tasksRoute.PUT;
         DELETE = tasksRoute.DELETE;
      });

      beforeEach(() => {
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
      });

      it('should get all tasks', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks');
         const response = await GET(request);

         expect(response).toBeInstanceOf(Response);
         expect(response.status).toBe(200);

         const data = await response.json();
         expect(data).toHaveProperty('tasks');
         expect(data).toHaveProperty('metadata');
         expect(data).toHaveProperty('total');
         expect(data.tasks).toHaveLength(2);
      });

      it('should filter tasks by status', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks?status=pending');
         const response = await GET(request);

         expect(response.status).toBe(200);

         const data = await response.json();
         expect(data.tasks).toHaveLength(1);
         expect(data.tasks[0].status).toBe('pending');
      });

      it('should filter tasks by priority', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks?priority=high');
         const response = await GET(request);

         expect(response.status).toBe(200);

         const data = await response.json();
         expect(data.tasks).toHaveLength(1);
         expect(data.tasks[0].priority).toBe('high');
      });

      it('should get specific task by ID', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks?id=1');
         const response = await GET(request);

         expect(response.status).toBe(200);

         const data = await response.json();
         expect(data).toHaveProperty('task');
         expect(data.task.id).toBe(1);
         expect(data.task.title).toBe('Test Task 1');
      });

      it('should return 404 for non-existent task', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks?id=999');
         const response = await GET(request);

         expect(response.status).toBe(404);

         const data = await response.json();
         expect(data).toHaveProperty('error');
      });

      it('should create new task', async () => {
         const newTask = {
            title: 'New Test Task',
            description: 'New task description',
            priority: 'low',
            dependencies: [],
         };

         const request = new MockNextRequest('http://localhost/api/tasks', {
            method: 'POST',
            body: JSON.stringify(newTask),
         });

         const response = await POST(request);

         expect(response.status).toBe(201);

         const data = await response.json();
         expect(data).toHaveProperty('task');
         expect(data).toHaveProperty('message');
         expect(data.task.title).toBe(newTask.title);
         expect(data.task.status).toBe('pending');
      });

      it('should reject task creation without required fields', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks', {
            method: 'POST',
            body: JSON.stringify({ title: 'Incomplete Task' }),
         });

         const response = await POST(request);

         expect(response.status).toBe(400);

         const data = await response.json();
         expect(data).toHaveProperty('error');
      });

      it('should update existing task', async () => {
         const updates = {
            id: 1,
            status: 'completed',
            priority: 'high',
         };

         const request = new MockNextRequest('http://localhost/api/tasks', {
            method: 'PUT',
            body: JSON.stringify(updates),
         });

         const response = await PUT(request);

         expect(response.status).toBe(200);

         const data = await response.json();
         expect(data).toHaveProperty('task');
         expect(data).toHaveProperty('message');
         expect(data.task.status).toBe('completed');
         expect(data.task.priority).toBe('high');
      });

      it('should reject update without task ID', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks', {
            method: 'PUT',
            body: JSON.stringify({ status: 'completed' }),
         });

         const response = await PUT(request);

         expect(response.status).toBe(400);

         const data = await response.json();
         expect(data).toHaveProperty('error');
      });

      it('should return 404 for updating non-existent task', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks', {
            method: 'PUT',
            body: JSON.stringify({ id: 999, status: 'completed' }),
         });

         const response = await PUT(request);

         expect(response.status).toBe(404);

         const data = await response.json();
         expect(data).toHaveProperty('error');
      });

      it('should cancel task (soft delete)', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks?id=1', {
            method: 'DELETE',
         });

         const response = await DELETE(request);

         expect(response.status).toBe(200);

         const data = await response.json();
         expect(data).toHaveProperty('task');
         expect(data).toHaveProperty('message');
         expect(data.task.status).toBe('cancelled');
      });

      it('should reject delete without task ID', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks', {
            method: 'DELETE',
         });

         const response = await DELETE(request);

         expect(response.status).toBe(400);

         const data = await response.json();
         expect(data).toHaveProperty('error');
      });

      it('should return 404 for deleting non-existent task', async () => {
         const request = new MockNextRequest('http://localhost/api/tasks?id=999', {
            method: 'DELETE',
         });

         const response = await DELETE(request);

         expect(response.status).toBe(404);

         const data = await response.json();
         expect(data).toHaveProperty('error');
      });
   });
});
