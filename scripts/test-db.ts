import { PrismaClient } from '../libs/server/generated/prisma';

const prisma = new PrismaClient();

async function testDatabase() {
   try {
      console.log('🔍 Testing database connection and data...');

      // Count records
      const taskCount = await prisma.task.count();
      const subtaskCount = await prisma.subtask.count();
      const dependencyCount = await prisma.taskDependency.count();

      console.log(`📊 Database Statistics:`);
      console.log(`   - Tasks: ${taskCount}`);
      console.log(`   - Subtasks: ${subtaskCount}`);
      console.log(`   - Dependencies: ${dependencyCount}`);

      // Test task retrieval with relationships
      const taskWithSubtasks = await prisma.task.findFirst({
         where: {
            subtasks: {
               some: {},
            },
         },
         include: {
            subtasks: true,
            dependencies: {
               include: {
                  dependsOn: {
                     select: {
                        id: true,
                        title: true,
                     },
                  },
               },
            },
         },
      });

      if (taskWithSubtasks) {
         console.log(`\n📋 Sample Task: ${taskWithSubtasks.title}`);
         console.log(`   - Status: ${taskWithSubtasks.status}`);
         console.log(`   - Priority: ${taskWithSubtasks.priority}`);
         console.log(`   - Subtasks: ${taskWithSubtasks.subtasks.length}`);
         console.log(`   - Dependencies: ${taskWithSubtasks.dependencies.length}`);
      }

      // Test status filtering
      const completedTasks = await prisma.task.count({
         where: {
            status: 'done',
         },
      });

      const pendingTasks = await prisma.task.count({
         where: {
            status: 'pending',
         },
      });

      const inProgressTasks = await prisma.task.count({
         where: {
            status: 'in-progress',
         },
      });

      console.log(`\n📈 Task Status Distribution:`);
      console.log(`   - Done: ${completedTasks}`);
      console.log(`   - Pending: ${pendingTasks}`);
      console.log(`   - In Progress: ${inProgressTasks}`);

      console.log('\n✅ Database test completed successfully!');
   } catch (error) {
      console.error('❌ Database test failed:', error);
   } finally {
      await prisma.$disconnect();
   }
}

testDatabase();
