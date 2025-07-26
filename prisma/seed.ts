import { PrismaClient } from '../libs/server/generated/prisma';
import { readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

interface TaskMasterData {
   master: {
      tasks: Array<{
         id: number;
         title: string;
         description: string;
         details?: string;
         testStrategy?: string;
         priority: string;
         status: string;
         dependencies?: (number | string)[];
         subtasks?: Array<{
            id: number;
            title: string;
            description: string;
            status: string;
            dependencies?: string[];
            details?: string;
            testStrategy?: string;
         }>;
      }>;
      metadata: {
         created: string;
         updated: string;
         description: string;
      };
   };
}

async function main() {
   console.log('🌱 Starting database seeding...');

   try {
      // Read tasks.json file
      const tasksJsonPath = join(process.cwd(), '.taskmaster', 'tasks', 'tasks.json');
      const tasksData: TaskMasterData = JSON.parse(readFileSync(tasksJsonPath, 'utf8'));

      // Clear existing data
      console.log('🧹 Clearing existing data...');
      await prisma.syncConflict.deleteMany();
      await prisma.syncOperation.deleteMany();
      await prisma.taskDependency.deleteMany();
      await prisma.subtask.deleteMany();
      await prisma.task.deleteMany();
      await prisma.taskMasterMetadata.deleteMany();

      // Seed metadata
      console.log('📝 Seeding metadata...');
      await prisma.taskMasterMetadata.create({
         data: {
            created: new Date(tasksData.master.metadata.created),
            updated: new Date(tasksData.master.metadata.updated),
            description: tasksData.master.metadata.description,
         },
      });

      // Seed tasks
      console.log('📋 Seeding tasks...');
      for (const task of tasksData.master.tasks) {
         const createdTask = await prisma.task.create({
            data: {
               id: task.id,
               title: task.title,
               description: task.description,
               details: task.details || null,
               testStrategy: task.testStrategy || null,
               priority: task.priority,
               status: task.status,
               complexity: null, // Not in current tasks.json structure
            },
         });

         console.log(`  ✅ Created task ${createdTask.id}: ${createdTask.title}`);

         // Seed subtasks
         if (task.subtasks && task.subtasks.length > 0) {
            for (const subtask of task.subtasks) {
               const subtaskId = `${task.id}.${subtask.id}`;
               const createdSubtask = await prisma.subtask.create({
                  data: {
                     id: subtaskId,
                     title: subtask.title,
                     description: subtask.description,
                     details: subtask.details || null,
                     testStrategy: subtask.testStrategy || null,
                     status: subtask.status,
                     parentId: task.id,
                     dependencies: JSON.stringify(subtask.dependencies || []),
                  },
               });

               console.log(`    ✅ Created subtask ${createdSubtask.id}: ${createdSubtask.title}`);
            }
         }
      }

      // Seed task dependencies (only numeric task IDs, skip subtask dependencies)
      console.log('🔗 Seeding task dependencies...');
      for (const task of tasksData.master.tasks) {
         if (task.dependencies && task.dependencies.length > 0) {
            // Only process numeric dependencies (task-to-task), skip string dependencies (subtask references)
            const numericDependencies = task.dependencies.filter(
               (dep) => typeof dep === 'number'
            ) as number[];

            for (const dependencyId of numericDependencies) {
               await prisma.taskDependency.create({
                  data: {
                     taskId: task.id,
                     dependsOnId: dependencyId,
                  },
               });

               console.log(
                  `  🔗 Created dependency: Task ${task.id} depends on Task ${dependencyId}`
               );
            }
         }
      }

      // Statistics
      const taskCount = await prisma.task.count();
      const subtaskCount = await prisma.subtask.count();
      const dependencyCount = await prisma.taskDependency.count();

      console.log('\n🎉 Seeding completed successfully!');
      console.log(`📊 Statistics:`);
      console.log(`   - Tasks: ${taskCount}`);
      console.log(`   - Subtasks: ${subtaskCount}`);
      console.log(`   - Dependencies: ${dependencyCount}`);
   } catch (error) {
      console.error('❌ Error during seeding:', error);
      throw error;
   }
}

main()
   .catch((e) => {
      console.error('❌ Seeding failed:', e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
