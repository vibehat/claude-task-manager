import Link from 'next/link';
import { TaskMasterFrontendDrivenDemo } from '@/components/TaskMasterFrontendDrivenDemo';

export default function TaskMasterDemoPage() {
   return (
      <div className="container mx-auto py-10">
         <div className="mb-8">
            <Link
               href="/demo"
               className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
            >
               ← Back to Demo Gallery
            </Link>
            <h1 className="text-4xl font-bold mb-4">TaskMaster Demo</h1>
            <p className="text-muted-foreground">
               Interactive demo of the TaskMaster frontend-driven architecture with real-time task
               management.
            </p>
         </div>

         <TaskMasterFrontendDrivenDemo />
      </div>
   );
}
