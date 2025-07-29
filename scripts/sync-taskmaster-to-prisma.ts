#!/usr/bin/env ts-node
/**
 * One-way sync script from Task Master tasks.json to Prisma database
 * This is a standalone script version of what Task 24.4 will implement as a service
 */

import { PrismaClient } from '@prisma/client';
import { readFileSync, watch } from 'fs';
import { join } from 'path';
import { TaskMasterSync } from '../libs/server/taskmaster/sync';

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
 * Sync tasks.json data to Prisma database using the comprehensive TaskMasterSync
 */
async function syncToDatabase(force = false) {
   console.log(`🔄 ${force ? 'Force syncing' : 'Syncing'} Task Master data to database...`);

   try {
      const sync = new TaskMasterSync(prisma);
      const result = await sync.syncTasksToDatabase({
         validateIntegrity: true,
         incremental: !force,
      });

      if (result.success) {
         console.log('\n🎉 Sync completed successfully!');
         console.log(`📊 Database now contains:`);
         console.log(`   - Tasks processed: ${result.tasksProcessed}`);
         console.log(`   - Subtasks processed: ${result.subtasksProcessed}`);
         console.log(`   - Issues created: ${result.issuesCreated}`);
         console.log(`   - Duration: ${result.duration}ms`);
      } else {
         console.error('❌ Sync failed with errors:', result.errors);
      }
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
            const issueCount = await prisma.issue.count({
               where: { issueType: { in: ['TASK', 'SUBTASK'] } }
            });

            console.log('📊 Database Status:');
            console.log(`   - Tasks: ${taskCount}`);
            console.log(`   - Subtasks: ${subtaskCount}`);
            console.log(`   - Issues: ${issueCount}`);
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
