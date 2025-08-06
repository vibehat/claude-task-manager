#!/usr/bin/env node

/**
 * Development version of CLI that runs TypeScript directly
 */

const { spawn } = require('child_process');
const { join } = require('path');
const { existsSync } = require('fs');

const rootDir = join(__dirname, '..');
const tsNodePath = join(rootDir, 'node_modules', '.bin', 'ts-node');
const cliTsScript = join(rootDir, 'src', 'cli.ts');

if (existsSync(tsNodePath) && existsSync(cliTsScript)) {
  console.log('🔧 Running CLI in development mode with ts-node...');

  const child = spawn(tsNodePath, [cliTsScript, ...process.argv.slice(2)], {
    stdio: 'inherit',
    cwd: rootDir,
    env: {
      ...process.env,
      TS_NODE_PROJECT: join(rootDir, 'tsconfig.json'),
    },
  });

  child.on('exit', (code) => {
    process.exit(code || 0);
  });

  child.on('error', (error) => {
    console.error('Error running CLI:', error);
    process.exit(1);
  });
} else {
  console.error('❌ Development setup not found. Please run "npm install" first.');
  process.exit(1);
}
