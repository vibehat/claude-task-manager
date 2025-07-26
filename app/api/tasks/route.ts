import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import {
   Task,
   TasksData,
   TasksResponse,
   TaskResponse,
   validateTask,
   validateTasksData,
   safeParseTasksData,
   TaskMasterAPIError,
   DEFAULT_TASK_PRIORITY,
} from '@/lib/types';

// Helper function to get tasks file path
const getTasksFilePath = () => {
   return join(process.cwd(), '.taskmaster', 'tasks', 'tasks.json');
};

// Helper function to read tasks from file
async function readTasks(): Promise<TasksData> {
   try {
      const filePath = getTasksFilePath();
      const fileContent = await readFile(filePath, 'utf-8');
      return JSON.parse(fileContent);
   } catch (error) {
      console.error('Error reading tasks file:', error);
      throw new Error('Failed to read tasks data');
   }
}

// Helper function to write tasks to file
async function writeTasks(data: TasksData): Promise<void> {
   try {
      const filePath = getTasksFilePath();
      const updatedData = {
         ...data,
         metadata: {
            ...data.metadata,
            updated: new Date().toISOString(),
         },
      };
      await writeFile(filePath, JSON.stringify(updatedData, null, 2));
   } catch (error) {
      console.error('Error writing tasks file:', error);
      throw new Error('Failed to write tasks data');
   }
}

// GET /api/tasks - Retrieve all tasks or filtered tasks
export async function GET(request: NextRequest) {
   try {
      const { searchParams } = new URL(request.url);
      const status = searchParams.get('status');
      const priority = searchParams.get('priority');
      const id = searchParams.get('id');

      const tasksData = await readTasks();
      let tasks = tasksData.tasks.master;

      // Filter by specific task ID
      if (id) {
         const taskId = parseInt(id);
         const task = tasks.find((t) => t.id === taskId);
         if (!task) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
         }
         return NextResponse.json({ task });
      }

      // Filter by status
      if (status) {
         tasks = tasks.filter((task) => task.status === status);
      }

      // Filter by priority
      if (priority) {
         tasks = tasks.filter((task) => task.priority === priority);
      }

      return NextResponse.json({
         tasks,
         metadata: tasksData.metadata,
         total: tasks.length,
      });
   } catch (error) {
      console.error('GET /api/tasks error:', error);
      return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
   }
}

// POST /api/tasks - Create a new task
export async function POST(request: NextRequest) {
   try {
      const body = await request.json();
      const { title, description, priority = 'medium', dependencies = [] } = body;

      // Validation
      if (!title || !description) {
         return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
      }

      const tasksData = await readTasks();
      const tasks = tasksData.tasks.master;

      // Generate new task ID
      const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
      const newTask: Task = {
         id: maxId + 1,
         title,
         description,
         status: 'pending',
         priority,
         dependencies,
         details: body.details || '',
         testStrategy: body.testStrategy || '',
         subtasks: [],
      };

      tasks.push(newTask);
      await writeTasks(tasksData);

      return NextResponse.json(
         { task: newTask, message: 'Task created successfully' },
         { status: 201 }
      );
   } catch (error) {
      console.error('POST /api/tasks error:', error);
      return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
   }
}

// PUT /api/tasks - Update an existing task
export async function PUT(request: NextRequest) {
   try {
      const body = await request.json();
      const { id, ...updates } = body;

      if (!id) {
         return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
      }

      const tasksData = await readTasks();
      const tasks = tasksData.tasks.master;
      const taskIndex = tasks.findIndex((task) => task.id === id);

      if (taskIndex === -1) {
         return NextResponse.json({ error: 'Task not found' }, { status: 404 });
      }

      // Update task with provided fields
      tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
      await writeTasks(tasksData);

      return NextResponse.json({
         task: tasks[taskIndex],
         message: 'Task updated successfully',
      });
   } catch (error) {
      console.error('PUT /api/tasks error:', error);
      return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
   }
}

// DELETE /api/tasks - Delete a task (mark as cancelled)
export async function DELETE(request: NextRequest) {
   try {
      const { searchParams } = new URL(request.url);
      const id = searchParams.get('id');

      if (!id) {
         return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
      }

      const taskId = parseInt(id);
      const tasksData = await readTasks();
      const tasks = tasksData.tasks.master;
      const taskIndex = tasks.findIndex((task) => task.id === taskId);

      if (taskIndex === -1) {
         return NextResponse.json({ error: 'Task not found' }, { status: 404 });
      }

      // Mark task as cancelled instead of removing it
      tasks[taskIndex].status = 'cancelled';
      await writeTasks(tasksData);

      return NextResponse.json({
         task: tasks[taskIndex],
         message: 'Task cancelled successfully',
      });
   } catch (error) {
      console.error('DELETE /api/tasks error:', error);
      return NextResponse.json({ error: 'Failed to cancel task' }, { status: 500 });
   }
}
