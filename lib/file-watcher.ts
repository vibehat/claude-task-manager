import { EventEmitter } from 'events';
import { watch, FSWatcher, existsSync, statSync } from 'fs';
import { join, basename } from 'path';
import { TaskMasterFileOperations } from './fs-operations';

// File change event types
export interface FileChangeEvent {
   type: 'change' | 'rename' | 'error';
   filename: string;
   filepath: string;
   timestamp: Date;
   stats?: {
      size: number;
      mtime: Date;
      isFile: boolean;
      isDirectory: boolean;
   };
   content?: any; // Parsed content for JSON files
   error?: string;
}

// Debounced change detection
interface DebouncedChange {
   filepath: string;
   lastChange: number;
   timeout?: NodeJS.Timeout;
   changeCount: number;
}

// File watcher configuration
export interface FileWatcherConfig {
   paths: string[];
   debounceMs?: number;
   validateContent?: boolean;
   parseJson?: boolean;
   recursive?: boolean;
   ignored?: string[];
}

// Enhanced file system watcher
export class EnhancedFileWatcher extends EventEmitter {
   private watchers = new Map<string, FSWatcher>();
   private debouncedChanges = new Map<string, DebouncedChange>();
   private fileCache = new Map<string, { mtime: number; size: number; content?: string }>();
   private config: Required<FileWatcherConfig>;

   constructor(config: FileWatcherConfig) {
      super();

      this.config = {
         paths: config.paths,
         debounceMs: config.debounceMs || 300,
         validateContent: config.validateContent ?? true,
         parseJson: config.parseJson ?? true,
         recursive: config.recursive ?? true,
         ignored: config.ignored || ['.git', 'node_modules', '.next', 'dist', 'build'],
      };

      // Initialize file cache
      this.initializeCache();

      // Clean up on process exit
      process.on('exit', () => this.close());
      process.on('SIGINT', () => this.close());
      process.on('SIGTERM', () => this.close());
   }

   // Initialize file cache with current state
   private async initializeCache(): Promise<void> {
      for (const path of this.config.paths) {
         try {
            if (existsSync(path)) {
               const stats = statSync(path);
               if (stats.isFile()) {
                  this.cacheFile(path, stats);
               } else if (stats.isDirectory() && this.config.recursive) {
                  await this.cacheDirectory(path);
               }
            }
         } catch (error) {
            console.warn(`Failed to cache ${path}:`, error);
         }
      }
   }

   // Cache file information
   private cacheFile(filepath: string, stats: any): void {
      this.fileCache.set(filepath, {
         mtime: stats.mtime.getTime(),
         size: stats.size,
      });
   }

   // Cache directory recursively
   private async cacheDirectory(dirPath: string): Promise<void> {
      try {
         const fs = await import('fs/promises');
         const entries = await fs.readdir(dirPath, { withFileTypes: true });

         for (const entry of entries) {
            const fullPath = join(dirPath, entry.name);

            // Skip ignored directories
            if (this.isIgnored(entry.name)) continue;

            if (entry.isFile()) {
               const stats = await fs.stat(fullPath);
               this.cacheFile(fullPath, stats);
            } else if (entry.isDirectory() && this.config.recursive) {
               await this.cacheDirectory(fullPath);
            }
         }
      } catch (error) {
         console.warn(`Failed to cache directory ${dirPath}:`, error);
      }
   }

   // Check if path should be ignored
   private isIgnored(filename: string): boolean {
      return this.config.ignored.some(
         (ignored) => filename.includes(ignored) || filename.startsWith('.')
      );
   }

   // Start watching configured paths
   start(): void {
      for (const path of this.config.paths) {
         this.watchPath(path);
      }

      this.emit('started', {
         paths: this.config.paths,
         config: this.config,
      });
   }

   // Watch a specific path
   private watchPath(path: string): void {
      if (this.watchers.has(path)) {
         return; // Already watching
      }

      try {
         if (!existsSync(path)) {
            console.warn(`Path does not exist: ${path}`);
            return;
         }

         const watcher = watch(
            path,
            {
               recursive: this.config.recursive,
               persistent: true,
            },
            (eventType, filename) => {
               if (filename) {
                  this.handleFileChange(eventType, path, filename);
               }
            }
         );

         watcher.on('error', (error) => {
            this.emit('watcherError', {
               path,
               error: error.message,
               timestamp: new Date(),
            });
         });

         this.watchers.set(path, watcher);
         console.log(`Started watching: ${path}`);
      } catch (error) {
         this.emit('watcherError', {
            path,
            error: error.message,
            timestamp: new Date(),
         });
      }
   }

   // Handle file change with debouncing
   private handleFileChange(eventType: string, watchPath: string, filename: string): void {
      const filepath = join(watchPath, filename);

      // Skip ignored files
      if (this.isIgnored(filename)) return;

      const now = Date.now();
      const existing = this.debouncedChanges.get(filepath);

      if (existing) {
         // Clear existing timeout
         if (existing.timeout) {
            clearTimeout(existing.timeout);
         }

         // Update change info
         existing.lastChange = now;
         existing.changeCount++;
      } else {
         // New change
         this.debouncedChanges.set(filepath, {
            filepath,
            lastChange: now,
            changeCount: 1,
         });
      }

      // Set debounced timeout
      const change = this.debouncedChanges.get(filepath)!;
      change.timeout = setTimeout(() => {
         this.processFileChange(eventType, filepath, change.changeCount);
         this.debouncedChanges.delete(filepath);
      }, this.config.debounceMs);
   }

