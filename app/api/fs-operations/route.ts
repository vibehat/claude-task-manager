import { NextRequest, NextResponse } from 'next/server';
import { BackupManager, TaskMasterFileOperations, FileOperationError } from '@/lib/fs-operations';
import { TaskMasterAPIError } from '@/lib/types';

// GET /api/fs-operations - Get file system information and backup status
export async function GET(request: NextRequest) {
   try {
      const { searchParams } = new URL(request.url);
      const operation = searchParams.get('operation');

      switch (operation) {
         case 'status':
            const [tasksInfo, configInfo] = await Promise.all([
               TaskMasterFileOperations.getTasksFileInfo(),
               TaskMasterFileOperations.getConfigFileInfo(),
            ]);

            return NextResponse.json({
               tasks: tasksInfo,
               config: configInfo,
               timestamp: new Date().toISOString(),
            });

         case 'backups':
            const tasksBackups = await BackupManager.listBackups(
               TaskMasterFileOperations.getTasksFilePath()
            );
            const configBackups = await BackupManager.listBackups(
               TaskMasterFileOperations.getConfigFilePath()
            );

            return NextResponse.json({
               tasks: tasksBackups.map((path) => ({
                  path,
                  timestamp: path.split('.backup.')[1]?.replace(/-/g, ':') || 'unknown',
               })),
               config: configBackups.map((path) => ({
                  path,
                  timestamp: path.split('.backup.')[1]?.replace(/-/g, ':') || 'unknown',
               })),
            });

         case 'initialize':
            await TaskMasterFileOperations.initializeDirectories();
            return NextResponse.json({
               message: 'TaskMaster directories initialized successfully',
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json(
               { error: 'Invalid operation. Supported operations: status, backups, initialize' },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('GET /api/fs-operations error:', error);

      if (error instanceof FileOperationError) {
         return NextResponse.json(
            { error: `File system operation failed: ${error.message}` },
            { status: 500 }
         );
      }

      return NextResponse.json({ error: 'File system operation failed' }, { status: 500 });
   }
}

// POST /api/fs-operations - Perform file system operations
export async function POST(request: NextRequest) {
   try {
      const body = await request.json();
      const { operation, target, backupPath } = body;

      if (!operation) {
         return NextResponse.json({ error: 'Operation is required' }, { status: 400 });
      }

      switch (operation) {
         case 'create_backup':
            if (!target || !['tasks', 'config'].includes(target)) {
               return NextResponse.json(
                  { error: 'Target must be either "tasks" or "config"' },
                  { status: 400 }
               );
            }

            const filePath =
               target === 'tasks'
                  ? TaskMasterFileOperations.getTasksFilePath()
                  : TaskMasterFileOperations.getConfigFilePath();

            const backupPath = await BackupManager.createBackup(filePath);

            return NextResponse.json({
               message: `Backup created successfully for ${target}`,
               backupPath,
               timestamp: new Date().toISOString(),
            });

         case 'restore_backup':
            if (!target || !['tasks', 'config'].includes(target)) {
               return NextResponse.json(
                  { error: 'Target must be either "tasks" or "config"' },
                  { status: 400 }
               );
            }

            if (!backupPath) {
               return NextResponse.json(
                  { error: 'Backup path is required for restore operation' },
                  { status: 400 }
               );
            }

            const originalPath =
               target === 'tasks'
                  ? TaskMasterFileOperations.getTasksFilePath()
                  : TaskMasterFileOperations.getConfigFilePath();

            await BackupManager.restoreBackup(originalPath, backupPath);

            return NextResponse.json({
               message: `${target} restored successfully from backup`,
               restoredFrom: backupPath,
               timestamp: new Date().toISOString(),
            });

         case 'validate_files':
            try {
               // Validate tasks file
               const tasksData = await TaskMasterFileOperations.readTasks();

               // Validate config file
               const configData = await TaskMasterFileOperations.readConfig();

               return NextResponse.json({
                  valid: true,
                  message: 'All files are valid',
                  tasks: {
                     valid: true,
                     taskCount: tasksData.master.tasks.length,
                     lastUpdated: tasksData.master.metadata.updated,
                  },
                  config: {
                     valid: true,
                     models: configData.models,
                     settings: configData.settings,
                  },
                  timestamp: new Date().toISOString(),
               });
            } catch (validationError) {
               return NextResponse.json({
                  valid: false,
                  message: 'File validation failed',
                  error: validationError.message,
                  timestamp: new Date().toISOString(),
               });
            }

         default:
            return NextResponse.json(
               {
                  error: 'Invalid operation. Supported operations: create_backup, restore_backup, validate_files',
               },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('POST /api/fs-operations error:', error);

      if (error instanceof FileOperationError) {
         return NextResponse.json(
            { error: `File system operation failed: ${error.message}` },
            { status: 500 }
         );
      }

      return NextResponse.json({ error: 'File system operation failed' }, { status: 500 });
   }
}

// DELETE /api/fs-operations - Clean up old backups
export async function DELETE(request: NextRequest) {
   try {
      const { searchParams } = new URL(request.url);
      const target = searchParams.get('target');
      const older_than_days = searchParams.get('older_than_days');

      if (!target || !['tasks', 'config', 'all'].includes(target)) {
         return NextResponse.json(
            { error: 'Target must be "tasks", "config", or "all"' },
            { status: 400 }
         );
      }

      const daysThreshold = older_than_days ? parseInt(older_than_days) : 7;
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysThreshold);

      const filePaths = [];
      if (target === 'tasks' || target === 'all') {
         filePaths.push(TaskMasterFileOperations.getTasksFilePath());
      }
      if (target === 'config' || target === 'all') {
         filePaths.push(TaskMasterFileOperations.getConfigFilePath());
      }

      let totalDeleted = 0;
      for (const filePath of filePaths) {
         const backups = await BackupManager.listBackups(filePath);

         for (const backupPath of backups) {
            const backupTimestamp = backupPath.split('.backup.')[1];
            if (backupTimestamp) {
               const backupDate = new Date(backupTimestamp.replace(/-/g, ':'));
               if (backupDate < cutoffDate) {
                  try {
                     await require('fs/promises').unlink(backupPath);
                     totalDeleted++;
                  } catch (deleteError) {
                     console.warn(`Failed to delete backup ${backupPath}:`, deleteError);
                  }
               }
            }
         }
      }

      return NextResponse.json({
         message: `Cleanup completed. Deleted ${totalDeleted} backup files older than ${daysThreshold} days`,
         deletedCount: totalDeleted,
         cutoffDate: cutoffDate.toISOString(),
         timestamp: new Date().toISOString(),
      });
   } catch (error) {
      console.error('DELETE /api/fs-operations error:', error);
      return NextResponse.json({ error: 'Backup cleanup failed' }, { status: 500 });
   }
}
