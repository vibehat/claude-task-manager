import { taskMasterCLI, TaskMasterWatcher } from './index';

/**
 * Example: Basic Task Master Operations
 */
async function basicOperations() {
   console.log('=== Basic Task Master Operations ===\n');

   // Check if initialized
   const isInit = await taskMasterCLI.isInitialized();
   if (!isInit) {
      console.log('Initializing Task Master...');
      await taskMasterCLI.init();
   }

   // List all tasks
   const { parsed: tasks } = await taskMasterCLI.listTasks();
   console.log(`Total tasks: ${tasks?.length || 0}`);

   // Get next available task
   const { parsed: nextTask } = await taskMasterCLI.getNextTask();
   if (nextTask) {
      console.log(`\nNext task: ${nextTask.title}`);
      console.log(`Status: ${nextTask.status}`);
      console.log(`Priority: ${nextTask.priority}`);
   }

   // Filter tasks by status
   const { parsed: pendingTasks } = await taskMasterCLI.listTasks({ status: 'pending' });
   console.log(`\nPending tasks: ${pendingTasks?.length || 0}`);
}

/**
 * Example: Task Management
 */
async function taskManagement() {
   console.log('\n=== Task Management ===\n');

   // Add a new task
   const { parsed: newTask } = await taskMasterCLI.addTask({
      title: 'Implement new feature',
      description: 'Add user authentication system',
      priority: 'high',
   });

   if (newTask) {
      console.log(`Created task: ${newTask.title} (ID: ${newTask.id})`);

      // Update task status
      await taskMasterCLI.setTaskStatus(newTask.id.toString(), 'in-progress');
      console.log('Updated task status to in-progress');

      // Add implementation notes
      await taskMasterCLI.updateSubtask(
         newTask.id.toString(),
         'Started implementing JWT authentication with bcrypt for password hashing'
      );
      console.log('Added implementation notes');

      // Expand task into subtasks
      await taskMasterCLI.expandTask(newTask.id.toString(), true);
      console.log('Expanded task into subtasks');
   }
}

/**
 * Example: Complex Workflow
 */
async function complexWorkflow() {
   console.log('\n=== Complex Workflow ===\n');

   // Analyze project complexity
   console.log('Analyzing project complexity...');
   await taskMasterCLI.analyzeComplexity(true);

   // Get complexity report
   const { parsed: report } = await taskMasterCLI.getComplexityReport();
   if (report) {
      console.log('Complexity analysis complete');
      console.log(JSON.stringify(report, null, 2));
   }

   // Expand all eligible tasks
   console.log('\nExpanding all eligible tasks...');
   await taskMasterCLI.expandAllTasks(true);

   // Validate dependencies
   console.log('\nValidating task dependencies...');
   const depResult = await taskMasterCLI.validateDependencies();
   console.log(`Validation ${depResult.exitCode === 0 ? 'passed' : 'failed'}`);
}

/**
 * Example: File Watching
 */
async function fileWatching() {
   console.log('\n=== File Watching ===\n');

   const watcher = new TaskMasterWatcher();

   // Set up event handlers
   watcher.on('file-change', async (event) => {
      console.log(`\nFile changed at ${event.timestamp}`);

      // React to changes by fetching updated tasks
      const tasksData = await watcher.getTasksData();
      if (tasksData) {
         console.log(`Updated task count: ${tasksData.master?.tasks?.length || 0}`);
      }
   });

   // Start watching
   await watcher.start();
   console.log('Watching for task changes...');

   // Simulate some work
   await new Promise((resolve) => setTimeout(resolve, 5000));

   // Stop watching
   watcher.stop();
   console.log('Stopped watching');
}

/**
 * Example: Integration with Express API
 */
function expressIntegration() {
   console.log('\n=== Express Integration Example ===\n');

   const exampleCode = `
import express from 'express';
import { taskMasterCLI, taskMasterWatcher } from '@/libs/server';

const app = express();

// Get all tasks
app.get('/api/taskmaster/tasks', async (req, res) => {
  try {
    const { parsed: tasks } = await taskMasterCLI.listTasks();
    res.json({ tasks: tasks || [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific task
app.get('/api/taskmaster/tasks/:id', async (req, res) => {
  try {
    const { parsed: task } = await taskMasterCLI.showTask(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update task status
app.put('/api/taskmaster/tasks/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    await taskMasterCLI.setTaskStatus(req.params.id, status);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Server-sent events for real-time updates
app.get('/api/taskmaster/watch', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const watcher = new TaskMasterWatcher();
  
  watcher.on('file-change', () => {
    res.write(\`data: {"type":"task-update"}\\n\\n\`);
  });

  watcher.start().catch(console.error);

  req.on('close', () => {
    watcher.stop();
  });
});
`;

   console.log('Express integration example:');
   console.log(exampleCode);
}

/**
 * Run all examples
 */
async function runExamples() {
   try {
      await basicOperations();
      await fileWatching();
      expressIntegration();
   } catch (error) {
      console.error('Example error:', error);
   }
}

// Run examples if this file is executed directly
if (require.main === module) {
   runExamples();
}
