import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import type { TerminalMessage, TerminalSession } from '@/features/terminal/types/terminal';
import { TerminalConnectionStatus } from '@/features/terminal/types/terminal';
import { getWebSocketUrl } from '@/features/terminal/utils/terminalConfig';

export interface TerminalInstance {
   id: string;
   title: string;
   isMinimized: boolean;
   isMaximized: boolean;
   position: {
      x: number;
      y: number;
   };
   size: {
      width: number;
      height: number;
   };
   zIndex: number;
   createdAt: Date;
   lastActiveAt: Date;
   sessionId?: string;
   cwd?: string;
   shell?: string;
   // Persistence state
   isRestored?: boolean;
   lastConnectedAt?: Date;
   // Socket state
   connectionStatus: TerminalConnectionStatus;
   error?: string;
}

export interface TerminalConnectionData {
   websocket: WebSocket | null;
   session: TerminalSession | null;
   reconnectAttempts: number;
   reconnectTimeout: NodeJS.Timeout | null;
}

interface MultiTerminalStore {
   terminals: TerminalInstance[];
   activeTerminalId: string | null;
   baseZIndex: number;
   maxZIndex: number;
   // Persistence state
   lastSavedAt?: Date;
   isHydrated: boolean;
   // Socket management
   connections: Map<string, TerminalConnectionData>;

   // Terminal management
   createTerminal: (title?: string) => string;
   closeTerminal: (id: string) => void;
   setActiveTerminal: (id: string) => void;

   // Terminal state
   minimizeTerminal: (id: string) => void;
   maximizeTerminal: (id: string) => void;
   restoreTerminal: (id: string) => void;
   toggleMinimize: (id: string) => void;
   toggleMaximize: (id: string) => void;

   // Terminal positioning & sizing
   updateTerminalPosition: (id: string, x: number, y: number) => void;
   updateTerminalSize: (id: string, width: number, height: number) => void;
   bringTerminalToFront: (id: string) => void;

   // Terminal properties
   updateTerminalTitle: (id: string, title: string) => void;
   updateTerminalSession: (id: string, sessionId: string, shell?: string, cwd?: string) => void;

   // Socket management
   connectTerminal: (
      id: string,
      options?: { sessionId?: string; clientId?: string }
   ) => Promise<void>;
   disconnectTerminal: (id: string) => void;
   sendInput: (id: string, data: string) => void;
   reconnectTerminal: (id: string) => Promise<void>;
   resizeTerminal: (id: string, cols: number, rows: number) => void;
   broadcastToAll: (data: any) => void;
   getConnectionStatus: (id: string) => TerminalConnectionStatus;
   getSession: (id: string) => TerminalSession | null;
   getError: (id: string) => string | null;
   clearError: (id: string) => void;
   getWebSocket: (id: string) => WebSocket | null;

   // Helper functions (internal)
   handleTerminalMessage: (id: string, message: TerminalMessage) => void;
   attemptReconnect: (id: string) => void;

   // Utility functions
   getTerminalById: (id: string) => TerminalInstance | undefined;
   getVisibleTerminals: () => TerminalInstance[];
   getMinimizedTerminals: () => TerminalInstance[];
   arrangeTerminals: () => void;
   calculateOptimalTerminalSize: () => { width: number; height: number };

   // Persistence functions
   markTerminalAsRestored: (id: string) => void;
   cleanupStaleTerminals: () => void;
   safeStartupCheck: () => Promise<void>;
   hydrateTerminals: () => void;
}

// Default terminal dimensions and positioning (Chat-style)
const TERMINAL_SPACING = 24; // More spacing for cleaner look
const BASE_Z_INDEX = 1000;

// Socket management constants
const MAX_RECONNECT_ATTEMPTS = 5;
const RECONNECT_DELAY = 1000;

// Chat positioning constraints
const CHAT_MIN_WIDTH = 360;
const CHAT_MAX_WIDTH = 800;
const CHAT_MIN_HEIGHT = 400;
const CHAT_MAX_HEIGHT = 800;
const SAFE_AREA_X = 50;
const SAFE_AREA_Y = 80;

