'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { useSignalSocket } from '../hooks/useSignalSocket';
import { useTerminalSocket } from '../hooks/useTerminalSocket';

export function WebSocketDemo() {
  const [terminalInput, setTerminalInput] = useState('');
  const [signalMessage, setSignalMessage] = useState('');
  const terminalOutputRef = useRef<HTMLDivElement>(null);

  // Generate stable client ID to prevent multiple connections
  const clientId = useMemo(() => `demo-client-${Math.random().toString(36).substring(2, 15)}`, []);

  // Signal WebSocket Hook
  const {
    isConnected: signalConnected,
    connectionState: signalState,
    lastMessage: signalLastMessage,
    fileChanges,
    connect: connectSignal,
    disconnect: disconnectSignal,
    sendMessage: sendSignalMessage,
  } = useSignalSocket({
    clientId: clientId,
    autoConnect: false, // Disable auto-connect, manually control connections
    onFileChanged: (filePath, changeType) => {
      console.log(`📁 File ${changeType}: ${filePath}`);
    },
    onMessage: (message) => {
      console.log('📡 Signal message:', message);
    },
  });

  // Terminal WebSocket Hook
  const {
    isConnected: terminalConnected,
    connectionState: terminalState,
    terminalInfo,
    terminalOutput,
    connect: connectTerminal,
    disconnect: disconnectTerminal,
    sendCommand,
    clearOutput,
  } = useTerminalSocket({
    autoConnect: false, // Disable auto-connect, manually control connections
    onData: (_data) => {
      // Scroll to bottom when new data arrives
      setTimeout(() => {
        if (terminalOutputRef.current) {
          terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
        }
      }, 0);
    },
    onConnect: (info) => {
      console.log('🖥️ Terminal connected:', info);
    },
  });

  const handleSendTerminalCommand = () => {
    if (terminalInput.trim()) {
      sendCommand(terminalInput);
      setTerminalInput('');
    }
  };

  const handleSendSignalMessage = () => {
    if (signalMessage.trim()) {
      sendSignalMessage({
        type: 'custom-message',
        message: signalMessage,
        timestamp: new Date().toISOString(),
      });
      setSignalMessage('');
    }
  };

  // Cleanup connections on unmount
  useEffect(() => {
    return () => {
      disconnectSignal();
      disconnectTerminal();
    };
  }, [disconnectSignal, disconnectTerminal]);

  const getConnectionStateColor = (state: string) => {
    switch (state) {
      case 'connected':
        return 'text-green-600';
      case 'connecting':
        return 'text-yellow-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">WebSocket Demo</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Signal WebSocket Section */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Signal WebSocket</h2>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">Status:</span>
              <span className={getConnectionStateColor(signalState)}>
                {signalState} {signalConnected ? '🟢' : '🔴'}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={connectSignal}
                disabled={signalConnected}
                className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Connect
              </button>
              <button
                onClick={disconnectSignal}
                disabled={!signalConnected}
                className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50"
              >
                Disconnect
              </button>
            </div>
          </div>

          {/* Send Custom Message */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Send Message:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={signalMessage}
                onChange={(e) => setSignalMessage(e.target.value)}
                placeholder="Enter message to broadcast..."
                className="flex-1 px-3 py-1 border rounded"
                onKeyPress={(e) => e.key === 'Enter' && handleSendSignalMessage()}
              />
              <button
                onClick={handleSendSignalMessage}
                disabled={!signalConnected}
                className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>

          {/* Last Signal Message */}
          {signalLastMessage && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Last Message:</label>
              <div className="bg-gray-100 p-2 rounded text-sm">
                <pre>{JSON.stringify(signalLastMessage, null, 2)}</pre>
              </div>
            </div>
          )}

          {/* File Changes */}
          <div>
            <label className="block text-sm font-medium mb-1">
              File Changes ({fileChanges.length}):
            </label>
            <div className="bg-gray-50 p-2 rounded h-32 overflow-y-auto text-sm">
              {fileChanges.length === 0 ? (
                <div className="text-gray-500">No file changes detected</div>
              ) : (
                fileChanges
                  .slice(-10)
                  .reverse()
                  .map((change, index) => (
                    <div key={index} className="mb-1">
                      <span className="text-blue-600">{change.changeType}</span>: {change.filePath}
                      <span className="text-gray-500 text-xs ml-2">
                        {new Date(change.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>

        {/* Terminal WebSocket Section */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Terminal WebSocket</h2>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">Status:</span>
              <span className={getConnectionStateColor(terminalState)}>
                {terminalState} {terminalConnected ? '🟢' : '🔴'}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={connectTerminal}
                disabled={terminalConnected}
                className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Connect
              </button>
              <button
                onClick={disconnectTerminal}
                disabled={!terminalConnected}
                className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50"
              >
                Disconnect
              </button>
              <button onClick={clearOutput} className="px-3 py-1 bg-gray-500 text-white rounded">
                Clear
              </button>
            </div>
          </div>

          {/* Terminal Info */}
          {terminalInfo && (
            <div className="mb-4 text-sm">
              <div>Session: {terminalInfo.sessionId}</div>
              <div>Shell: {terminalInfo.shell}</div>
              <div>Platform: {terminalInfo.platform}</div>
              <div>PTY: {terminalInfo.usingPty ? '✅' : '❌'}</div>
            </div>
          )}

          {/* Terminal Output */}
          <div
            ref={terminalOutputRef}
            className="bg-black text-green-400 p-3 rounded font-mono text-sm h-64 overflow-y-auto whitespace-pre-wrap"
          >
            {terminalOutput || 'Terminal output will appear here...'}
          </div>

          {/* Terminal Input */}
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Enter command..."
              className="flex-1 px-3 py-1 border rounded font-mono"
              onKeyPress={(e) => e.key === 'Enter' && handleSendTerminalCommand()}
            />
            <button
              onClick={handleSendTerminalCommand}
              disabled={!terminalConnected}
              className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Connection URLs Info */}
      <div className="bg-gray-50 p-4 rounded">
        <h3 className="font-semibold mb-2">Connection Info:</h3>
        <div className="text-sm space-y-1">
          <div>
            Signal WebSocket: <code>ws://localhost:3002</code>
          </div>
          <div>
            Terminal WebSocket: <code>ws://localhost:3001</code>
          </div>
        </div>
      </div>
    </div>
  );
}
