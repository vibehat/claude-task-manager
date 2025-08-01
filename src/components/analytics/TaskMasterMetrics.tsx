import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NetworkIcon } from 'lucide-react';
import { useTaskMasterMetrics } from '@/hooks/useAnalyticsData';
import type { ComplexityReport, TaskMasterData } from '@/hooks/useTaskMasterData';

interface TaskMasterMetricsProps {
   complexityReport: ComplexityReport | null;
   taskMasterData: TaskMasterData | null;
   loading?: boolean;
}

export function TaskMasterMetrics({
   complexityReport,
   taskMasterData,
   loading = false,
}: TaskMasterMetricsProps) {
   const { analysisOverview, taskCategories } = useTaskMasterMetrics(
      complexityReport,
      taskMasterData
   );

   if (loading) {
      return (
         <div className="grid gap-4 md:grid-cols-2">
            <Card>
               <CardHeader>
                  <div className="h-5 bg-gray-200 rounded w-32 mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
               </CardHeader>
               <CardContent className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                     <div key={i} className="flex justify-between items-center">
                        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
                        <div className="h-6 bg-gray-200 rounded w-16 animate-pulse" />
                     </div>
                  ))}
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <div className="h-5 bg-gray-200 rounded w-32 mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
               </CardHeader>
               <CardContent className="space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                     <div key={i} className="flex items-center justify-between">
                        <div>
                           <div className="h-4 bg-gray-200 rounded w-20 mb-1 animate-pulse" />
                           <div className="h-3 bg-gray-200 rounded w-32 animate-pulse" />
                        </div>
                        <div className="h-6 bg-gray-200 rounded w-16 animate-pulse" />
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
               <CardTitle>Analysis Overview</CardTitle>
               <CardDescription>TaskMaster AI integration and analysis insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {analysisOverview ? (
                  <>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Tasks Analyzed</span>
                        <Badge variant="outline">
                           {analysisOverview.tasksAnalyzed} / {analysisOverview.totalTasks}
                        </Badge>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Analysis Date</span>
                        <span className="text-sm text-muted-foreground">
                           {new Date(analysisOverview.generatedAt).toLocaleDateString()}
                        </span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Research Mode</span>
                        <Badge variant={analysisOverview.usedResearch ? 'default' : 'secondary'}>
                           {analysisOverview.usedResearch ? 'Enabled' : 'Disabled'}
                        </Badge>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Threshold Score</span>
                        <span className="text-sm text-muted-foreground">
                           {analysisOverview.thresholdScore}/10
                        </span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Project Name</span>
                        <Badge variant="outline">{analysisOverview.projectName}</Badge>
                     </div>
                  </>
               ) : (
                  <div className="text-center py-8 text-muted-foreground">
                     <p className="text-sm">No analysis data available</p>
                     <p className="text-xs mt-1">Run TaskMaster complexity analysis</p>
                  </div>
               )}
            </CardContent>
         </Card>

         <Card>
            <CardHeader>
               <CardTitle>Task Categories</CardTitle>
               <CardDescription>Distribution of analyzed tasks by project context</CardDescription>
            </CardHeader>
            <CardContent>
               {taskCategories.length > 0 ? (
                  <div className="space-y-3">
                     {taskCategories.map((category) => (
                        <div key={category.name} className="flex items-center justify-between">
                           <div>
                              <p className="text-sm font-medium capitalize">{category.name}</p>
                              <p className="text-xs text-muted-foreground">
                                 {category.description}
                              </p>
                           </div>
                           <Badge variant="outline">{category.taskCount} tasks</Badge>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="text-center py-8 text-muted-foreground">
                     <p className="text-sm">No TaskMaster data available</p>
                     <p className="text-xs mt-1">Tasks data not found</p>
                  </div>
               )}
            </CardContent>
         </Card>
      </div>
   );
}

export function DependencyPlaceholder() {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Dependency Analysis</CardTitle>
            <CardDescription>
               Understanding task relationships and potential blockers
            </CardDescription>
         </CardHeader>
         <CardContent>
            <div className="text-center py-12">
               <NetworkIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
               <h3 className="text-lg font-medium mb-2">Dependency Analysis</h3>
               <p className="text-muted-foreground mb-4">
                  Advanced dependency visualization and blocking analysis coming soon.
               </p>
               <p className="text-sm text-muted-foreground">
                  This will show task relationships, critical paths, and identify potential
                  bottlenecks in your workflow.
               </p>
            </div>
         </CardContent>
      </Card>
   );
}
