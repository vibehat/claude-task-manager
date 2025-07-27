#!/usr/bin/env ts-node
/**
 * One-way sync script from Task Master tasks.json to Prisma database
 * This is a standalone script version of what Task 24.4 will implement as a service
 */

import { PrismaClient } from '../lib/generated/prisma';
import { readFileSync, watch } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

interface TaskMasterData {
   master: {
      tasks: {
         id: number;
         title: string;
         description: string;
         details?: string;
         testStrategy?: string;
         priority: string;
         status: string;
         dependencies?: (number | string)[];
         subtasks?: {
            id: number;
            title: string;
            description: string;
            status: string;
            dependencies?: string[];
            details?: string;
            testStrategy?: string;
         }[];
      }[];
      metadata: {
         created: string;
         updated: string;
         description: string;
      };
   };
}

/**
 * Sync tasks.json data to Prisma database
 */
async function syncToDatabase(force = false) {
   console.log(`🔄 ${force ? 'Force syncing' : 'Syncing'} Task Master data to database...`);

   try {
      // Read tasks.json file
      const tasksJsonPath = join(process.cwd(), '.taskmaster', 'tasks', 'tasks.json');
      const tasksData: TaskMasterData = JSON.parse(readFileSync(tasksJsonPath, 'utf8'));

      // Check if we need to sync based on metadata timestamp
      const existingMetadata = await prisma.taskMasterMetadata.findFirst();
      const fileUpdated = new Date(tasksData.master.metadata.updated);

      if (!force && existingMetadata && existingMetadata.updated >= fileUpdated) {
         console.log('✅ Database is already up to date, no sync needed');
         return;
      }

      console.log('📝 Updating metadata...');
      await prisma.taskMasterMetadata.deleteMany();
      await prisma.taskMasterMetadata.create({
         data: {
            created: new Date(tasksData.master.metadata.created),
            updated: new Date(tasksData.master.metadata.updated),
            description: tasksData.master.metadata.description,
         },
      });

      // Get existing task IDs to determine what to update vs create
      const existingTasks = await prisma.task.findMany({
         select: { id: true },
      });
      const existingTaskIds = new Set(existingTasks.map((t) => t.id));

      // Get existing subtask IDs
      const existingSubtasks = await prisma.subtask.findMany({
         select: { id: true },
      });
      const existingSubtaskIds = new Set(existingSubtasks.map((s) => s.id));

      // Sync tasks
      console.log('📋 Syncing tasks...');
      for (const task of tasksData.master.tasks) {
         const taskData = {
            title: task.title,
            description: task.description,
            details: task.details || null,
            testStrategy: task.testStrategy || null,
            priority: task.priority,
            status: task.status,
            complexity: null,
         };

         if (existingTaskIds.has(task.id)) {
            // Update existing task
            await prisma.task.update({
               where: { id: task.id },
               data: taskData,
            });
            console.log(`  ✏️  Updated task ${task.id}: ${task.title}`);
         } else {
            // Create new task
            await prisma.task.create({
               data: {
                  id: task.id,
                  ...taskData,
               },
            });
            console.log(`  ➕ Created task ${task.id}: ${task.title}`);
         }

         // Sync subtasks
         if (task.subtasks && task.subtasks.length > 0) {
            for (const subtask of task.subtasks) {
               const subtaskId = `${task.id}.${subtask.id}`;
               const subtaskData = {
                  title: subtask.title,
                  description: subtask.description,
                  details: subtask.details || null,
                  testStrategy: subtask.testStrategy || null,
                  status: subtask.status,
                  parentId: task.id,
                  dependencies: JSON.stringify(subtask.dependencies || []),
               };

               if (existingSubtaskIds.has(subtaskId)) {
                  // Update existing subtask
                  await prisma.subtask.update({
                     where: { id: subtaskId },
                     data: subtaskData,
                  });
                  console.log(`    ✏️  Updated subtask ${subtaskId}: ${subtask.title}`);
               } else {
                  // Create new subtask
                  await prisma.subtask.create({
                     data: {
                        id: subtaskId,
                        ...subtaskData,
                     },
                  });
                  console.log(`    ➕ Created subtask ${subtaskId}: ${subtask.title}`);
               }
            }
         }
      }

      // Clean up removed tasks/subtasks
      const currentTaskIds = new Set(tasksData.master.tasks.map((t) => t.id));
      const currentSubtaskIds = new Set(
         tasksData.master.tasks.flatMap((t) => t.subtasks?.map((s) => `${t.id}.${s.id}`) || [])
      );

      // Remove tasks that no longer exist
      const tasksToRemove = [...existingTaskIds].filter((id) => !currentTaskIds.has(id));
      if (tasksToRemove.length > 0) {
         await prisma.task.deleteMany({
            where: { id: { in: tasksToRemove } },
         });
         console.log(`  🗑️  Removed ${tasksToRemove.length} deleted tasks`);
      }

      // Remove subtasks that no longer exist
      const subtasksToRemove = [...existingSubtaskIds].filter((id) => !currentSubtaskIds.has(id));
      if (subtasksToRemove.length > 0) {
         await prisma.subtask.deleteMany({
            where: { id: { in: subtasksToRemove } },
         });
         console.log(`  🗑️  Removed ${subtasksToRemove.length} deleted subtasks`);
      }

      // Sync task dependencies
      console.log('🔗 Syncing task dependencies...');
      await prisma.taskDependency.deleteMany(); // Clear all dependencies and rebuild

      for (const task of tasksData.master.tasks) {
         if (task.dependencies && task.dependencies.length > 0) {
            // Only process numeric dependencies (task-to-task)
            const numericDependencies = task.dependencies.filter((dep) => typeof dep === 'number');

            for (const dependencyId of numericDependencies) {
               await prisma.taskDependency.create({
                  data: {
                     taskId: task.id,
                     dependsOnId: dependencyId,
                  },
               });
            }
         }
      }

      // Statistics
      const taskCount = await prisma.task.count();
      const subtaskCount = await prisma.subtask.count();
      const dependencyCount = await prisma.taskDependency.count();

      console.log('\n🎉 Sync completed successfully!');
      console.log(`📊 Database now contains:`);
      console.log(`   - Tasks: ${taskCount}`);
      console.log(`   - Subtasks: ${subtaskCount}`);
      console.log(`   - Dependencies: ${dependencyCount}`);
   } catch (error) {
      console.error('❌ Sync failed:', error);
      throw error;
   }
}