export const useMultiTerminalStore = create<MultiTerminalStore>()(
   persist(
      (set, get) => ({
         terminals: [],
         activeTerminalId: null,
         baseZIndex: BASE_Z_INDEX,
         maxZIndex: BASE_Z_INDEX,
         isHydrated: false,
         connections: new Map<string, TerminalConnectionData>(),

         createTerminal: (title = 'Terminal') => {
            const id = uuid();
            const terminals = get().terminals;
            const now = new Date();

            // Calculate position for new terminal (Chat style - bottom right with 150px safe area)

            const optimalSize = get().calculateOptimalTerminalSize();
            const x = Math.max(
               TERMINAL_SPACING,
               Math.min(
                  window.innerWidth - optimalSize.width - SAFE_AREA_X,
                  window.innerWidth - optimalSize.width - TERMINAL_SPACING
               )
            );
            const y = Math.max(
               TERMINAL_SPACING,
               Math.min(
                  window.innerHeight - optimalSize.height - SAFE_AREA_Y,
                  window.innerHeight - optimalSize.height - TERMINAL_SPACING
               )
            );

            const newZIndex = get().maxZIndex + 1;

            const newTerminal: TerminalInstance = {
               id,
               title: `${title} ${terminals.length + 1}`,
               isMinimized: false,
               isMaximized: false,
               position: { x, y },
               size: optimalSize,
               zIndex: newZIndex,
               createdAt: now,
               lastActiveAt: now,
               isRestored: false,
               connectionStatus: TerminalConnectionStatus.DISCONNECTED,
            };

            // Initialize connection data
            get().connections.set(id, {
               websocket: null,
               session: null,
               reconnectAttempts: 0,
               reconnectTimeout: null,
            });

            // Chat-like behavior: minimize all existing visible terminals before adding new one
            const updatedTerminals = terminals.map((terminal) => ({
               ...terminal,
               isMinimized: !terminal.isMinimized, // Only minimize currently visible ones
            }));

            set(() => ({
               terminals: [...updatedTerminals, newTerminal],
               activeTerminalId: id,
               maxZIndex: newZIndex,
               lastSavedAt: new Date(),
            }));

            return id;
         },

         closeTerminal: (id: string) => {
            // Cleanup connection first
            get().disconnectTerminal(id);
            get().connections.delete(id);

            set((state) => ({
               terminals: state.terminals.filter((t) => t.id !== id),
               activeTerminalId:
                  state.activeTerminalId === id
                     ? state.terminals.length > 1
                        ? state.terminals.find((t) => t.id !== id)?.id || null
                        : null
                     : state.activeTerminalId,
            }));
         },

         setActiveTerminal: (id: string) => {
            const terminal = get().getTerminalById(id);
            if (!terminal) return;

            console.log('setActiveTerminal', id);

            get().bringTerminalToFront(id);

            // Chat-like behavior: ensure only the active terminal is visible
            set((state) => ({
               activeTerminalId: id,
               terminals: state.terminals.map((t) => ({
                  ...t,
                  lastActiveAt: t.id === id ? new Date() : t.lastActiveAt,
                  isMinimized: t.id === id ? false : true,
               })),
            }));
         },

         minimizeTerminal: (id: string) => {
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id ? { ...t, isMinimized: true, isMaximized: false } : t
               ),
            }));
         },

         maximizeTerminal: (id: string) => {
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id ? { ...t, isMaximized: true, isMinimized: false } : t
               ),
            }));
         },

         restoreTerminal: (id: string) => {
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id ? { ...t, isMinimized: false, isMaximized: false } : t
               ),
            }));
         },

         toggleMinimize: (id: string) => {
            const terminal = get().getTerminalById(id);
            if (!terminal) {
               console.log(`Terminal not found: ${id}`);
               return;
            }

            console.log(
               `Toggle minimize for terminal ${id}: currently ${terminal.isMinimized ? 'minimized' : 'normal'}`
            );

            if (terminal.isMinimized) {
               // Restore the terminal - this will make it visible and active
               get().setActiveTerminal(id);
               get().bringTerminalToFront(id);
            } else {
               // Just minimize, don't set as active
               get().minimizeTerminal(id);
            }
         },

         toggleMaximize: (id: string) => {
            const terminal = get().getTerminalById(id);
            if (!terminal) return;

            if (terminal.isMaximized) {
               get().restoreTerminal(id);
            } else {
               get().maximizeTerminal(id);
            }
         },

         updateTerminalPosition: (id: string, x: number, y: number) => {
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id ? { ...t, position: { x, y } } : t
               ),
            }));
         },

         updateTerminalSize: (id: string, width: number, height: number) => {
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id ? { ...t, size: { width, height } } : t
               ),
            }));
         },

         bringTerminalToFront: (id: string) => {
            const newZIndex = get().maxZIndex + 1;
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id ? { ...t, zIndex: newZIndex } : t
               ),
               maxZIndex: newZIndex,
            }));
         },

         updateTerminalTitle: (id: string, title: string) => {
            set((state) => ({
               terminals: state.terminals.map((t) => (t.id === id ? { ...t, title } : t)),
            }));
         },

         updateTerminalSession: (id: string, sessionId: string, shell?: string, cwd?: string) => {
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id ? { ...t, sessionId, shell, cwd, lastConnectedAt: new Date() } : t
               ),
               lastSavedAt: new Date(),
            }));
         },

         getTerminalById: (id: string) => {
            return get().terminals.find((t) => t.id === id);
         },

         getVisibleTerminals: () => {
            return get().terminals.filter((t) => !t.isMinimized);
         },

         getMinimizedTerminals: () => {
            return get().terminals.filter((t) => t.isMinimized);
         },

         arrangeTerminals: () => {
            const terminals = get().getVisibleTerminals();

            // For chat-like behavior, we typically only have one visible terminal
            // But if multiple are visible, arrange them in a more organized way
            terminals.forEach((terminal) => {
               if (!terminal.isMaximized) {
                  // Calculate optimal position for chat-style arrangement with 150px safe area
                  const SAFE_AREA = 150;
                  const optimalSize = get().calculateOptimalTerminalSize();
                  const x = Math.max(
                     TERMINAL_SPACING,
                     Math.min(
                        window.innerWidth - optimalSize.width - SAFE_AREA,
                        window.innerWidth - optimalSize.width - TERMINAL_SPACING
                     )
                  );
                  const y = Math.max(
                     TERMINAL_SPACING,
                     Math.min(
                        window.innerHeight - optimalSize.height - SAFE_AREA,
                        window.innerHeight - optimalSize.height - TERMINAL_SPACING
                     )
                  );

                  get().updateTerminalPosition(terminal.id, x, y);
               }
            });
         },

         // Helper function to calculate optimal terminal size for viewport
         calculateOptimalTerminalSize: () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Calculate optimal dimensions based on viewport size
            const optimalWidth = Math.min(
               CHAT_MAX_WIDTH,
               Math.max(CHAT_MIN_WIDTH, viewportWidth * 0.4) // 40% of viewport width
            );

            const optimalHeight = Math.min(
               CHAT_MAX_HEIGHT,
               Math.max(CHAT_MIN_HEIGHT, viewportHeight * 0.7) // 70% of viewport height
            );

            return { width: optimalWidth, height: optimalHeight };
         },

         // Socket Management Functions
         connectTerminal: async (
            id: string,
            options?: { sessionId?: string; clientId?: string }
         ) => {
            const terminal = get().getTerminalById(id);
            const connectionData = get().connections.get(id);

            if (!terminal || !connectionData) {
               console.error(`Terminal ${id} not found`);
               return;
            }

            // If already connected or connecting, skip
            if (
               terminal.connectionStatus === TerminalConnectionStatus.CONNECTED ||
               terminal.connectionStatus === TerminalConnectionStatus.CONNECTING
            ) {
               return;
            }

            // Update status to connecting
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id
                     ? {
                          ...t,
                          connectionStatus: TerminalConnectionStatus.CONNECTING,
                          error: undefined,
                       }
                     : t
               ),
            }));

            try {
               let websocketUrl = await getWebSocketUrl();

               // Add session restoration parameters if available
               if (options?.sessionId || options?.clientId) {
                  const urlParams = new URLSearchParams();
                  if (options.sessionId) urlParams.set('sessionId', options.sessionId);
                  if (options.clientId) urlParams.set('clientId', options.clientId);
                  websocketUrl += `?${urlParams.toString()}`;
               }

               const ws = new WebSocket(websocketUrl);
               connectionData.websocket = ws;
               connectionData.reconnectAttempts = 0;

               return new Promise<void>((resolve, reject) => {
                  ws.onopen = () => {
                     console.log(`Terminal ${id} WebSocket connected`);
                     set((state) => ({
                        terminals: state.terminals.map((t) =>
                           t.id === id
                              ? { ...t, connectionStatus: TerminalConnectionStatus.CONNECTED }
                              : t
                        ),
                     }));
                     resolve();
                  };

                  ws.onmessage = (event) => {
                     try {
                        const message: TerminalMessage = JSON.parse(event.data);
                        get().handleTerminalMessage(id, message);
                     } catch (err) {
                        console.error(`Terminal ${id} message parse error:`, err);
                     }
                  };

                  ws.onclose = (event) => {
                     console.log(`Terminal ${id} WebSocket closed:`, event.code, event.reason);
                     set((state) => ({
                        terminals: state.terminals.map((t) =>
                           t.id === id
                              ? { ...t, connectionStatus: TerminalConnectionStatus.DISCONNECTED }
                              : t
                        ),
                     }));

                     connectionData.websocket = null;

                     // Attempt reconnection if not intentionally closed
                     if (
                        event.code !== 1000 &&
                        connectionData.reconnectAttempts < MAX_RECONNECT_ATTEMPTS
                     ) {
                        get().attemptReconnect(id);
                     }
                  };

                  ws.onerror = (error) => {
                     console.error(`Terminal ${id} WebSocket error:`, error);
                     const errorMsg = 'WebSocket connection error';
                     set((state) => ({
                        terminals: state.terminals.map((t) =>
                           t.id === id
                              ? {
                                   ...t,
                                   connectionStatus: TerminalConnectionStatus.ERROR,
                                   error: errorMsg,
                                }
                              : t
                        ),
                     }));
                     reject(new Error(errorMsg));
                  };
               });
            } catch (err) {
               const errorMsg =
                  err instanceof Error ? err.message : 'Failed to connect to terminal';
               set((state) => ({
                  terminals: state.terminals.map((t) =>
                     t.id === id
                        ? {
                             ...t,
                             connectionStatus: TerminalConnectionStatus.ERROR,
                             error: errorMsg,
                          }
                        : t
                  ),
               }));
               throw new Error(errorMsg);
            }
         },

         disconnectTerminal: (id: string) => {
            const connectionData = get().connections.get(id);
            if (!connectionData) return;

            // Clear reconnect timeout
            if (connectionData.reconnectTimeout) {
               clearTimeout(connectionData.reconnectTimeout);
               connectionData.reconnectTimeout = null;
            }

            // Close websocket
            if (connectionData.websocket) {
               connectionData.websocket.close(1000, 'Intentional disconnect');
               connectionData.websocket = null;
            }

            // Update terminal status
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id
                     ? {
                          ...t,
                          connectionStatus: TerminalConnectionStatus.DISCONNECTED,
                          error: undefined,
                       }
                     : t
               ),
            }));

            // Reset connection data
            connectionData.session = null;
            connectionData.reconnectAttempts = 0;
         },

         sendInput: (id: string, data: string) => {
            const connectionData = get().connections.get(id);
            const terminal = get().getTerminalById(id);

            if (!connectionData?.websocket || !terminal) {
               console.warn(`Cannot send input to terminal ${id}: not connected`);
               return;
            }

            if (connectionData.websocket.readyState === WebSocket.OPEN) {
               connectionData.websocket.send(
                  JSON.stringify({
                     type: 'input',
                     data,
                  })
               );
            } else {
               console.warn(
                  `Terminal ${id} WebSocket not open:`,
                  connectionData.websocket.readyState
               );
            }
         },

         reconnectTerminal: async (id: string) => {
            const terminal = get().getTerminalById(id);
            if (!terminal) return;

            console.log(`Manual reconnect requested for terminal ${id}`);
            get().disconnectTerminal(id);

            await new Promise((resolve) => setTimeout(resolve, 500));
            return get().connectTerminal(id, {
               sessionId: terminal.sessionId,
               clientId: id,
            });
         },

         resizeTerminal: (id: string, cols: number, rows: number) => {
            const connectionData = get().connections.get(id);

            if (
               connectionData?.websocket &&
               connectionData.websocket.readyState === WebSocket.OPEN
            ) {
               connectionData.websocket.send(
                  JSON.stringify({
                     type: 'resize',
                     data: { cols, rows },
                  })
               );
            }
         },

         broadcastToAll: (data: any) => {
            get().connections.forEach((connectionData) => {
               if (
                  connectionData.websocket &&
                  connectionData.websocket.readyState === WebSocket.OPEN
               ) {
                  connectionData.websocket.send(JSON.stringify(data));
               }
            });
         },

         getConnectionStatus: (id: string) => {
            const terminal = get().getTerminalById(id);
            return terminal?.connectionStatus || TerminalConnectionStatus.DISCONNECTED;
         },

         getSession: (id: string) => {
            const connectionData = get().connections.get(id);
            return connectionData?.session || null;
         },

         getError: (id: string) => {
            const terminal = get().getTerminalById(id);
            return terminal?.error || null;
         },

         clearError: (id: string) => {
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id ? { ...t, error: undefined } : t
               ),
            }));
         },

         getWebSocket: (id: string) => {
            const connectionData = get().connections.get(id);
            return connectionData?.websocket || null;
         },

         // Helper function to handle terminal messages (simplified - only connection/session management)
         handleTerminalMessage: (id: string, message: TerminalMessage) => {
            const connectionData = get().connections.get(id);
            if (!connectionData) return;

            switch (message.type) {
               case 'connected':
                  if (message.sessionId && message.shell && message.platform) {
                     connectionData.session = {
                        sessionId: message.sessionId,
                        shell: message.shell,
                        platform: message.platform,
                        cwd: message.cwd || '',
                        connected: true,
                     };
                     get().updateTerminalSession(id, message.sessionId, message.shell, message.cwd);
                  }
                  break;

               case 'session-restored':
                  console.log(`Session restored for terminal ${id}: ${message.sessionId}`);
                  if (message.sessionId && message.shell && message.platform) {
                     connectionData.session = {
                        sessionId: message.sessionId,
                        shell: message.shell,
                        platform: message.platform,
                        cwd: message.cwd || '',
                        connected: true,
                     };
                     get().updateTerminalSession(id, message.sessionId, message.shell, message.cwd);
                     get().markTerminalAsRestored(id);
                  }
                  break;

               case 'exit':
                  console.log(`Terminal ${id} process exited with code:`, message.exitCode);
                  if (connectionData.session) {
                     connectionData.session.connected = false;
                  }
                  break;

               case 'error':
                  const errorMsg = message.message || 'Terminal error occurred';
                  set((state) => ({
                     terminals: state.terminals.map((t) =>
                        t.id === id ? { ...t, error: errorMsg } : t
                     ),
                  }));
                  break;

               case 'data':
                  // Store no longer handles data messages - components access WebSocket directly
                  break;

               default:
                  console.warn(`Unknown message type for terminal ${id}:`, message.type);
            }
         },

         // Helper function for reconnection attempts
         attemptReconnect: (id: string) => {
            const connectionData = get().connections.get(id);
            if (!connectionData) return;

            if (connectionData.reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
               set((state) => ({
                  terminals: state.terminals.map((t) =>
                     t.id === id
                        ? {
                             ...t,
                             connectionStatus: TerminalConnectionStatus.ERROR,
                             error: 'Maximum reconnection attempts reached',
                          }
                        : t
                  ),
               }));
               return;
            }

            connectionData.reconnectAttempts++;
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id
                     ? { ...t, connectionStatus: TerminalConnectionStatus.RECONNECTING }
                     : t
               ),
            }));

            connectionData.reconnectTimeout = setTimeout(() => {
               console.log(
                  `Reconnection attempt ${connectionData.reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS} for terminal ${id}`
               );
               get()
                  .connectTerminal(id, {
                     sessionId: get().getTerminalById(id)?.sessionId,
                     clientId: id,
                  })
                  .catch((error) => {
                     console.error(`Reconnection failed for terminal ${id}:`, error);
                  });
            }, RECONNECT_DELAY * connectionData.reconnectAttempts);
         },

         // Mark terminal as successfully restored/reconnected
         markTerminalAsRestored: (id: string) => {
            set((state) => ({
               terminals: state.terminals.map((t) =>
                  t.id === id ? { ...t, isRestored: true, lastConnectedAt: new Date() } : t
               ),
               lastSavedAt: new Date(),
            }));
         },

         // Clean up terminals that haven't been connected recently
         cleanupStaleTerminals: () => {
            const STALE_THRESHOLD = 24 * 60 * 60 * 1000; // 24 hours
            const now = new Date();

            set((state) => ({
               terminals: state.terminals.filter((terminal) => {
                  if (!terminal.lastConnectedAt) {
                     // Keep terminals without connection info (newly created)
                     return true;
                  }

                  const timeSinceLastConnection =
                     now.getTime() - terminal.lastConnectedAt.getTime();
                  return timeSinceLastConnection < STALE_THRESHOLD;
               }),
               lastSavedAt: new Date(),
            }));
         },

         // Safe startup check - validate and clean up terminal states
         safeStartupCheck: async () => {
            console.log('🔍 Running terminal safe startup check...');

            const state = get();
            let cleanupCount = 0;

            // 1. Clean up stale terminals first
            const initialCount = state.terminals.length;
            get().cleanupStaleTerminals();
            const afterCleanup = get().terminals.length;
            cleanupCount = initialCount - afterCleanup;

            // 2. Validate terminal positions and sizes
            const validatedTerminals = get().terminals.map((terminal) => {
               const updatedTerminal = { ...terminal };

               // Check if position is valid (within window bounds)
               if (typeof window !== 'undefined') {
                  const { width: winWidth, height: winHeight } = window.screen || {
                     width: 1920,
                     height: 1080,
                  };

                  if (terminal.position.x < 0 || terminal.position.x > winWidth - 100) {
                     updatedTerminal.position.x = Math.max(
                        TERMINAL_SPACING,
                        winWidth - terminal.size.width - SAFE_AREA_X
                     );
                  }

                  if (terminal.position.y < 0 || terminal.position.y > winHeight - 100) {
                     updatedTerminal.position.y = Math.max(
                        TERMINAL_SPACING,
                        winHeight - terminal.size.height - SAFE_AREA_Y
                     );
                  }
               }

               // Reset restoration flag for fresh startup
               if (terminal.isRestored) {
                  updatedTerminal.isRestored = false;
               }

               return updatedTerminal;
            });

            // 3. Update terminals if any validation changes were made
            const hasValidationChanges = validatedTerminals.some(
               (t, i) => JSON.stringify(t) !== JSON.stringify(get().terminals[i])
            );

            if (hasValidationChanges) {
               set(() => ({
                  terminals: validatedTerminals,
                  lastSavedAt: new Date(),
               }));
            }

            console.log(`✅ Terminal startup check complete:`, {
               cleanedUp: cleanupCount,
               remaining: get().terminals.length,
               validated: hasValidationChanges,
            });
         },

         // Mark store as hydrated from persistence
         hydrateTerminals: () => {
            set({ isHydrated: true });
            console.log('💧 Terminal store hydrated from persistence');
         },
      }),
      {
         name: 'multi-terminal-store',
         storage: createJSONStorage(() => localStorage),
         partialize: (state) => ({
            terminals: state.terminals.map((terminal) => ({
               ...terminal,
               // Convert dates to strings for serialization
               createdAt: terminal.createdAt,
               lastActiveAt: terminal.lastActiveAt,
               lastConnectedAt: terminal.lastConnectedAt,
               // Reset connection status on serialization - will reconnect on startup
               connectionStatus: TerminalConnectionStatus.DISCONNECTED,
               error: undefined,
            })),
            activeTerminalId: state.activeTerminalId,
            baseZIndex: state.baseZIndex,
            maxZIndex: state.maxZIndex,
            lastSavedAt: state.lastSavedAt,
            // Exclude connections Map from serialization (contains WebSocket objects)
         }),
         onRehydrateStorage: () => (state) => {
            if (state) {
               // Convert date strings back to Date objects
               const rehydratedTerminals = state.terminals.map((terminal) => ({
                  ...terminal,
                  createdAt: new Date(terminal.createdAt),
                  lastActiveAt: new Date(terminal.lastActiveAt),
                  lastConnectedAt: terminal.lastConnectedAt
                     ? new Date(terminal.lastConnectedAt)
                     : undefined,
                  // Ensure connection status is disconnected on rehydration
                  connectionStatus: TerminalConnectionStatus.DISCONNECTED,
                  error: undefined,
               }));

               state.terminals = rehydratedTerminals;
               state.lastSavedAt = state.lastSavedAt ? new Date(state.lastSavedAt) : undefined;

               // Initialize connections Map for all terminals
               state.connections = new Map<string, TerminalConnectionData>();
               rehydratedTerminals.forEach((terminal) => {
                  state.connections.set(terminal.id, {
                     websocket: null,
                     session: null,
                     reconnectAttempts: 0,
                     reconnectTimeout: null,
                  });
               });

               state.hydrateTerminals();

               // Note: Safe startup check is handled by TerminalStartupManager in DataInitializer
               // to avoid duplicate calls and infinite loops
            }
         },
      }
   )
);
