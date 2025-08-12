import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Terminal {
  id: string;
  title: string;
  isActive: boolean;
  createdAt: Date;
}

interface TerminalManagerState {
  terminals: Terminal[];
  activeTerminalId: string | null;
  isButtonBarVisible: boolean;
  isTerminalVisible: boolean;

  // Loading states
  loading: {
    creating: boolean;
    closing: boolean;
  };

  // Error state
  error: string | null;
}

interface TerminalManagerActions {
  // Terminal management
  createTerminal: (title?: string) => string;
  closeTerminal: (id: string) => void;
  switchToTerminal: (id: string) => void;
  renameTerminal: (id: string, title: string) => void;

  // Visibility controls
  showTerminals: () => void;
  hideTerminals: () => void;
  toggleTerminals: () => void;
  showButtonBarOnly: () => void;

  // Utility actions
  getTerminal: (id: string) => Terminal | undefined;
  getNextTerminal: () => Terminal | undefined;
  setLoading: (key: keyof TerminalManagerState['loading'], loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

type TerminalManagerStore = TerminalManagerState & TerminalManagerActions;

const initialState: TerminalManagerState = {
  terminals: [],
  activeTerminalId: null,
  isButtonBarVisible: false,
  isTerminalVisible: false,
  loading: {
    creating: false,
    closing: false,
  },
  error: null,
};

export const useTerminalManagerStore = create<TerminalManagerStore>()(
  devtools(
    (set, get) => ({
      ...initialState,

      // Terminal management
      createTerminal: (title) => {
        const store = get();
        const terminalNumber = store.terminals.length + 1;
        const id = `terminal-${Date.now()}`;
        const terminalTitle = title || `Terminal ${terminalNumber}`;

        const newTerminal: Terminal = {
          id,
          title: terminalTitle,
          isActive: true,
          createdAt: new Date(),
        };

        set((state) => ({
          terminals: [
            ...state.terminals.map((t) => ({ ...t, isActive: false })), // Deactivate others
            newTerminal,
          ],
          activeTerminalId: id,
          isButtonBarVisible: true,
          isTerminalVisible: true,
          error: null,
        }));

        console.log('Created terminal:', terminalTitle);
        return id;
      },

      closeTerminal: (id) => {
        const store = get();
        const terminalsAfterClose = store.terminals.filter((t) => t.id !== id);

        // Handle active terminal switching
        let newActiveId: string | null = null;
        if (store.activeTerminalId === id && terminalsAfterClose.length > 0) {
          // Switch to the last terminal in the list
          const lastTerminal = terminalsAfterClose[terminalsAfterClose.length - 1];
          newActiveId = lastTerminal.id;
        }

        set({
          terminals: terminalsAfterClose.map((t) => ({
            ...t,
            isActive: t.id === newActiveId,
          })),
          activeTerminalId: newActiveId,
          isButtonBarVisible: terminalsAfterClose.length > 0,
          isTerminalVisible: terminalsAfterClose.length > 0,
        });

        console.log('Closed terminal:', id, 'New active:', newActiveId);
      },

      switchToTerminal: (id) => {
        const store = get();
        const terminal = store.terminals.find((t) => t.id === id);

        if (!terminal) {
          console.warn('Terminal not found:', id);
          return;
        }

        set({
          terminals: store.terminals.map((t) => ({
            ...t,
            isActive: t.id === id,
          })),
          activeTerminalId: id,
          isTerminalVisible: true,
        });

        console.log('Switched to terminal:', terminal.title);
      },

      renameTerminal: (id, title) => {
        set((state) => ({
          terminals: state.terminals.map((t) => (t.id === id ? { ...t, title } : t)),
        }));
      },

      // Visibility controls
      showTerminals: () => {
        const store = get();

        // If no terminals exist, create one
        if (store.terminals.length === 0) {
          store.createTerminal();
          return;
        }

        set({
          isButtonBarVisible: true,
          isTerminalVisible: true,
        });
      },

      hideTerminals: () => {
        set({
          isButtonBarVisible: false,
          isTerminalVisible: false,
        });
      },

      toggleTerminals: () => {
        const store = get();

        if (store.isTerminalVisible) {
          // If terminal is visible, hide everything
          store.hideTerminals();
        } else if (store.isButtonBarVisible) {
          // If only button bar is visible, show terminal
          store.showTerminals();
        } else {
          // If everything is hidden, show terminals
          store.showTerminals();
        }
      },

      showButtonBarOnly: () => {
        set({
          isButtonBarVisible: true,
          isTerminalVisible: false,
        });
      },

      // Utility actions
      getTerminal: (id) => {
        return get().terminals.find((t) => t.id === id);
      },

      getNextTerminal: () => {
        const store = get();
        const currentIndex = store.terminals.findIndex((t) => t.id === store.activeTerminalId);

        if (currentIndex === -1 || store.terminals.length <= 1) {
          return undefined;
        }

        const nextIndex = (currentIndex + 1) % store.terminals.length;
        return store.terminals[nextIndex];
      },

      setLoading: (key, loading) => {
        set((state) => ({
          loading: {
            ...state.loading,
            [key]: loading,
          },
        }));
      },

      setError: (error) => set({ error }),

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'terminal-manager-store',
      partialize: (state) => ({
        // Only persist terminal list and active ID, not UI state
        terminals: state.terminals,
        activeTerminalId: state.activeTerminalId,
      }),
    }
  )
);

// Selector hooks for performance optimization
export const useTerminals = () => useTerminalManagerStore((state) => state.terminals);
export const useActiveTerminalId = () => useTerminalManagerStore((state) => state.activeTerminalId);
export const useActiveTerminal = () =>
  useTerminalManagerStore((state) => state.terminals.find((t) => t.id === state.activeTerminalId));
export const useTerminalVisibility = () =>
  useTerminalManagerStore(
    (state) => ({
      isButtonBarVisible: state.isButtonBarVisible,
      isTerminalVisible: state.isTerminalVisible,
    }),
    (a, b) =>
      a.isButtonBarVisible === b.isButtonBarVisible && a.isTerminalVisible === b.isTerminalVisible
  );
export const useTerminalLoading = () => useTerminalManagerStore((state) => state.loading);
export const useTerminalError = () => useTerminalManagerStore((state) => state.error);
