'use client';

import { useState, useEffect } from 'react';
import { useWebSocket, useTaskWebSocket, ConnectionState } from '@/hooks/use-websocket';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export function WebSocketDemo() {
   const [messages, setMessages] = useState<any[]>([]);
   const [cliCommand, setCLICommand] = useState('list');
   const [cliArgs, setCLIArgs] = useState('');

   // Use the task-specific WebSocket hook
   const {
      connectionState,
      isConnected,
      error,
      connect,
      disconnect,
      reconnect,
      executeCli,
      getTasks,
      connectionInfo,
      lastMessage,
   } = useTaskWebSocket({
      onTasksUpdated: (data) => {
         console.log('Tasks updated:', data);
         addMessage('tasks-updated', data);
      },
   });

   // Add message to display log
   const addMessage = (type: string, data: any) => {
      setMessages((prev) => [
         {
            id: Date.now(),
            type,
            data,
            timestamp: new Date().toISOString(),
         },
         ...prev.slice(0, 49), // Keep last 50 messages
      ]);
   };

   // Handle last message updates
   useEffect(() => {
      if (lastMessage) {
         addMessage(lastMessage.type, lastMessage.data);
      }
   }, [lastMessage]);

   // Execute CLI command
   const handleCLICommand = async () => {
      try {
         const args = cliArgs ? cliArgs.split(' ').filter((arg) => arg.trim()) : [];
         const result = await executeCli(cliCommand, args);
         addMessage('cli-success', { command: cliCommand, args, result });
      } catch (error) {
         addMessage('cli-error', { command: cliCommand, args: cliArgs, error: error.message });
      }
   };

   // Get connection state badge variant
   const getConnectionBadgeVariant = () => {
      switch (connectionState) {
         case ConnectionState.CONNECTED:
            return 'default';
         case ConnectionState.CONNECTING:
         case ConnectionState.RECONNECTING:
            return 'secondary';
         case ConnectionState.ERROR:
            return 'destructive';
         default:
            return 'outline';
      }
   };

   return (
      <div className="space-y-6 p-6">
         <div>
            <h2 className="text-2xl font-semibold">WebSocket Connection Demo</h2>
            <p className="text-muted-foreground">
               Test the WebSocket connection layer for Task Master integration
            </p>
         </div>

         {/* Connection Status */}
         <Card>
            <CardHeader>
               <CardTitle className="flex items-center justify-between">
                  Connection Status
                  <Badge variant={getConnectionBadgeVariant()}>{connectionState}</Badge>
               </CardTitle>
               <CardDescription>WebSocket connection status and information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                     <label className="text-sm font-medium">Client ID</label>
                     <p className="text-sm text-muted-foreground">
                        {connectionInfo.clientId || 'Not connected'}
                     </p>
                  </div>
                  <div>
                     <label className="text-sm font-medium">Connected At</label>
                     <p className="text-sm text-muted-foreground">
                        {connectionInfo.connectedAt?.toLocaleString() || 'Not connected'}
                     </p>
                  </div>
                  <div>
                     <label className="text-sm font-medium">Connected Clients</label>
                     <p className="text-sm text-muted-foreground">
                        {connectionInfo.connectedClients || 'Unknown'}
                     </p>
                  </div>
               </div>

               {error && (
                  <div className="p-3 bg-destructive/10 text-destructive rounded-md">
                     <p className="text-sm font-medium">Connection Error:</p>
                     <p className="text-sm">{error}</p>
                  </div>
               )}

               <div className="flex gap-2">
                  <Button onClick={connect} disabled={isConnected} variant="default">
                     Connect
                  </Button>
                  <Button onClick={disconnect} disabled={!isConnected} variant="outline">
                     Disconnect
                  </Button>
                  <Button onClick={reconnect} variant="secondary">
                     Reconnect
                  </Button>
               </div>
            </CardContent>
         </Card>

         {/* CLI Commands */}
         <Card>
            <CardHeader>
               <CardTitle>CLI Command Testing</CardTitle>
               <CardDescription>Execute Task Master CLI commands through WebSocket</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <label className="text-sm font-medium">Command</label>
                     <select
                        value={cliCommand}
                        onChange={(e) => setCLICommand(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                     >
                        <option value="list">list</option>
                        <option value="next">next</option>
                        <option value="models">models</option>
                        <option value="complexity-report">complexity-report</option>
                        <option value="show">show</option>
                     </select>
                  </div>
                  <div>
                     <label className="text-sm font-medium">Arguments</label>
                     <input
                        type="text"
                        value={cliArgs}
                        onChange={(e) => setCLIArgs(e.target.value)}
                        placeholder="e.g., --status=pending"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                     />
                  </div>
               </div>

               <div className="flex gap-2">
                  <Button onClick={handleCLICommand} disabled={!isConnected}>
                     Execute Command
                  </Button>
                  <Button onClick={getTasks} disabled={!isConnected} variant="outline">
                     Get Tasks
                  </Button>
               </div>
            </CardContent>
         </Card>

         {/* Message Log */}
         <Card>
            <CardHeader>
               <CardTitle className="flex items-center justify-between">
                  Message Log
                  <Button onClick={() => setMessages([])} variant="outline" size="sm">
                     Clear
                  </Button>
               </CardTitle>
               <CardDescription>Real-time WebSocket messages and events</CardDescription>
            </CardHeader>
            <CardContent>
               <ScrollArea className="h-96">
                  <div className="space-y-2">
                     {messages.length === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-4">
                           No messages yet. Connect to see real-time updates.
                        </p>
                     ) : (
                        messages.map((message, index) => (
                           <div key={message.id} className="border rounded p-3 space-y-2">
                              <div className="flex items-center justify-between">
                                 <Badge variant="outline">{message.type}</Badge>
                                 <span className="text-xs text-muted-foreground">
                                    {new Date(message.timestamp).toLocaleTimeString()}
                                 </span>
                              </div>
                              <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
                                 {JSON.stringify(message.data, null, 2)}
                              </pre>
                           </div>
                        ))
                     )}
                  </div>
               </ScrollArea>
            </CardContent>
         </Card>
      </div>
   );
}
