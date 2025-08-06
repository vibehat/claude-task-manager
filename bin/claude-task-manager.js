#!/usr/bin/env node

const { join } = require('path');
const { spawn } = require('child_process');

// Get the directory where this script is located
const binDir = __dirname;
const rootDir = join(binDir, '..');

// Path to the compiled CLI script
const cliScript = join(rootDir, 'dist', 'cli.js');

// Check if we have a compiled version, otherwise use ts-node for development
const fs = require('fs');
if (fs.existsSync(cliScript)) {
  // Production: use compiled JS
  require(cliScript);
} else {
  // Development: use ts-node to run TypeScript directly
  const tsNodePath = join(rootDir, 'node_modules', '.bin', 'ts-node');
  const cliTsScript = join(rootDir, 'src', 'cli.ts');

  if (fs.existsSync(tsNodePath) && fs.existsSync(cliTsScript)) {
    console.log('🔧 Running in development mode with ts-node...');
    const child = spawn(tsNodePath, [cliTsScript, ...process.argv.slice(2)], {
      stdio: 'inherit',
      cwd: rootDir,
    });

    child.on('exit', (code) => {
      process.exit(code || 0);
    });
  } else {
    console.error('❌ Neither compiled CLI nor ts-node development setup found.');
    console.error('Please run "npm run build" or ensure ts-node is installed.');
    process.exit(1);
  }
}
