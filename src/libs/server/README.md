# Task Master Server Library

A Node.js wrapper for the Task Master CLI, providing programmatic access to Task Master functionality for server-side applications.

## Overview

This library provides:

- **TaskMasterCLI**: A wrapper around the `task-master` command-line tool
- **TaskMasterWatcher**: A file watcher for monitoring changes to `tasks.json`
- Full TypeScript support with comprehensive type definitions
- Promise-based API for all Task Master commands

## Installation

The library is part of the Claude Task Manager project and uses the globally installed `task-master` CLI tool.

Ensure Task Master is installed:

```bash
npm install -g task-master-ai
```

## Usage

### Basic Operations

```typescript
import { taskMasterCLI } from '@/libs/server';

// Check if Task Master is initialized
const isInitialized = await taskMasterCLI.isInitialized();

// Initialize Task Master
if (!isInitialized) {
  await taskMasterCLI.init();
}

// List all tasks
const { parsed: tasks } = await taskMasterCLI.listTasks();

// Get next available task
const { parsed: nextTask } = await taskMasterCLI.getNextTask();

// Show specific task details
const { parsed: task } = await taskMasterCLI.showTask('1.2');
```

### Task Management

```typescript
// Add a new task
const { parsed: newTask } = await taskMasterCLI.addTask({
  title: 'Implement feature',
  description: 'Add user authentication',
  priority: 'high',
});

// Update task status
await taskMasterCLI.setTaskStatus('1.2', 'in-progress');

// Add implementation notes
await taskMasterCLI.updateSubtask('1.2.1', 'Started implementing JWT auth');

// Expand task into subtasks
await taskMasterCLI.expandTask('1.2', true); // true = use research mode
```

### File Watching

```typescript
import { TaskMasterWatcher } from '@/libs/server';

const watcher = new TaskMasterWatcher();

// Listen for changes
watcher.on('file-change', async (event) => {
  console.log('Tasks updated:', event.timestamp);
  const tasks = await watcher.getTasksData();
});

// Start watching
await watcher.start();

// Stop watching
watcher.stop();
```

### Express Integration

```typescript
import express from 'express';
import { taskMasterCLI } from '@/libs/server';

const app = express();

app.get('/api/taskmaster/tasks', async (req, res) => {
  const { parsed: tasks } = await taskMasterCLI.listTasks();
  res.json({ tasks: tasks || [] });
});

app.put('/api/taskmaster/tasks/:id/status', async (req, res) => {
  await taskMasterCLI.setTaskStatus(req.params.id, req.body.status);
  res.json({ success: true });
});
```

## API Reference

### TaskMasterCLI

#### Project Setup

- `init()` - Initialize Task Master in current project
- `parsePRD(prdPath, append?)` - Parse PRD to generate tasks
- `isInitialized()` - Check if Task Master is initialized
- `getVersion()` - Get Task Master version

#### Task Operations

- `listTasks(filter?)` - List all tasks with optional filtering
- `getNextTask()` - Get next available task
- `showTask(id)` - Show detailed task information
- `setTaskStatus(id, status)` - Update task status
- `addTask(request, research?)` - Create new task
- `updateTask(id, prompt)` - Update specific task
- `updateSubtask(id, notes)` - Add implementation notes
- `expandTask(id, research?, force?)` - Expand task into subtasks
- `expandAllTasks(research?)` - Expand all eligible tasks

#### Analysis & Configuration

- `analyzeComplexity(research?)` - Analyze project complexity
- `getComplexityReport()` - Get complexity analysis report
- `configureModels(setup?, main?, research?, fallback?)` - Configure AI models
- `getModels()` - Get current model configuration

#### Dependencies & Organization

- `addDependency(taskId, dependsOnId)` - Add task dependency
- `moveTask(fromId, toId)` - Reorganize task hierarchy
- `validateDependencies()` - Check for dependency issues
- `generate()` - Update task markdown files

#### Low-level Access

- `readTasksFile()` - Read tasks.json directly
- `executeCommand(command, args?)` - Execute arbitrary task-master command

### TaskMasterWatcher

#### Methods

- `start()` - Start watching tasks.json
- `stop()` - Stop watching
- `getTasksData()` - Get current tasks data
- `triggerManualUpdate()` - Trigger manual update event
- `sendHeartbeat()` - Send heartbeat event

#### Properties

- `isRunning` - Check if watcher is active
- `watchedPath` - Get watched file path

#### Events

- `'change'` - Any change event
- `'file-change'` - File modification detected
- `'connection-established'` - Watcher started
- `'heartbeat'` - Heartbeat event
- `'manual-trigger'` - Manual update triggered

## Command Result Types

All command methods return a `CommandResult` or `ParsedCommandResult`:

```typescript
interface CommandResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

interface ParsedCommandResult<T> extends CommandResult {
  parsed?: T; // Parsed JSON output
}
```

## Error Handling

```typescript
try {
  const result = await taskMasterCLI.showTask('1.2');
  if (result.exitCode !== 0) {
    console.error('Command failed:', result.stderr);
  }
} catch (error) {
  console.error('Execution error:', error);
}
```

## Examples

See `example.ts` for comprehensive usage examples including:

- Basic operations
- Task management workflows
- Complex operations with AI
- File watching implementation
- Express.js integration

## Testing

Run the test suite:

```bash
npx ts-node src/libs/server/taskmaster.test.ts
```

## Notes

- The library requires Task Master CLI to be installed globally
- File watching uses Node.js `fs.watch` API
- All AI-powered operations may take up to a minute to complete
- Commands are executed in the current working directory by default
