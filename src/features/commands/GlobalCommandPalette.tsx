'use client';

import React, { useState, useEffect } from 'react';
import { CommandPalette } from '@/components/command-palette/CommandPalette';
import { useCommandModules } from '@/components/command-palette';
import { exampleModule } from './modules/ExampleModule';
// import { taskMasterModule } from './modules/TaskMasterModule';
import { claudeModule } from './modules/ClaudeModule';

/**
 * Global Command Palette component that manages its own open state
 * and listens for the global keyboard shortcut (Cmd+K / Ctrl+K)
 */
export function GlobalCommandPalette() {
   const [open, setOpen] = useState(false);
   const [modulesLoaded, setModulesLoaded] = useState(false);
   const { loadModule, isModuleLoaded, getAllCommands } = useCommandModules();

   // Load modules on mount
   useEffect(() => {
      const loadModules = async () => {
         try {
            console.log('Loading command modules...');
            if (!isModuleLoaded('example')) {
               await loadModule(exampleModule);
               console.log('Example module loaded');
            }
            // if (!isModuleLoaded('taskmaster')) {
            //    await loadModule(taskMasterModule);
            //    console.log('TaskMaster module loaded');
            // }
            if (!isModuleLoaded('claude')) {
               await loadModule(claudeModule);
               console.log('Claude module loaded');
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
            setOpen(true);
         }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
   }, []);

   // Only render CommandPalette when modules are loaded
   if (!modulesLoaded) {
      return null;
   }

   return <CommandPalette open={open} onOpenChange={setOpen} />;
}
