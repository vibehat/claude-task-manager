# WebSocket Server Architecture - Restructured

## Overview

The WebSocket server has been completely restructured from a monolithic single-file architecture to a clean, modular, and extensible system that follows SOLID principles and modern software engineering practices.

## 🏗️ **New Architecture**

### **Core Components**

```
server/
├── types/
│   └── websocket.types.ts         # Comprehensive TypeScript interfaces
├── config/
│   └── websocket.config.ts        # Configuration management
├── utils/
│   ├── logger.ts                  # Structured logging system
│   └── event-emitter.ts           # Type-safe event system
├── services/
│   └── file-watcher.service.ts    # File watching abstraction
├── handlers/
│   ├── base-connection.handler.ts # Base connection handler
│   ├── terminal-connection.handler.ts # Terminal-specific logic
│   └── sync-connection.handler.ts # Sync-specific logic
├── websocket-server.ts            # Main server orchestrator
├── websocket-server-consolidated.ts # Single-file version for testing
└── index.ts                       # Entry point with exports
```

## 🎯 **Key Improvements**

### **1. Separation of Concerns**

- **Connection Types**: Terminal and Sync connections are handled by separate classes
- **File Watching**: Extracted into dedicated service with proper error handling
- **Configuration**: Centralized config management with environment variable support
- **Logging**: Structured logging with different log levels and contexts

### **2. Type Safety**

- **Comprehensive Interfaces**: All data structures properly typed
- **Generic Base Classes**: Reusable connection handler with type parameters
- **Event System**: Type-safe event emission and listening

### **3. Extensibility**

- **Plugin Architecture**: Easy to add new connection types
- **Configuration Driven**: Behavior controlled through config objects
- **Event-Driven**: Loose coupling through event system

### **4. Robustness**

- **Error Boundaries**: Proper error handling at each layer
- **Resource Management**: Automatic cleanup of connections and processes
- **Health Monitoring**: Server status and connection tracking

## 📋 **Component Details**

### **Types System (`types/websocket.types.ts`)**

```typescript
// Connection hierarchy
BaseConnection → TerminalSession | SyncConnection

// Message system
BaseMessage → TerminalMessage | SyncMessage

// Configuration
WebSocketServerConfig, FileWatchConfig, ServerStatus

// Event system
ServerEvents with typed event handlers
```

### **Configuration Management (`config/websocket.config.ts`)**

```typescript
// Environment-driven configuration
WS_PORT = 3001;
WS_MAX_SESSIONS = 20;
WS_LOG_LEVEL = debug;
WS_WATCH_PATHS = /path/ot / files;
```

### **Logging System (`utils/logger.ts`)**

```typescript
// Structured logging with context
logger.info('Server started', { port: 3001 });
logger.error('Connection failed', error, { connectionId: '123' });

// Configurable log levels: debug, info, warn, error
// Automatic timestamp and context formatting
```

### **File Watcher Service (`services/file-watcher.service.ts`)**

```typescript
// Clean abstraction over chokidar
interface FileWatcher {
   start(config: FileWatchConfig): Promise<void>;
   stop(): Promise<void>;
   addPath(path: string): void;
   removePath(path: string): void;
   isWatching(): boolean;
}

// Automatic file existence checking
// Configurable stability thresholds
// Event-driven file change notifications
```

### **Connection Handlers**

#### **Base Handler (`handlers/base-connection.handler.ts`)**

```typescript
abstract class BaseConnectionHandler<T extends BaseConnection> {
   // Common connection lifecycle
   abstract handleConnection(ws: WebSocket, request: IncomingMessage): Promise<T | null>;
   abstract handleMessage(connection: T, message: any): Promise<void>;

   // Shared utilities
   protected generateConnectionId(): string;
   protected parseUrl(request: IncomingMessage): URLSearchParams;
   protected sendMessage<M>(connection: T, message: M): boolean;
}
```

#### **Terminal Handler (`handlers/terminal-connection.handler.ts`)**

```typescript
class TerminalConnectionHandler extends BaseConnectionHandler<TerminalSession> {
   // Terminal-specific features
   - PTY process management
   - Session restoration
   - Resize handling
   - Process cleanup
   - Stale session management
}
```

#### **Sync Handler (`handlers/sync-connection.handler.ts`)**

```typescript
class SyncConnectionHandler extends BaseConnectionHandler<SyncConnection> {
   // Sync-specific features
   - Broadcast notifications
   - File change handling
   - Client management
   - Custom message routing
}
```

### **Main Server (`websocket-server.ts`)**

```typescript
class ModernWebSocketServer extends TypedEventEmitter {
   // Orchestrates all components
   - HTTP/WebSocket server management
   - Connection type routing
   - Event system coordination
   - Service lifecycle management
   - Status monitoring
}
```

