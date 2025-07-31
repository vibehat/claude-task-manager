import type { FSWatcher } from 'fs';
import { watch } from 'fs';
import { EventEmitter } from 'events';
import path from 'path';
import fs from 'fs/promises';
import type { TasksData, FileWatchEvent } from '../client/types/taskmaster';

export interface TaskMasterWatcherOptions {
   workingDirectory?: string;
   pollInterval?: number;
   debounceDelay?: number;
}

export class TaskMasterWatcher extends EventEmitter {
   private workingDirectory: string;
   private watcher?: FSWatcher;
   private tasksFilePath: string;
   private lastModified?: string;
   private debounceTimer?: NodeJS.Timeout;
   private debounceDelay: number;
   private isWatching = false;

   constructor(options: TaskMasterWatcherOptions = {}) {
      super();
      this.workingDirectory = options.workingDirectory || process.cwd();
      this.debounceDelay = options.debounceDelay || 500;
      this.tasksFilePath = path.join(this.workingDirectory, '.taskmaster', 'tasks', 'tasks.json');
   }

   /**
    * Start watching the tasks.json file
    */
   async start(): Promise<void> {
      if (this.isWatching) {
         console.warn('TaskMasterWatcher is already running');
         return;
      }

      try {
         // Check if file exists
         await fs.access(this.tasksFilePath);

         // Get initial modification time
         const stats = await fs.stat(this.tasksFilePath);
         this.lastModified = stats.mtime.toISOString();

         // Start file watcher
         this.watcher = watch(this.tasksFilePath, (eventType, filename) => {
            this.handleFileChange(eventType, filename);
         });

         this.isWatching = true;

         // Emit initial connection event
         this.emitEvent({
            type: 'connection-established',
            timestamp: new Date().toISOString(),
            message: 'TaskMaster watcher connected',
            watching: [this.tasksFilePath],
         });

         console.log(`Watching TaskMaster tasks at: ${this.tasksFilePath}`);
      } catch (error) {
         console.error('Failed to start TaskMaster watcher:', error);
         throw error;
      }
   }

   /**
    * Stop watching
    */
   stop(): void {
      if (this.watcher) {
         this.watcher.close();
         this.watcher = undefined;
      }

      if (this.debounceTimer) {
         clearTimeout(this.debounceTimer);
         this.debounceTimer = undefined;
      }

      this.isWatching = false;
      console.log('TaskMaster watcher stopped');
   }

   /**
    * Handle file change events
    */
   private handleFileChange(eventType: string, filename: string | null): void {
      // Debounce rapid changes
      if (this.debounceTimer) {
         clearTimeout(this.debounceTimer);
      }

      this.debounceTimer = setTimeout(async () => {
         try {
            const stats = await fs.stat(this.tasksFilePath);
            const currentModified = stats.mtime.toISOString();

            if (currentModified !== this.lastModified) {
               this.lastModified = currentModified;

               this.emitEvent({
                  type: 'file-change',
                  path: this.tasksFilePath,
                  eventType,
                  filename: filename || 'tasks.json',
                  timestamp: new Date().toISOString(),
               });
            }
         } catch (error) {
            console.error('Error checking file stats:', error);
         }
      }, this.debounceDelay);
   }

   /**
    * Emit a file watch event
    */
   private emitEvent(event: FileWatchEvent): void {
      this.emit('change', event);

      // Also emit specific event types
      this.emit(event.type, event);
   }

   /**
    * Get current tasks data
    */
   async getTasksData(): Promise<TasksData | null> {
      try {
         const content = await fs.readFile(this.tasksFilePath, 'utf-8');
         return JSON.parse(content);
      } catch (error) {
         console.error('Failed to read tasks data:', error);
         return null;
      }
   }

   /**
    * Send manual trigger event (useful for testing)
    */
   triggerManualUpdate(): void {
      this.emitEvent({
         type: 'manual-trigger',
         timestamp: new Date().toISOString(),
         message: 'Manual update triggered',
      });
   }

   /**
    * Send heartbeat event
    */
   sendHeartbeat(): void {
      this.emitEvent({
         type: 'heartbeat',
         timestamp: new Date().toISOString(),
         connectionCount: this.listenerCount('change'),
      });
   }

   /**
    * Check if watcher is running
    */
   get isRunning(): boolean {
      return this.isWatching;
   }

   /**
    * Get watched file path
    */
   get watchedPath(): string {
      return this.tasksFilePath;
   }
}

// Export singleton instance for convenience
export const taskMasterWatcher = new TaskMasterWatcher();
