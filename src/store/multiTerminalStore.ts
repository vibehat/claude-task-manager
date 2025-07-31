import { create } from 'zustand';
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
}

interface MultiTerminalStore {
   terminals: TerminalInstance[];
   activeTerminalId: string | null;
   baseZIndex: number;
   maxZIndex: number;

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
}

// Default terminal dimensions and positioning
const DEFAULT_TERMINAL_WIDTH = 800;
const DEFAULT_TERMINAL_HEIGHT = 500;
const MINIMIZED_TERMINAL_HEIGHT = 48;
const TERMINAL_SPACING = 20;
const BASE_Z_INDEX = 1000;

export const useMultiTerminalStore = create<MultiTerminalStore>((set, get) => ({
   terminals: [],
   activeTerminalId: null,
   baseZIndex: BASE_Z_INDEX,
   maxZIndex: BASE_Z_INDEX,

   createTerminal: (title = 'Terminal') => {
      const id = uuid();
      const terminals = get().terminals;
      const now = new Date();

      // Calculate position for new terminal (Facebook chat style - bottom right, stacked)
      const terminalIndex = terminals.length;
      const x = window.innerWidth - DEFAULT_TERMINAL_WIDTH - TERMINAL_SPACING - terminalIndex * 20;
      const y = window.innerHeight - DEFAULT_TERMINAL_HEIGHT - TERMINAL_SPACING;

      const newZIndex = get().maxZIndex + 1;

      const newTerminal: TerminalInstance = {
         id,
         title: `${title} ${terminals.length + 1}`,
         isMinimized: false,
         isMaximized: false,
         position: { x: Math.max(20, x), y: Math.max(20, y) },
         size: { width: DEFAULT_TERMINAL_WIDTH, height: DEFAULT_TERMINAL_HEIGHT },
         zIndex: newZIndex,
         createdAt: now,
         lastActiveAt: now,
      };

      set((state) => ({
         terminals: [...state.terminals, newTerminal],
         activeTerminalId: id,
         maxZIndex: newZIndex,
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

      set((state) => ({
         activeTerminalId: id,
         terminals: state.terminals.map((t) =>
            t.id === id ? { ...t, lastActiveAt: new Date() } : t
         ),
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
      if (!terminal) return;

      if (terminal.isMinimized) {
         get().restoreTerminal(id);
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
         terminals: state.terminals.map((t) => (t.id === id ? { ...t, position: { x, y } } : t)),
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
         terminals: state.terminals.map((t) => (t.id === id ? { ...t, zIndex: newZIndex } : t)),
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
         terminals: state.terminals.map((t) => (t.id === id ? { ...t, sessionId, shell, cwd } : t)),
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
      const updates: { id: string; x: number; y: number }[] = [];

      terminals.forEach((terminal, index) => {
         if (!terminal.isMaximized) {
            const x = window.innerWidth - DEFAULT_TERMINAL_WIDTH - TERMINAL_SPACING - index * 20;
            const y = window.innerHeight - DEFAULT_TERMINAL_HEIGHT - TERMINAL_SPACING - index * 30;

            updates.push({
               id: terminal.id,
               x: Math.max(20, x),
               y: Math.max(20, y),
            });
         }
      });

      set((state) => ({
         terminals: state.terminals.map((t) => {
            const update = updates.find((u) => u.id === t.id);
            return update ? { ...t, position: { x: update.x, y: update.y } } : t;
         }),
      }));
   },
}));
