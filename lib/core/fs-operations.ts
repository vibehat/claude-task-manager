import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { randomUUID } from 'crypto';
import {
   TasksData,
   validateTasksData,
   TaskMasterConfig,
   validateTaskMasterConfig,
} from '../types/index';

// File operation errors
export class FileOperationError extends Error {
   constructor(
      message: string,
      public operation: string,
      public filePath: string,
      public originalError?: Error
   ) {
      super(message);
      this.name = 'FileOperationError';
   }
}

export class FileLockError extends Error {
   constructor(
      message: string,
      public filePath: string
   ) {
      super(message);
      this.name = 'FileLockError';
   }
}

// File lock management
class FileLockManager {
   private locks = new Map<string, { id: string; timestamp: number }>();
   private readonly LOCK_TIMEOUT = 30000; // 30 seconds

   async acquireLock(filePath: string): Promise<string> {
      const lockId = randomUUID();
      const normalizedPath = join(filePath);

      // Check for existing lock
      const existingLock = this.locks.get(normalizedPath);
      if (existingLock) {
         const isExpired = Date.now() - existingLock.timestamp > this.LOCK_TIMEOUT;
         if (!isExpired) {
            throw new FileLockError(`File is locked by another operation`, filePath);
         }
         // Clean up expired lock
         this.locks.delete(normalizedPath);
      }

      // Acquire new lock
      this.locks.set(normalizedPath, {
         id: lockId,
         timestamp: Date.now(),
      });

      return lockId;
   }

   releaseLock(filePath: string, lockId: string): void {
      const normalizedPath = join(filePath);
      const existingLock = this.locks.get(normalizedPath);

      if (existingLock && existingLock.id === lockId) {
         this.locks.delete(normalizedPath);
      }
   }

   isLocked(filePath: string): boolean {
      const normalizedPath = join(filePath);
      const existingLock = this.locks.get(normalizedPath);

      if (!existingLock) return false;

      const isExpired = Date.now() - existingLock.timestamp > this.LOCK_TIMEOUT;
      if (isExpired) {
         this.locks.delete(normalizedPath);
         return false;
      }

      return true;
   }

   // Clean up expired locks
   cleanupExpiredLocks(): void {
      const now = Date.now();
      for (const [path, lock] of this.locks.entries()) {
         if (now - lock.timestamp > this.LOCK_TIMEOUT) {
            this.locks.delete(path);
         }
      }
   }
}

// Global lock manager instance
const lockManager = new FileLockManager();

// Clean up expired locks every 5 minutes (only in production)
if (process.env.NODE_ENV !== 'test') {
   setInterval(
      () => {
         lockManager.cleanupExpiredLocks();
      },
      5 * 60 * 1000
   );
}

// Backup utilities
export class BackupManager {
   private static readonly MAX_BACKUPS = 5;

   static async createBackup(filePath: string): Promise<string> {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = `${filePath}.backup.${timestamp}`;

      try {
         await fs.copyFile(filePath, backupPath);
         await this.cleanupOldBackups(filePath);
         return backupPath;
      } catch (error) {
         throw new FileOperationError(
            `Failed to create backup: ${error.message}`,
            'createBackup',
            filePath,
            error as Error
         );
      }
   }

   static async restoreBackup(originalPath: string, backupPath: string): Promise<void> {
      try {
         await fs.copyFile(backupPath, originalPath);
      } catch (error) {
         throw new FileOperationError(
            `Failed to restore backup: ${error.message}`,
            'restoreBackup',
            originalPath,
            error as Error
         );
      }
   }

   private static async cleanupOldBackups(filePath: string): Promise<void> {
      try {
         const dir = dirname(filePath);
         const fileName = filePath.split('/').pop();
         const files = await fs.readdir(dir);

         const backupFiles = files
            .filter((file) => file.startsWith(`${fileName}.backup.`))
            .map((file) => ({
               name: file,
               path: join(dir, file),
               time: file.split('.backup.')[1],
            }))
            .sort((a, b) => b.time.localeCompare(a.time)); // Sort by newest first

         // Remove excess backups
         if (backupFiles.length > this.MAX_BACKUPS) {
            const filesToRemove = backupFiles.slice(this.MAX_BACKUPS);
            await Promise.all(
               filesToRemove.map((file) => fs.unlink(file.path).catch(() => {})) // Ignore errors
            );
         }
      } catch (error) {
         // Log but don't throw - backup cleanup failure shouldn't break main operation
         console.warn(`Failed to cleanup old backups for ${filePath}:`, error);
      }
   }

   static async listBackups(filePath: string): Promise<string[]> {
      try {
         const dir = dirname(filePath);
         const fileName = filePath.split('/').pop();
         const files = await fs.readdir(dir);

         return files
            .filter((file) => file.startsWith(`${fileName}.backup.`))
            .map((file) => join(dir, file))
            .sort((a, b) => b.localeCompare(a)); // Sort by newest first
      } catch (error) {
         return [];
      }
   }
}

