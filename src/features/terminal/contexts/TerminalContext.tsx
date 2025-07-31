'use client';

import React, { createContext, useContext, useCallback, useState, useRef } from 'react';
import { useTerminal } from '../hooks/useTerminal';
import {
   UseTerminalReturn,
   TerminalConnectionStatus,
   MultiTerminalInstance,
   MultiTerminalContextValue,
} from '../types/terminal';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';

// Legacy single terminal context for backward compatibility
interface LegacyTerminalContextValue extends UseTerminalReturn {
   isVisible: boolean;
   showTerminal: () => void;
   hideTerminal: () => void;
   toggleTerminal: () => void;
   terminalRef: React.RefObject<HTMLDivElement | null>;
}

// Enhanced context that includes both legacy and multi-terminal support
interface EnhancedTerminalContextValue extends LegacyTerminalContextValue {
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

const TerminalContext = createContext<EnhancedTerminalContextValue | null>(null);

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
   const [isVisible, setIsVisible] = useState(false);
   const [terminals] = useState<Map<string, MultiTerminalInstance>>(new Map());
   const terminalRef = useRef<HTMLDivElement | null>(null);

   // Multi-terminal store
   const multiTerminalStore = useMultiTerminalStore();

   const handleConnect = useCallback(() => {
      console.log('Persistent terminal connected');
   }, []);

   const handleDisconnect = useCallback(() => {
      console.log('Persistent terminal disconnected');
   }, []);

   const handleError = useCallback((error: string) => {
      console.error('Persistent terminal error:', error);
   }, []);

   // Legacy single terminal for backward compatibility
   const terminal = useTerminal({
      theme,
      fontSize,
      fontFamily,
      onConnect: handleConnect,
      onDisconnect: handleDisconnect,
      onError: handleError,
   });

   // Legacy terminal visibility controls
   const showTerminal = useCallback(() => {
      setIsVisible(true);
      // Auto-connect if not already connected
      if (terminal.connectionStatus === TerminalConnectionStatus.DISCONNECTED) {
         setTimeout(() => {
            terminal.connect();
         }, 100);
      }
   }, [terminal]);

   const hideTerminal = useCallback(() => {
      setIsVisible(false);
   }, []);

   const toggleTerminal = useCallback(() => {
      if (isVisible) {
         hideTerminal();
      } else {
         showTerminal();
      }
   }, [isVisible, hideTerminal, showTerminal]);

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

   const contextValue: EnhancedTerminalContextValue = {
      // Legacy single terminal support
      ...terminal,
      isVisible,
      showTerminal,
      hideTerminal,
      toggleTerminal,
      terminalRef,

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

export function useTerminalContext(): EnhancedTerminalContextValue {
   const context = useContext(TerminalContext);
   if (!context) {
      throw new Error('useTerminalContext must be used within a TerminalProvider');
   }
   return context;
}

export default TerminalProvider;
