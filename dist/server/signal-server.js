"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignalServer = getSignalServer;
exports.startSignalServer = startSignalServer;
const ws_1 = require("ws");
const http = __importStar(require("http"));
class SignalWebSocketServer {
    constructor(port = 9002) {
        this.wss = null;
        this.server = null;
        this.connections = new Map();
        this.port = port;
    }
    start() {
        return new Promise((resolve, reject) => {
            try {
                // Create HTTP server
                this.server = http.createServer();
                // Create WebSocket server
                this.wss = new ws_1.WebSocketServer({
                    server: this.server,
                    perMessageDeflate: false,
                });
                this.wss.on('connection', (ws, request) => {
                    this.handleConnection(ws, request);
                });
                this.wss.on('error', (error) => {
                    console.error('Signal WebSocket server error:', error);
                });
                this.server.listen(this.port, () => {
                    console.log(`Signal WebSocket server listening on port ${this.port}`);
                    resolve();
                });
                this.server.on('error', (error) => {
                    console.error('HTTP server error:', error);
                    reject(error);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    handleConnection(ws, request) {
        console.log('New signal connection established');
        // Extract client ID from query params
        const url = new URL(request.url || '', `http://${request.headers.host}`);
        const clientId = url.searchParams.get('clientId') || `client_${Date.now()}`;
        // Store connection
        const connection = {
            ws,
            clientId,
            createdAt: new Date(),
            lastActiveAt: new Date(),
        };
        this.connections.set(clientId, connection);
        // Send connection confirmation
        ws.send(JSON.stringify({
            type: 'connected',
            clientId,
        }));
        // Handle messages
        ws.on('message', (message) => {
            try {
                const data = JSON.parse(message.toString());
                connection.lastActiveAt = new Date();
                // Echo message to all other clients (broadcast)
                this.broadcast(data, clientId);
            }
            catch (error) {
                console.error('Error processing message:', error);
            }
        });
        // Handle close
        ws.on('close', () => {
            console.log(`Signal connection ${clientId} disconnected`);
            this.connections.delete(clientId);
        });
        // Handle errors
        ws.on('error', (error) => {
            console.error('WebSocket error:', error);
            this.connections.delete(clientId);
        });
    }
    // Broadcast message to all connected clients except sender
    broadcast(message, excludeClientId) {
        const messageStr = JSON.stringify(message);
        this.connections.forEach((connection, clientId) => {
            if (clientId !== excludeClientId && connection.ws.readyState === connection.ws.OPEN) {
                connection.ws.send(messageStr);
            }
        });
    }
    // Send message to specific client
    sendToClient(clientId, message) {
        const connection = this.connections.get(clientId);
        if (connection && connection.ws.readyState === connection.ws.OPEN) {
            connection.ws.send(JSON.stringify(message));
        }
    }
    // Emit file change event to all clients
    emitFileChange(filePath, changeType) {
        this.broadcast({
            type: 'file-changed',
            filePath,
            changeType,
            timestamp: new Date().toISOString(),
        });
    }
    getStatus() {
        return {
            active: this.wss !== null,
            port: this.port,
            connections: this.connections.size,
            clients: Array.from(this.connections.keys()),
        };
    }
    stop() {
        return new Promise((resolve) => {
            // Close all connections
            this.connections.forEach((connection) => {
                if (connection.ws.readyState === connection.ws.OPEN) {
                    connection.ws.close();
                }
            });
            this.connections.clear();
            if (this.wss) {
                this.wss.close(() => {
                    console.log('Signal WebSocket server closed');
                    this.wss = null;
                    if (this.server) {
                        this.server.close(() => {
                            console.log('HTTP server closed');
                            this.server = null;
                            resolve();
                        });
                    }
                    else {
                        resolve();
                    }
                });
            }
            else {
                resolve();
            }
        });
    }
}
// Global instance
let signalServer = null;
function getSignalServer(port) {
    if (!signalServer) {
        signalServer = new SignalWebSocketServer(port);
    }
    return signalServer;
}
async function startSignalServer(port = 9002) {
    const server = getSignalServer(port);
    await server.start();
    return server;
}
// Cleanup on process exit
process.on('exit', () => {
    if (signalServer) {
        signalServer.stop();
    }
});
process.on('SIGINT', () => {
    console.log('Received SIGINT, shutting down signal server...');
    if (signalServer) {
        signalServer.stop().then(() => {
            process.exit(0);
        });
    }
    else {
        process.exit(0);
    }
});
exports.default = SignalWebSocketServer;
