'use client';

import React, { createContext, useContext, useCallback, useState } from 'react';
import type { MultiTerminalInstance } from '../types/terminal';

import { useMultiTerminalStore } from '@/store/multiTerminalStore';

// Multi-terminal context
interface TerminalContextValue {
  // Multi-terminal functionality
  terminals: Map<string, MultiTerminalInstance>;
  activeTerminalId: string | null;
  createTerminal: (title?: string) => string;
  closeTerminal: (id: string) => void;
  setActiveTerminal: (id: string) => void;
  getTerminal: (id: string) => MultiTerminalInstance | undefined;
  minimizeTerminal: (id: string) => void;
  maximizeTerminal: (id: string) => void;
  restoreTerminal: (id: string) => void;
  toggleMinimize: (id: string) => void;
  toggleMaximize: (id: string) => void;
  updateTerminalPosition: (id: string, x: number, y: number) => void;
  updateTerminalSize: (id: string, width: number, height: number) => void;
  bringTerminalToFront: (id: string) => void;
  updateTerminalTitle: (id: string, title: string) => void;
}

const TerminalContext = createContext<TerminalContextValue | null>(null);

interface TerminalProviderProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark' | 'auto';
  fontSize?: number;
  fontFamily?: string;
}

export function TerminalProvider({
  children,
  theme = 'auto',
  fontSize = 14,
  fontFamily = 'Monaco, Menlo, "Ubuntu Mono", monospace',
}: TerminalProviderProps) {
  const [terminals] = useState<Map<string, MultiTerminalInstance>>(new Map());

  // Multi-terminal store
  const multiTerminalStore = useMultiTerminalStore();

  // Multi-terminal functionality - create new terminal instance
  const createTerminal = useCallback(
    (title?: string) => {
      const terminalId = multiTerminalStore.createTerminal(title);

      // Note: Terminal instances will be created by individual PersistentTerminal components
      // This just creates the entry in the store
      return terminalId;
    },
    [multiTerminalStore]
  );

  // Multi-terminal management functions
  const closeTerminal = useCallback(
    (id: string) => {
      terminals.delete(id);
      multiTerminalStore.closeTerminal(id);
    },
    [terminals, multiTerminalStore]
  );

  const setActiveTerminal = useCallback(
    (id: string) => {
      multiTerminalStore.setActiveTerminal(id);
    },
    [multiTerminalStore]
  );

  const getTerminal = useCallback(
    (id: string) => {
      return terminals.get(id);
    },
    [terminals]
  );

  const contextValue: TerminalContextValue = {
    // Multi-terminal support
    terminals,
    activeTerminalId: multiTerminalStore.activeTerminalId,
    createTerminal,
    closeTerminal,
    setActiveTerminal,
    getTerminal,
    minimizeTerminal: multiTerminalStore.minimizeTerminal,
    maximizeTerminal: multiTerminalStore.maximizeTerminal,
    restoreTerminal: multiTerminalStore.restoreTerminal,
    toggleMinimize: multiTerminalStore.toggleMinimize,
    toggleMaximize: multiTerminalStore.toggleMaximize,
    updateTerminalPosition: multiTerminalStore.updateTerminalPosition,
    updateTerminalSize: multiTerminalStore.updateTerminalSize,
    bringTerminalToFront: multiTerminalStore.bringTerminalToFront,
    updateTerminalTitle: multiTerminalStore.updateTerminalTitle,
  };

  return <TerminalContext.Provider value={contextValue}>{children}</TerminalContext.Provider>;
}

export function useTerminalContext(): TerminalContextValue {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminalContext must be used within a TerminalProvider');
  }
  return context;
}

export default TerminalProvider;
