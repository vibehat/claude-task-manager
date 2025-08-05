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

export interface WorkspaceNavItem {
   name: string;
   url: string;
   icon: LucideIcon;
   description?: string;
   badge?: number | string;
}

export interface WorkspaceNavSection {
   label: string;
   items: WorkspaceNavItem[];
}

export const workspaceDashboardItems: WorkspaceNavItem[] = [
   {
      name: 'Dashboard',
      url: '/workspace',
      icon: Home,
      description: 'Project overview and progress',
   },
   {
      name: 'Analytics',
      url: '/workspace/analytics',
      icon: BarChart3,
      description: 'Task completion and productivity insights',
   },
];

export const workspaceTaskItems: WorkspaceNavItem[] = [
   {
      name: 'Current Tasks',
      url: '/workspace/current-tasks',
      icon: Target,
      description: 'Tasks for the current tag only',
   },
   {
      name: 'All Tasks',
      url: '/workspace/tasks',
      icon: CheckSquare,
      description: 'View and manage all tasks',
   }
];

export const workspaceDevItems: WorkspaceNavItem[] = [
   {
      name: 'Terminal',
      url: '/workspace/terminal',
      icon: Terminal,
      description: 'Interactive terminal for commands and Task Master CLI',
   },
];

export const workspaceSettingsItems: WorkspaceNavItem[] = [
   {
      name: 'Settings',
      url: '/workspace/settings',
      icon: Settings,
      description: 'Workspace preferences',
   },
];

export const workspaceNavigationSections: WorkspaceNavSection[] = [
   {
      label: 'Overview',
      items: workspaceDashboardItems,
   },
   {
      label: 'Tasks',
      items: workspaceTaskItems,
   },
   {
      label: 'Development',
      items: workspaceDevItems,
   },
   {
      label: 'Settings',
      items: workspaceSettingsItems,
   },
];

// Flattened navigation items for easier access
export const allWorkspaceNavItems: WorkspaceNavItem[] = [
   ...workspaceDashboardItems,
   ...workspaceTaskItems,
   ...workspaceDevItems,
   ...workspaceSettingsItems,
];
