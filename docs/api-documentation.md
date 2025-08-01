# WebSocket API Documentation

## Overview

The WebSocket API provides comprehensive management and monitoring capabilities for the Modern WebSocket Server architecture. It supports both Terminal and Sync operations with real-time communication.

## 🔗 **API Endpoints**

### **Terminal API** (`/api/terminal`)

Manages terminal WebSocket connections and sessions.

### **Sync API** (`/api/sync`)

Manages sync WebSocket connections and TaskMaster file synchronization.

### **Sync Clients API** (`/api/sync/clients`)

Provides granular control over individual sync clients.

### **Server Status API** (`/api/websocket/status`)

Comprehensive server health monitoring and control.

---

## 📡 **Terminal API** - `/api/terminal`

### **GET** - Get Terminal Server Info

Returns terminal server status and connection information.

**Response:**

```json
{
   "message": "Modern WebSocket API - Terminal Endpoint",
   "websocketUrl": "ws://localhost:3002?type=terminal",
   "isRunning": true,
   "port": 3002,
   "connections": {
      "total": 3,
      "terminal": 2,
      "sync": 1
   },
   "fileWatcher": {
      "active": true,
      "watchedFiles": ["tasks.json"]
   },
   "uptime": 45000,
   "platform": "win32",
   "cwd": "D:\\project",
   "endpoints": {
      "terminal": "ws://localhost:3002?type=terminal",
      "sync": "ws://localhost:3002?type=sync"
   }
}
```

### **POST** - Terminal Control Actions

Control terminal server operations.

**Request Body:**

```json
{
   "action": "status" | "start" | "stop"
}
```

**Actions:**

#### **Status Check**

```json
{ "action": "status" }
```

**Response:**

```json
{
   "status": "healthy",
   "isRunning": true,
   "port": 3002,
   "connections": { "total": 3, "terminal": 2, "sync": 1 },
   "platform": "win32",
   "timestamp": 1638360000000
}
```

#### **Start Server**

```json
{ "action": "start" }
```

**Response:**

```json
{
   "message": "WebSocket server started",
   "isRunning": true,
   "port": 3002,
   "endpoints": {
      "terminal": "ws://localhost:3002?type=terminal",
      "sync": "ws://localhost:3002?type=sync"
   },
   "timestamp": 1638360000000
}
```

#### **Stop Server**

```json
{ "action": "stop" }
```

**Response:**

```json
{
   "message": "WebSocket server stopped",
   "timestamp": 1638360000000
}
```

---

## 🔄 **Sync API** - `/api/sync`

### **GET** - Get Sync Server Info

Returns sync server status and connection information.

**Response:**

```json
{
   "message": "TaskMaster WebSocket Sync API",
   "websocketUrl": "ws://localhost:3002?type=sync",
   "isRunning": true,
   "port": 3002,
   "connections": {
      "total": 3,
      "terminal": 2,
      "sync": 1
   },
   "syncClients": 1,
   "fileWatcher": {
      "active": true,
      "watchedFiles": ["tasks.json"]
   },
   "endpoints": {
      "connect": "ws://localhost:3002?type=sync&clientId=<your-client-id>",
      "status": "/api/sync",
      "broadcast": "/api/sync (POST)",
      "clients": "/api/sync/clients"
   },
   "timestamp": 1638360000000
}
```

### **POST** - Sync Control Actions

Manage sync operations and clients.

**Available Actions:**

#### **Status Check**

```json
{ "action": "status" }
```

**Response:**

```json
{
   "status": "healthy",
   "syncService": "active",
   "isRunning": true,
   "connections": { "total": 3, "terminal": 2, "sync": 1 },
   "timestamp": 1638360000000
}
```

#### **Broadcast Message**

Send a message to all connected sync clients.

```json
{
   "action": "broadcast",
   "message": "custom-notification",
   "data": {
      "title": "System Update",
      "content": "TaskMaster has been updated"
   }
}
```

**Response:**

```json
{
   "message": "Broadcast sent successfully",
   "sentToClients": 3,
   "timestamp": 1638360000000
}
```

#### **Simulate File Change**

Trigger a simulated file change notification.

```json
{
   "action": "simulate-file-change",
   "file": "tasks.json"
}
```

**Response:**

```json
{
   "message": "File change simulation sent",
   "file": "tasks.json",
   "sentToClients": 3,
   "timestamp": 1638360000000
}
```

#### **Get Connected Clients**

```json
{ "action": "get-clients" }
```

**Response:**

```json
{
   "message": "Active sync clients",
   "clients": [
      {
         "id": "sync-1638360000000-abc123",
         "clientId": "react-app-1",
         "connectedAt": "2023-12-01T10:30:00.000Z",
         "lastActive": "2023-12-01T10:35:00.000Z",
         "isActive": true
      }
   ],
   "totalClients": 1,
   "timestamp": 1638360000000
}
```

