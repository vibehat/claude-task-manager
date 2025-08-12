'use client';

import React, { useState } from 'react';
import { useTerminalManagerStore } from '@/features/terminal/stores/terminalManagerStore';

export default function TestTerminalPage() {
  const [initCommand, setInitCommand] = useState('ls -la');
  const { createTerminal } = useTerminalManagerStore();

  const handleCreateTerminalWithInit = () => {
    if (initCommand.trim()) {
      createTerminal(`Terminal with init: ${initCommand}`, initCommand);
    } else {
      createTerminal('Regular Terminal');
    }
  };

  const presetCommands = [
    'ls -la',
    'pwd',
    'echo "Hello from init command!"',
    'date',
    'whoami',
    'uname -a',
    'ps aux | head -10',
    'df -h',
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terminal Init Command Test</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Create Terminal with Init Command
          </h2>

          <div className="mb-4">
            <label htmlFor="initCommand" className="block text-sm font-medium text-gray-700 mb-2">
              Initial Command:
            </label>
            <input
              type="text"
              id="initCommand"
              value={initCommand}
              onChange={(e) => setInitCommand(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter command to execute on terminal startup..."
            />
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-700 font-medium mb-2">Quick presets:</p>
            <div className="flex flex-wrap gap-2">
              {presetCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => setInitCommand(cmd)}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-md transition-colors border border-gray-300"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCreateTerminalWithInit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Create Terminal
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Enter a command in the input field above</li>
            <li>
              Click &quot;Create Terminal&quot; to spawn a new terminal with that init command
            </li>
            <li>The command will be automatically executed when the terminal connects</li>
            <li>
              Try different commands like <code className="bg-gray-100 px-1 rounded">ls -la</code>,{' '}
              <code className="bg-gray-100 px-1 rounded">pwd</code>, etc.
            </li>
            <li>Use keyboard shortcuts: Cmd+T (new terminal), Cmd+W (close), Cmd+Tab (switch)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
