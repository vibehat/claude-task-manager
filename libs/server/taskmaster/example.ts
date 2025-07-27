/**
 * TaskMaster API Library Usage Example
 *
 * Demonstrates how to use the lib/taskmaster module for common operations.
 */

import { TaskMasterSync, TaskMasterDB } from './index';
import { PrismaClient } from '@prisma/client';

async function example() {
   // Initialize Prisma client
   const prisma = new PrismaClient();

   // Initialize TaskMaster modules
   const sync = new TaskMasterSync(prisma);
   const db = new TaskMasterDB(prisma);

   try {
      console.log('=== TaskMaster API Library Example ===\n');

      // 1. Health Check
      console.log('1. Checking database connection...');
      const isHealthy = await db.healthCheck();
      console.log(`   Database: ${isHealthy ? '✅ Connected' : '❌ Failed'}\n`);

      // 2. Sync tasks.json to database
      console.log('2. Syncing tasks.json to database...');
      const syncResult = await sync.syncTasksToDatabase({
         incremental: false,
         validateIntegrity: true,
      });
      console.log(
         `   ✅ Synced ${syncResult.tasksProcessed} tasks and ${syncResult.subtasksProcessed} subtasks`
      );
      console.log(`   Duration: ${syncResult.duration}ms\n`);

      // 3. Get database statistics
      console.log('3. Database statistics:');
      const stats = await db.getStats();
      console.log(`   Total tasks: ${stats.totalTasks}`);
      console.log(`   Total subtasks: ${stats.totalSubtasks}`);
      console.log(`   Status breakdown:`);
      Object.entries(stats.tasksByStatus).forEach(([status, count]) => {
         console.log(`     ${status}: ${count}`);
      });
      console.log(`   Priority breakdown:`);
      Object.entries(stats.tasksByPriority).forEach(([priority, count]) => {
         console.log(`     ${priority}: ${count}`);
      });
      console.log('');

      // 4. Query tasks by status
      console.log('4. Finding pending tasks...');
      const pendingTasks = await db.getTasksByStatus('pending', { limit: 5 });
      console.log(`   Found ${pendingTasks.length} pending tasks:`);
      pendingTasks.forEach((task) => {
         console.log(`   - Task ${task.id}: ${task.title}`);
         if (task.subtasks && task.subtasks.length > 0) {
            console.log(`     Subtasks: ${task.subtasks.length}`);
         }
      });
      console.log('');

      // 5. Find ready tasks (no blocking dependencies)
      console.log('5. Finding ready-to-work tasks...');
      const readyTasks = await db.getReadyTasks({ limit: 3 });
      console.log(`   Found ${readyTasks.length} ready tasks:`);
      readyTasks.forEach((task) => {
         console.log(`   - Task ${task.id}: ${task.title} (${task.priority} priority)`);
      });
      console.log('');

      // 6. Search tasks
      console.log('6. Searching for tasks with "implement" in title...');
      const searchResults = await db.searchTasks('implement', { limit: 3 });
      console.log(`   Found ${searchResults.length} matching tasks:`);
      searchResults.forEach((task) => {
         console.log(`   - Task ${task.id}: ${task.title}`);
      });
      console.log('');

      // 7. Get detailed task information
      if (pendingTasks.length > 0) {
         const firstTask = pendingTasks[0];
         console.log(`7. Getting detailed information for Task ${firstTask.id}...`);
         const taskDetail = await db.getTask(firstTask.id, { includeSubtasks: true });
         if (taskDetail) {
            console.log(`   Title: ${taskDetail.title}`);
            console.log(`   Status: ${taskDetail.status}`);
            console.log(`   Priority: ${taskDetail.priority}`);
            console.log(`   Dependencies: ${taskDetail.dependencies.length}`);
            console.log(`   Subtasks: ${taskDetail.subtasks?.length || 0}`);
            console.log(`   Created: ${taskDetail.createdAt}`);
            console.log(`   Updated: ${taskDetail.updatedAt}`);
         }
      }

      console.log('\n✅ Example completed successfully!');
   } catch (error) {
      console.error('❌ Example failed:', error);
   } finally {
      // Always clean up connections
      await sync.disconnect();
      await db.disconnect();
   }
}

// Export for use in other modules
export { example };

// Run example if this file is executed directly
if (require.main === module) {
   example().catch(console.error);
}

/*
Example usage in other files:

import { TaskMasterSync, TaskMasterDB } from 'lib/taskmaster';

// Quick sync
const sync = new TaskMasterSync();
await sync.syncTasksToDatabase();

// Query tasks
const db = new TaskMasterDB();
const pendingTasks = await db.getTasksByStatus('pending');
const readyTasks = await db.getReadyTasks();

// Remember to disconnect when done
await sync.disconnect();
await db.disconnect();
*/