/**
 * Watch for changes in tasks.json and auto-sync
 */
function startWatcher() {
   const tasksJsonPath = join(process.cwd(), '.taskmaster', 'tasks', 'tasks.json');

   console.log('👀 Watching for changes in tasks.json...');
   console.log(`📁 Watching: ${tasksJsonPath}`);

   let timeout: NodeJS.Timeout | null = null;

   watch(tasksJsonPath, (eventType) => {
      if (eventType === 'change') {
         // Debounce rapid changes
         if (timeout) clearTimeout(timeout);

         timeout = setTimeout(async () => {
            console.log('\n📝 tasks.json changed, triggering sync...');
            try {
               await syncToDatabase();
            } catch (error) {
               console.error('❌ Auto-sync failed:', error);
            }
         }, 1000); // Wait 1 second after last change
      }
   });
}

/**
 * Main function
 */
async function main() {
   const args = process.argv.slice(2);
   const command = args[0];
   const force = args.includes('--force');

   try {
      switch (command) {
         case 'sync':
            await syncToDatabase(force);
            break;

         case 'watch':
            await syncToDatabase(force); // Initial sync
            startWatcher();

            // Keep process alive
            process.on('SIGINT', async () => {
               console.log('\n👋 Stopping watcher...');
               await prisma.$disconnect();
               process.exit(0);
            });
            break;

         case 'status':
            const metadata = await prisma.taskMasterMetadata.findFirst();
            const taskCount = await prisma.task.count();
            const subtaskCount = await prisma.subtask.count();

            console.log('📊 Database Status:');
            console.log(`   - Tasks: ${taskCount}`);
            console.log(`   - Subtasks: ${subtaskCount}`);
            console.log(`   - Last Updated: ${metadata?.updated || 'Never'}`);
            break;

         default:
            console.log('🔄 Task Master to Prisma Sync Tool');
            console.log('');
            console.log('Usage:');
            console.log('  npm run sync:taskmaster sync [--force]    # One-time sync');
            console.log('  npm run sync:taskmaster watch [--force]   # Watch for changes');
            console.log('  npm run sync:taskmaster status            # Show database status');
            console.log('');
            console.log('Options:');
            console.log('  --force    # Force sync even if timestamps match');
            break;
      }
   } catch (error) {
      console.error('❌ Script failed:', error);
      process.exit(1);
   } finally {
      if (command !== 'watch') {
         await prisma.$disconnect();
      }
   }
}

// Run if called directly
if (require.main === module) {
   main();
}
