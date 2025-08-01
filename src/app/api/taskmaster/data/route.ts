import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import type {
   TaskManagerData,
   TaskExtra,
} from '../../../../libs/client/services/taskManagerDataService';
import type { Task } from '../../../../libs/client/types/dataModels';

const TASK_MANAGER_DATA_PATH = path.join(process.cwd(), '.taskmaster/tasks/taskmanager.json');
const TASK_MASTER_DATA_PATH = path.join(process.cwd(), '.taskmaster/tasks/tasks.json');

interface TaskMasterSubtask {
   id: number;
   title: string;
   description: string;
   dependencies: string[];
   details?: string;
   status: string;
   testStrategy?: string;
}

interface TaskMasterTask {
   id: number;
   title: string;
   description: string;
   details?: string;
   testStrategy?: string;
   priority: string;
   dependencies: string[];
   status: string;
   subtasks?: TaskMasterSubtask[];
}

interface TaskMasterData {
   master: {
      tasks: TaskMasterTask[];
   };
}

/**
 * Merge taskExtra data with tasks
 */
function mergeTasksWithExtra(tasks: Task[], taskExtra?: Record<string, TaskExtra>): Task[] {
   if (!taskExtra) return tasks;

   return tasks.map((task) => {
      const extra = taskExtra[task.id];
      if (!extra) return task;

      return {
         ...task,
         createdAt: extra.createdAt ? new Date(extra.createdAt) : task.createdAt,
         updatedAt: extra.updatedAt ? new Date(extra.updatedAt) : task.updatedAt,
         // Add any additional metadata from taskExtra if needed
         ...(extra.metadata && { metadata: extra.metadata }),
      };
   });
}

/**
 * Reconstruct UI tasks from taskExtra data
 */
function reconstructUITasksFromExtra(taskExtra?: Record<string, TaskExtra>): Task[] {
   if (!taskExtra) return [];

   const now = new Date();
   const uiTasks: Task[] = [];

   // Only reconstruct tasks that are not TaskMaster CLI tasks (don't have tm- prefix)
   for (const [taskId, extra] of Object.entries(taskExtra)) {
      if (taskId.startsWith('tm-')) continue;

      // Reconstruct basic UI task structure from metadata
      // Only reconstruct if metadata contains actual task data (has title, statusId, etc.)
      if (extra.metadata && extra.metadata.title && extra.metadata.statusId) {
         const task: Task = {
            id: taskId,
            title: extra.metadata.title,
            description: extra.metadata.description || '',
            statusId: extra.metadata.statusId,
            priorityId: extra.metadata.priorityId || 'priority-3',
            assigneeId: extra.metadata.assigneeId,
            projectId: extra.metadata.projectId || 'project-personal',
            parentTaskId: extra.metadata.parentTaskId,
            labelIds: extra.metadata.labelIds || [],
            taskId: extra.metadata.taskId,
            subtaskId: extra.metadata.subtaskId,
            orderIndex: extra.metadata.orderIndex || 0,
            createdAt: extra.createdAt ? new Date(extra.createdAt) : now,
            updatedAt: extra.updatedAt ? new Date(extra.updatedAt) : now,
         };
         uiTasks.push(task);
      }
      // Skip entries that don't have proper task metadata (like orphaned data)
   }

   return uiTasks;
}

/**
 * Convert TaskMaster CLI task to UI Task format
 */
function convertTaskMasterTask(
   tmTask: TaskMasterTask,
   priorityMapping: Record<string, string>
): Task {
   const now = new Date();

   return {
      id: `tm-${tmTask.id}`,
      title: tmTask.title,
      description: tmTask.description || '',
      statusId: tmTask.status, // Use TaskMaster status directly
      priorityId: priorityMapping[tmTask.priority] || 'priority-3', // default to medium
      assigneeId: undefined,
      projectId: 'project-personal', // default project for TaskMaster tasks
      parentTaskId: undefined,
      labelIds: [],
      taskId: tmTask.id,
      subtaskId: undefined,
      orderIndex: tmTask.id,
      createdAt: now,
      updatedAt: now,
   };
}

