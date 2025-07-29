/**
 * Test script for TaskMaster sync functionality
 *
 * This is a quick test to verify the sync implementation works
 * with the actual tasks.json file in the project.
 */

import { TaskMasterSync } from './sync';
import { TaskMasterDB } from './database';
import { PrismaClient } from '@prisma/client';

async function testSync() {
   const prisma = new PrismaClient();
   const sync = new TaskMasterSync(prisma);
   const db = new TaskMasterDB(prisma);

   try {
      console.log('🔄 Starting Task Master sync test...');

      // Test database connection
      const isHealthy = await db.healthCheck();
      console.log(`📊 Database health check: ${isHealthy ? '✅ Connected' : '❌ Failed'}`);

      if (!isHealthy) {
         console.log('❌ Database connection failed, aborting test');
         return;
      }

      // Perform sync
      console.log('🔄 Syncing tasks.json to database...');
      const syncResult = await sync.syncTasksToDatabase({
         incremental: false, // Full sync for testing
         validateIntegrity: true,
      });

      console.log('✅ Sync completed!');
      console.log(`   Tasks processed: ${syncResult.tasksProcessed}`);
      console.log(`   Subtasks processed: ${syncResult.subtasksProcessed}`);
      console.log(`   Duration: ${syncResult.duration}ms`);
      console.log(`   Errors: ${syncResult.errors.length}`);

      if (syncResult.errors.length > 0) {
         console.log('❌ Sync errors:');
         syncResult.errors.forEach((error) => console.log(`   - ${error}`));
      }

      // Test database queries
      console.log('\n📊 Testing database queries...');

      // Get stats
      const stats = await db.getStats();
      console.log(`   Total tasks: ${stats.totalTasks}`);
      console.log(`   Total subtasks: ${stats.totalSubtasks}`);
      console.log(
         `   By status: ${Object.entries(stats.tasksByStatus)
            .map(([k, v]) => `${k}:${v}`)
            .join(', ')}`
      );
      console.log(
         `   By priority: ${Object.entries(stats.tasksByPriority)
            .map(([k, v]) => `${k}:${v}`)
            .join(', ')}`
      );

      // Get ready tasks
      const readyTasks = await db.getReadyTasks({ limit: 5 });
      console.log(`   Ready tasks: ${readyTasks.length}`);
      readyTasks.forEach((task) => {
         console.log(`   - Task ${task.id}: ${task.title} (${task.status})`);
      });

      // Get pending tasks
      const pendingTasks = await db.getTasksByStatus('pending', { limit: 3 });
      console.log(`   Pending tasks: ${pendingTasks.length}`);
      pendingTasks.forEach((task) => {
         console.log(`   - Task ${task.id}: ${task.title}`);
      });

      console.log('\n✅ All tests completed successfully!');
   } catch (error) {
      console.error('❌ Test failed:', error);
   } finally {
      await sync.disconnect();
      await db.disconnect();
   }
}

// Run the test if this file is executed directly
if (require.main === module) {
   testSync().catch(console.error);
}

export { testSync };
