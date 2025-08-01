'use client';

import { useEffect, useState } from 'react';
import { useSignalSocket } from '../hooks/useSignalSocket';
import { useTerminal } from '../features/terminal/hooks/useTerminal';

export function IntegratedWebSocketExample() {
   const [notifications, setNotifications] = useState<
      Array<{ id: number; message: string; type: string; timestamp: Date }>
   >([]);
   const [terminalContainer, setTerminalContainer] = useState<HTMLDivElement | null>(null);

   // Signal WebSocket - Listen for file changes and broadcast messages
   const {
      isConnected: signalConnected,
      connectionState: signalState,
      fileChanges,
      connect: connectSignal,
      disconnect: disconnectSignal,
   } = useSignalSocket({
      clientId: `integrated-client-${Date.now()}`,
      onFileChanged: (filePath, changeType) => {
         const notification = {
            id: Date.now(),
            message: `File ${changeType}: ${filePath}`,
            type: 'file-change',
            timestamp: new Date(),
         };
         setNotifications((prev) => [...prev.slice(-19), notification]);
      },
      onMessage: (message) => {
         if (message.type !== 'file-changed') {
            const notification = {
               id: Date.now(),
               message: `Signal: ${message.type}`,
               type: 'signal',
               timestamp: new Date(),
            };
            setNotifications((prev) => [...prev.slice(-19), notification]);
         }
      },
      onConnect: () => {
         const notification = {
            id: Date.now(),
            message: 'Signal server connected',
            type: 'connection',
            timestamp: new Date(),
         };
         setNotifications((prev) => [...prev.slice(-19), notification]);
      },
      onDisconnect: () => {
         const notification = {
            id: Date.now(),
            message: 'Signal server disconnected',
            type: 'connection',
            timestamp: new Date(),
         };
         setNotifications((prev) => [...prev.slice(-19), notification]);
      },
   });

   // Terminal WebSocket - Connect to terminal server
   const {
      terminal,
      initializeTerminal,
      connectionStatus,
      session,
      connect: connectTerminal,
      disconnect: disconnectTerminal,
      fit,
      isConnected: terminalConnected,
   } = useTerminal({
      onConnect: () => {
         const notification = {
            id: Date.now(),
            message: 'Terminal connected',
            type: 'connection',
            timestamp: new Date(),
         };
         setNotifications((prev) => [...prev.slice(-19), notification]);
      },
      onDisconnect: () => {
         const notification = {
            id: Date.now(),
            message: 'Terminal disconnected',
            type: 'connection',
            timestamp: new Date(),
         };
         setNotifications((prev) => [...prev.slice(-19), notification]);
      },
   });

   // Initialize terminal when container is ready
   useEffect(() => {
      if (terminalContainer && !terminal) {
         initializeTerminal().then((term) => {
            if (term) {
               term.open(terminalContainer);
               fit();
            }
         });
      }
   }, [terminalContainer, terminal, initializeTerminal, fit]);

   // Handle container resize
   useEffect(() => {
      if (terminal && terminalContainer) {
         const resizeObserver = new ResizeObserver(() => {
            fit();
         });
         resizeObserver.observe(terminalContainer);
         return () => resizeObserver.disconnect();
      }
   }, [terminal, terminalContainer, fit]);

   const handleConnectAll = () => {
      connectSignal();
      connectTerminal();
   };

   const handleDisconnectAll = () => {
      disconnectSignal();
      disconnectTerminal();
   };

   const getConnectionStatus = (connected: boolean, state: string) => {
      if (connected) return { text: 'Connected', color: 'text-green-600' };
      if (state === 'connecting') return { text: 'Connecting...', color: 'text-yellow-600' };
      if (state === 'error') return { text: 'Error', color: 'text-red-600' };
      return { text: 'Disconnected', color: 'text-gray-600' };
   };

   const signalStatus = getConnectionStatus(signalConnected, signalState);
   const terminalStatus = getConnectionStatus(terminalConnected, connectionStatus);

   return (
      <div className="max-w-7xl mx-auto p-6">
         <h1 className="text-3xl font-bold mb-6">Integrated WebSocket Demo</h1>

         {/* Connection Controls */}
         <div className="bg-white border rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Connection Status</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
               <div className="flex items-center gap-2">
                  <span className="font-medium">Signal Server:</span>
                  <span className={signalStatus.color}>{signalStatus.text}</span>
                  <span>{signalConnected ? '🟢' : '🔴'}</span>
               </div>

               <div className="flex items-center gap-2">
                  <span className="font-medium">Terminal Server:</span>
                  <span className={terminalStatus.color}>{terminalStatus.text}</span>
                  <span>{terminalConnected ? '🟢' : '🔴'}</span>
               </div>
            </div>

            {session && (
               <div className="mb-4 p-2 bg-gray-50 rounded text-sm">
                  <div>Session ID: {session.sessionId}</div>
                  <div>Shell: {session.shell}</div>
                  <div>Platform: {session.platform}</div>
               </div>
            )}

            <div className="flex gap-2">
               <button
                  onClick={handleConnectAll}
                  disabled={signalConnected && terminalConnected}
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
               >
                  Connect All
               </button>
               <button
                  onClick={handleDisconnectAll}
                  disabled={!signalConnected && !terminalConnected}
                  className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
               >
                  Disconnect All
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Terminal */}
            <div className="lg:col-span-2 border rounded-lg p-4">
               <h3 className="text-lg font-semibold mb-3">Terminal</h3>
               <div
                  ref={setTerminalContainer}
                  className="bg-black rounded h-96 w-full"
                  style={{ minHeight: '400px' }}
               />
            </div>

            {/* Notifications & File Changes */}
            <div className="space-y-4">
               {/* Live Notifications */}
               <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3">Live Notifications</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                     {notifications.length === 0 ? (
                        <div className="text-gray-500 text-sm">No notifications yet</div>
                     ) : (
                        notifications
                           .slice(-10)
                           .reverse()
                           .map((notification) => (
                              <div key={notification.id} className="text-sm p-2 bg-gray-50 rounded">
                                 <div className="font-medium">{notification.message}</div>
                                 <div className="text-xs text-gray-500">
                                    {notification.timestamp.toLocaleTimeString()}
                                 </div>
                              </div>
                           ))
                     )}
                  </div>
               </div>

               {/* File Changes */}
               <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3">
                     File Changes ({fileChanges.length})
                  </h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                     {fileChanges.length === 0 ? (
                        <div className="text-gray-500 text-sm">No file changes detected</div>
                     ) : (
                        fileChanges
                           .slice(-10)
                           .reverse()
                           .map((change, index) => (
                              <div key={index} className="text-sm p-2 bg-blue-50 rounded">
                                 <div className="font-medium text-blue-800">
                                    {change.changeType}: {change.filePath.split('/').pop()}
                                 </div>
                                 <div className="text-xs text-blue-600">
                                    {new Date(change.timestamp).toLocaleTimeString()}
                                 </div>
                              </div>
                           ))
                     )}
                  </div>
               </div>
            </div>
         </div>

         {/* Usage Info */}
         <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">How to test:</h3>
            <ul className="text-sm space-y-1">
               <li>1. Click "Connect All" to connect to both servers</li>
               <li>2. Use the terminal on the left to run commands</li>
               <li>3. File changes will appear in the right panel automatically</li>
               <li>
                  4. Try editing files in `.taskmaster/tasks/` to see file change notifications
               </li>
            </ul>
         </div>
      </div>
   );
}
