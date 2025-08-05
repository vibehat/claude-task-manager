# WebSocket Terminal Implementation Guide

## Overview

The Task Master UI includes a fully-functional WebSocket-based terminal implementation that provides real terminal access through the browser. This implementation uses node-pty for proper pseudo-terminal support and xterm.js for terminal rendering.

## Architecture

### Client-Side Components

#### 1. useTerminal Hook (`/src/features/terminal/hooks/useTerminal.ts`)

The core React hook that manages the terminal lifecycle:

```typescript
const {
  terminal, // xterm.js Terminal instance
  initializeTerminal, // Initialize terminal
  connectionStatus, // WebSocket connection status
  session, // Terminal session info
  connect, // Connect to WebSocket
  disconnect, // Disconnect from WebSocket
  sendInput, // Send input to terminal
  fit, // Fit terminal to container
  isConnected, // Connection state boolean
  error, // Error state
} = useTerminal(options);
```

**Key Features:**

- Automatic WebSocket connection management
- Session persistence and restoration
- Terminal resizing support
- Error handling and reconnection logic
- Theme support (light/dark)

#### 2. DebugTerminal Component (`/src/components/debug/DebugTerminal.tsx`)

A ready-to-use terminal component with UI controls:

```typescript
<DebugTerminal
  initialCommand="ls -la"  // Optional initial command
  className="custom-class"  // Optional styling
/>
```

**Features:**

- Connection status indicator
- Clear and reconnect buttons
- Shell and platform display
- Error overlay with retry
- Responsive sizing

### Server-Side Components

#### Terminal WebSocket Server (`/server/terminal-server.ts`)

A standalone WebSocket server that manages terminal sessions:

**Key Features:**

- Multi-session support
- PTY (pseudo-terminal) creation using node-pty
- Fallback to child_process if node-pty unavailable
- Cross-platform shell support
- Session persistence across reconnections

**Supported Shells:**

- **Unix/Linux/macOS**: bash, sh, zsh
- **Windows**: cmd, powershell, pwsh, git-bash
- Automatic shell detection and fallback

## Implementation Details

### Message Protocol

The WebSocket communication uses JSON messages:

#### Client → Server Messages:

```typescript
// Input data
{ type: 'input', data: string }

// Terminal resize
{ type: 'resize', data: { cols: number, rows: number } }
```

#### Server → Client Messages:

```typescript
// Connection established
{
  type: 'connected',
  sessionId: string,
  shell: string,
  platform: string,
  cwd?: string
}

// Terminal output
{ type: 'data', data: string }

// Session restored
{
  type: 'session-restored',
  sessionId: string,
  shell: string,
  platform: string
}

// Terminal exit
{ type: 'exit', exitCode: number }

// Error
{ type: 'error', message: string }
```

### Connection Flow

1. **Initial Connection:**

   ```
   Client → WebSocket connect to ws://localhost:3001
   Server → Creates new PTY process
   Server → Sends 'connected' message with session info
   Client → Attaches xterm.js input handler
   ```

2. **Data Flow:**

   ```
   User types → xterm.js → onData event → WebSocket → PTY stdin
   PTY stdout → WebSocket → 'data' message → xterm.js write
   ```

3. **Reconnection:**
   ```
   Client → Connect with sessionId parameter
   Server → Finds existing session
   Server → Sends 'session-restored' message
   Client → Resumes terminal interaction
   ```

## Usage Examples

### Basic Terminal Integration

```typescript
'use client';

import { useTerminal } from '@/features/terminal/hooks/useTerminal';
import { useEffect, useRef } from 'react';

export function MyTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const {
    terminal,
    initializeTerminal,
    connect,
    isConnected
  } = useTerminal({
    theme: 'dark',
    fontSize: 14,
    onConnect: () => console.log('Terminal connected'),
  });

  useEffect(() => {
    async function setup() {
      // Initialize terminal
      const term = await initializeTerminal();
      if (term && terminalRef.current) {
        // Mount to DOM
        term.open(terminalRef.current);
        // Connect to WebSocket
        await connect();
      }
    }
    setup();
  }, []);

  return (
    <div>
      <div ref={terminalRef} style={{ height: '400px' }} />
      <div>Status: {isConnected ? 'Connected' : 'Disconnected'}</div>
    </div>
  );
}
```

