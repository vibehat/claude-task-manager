'use client';

import React, { useState, useEffect } from 'react';
import { CommandPalette } from '@/components/command-palette/CommandPalette';
import { useCommandModules } from '@/components/command-palette';
import { claudeModule } from './modules/ClaudeModule';
import { taskSearchModule } from './modules/TaskSearchModule';
import { useCommandPaletteStore } from '@/store/commandPaletteStore';

/**
 * Global Command Palette component that manages its own open state
 * and listens for the global keyboard shortcut (Cmd+K / Ctrl+K)
 */
export function GlobalCommandPalette() {
  const { isOpen, initialState, openCommandPalette, closeCommandPalette } =
    useCommandPaletteStore();
  const [modulesLoaded, setModulesLoaded] = useState(false);
  const { loadModule, isModuleLoaded, getAllCommands } = useCommandModules();

  const handleOpenChange = (open: boolean) => {
    if (open) {
      openCommandPalette();
    } else {
      closeCommandPalette();
    }
  };

  // Load modules on mount
  useEffect(() => {
    const loadModules = async () => {
      try {
        console.log('Loading command modules...');
        if (!isModuleLoaded('claude')) {
          await loadModule(claudeModule);
          console.log('Claude module loaded');
        }
        if (!isModuleLoaded('task-search')) {
          await loadModule(taskSearchModule);
          console.log('Task Search module loaded');
        }
        setModulesLoaded(true);
        console.log('All modules loaded, available commands:', getAllCommands().length);
      } catch (error) {
        console.error('Failed to load command modules:', error);
      }
    };

    loadModules();
  }, [loadModule, isModuleLoaded, getAllCommands]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        useCommandPaletteStore.getState().openCommandPalette();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Only render CommandPalette when modules are loaded
  if (!modulesLoaded) {
    return null;
  }

  return (
    <CommandPalette open={isOpen} onOpenChange={handleOpenChange} initialState={initialState} />
  );
}
