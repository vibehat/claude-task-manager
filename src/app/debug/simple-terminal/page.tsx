'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useSimpleTerminal } from '@/hooks/useSimpleTerminal';
import Link from 'next/link';
import { ArrowLeft, Terminal, Wifi, WifiOff, Trash2, Send } from 'lucide-react';
import '@xterm/xterm/css/xterm.css';

export default function SimpleTerminalPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [command, setCommand] = useState('');
  const {
    status,
    error,
    logs,
    terminal,
    initTerminal,
    mountTerminal,
    connect,
    disconnect,
    sendCommand,
    clear,
    clearLogs,
  } = useSimpleTerminal();

  // Initialize and mount terminal
  useEffect(() => {
    async function setup() {
      const term = await initTerminal();
      if (term && containerRef.current) {
        mountTerminal(containerRef.current);
      }
    }
    setup();
  }, [initTerminal, mountTerminal]);

  const handleSendCommand = () => {
    if (command.trim()) {
      sendCommand(command);
      setCommand('');
    }
  };

  const quickCommands = [
    { label: 'List Files', cmd: 'ls -la' },
    { label: 'Current Dir', cmd: 'pwd' },
    { label: 'Node Version', cmd: 'node -v' },
    { label: 'Clear Screen', cmd: 'clear' },
    { label: 'Echo Test', cmd: 'echo "Hello from terminal!"' },
    { label: 'Date', cmd: 'date' },
  ];

  return (
    <div className="container mx-auto py-10 max-w-7xl">
      <div className="mb-8">
        <Link
          href="/debug/index"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Debug Tools
        </Link>
        <h1 className="text-3xl font-bold mb-2">Simple Terminal (Debug Mode)</h1>
        <p className="text-muted-foreground">
          A simplified terminal implementation for debugging WebSocket and PTY issues
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Controls & Status */}
        <div className="space-y-4">
          {/* Connection Status */}
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-3">Connection Status</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Status:</span>
                <span
                  className={`font-medium ${
                    status === 'connected'
                      ? 'text-green-500'
                      : status === 'connecting'
                        ? 'text-yellow-500'
                        : status === 'error'
                          ? 'text-red-500'
                          : 'text-gray-500'
                  }`}
                >
                  {status.toUpperCase()}
                </span>
              </div>
              {error && <div className="text-sm text-red-500 mt-2">Error: {error}</div>}
            </div>
            <div className="flex gap-2 mt-4">
              <Button
                onClick={connect}
                disabled={status === 'connected' || status === 'connecting'}
                size="sm"
                className="flex-1"
              >
                <Wifi className="h-4 w-4 mr-2" />
                Connect
              </Button>
              <Button
                onClick={disconnect}
                disabled={status !== 'connected'}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                <WifiOff className="h-4 w-4 mr-2" />
                Disconnect
              </Button>
            </div>
          </div>

          {/* Quick Commands */}
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-3">Quick Commands</h2>
            <div className="grid grid-cols-1 gap-2">
              {quickCommands.map((cmd) => (
                <Button
                  key={cmd.cmd}
                  variant="outline"
                  size="sm"
                  onClick={() => sendCommand(cmd.cmd)}
                  disabled={status !== 'connected'}
                >
                  {cmd.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Custom Command */}
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-3">Send Command</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendCommand()}
                placeholder="Enter command..."
                disabled={status !== 'connected'}
                className="flex-1 px-3 py-2 border rounded-md text-sm"
              />
              <Button
                onClick={handleSendCommand}
                disabled={status !== 'connected' || !command.trim()}
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Terminal Info */}
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-3">Terminal Info</h2>
            <div className="space-y-1 text-sm">
              <div>Initialized: {terminal ? 'Yes' : 'No'}</div>
              <div>Dimensions: {terminal ? `${terminal.cols}x${terminal.rows}` : 'N/A'}</div>
              <div>WebSocket: ws://localhost:3001</div>
            </div>
            <Button
              onClick={clear}
              variant="outline"
              size="sm"
              className="mt-3 w-full"
              disabled={!terminal}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Terminal
            </Button>
          </div>
        </div>

        {/* Middle Column - Terminal */}
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <span className="font-medium">Terminal Output</span>
            </div>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div ref={containerRef} className="bg-black p-2" style={{ height: '500px' }} />
        </div>

        {/* Right Column - Debug Logs */}
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted px-4 py-2 flex items-center justify-between">
            <span className="font-medium">Debug Logs</span>
            <Button onClick={clearLogs} variant="ghost" size="sm">
              Clear
            </Button>
          </div>
          <div className="p-4 h-[500px] overflow-y-auto">
            {logs.length === 0 ? (
              <p className="text-muted-foreground text-sm">No logs yet...</p>
            ) : (
              <div className="space-y-1">
                {logs.map((log, index) => (
                  <div key={index} className="text-xs font-mono break-all">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Debug Instructions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-medium mb-2">Testing Steps:</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                Ensure terminal server is running: <code>pnpm dev:terminal</code>
              </li>
              <li>Click &quot;Connect&quot; to establish WebSocket connection</li>
              <li>Try quick commands or enter custom commands</li>
              <li>Check debug logs for detailed communication</li>
              <li>Monitor browser console for additional logs</li>
            </ol>
          </div>
          <div>
            <h3 className="font-medium mb-2">What to Check:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>WebSocket connects successfully</li>
              <li>Terminal initializes without errors</li>
              <li>Commands are sent (check logs)</li>
              <li>Server responses are received</li>
              <li>Output appears in terminal</li>
              <li>Terminal dimensions are correct</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
