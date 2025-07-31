# TaskMaster Real-Time Sync

This documentation explains how to implement and use real-time synchronization between TaskMaster CLI's `tasks.json` file and your application's data store.

## Overview

The TaskMaster sync system provides:

- **Real-time sync** between `.taskmaster/tasks/tasks.json` and your app's data store
- **Automatic mapping** from TaskMaster tasks to application Issues
- **File watching** with automatic updates when tasks change
- **React hooks and components** for easy integration
- **Error handling and status tracking**

## Architecture

```
┌─────────────────────┐    ┌──────────────────┐    ┌────────────────┐
│ TaskMaster CLI      │────│ TaskMaster Sync  │────│ Application UI │
│ tasks.json          │    │ Service Layer    │    │ Data Store     │
└─────────────────────┘    └──────────────────┘    └────────────────┘
         │                           │                        │
         │ File Changes              │ Real-time Updates      │
         └───────────────────────────┼────────────────────────┘
                                     │
                               ┌──────────────┐
                               │ File Watcher │
                               │ (Polling)    │
                               └──────────────┘
```

## Files Created

### Core Services

- `libs/client/services/taskMasterService.ts` - TaskMaster data reading and conversion
- `libs/client/services/syncService.ts` - Sync orchestration and file watching
- `libs/client/stores/dataStore.ts` - Updated with TaskMaster integration
- `libs/client/hooks/useTaskMasterSync.ts` - React hooks for sync management

### Examples

- `components/examples/TaskMasterSyncExample.tsx` - Complete usage example

## Quick Start

### 1. Initialize TaskMaster in your project

```bash
# Initialize TaskMaster
task-master init

# Add some sample tasks
task-master add-task --prompt="Implement user authentication"
task-master add-task --prompt="Add dark mode support"
```

### 2. Use the React Hook

```tsx
import { useTaskMasterSync } from '@/libs/client/hooks/useTaskMasterSync';

function MyComponent() {
   const { isEnabled, syncStatus, taskMasterIssues, enableSync, disableSync, forceSync } =
      useTaskMasterSync({
         autoEnable: true,
         enableRealTimeSync: true,
         onSyncComplete: (issues) => {
            console.log(`Synced ${issues.length} issues`);
         },
         onSyncError: (error) => {
            console.error('Sync failed:', error);
         },
      });

   return (
      <div>
         <p>Sync Status: {syncStatus}</p>
         <p>TaskMaster Issues: {taskMasterIssues.length}</p>

         {!isEnabled ? (
            <button onClick={() => enableSync()}>Enable TaskMaster Sync</button>
         ) : (
            <button onClick={() => disableSync()}>Disable TaskMaster Sync</button>
         )}
      </div>
   );
}
```

### 3. Initialize Data Store with TaskMaster

```tsx
import { useDataStore } from '@/libs/client/stores/dataStore';

function App() {
   const { initialize } = useDataStore();

   useEffect(() => {
      // Initialize with TaskMaster sync enabled
      initialize(true);
   }, []);

   return <YourApp />;
}
```

## API Reference

### TaskMasterService

The core service for reading and converting TaskMaster data.

```typescript
class TaskMasterService {
   // Read the tasks.json file
   async readTasksJson(): Promise<TaskMasterData | null>;

   // Get all tasks for a specific tag
   async getAllTasks(tagName?: string): Promise<TaskMasterTask[]>;

   // Convert a single task to an Issue
   convertTaskToIssue(task: TaskMasterTask, orderIndex: number): Issue;

   // Convert all tasks to Issues
   async convertAllTasksToIssues(tagName?: string): Promise<Issue[]>;

   // Add a file watcher callback
   addWatcher(callback: (tasks: TaskMasterTask[]) => void): () => void;

   // Start watching for file changes
   async startWatching(tagName?: string): Promise<void>;

   // Check if TaskMaster is available
   async isAvailable(): Promise<boolean>;
}
```

### SyncService

Orchestrates the synchronization process.

