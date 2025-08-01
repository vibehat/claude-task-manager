import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3Icon, TrendingUpIcon, BrainIcon, CalendarIcon } from 'lucide-react';
import { useCompletionAnalytics, useComplexityAnalytics } from '@/hooks/useAnalyticsData';
import type { ComplexityReport } from '@/hooks/useTaskMasterData';

interface OverviewStatsProps {
   complexityReport: ComplexityReport | null;
   loading?: boolean;
}

export function OverviewStats({ complexityReport, loading = false }: OverviewStatsProps) {
   const { metrics } = useCompletionAnalytics();
   const { averageComplexity } = useComplexityAnalytics(complexityReport);

   if (loading) {
      return (
         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
               <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                     <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                  </CardHeader>
                  <CardContent>
                     <div className="h-8 bg-gray-200 rounded w-12 mb-1 animate-pulse" />
                     <div className="h-3 bg-gray-200 rounded w-24 animate-pulse" />
                  </CardContent>
               </Card>
            ))}
         </div>
      );
   }

   return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
         <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
               <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold">{metrics.total}</div>
               <p className="text-xs text-muted-foreground">
                  {complexityReport?.meta.totalTasks || 0} analyzed by TaskMaster
               </p>
            </CardContent>
         </Card>

         <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
               <TrendingUpIcon className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold">{metrics.completionRate}%</div>
               <p className="text-xs text-muted-foreground">
                  {metrics.completed} of {metrics.total} completed
               </p>
            </CardContent>
         </Card>

         <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">Avg Complexity</CardTitle>
               <BrainIcon className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold">{averageComplexity.toFixed(1)}</div>
               <p className="text-xs text-muted-foreground">Out of 10 (TaskMaster AI)</p>
            </CardContent>
         </Card>

         <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">In Progress</CardTitle>
               <CalendarIcon className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold">{metrics.inProgress}</div>
               <p className="text-xs text-muted-foreground">Currently active</p>
            </CardContent>
         </Card>
      </div>
   );
}
