import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';

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
}

interface MultiTerminalStore {
   terminals: TerminalInstance[];
   activeTerminalId: string | null;
   baseZIndex: number;
   maxZIndex: number;
   // Persistence state
   lastSavedAt?: Date;
   isHydrated: boolean;

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
            };

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
               // Restore the terminal without affecting other terminals
               const terminals = get().terminals;
               const updatedTerminals = terminals.map((t) => ({
                  ...t,
                  isMinimized: t.id === id ? false : t.isMinimized,
                  isMaximized: t.id === id ? false : t.isMaximized,
               }));

               set(() => ({
                  terminals: updatedTerminals,
                  activeTerminalId: id,
               }));

               // Update last active time and bring to front
               get().setActiveTerminal(id);
               get().bringTerminalToFront(id);
            } else {
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
            })),
            activeTerminalId: state.activeTerminalId,
            baseZIndex: state.baseZIndex,
            maxZIndex: state.maxZIndex,
            lastSavedAt: state.lastSavedAt,
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
               }));

               state.terminals = rehydratedTerminals;
               state.lastSavedAt = state.lastSavedAt ? new Date(state.lastSavedAt) : undefined;
               state.hydrateTerminals();

               // Note: Safe startup check is handled by TerminalStartupManager in DataInitializer
               // to avoid duplicate calls and infinite loops
            }
         },
      }
   )
);