   // Process actual file change after debouncing
   private async processFileChange(
      eventType: string,
      filepath: string,
      changeCount: number
   ): Promise<void> {
      try {
         const filename = basename(filepath);
         const event: FileChangeEvent = {
            type: eventType as 'change' | 'rename',
            filename,
            filepath,
            timestamp: new Date(),
         };

         // Check if file exists and get stats
         if (existsSync(filepath)) {
            const stats = statSync(filepath);
            event.stats = {
               size: stats.size,
               mtime: stats.mtime,
               isFile: stats.isFile(),
               isDirectory: stats.isDirectory(),
            };

            // Detect actual changes by comparing with cache
            const cached = this.fileCache.get(filepath);
            const hasActuallyChanged =
               !cached || cached.mtime !== stats.mtime.getTime() || cached.size !== stats.size;

            if (!hasActuallyChanged) {
               return; // No actual change detected
            }

            // Update cache
            this.cacheFile(filepath, stats);

            // Parse JSON content if configured
            if (this.config.parseJson && filename.endsWith('.json')) {
               try {
                  if (filename === 'tasks.json') {
                     event.content = await TaskMasterFileOperations.readTasks();
                  } else if (filename === 'config.json') {
                     event.content = await TaskMasterFileOperations.readConfig();
                  }
               } catch (parseError) {
                  event.error = `JSON parse error: ${parseError.message}`;
               }
            }

            // Validate content if configured
            if (this.config.validateContent && filename.endsWith('.json')) {
               try {
                  if (filename === 'tasks.json') {
                     await TaskMasterFileOperations.readTasks(); // Validation happens here
                  } else if (filename === 'config.json') {
                     await TaskMasterFileOperations.readConfig(); // Validation happens here
                  }
               } catch (validationError) {
                  event.error = `Validation error: ${validationError.message}`;
                  event.type = 'error';
               }
            }
         } else {
            // File was deleted
            this.fileCache.delete(filepath);
            event.type = 'rename'; // Rename can indicate deletion
         }

         // Emit the event
         this.emit('change', event);

         // Emit specific events for different file types
         if (filename === 'tasks.json') {
            this.emit('tasksChanged', event);
         } else if (filename === 'config.json') {
            this.emit('configChanged', event);
         }

         // Log change for debugging
         console.log(`File ${eventType}: ${filepath} (${changeCount} changes)`);
      } catch (error) {
         this.emit('error', {
            type: 'error',
            filename: basename(filepath),
            filepath,
            timestamp: new Date(),
            error: error.message,
         });
      }
   }

   // Stop watching a specific path
   stopWatching(path: string): void {
      const watcher = this.watchers.get(path);
      if (watcher) {
         watcher.close();
         this.watchers.delete(path);
         console.log(`Stopped watching: ${path}`);
      }
   }

   // Close all watchers
   close(): void {
      // Clear all debounced timeouts
      for (const change of this.debouncedChanges.values()) {
         if (change.timeout) {
            clearTimeout(change.timeout);
         }
      }
      this.debouncedChanges.clear();

      // Close all watchers
      for (const [path, watcher] of this.watchers) {
         try {
            watcher.close();
            console.log(`Closed watcher for: ${path}`);
         } catch (error) {
            console.warn(`Error closing watcher for ${path}:`, error);
         }
      }
      this.watchers.clear();

      // Clear cache
      this.fileCache.clear();

      this.emit('closed');
   }

   // Get current watching status
   getStatus() {
      return {
         watching: Array.from(this.watchers.keys()),
         cachedFiles: this.fileCache.size,
         pendingChanges: this.debouncedChanges.size,
         config: this.config,
      };
   }

   // Add new path to watch
   addPath(path: string): void {
      if (!this.config.paths.includes(path)) {
         this.config.paths.push(path);
         this.watchPath(path);
      }
   }

   // Remove path from watching
   removePath(path: string): void {
      const index = this.config.paths.indexOf(path);
      if (index > -1) {
         this.config.paths.splice(index, 1);
         this.stopWatching(path);
      }
   }
}

// Factory function for TaskMaster file watcher
export function createTaskMasterWatcher(): EnhancedFileWatcher {
   const taskMasterDir = join(process.cwd(), '.taskmaster');

   const watcher = new EnhancedFileWatcher({
      paths: [
         join(taskMasterDir, 'tasks'),
         join(taskMasterDir, 'config.json'),
         join(taskMasterDir, 'reports'),
      ],
      debounceMs: 500,
      validateContent: true,
      parseJson: true,
      recursive: true,
      ignored: ['.git', 'node_modules', '.backup', '.tmp'],
   });

   return watcher;
}

// Singleton instance for application-wide use
let globalWatcher: EnhancedFileWatcher | null = null;

export function getGlobalFileWatcher(): EnhancedFileWatcher {
   if (!globalWatcher) {
      globalWatcher = createTaskMasterWatcher();
   }
   return globalWatcher;
}
