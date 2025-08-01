'use client';

import React, { type ReactNode } from 'react';
import { CommandContextProvider } from './CommandContextProvider';
import { CommandModuleProvider } from './CommandModuleProvider';
import type { CommandModule, CommandContext } from '../types';

interface CommandPaletteProviderProps {
   children: ReactNode;
   modules?: CommandModule[];
   initialContext?: Partial<CommandContext>;
}

export function CommandPaletteProvider({
   children,
   modules = [],
   initialContext,
}: CommandPaletteProviderProps) {
   return (
      <CommandContextProvider initialContext={initialContext}>
         <CommandModuleProvider initialModules={modules}>{children}</CommandModuleProvider>
      </CommandContextProvider>
   );
}