### Using the Debug Terminal Component

```typescript
import { DebugTerminal } from '@/components/debug/DebugTerminal';

export function TerminalPage() {
  return (
    <div>
      <h1>Terminal Demo</h1>
      <DebugTerminal
        initialCommand="echo 'Hello from terminal!'"
      />
    </div>
  );
}
```

### Programmatic Command Execution

```typescript
const { sendInput, isConnected } = useTerminal();

// Execute a command
if (isConnected) {
  sendInput('ls -la\r'); // Note: \r for Enter key
}

// Clear terminal
if (terminal) {
  terminal.clear();
}
```

## Configuration

### Starting the WebSocket Server

The terminal server runs alongside the Next.js development server:

```bash
# Start both Next.js and terminal server
pnpm dev

# Or start terminal server separately
pnpm dev:terminal
```

### Environment Configuration

The WebSocket URL defaults to `ws://localhost:3001` but can be configured:

```typescript
// In terminalConfig.ts
export async function getWebSocketUrl(): Promise<string> {
  if (typeof window !== 'undefined') {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = process.env.NEXT_PUBLIC_TERMINAL_HOST || 'localhost:3001';
    return `${protocol}//${host}`;
  }
  return 'ws://localhost:3001';
}
```

### Terminal Options

```typescript
interface UseTerminalOptions {
  theme?: 'light' | 'dark' | 'auto'; // Terminal theme
  fontSize?: number; // Font size (default: 14)
  fontFamily?: string; // Font family
  sessionId?: string; // Restore specific session
  clientId?: string; // Client identifier
  onConnect?: () => void; // Connection callback
  onDisconnect?: () => void; // Disconnection callback
  onError?: (error: string) => void; // Error callback
  onSessionRestored?: (id: string) => void; // Session restored callback
}
```

## Security Considerations

1. **Local Development Only**: The terminal server is designed for local development and should NOT be exposed to public networks.

2. **Authentication**: Currently no authentication - suitable for local development only.

3. **Command Execution**: Full shell access is provided - use with caution.

4. **Network Security**: Bind to localhost only in production environments.

## Troubleshooting

### Common Issues

1. **"Cannot connect to terminal" error**

   - Ensure the WebSocket server is running: `pnpm dev:terminal`
   - Check if port 3001 is available
   - Verify no firewall blocking WebSocket connections

2. **Terminal not displaying output**

   - Check browser console for WebSocket errors
   - Ensure xterm.js is properly mounted to DOM
   - Verify terminal dimensions are valid (cols > 0, rows > 0)

3. **node-pty installation issues**
   - Run `pnpm rebuild node-pty`
   - On Windows, ensure build tools are installed
   - The server will fallback to child_process if node-pty fails

### Debug Mode

Enable debug logging in the terminal hook:

```typescript
// In useTerminal.ts, extensive console.log statements are already present
// Check browser console for detailed connection and data flow logs
```

## Future Enhancements

1. **Authentication & Security**

   - Add token-based authentication
   - Implement user-based session isolation
   - Add command filtering/sanitization

2. **Advanced Features**

   - File upload/download support
   - Terminal recording and playback
   - Collaborative terminal sessions
   - Custom shell integrations

3. **Performance**
   - Implement terminal output buffering
   - Add virtual scrolling for large outputs
   - Optimize WebSocket message batching

## Example Integration: Task Master Terminal

To integrate the terminal with Task Master tasks:

```typescript
interface TaskTerminalProps {
  taskId: string;
  command?: string;
}

export function TaskTerminal({ taskId, command }: TaskTerminalProps) {
  const { sendInput, isConnected } = useTerminal({
    clientId: `task-${taskId}`,
    onConnect: () => {
      if (command) {
        // Execute task-specific command
        sendInput(`# Task ${taskId}\r`);
        sendInput(`${command}\r`);
      }
    }
  });

  return <DebugTerminal />;
}
```

This would allow running task-specific commands in isolated terminal sessions.
