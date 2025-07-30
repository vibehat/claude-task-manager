import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

// Basic test data for Issues (simplified to avoid import issues)
const testUsers = [
   {
      id: 'user1',
      name: 'John Doe',
      email: 'john@example.com',
      avatarUrl: 'https://api.dicebear.com/9.x/glass/svg?seed=john',
      status: 'ONLINE' as const,
      role: 'ADMIN' as const,
      joinedDate: '2022-01-01',
      teamIds: ['CORE', 'DESIGN'],
   },
   {
      id: 'user2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      avatarUrl: 'https://api.dicebear.com/9.x/glass/svg?seed=jane',
      status: 'OFFLINE' as const,
      role: 'MEMBER' as const,
      joinedDate: '2023-01-01',
      teamIds: ['CORE'],
   },
];

const testTeams = [
   {
      id: 'team1',
      name: 'LNDev Core',
      icon: '🛠️',
      joined: true,
      color: '#FF0000',
   },
   {
      id: 'team2',
      name: 'Design System',
      icon: '🎨',
      joined: true,
      color: '#00FF00',
   },
];

const testCycles = [
   {
      id: 'cycle1',
      number: 42,
      name: 'Sprint 42 - Pixel Perfect',
      teamId: 'team1',
      startDate: '2025-03-10',
      endDate: '2025-03-24',
      progress: 80,
   },
   {
      id: 'cycle2',
      number: 43,
      name: 'Sprint 43 - Performance Boost',
      teamId: 'team2',
      startDate: '2025-03-10',
      endDate: '2025-03-24',
      progress: 50,
   },
];

const testProjects = [
   {
      id: 'proj1',
      name: 'Linear UI Components',
      description: 'Building reusable UI components',
      color: '#1f2937',
      identifier: 'LNUI',
      icon: 'Cuboid',
      percentComplete: 80,
      startDate: '2025-03-08',
      health: 'ON_TRACK',
   },
   {
      id: 'proj2',
      name: 'Performance Optimization',
      description: 'Improving app performance',
      color: '#059669',
      identifier: 'PERF',
      icon: 'Zap',
      percentComplete: 50,
      health: 'AT_RISK',
   },
];

const testLabels = [
   {
      id: 'label1',
      name: 'Bug',
      color: '#ef4444',
      description: 'Something that needs fixing',
   },
   {
      id: 'label2',
      name: 'Feature',
      color: '#10b981',
      description: 'New functionality',
   },
   {
      id: 'label3',
      name: 'Enhancement',
      color: '#3b82f6',
      description: 'Improvement to existing feature',
   },
   {
      id: 'label4',
      name: 'UI Enhancement',
      color: '#8b5cf6',
      description: 'User interface improvements',
   },
   {
      id: 'label5',
      name: 'Documentation',
      color: '#3b82f6',
      description: 'Documentation updates',
   },
   {
      id: 'label6',
      name: 'Refactor',
      color: '#f59e0b',
      description: 'Code refactoring',
   },
   {
      id: 'label7',
      name: 'Performance',
      color: '#f97316',
      description: 'Performance improvements',
   },
   {
      id: 'label8',
      name: 'Design',
      color: '#ec4899',
      description: 'Design related tasks',
   },
   {
      id: 'label9',
      name: 'Security',
      color: '#6b7280',
      description: 'Security improvements',
   },
   {
      id: 'label10',
      name: 'Accessibility',
      color: '#6366f1',
      description: 'Accessibility improvements',
   },
   {
      id: 'label11',
      name: 'Testing',
      color: '#14b8a6',
      description: 'Testing related tasks',
   },
   {
      id: 'label12',
      name: 'Internationalization',
      color: '#06b6d4',
      description: 'i18n and localization',
   },
];

// Issue statuses from mock-data/status.tsx
const testIssueStatuses = [
   { id: 'in-progress', name: 'In Progress', color: '#facc15', iconName: 'InProgressIcon' },
   {
      id: 'technical-review',
      name: 'Technical Review',
      color: '#22c55e',
      iconName: 'TechnicalReviewIcon',
   },
   { id: 'completed', name: 'Completed', color: '#8b5cf6', iconName: 'CompletedIcon' },
   { id: 'paused', name: 'Paused', color: '#0ea5e9', iconName: 'PausedIcon' },
   { id: 'to-do', name: 'Todo', color: '#f97316', iconName: 'ToDoIcon' },
   { id: 'backlog', name: 'Backlog', color: '#ec4899', iconName: 'BacklogIcon' },
];

