import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function TasksLoading(): React.JSX.Element {
   return (
      <div className="p-6 space-y-6">
         {/* Header Skeleton */}
         <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-32" />
            <div className="flex gap-2">
               <Skeleton className="h-10 w-24" />
               <Skeleton className="h-10 w-28" />
            </div>
         </div>

         {/* Filter Bar Skeleton */}
         <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-24" />
         </div>

         {/* Task List Skeleton */}
         <div className="space-y-3">
            {Array.from({ length: 8 }).map((_, i) => (
               <Card key={i}>
                  <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                           <Skeleton className="h-4 w-4 rounded" />
                           <div className="space-y-2">
                              <Skeleton className="h-4 w-48" />
                              <Skeleton className="h-3 w-24" />
                           </div>
                        </div>
                        <div className="flex items-center space-x-2">
                           <Skeleton className="h-6 w-16" />
                           <Skeleton className="h-6 w-12" />
                           <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                     </div>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   );
}