// Safe file operations with atomic writes
export class SafeFileOperations {
   static async ensureDirectory(dirPath: string): Promise<void> {
      try {
         await fs.mkdir(dirPath, { recursive: true });
      } catch (error) {
         throw new FileOperationError(
            `Failed to create directory: ${error.message}`,
            'ensureDirectory',
            dirPath,
            error as Error
         );
      }
   }

   static async fileExists(filePath: string): Promise<boolean> {
      try {
         await fs.access(filePath);
         return true;
      } catch {
         return false;
      }
   }

   static async getFileStats(filePath: string) {
      try {
         return await fs.stat(filePath);
      } catch (error) {
         throw new FileOperationError(
            `Failed to get file stats: ${error.message}`,
            'getFileStats',
            filePath,
            error as Error
         );
      }
   }

   // Atomic read operation with validation
   static async readJSON<T>(filePath: string, validator?: (data: any) => data is T): Promise<T> {
      const lockId = await lockManager.acquireLock(filePath);

      try {
         const content = await fs.readFile(filePath, 'utf-8');
         const data = JSON.parse(content);

         if (validator && !validator(data)) {
            throw new Error('Data validation failed');
         }

         return data;
      } catch (error) {
         throw new FileOperationError(
            `Failed to read JSON file: ${error.message}`,
            'readJSON',
            filePath,
            error as Error
         );
      } finally {
         lockManager.releaseLock(filePath, lockId);
      }
   }

   // Atomic write operation with backup
   static async writeJSON(
      filePath: string,
      data: any,
      options: {
         createBackup?: boolean;
         validator?: (data: any) => boolean;
      } = {}
   ): Promise<void> {
      const { createBackup = true, validator } = options;
      const lockId = await lockManager.acquireLock(filePath);
      let backupPath: string | null = null;

      try {
         // Validate data if validator provided
         if (validator && !validator(data)) {
            throw new Error('Data validation failed before write');
         }

         // Ensure directory exists
         await this.ensureDirectory(dirname(filePath));

         // Create backup if file exists and backup is requested
         if (createBackup && (await this.fileExists(filePath))) {
            backupPath = await BackupManager.createBackup(filePath);
         }

         // Write to temporary file first (atomic operation)
         const tempPath = `${filePath}.tmp.${randomUUID()}`;
         const jsonContent = JSON.stringify(data, null, 2);

         await fs.writeFile(tempPath, jsonContent, 'utf-8');

         // Verify the written data by reading it back
         try {
            const writtenData = JSON.parse(await fs.readFile(tempPath, 'utf-8'));
            if (validator && !validator(writtenData)) {
               throw new Error('Data validation failed after write');
            }
         } catch (verifyError) {
            // Clean up temp file and restore backup if verification fails
            await fs.unlink(tempPath).catch(() => {});
            if (backupPath) {
               await BackupManager.restoreBackup(filePath, backupPath);
            }
            throw new Error(`Write verification failed: ${verifyError.message}`);
         }

         // Atomic move from temp to final location
         await fs.rename(tempPath, filePath);
      } catch (error) {
         // Restore backup if write failed and backup exists
         if (backupPath) {
            try {
               await BackupManager.restoreBackup(filePath, backupPath);
            } catch (restoreError) {
               console.error('Failed to restore backup after write failure:', restoreError);
            }
         }

         throw new FileOperationError(
            `Failed to write JSON file: ${error.message}`,
            'writeJSON',
            filePath,
            error as Error
         );
      } finally {
         lockManager.releaseLock(filePath, lockId);
      }
   }

   // Safe copy operation
   static async copyFile(source: string, destination: string): Promise<void> {
      const sourceLockId = await lockManager.acquireLock(source);
      const destLockId = await lockManager.acquireLock(destination);

      try {
         await this.ensureDirectory(dirname(destination));
         await fs.copyFile(source, destination);
      } catch (error) {
         throw new FileOperationError(
            `Failed to copy file: ${error.message}`,
            'copyFile',
            source,
            error as Error
         );
      } finally {
         lockManager.releaseLock(source, sourceLockId);
         lockManager.releaseLock(destination, destLockId);
      }
   }

   // Safe delete operation
   static async deleteFile(filePath: string, createBackup = true): Promise<void> {
      const lockId = await lockManager.acquireLock(filePath);

      try {
         if (!(await this.fileExists(filePath))) {
            return; // File doesn't exist, nothing to delete
         }

         if (createBackup) {
            await BackupManager.createBackup(filePath);
         }

         await fs.unlink(filePath);
      } catch (error) {
         throw new FileOperationError(
            `Failed to delete file: ${error.message}`,
            'deleteFile',
            filePath,
            error as Error
         );
      } finally {
         lockManager.releaseLock(filePath, lockId);
      }
   }
}

