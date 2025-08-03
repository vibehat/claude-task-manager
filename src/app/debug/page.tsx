import Link from 'next/link';
import {
   Terminal,
   Wifi,
   WifiOff,
   GitBranch,
   Layers,
   Search,
   Edit,
   Clipboard,
   Monitor,
   Code,
   Wrench,
   Palette,
   Settings,
   Play,
   Bug,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DebugPageConfig {
   href: string;
   title: string;
   description: string;
   icon: React.ComponentType<{ className?: string }>;
   category: 'debug' | 'demo' | 'testing';
   status?: 'stable' | 'beta' | 'experimental' | 'new';
   tags?: string[];
}

const debugPages: DebugPageConfig[] = [
   // Debug Tools
   {
      href: '/debug/terminal-debug',
      title: 'Terminal Debug',
      description: 'Real system terminal with command launching and xterm.js integration',
      icon: Terminal,
      category: 'debug',
      status: 'stable',
      tags: ['terminal', 'xterm', 'websocket'],
   },
   {
      href: '/debug/simple-terminal',
      title: 'Simple Terminal (Debug)',
      description:
         'Simplified terminal for debugging WebSocket and PTY issues with detailed logging',
      icon: Bug,
      category: 'debug',
      status: 'new',
      tags: ['terminal', 'debug', 'logging'],
   },
   {
      href: '/debug/terminal-test',
      title: 'Terminal Persistence Test',
      description: 'Multi-terminal persistence test with store management debugging',
      icon: GitBranch,
      category: 'testing',
      status: 'stable',
      tags: ['terminal', 'persistence', 'store'],
   },
   {
      href: '/debug/websocket-test',
      title: 'WebSocket Basic Test',
      description: 'Basic WebSocket connection testing and debugging',
      icon: Wifi,
      category: 'testing',
      status: 'stable',
      tags: ['websocket', 'connection'],
   },
   {
      href: '/debug/websocket-integrated',
      title: 'WebSocket Advanced',
      description: 'Integrated WebSocket examples with advanced connection handling',
      icon: WifiOff,
      category: 'demo',
      status: 'stable',
      tags: ['websocket', 'integration'],
   },

   // Component Demos
   {
      href: '/debug/terminal-demo',
      title: 'Terminal Manager',
      description: 'Multi-terminal manager with persistent sessions, drag-and-drop interface',
      icon: Layers,
      category: 'demo',
      status: 'stable',
      tags: ['terminal', 'manager', 'ui'],
   },
   {
      href: '/debug/command-palette',
      title: 'Command Palette',
      description:
         'Context-aware command interface with multi-step flows and initial state support',
      icon: Search,
      category: 'demo',
      status: 'new',
      tags: ['commands', 'search', 'ui', 'context'],
   },
   {
      href: '/debug/taskmaster',
      title: 'TaskMaster Dashboard',
      description: 'Task management dashboard with real-time updates and command execution',
      icon: Clipboard,
      category: 'demo',
      status: 'beta',
      tags: ['tasks', 'dashboard', 'management'],
   },
   {
      href: '/debug/markdown-editor',
      title: 'Markdown Editor',
      description: 'Rich markdown editor with live preview and export features',
      icon: Edit,
      category: 'demo',
      status: 'stable',
      tags: ['markdown', 'editor', 'preview'],
   },
];

const categoryConfig = {
   debug: {
      title: 'Debug Tools',
      description: 'Development utilities and debugging interfaces',
      icon: Bug,
      color: 'bg-red-50 border-red-200 hover:border-red-300 dark:bg-red-950 dark:border-red-800',
   },
   demo: {
      title: 'Component Demos',
      description: 'Interactive demonstrations of UI components and features',
      icon: Monitor,
      color: 'bg-blue-50 border-blue-200 hover:border-blue-300 dark:bg-blue-950 dark:border-blue-800',
   },
   testing: {
      title: 'Testing Tools',
      description: 'Tools for testing functionality and performance',
      icon: Wrench,
      color: 'bg-green-50 border-green-200 hover:border-green-300 dark:bg-green-950 dark:border-green-800',
   },
};

const statusColors = {
   stable: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
   beta: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
   experimental: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
   new: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
};

export default function DebugIndexPage() {
   const categorizedPages = Object.entries(categoryConfig).map(([key, config]) => ({
      ...config,
      key,
      pages: debugPages.filter((page) => page.category === key),
   }));

   return (
      <div className="container mx-auto py-10 max-w-6xl">
         <div className="mb-8">
            <div className="flex items-center justify-between">
               <div>
                  <h1 className="text-4xl font-bold mb-3">Debug & Development Tools</h1>
                  <p className="text-lg text-muted-foreground">
                     Comprehensive suite of development utilities, component demonstrations, and
                     debugging interfaces
                  </p>
               </div>
               <Link href="/debug/dashboard">
                  <Button size="lg" className="gap-2">
                     <Monitor className="h-5 w-5" />
                     Open Dashboard
                  </Button>
               </Link>
            </div>
         </div>

         <div className="space-y-12">
            {categorizedPages.map(
               ({ key, title, description, icon: CategoryIcon, color, pages }) => (
                  <div key={key}>
                     <div className="flex items-center gap-3 mb-6">
                        <CategoryIcon className="h-7 w-7 text-primary" />
                        <div>
                           <h2 className="text-2xl font-semibold">{title}</h2>
                           <p className="text-muted-foreground">{description}</p>
                        </div>
                     </div>

                     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {pages.map((page) => {
                           const PageIcon = page.icon;
                           return (
                              <Link
                                 key={page.href}
                                 href={page.href}
                                 className={`block p-6 border rounded-lg transition-all duration-200 hover:shadow-md ${color}`}
                              >
                                 <div className="flex items-start gap-4">
                                    <PageIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div className="flex-grow min-w-0">
                                       <div className="flex items-center gap-2 mb-2">
                                          <h3 className="text-lg font-semibold truncate">
                                             {page.title}
                                          </h3>
                                          {page.status && (
                                             <Badge
                                                variant="secondary"
                                                className={`text-xs ${statusColors[page.status]}`}
                                             >
                                                {page.status}
                                             </Badge>
                                          )}
                                       </div>
                                       <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                          {page.description}
                                       </p>
                                       {page.tags && (
                                          <div className="flex flex-wrap gap-1">
                                             {page.tags.map((tag) => (
                                                <Badge
                                                   key={tag}
                                                   variant="outline"
                                                   className="text-xs px-2 py-0.5"
                                                >
                                                   {tag}
                                                </Badge>
                                             ))}
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </Link>
                           );
                        })}
                     </div>
                  </div>
               )
            )}
         </div>

         {/* Quick Actions */}
         <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border">
               <div className="flex items-center gap-3 mb-4">
                  <Play className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Quick Start</h2>
               </div>
               <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                     <code className="px-2 py-1 bg-background rounded text-xs">pnpm dev</code>
                     <span className="text-muted-foreground">Start development server</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <code className="px-2 py-1 bg-background rounded text-xs">
                        pnpm dev:terminal
                     </code>
                     <span className="text-muted-foreground">Start WebSocket terminal server</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <code className="px-2 py-1 bg-background rounded text-xs">pnpm typecheck</code>
                     <span className="text-muted-foreground">Run TypeScript checking</span>
                  </div>
               </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg border">
               <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-secondary-foreground" />
                  <h2 className="text-xl font-semibold">Connection Info</h2>
               </div>
               <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                     <span className="text-muted-foreground">WebSocket Server:</span>
                     <code className="text-xs">ws://localhost:3001</code>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-muted-foreground">Development Server:</span>
                     <code className="text-xs">http://localhost:3000</code>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-muted-foreground">Terminal Protocol:</span>
                     <code className="text-xs">PTY over WebSocket</code>
                  </div>
               </div>
            </div>
         </div>

         {/* Usage Notes */}
         <div className="mt-8 p-6 bg-muted/50 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
               <Code className="h-5 w-5" />
               Development Notes
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
               <div>
                  <h3 className="font-medium mb-2">Prerequisites</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                     <li>• Node.js and pnpm installed</li>
                     <li>• WebSocket server running for terminal features</li>
                     <li>• Modern browser with WebSocket support</li>
                  </ul>
               </div>
               <div>
                  <h3 className="font-medium mb-2">Debugging Tips</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                     <li>• Check browser console for detailed logs</li>
                     <li>• Use React DevTools for component inspection</li>
                     <li>• Monitor WebSocket connection in Network tab</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
