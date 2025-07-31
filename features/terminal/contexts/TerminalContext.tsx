'use client';

import React, { createContext, useContext, useCallback, useState, useRef } from 'react';
import { useTerminal } from '../hooks/useTerminal';
import { UseTerminalReturn, TerminalConnectionStatus } from '../types/terminal';

interface TerminalContextValue extends UseTerminalReturn {
   isVisible: boolean;
   showTerminal: () => void;
   hideTerminal: () => void;
   toggleTerminal: () => void;
   terminalRef: React.RefObject<HTMLDivElement | null>;
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
   const [isVisible, setIsVisible] = useState(false);
   const terminalRef = useRef<HTMLDivElement | null>(null);

   const handleConnect = useCallback(() => {
      console.log('Persistent terminal connected');
   }, []);

   const handleDisconnect = useCallback(() => {
      console.log('Persistent terminal disconnected');
   }, []);

   const handleError = useCallback((error: string) => {
      console.error('Persistent terminal error:', error);
   }, []);

   const terminal = useTerminal({
      theme,
      fontSize,
      fontFamily,
      onConnect: handleConnect,
      onDisconnect: handleDisconnect,
      onError: handleError,
   });

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

   const contextValue: TerminalContextValue = {
      ...terminal,
      isVisible,
      showTerminal,
      hideTerminal,
      toggleTerminal,
      terminalRef,
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