## 🔧 **Configuration Options**

### **Server Configuration**

```typescript
interface WebSocketServerConfig {
   port: number; // Default: 3001
   maxSessions: number; // Default: 20
   cleanupInterval: number; // Default: 60000ms
   sessionTimeout: number; // Default: 30000ms
   reconnectionTimeout: number; // Default: 3000ms
}
```

### **File Watch Configuration**

```typescript
interface FileWatchConfig {
   watchPaths: string[]; // Files to monitor
   stabilityThreshold: number; // Default: 200ms
   pollInterval: number; // Default: 100ms
}
```

## 🚀 **Event System**

### **Server Events**

```typescript
interface ServerEvents {
   'connection': (connection: BaseConnection) => void;
   'disconnection': (connection: BaseConnection) => void;
   'terminal:session-created': (session: TerminalSession) => void;
   'terminal:session-restored': (session: TerminalSession) => void;
   'sync:client-connected': (connection: SyncConnection) => void;
   'sync:client-disconnected': (connection: SyncConnection) => void;
   'file:changed': (event: FileChangeEvent) => void;
   'error': (error: Error, context?: any) => void;
}
```

### **Event Usage**

```typescript
server.on('terminal:session-created', (session) => {
   console.log(`New terminal session: ${session.sessionId}`);
});

server.on('file:changed', (event) => {
   console.log(`File changed: ${event.filePath}`);
});
```

## 📊 **Monitoring & Status**

### **Server Status API**

```typescript
interface ServerStatus {
   isRunning: boolean;
   port: number;
   connections: {
      total: number;
      terminal: number;
      sync: number;
   };
   fileWatcher: {
      active: boolean;
      watchedFiles: string[];
   };
   uptime: number;
}
```

### **Health Checks**

```typescript
const status = server.getStatus();
console.log(`Server health: ${status.isRunning ? 'OK' : 'DOWN'}`);
console.log(`Active connections: ${status.connections.total}`);
console.log(`File watcher: ${status.fileWatcher.active ? 'Active' : 'Inactive'}`);
```

## 🔄 **Migration Guide**

### **From Old Architecture**

```typescript
// Old way
const server = new TerminalWebSocketServer();
await server.start();

// New way (backward compatible)
const server = new ModernWebSocketServer();
await server.start();

// Or using factory functions
const server = await startWebSocketServer();
```

### **Backward Compatibility**

```typescript
// All existing exports still work
export const TerminalWebSocketServer = ModernWebSocketServer;
export const getTerminalServer = getWebSocketServer;
export const startTerminalServer = startWebSocketServer;
```

## 🧪 **Testing**

### **Development Server**

```bash
# Use consolidated version for testing
node scripts/start-websocket-server.js

# Or run individual tests
pnpm run ws:dev
```

### **Test Configuration**

- **Port**: 3002 (to avoid conflicts)
- **File Watching**: Automatic TaskMaster file detection
- **Logging**: Debug level in development
- **Session Cleanup**: Reduced intervals for testing

## 🌟 **Benefits of New Architecture**

### **Developer Experience**

- **Clear Separation**: Easy to understand and modify individual components
- **Type Safety**: Comprehensive TypeScript coverage prevents runtime errors
- **Debugging**: Structured logging with context makes troubleshooting easier
- **Testing**: Modular components are easier to unit test

### **Maintainability**

- **Single Responsibility**: Each class has one clear purpose
- **Loose Coupling**: Components communicate through events
- **Configuration Driven**: Behavior can be changed without code changes
- **Error Isolation**: Failures in one component don't crash the entire system

### **Extensibility**

- **New Connection Types**: Easy to add by extending BaseConnectionHandler
- **New Services**: Plugin architecture supports additional services
- **Custom Events**: Event system supports custom application events
- **Configuration Options**: Easy to add new configuration parameters

### **Robustness**

- **Resource Management**: Automatic cleanup prevents memory leaks
- **Error Handling**: Comprehensive error boundaries and recovery
- **Process Management**: Proper handling of terminal processes and sessions
- **Connection Resilience**: Automatic reconnection and session restoration

## 🔮 **Future Enhancements**

### **Planned Features**

- **Authentication**: JWT-based connection authentication
- **Rate Limiting**: Connection and message rate limiting
- **Metrics**: Prometheus metrics for monitoring
- **Clustering**: Multi-instance support with Redis
- **Plugin System**: External plugin loading capability

### **Performance Optimizations**

- **Connection Pooling**: Efficient connection reuse
- **Message Batching**: Bulk message processing
- **Memory Management**: Advanced garbage collection tuning
- **Compression**: Message compression for large payloads

This new architecture provides a solid foundation for future growth while maintaining backward compatibility and improving the overall developer experience. The modular design makes it easy to understand, test, and extend the WebSocket server functionality.