// TaskMaster-specific file operations
export class TaskMasterFileOperations {
   static getTasksFilePath(): string {
      return join(process.cwd(), '.taskmaster', 'tasks', 'tasks.json');
   }

   static getConfigFilePath(): string {
      return join(process.cwd(), '.taskmaster', 'config.json');
   }

   // Read tasks with validation and error recovery
   static async readTasks(): Promise<TasksData> {
      const filePath = this.getTasksFilePath();

      try {
         return await SafeFileOperations.readJSON(filePath, validateTasksData);
      } catch (error) {
         // Try to recover from backup if main file is corrupted
         const backups = await BackupManager.listBackups(filePath);

         for (const backupPath of backups) {
            try {
               const backupData = await SafeFileOperations.readJSON(backupPath, validateTasksData);

               // Restore the working backup to main file
               await BackupManager.restoreBackup(filePath, backupPath);
               console.log(`Recovered tasks from backup: ${backupPath}`);

               return backupData;
            } catch (backupError) {
               console.warn(`Failed to read backup ${backupPath}:`, backupError.message);
               continue;
            }
         }

         // If no backups work, return default structure
         console.error('Failed to read tasks file and all backups. Creating default structure.');
         const defaultData: TasksData = {
            master: {
               tasks: [],
               metadata: {
                  created: new Date().toISOString(),
                  updated: new Date().toISOString(),
                  description: 'Tasks for master context',
               },
            },
         };

         await this.writeTasks(defaultData);
         return defaultData;
      }
   }

   // Write tasks with validation and backup
   static async writeTasks(data: TasksData): Promise<void> {
      const filePath = this.getTasksFilePath();

      // Update metadata
      const updatedData = {
         ...data,
         master: {
            ...data.master,
            metadata: {
               ...data.master.metadata,
               updated: new Date().toISOString(),
            },
         },
      };

      await SafeFileOperations.writeJSON(filePath, updatedData, {
         createBackup: true,
         validator: validateTasksData,
      });
   }

   // Read config with validation and error recovery
   static async readConfig(): Promise<TaskMasterConfig> {
      const filePath = this.getConfigFilePath();

      try {
         return await SafeFileOperations.readJSON(filePath, validateTaskMasterConfig);
      } catch (error) {
         // Try to recover from backup
         const backups = await BackupManager.listBackups(filePath);

         for (const backupPath of backups) {
            try {
               const backupData = await SafeFileOperations.readJSON(
                  backupPath,
                  validateTaskMasterConfig
               );
               await BackupManager.restoreBackup(filePath, backupPath);
               console.log(`Recovered config from backup: ${backupPath}`);
               return backupData;
            } catch (backupError) {
               continue;
            }
         }

         // Return default config if no backups work
         const defaultConfig: TaskMasterConfig = {
            models: {
               main: 'claude-3-5-sonnet-20241022',
               research: 'perplexity-llama-3.1-sonar-large-128k-online',
               fallback: 'gpt-4o-mini',
            },
            settings: {
               defaultPriority: 'medium',
               autoExpand: false,
               research: true,
            },
         };

         await this.writeConfig(defaultConfig);
         return defaultConfig;
      }
   }

   // Write config with validation and backup
   static async writeConfig(data: TaskMasterConfig): Promise<void> {
      const filePath = this.getConfigFilePath();

      await SafeFileOperations.writeJSON(filePath, data, {
         createBackup: true,
         validator: validateTaskMasterConfig,
      });
   }

   // Initialize TaskMaster directory structure
   static async initializeDirectories(): Promise<void> {
      const directories = [
         join(process.cwd(), '.taskmaster'),
         join(process.cwd(), '.taskmaster', 'tasks'),
         join(process.cwd(), '.taskmaster', 'docs'),
         join(process.cwd(), '.taskmaster', 'reports'),
         join(process.cwd(), '.taskmaster', 'templates'),
      ];

      for (const dir of directories) {
         await SafeFileOperations.ensureDirectory(dir);
      }
   }

   // Get file modification times for change detection
   static async getTasksFileInfo() {
      const filePath = this.getTasksFilePath();
      try {
         const stats = await SafeFileOperations.getFileStats(filePath);
         return {
            exists: true,
            mtime: stats.mtime,
            size: stats.size,
         };
      } catch {
         return {
            exists: false,
            mtime: null,
            size: 0,
         };
      }
   }

   static async getConfigFileInfo() {
      const filePath = this.getConfigFilePath();
      try {
         const stats = await SafeFileOperations.getFileStats(filePath);
         return {
            exists: true,
            mtime: stats.mtime,
            size: stats.size,
         };
      } catch {
         return {
            exists: false,
            mtime: null,
            size: 0,
         };
      }
   }
}
