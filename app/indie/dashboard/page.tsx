'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIssues } from '@/libs/client/hooks/issues/queries/issues/use-issues';
import { Badge } from '@/components/ui/badge';
import {
   CalendarIcon,
   CheckCircleIcon,
   CircleIcon,
   ClockIcon,
   PlusIcon,
   TrendingUpIcon,
} from 'lucide-react';
import { useMemo } from 'react';
import Link from 'next/link';
import { IndieLayout } from '@/components/layout/indie-layout';

export default function IndieDashboardPage(): React.JSX.Element {
   const { data } = useIssues();
   const issues = useMemo(() => data?.issues?.nodes || [], [data?.issues?.nodes]);

   // Calculate task statistics
   const taskStats = useMemo(() => {
      const total = issues.length;
      const completed = issues.filter((issue) => issue.status.id === 'done').length;
      const inProgress = issues.filter((issue) => issue.status.id === 'in-progress').length;
      const pending = issues.filter((issue) => issue.status.id === 'todo').length;
      const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

      return { total, completed, inProgress, pending, completionRate };
   }, [issues]);

   // Get recent tasks (last 5 updated)
   const recentTasks = useMemo(() => {
      return [...issues]
         .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
         .slice(0, 5);
   }, [issues]);

   return (
      <IndieLayout>
         <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
               <div>
                  <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                  <p className="text-muted-foreground">
                     Welcome to your individual workspace. Manage your tasks and track your
                     progress.
                  </p>
               </div>
               <div className="flex gap-2">
                  <Button asChild>
                     <Link href="/indie/tasks">
                        <CircleIcon className="mr-2 h-4 w-4" />
                        View All Tasks
                     </Link>
                  </Button>
                  <Button variant="outline">
                     <PlusIcon className="mr-2 h-4 w-4" />
                     New Task
                  </Button>
               </div>
            </div>

            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                     <CircleIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">{taskStats.total}</div>
                     <p className="text-xs text-muted-foreground">All your tasks</p>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">Completed</CardTitle>
                     <CheckCircleIcon className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">{taskStats.completed}</div>
                     <p className="text-xs text-muted-foreground">
                        {taskStats.completionRate}% completion rate
                     </p>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                     <ClockIcon className="h-4 w-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">{taskStats.inProgress}</div>
                     <p className="text-xs text-muted-foreground">Currently working on</p>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">Pending</CardTitle>
                     <TrendingUpIcon className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">{taskStats.pending}</div>
                     <p className="text-xs text-muted-foreground">Ready to start</p>
                  </CardContent>
               </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid gap-4 md:grid-cols-2">
               <Card>
                  <CardHeader>
                     <CardTitle>Recent Tasks</CardTitle>
                     <CardDescription>Your most recently created tasks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {recentTasks.length > 0 ? (
                        recentTasks.map((task) => (
                           <div key={task.id} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                 <div
                                    className={`w-2 h-2 rounded-full ${
                                       task.status.id === 'done'
                                          ? 'bg-green-500'
                                          : task.status.id === 'in-progress'
                                            ? 'bg-blue-500'
                                            : 'bg-gray-400'
                                    }`}
                                 />
                                 <div>
                                    <p className="text-sm font-medium">{task.title}</p>
                                    <p className="text-xs text-muted-foreground">
                                       {task.identifier}
                                    </p>
                                 </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                 <Badge variant="secondary">{task.status.name}</Badge>
                                 <Badge variant="outline">{task.priority.name}</Badge>
                              </div>
                           </div>
                        ))
                     ) : (
                        <p className="text-sm text-muted-foreground">No recent tasks</p>
                     )}
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader>
                     <CardTitle>Quick Actions</CardTitle>
                     <CardDescription>Common actions to help you stay productive</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                     <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/indie/tasks">
                           <CircleIcon className="mr-2 h-4 w-4" />
                           View All Tasks
                        </Link>
                     </Button>
                     <Button variant="outline" className="w-full justify-start">
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Create New Task
                     </Button>
                     <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/indie/settings">
                           <CalendarIcon className="mr-2 h-4 w-4" />
                           Settings
                        </Link>
                     </Button>
                  </CardContent>
               </Card>
            </div>
         </div>
      </IndieLayout>
   );
}
