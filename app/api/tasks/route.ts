import { NextRequest, NextResponse } from 'next/server';
import { Task, TasksData, TaskMasterAPIError } from '@/lib/types';
import { TaskMasterFileOperations, FileOperationError } from '@/lib/fs-operations';

// Helper function to read tasks from file with error recovery
async function readTasks(): Promise<TasksData> {
   try {
      return await TaskMasterFileOperations.readTasks();
   } catch (error) {
      console.error('Error reading tasks file:', error);
      if (error instanceof FileOperationError) {
         throw new TaskMasterAPIError(`File operation failed: ${error.message}`, 500);
      }
      throw new TaskMasterAPIError('Failed to read tasks data', 500);
   }
}

// Helper function to write tasks to file with backup and validation
async function writeTasks(data: TasksData): Promise<void> {
   try {
      await TaskMasterFileOperations.writeTasks(data);
   } catch (error) {
      console.error('Error writing tasks file:', error);
      if (error instanceof FileOperationError) {
         throw new TaskMasterAPIError(`File operation failed: ${error.message}`, 500);
      }
      throw new TaskMasterAPIError('Failed to write tasks data', 500);
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
      let tasks = tasksData.master.tasks;

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
         metadata: tasksData.master.metadata,
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
      const tasks = tasksData.master.tasks;

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
      const tasks = tasksData.master.tasks;
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
      const tasks = tasksData.master.tasks;
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
