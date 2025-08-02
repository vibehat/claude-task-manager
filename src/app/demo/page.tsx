import Link from 'next/link';

export default function DemoPage() {
   return (
      <div className="container mx-auto py-10">
         <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Demo Gallery</h1>
            <p className="text-muted-foreground text-lg">
               Explore interactive demos of various components and features in the TaskMaster UI
               ecosystem.
            </p>
         </div>

         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
               href="/demo/taskmaster"
               className="group block p-6 border rounded-lg hover:shadow-lg transition-all duration-200 hover:border-primary/50"
            >
               <div className="mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                     <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                     </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                     TaskMaster Dashboard
                  </h2>
               </div>
               <p className="text-muted-foreground">
                  Interactive task management dashboard with real-time updates, command execution,
                  and frontend-driven architecture.
               </p>
               <div className="mt-4 text-sm text-primary font-medium">View Demo →</div>
            </Link>

            <Link
               href="/demo/command-palette"
               className="group block p-6 border rounded-lg hover:shadow-lg transition-all duration-200 hover:border-primary/50"
            >
               <div className="mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                     <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                     </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                     Command Palette
                  </h2>
               </div>
               <p className="text-muted-foreground">
                  Context-aware command palette with multi-step flows, dynamic command resolution,
                  and modular architecture.
               </p>
               <div className="mt-4 text-sm text-primary font-medium">View Demo →</div>
            </Link>

            <Link
               href="/demo/markdown-editor"
               className="group block p-6 border rounded-lg hover:shadow-lg transition-all duration-200 hover:border-primary/50"
            >
               <div className="mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                     <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                     </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                     Markdown Editor
                  </h2>
               </div>
               <p className="text-muted-foreground">
                  Full-featured markdown editor with live preview, syntax highlighting, toolbar
                  customization, and export features.
               </p>
               <div className="mt-4 text-sm text-primary font-medium">View Demo →</div>
            </Link>
         </div>

         <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">About These Demos</h2>
            <p className="text-muted-foreground">
               These demos showcase the key components and architectural patterns used throughout
               the TaskMaster UI. Each demo is fully interactive and demonstrates real-world usage
               scenarios. The code is organized following modern React patterns with TypeScript,
               Tailwind CSS, and Next.js App Router.
            </p>
         </div>
      </div>
   );
}
