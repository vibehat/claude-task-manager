'use client';

import { DebugTerminal } from '@/components/debug/DebugTerminal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DebugPage() {
  const [selectedCommand, setSelectedCommand] = useState<string>('');
  const [terminalKey, setTerminalKey] = useState(0);

  const launchWithCommand = (command: string) => {
    setSelectedCommand(command);
    setTerminalKey((prev) => prev + 1); // Force re-mount terminal
  };

  const quickCommands = [
    { label: 'Git Status', command: 'git status' },
    { label: 'List Files', command: 'ls -la' },
    { label: 'Current Directory', command: 'pwd' },
    { label: 'Node Version', command: 'node -v' },
    { label: 'NPM List', command: 'npm list --depth=0' },
    { label: 'System Info', command: 'uname -a' },
    { label: 'Process List', command: 'ps aux | head -10' },
    { label: 'Disk Usage', command: 'df -h' },
  ];

  return (
    <div className="container mx-auto py-10 max-w-6xl">
      <div className="mb-8">
        <Link
          href="/debug/index"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Debug Tools
        </Link>
        <h1 className="text-3xl font-bold mb-2">Debug Terminal</h1>
        <p className="text-muted-foreground">
          A real terminal connected to the system shell for debugging and development
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Documentation */}
        <div className="space-y-6">
          {/* Quick Launch Commands */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Launch Commands</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Click any button to launch the terminal with that command:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {quickCommands.map((cmd) => (
                <Button
                  key={cmd.command}
                  variant="outline"
                  size="sm"
                  onClick={() => launchWithCommand(cmd.command)}
                  className="text-left justify-start"
                >
                  {cmd.label}
                </Button>
              ))}
            </div>
            {selectedCommand && (
              <div className="mt-4 p-3 bg-muted rounded text-sm flex items-center justify-between">
                <div>
                  <strong>Launched with:</strong> <code>{selectedCommand}</code>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCommand('');
                    setTerminalKey((prev) => prev + 1);
                  }}
                >
                  Reset Terminal
                </Button>
              </div>
            )}
          </div>
          {/* Usage Instructions */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Real Terminal</h2>
            <ul className="space-y-2 text-sm">
              <li>• Full shell access with command execution</li>
              <li>• Connects to the same PTY server as the main terminal demo</li>
              <li>• Real-time WebSocket communication</li>
              <li>• Persistent session across reconnections</li>
              <li>• Standard terminal features (colors, cursor, etc.)</li>
            </ul>
          </div>

          {/* Common Commands */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Common Commands</h2>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div>
                <code className="font-mono">ls -la</code>
                <p className="text-muted-foreground">List files with details</p>
              </div>
              <div>
                <code className="font-mono">pwd</code>
                <p className="text-muted-foreground">Show current directory</p>
              </div>
              <div>
                <code className="font-mono">ps aux</code>
                <p className="text-muted-foreground">List running processes</p>
              </div>
              <div>
                <code className="font-mono">node -v</code>
                <p className="text-muted-foreground">Check Node.js version</p>
              </div>
              <div>
                <code className="font-mono">npm list</code>
                <p className="text-muted-foreground">Show installed packages</p>
              </div>
              <div>
                <code className="font-mono">clear</code>
                <p className="text-muted-foreground">Clear terminal screen</p>
              </div>
            </div>
          </div>

          {/* Development Commands */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Development Commands</h2>
            <div className="space-y-3 font-mono text-sm">
              <div className="p-3 bg-muted rounded">
                <code>git status</code>
                <p className="text-xs text-muted-foreground mt-1">Check git repository status</p>
              </div>
              <div className="p-3 bg-muted rounded">
                <code>pnpm dev</code>
                <p className="text-xs text-muted-foreground mt-1">Start development server</p>
              </div>
              <div className="p-3 bg-muted rounded">
                <code>pnpm typecheck</code>
                <p className="text-xs text-muted-foreground mt-1">Run TypeScript type checking</p>
              </div>
              <div className="p-3 bg-muted rounded">
                <code>curl -I localhost:3000</code>
                <p className="text-xs text-muted-foreground mt-1">Check server response headers</p>
              </div>
            </div>
          </div>

          {/* Connection Info */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Connection</h2>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Server:</span> WebSocket PTY server
              </div>
              <div>
                <span className="font-medium">Port:</span> 3001 (default)
              </div>
              <div>
                <span className="font-medium">Protocol:</span> ws://localhost:3001
              </div>
              <div className="text-xs text-muted-foreground mt-3">
                Make sure the WebSocket server is running with <code>pnpm dev:terminal</code>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Terminal */}
        <div>
          <DebugTerminal key={terminalKey} initialCommand={selectedCommand || undefined} />
        </div>
      </div>
    </div>
  );
}
