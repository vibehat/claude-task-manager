# TaskMaster WebSocket Sync

Real-time synchronization between TaskMaster CLI and the web UI using WebSocket connections.

## Overview

The TaskMaster WebSocket Sync system automatically detects when TaskMaster files change and immediately updates the web UI without requiring manual refresh or sync actions.

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   TaskMaster    │    │   WebSocket      │    │     Web UI      │
│   CLI Commands  │────▶│   Server         │────▶│   React App     │
│                 │    │   (File Watcher) │    │   (Auto Sync)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌──────────────────┐
                       │  TaskMaster      │
                       │  Files (.json)   │
                       └──────────────────┘
```

## Components

### 1. WebSocket Server (`server/websocket-server.ts`)

Extended the existing terminal WebSocket server to include:

- **File Watching**: Monitors `.taskmaster/tasks/tasks.json` and `taskmanager.json`
- **Sync Notifications**: Broadcasts file change events to connected clients
- **Dual Connection Types**: Supports both `terminal` and `sync` connection types

### 2. Client Hook (`src/hooks/useTaskMasterSync.ts`)

React hook that:

- Connects to WebSocket server with `type=sync`
- Listens for TaskMaster file change notifications
- Triggers automatic data store synchronization
- Handles reconnection and error states

### 3. Sync Provider (`src/components/sync/TaskMasterSyncProvider.tsx`)

React component that:

- Wraps the application to enable sync throughout
- Optionally shows sync notifications and status indicators
- Provides development-mode status indicator

## Usage

### Starting the Development Environment

#### Option 1: Full Development (Recommended)

```bash
pnpm run dev:full
```

This starts both the Next.js development server and the WebSocket server.

#### Option 2: Separate Processes

```bash
# Terminal 1: Start Next.js
pnpm run dev

# Terminal 2: Start WebSocket server
pnpm run ws:dev
```

### WebSocket Endpoints

- **Terminal Sessions**: `ws://localhost:3001?type=terminal&sessionId=<id>`
- **TaskMaster Sync**: `ws://localhost:3001?type=sync&clientId=<id>`

## Configuration

### Watched Files

The WebSocket server automatically watches these files:

- `.taskmaster/tasks/tasks.json` - Main TaskMaster task data
- `taskmanager.json` - UI task manager data

### File Change Detection

Uses `chokidar` with the following settings:

- **Stability Threshold**: 200ms (waits for write completion)
- **Poll Interval**: 100ms
- **Ignore Initial**: true (only watches changes after startup)

### Sync Timing

- **File Change Detection**: ~200ms after file write completion
- **UI Sync Delay**: 300ms additional delay for file system stability
- **Reconnection**: 3 seconds after connection loss

## Integration

### Application Layout

The sync provider is integrated into the root layout:

```tsx
<TaskMasterSyncProvider>
   <CommandPaletteProvider>
      {children}
      <CommandPalette />
      <Toaster />
   </CommandPaletteProvider>
</TaskMasterSyncProvider>
```

### Data Store Integration

Automatic sync triggers:

- Calls `forceSyncTaskMaster()` when files change
- Updates task lists, statuses, and metadata
- Maintains UI consistency without user intervention

## Development Features

### Status Indicator

In development mode, a small colored dot appears in the bottom-right corner:

- 🟢 **Green**: Connected and syncing
- 🔴 **Red**: Connection error
- 🟡 **Yellow**: Connecting/reconnecting

### Console Logging

Detailed logging for debugging:

```
[TaskMasterSync] Connected to sync WebSocket
[TaskMasterSync] Received sync notification: file-changed
[TaskMasterSync] TaskMaster file 'tasks.json' changed, triggering sync...
[TaskMasterSync] Data sync completed successfully
```

## Benefits

### For Developers

- **No Manual Sync**: Changes are automatically reflected in UI
- **Real-time Updates**: See CLI changes immediately in browser
- **Seamless Workflow**: Work with CLI and UI simultaneously

### For Users

- **Always Current**: UI always shows latest task state
- **No Lost Work**: Immediate synchronization prevents data conflicts
- **Better UX**: No need to manually refresh or sync

## Error Handling

### Connection Failures

- Automatic reconnection every 3 seconds
- Graceful degradation (UI still works, just no auto-sync)
- Clear error messaging in development mode

### File Watch Errors

- Continues monitoring if individual files are temporarily unavailable
- Logs errors without crashing the server
- Recovers automatically when files become available

### Sync Failures

- Retry logic with exponential backoff
- Error reporting in development mode
- UI remains functional even if sync fails

## Troubleshooting

### WebSocket Connection Issues

1. **Check server status**:

   ```bash
   pnpm run ws:dev
   ```

2. **Verify port availability**:

   - Default port is 3001
   - Check for conflicting processes

3. **Browser developer tools**:
   - Check WebSocket connection in Network tab
   - Look for connection errors in Console

### File Watching Issues

1. **Verify file paths**:

   - Ensure `.taskmaster/tasks/tasks.json` exists
   - Check `taskmanager.json` in project root

2. **File permissions**:
   - Ensure files are readable by the Node.js process
   - Check directory permissions

### Sync Not Working

1. **Check console logs** for sync-related errors
2. **Verify data store** is properly initialized
3. **Test manual sync** using `forceSyncTaskMaster()`

## Future Enhancements

Potential improvements:

- **Selective Sync**: Only sync changed data sections
- **Conflict Resolution**: Handle simultaneous CLI/UI changes
- **Performance Optimization**: Debounce rapid file changes
- **Multi-Project Support**: Watch multiple TaskMaster projects
- **Authentication**: Secure WebSocket connections for production

## Technical Notes

### Dependencies

- `chokidar`: File system watching
- `ws`: WebSocket server implementation
- `concurrently`: Run multiple development processes
- `ts-node`: TypeScript execution for development scripts

### File Change Flow

1. TaskMaster CLI modifies `.taskmaster/tasks/tasks.json`
2. Chokidar detects file change (after 200ms stability)
3. WebSocket server broadcasts sync notification
4. React hook receives notification
5. Data store `forceSyncTaskMaster()` is called (after 300ms delay)
6. UI re-renders with updated data

This creates a seamless, real-time experience for developers using both the TaskMaster CLI and web interface.
