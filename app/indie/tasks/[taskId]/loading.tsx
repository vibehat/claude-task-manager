import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function TaskDetailLoading(): React.JSX.Element {
   return (
      <div className="p-6 space-y-6">
         {/* Navigation Skeleton */}
         <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-4 w-16" />
         </div>

         {/* Task Header Skeleton */}
         <div className="space-y-4">
            <div className="flex items-start justify-between">
               <div className="space-y-2">
                  <Skeleton className="h-9 w-96" />
                  <div className="flex items-center gap-2">
                     <Skeleton className="h-6 w-20" />
                     <Skeleton className="h-6 w-16" />
                  </div>
               </div>
            </div>

            {/* Meta Information Cards Skeleton */}
            <div className="grid gap-4 md:grid-cols-3">
               {Array.from({ length: 3 }).map((_, i) => (
                  <Card key={i}>
                     <CardHeader className="pb-3">
                        <Skeleton className="h-5 w-20" />
                     </CardHeader>
                     <CardContent>
                        <div className="space-y-2">
                           <Skeleton className="h-4 w-32" />
                           <Skeleton className="h-3 w-24" />
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>

         <Separator />

         {/* Description Skeleton */}
         <Card>
            <CardHeader>
               <Skeleton className="h-6 w-24" />
            </CardHeader>
            <CardContent>
               <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
               </div>
            </CardContent>
         </Card>

         {/* Project Info Skeleton */}
         <Card>
            <CardHeader>
               <Skeleton className="h-6 w-16" />
            </CardHeader>
            <CardContent>
               <div className="flex items-center space-x-3">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <div className="space-y-1">
                     <Skeleton className="h-4 w-32" />
                     <Skeleton className="h-3 w-48" />
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}