/**
 * Convert TaskMaster CLI subtask to UI Task format
 */
function convertTaskMasterSubtask(
   subtask: TaskMasterSubtask,
   parentTask: TaskMasterTask,
   priorityMapping: Record<string, string>
): Task {
   const now = new Date();

   return {
      id: `tm-${parentTask.id}.${subtask.id}`,
      title: subtask.title,
      description: subtask.description || '',
      statusId: subtask.status, // Use TaskMaster status directly
      priorityId: priorityMapping[parentTask.priority] || 'priority-3', // inherit from parent
      assigneeId: undefined,
      projectId: 'project-personal',
      parentTaskId: `tm-${parentTask.id}`,
      labelIds: [],
      taskId: parentTask.id,
      subtaskId: `${subtask.id}`,
      orderIndex: subtask.id,
      createdAt: now,
      updatedAt: now,
   };
}

export async function GET(): Promise<NextResponse> {
   let baseData: TaskManagerData | null = null;
   let taskMasterTasks: TaskMasterTask[] = [];

   try {
      // Try to read UI data file
      try {
         const fileContent = await fs.readFile(TASK_MANAGER_DATA_PATH, 'utf-8');
         baseData = JSON.parse(fileContent);
         console.log('Found TaskManager UI data');
      } catch {
         console.log('TaskManager UI data not found, will use defaults');
      }

      // Try to read TaskMaster CLI data file
      try {
         const taskContent = await fs.readFile(TASK_MASTER_DATA_PATH, 'utf-8');
         const tasksData: TaskMasterData = JSON.parse(taskContent);
         taskMasterTasks = tasksData.master?.tasks || [];
         console.log(`Found ${taskMasterTasks.length} TaskMaster CLI tasks`);
      } catch {
         console.log('TaskMaster CLI data not found');
      }

      // If neither file exists, return 404
      if (!baseData && taskMasterTasks.length === 0) {
         return NextResponse.json({ error: 'No TaskMaster data files found' }, { status: 404 });
      }

      // Use base data or create minimal structure
      // taskmanager.json doesn't contain tasks, only metadata and taskExtra
      const finalData: TaskManagerData = baseData
         ? {
              ...baseData,
              tasks: [], // Always initialize tasks as empty array since taskmanager.json doesn't store them
           }
         : {
              users: [
                 {
                    id: 'user-1',
                    name: 'You',
                    email: 'user@example.com',
                    avatarUrl: '',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
              ],
              projects: [
                 {
                    id: 'project-personal',
                    name: 'Personal Tasks',
                    description: 'Individual task management',
                    teamId: 'team-individual',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
              ],
              labels: [
                 {
                    id: 'label-taskmaster',
                    name: 'TaskMaster',
                    color: '#3498db',
                    description: 'Tasks from TaskMaster CLI',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
              ],
              statuses: [
                 {
                    id: 'pending',
                    name: 'Pending',
                    color: '#3498db',
                    order: 0,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
                 {
                    id: 'in-progress',
                    name: 'In Progress',
                    color: '#f39c12',
                    order: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
                 {
                    id: 'review',
                    name: 'Review',
                    color: '#9b59b6',
                    order: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
                 {
                    id: 'done',
                    name: 'Done',
                    color: '#2ecc71',
                    order: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
                 {
                    id: 'deferred',
                    name: 'Deferred',
                    color: '#95a5a6',
                    order: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
                 {
                    id: 'cancelled',
                    name: 'Cancelled',
                    color: '#e74c3c',
                    order: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
              ],
              priorities: [
                 {
                    id: 'priority-0',
                    name: 'no_priority',
                    value: 0,
                    color: '#95a5a6',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
                 {
                    id: 'priority-1',
                    name: 'urgent',
                    value: 4,
                    color: '#e74c3c',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
                 {
                    id: 'priority-2',
                    name: 'high',
                    value: 3,
                    color: '#e67e22',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
                 {
                    id: 'priority-3',
                    name: 'medium',
                    value: 2,
                    color: '#f39c12',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
                 {
                    id: 'priority-4',
                    name: 'low',
                    value: 1,
                    color: '#3498db',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                 },
              ],
              tasks: [],
              metadata: {
                 created: new Date().toISOString(),
                 updated: new Date().toISOString(),
                 description: 'Merged TaskMaster UI and CLI data',
              },
           };

      // Create priority mapping for TaskMaster data
      const priorityMapping: Record<string, string> = {
         urgent: 'priority-1',
         high: 'priority-2',
         medium: 'priority-3',
         low: 'priority-4',
      };

      // Convert and merge TaskMaster CLI tasks
      const convertedTasks: Task[] = [];

      for (const tmTask of taskMasterTasks) {
         // Convert parent task
         const parentTask = convertTaskMasterTask(tmTask, priorityMapping);
         convertedTasks.push(parentTask);

         // Convert subtasks
         if (tmTask.subtasks) {
            for (const subtask of tmTask.subtasks) {
               const convertedSubtask = convertTaskMasterSubtask(subtask, tmTask, priorityMapping);
               convertedTasks.push(convertedSubtask);
            }
         }
      }

      // Reconstruct UI tasks from taskExtra data (since taskmanager.json doesn't store tasks)
      const uiTasks = reconstructUITasksFromExtra(finalData.taskExtra);

      // Combine UI tasks with TaskMaster CLI tasks
      const allTasks = [...uiTasks, ...convertedTasks];

      // Apply any remaining taskExtra data to all tasks
      finalData.tasks = mergeTasksWithExtra(allTasks, finalData.taskExtra);

      console.log(
         `Merged data: ${uiTasks.length} UI tasks + ${convertedTasks.length} TaskMaster tasks = ${finalData.tasks.length} total`
      );

      return NextResponse.json(finalData);
   } catch (error) {
      console.error('Error reading TaskMaster data:', error);
      return NextResponse.json({ error: 'Failed to read TaskMaster data' }, { status: 500 });
   }
}

/**
 * Convert UI tasks to taskExtra format (store all task data in taskExtra)
 */
function convertUITasksToExtra(tasks: Task[]): Record<string, TaskExtra> {
   const taskExtra: Record<string, TaskExtra> = {};

   for (const task of tasks) {
      const { createdAt, updatedAt, ...taskData } = task;

      // Handle both Date objects and string timestamps
      const createdAtString = createdAt instanceof Date ? createdAt.toISOString() : createdAt;
      const updatedAtString = updatedAt instanceof Date ? updatedAt.toISOString() : updatedAt;

      // Store all task data in taskExtra.metadata
      taskExtra[task.id] = {
         createdAt: createdAtString,
         updatedAt: updatedAtString,
         metadata: taskData, // Store entire task object (except timestamps) as metadata
      };
   }

   return taskExtra;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
   try {
      const data: TaskManagerData = await request.json();

      // Separate UI tasks from TaskMaster CLI tasks
      // Only save UI tasks (those without tm- prefix) to taskmanager.json
      // TaskMaster CLI tasks should only be managed via TaskMaster CLI
      const uiTasks = (data.tasks || []).filter((task) => !task.id.startsWith('tm-'));

      // Convert UI tasks to taskExtra format (all task data goes into taskExtra)
      const taskExtraFromUI = convertUITasksToExtra(uiTasks);

      const uiData: TaskManagerData = {
         users: data.users,
         projects: data.projects,
         labels: data.labels,
         statuses: data.statuses,
         priorities: data.priorities,
         // No tasks property - all task data is in taskExtra
         taskExtra: {
            ...data.taskExtra,
            ...taskExtraFromUI,
         },
         metadata: {
            ...data.metadata,
            updated: new Date().toISOString(),
            description: 'UI data for TaskMaster integration',
         },
      };

      // Update only the UI data file
      await fs.writeFile(TASK_MANAGER_DATA_PATH, JSON.stringify(uiData, null, 2));

      console.log(`Saved ${uiTasks.length} UI tasks to taskExtra (excluded TaskMaster CLI tasks)`);

      return NextResponse.json({ success: true });
   } catch (error) {
      console.error('Error writing TaskManager data:', error);
      return NextResponse.json({ error: 'Failed to write TaskManager data' }, { status: 500 });
   }
}
