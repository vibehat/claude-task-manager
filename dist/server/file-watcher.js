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
exports.getFileWatcher = getFileWatcher;
exports.startFileWatcher = startFileWatcher;
exports.stopFileWatcher = stopFileWatcher;
const chokidar = __importStar(require("chokidar"));
const signal_server_1 = require("./signal-server");
class FileWatcher {
    constructor() {
        this.watcher = null;
        this.isActive = false;
        this.watchPaths = [
            '.taskmaster/tasks/tasks.json',
            '.taskmaster/tasks/*.txt',
            '.taskmaster/tasks/*.md',
            '.taskmaster/config.json',
        ];
    }
    async start() {
        if (this.isActive) {
            console.log('File watcher is already active');
            return;
        }
        try {
            console.log('Starting file watcher...');
            // Create chokidar watcher
            this.watcher = chokidar.watch(this.watchPaths, {
                ignored: /(^|[\/\\])\../, // ignore dotfiles
                persistent: true,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 500,
                    pollInterval: 100,
                },
            });
            // Set up event handlers
            this.watcher.on('change', (filePath) => {
                this.handleFileChange(filePath, 'change');
            });
            this.watcher.on('add', (filePath) => {
                this.handleFileChange(filePath, 'add');
            });
            this.watcher.on('unlink', (filePath) => {
                this.handleFileChange(filePath, 'unlink');
            });
            this.watcher.on('error', (error) => {
                console.error('File watcher error:', error);
            });
            this.watcher.on('ready', () => {
                this.isActive = true;
                console.log('File watcher is ready');
            });
        }
        catch (error) {
            console.error('Failed to start file watcher:', error);
            throw error;
        }
    }
    handleFileChange(filePath, changeType) {
        console.log(`File ${changeType}: ${filePath}`);
        // Get signal server and emit change
        const signalServer = (0, signal_server_1.getSignalServer)();
        signalServer.emitFileChange(filePath, changeType);
    }
    async stop() {
        if (!this.isActive) {
            return;
        }
        console.log('Stopping file watcher...');
        if (this.watcher) {
            await this.watcher.close();
            this.watcher = null;
        }
        this.isActive = false;
        console.log('File watcher stopped');
    }
    isWatching() {
        return this.isActive;
    }
}
// Global instance
let fileWatcher = null;
function getFileWatcher() {
    if (!fileWatcher) {
        fileWatcher = new FileWatcher();
    }
    return fileWatcher;
}
async function startFileWatcher() {
    const watcher = getFileWatcher();
    await watcher.start();
    return watcher;
}
async function stopFileWatcher() {
    if (fileWatcher) {
        await fileWatcher.stop();
    }
}
exports.default = FileWatcher;
