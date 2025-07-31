import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SearchIcon, ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function TaskNotFound(): React.JSX.Element {
   return (
      <div className="p-6 flex items-center justify-center min-h-[400px]">
         <Card className="w-full max-w-md">
            <CardHeader className="text-center">
               <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                  <SearchIcon className="w-6 h-6 text-muted-foreground" />
               </div>
               <CardTitle>Task not found</CardTitle>
               <CardDescription>
                  The task you&apos;re looking for doesn&apos;t exist or has been removed.
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex flex-col gap-2">
                  <Button className="w-full" asChild>
                     <Link href="/indie/tasks">
                        <ArrowLeftIcon className="mr-2 h-4 w-4" />
                        Back to Tasks
                     </Link>
                  </Button>

                  <Button variant="outline" className="w-full" asChild>
                     <Link href="/indie">Go to Dashboard</Link>
                  </Button>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}