#### **Disconnect Client**

```json
{
   "action": "disconnect-client",
   "clientId": "react-app-1"
}
```

**Response:**

```json
{
   "message": "Client disconnected successfully",
   "clientId": "react-app-1",
   "timestamp": 1638360000000
}
```

#### **File Watcher Status**

```json
{ "action": "file-watcher-status" }
```

**Response:**

```json
{
   "message": "File watcher status",
   "fileWatcher": {
      "active": true,
      "watchedFiles": ["tasks.json"]
   },
   "watchedFiles": [
      {
         "name": "tasks.json",
         "fullPath": "D:\\project\\.taskmaster\\tasks\\tasks.json"
      }
   ],
   "timestamp": 1638360000000
}
```

### **PUT** - Update Sync Configuration

_Not yet implemented_

### **DELETE** - Disconnect All Sync Clients

Disconnects all sync clients.

**Response:**

```json
{
   "message": "All sync clients disconnected",
   "disconnectedClients": 3,
   "timestamp": 1638360000000
}
```

---

## 👥 **Sync Clients API** - `/api/sync/clients`

### **GET** - List All Sync Clients

Returns detailed information about all connected sync clients.

**Response:**

```json
{
   "message": "Connected sync clients",
   "clients": [
      {
         "id": "sync-1638360000000-abc123",
         "clientId": "react-app-1",
         "type": "sync",
         "connectedAt": "2023-12-01T10:30:00.000Z",
         "lastActive": "2023-12-01T10:35:00.000Z",
         "isActive": true,
         "connectionDuration": 300000,
         "timeSinceLastActive": 5000
      }
   ],
   "totalClients": 1,
   "activeClients": 1,
   "timestamp": 1638360000000
}
```

### **POST** - Send Message to Specific Client

Send a targeted message to a specific sync client.

**Request:**

```json
{
   "clientId": "react-app-1",
   "message": "custom-notification",
   "data": {
      "urgent": true,
      "title": "Personal Message"
   }
}
```

**Response:**

```json
{
   "message": "Message sent successfully",
   "targetClient": {
      "id": "sync-1638360000000-abc123",
      "clientId": "react-app-1"
   },
   "sentMessage": {
      "type": "custom-notification",
      "urgent": true,
      "title": "Personal Message",
      "timestamp": "2023-12-01T10:35:00.000Z",
      "targeted": true,
      "clientId": "react-app-1"
   },
   "timestamp": 1638360000000
}
```

### **DELETE** - Disconnect Specific Client

Disconnect a specific sync client.

**Query Parameters:**

- `clientId` (required): The client ID to disconnect

**Request:**

```
DELETE /api/sync/clients?clientId=react-app-1
```

**Response:**

```json
{
   "message": "Client disconnected successfully",
   "disconnectedClient": {
      "id": "sync-1638360000000-abc123",
      "clientId": "react-app-1",
      "wasActive": true
   },
   "timestamp": 1638360000000
}
```

---

## 🏥 **Server Status API** - `/api/websocket/status`

### **GET** - Comprehensive Health Check

Returns detailed server health and system information.

**Response:**

```json
{
   "status": "healthy",
   "healthScore": 90,
   "healthIssues": [],
   "server": {
      "isRunning": true,
      "port": 3002,
      "connections": {
         "total": 3,
         "terminal": 2,
         "sync": 1
      },
      "fileWatcher": {
         "active": true,
         "watchedFiles": ["tasks.json"]
      },
      "uptime": 45000
   },
   "system": {
      "platform": "win32",
      "arch": "x64",
      "nodeVersion": "v18.17.0",
      "cwd": "D:\\project",
      "uptime": 3600.5,
      "memory": {
         "used": {
            "rss": 52428800,
            "heapTotal": 29360128,
            "heapUsed": 20971520,
            "external": 1441792
         },
         "total": 17179869184,
         "free": 8589934592
      },
      "cpus": 8,
      "loadAverage": [0.5, 0.3, 0.2]
   },
   "taskMaster": {
      "taskMasterDirectory": {
         "path": "D:\\project\\.taskmaster",
         "exists": true
      },
      "tasksFile": {
         "path": "D:\\project\\.taskmaster\\tasks\\tasks.json",
         "exists": true,
         "size": 15000
      },
      "taskManagerFile": {
         "path": "D:\\project\\taskmanager.json",
         "exists": true,
         "size": 8500
      }
   },
   "endpoints": {
      "terminal": "ws://localhost:3002?type=terminal",
      "sync": "ws://localhost:3002?type=sync",
      "api": {
         "terminal": "/api/terminal",
         "sync": "/api/sync",
         "syncClients": "/api/sync/clients",
         "status": "/api/websocket/status"
      }
   },
   "timestamp": 1638360000000
}
```

