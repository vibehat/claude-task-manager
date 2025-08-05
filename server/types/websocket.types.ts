import type { WebSocket } from 'ws';

// Base WebSocket connection types
export type ConnectionType = 'terminal' | 'sync';

export interface BaseConnection {
  id: string;
  type: ConnectionType;
  ws: WebSocket;
  clientId?: string;
  createdAt: Date;
  lastActiveAt: Date;
  isActive: boolean;
}

// Terminal-specific types
export interface TerminalSession extends BaseConnection {
  type: 'terminal';
  ptyProcess: any; // Can be either pty.IPty or ChildProcess
  sessionId: string;
  usingPty: boolean;
  cleanupTimeoutId?: NodeJS.Timeout;
  dataListeners?: Array<(...args: any[]) => void>;
}

// Sync-specific types
export interface SyncConnection extends BaseConnection {
  type: 'sync';
}

// Message types
export interface BaseMessage {
  type: string;
  timestamp?: string;
}

export interface TerminalMessage extends BaseMessage {
  type: 'input' | 'resize' | 'data' | 'exit' | 'connected' | 'session-restored' | 'error';
  data?: any;
  sessionId?: string;
  exitCode?: number;
}

export interface SyncMessage extends BaseMessage {
  type: 'taskmaster-sync' | 'sync-connected';
  event?: 'file-changed' | 'tasks-updated';
  file?: string;
  clientId?: string;
}

// Configuration types
export interface WebSocketServerConfig {
  port: number;
  maxSessions: number;
  cleanupInterval: number;
  sessionTimeout: number;
  reconnectionTimeout: number;
}

// File watching types
export interface FileWatchConfig {
  watchPaths: string[];
  stabilityThreshold: number;
  pollInterval: number;
}

export interface FileChangeEvent {
  type: 'change' | 'add' | 'unlink';
  filePath: string;
  timestamp: Date;
}

// Event system types
export interface ServerEvents {
  'connection': (connection: BaseConnection) => void;
  'disconnection': (connection: BaseConnection) => void;
  'terminal:session-created': (session: TerminalSession) => void;
  'terminal:session-restored': (session: TerminalSession) => void;
  'terminal:session-ended': (session: TerminalSession) => void;
  'sync:client-connected': (connection: SyncConnection) => void;
  'sync:client-disconnected': (connection: SyncConnection) => void;
  'file:changed': (event: FileChangeEvent) => void;
  'error': (error: Error, context?: any) => void;
}

// Logger interface
export interface Logger {
  info(message: string, meta?: any): void;
  warn(message: string, meta?: any): void;
  error(message: string, error?: Error, meta?: any): void;
  debug(message: string, meta?: any): void;
}

// Connection handler interface
export interface ConnectionHandler<T extends BaseConnection = BaseConnection> {
  handleConnection(ws: WebSocket, request: any): Promise<T | null>;
  handleDisconnection(connection: T): Promise<void>;
  handleMessage(connection: T, message: any): Promise<void>;
  cleanup(): Promise<void>;
}

// File watcher interface
export interface FileWatcher {
  start(config: FileWatchConfig): Promise<void>;
  stop(): Promise<void>;
  addPath(path: string): void;
  removePath(path: string): void;
  isWatching(): boolean;
  getWatchedPaths(): string[];
}

// Server status
export interface ServerStatus {
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
