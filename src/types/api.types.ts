// WebSocket API Types for Terminal and Sync endpoints

export interface WebSocketServerStatus {
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

export interface WebSocketEndpoints {
  terminal: string;
  sync: string;
}

export interface APIEndpoints {
  terminal: string;
  sync: string;
  syncClients: string;
  status: string;
}

// Terminal API Types
export interface TerminalAPIResponse {
  message: string;
  websocketUrl: string;
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
  platform: string;
  cwd: string;
  endpoints: WebSocketEndpoints;
}

export interface TerminalActionRequest {
  action: 'status' | 'start' | 'stop';
}

export interface TerminalActionResponse {
  message?: string;
  status?: 'healthy' | 'unhealthy';
  isRunning?: boolean;
  port?: number;
  connections?: {
    total: number;
    terminal: number;
    sync: number;
  };
  platform?: string;
  timestamp: number;
  endpoints?: WebSocketEndpoints;
  error?: string;
}

// Sync API Types
export interface SyncAPIResponse {
  message: string;
  websocketUrl: string;
  isRunning: boolean;
  port: number;
  connections: {
    total: number;
    terminal: number;
    sync: number;
  };
  syncClients: number;
  fileWatcher: {
    active: boolean;
    watchedFiles: string[];
  };
  endpoints: {
    connect: string;
    status: string;
    broadcast: string;
    clients: string;
  };
  timestamp: number;
}

export interface SyncActionRequest {
  action:
    | 'status'
    | 'broadcast'
    | 'simulate-file-change'
    | 'get-clients'
    | 'disconnect-client'
    | 'file-watcher-status';
  message?: string;
  data?: any;
  file?: string;
  clientId?: string;
}

export interface SyncBroadcastRequest {
  action: 'broadcast';
  message: string;
  data?: Record<string, any>;
}

export interface SyncBroadcastResponse {
  message: string;
  sentToClients: number;
  timestamp: number;
}

export interface SyncSimulateFileChangeRequest {
  action: 'simulate-file-change';
  file?: string;
}

export interface SyncSimulateFileChangeResponse {
  message: string;
  file: string;
  sentToClients: number;
  timestamp: number;
}

export interface SyncClientInfo {
  id: string;
  clientId: string | null;
  type: 'sync';
  connectedAt: string;
  lastActive: string;
  isActive: boolean;
  connectionDuration: number;
  timeSinceLastActive: number;
}

export interface SyncClientsResponse {
  message: string;
  clients: SyncClientInfo[];
  totalClients: number;
  activeClients: number;
  timestamp: number;
}

export interface SyncClientDisconnectRequest {
  action: 'disconnect-client';
  clientId: string;
}

export interface SyncClientDisconnectResponse {
  message: string;
  clientId: string;
  timestamp: number;
}

export interface SyncFileWatcherStatusResponse {
  message: string;
  fileWatcher: {
    active: boolean;
    watchedFiles: string[];
  };
  watchedFiles: Array<{
    name: string;
    fullPath: string;
  }>;
  timestamp: number;
}

// Sync Clients API Types
export interface SyncClientMessageRequest {
  clientId: string;
  message: string;
  data?: Record<string, any>;
}

export interface SyncClientMessageResponse {
  message: string;
  targetClient: {
    id: string;
    clientId: string | null;
  };
  sentMessage: {
    type: string;
    timestamp: string;
    targeted: boolean;
    clientId?: string | null;
    [key: string]: any;
  };
  timestamp: number;
}

// Server Status API Types
export interface SystemInfo {
  platform: string;
  arch: string;
  nodeVersion: string;
  cwd: string;
  uptime: number;
  memory: {
    used: NodeJS.MemoryUsage;
    total: number;
    free: number;
  };
  cpus: number;
  loadAverage: number[];
}

export interface TaskMasterFileInfo {
  path: string;
  exists: boolean;
  size?: number;
}

export interface TaskMasterFileStatus {
  taskMasterDirectory: TaskMasterFileInfo;
  tasksFile: TaskMasterFileInfo;
  taskManagerFile: TaskMasterFileInfo;
}

export interface ServerHealthResponse {
  status: 'healthy' | 'warning' | 'unhealthy';
  healthScore: number;
  healthIssues: string[];
  server: {
    isRunning: boolean;
  } & Partial<WebSocketServerStatus>;
  system: SystemInfo;
  taskMaster: TaskMasterFileStatus;
  endpoints: {
    terminal: string;
    sync: string;
    api: APIEndpoints;
  } | null;
  timestamp: number;
}

export interface ServerControlRequest {
  action: 'start' | 'stop' | 'restart' | 'health-check';
  config?: Record<string, any>;
}

export interface ServerControlResponse {
  message: string;
  server?: WebSocketServerStatus;
  config?: string | Record<string, any>;
  endpoints?: WebSocketEndpoints;
  timestamp: number;
  error?: string;
}

export interface ServerHealthCheckResponse {
  status: 'healthy' | 'warning' | 'unhealthy';
  healthScore: string;
  checks: {
    serverRunning: boolean;
    hasConnections: boolean;
    fileWatcherActive: boolean;
    taskMasterFilesPresent: boolean;
    memoryUsage: boolean;
  };
  server: WebSocketServerStatus;
  timestamp: number;
}

// WebSocket Message Types
export interface WebSocketMessage {
  type: string;
  timestamp: string;
  [key: string]: any;
}

export interface SyncNotificationMessage extends WebSocketMessage {
  type: 'taskmaster-sync' | 'sync-connected';
  event?: 'file-changed' | 'tasks-updated';
  file?: string;
  clientId?: string;
}

export interface TerminalMessage extends WebSocketMessage {
  type: 'input' | 'resize' | 'data' | 'exit' | 'connected' | 'session-restored' | 'error';
  data?: any;
  sessionId?: string;
  exitCode?: number;
  shell?: string;
  platform?: string;
  cwd?: string;
  usingPty?: boolean;
  ptySupport?: boolean;
}

// Error Response Types
export interface APIErrorResponse {
  error: string;
  message?: string;
  timestamp: number;
  availableActions?: string[];
  example?: Record<string, any>;
}

// Generic API Response wrapper
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: number;
}
