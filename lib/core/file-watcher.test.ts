import { jest } from '@jest/globals';
import { EnhancedFileWatcher, getGlobalFileWatcher } from './file-watcher';
import type { FileChangeEvent, FileWatcherConfig } from './file-watcher';
import { existsSync, statSync } from 'fs';

// Mock fs module completely
jest.mock('fs', () => ({
   watch: jest.fn(),
   existsSync: jest.fn(),
   statSync: jest.fn(),
   readFileSync: jest.fn(),
}));

// Mock fs-operations to prevent hanging
jest.mock('./fs-operations', () => ({
   TaskMasterFileOperations: {
      readFile: jest.fn().mockResolvedValue(''),
      writeFile: jest.fn().mockResolvedValue(undefined),
   },
}));

describe('EnhancedFileWatcher', () => {
   let watcher: EnhancedFileWatcher;
   let mockWatch: any;
   let mockExistsSync: any;
   let mockStatSync: any;
   let processListeners: { [key: string]: Function[] } = {};

   beforeEach(() => {
      // Use fake timers to prevent hanging
      jest.useFakeTimers();

      // Mock process listeners to prevent them from accumulating
      const originalOn = process.on;
      const originalSetMaxListeners = process.setMaxListeners;

      process.setMaxListeners = jest.fn();
      process.on = jest.fn((event: string, listener: Function) => {
         if (!processListeners[event]) {
            processListeners[event] = [];
         }
         processListeners[event].push(listener);
         return process;
      });

      mockWatch = jest.mocked(require('fs').watch);
      mockExistsSync = jest.mocked(existsSync);
      mockStatSync = jest.mocked(statSync);

      // Default mocks
      mockExistsSync.mockReturnValue(true);
      mockStatSync.mockReturnValue({
         size: 1024,
         mtime: new Date(),
         isFile: () => true,
         isDirectory: () => false,
      });

      const config: FileWatcherConfig = {
         paths: ['/test/path'],
         debounceMs: 100,
      };

      watcher = new EnhancedFileWatcher(config);
   });

   afterEach(() => {
      // Clean up watcher first
      if (watcher) {
         watcher.close();
      }

      // Clear all timers
      jest.runOnlyPendingTimers();
      jest.useRealTimers();

      // Clear mocks
      jest.clearAllMocks();

      // Clear process listeners
      processListeners = {};
   });

   describe('Initialization', () => {
      test('should initialize with provided config', () => {
         const config: FileWatcherConfig = {
            paths: ['/test/path1', '/test/path2'],
            debounceMs: 500,
            validateContent: false,
            parseJson: false,
         };

         const testWatcher = new EnhancedFileWatcher(config);
         const status = testWatcher.getStatus();

         expect(status.watchedPaths).toHaveLength(2);
         expect(status.config.debounceMs).toBe(500);
         expect(status.config.validateContent).toBe(false);

         testWatcher.close();
      });

      test('should use default config values', () => {
         const config: FileWatcherConfig = {
            paths: ['/test/path'],
         };

         const testWatcher = new EnhancedFileWatcher(config);
         const status = testWatcher.getStatus();

         expect(status.config.debounceMs).toBe(300);
         expect(status.config.validateContent).toBe(true);
         expect(status.config.parseJson).toBe(true);

         testWatcher.close();
      });
   });

   describe('Path Management', () => {
      test('should add new paths to watch', () => {
         const mockFSWatcher = { close: jest.fn() };
         mockWatch.mockReturnValue(mockFSWatcher);

         watcher.addPath('/new/path');

         expect(mockWatch).toHaveBeenCalledWith(
            '/new/path',
            expect.objectContaining({ recursive: true }),
            expect.any(Function)
         );
      });

      test('should remove paths from watching', () => {
         const mockFSWatcher = { close: jest.fn() };
         mockWatch.mockReturnValue(mockFSWatcher);

         watcher.addPath('/test/path');
         watcher.removePath('/test/path');

         expect(mockFSWatcher.close).toHaveBeenCalled();
      });

      test('should handle non-existent paths gracefully', () => {
         mockExistsSync.mockReturnValue(false);

         expect(() => {
            watcher.addPath('/non/existent/path');
         }).not.toThrow();
      });
   });

   describe('File Change Detection', () => {
      test('should emit change events for file modifications', () => {
         const changeEvents: FileChangeEvent[] = [];
         watcher.on('change', (event) => changeEvents.push(event));

         const mockFSWatcher = { close: jest.fn() };
         let callback: Function;
         mockWatch.mockImplementation((path, options, cb) => {
            callback = cb;
            return mockFSWatcher;
         });

         watcher.addPath('/test/path');

         // Simulate file change with proper arguments (eventType, filename)
         if (callback) {
            callback('change', 'test.txt');
         }

         // Fast-forward through all timers
         jest.runAllTimers();

         expect(changeEvents).toHaveLength(1);
         expect(changeEvents[0].type).toBe('change');
         expect(changeEvents[0].filename).toBe('test.txt');
      });

      test('should debounce rapid file changes', () => {
         const changeEvents: FileChangeEvent[] = [];
         watcher.on('change', (event) => changeEvents.push(event));

         const mockFSWatcher = { close: jest.fn() };
         let callback: Function;
         mockWatch.mockImplementation((path, options, cb) => {
            callback = cb;
            return mockFSWatcher;
         });

         watcher.addPath('/test/path');

         // Simulate rapid changes with same filename
         if (callback) {
            callback('change', 'test.txt');
            callback('change', 'test.txt');
            callback('change', 'test.txt');
         }

         // Fast-forward through debounce timer
         jest.runAllTimers();

         // Should only emit one event due to debouncing
         expect(changeEvents).toHaveLength(1);
      });

      test('should handle null/undefined filename gracefully', () => {
         const changeEvents: FileChangeEvent[] = [];
         watcher.on('change', (event) => changeEvents.push(event));

         const mockFSWatcher = { close: jest.fn() };
         let callback: Function;
         mockWatch.mockImplementation((path, options, cb) => {
            callback = cb;
            return mockFSWatcher;
         });

         watcher.addPath('/test/path');

         // Simulate file change with null filename (which can happen in real fs.watch)
         if (callback) {
            callback('change', null);
         }

         // Fast-forward through debounce timer
         jest.runAllTimers();

         // Should not crash and should not emit any events
         expect(changeEvents).toHaveLength(0);
      });
   });

   describe('Content Parsing', () => {
      test('should parse JSON content when enabled', () => {
         const config: FileWatcherConfig = {
            paths: ['/test/path'],
            parseJson: true,
         };
         const testWatcher = new EnhancedFileWatcher(config);

         jest.mocked(require('fs').readFileSync).mockReturnValue('{"test": true}');

         const changeEvents: FileChangeEvent[] = [];
         testWatcher.on('change', (event) => changeEvents.push(event));

         const mockFSWatcher = { close: jest.fn() };
         let callback: Function;
         mockWatch.mockImplementation((path, options, cb) => {
            callback = cb;
            return mockFSWatcher;
         });

         testWatcher.addPath('/test/path');

         // Simulate file change
         if (callback) {
            callback('change', 'test.json');
         }

         // Fast-forward timers
         jest.runAllTimers();

         expect(changeEvents[0].content).toEqual({ test: true });
         testWatcher.close();
      });

      test('should handle invalid JSON gracefully', () => {
         jest.mocked(require('fs').readFileSync).mockReturnValue('invalid json');

         const changeEvents: FileChangeEvent[] = [];
         watcher.on('change', (event) => changeEvents.push(event));

         const mockFSWatcher = { close: jest.fn() };
         let callback: Function;
         mockWatch.mockImplementation((path, options, cb) => {
            callback = cb;
            return mockFSWatcher;
         });

         watcher.addPath('/test/path');

         // Simulate file change
         if (callback) {
            callback('change', 'test.json');
         }

         // Fast-forward timers
         jest.runAllTimers();

         expect(changeEvents[0].error).toBeDefined();
      });
   });

   describe('Task Master Integration', () => {
      test('should emit tasksChanged events for task files', () => {
         const taskEvents: any[] = [];
         watcher.on('tasksChanged', (event) => taskEvents.push(event));

         const mockFSWatcher = { close: jest.fn() };
         let callback: Function;
         mockWatch.mockImplementation((path, options, cb) => {
            callback = cb;
            return mockFSWatcher;
         });

         watcher.addPath('/test/.taskmaster');

         // Simulate file change
         if (callback) {
            callback('change', 'tasks.json');
         }

         // Fast-forward timers
         jest.runAllTimers();

         expect(taskEvents).toHaveLength(1);
      });

      test('should emit configChanged events for config files', () => {
         const configEvents: any[] = [];
         watcher.on('configChanged', (event) => configEvents.push(event));

         const mockFSWatcher = { close: jest.fn() };
         let callback: Function;
         mockWatch.mockImplementation((path, options, cb) => {
            callback = cb;
            return mockFSWatcher;
         });

         watcher.addPath('/test/.taskmaster');

         // Simulate file change
         if (callback) {
            callback('change', 'config.json');
         }

         // Fast-forward timers
         jest.runAllTimers();

         expect(configEvents).toHaveLength(1);
      });
   });

   describe('Status and Statistics', () => {
      test('should provide watcher status', () => {
         const status = watcher.getStatus();

         expect(status).toHaveProperty('active');
         expect(status).toHaveProperty('watchedPaths');
         expect(status).toHaveProperty('fileCount');
         expect(status).toHaveProperty('changeCount');
         expect(status).toHaveProperty('config');
      });

      test('should track file statistics', () => {
         const stats = watcher.getFileStats();

         expect(stats).toHaveProperty('totalFiles');
         expect(stats).toHaveProperty('totalSize');
         expect(stats).toHaveProperty('fileTypes');
         expect(Array.isArray(stats.recentChanges)).toBe(true);
      });
   });

   describe('Global File Watcher', () => {
      test('should provide singleton instance', () => {
         const watcher1 = getGlobalFileWatcher();
         const watcher2 = getGlobalFileWatcher();
         expect(watcher1).toBe(watcher2);
      });

      test('should be instance of EnhancedFileWatcher', () => {
         const globalWatcher = getGlobalFileWatcher();
         expect(globalWatcher).toBeInstanceOf(EnhancedFileWatcher);
         globalWatcher.close();
      });
   });

   describe('Cleanup', () => {
      test('should close all watchers on close', () => {
         const mockFSWatcher1 = { close: jest.fn() };
         const mockFSWatcher2 = { close: jest.fn() };

         mockWatch.mockReturnValueOnce(mockFSWatcher1).mockReturnValueOnce(mockFSWatcher2);

         watcher.addPath('/path1');
         watcher.addPath('/path2');
         watcher.close();

         expect(mockFSWatcher1.close).toHaveBeenCalled();
         expect(mockFSWatcher2.close).toHaveBeenCalled();
      });
   });
});
