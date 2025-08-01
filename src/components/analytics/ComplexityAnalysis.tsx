import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useComplexityAnalytics } from '@/hooks/useAnalyticsData';
import type { ComplexityReport } from '@/hooks/useTaskMasterData';

interface ComplexityAnalysisProps {
   complexityReport: ComplexityReport | null;
   loading?: boolean;
}

export function ComplexityAnalysis({ complexityReport, loading = false }: ComplexityAnalysisProps) {
   const { distribution, mostComplex } = useComplexityAnalytics(complexityReport);

   if (loading) {
      return (
         <div className="grid gap-4 md:grid-cols-2">
            <Card>
               <CardHeader>
                  <div className="h-5 bg-gray-200 rounded w-32 mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
               </CardHeader>
               <CardContent>
                  <div className="h-64 bg-gray-200 rounded animate-pulse" />
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <div className="h-5 bg-gray-200 rounded w-32 mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
               </CardHeader>
               <CardContent className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                     <div key={i} className="flex items-center justify-between">
                        <div className="flex-1">
                           <div className="h-4 bg-gray-200 rounded w-3/4 mb-1 animate-pulse" />
                           <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
                        </div>
                        <div className="h-6 bg-gray-200 rounded w-12 animate-pulse" />
                     </div>
                  ))}
               </CardContent>
            </Card>
         </div>
      );
   }

   return (
      <div className="grid gap-4 md:grid-cols-2">
         <Card>
            <CardHeader>
               <CardTitle>Complexity Distribution</CardTitle>
               <CardDescription>
                  Task distribution by complexity level (TaskMaster AI Analysis)
               </CardDescription>
            </CardHeader>
            <CardContent>
               {distribution.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                     <PieChart>
                        <Pie
                           data={distribution}
                           cx="50%"
                           cy="50%"
                           labelLine={false}
                           label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                           outerRadius={80}
                           fill="#8884d8"
                           dataKey="value"
                        >
                           {distribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                        </Pie>
                        <Tooltip />
                     </PieChart>
                  </ResponsiveContainer>
               ) : (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                     <div className="text-center">
                        <p className="text-sm">No complexity data available</p>
                        <p className="text-xs mt-1">
                           Run TaskMaster analysis to see complexity insights
                        </p>
                     </div>
                  </div>
               )}
            </CardContent>
         </Card>

         <Card>
            <CardHeader>
               <CardTitle>Most Complex Tasks</CardTitle>
               <CardDescription>Tasks requiring the most attention and planning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {mostComplex.length > 0 ? (
                  mostComplex.map((task) => (
                     <div key={task.taskId} className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                           <p className="text-sm font-medium truncate">{task.taskTitle}</p>
                           <p className="text-xs text-muted-foreground">
                              {task.recommendedSubtasks} recommended subtasks
                           </p>
                        </div>
                        <Badge
                           variant={
                              task.complexityScore >= 8
                                 ? 'destructive'
                                 : task.complexityScore >= 6
                                   ? 'default'
                                   : 'secondary'
                           }
                        >
                           {task.complexityScore}/10
                        </Badge>
                     </div>
                  ))
               ) : (
                  <div className="text-center py-8 text-muted-foreground">
                     <p className="text-sm">No complexity analysis available</p>
                     <p className="text-xs mt-1">TaskMaster complexity report not found</p>
                  </div>
               )}
            </CardContent>
         </Card>
      </div>
   );
}
