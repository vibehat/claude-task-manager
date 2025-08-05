# Debug & Demo Tools Directory

This directory contains all debugging utilities, development tools, and component demonstrations for the TaskMaster UI application.

## Structure

```
/debug/
├── index/              # Debug & demo tools overview page
├── page.tsx           # Main debug terminal with command launching
├── terminal-test/     # Multi-terminal persistence testing
├── terminal-demo/     # Multi-terminal manager demo
├── websocket-test/    # Basic WebSocket connection testing
├── websocket-integrated/ # Advanced WebSocket examples
├── taskmaster/        # TaskMaster dashboard demo
├── command-palette/   # Command palette demo
└── markdown-editor/   # Markdown editor demo
```

## Debug Tools

### `/debug/index` - Debug & Demo Tools Overview

- Landing page for all debug utilities and component demos
- Organized into Debug Tools and Component Demos sections
- Links to all available tools with descriptions

### `/debug` - Debug Terminal

- Real system terminal with xterm.js
- Command launching with preset buttons
- Connected to PTY server at ws://localhost:3001
- Features: initial command execution, quick launch buttons, reset terminal

### `/debug/terminal-test` - Terminal Test

- Multi-terminal persistence testing
- Store status monitoring (hydration, terminal count, last saved)
- Terminal creation and management debugging
- Useful for testing terminal state management

### `/debug/websocket-test` - WebSocket Test

- Basic WebSocket connection testing
- Simple connection/disconnection debugging
- Message sending and receiving verification

### `/debug/websocket-integrated` - WebSocket Integrated

- Advanced WebSocket connection examples
- Integrated connection handling patterns
- More complex WebSocket debugging scenarios

## Component Demos

### `/debug/terminal-demo` - Terminal Demo

- Multi-terminal manager demonstration
- Drag-and-drop terminal interface
- Persistent sessions and chat-style terminal bar
- WebSocket connectivity showcase

### `/debug/taskmaster` - TaskMaster Dashboard Demo

- Interactive task management dashboard
- Real-time updates and command execution
- Frontend-driven architecture demonstration

### `/debug/command-palette` - Command Palette Demo

- Context-aware command interface
- Multi-step command flows
- Dynamic command resolution
- Modular command architecture

### `/debug/markdown-editor` - Markdown Editor Demo

- Rich markdown editor with live preview
- Syntax highlighting and toolbar customization
- Export features and theme support

## Navigation

All debug pages include a "Back to Debug Tools" link that returns to `/debug/index` for easy navigation between tools.

## Usage

1. Start the WebSocket server: `pnpm dev:terminal`
2. Start the Next.js app: `pnpm dev`
3. Navigate to `/debug/index` to access all tools
4. Or go directly to specific tools:
   - `/debug` - Main terminal
   - `/debug/terminal-test` - Terminal testing
   - `/debug/websocket-test` - WebSocket testing
   - `/debug/websocket-integrated` - Advanced WebSocket

## Requirements

- Node.js with PTY support
- WebSocket server running on port 3001
- Modern browser with WebSocket support

## Development

These tools are intended for development and debugging only. They provide direct access to:

- System shell commands
- WebSocket connections
- Terminal state management
- Application debugging utilities
