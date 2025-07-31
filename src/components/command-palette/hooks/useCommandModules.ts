'use client';

import { useMemo } from 'react';
import type { CommandModule } from '../types';
import { useTaskMasterModule } from '../modules/TaskMasterModule';
import { useNavigationModule } from '../modules/NavigationModule';
import { useThemeModule } from '../modules/ThemeModule';

export function useCommandModules(): CommandModule[] {
   const taskMasterModule = useTaskMasterModule();
   const navigationModule = useNavigationModule();
   const themeModule = useThemeModule();

   return useMemo(
      () => [taskMasterModule, navigationModule, themeModule].filter(Boolean),
      [taskMasterModule, navigationModule, themeModule]
   );
}