### **POST** - Server Control Operations

#### **Start Server**

```json
{ "action": "start" }
```

#### **Stop Server**

```json
{ "action": "stop" }
```

#### **Restart Server**

```json
{
   "action": "restart",
   "config": {
      "port": 3003,
      "maxSessions": 25
   }
}
```

#### **Health Check**

```json
{ "action": "health-check" }
```

**Response:**

```json
{
   "status": "healthy",
   "healthScore": "5/5",
   "checks": {
      "serverRunning": true,
      "hasConnections": true,
      "fileWatcherActive": true,
      "taskMasterFilesPresent": true,
      "memoryUsage": true
   },
   "server": {
      "isRunning": true,
      "port": 3002,
      "connections": { "total": 3, "terminal": 2, "sync": 1 }
   },
   "timestamp": 1638360000000
}
```

---

## 🔌 **WebSocket Connections**

### **Terminal Connection**

```javascript
const terminalWs = new WebSocket('ws://localhost:3002?type=terminal&clientId=my-terminal');

terminalWs.onmessage = (event) => {
   const message = JSON.parse(event.data);
   switch (message.type) {
      case 'connected':
         console.log('Terminal connected:', message.sessionId);
         break;
      case 'data':
         console.log('Terminal output:', message.data);
         break;
      case 'exit':
         console.log('Terminal exited:', message.exitCode);
         break;
   }
};

// Send input to terminal
terminalWs.send(
   JSON.stringify({
      type: 'input',
      data: 'ls -la\r',
   })
);

// Resize terminal
terminalWs.send(
   JSON.stringify({
      type: 'resize',
      data: { cols: 80, rows: 24 },
   })
);
```

### **Sync Connection**

```javascript
const syncWs = new WebSocket('ws://localhost:3002?type=sync&clientId=my-app');

syncWs.onmessage = (event) => {
   const message = JSON.parse(event.data);
   switch (message.type) {
      case 'sync-connected':
         console.log('Sync connected');
         break;
      case 'taskmaster-sync':
         if (message.event === 'file-changed') {
            console.log('File changed:', message.file);
            // Trigger UI update
            refreshTaskMasterData();
         }
         break;
   }
};
```

---

## 🚨 **Error Responses**

All endpoints return consistent error responses:

```json
{
   "error": "Error description",
   "message": "Detailed error message",
   "timestamp": 1638360000000,
   "availableActions": ["action1", "action2"],
   "example": {
      "action": "status"
   }
}
```

**Common HTTP Status Codes:**

- `200` - Success
- `400` - Bad Request (invalid parameters)
- `404` - Not Found (client/resource not found)
- `410` - Gone (client connection closed)
- `500` - Internal Server Error
- `501` - Not Implemented
- `503` - Service Unavailable (server not running)

---

## 🧪 **Testing the API**

### **Using curl**

```bash
# Get terminal server status
curl http://localhost:3000/api/terminal

# Start the server
curl -X POST http://localhost:3000/api/terminal \
  -H "Content-Type: application/json" \
  -d '{"action": "start"}'

# Get sync clients
curl http://localhost:3000/api/sync/clients

# Broadcast message
curl -X POST http://localhost:3000/api/sync \
  -H "Content-Type: application/json" \
  -d '{"action": "broadcast", "message": "test", "data": {"hello": "world"}}'

# Health check
curl http://localhost:3000/api/websocket/status
```

### **Using JavaScript**

```javascript
// Check server status
const response = await fetch('/api/websocket/status');
const status = await response.json();
console.log('Server health:', status.status);

// Broadcast to sync clients
const broadcast = await fetch('/api/sync', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({
      action: 'broadcast',
      message: 'ui-update',
      data: { component: 'tasks', refresh: true },
   }),
});
const result = await broadcast.json();
console.log('Broadcast result:', result);
```

---

## 📈 **Monitoring & Observability**

### **Health Score Calculation**

- **Running Server**: 40 points
- **Active Connections**: 20 points
- **File Watcher Active**: 20 points
- **Files Being Watched**: 10 points
- **Uptime > 10s**: 10 points
- **TaskMaster Files Present**: 10 points

**Total**: 110 points possible

- **80-110**: Healthy ✅
- **50-79**: Warning ⚠️
- **0-49**: Unhealthy ❌

### **Key Metrics to Monitor**

- Connection count by type
- File watcher status
- Memory usage
- TaskMaster file presence
- Server uptime
- Client connection duration

This API provides comprehensive control and monitoring capabilities for the Modern WebSocket Server, enabling robust real-time communication between TaskMaster CLI and web applications.
