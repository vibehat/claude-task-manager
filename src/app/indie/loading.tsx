import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function IndieLoading(): React.JSX.Element {
   return (
      <div className="p-6 space-y-6">
         {/* Header Skeleton */}
         <div className="flex items-center justify-between">
            <div className="space-y-2">
               <Skeleton className="h-8 w-48" />
               <Skeleton className="h-4 w-64" />
            </div>
            <div className="flex gap-2">
               <Skeleton className="h-10 w-32" />
               <Skeleton className="h-10 w-28" />
            </div>
         </div>

         {/* Stats Cards Skeleton */}
         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
               <Card key={i}>
                  <CardContent className="p-6">
                     <div className="flex items-center justify-between space-y-0 pb-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-4 rounded-full" />
                     </div>
                     <Skeleton className="h-8 w-16 mt-2" />
                     <Skeleton className="h-3 w-24 mt-1" />
                  </CardContent>
               </Card>
            ))}
         </div>

         {/* Content Area Skeleton */}
         <div className="grid gap-4 md:grid-cols-2">
            <Card>
               <CardContent className="p-6">
                  <div className="space-y-3">
                     <Skeleton className="h-5 w-32" />
                     <Skeleton className="h-4 w-48" />
                     <div className="space-y-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                           <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                 <Skeleton className="h-2 w-2 rounded-full" />
                                 <div className="space-y-1">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-3 w-16" />
                                 </div>
                              </div>
                              <div className="flex space-x-2">
                                 <Skeleton className="h-5 w-16" />
                                 <Skeleton className="h-5 w-12" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card>
               <CardContent className="p-6">
                  <div className="space-y-3">
                     <Skeleton className="h-5 w-28" />
                     <Skeleton className="h-4 w-52" />
                     <div className="space-y-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                           <Skeleton key={i} className="h-10 w-full" />
                        ))}
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}
