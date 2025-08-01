'use client';

import { useEffect, useRef, useState } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';

interface SyncNotification {
   type: 'taskmaster-sync';
   event: 'file-changed' | 'tasks-updated';
   file?: string;
   timestamp: string;
}

interface SyncStatus {
   connected: boolean;
   lastSync?: Date;
   error?: string;
}

export function useTaskMasterSync() {
   const [syncStatus, setSyncStatus] = useState<SyncStatus>({ connected: false });
   const wsRef = useRef<WebSocket | null>(null);
   const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   const { forceSyncTaskMaster } = useDataStore();

   const connect = async () => {
      try {
         // Get WebSocket URL from the sync API
         let wsUrl = `ws://localhost:3001?type=sync&clientId=${Date.now()}`; // Fallback

         try {
            const response = await fetch('/api/sync');
            if (response.ok) {
               const syncInfo = await response.json();
               wsUrl = `${syncInfo.websocketUrl}&clientId=${Date.now()}`;
               console.log('[TaskMasterSync] Using API-provided WebSocket URL:', wsUrl);
            }
         } catch (apiError) {
            console.warn(
               '[TaskMasterSync] Failed to get WebSocket URL from API, using fallback:',
               apiError
            );
         }

         const ws = new WebSocket(wsUrl);

         ws.onopen = () => {
            console.log('[TaskMasterSync] Connected to sync WebSocket');
            setSyncStatus({ connected: true });

            // Clear any pending reconnection attempts
            if (reconnectTimeoutRef.current) {
               clearTimeout(reconnectTimeoutRef.current);
               reconnectTimeoutRef.current = null;
            }
         };

         ws.onmessage = async (event) => {
            try {
               const data = JSON.parse(event.data);

               if (data.type === 'sync-connected') {
                  console.log('[TaskMasterSync] Sync connection confirmed');
                  return;
               }

               if (data.type === 'taskmaster-sync') {
                  const notification: SyncNotification = data;
                  console.log('[TaskMasterSync] Received sync notification:', notification);

                  // Trigger data store sync when TaskMaster files change
                  if (notification.event === 'file-changed') {
                     console.log(
                        `[TaskMasterSync] TaskMaster file '${notification.file}' changed, triggering sync...`
                     );

                     // Add a small delay to ensure file write is complete
                     setTimeout(async () => {
                        try {
                           await forceSyncTaskMaster();
                           setSyncStatus((prev) => ({
                              ...prev,
                              lastSync: new Date(),
                              error: undefined,
                           }));
                           console.log('[TaskMasterSync] Data sync completed successfully');
                        } catch (error) {
                           console.error('[TaskMasterSync] Data sync failed:', error);
                           setSyncStatus((prev) => ({
                              ...prev,
                              error: error instanceof Error ? error.message : 'Sync failed',
                           }));
                        }
                     }, 300); // 300ms delay to ensure file write completion
                  }
               }
            } catch (error) {
               console.error('[TaskMasterSync] Error processing sync message:', error);
            }
         };

         ws.onclose = () => {
            console.log('[TaskMasterSync] WebSocket connection closed');
            setSyncStatus((prev) => ({ ...prev, connected: false }));

            // Attempt to reconnect after 3 seconds
            reconnectTimeoutRef.current = setTimeout(async () => {
               console.log('[TaskMasterSync] Attempting to reconnect...');
               await connect();
            }, 3000);
         };

         ws.onerror = (error) => {
            console.error('[TaskMasterSync] WebSocket error:', error);
            setSyncStatus((prev) => ({
               ...prev,
               connected: false,
               error: 'Connection error',
            }));
         };

         wsRef.current = ws;
      } catch (error) {
         console.error('[TaskMasterSync] Failed to connect to sync WebSocket:', error);
         setSyncStatus({
            connected: false,
            error: error instanceof Error ? error.message : 'Connection failed',
         });
      }
   };

   const disconnect = () => {
      if (wsRef.current) {
         wsRef.current.close();
         wsRef.current = null;
      }

      if (reconnectTimeoutRef.current) {
         clearTimeout(reconnectTimeoutRef.current);
         reconnectTimeoutRef.current = null;
      }

      setSyncStatus({ connected: false });
   };

   // Auto-connect when hook is used
   useEffect(() => {
      const initConnect = async () => {
         await connect();
      };

      initConnect();

      return () => {
         disconnect();
      };
   }, []);

   return {
      syncStatus,
      connect,
      disconnect,
      isConnected: syncStatus.connected,
      lastSync: syncStatus.lastSync,
      error: syncStatus.error,
   };
}
