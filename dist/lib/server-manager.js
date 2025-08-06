const http = require('http');
const url = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');
// Import server modules
const terminalServer = require('../../server/terminal-server');
const signalServer = require('../../server/signal-server');
const fileWatcher = require('../../server/file-watcher');
async function startAllServersImpl(config) {
    const { port, terminalPort, signalPort, workingDirectory, production = true } = config;
    // Change to working directory
    process.chdir(workingDirectory);
    console.log(`🚀 Starting all servers in ${production ? 'production' : 'development'} mode...\n`);
    console.log(`📁 Working directory: ${workingDirectory}`);
    // Determine the correct paths for Next.js app
    const appDir = path.resolve(process.cwd());
    const nextConfigPath = path.join(appDir, 'next.config.ts');
    // Check if we're running from a built package or development
    const isBuilt = fs.existsSync(path.join(appDir, '.next'));
    try {
        // 1. Create Next.js app
        const app = next({
            dev: !production && !isBuilt,
            hostname: 'localhost',
            port,
            dir: appDir
        });
        const handle = app.getRequestHandler();
        await app.prepare();
        console.log('✅ Next.js app prepared');
        // 2. Create HTTP server for Next.js
        const server = http.createServer(async (req, res) => {
            try {
                const parsedUrl = url.parse(req.url, true);
                await handle(req, res, parsedUrl);
            }
            catch (err) {
                console.error('Error occurred handling', req.url, err);
                res.statusCode = 500;
                res.end('internal server error');
            }
        });
        // 3. Start Next.js server
        await new Promise((resolve, reject) => {
            server.listen(port, (err) => {
                if (err)
                    reject(err);
                else {
                    console.log(`✅ Next.js ready on http://localhost:${port}`);
                    resolve();
                }
            });
        });
        // 4. Start Terminal WebSocket server
        const terminalServerInstance = await terminalServer.startTerminalServer(terminalPort);
        console.log(`✅ Terminal WebSocket server ready on ws://localhost:${terminalPort}`);
        // 5. Start Signal WebSocket server
        const signalServerInstance = await signalServer.startSignalServer(signalPort);
        console.log(`✅ Signal WebSocket server ready on ws://localhost:${signalPort}`);
        // 6. Start File Watcher
        const fileWatcherInstance = await fileWatcher.startFileWatcher();
        console.log('✅ File watcher started');
        console.log('\n📡 All servers running:');
        console.log(`  - Next.js:  http://localhost:${port}`);
        console.log(`  - Terminal: ws://localhost:${terminalPort}`);
        console.log(`  - Signal:   ws://localhost:${signalPort}`);
        console.log('\nPress Ctrl+C to stop all servers\n');
        // Open browser if requested
        if (config.openBrowser) {
            try {
                const open = require('open');
                await open(`http://localhost:${port}`);
                console.log('🌐 Opened browser');
            }
            catch (error) {
                console.log('ℹ️  Could not open browser automatically');
            }
        }
        // Handle graceful shutdown
        const shutdown = async (signal) => {
            console.log(`\n${signal} received, shutting down all servers...`);
            try {
                // Stop file watcher
                await fileWatcherInstance.stop();
                console.log('✓ File watcher stopped');
                // Stop signal server
                await signalServerInstance.stop();
                console.log('✓ Signal server stopped');
                // Stop terminal server
                await terminalServerInstance.stop();
                console.log('✓ Terminal server stopped');
                // Close HTTP server
                await new Promise((resolve) => {
                    server.close(() => {
                        console.log('✓ HTTP server closed');
                        resolve();
                    });
                });
                process.exit(0);
            }
            catch (error) {
                console.error('Error during shutdown:', error);
                process.exit(1);
            }
        };
        // Set up signal handlers
        process.on('SIGTERM', () => shutdown('SIGTERM'));
        process.on('SIGINT', () => shutdown('SIGINT'));
        // Return server manager instance
        return {
            async stop() {
                await shutdown('Manual stop');
            }
        };
    }
    catch (error) {
        console.error('❌ Failed to start servers:', error);
        throw error;
    }
}
module.exports = {
    startAllServers: startAllServersImpl
};
