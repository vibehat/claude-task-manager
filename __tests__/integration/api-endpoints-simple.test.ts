import { jest } from '@jest/globals';

// Test just the basic functionality without the complex server setup
describe('API Integration Simple Tests', () => {
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

   describe('Setup Tests', () => {
      it('should have global console mocked', () => {
         console.log('test');
         expect(console.log).toHaveBeenCalledWith('test');
      });
   });

   describe('Basic Imports', () => {
      it('should be able to import CLI executor', async () => {
         const { CLIExecutionError, CLITimeoutError, CLIValidationError } = await import(
            '@/lib/cli-executor'
         );

         expect(CLIExecutionError).toBeDefined();
         expect(CLITimeoutError).toBeDefined();
         expect(CLIValidationError).toBeDefined();
      });

      it('should be able to import types', async () => {
         const { TaskMasterAPIError } = await import('@/lib/types');

         expect(TaskMasterAPIError).toBeDefined();
         expect(TaskMasterAPIError.prototype).toBeInstanceOf(Error);
      });

      it('should be able to import fs-operations', async () => {
         const { TaskMasterFileOperations, BackupManager } = await import('@/lib/fs-operations');

         expect(TaskMasterFileOperations).toBeDefined();
         expect(BackupManager).toBeDefined();
      });
   });

   describe('API Route Imports', () => {
      it('should be able to import tasks route', async () => {
         const tasksRoute = await import('@/app/api/tasks/route');

         expect(tasksRoute.GET).toBeDefined();
         expect(tasksRoute.POST).toBeDefined();
         expect(tasksRoute.PUT).toBeDefined();
         expect(tasksRoute.DELETE).toBeDefined();
      });

      it('should be able to import fs-operations route', async () => {
         const fsRoute = await import('@/app/api/fs-operations/route');

         expect(fsRoute.GET).toBeDefined();
         expect(fsRoute.POST).toBeDefined();
         expect(fsRoute.DELETE).toBeDefined();
      });

      it('should be able to import cli-execute route', async () => {
         const cliRoute = await import('@/app/api/cli-execute/route');

         expect(cliRoute.GET).toBeDefined();
         expect(cliRoute.POST).toBeDefined();
         expect(cliRoute.DELETE).toBeDefined();
      });
   });
});
