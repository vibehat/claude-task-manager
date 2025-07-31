import { taskMasterCLI, TaskMasterCLI } from './taskmaster';
import { taskMasterWatcher, TaskMasterWatcher } from './taskMasterWatcher';

// Test Task Master CLI wrapper
async function testTaskMasterCLI() {
   console.log('Testing Task Master CLI Wrapper...\n');

   try {
      // Check if Task Master is initialized
      const isInitialized = await taskMasterCLI.isInitialized();
      console.log(`Task Master initialized: ${isInitialized}`);

      if (!isInitialized) {
         console.log('\nTask Master not initialized. Please run "task-master init" first.');
         return;
      }

      // Test getting version
      console.log('\n1. Testing version command:');
      const version = await taskMasterCLI.getVersion();
      console.log(`Version: ${version}`);

      // Test listing tasks
      console.log('\n2. Testing list command:');
      const listResult = await taskMasterCLI.listTasks();
      console.log(`Exit code: ${listResult.exitCode}`);
      console.log(`Tasks found: ${listResult.parsed ? listResult.parsed.length : 0}`);
      if (listResult.parsed && listResult.parsed.length > 0) {
         console.log(`First task: ${listResult.parsed[0].title}`);
      }

      // Test getting next task
      console.log('\n3. Testing next command:');
      const nextResult = await taskMasterCLI.getNextTask();
      console.log(`Exit code: ${nextResult.exitCode}`);
      if (nextResult.parsed) {
         console.log(`Next task: ${nextResult.parsed.title} (ID: ${nextResult.parsed.id})`);
      } else {
         console.log('No pending tasks found');
      }

      // Test reading tasks file directly
      console.log('\n4. Testing direct file read:');
      const tasksData = await taskMasterCLI.readTasksFile();
      if (tasksData) {
         console.log(`Total tasks in master: ${tasksData.master?.tasks?.length || 0}`);
         console.log(`Last updated: ${tasksData.master?.metadata?.updated || 'Unknown'}`);
      }

      // Test model configuration
      console.log('\n5. Testing model configuration:');
      const modelsResult = await taskMasterCLI.getModels();
      console.log(`Exit code: ${modelsResult.exitCode}`);
      if (modelsResult.parsed) {
         console.log('Current models:', modelsResult.parsed);
      }

      // Test custom command execution
      console.log('\n6. Testing custom command execution:');
      const customResult = await taskMasterCLI.executeCommand('--help');
      console.log(`Exit code: ${customResult.exitCode}`);
      console.log(`Help output length: ${customResult.stdout.length} chars`);
   } catch (error) {
      console.error('Test error:', error);
   }
}

// Test Task Master Watcher
async function testTaskMasterWatcher() {
   console.log('\n\nTesting Task Master Watcher...\n');

   const watcher = new TaskMasterWatcher({
      debounceDelay: 1000,
   });

   try {
      // Set up event listeners
      watcher.on('connection-established', (event) => {
         console.log('Connection established:', event.message);
         console.log('Watching:', event.watching);
      });

      watcher.on('file-change', (event) => {
         console.log('\nFile changed!');
         console.log('Path:', event.path);
         console.log('Event type:', event.eventType);
         console.log('Timestamp:', event.timestamp);
      });

      watcher.on('heartbeat', (event) => {
         console.log('\nHeartbeat:', event.timestamp);
         console.log('Active connections:', event.connectionCount);
      });

      // Start watching
      console.log('Starting watcher...');
      await watcher.start();
      console.log(`Watcher running: ${watcher.isRunning}`);
      console.log(`Watched path: ${watcher.watchedPath}`);

      // Get initial tasks data
      const tasksData = await watcher.getTasksData();
      if (tasksData) {
         console.log(`\nInitial task count: ${tasksData.master?.tasks?.length || 0}`);
      }

      // Send a heartbeat
      console.log('\nSending heartbeat...');
      watcher.sendHeartbeat();

      // Wait a bit to see if any changes occur
      console.log('\nWaiting for file changes (10 seconds)...');
      console.log('Try modifying .taskmaster/tasks/tasks.json to see change events');

      await new Promise((resolve) => setTimeout(resolve, 10000));

      // Trigger manual update
      console.log('\nTriggering manual update...');
      watcher.triggerManualUpdate();

      // Wait a bit more
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Stop watcher
      console.log('\nStopping watcher...');
      watcher.stop();
      console.log(`Watcher running: ${watcher.isRunning}`);
   } catch (error) {
      console.error('Watcher test error:', error);
      watcher.stop();
   }
}

// Run tests
async function runTests() {
   console.log('='.repeat(60));
   console.log('Task Master Server Library Tests');
   console.log('='.repeat(60));

   await testTaskMasterCLI();
   await testTaskMasterWatcher();

   console.log('\n' + '='.repeat(60));
   console.log('Tests completed!');
   console.log('='.repeat(60));
}

// Run tests if this file is executed directly
if (require.main === module) {
   runTests().catch(console.error);
}
