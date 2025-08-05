import * as chokidar from 'chokidar';
import { getSignalServer } from './signal-server';

class FileWatcher {
  private watcher: chokidar.FSWatcher | null = null;
  private isActive = false;
  private watchPaths = [
    '.taskmaster/tasks/tasks.json',
    '.taskmaster/tasks/*.txt',
    '.taskmaster/tasks/*.md',
    '.taskmaster/config.json',
  ];

  async start(): Promise<void> {
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
    } catch (error) {
      console.error('Failed to start file watcher:', error);
      throw error;
    }
  }

  private handleFileChange(filePath: string, changeType: string) {
    console.log(`File ${changeType}: ${filePath}`);

    // Get signal server and emit change
    const signalServer = getSignalServer();
    signalServer.emitFileChange(filePath, changeType);
  }

  async stop(): Promise<void> {
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

  isWatching(): boolean {
    return this.isActive;
  }
}

// Global instance
let fileWatcher: FileWatcher | null = null;

export function getFileWatcher(): FileWatcher {
  if (!fileWatcher) {
    fileWatcher = new FileWatcher();
  }
  return fileWatcher;
}

export async function startFileWatcher(): Promise<FileWatcher> {
  const watcher = getFileWatcher();
  await watcher.start();
  return watcher;
}

export async function stopFileWatcher(): Promise<void> {
  if (fileWatcher) {
    await fileWatcher.stop();
  }
}

export default FileWatcher;
