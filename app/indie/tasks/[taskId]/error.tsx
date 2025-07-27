'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangleIcon, RefreshCwIcon, ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

interface TaskDetailErrorProps {
   error: Error & { digest?: string };
   reset: () => void;
}

export default function TaskDetailError({ error, reset }: TaskDetailErrorProps): React.JSX.Element {
   useEffect(() => {
      console.error('Task detail error:', error);
   }, [error]);

   return (
      <div className="p-6 flex items-center justify-center min-h-[400px]">
         <Card className="w-full max-w-md">
            <CardHeader className="text-center">
               <div className="mx-auto w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangleIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
               </div>
               <CardTitle>Task not found</CardTitle>
               <CardDescription>
                  We couldn&apos;t load this task. It might have been deleted or you don&apos;t have
                  permission to view it.
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {process.env.NODE_ENV === 'development' && (
                  <div className="p-3 bg-muted rounded-md">
                     <p className="text-sm font-mono text-muted-foreground">{error.message}</p>
                  </div>
               )}

               <div className="flex flex-col gap-2">
                  <Button onClick={reset} className="w-full">
                     <RefreshCwIcon className="mr-2 h-4 w-4" />
                     Try Again
                  </Button>

                  <Button variant="outline" className="w-full" asChild>
                     <Link href="/indie/tasks">
                        <ArrowLeftIcon className="mr-2 h-4 w-4" />
                        Back to Tasks
                     </Link>
                  </Button>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}
