#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

// Import server functionality
const serverModule = require('./lib/server-manager');

// Type definitions
interface ServerConfig {
  port: number;
  terminalPort: number;
  signalPort: number;
  workingDirectory: string;
  openBrowser?: boolean;
  production?: boolean;
}

// Read package.json for version
let packageJson;
try {
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
} catch {
  // Fallback to current directory
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
}

const program = new Command();

program
  .name('claude-task-manager')
  .description('AI-powered task management interface with persistent context for developers')
  .version(packageJson.version);

program
  .command('start')
  .description('Start the Claude Task Manager application')
  .option('-p, --port <port>', 'specify port for main server', '3000')
  .option('-tp, --terminal-port <port>', 'specify port for terminal WebSocket server', '3001')
  .option('-sp, --signal-port <port>', 'specify port for signal WebSocket server', '3002')
  .option('-d, --dir <directory>', 'specify working directory', process.cwd())
  .option('--no-browser', 'do not open browser automatically')
  .action(async (options) => {
    console.log('🚀 Starting Claude Task Manager...');

    const config: ServerConfig = {
      port: parseInt(options.port),
      terminalPort: parseInt(options.terminalPort),
      signalPort: parseInt(options.signalPort),
      workingDirectory: options.dir,
      openBrowser: options.browser,
      production: true,
    };

    try {
      await serverModule.startAllServers(config);
    } catch (error) {
      console.error('❌ Failed to start servers:', error);
      process.exit(1);
    }
  });

program
  .command('dev')
  .description('Start the application in development mode')
  .option('-p, --port <port>', 'specify port for main server', '3000')
  .option('-tp, --terminal-port <port>', 'specify port for terminal WebSocket server', '3001')
  .option('-sp, --signal-port <port>', 'specify port for signal WebSocket server', '3002')
  .option('-d, --dir <directory>', 'specify working directory', process.cwd())
  .action(async (options) => {
    console.log('🚀 Starting Claude Task Manager in development mode...');

    const config: ServerConfig = {
      port: parseInt(options.port),
      terminalPort: parseInt(options.terminalPort),
      signalPort: parseInt(options.signalPort),
      workingDirectory: options.dir,
      openBrowser: true,
      production: false,
    };

    try {
      await serverModule.startAllServers(config);
    } catch (error) {
      console.error('❌ Failed to start development servers:', error);
      process.exit(1);
    }
  });

program
  .command('init')
  .description('Initialize Claude Task Manager in the current directory')
  .argument('[directory]', 'directory to initialize in', '.')
  .action(async (directory: string) => {
    console.log(`🔧 Initializing Claude Task Manager in ${directory}...`);
    // TODO: Add initialization logic
    console.log('✅ Initialization complete!');
  });

program
  .command('status')
  .description('Check the status of Claude Task Manager services')
  .action(async () => {
    console.log('📊 Checking Claude Task Manager status...');
    // TODO: Add status checking logic
    console.log('Status check complete');
  });

program
  .command('stop')
  .description('Stop all running Claude Task Manager services')
  .action(async () => {
    console.log('🛑 Stopping Claude Task Manager services...');
    // TODO: Add stop logic
    console.log('✅ All services stopped');
  });

program
  .command('config')
  .description('Manage Claude Task Manager configuration')
  .option('--show', 'show current configuration')
  .option('--reset', 'reset configuration to defaults')
  .action(async (options) => {
    if (options.show) {
      console.log('📋 Current configuration:');
      // TODO: Show current configuration
    }
    if (options.reset) {
      console.log('🔄 Resetting configuration to defaults...');
      // TODO: Reset configuration
    }
  });

// Error handling
program.exitOverride();

try {
  program.parse();
} catch (error: any) {
  if (error.code === 'commander.helpDisplayed') {
    process.exit(0);
  }
  console.error('❌ CLI Error:', error.message);
  process.exit(1);
}

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