// Issue priorities from mock-data/priorities.tsx
const testIssuePriorities = [
   { id: 'no-priority', name: 'No priority', iconName: 'NoPriorityIcon', order: 4 },
   { id: 'urgent', name: 'Urgent', iconName: 'UrgentPriorityIcon', order: 0 },
   { id: 'high', name: 'High', iconName: 'HighPriorityIcon', order: 1 },
   { id: 'medium', name: 'Medium', iconName: 'MediumPriorityIcon', order: 2 },
   { id: 'low', name: 'Low', iconName: 'LowPriorityIcon', order: 3 },
];

const testIssues = [
   {
      identifier: 'LNUI-101',
      title: 'Create responsive button component',
      description: 'Design and implement a fully responsive button component with variants',
      statusId: 'to-do',
      priorityId: 'high',
      rank: 'a0',
      cycleId: 'cycle1',
      assigneeId: 'user1',
      projectId: 'proj1',
      labelIds: ['label2'],
   },
   {
      identifier: 'LNUI-102',
      title: 'Fix modal backdrop issue',
      description: 'Modal backdrop is not properly covering the screen on mobile devices',
      statusId: 'in-progress',
      priorityId: 'medium',
      rank: 'a1',
      cycleId: 'cycle1',
      assigneeId: 'user2',
      projectId: 'proj1',
      labelIds: ['label1'],
   },
   {
      identifier: 'PERF-001',
      title: 'Optimize image loading',
      description: 'Implement lazy loading and WebP format support for images',
      statusId: 'completed',
      priorityId: 'high',
      rank: 'a2',
      cycleId: 'cycle2',
      assigneeId: 'user1',
      projectId: 'proj2',
      labelIds: ['label3'],
   },
];

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
      await prisma.issueLabel.deleteMany();
      await prisma.issue.deleteMany();
      await prisma.issuePriority.deleteMany();
      await prisma.issueStatus.deleteMany();
      await prisma.teamProject.deleteMany();
      await prisma.teamMember.deleteMany();
      await prisma.cycle.deleteMany();
      await prisma.label.deleteMany();
      await prisma.project.deleteMany();
      await prisma.team.deleteMany();
      await prisma.user.deleteMany();
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
            const numericDependencies = task.dependencies.filter((dep) => typeof dep === 'number');

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

      // Seed Users
      console.log('👥 Seeding users...');
      const userMap = new Map<string, string>(); // Mock ID -> Database ID
      for (const user of testUsers) {
         const createdUser = await prisma.user.create({
            data: {
               name: user.name,
               email: user.email,
               avatarUrl: user.avatarUrl,
               status: user.status,
               role: user.role,
               joinedDate: new Date(user.joinedDate),
               teamIds: JSON.stringify(user.teamIds),
            },
         });
         userMap.set(user.id, createdUser.id);
         console.log(`  ✅ Created user ${createdUser.name}`);
      }

      // Seed Teams
      console.log('👥 Seeding teams...');
      const teamMap = new Map<string, string>(); // Mock ID -> Database ID
      for (const team of testTeams) {
         const createdTeam = await prisma.team.create({
            data: {
               name: team.name,
               icon: team.icon,
               joined: team.joined,
               color: team.color,
            },
         });
         teamMap.set(team.id, createdTeam.id);
         console.log(`  ✅ Created team ${createdTeam.name}`);
      }

      // Seed Cycles
      console.log('🔄 Seeding cycles...');
      const cycleMap = new Map<string, string>(); // Mock ID -> Database ID
      for (const cycle of testCycles) {
         const teamId = teamMap.get(cycle.teamId);
         if (teamId) {
            const createdCycle = await prisma.cycle.create({
               data: {
                  number: cycle.number,
                  name: cycle.name,
                  teamId: teamId,
                  startDate: new Date(cycle.startDate),
                  endDate: new Date(cycle.endDate),
                  progress: cycle.progress,
               },
            });
            cycleMap.set(cycle.id, createdCycle.id);
            console.log(`  ✅ Created cycle ${createdCycle.name}`);
         }
      }

      // Seed Issue Statuses
      console.log('📊 Seeding issue statuses...');
      for (const status of testIssueStatuses) {
         await prisma.issueStatus.create({
            data: {
               id: status.id,
               name: status.name,
               color: status.color,
               iconName: status.iconName,
            },
         });
         console.log(`  ✅ Created status ${status.name}`);
      }

      // Seed Issue Priorities
      console.log('🎯 Seeding issue priorities...');
      for (const priority of testIssuePriorities) {
         await prisma.issuePriority.create({
            data: {
               id: priority.id,
               name: priority.name,
               iconName: priority.iconName,
               order: priority.order,
            },
         });
         console.log(`  ✅ Created priority ${priority.name}`);
      }

      // Seed Projects
      console.log('📁 Seeding projects...');
      const projectMap = new Map<string, string>(); // Mock ID -> Database ID
      for (const project of testProjects) {
         const createdProject = await prisma.project.create({
            data: {
               name: project.name,
               description: project.description,
               color: project.color,
               identifier: project.identifier,
               icon: project.icon,
               percentComplete: project.percentComplete,
               startDate: project.startDate ? new Date(project.startDate) : null,
               health: project.health as any,
            },
         });
         projectMap.set(project.id, createdProject.id);
         console.log(`  ✅ Created project ${createdProject.name}`);
      }

      // Seed Labels
      console.log('🏷️ Seeding labels...');
      const labelMap = new Map<string, string>(); // Mock ID -> Database ID
      for (const label of testLabels) {
         const createdLabel = await prisma.label.create({
            data: {
               name: label.name,
               color: label.color,
               description: label.description,
            },
         });
         labelMap.set(label.id, createdLabel.id);
         console.log(`  ✅ Created label ${createdLabel.name}`);
      }

      // Seed Issues
      console.log('🎫 Seeding issues...');
      for (const issue of testIssues) {
         const assigneeId = issue.assigneeId ? userMap.get(issue.assigneeId) : null;
         const projectId = issue.projectId ? projectMap.get(issue.projectId) : null;
         const cycleId = issue.cycleId ? cycleMap.get(issue.cycleId) : null;

         const createdIssue = await prisma.issue.create({
            data: {
               identifier: issue.identifier,
               title: issue.title,
               description: issue.description,
               statusId: issue.statusId,
               priorityId: issue.priorityId,
               rank: issue.rank,
               cycleId: cycleId,
               dueDate: null,
               issueType: 'TASK',
               assigneeId: assigneeId,
               projectId: projectId,
            },
         });

         // Create issue-label relationships
         for (const labelId of issue.labelIds) {
            const dbLabelId = labelMap.get(labelId);
            if (dbLabelId) {
               await prisma.issueLabel.create({
                  data: {
                     issueId: createdIssue.id,
                     labelId: dbLabelId,
                  },
               });
            }
         }

         console.log(`  ✅ Created issue ${createdIssue.identifier}: ${createdIssue.title}`);
      }

      // Statistics
      const taskCount = await prisma.task.count();
      const subtaskCount = await prisma.subtask.count();
      const dependencyCount = await prisma.taskDependency.count();
      const userCount = await prisma.user.count();
      const teamCount = await prisma.team.count();
      const cycleCount = await prisma.cycle.count();
      const projectCount = await prisma.project.count();
      const labelCount = await prisma.label.count();
      const issueStatusCount = await prisma.issueStatus.count();
      const issuePriorityCount = await prisma.issuePriority.count();
      const issueCount = await prisma.issue.count();
      const issueLabelCount = await prisma.issueLabel.count();

      console.log('\n🎉 Seeding completed successfully!');
      console.log(`📊 Statistics:`);
      console.log(`   - Tasks: ${taskCount}`);
      console.log(`   - Subtasks: ${subtaskCount}`);
      console.log(`   - Dependencies: ${dependencyCount}`);
      console.log(`   - Users: ${userCount}`);
      console.log(`   - Teams: ${teamCount}`);
      console.log(`   - Cycles: ${cycleCount}`);
      console.log(`   - Projects: ${projectCount}`);
      console.log(`   - Labels: ${labelCount}`);
      console.log(`   - Issue Statuses: ${issueStatusCount}`);
      console.log(`   - Issue Priorities: ${issuePriorityCount}`);
      console.log(`   - Issues: ${issueCount}`);
      console.log(`   - Issue-Label relations: ${issueLabelCount}`);
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
