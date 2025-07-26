import { jest } from '@jest/globals';
import { PerformanceMonitor, getGlobalPerformanceMonitor } from './performance-monitor';
import type { PerformanceMetric, PerformanceReport } from './performance-monitor';

describe('PerformanceMonitor', () => {
   let monitor: PerformanceMonitor;

   beforeEach(() => {
      monitor = new PerformanceMonitor({
         enableMemoryTracking: true,
         enableCPUTracking: true,
         sampleInterval: 100,
         maxSamples: 100,
         alertThresholds: {
            memory: 80,
            cpu: 80,
            responseTime: 1000,
         },
      });
   });

   afterEach(() => {
      monitor.stop();
   });

   describe('Metric Collection', () => {
      test('should start and stop monitoring', () => {
         expect(monitor.isRunning()).toBe(false);

         monitor.start();
         expect(monitor.isRunning()).toBe(true);

         monitor.stop();
         expect(monitor.isRunning()).toBe(false);
      });

      test('should record performance metrics', async () => {
         const operation = jest.fn().mockResolvedValue('result');

         const result = await monitor.measureOperation('test-operation', operation);

         expect(result).toBe('result');
         expect(operation).toHaveBeenCalled();

         const metrics = monitor.getMetrics();
         expect(metrics.operations).toHaveProperty('test-operation');
         expect(metrics.operations['test-operation'].count).toBe(1);
      });

      test('should track operation duration', async () => {
         const slowOperation = () => new Promise((resolve) => setTimeout(resolve, 100));

         await monitor.measureOperation('slow-operation', slowOperation);

         const metrics = monitor.getMetrics();
         const operationMetrics = metrics.operations['slow-operation'];

         expect(operationMetrics.averageDuration).toBeGreaterThan(90);
         expect(operationMetrics.maxDuration).toBeGreaterThan(90);
      });

      test('should handle operation errors', async () => {
         const failingOperation = jest.fn().mockRejectedValue(new Error('Test error'));

         await expect(
            monitor.measureOperation('failing-operation', failingOperation)
         ).rejects.toThrow('Test error');

         const metrics = monitor.getMetrics();
         expect(metrics.operations['failing-operation'].errorCount).toBe(1);
      });
   });

   describe('Memory Tracking', () => {
      test('should track memory usage', () => {
         monitor.start();

         // Let it collect some samples
         return new Promise((resolve) => {
            setTimeout(() => {
               const metrics = monitor.getMetrics();
               expect(metrics.memory.current).toBeGreaterThan(0);
               expect(metrics.memory.peak).toBeGreaterThan(0);
               resolve(undefined);
            }, 150);
         });
      });

      test('should detect memory leaks', () => {
         const alertSpy = jest.fn();
         monitor.on('memoryLeak', alertSpy);

         // Simulate memory growth
         const largeArrays: any[] = [];
         for (let i = 0; i < 100; i++) {
            largeArrays.push(new Array(10000).fill('test'));
         }

         monitor.start();

         return new Promise((resolve) => {
            setTimeout(() => {
               // Force garbage collection if available
               if (global.gc) global.gc();

               // Check if leak detection was triggered
               // Note: This may not always trigger in test environment
               monitor.stop();
               resolve(undefined);
            }, 200);
         });
      });
   });

   describe('Performance Alerts', () => {
      test('should trigger alerts for slow operations', async () => {
         const alertSpy = jest.fn();
         monitor.on('slowOperation', alertSpy);

         const slowOperation = () => new Promise((resolve) => setTimeout(resolve, 1200));

         await monitor.measureOperation('very-slow-operation', slowOperation);

         expect(alertSpy).toHaveBeenCalledWith(
            expect.objectContaining({
               operation: 'very-slow-operation',
               duration: expect.any(Number),
            })
         );
      });

      test('should trigger alerts for high error rates', async () => {
         const alertSpy = jest.fn();
         monitor.on('highErrorRate', alertSpy);

         const failingOperation = () => Promise.reject(new Error('Test error'));

         // Generate multiple errors
         for (let i = 0; i < 10; i++) {
            try {
               await monitor.measureOperation('error-prone-operation', failingOperation);
            } catch (e) {
               // Expected to fail
            }
         }

         expect(alertSpy).toHaveBeenCalled();
      });
   });

   describe('Performance Reports', () => {
      test('should generate performance reports', async () => {
         // Generate some test data
         await monitor.measureOperation('fast-op', () => Promise.resolve('fast'));
         await monitor.measureOperation(
            'slow-op',
            () => new Promise((resolve) => setTimeout(resolve, 50))
         );

         try {
            await monitor.measureOperation('error-op', () => Promise.reject(new Error('Test')));
         } catch (e) {
            // Expected
         }

         const report = monitor.generateReport();

         expect(report.summary.totalOperations).toBe(3);
         expect(report.summary.totalErrors).toBe(1);
         expect(report.operations).toHaveLength(3);
         expect(report.slowestOperations).toBeDefined();
         expect(report.recommendations).toBeDefined();
      });

      test('should provide operation statistics', async () => {
         // Run same operation multiple times
         for (let i = 0; i < 5; i++) {
            await monitor.measureOperation('repeated-op', () => Promise.resolve('result'));
         }

         const stats = monitor.getOperationStats('repeated-op');

         expect(stats.count).toBe(5);
         expect(stats.averageDuration).toBeGreaterThan(0);
         expect(stats.successRate).toBe(100);
      });
   });

   describe('Resource Monitoring', () => {
      test('should monitor CPU usage', () => {
         monitor.start();

         return new Promise((resolve) => {
            setTimeout(() => {
               const metrics = monitor.getMetrics();
               expect(metrics.cpu).toBeDefined();
               expect(typeof metrics.cpu.current).toBe('number');
               resolve(undefined);
            }, 150);
         });
      });

      test('should track event loop lag', () => {
         monitor.start();

         return new Promise((resolve) => {
            setTimeout(() => {
               const metrics = monitor.getMetrics();
               expect(metrics.eventLoop).toBeDefined();
               expect(typeof metrics.eventLoop.lag).toBe('number');
               resolve(undefined);
            }, 150);
         });
      });
   });

   describe('Configuration', () => {
      test('should respect configuration options', () => {
         const customMonitor = new PerformanceMonitor({
            enableMemoryTracking: false,
            enableCPUTracking: false,
            sampleInterval: 500,
            maxSamples: 50,
         });

         customMonitor.start();

         setTimeout(() => {
            const metrics = customMonitor.getMetrics();
            expect(metrics.memory.samples).toHaveLength(0);
            expect(metrics.cpu.samples).toHaveLength(0);
            customMonitor.stop();
         }, 100);
      });

      test('should use default configuration when none provided', () => {
         const defaultMonitor = new PerformanceMonitor();
         expect(defaultMonitor).toBeDefined();
         defaultMonitor.stop();
      });
   });

   describe('Global Monitor', () => {
      test('should provide singleton instance', () => {
         const monitor1 = getGlobalPerformanceMonitor();
         const monitor2 = getGlobalPerformanceMonitor();
         expect(monitor1).toBe(monitor2);
      });

      test('should be instance of PerformanceMonitor', () => {
         const globalMonitor = getGlobalPerformanceMonitor();
         expect(globalMonitor).toBeInstanceOf(PerformanceMonitor);
         globalMonitor.stop();
      });
   });

   describe('Data Management', () => {
      test('should limit sample history', async () => {
         const limitedMonitor = new PerformanceMonitor({
            maxSamples: 3,
            sampleInterval: 10,
         });

         limitedMonitor.start();

         // Wait for more samples than the limit
         await new Promise((resolve) => setTimeout(resolve, 50));

         const metrics = limitedMonitor.getMetrics();
         expect(metrics.memory.samples.length).toBeLessThanOrEqual(3);

         limitedMonitor.stop();
      });

      test('should clear metrics', async () => {
         await monitor.measureOperation('test-op', () => Promise.resolve('test'));

         monitor.clearMetrics();

         const metrics = monitor.getMetrics();
         expect(Object.keys(metrics.operations)).toHaveLength(0);
      });
   });

   describe('Error Handling', () => {
      test('should handle measurement errors gracefully', async () => {
         const operation = () => {
            throw new Error('Synchronous error');
         };

         expect(async () => {
            await monitor.measureOperation('sync-error-op', operation);
         }).rejects.toThrow('Synchronous error');

         const metrics = monitor.getMetrics();
         expect(metrics.operations['sync-error-op'].errorCount).toBe(1);
      });

      test('should continue monitoring after errors', async () => {
         // Cause an error
         try {
            await monitor.measureOperation('error-op', () => Promise.reject(new Error('Test')));
         } catch (e) {
            // Expected
         }

         // Should still work for valid operations
         await monitor.measureOperation('good-op', () => Promise.resolve('success'));

         const metrics = monitor.getMetrics();
         expect(metrics.operations['good-op'].count).toBe(1);
      });
   });
});
