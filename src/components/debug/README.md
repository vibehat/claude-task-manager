# Debug Terminal

A real terminal component using xterm.js connected to the PTY server.

## Features

- **Real shell access**: Full system terminal with command execution
- **WebSocket connection**: Real-time communication with PTY server
- **xterm.js integration**: Professional terminal emulation
- **Connection status**: Visual indicators for connection state
- **Error handling**: Automatic reconnection and error overlays
- **Theme support**: Adapts to light/dark theme

## Usage

The debug terminal automatically connects to the WebSocket PTY server on mount. Make sure the server is running:

```bash
# Start the WebSocket terminal server
pnpm dev:terminal

# In another terminal, start the Next.js app
pnpm dev
```

Then navigate to `/debug` to use the terminal.

## Components

- `DebugTerminal`: Main terminal component
- Uses `useTerminal` hook from the terminal feature
- Includes connection status indicators
- Has clear and reconnect buttons

## API

```tsx
<DebugTerminal className="custom-class" initialCommand="git status" />
```

### Props

- `className?: string` - Additional CSS classes
- `initialCommand?: string` - Command to execute when terminal connects

### Examples

```tsx
// Launch with git status
<DebugTerminal initialCommand="git status" />

// Launch with directory listing
<DebugTerminal initialCommand="ls -la" />

// Launch with system info
<DebugTerminal initialCommand="uname -a" />
```

The terminal connects to the same PTY server as the main terminal demo at `ws://localhost:9001`.
