import {
   Target,
   Clock,
   CheckSquare,
   PlayCircle,
   CheckCircle,
   FileText,
   PlusCircle,
   BarChart3,
   Calendar,
   MessageSquare,
   Settings as SettingsIcon,
   Wrench,
   User,
   Bot,
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

// 🎯 Right Now
export const rightNowItems: WorkspaceNavItem[] = [
   {
      name: 'Working On',
      url: '/workspace/working-on',
      icon: Target,
      description: 'Your current active task',
   },
   {
      name: 'Up Next',
      url: '/workspace/up-next',
      icon: Clock,
      description: '2-3 tasks ready when you finish current one',
   },
];

// 📝 My Work
export const myWorkItems: WorkspaceNavItem[] = [
   {
      name: 'To Do',
      url: '/workspace/to-do',
      icon: CheckSquare,
      description: 'Tasks waiting for you, sorted by priority',
   },
   {
      name: 'In Progress',
      url: '/workspace/in-progress',
      icon: PlayCircle,
      description: 'Work you are actively developing',
   },
   {
      name: 'Done',
      url: '/workspace/done',
      icon: CheckCircle,
      description: 'Completed work that gives you accomplishment',
   },
];

// 📚 Notes & Docs
export const notesAndDocsItems: WorkspaceNavItem[] = [
   {
      name: 'Browse Files',
      url: '/workspace/browse-files',
      icon: FileText,
      description: 'Simple navigation through your markdown files',
   },
   {
      name: 'Create New',
      url: '/workspace/create-new',
      icon: PlusCircle,
      description: 'Quick document creation for capturing thoughts',
   },
];

// 🔍 Project Overview
export const projectOverviewItems: WorkspaceNavItem[] = [
   {
      name: 'Big Picture',
      url: '/workspace/big-picture',
      icon: BarChart3,
      description: 'High-level project status and priority management',
   },
   {
      name: 'Planning',
      url: '/workspace/planning',
      icon: Calendar,
      description: 'Timeline and milestone tracking for deadlines',
   },
];

// 🤖 AI Helper
export const aiHelperItems: WorkspaceNavItem[] = [
   {
      name: 'Agents',
      url: '/workspace/agents',
      icon: Bot,
      description: 'Manage and configure AI agents for specialized tasks',
   },
   {
      name: 'Chat History',
      url: '/workspace/chat-history',
      icon: MessageSquare,
      description: 'Access to your previous conversations and context',
   },
   {
      name: 'Assistant Settings',
      url: '/workspace/assistant-settings',
      icon: SettingsIcon,
      description: 'Simple configuration for how AI helps you',
   },
];

// ⚙️ Preferences
export const preferencesItems: WorkspaceNavItem[] = [
   {
      name: 'Project Setup',
      url: '/workspace/project-setup',
      icon: Wrench,
      description: 'Basic project configuration and integrations',
   },
   {
      name: 'My Settings',
      url: '/workspace/my-settings',
      icon: User,
      description: 'Personal preferences for interface behavior',
   },
];

export const workspaceNavigationSections: WorkspaceNavSection[] = [
   {
      label: '🎯 Right Now',
      items: rightNowItems,
   },
   {
      label: '📝 My Work',
      items: myWorkItems,
   },
   {
      label: '📚 Notes & Docs',
      items: notesAndDocsItems,
   },
   {
      label: '🔍 Project Overview',
      items: projectOverviewItems,
   },
   {
      label: '🤖 AI Helper',
      items: aiHelperItems,
   },
   {
      label: '⚙️ Preferences',
      items: preferencesItems,
   },
];

// Flattened navigation items for easier access
export const allWorkspaceNavItems: WorkspaceNavItem[] = [
   ...rightNowItems,
   ...myWorkItems,
   ...notesAndDocsItems,
   ...projectOverviewItems,
   ...aiHelperItems,
   ...preferencesItems,
];
