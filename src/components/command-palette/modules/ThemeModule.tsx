'use client';

import { useMemo } from 'react';
import { useTheme } from 'next-themes';
import type { CommandModule, Command } from '../types';
import { SunIcon, MoonIcon, MonitorIcon, PaletteIcon } from 'lucide-react';
import { toast } from 'sonner';

export function useThemeModule(): CommandModule {
   const { theme, setTheme } = useTheme();

   const commands: Command[] = useMemo(
      () => [
         {
            id: 'theme:light',
            title: 'Switch to Light Theme',
            description: 'Change the application theme to light mode',
            icon: <SunIcon className="w-4 h-4" />,
            keywords: ['light', 'bright', 'day', 'white'],
            group: '🎨 Theme',
            disabled: theme === 'light',
            execute: async () => {
               setTheme('light');
               toast.success('Switched to light theme');
            },
         },

         {
            id: 'theme:dark',
            title: 'Switch to Dark Theme',
            description: 'Change the application theme to dark mode',
            icon: <MoonIcon className="w-4 h-4" />,
            keywords: ['dark', 'night', 'black', 'dim'],
            group: '🎨 Theme',
            disabled: theme === 'dark',
            execute: async () => {
               setTheme('dark');
               toast.success('Switched to dark theme');
            },
         },

         {
            id: 'theme:system',
            title: 'Use System Theme',
            description: 'Follow the system theme preference',
            icon: <MonitorIcon className="w-4 h-4" />,
            keywords: ['system', 'auto', 'follow', 'detect'],
            group: '🎨 Theme',
            disabled: theme === 'system',
            execute: async () => {
               setTheme('system');
               toast.success('Following system theme');
            },
         },

         {
            id: 'theme:toggle',
            title: 'Toggle Theme',
            description: 'Switch between light and dark themes',
            icon: <PaletteIcon className="w-4 h-4" />,
            keywords: ['toggle', 'switch', 'alternate'],
            group: '🎨 Theme',
            shortcut: ['⌘', 'D'],
            execute: async () => {
               const newTheme = theme === 'dark' ? 'light' : 'dark';
               setTheme(newTheme);
               toast.success(`Switched to ${newTheme} theme`);
            },
         },
      ],
      [theme, setTheme]
   );

   return useMemo(
      () => ({
         id: 'theme',
         name: 'Theme',
         description: 'Change application theme and appearance',
         icon: <PaletteIcon className="w-4 h-4" />,
         commands,
         isEnabled: () => true,
      }),
      [commands]
   );
}
