import {
   Home,
   CheckSquare,
   Settings,
   BarChart3,
   Calendar,
   Clock,
   Terminal,
   Target,
   type LucideIcon,
} from 'lucide-react';

export interface IndieNavItem {
   name: string;
   url: string;
   icon: LucideIcon;
   description?: string;
   badge?: number | string;
}

export interface IndieNavSection {
   label: string;
   items: IndieNavItem[];
}

export const indieDashboardItems: IndieNavItem[] = [
   {
      name: 'Dashboard',
      url: '/indie',
      icon: Home,
      description: 'Project overview and progress',
   },
   {
      name: 'Analytics',
      url: '/indie/analytics',
      icon: BarChart3,
      description: 'Task completion and productivity insights',
   },
];

export const indieTaskItems: IndieNavItem[] = [
   {
      name: 'Current Tasks',
      url: '/indie/current-tasks',
      icon: Target,
      description: 'Tasks for the current tag only',
   },
   {
      name: 'All Tasks',
      url: '/indie/tasks',
      icon: CheckSquare,
      description: 'View and manage all tasks',
   }
];

export const indieDevItems: IndieNavItem[] = [
   {
      name: 'Terminal',
      url: '/indie/terminal',
      icon: Terminal,
      description: 'Interactive terminal for commands and Task Master CLI',
   },
];

export const indieSettingsItems: IndieNavItem[] = [
   {
      name: 'Settings',
      url: '/indie/settings',
      icon: Settings,
      description: 'Individual mode preferences',
   },
];

export const indieNavigationSections: IndieNavSection[] = [
   {
      label: 'Overview',
      items: indieDashboardItems,
   },
   {
      label: 'Tasks',
      items: indieTaskItems,
   },
   {
      label: 'Development',
      items: indieDevItems,
   },
   {
      label: 'Settings',
      items: indieSettingsItems,
   },
];

// Flattened navigation items for easier access
export const allIndieNavItems: IndieNavItem[] = [
   ...indieDashboardItems,
   ...indieTaskItems,
   ...indieDevItems,
   ...indieSettingsItems,
];
