'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import type { CommandModule, Command } from '../types';
import {
   HomeIcon,
   FolderIcon,
   UsersIcon,
   SettingsIcon,
   TerminalIcon,
   UserIcon,
   CalendarIcon,
} from 'lucide-react';
import { toast } from 'sonner';

export function useNavigationModule(): CommandModule {
   const router = useRouter();

   const commands: Command[] = useMemo(
      () => [
         {
            id: 'nav:home',
            title: 'Go to Home',
            description: 'Navigate to the main dashboard',
            icon: <HomeIcon className="w-4 h-4" />,
            keywords: ['home', 'dashboard', 'main'],
            group: '🧭 Navigation',
            shortcut: ['⌘', '1'],
            execute: async () => {
               router.push('/');
               toast.success('Navigated to Home');
            },
         },

         {
            id: 'nav:indie-dashboard',
            title: 'Go to Indie Dashboard',
            description: 'Navigate to the indie developer dashboard',
            icon: <HomeIcon className="w-4 h-4" />,
            keywords: ['indie', 'dashboard', 'individual'],
            group: '🧭 Navigation',
            shortcut: ['⌘', '2'],
            execute: async () => {
               router.push('/indie/dashboard');
               toast.success('Navigated to Indie Dashboard');
            },
         },

         {
            id: 'nav:tasks',
            title: 'Go to Tasks',
            description: 'Navigate to the tasks view',
            icon: <CalendarIcon className="w-4 h-4" />,
            keywords: ['tasks', 'todo', 'work', 'issues'],
            group: '🧭 Navigation',
            shortcut: ['⌘', 'T'],
            execute: async () => {
               router.push('/indie/tasks');
               toast.success('Navigated to Tasks');
            },
         },

         {
            id: 'nav:projects',
            title: 'Go to Projects',
            description: 'Navigate to the projects view',
            icon: <FolderIcon className="w-4 h-4" />,
            keywords: ['projects', 'work', 'portfolio'],
            group: '🧭 Navigation',
            shortcut: ['⌘', 'P'],
            execute: async () => {
               router.push('/indie/projects');
               toast.success('Navigated to Projects');
            },
         },

         {
            id: 'nav:teams',
            title: 'Go to Teams',
            description: 'Navigate to the teams view',
            icon: <UsersIcon className="w-4 h-4" />,
            keywords: ['teams', 'groups', 'collaboration'],
            group: '🧭 Navigation',
            shortcut: ['⌘', 'G'],
            execute: async () => {
               router.push('/teams');
               toast.success('Navigated to Teams');
            },
         },

         {
            id: 'nav:members',
            title: 'Go to Members',
            description: 'Navigate to the members view',
            icon: <UserIcon className="w-4 h-4" />,
            keywords: ['members', 'users', 'people'],
            group: '🧭 Navigation',
            shortcut: ['⌘', 'M'],
            execute: async () => {
               router.push('/members');
               toast.success('Navigated to Members');
            },
         },

         {
            id: 'nav:settings',
            title: 'Go to Settings',
            description: 'Navigate to the application settings',
            icon: <SettingsIcon className="w-4 h-4" />,
            keywords: ['settings', 'config', 'preferences'],
            group: '🧭 Navigation',
            shortcut: ['⌘', ','],
            execute: async () => {
               router.push('/indie/settings');
               toast.success('Navigated to Settings');
            },
         },

         {
            id: 'nav:terminal',
            title: 'Go to Terminal',
            description: 'Navigate to the integrated terminal',
            icon: <TerminalIcon className="w-4 h-4" />,
            keywords: ['terminal', 'cli', 'command', 'shell'],
            group: '🧭 Navigation',
            shortcut: ['⌘', 'J'],
            execute: async () => {
               router.push('/indie/terminal');
               toast.success('Navigated to Terminal');
            },
         },
      ],
      [router]
   );

   return useMemo(
      () => ({
         id: 'navigation',
         name: 'Navigation',
         description: 'Navigate between different parts of the application',
         icon: <HomeIcon className="w-4 h-4" />,
         commands,
         isEnabled: () => true,
      }),
      [commands]
   );
}