```typescript
class SyncService {
   // Perform one-time sync
   async syncTaskMasterData(options?: SyncOptions): Promise<SyncResult>;

   // Start real-time sync with file watching
   async startRealTimeSync(
      updateCallback: (issues: Issue[]) => void,
      options?: SyncOptions
   ): Promise<void>;

   // Stop real-time sync
   async stopRealTimeSync(): Promise<void>;

   // Force immediate sync
   async forceSyncNow(updateCallback: (issues: Issue[]) => void, tagName?: string): Promise<void>;

   // Get TaskMaster statistics
   async getTaskMasterStats(tagName?: string): Promise<TaskMasterStats>;
}
```

### useTaskMasterSync Hook

React hook for TaskMaster integration.

```typescript
function useTaskMasterSync(options?: UseTaskMasterSyncOptions): {
   // State
   isEnabled: boolean;
   syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
   error: string | null;
   isRealTimeSyncActive: boolean;
   isLoading: boolean;

   // Data
   taskMasterIssues: Issue[];
   taskMasterStats: TaskMasterStats | null;

   // Actions
   enableSync: (options?: SyncOptions) => Promise<void>;
   disableSync: () => Promise<void>;
   forceSync: (tagName?: string) => Promise<void>;
   toggleRealTimeSync: (enabled: boolean, options?: SyncOptions) => Promise<void>;
   refreshStats: (tagName?: string) => Promise<void>;
};
```

## Data Mapping

TaskMaster tasks are mapped to application Issues with the following transformations:

### Task → Issue Mapping

| TaskMaster    | Issue         | Notes                                 |
| ------------- | ------------- | ------------------------------------- |
| `id`          | `taskId`      | Original TaskMaster task ID           |
| `title`       | `title`       | Task title                            |
| `description` | `description` | Task description                      |
| `status`      | `statusId`    | Mapped to Issue status IDs            |
| `priority`    | `priorityId`  | Mapped to Issue priority IDs          |
| `subtasks`    | Child Issues  | Each subtask becomes a separate Issue |

### Status Mapping

| TaskMaster Status | Issue Status  | Status ID  |
| ----------------- | ------------- | ---------- |
| `pending`         | `todo`        | `status-2` |
| `in-progress`     | `in_progress` | `status-3` |
| `done`            | `done`        | `status-4` |
| `deferred`        | `backlog`     | `status-1` |
| `cancelled`       | `cancelled`   | `status-5` |
| `blocked`         | `backlog`     | `status-1` |

### Priority Mapping

| TaskMaster Priority | Issue Priority | Priority ID  |
| ------------------- | -------------- | ------------ |
| `high`              | `high`         | `priority-2` |
| `medium`            | `medium`       | `priority-3` |
| `low`               | `low`          | `priority-4` |

### Labels

TaskMaster issues are automatically tagged with:

- `taskmaster` - All TaskMaster-originated issues
- `subtask` - Issues that are subtasks
- `parent-task` - Tasks that have subtasks
- `has-dependencies` - Tasks with dependencies
- `urgent` - High priority tasks

## Configuration Options

### SyncOptions

```typescript
interface SyncOptions {
   tagName?: string; // TaskMaster tag to sync (default: 'master')
   enableRealTimeSync?: boolean; // Enable file watching (default: true)
   syncInterval?: number; // Polling interval in ms (default: 2000)
   onSyncStart?: () => void; // Callback when sync starts
   onSyncComplete?: (issues: Issue[]) => void; // Callback when sync completes
   onSyncError?: (error: Error) => void; // Callback on sync error
}
```

### Hook Options

```typescript
interface UseTaskMasterSyncOptions {
   autoEnable?: boolean; // Auto-enable sync on mount
   enableRealTimeSync?: boolean; // Enable real-time sync
   tagName?: string; // TaskMaster tag to sync
   syncOptions?: SyncOptions; // Additional sync options
   onSyncComplete?: (issues: Issue[]) => void;
   onSyncError?: (error: Error) => void;
}
```

## File Watching

The sync system uses different strategies based on the environment:

### Server-side (Node.js)

- Uses `fs.watch()` for efficient file system events
- Falls back to polling if file watching fails

