'use client';

import { useMemo } from 'react';
import type { CommandModule } from '../types';
import { useTaskMasterModule } from '../modules/TaskMasterModule';
import { useNavigationModule } from '../modules/NavigationModule';
import { useThemeModule } from '../modules/ThemeModule';
import { useTerminalModule } from '../modules/TerminalModule';

export function useCommandModules(): CommandModule[] {
   const taskMasterModule = useTaskMasterModule();
   const navigationModule = useNavigationModule();
   const themeModule = useThemeModule();
   const terminalModule = useTerminalModule();

   return useMemo(
      () => [taskMasterModule, navigationModule, themeModule, terminalModule].filter(Boolean),
      [taskMasterModule, navigationModule, themeModule, terminalModule]
   );
}
