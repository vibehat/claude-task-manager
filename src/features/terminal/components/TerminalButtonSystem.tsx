'use client';

import React, { useEffect, useCallback } from 'react';
import {
  useTerminalManagerStore,
  useTerminalVisibility,
  useTerminals,
} from '../stores/terminalManagerStore';
import { TerminalWindow } from './TerminalWindow';
import { TerminalButtonBar } from './TerminalButtonBar';
import { TerminalFloatingButton } from './TerminalFloatingButton';

interface TerminalButtonSystemProps {
  className?: string;
}

export function TerminalButtonSystem({ className }: TerminalButtonSystemProps) {
  const terminals = useTerminals();
  const { isButtonBarVisible, isTerminalVisible } = useTerminalVisibility();
  const { createTerminal, closeTerminal, switchToTerminal, getNextTerminal } =
    useTerminalManagerStore();

  // Keyboard shortcuts implementation - using store getters to avoid dependency loops
  const handleKeyboardShortcuts = useCallback((event: KeyboardEvent) => {
    const isCtrlOrCmd = event.ctrlKey || event.metaKey;

    if (!isCtrlOrCmd) return;

    const store = useTerminalManagerStore.getState();
    const currentTerminals = store.terminals;
    const currentIsTerminalVisible = store.isTerminalVisible;

    switch (event.key) {
      case 't':
        event.preventDefault();
        store.createTerminal();
        break;

      case 'w':
        if (currentTerminals.length > 0) {
          event.preventDefault();
          // Close the active terminal
          const activeTerminal = currentTerminals.find((t) => t.isActive);
          if (activeTerminal) {
            store.closeTerminal(activeTerminal.id);
          }
        }
        break;

      case 'Tab':
        if (currentTerminals.length > 1) {
          event.preventDefault();
          const nextTerminal = store.getNextTerminal();
          if (nextTerminal) {
            store.switchToTerminal(nextTerminal.id);
          }
        }
        break;

      // Terminal number shortcuts (⌘1, ⌘2, etc.)
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        const terminalIndex = parseInt(event.key) - 1;
        if (currentTerminals[terminalIndex]) {
          event.preventDefault();
          store.switchToTerminal(currentTerminals[terminalIndex].id);
        }
        break;

      case 'Escape':
        // Hide terminal but keep button bar visible if terminals exist
        if (currentIsTerminalVisible) {
          event.preventDefault();
          store.showButtonBarOnly();
        }
        break;
    }
  }, []); // Empty dependency array since we're using store.getState()

  // Set up keyboard shortcuts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcuts);

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcuts);
    };
  }, [handleKeyboardShortcuts]);

  // Determine which state we're in based on the wireframe specification
  const getSystemState = () => {
    if (terminals.length === 0 && !isButtonBarVisible) {
      return 'closed'; // State 1: Closed - Minimal floating button
    }

    if (isTerminalVisible && isButtonBarVisible) {
      return 'open'; // State 2: Open - Single active terminal + button bar
    }

    if (!isTerminalVisible && isButtonBarVisible) {
      return 'button-only'; // State 3: Button-only - No active terminal
    }

    // Default to closed if state is unclear
    return 'closed';
  };

  const systemState = getSystemState();

  // Remove excessive logging that was causing render loops
  // console.log('Terminal system state:', systemState);

  return (
    <div className={className}>
      {/* State 1: Closed State - Minimal Floating Button */}
      {systemState === 'closed' && <TerminalFloatingButton />}

      {/* State 2: Open State - Single Active Terminal + Button Bar */}
      {systemState === 'open' && (
        <>
          <TerminalWindow />
          <TerminalButtonBar />
        </>
      )}

      {/* State 3: Button-Only State - No Active Terminal */}
      {systemState === 'button-only' && <TerminalButtonBar />}
    </div>
  );
}

export default TerminalButtonSystem;