### Client-side (Browser)

- Uses polling with configurable intervals
- Compares `metadata.updated` timestamps to detect changes
- Default interval: 2 seconds

## Error Handling

The sync system includes comprehensive error handling:

```typescript
// Hook-level error handling
const { error, syncStatus } = useTaskMasterSync({
   onSyncError: (error) => {
      console.error('Sync error:', error.message);
      // Handle error (show notification, retry, etc.)
   }
});

// Component-level error display
if (syncStatus === 'error' && error) {
   return <ErrorMessage message={error} />;
}
```

Common errors:

- **File not found**: TaskMaster not initialized in project
- **JSON parse error**: Invalid tasks.json format
- **Permission denied**: File access issues
- **Network error**: File system watching failures

## Performance Considerations

### Memory Usage

- File watchers are cleaned up when components unmount
- Issues are filtered efficiently using memoization
- Polling intervals should be balanced (2-5 seconds recommended)

### Bundle Size

- Services use dynamic imports where possible
- File system APIs are only loaded server-side
- Client-side code uses lighter polling approach

### Optimization Tips

```typescript
// Use memoization for expensive operations
const taskMasterIssues = useMemo(() => {
   return issues.filter((issue) => issue.taskId !== undefined);
}, [issues]);

// Debounce file changes to avoid excessive updates
const debouncedSync = useMemo(() => debounce(syncCallback, 500), [syncCallback]);
```

## Testing

### Unit Tests

```bash
# Test core services
npm test -- taskMasterService.test.ts
npm test -- syncService.test.ts

# Test React hooks
npm test -- useTaskMasterSync.test.ts
```

### Integration Tests

```bash
# Test with actual TaskMaster files
npm run test:integration

# Test file watching
npm run test:watch
```

### Manual Testing

1. Initialize TaskMaster in a test project
2. Create and modify tasks using TaskMaster CLI
3. Verify sync behavior in the UI
4. Test error scenarios (invalid JSON, missing files)

## Troubleshooting

### Sync Not Working

1. Check if TaskMaster is initialized: `ls .taskmaster/`
2. Verify tasks.json exists: `cat .taskmaster/tasks/tasks.json`
3. Check file permissions
4. Enable debug logging in sync service

### Performance Issues

1. Increase polling interval for slower systems
2. Disable real-time sync if not needed
3. Filter issues more efficiently
4. Use pagination for large task lists

### File Watching Issues

1. File system events may not work in all environments
2. Polling fallback should handle most cases
3. Check file system permissions
4. Verify TaskMaster CLI is writing files correctly

## Example Implementation

See `components/examples/TaskMasterSyncExample.tsx` for a complete working example that demonstrates:

- Enabling/disabling sync
- Real-time sync toggle
- Status indicators
- Statistics display
- Error handling
- Force sync functionality

## Migration Guide

### From Manual Sync

If you were manually importing TaskMaster data:

```typescript
// Before
const tasks = await fs.readFile('.taskmaster/tasks/tasks.json');
const parsedTasks = JSON.parse(tasks);

// After
const { taskMasterIssues } = useTaskMasterSync({ autoEnable: true });
```

### From Polling to Real-time

If you were using custom polling:

```typescript
// Before
useEffect(() => {
   const interval = setInterval(checkTaskMasterUpdates, 5000);
   return () => clearInterval(interval);
}, []);

// After
const {} = useTaskMasterSync({
   enableRealTimeSync: true,
   syncOptions: { syncInterval: 2000 },
});
```

## Contributing

When contributing to the TaskMaster sync system:

1. Update tests for any service changes
2. Maintain backward compatibility with existing TaskMaster formats
3. Add error handling for new failure modes
4. Update TypeScript interfaces for new fields
5. Test with both polling and file watching modes

## Roadmap

Future enhancements:

- [ ] Bi-directional sync (UI → TaskMaster)
- [ ] Conflict resolution for concurrent edits
- [ ] WebSocket-based sync for better performance
- [ ] Batch operations for large task sets
- [ ] Sync progress indicators
- [ ] Offline sync queue
