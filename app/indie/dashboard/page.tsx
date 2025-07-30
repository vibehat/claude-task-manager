'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
   useGetIssuesQuery,
   useGetIssuesStatsQuery,
   SortOrder,
} from '@/libs/client/graphql-client/generated';
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
import { useEdges } from '@/hooks/useEdges';
import Link from 'next/link';
import { IndieLayout } from '@/components/layout/IndieLayout';

export default function IndieDashboardPage(): React.JSX.Element {
   const { data } = useGetIssuesQuery({
      variables: {
         take: 5,
         orderBy: {
            createdAt: SortOrder.Desc,
         },
      },
   });
   const { data: statsData, loading: statsLoading } = useGetIssuesStatsQuery();
   const recentIssues = useEdges(data?.issues);

   // Use stats from GraphQL resolver or fallback to calculated stats
   const taskStats = useMemo(() => {
      const issuesStats = statsData?.issuesStats;

      // Fallback calculation if stats query fails
      const {
         total = 0,
         completed = 0,
         inProgress = 0,
         pending = 0,
         completionRate = 0,
      } = issuesStats || {};

      return { total, completed, inProgress, pending, completionRate };
   }, [statsData]);

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
                     <div className="text-2xl font-bold">
                        {statsLoading ? '...' : taskStats.total}
                     </div>
                     <p className="text-xs text-muted-foreground">All your tasks</p>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">Completed</CardTitle>
                     <CheckCircleIcon className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">
                        {statsLoading ? '...' : taskStats.completed}
                     </div>
                     <p className="text-xs text-muted-foreground">
                        {statsLoading ? '...' : `${taskStats.completionRate}% completion rate`}
                     </p>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                     <ClockIcon className="h-4 w-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">
                        {statsLoading ? '...' : taskStats.inProgress}
                     </div>
                     <p className="text-xs text-muted-foreground">Currently working on</p>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">Pending</CardTitle>
                     <TrendingUpIcon className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">
                        {statsLoading ? '...' : taskStats.pending}
                     </div>
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
                     {recentIssues.length > 0 ? (
                        recentIssues.map((issue) => (
                           <div key={issue.id} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                 <div
                                    className={`w-2 h-2 rounded-full ${
                                       issue.status === 'done'
                                          ? 'bg-green-500'
                                          : issue.status === 'in-progress'
                                            ? 'bg-blue-500'
                                            : 'bg-gray-400'
                                    }`}
                                 />
                                 <div>
                                    <p className="text-sm font-medium">{issue.title}</p>
                                    <p className="text-xs text-muted-foreground">
                                       {issue.identifier}
                                    </p>
                                 </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                 <Badge variant="secondary">{issue.status}</Badge>
                                 <Badge variant="outline">{issue.priority}</Badge>
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
