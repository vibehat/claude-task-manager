'use client';

import { useParams } from 'next/navigation';
import { IndieLayout } from '@/components/layout/indie-layout';
import { useGetIssuesQuery } from '@/libs/client/graphql-client/generated';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeftIcon, CalendarIcon, UserIcon, FlagIcon, TagIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Issue } from '@/mock-data/issues';
import { useMemo } from 'react';
import { useEdges } from '@/hooks/use-edges';

export default function TaskDetailPage(): React.JSX.Element {
   const params = useParams();
   const taskId = params?.taskId as string;

   // Fetch all issues using GraphQL
   const { data, loading, error } = useGetIssuesQuery();

   // Find the task by ID from the fetched issues
   const issues = useEdges(data?.issues);
   const task = useMemo(() => {
      return issues.find((issue: Issue) => issue.id === taskId);
   }, [issues, taskId]);

   if (loading) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-muted-foreground">Loading task details...</div>
         </div>
      );
   }

   if (error) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-red-500">Error loading task: {error.message}</div>
         </div>
      );
   }

   if (!task) {
      notFound();
   }

   return (
      <IndieLayout>
         <div className="p-6 space-y-6">
            {/* Navigation */}
            <div className="flex items-center gap-4">
               <Button variant="ghost" size="sm" asChild>
                  <Link href="/indie/tasks">
                     <ArrowLeftIcon className="mr-2 h-4 w-4" />
                     Back to Tasks
                  </Link>
               </Button>
               <div className="text-sm text-muted-foreground">{task.identifier}</div>
            </div>

            {/* Task Header */}
            <div className="space-y-4">
               <div className="flex items-start justify-between">
                  <div className="space-y-2">
                     <h1 className="text-3xl font-bold tracking-tight">{task.title}</h1>
                     <div className="flex items-center gap-2">
                        <Badge variant={task.status.id === 'done' ? 'default' : 'secondary'}>
                           {task.status.name}
                        </Badge>
                        <Badge variant="outline">
                           <FlagIcon className="mr-1 h-3 w-3" />
                           {task.priority.name}
                        </Badge>
                     </div>
                  </div>
               </div>

               {/* Task Meta Information */}
               <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                     <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center">
                           <UserIcon className="mr-2 h-4 w-4" />
                           Assignee
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <div className="flex items-center space-x-2">
                           {task.assignee ? (
                              <>
                                 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                    <span className="text-xs font-semibold text-white">
                                       {task.assignee.name.charAt(0).toUpperCase()}
                                    </span>
                                 </div>
                                 <div>
                                    <p className="text-sm font-medium">{task.assignee.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                       {task.assignee.email}
                                    </p>
                                 </div>
                              </>
                           ) : (
                              <p className="text-sm text-muted-foreground">Unassigned</p>
                           )}
                        </div>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center">
                           <CalendarIcon className="mr-2 h-4 w-4" />
                           Created
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-sm">
                           {new Date(task.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                           })}
                        </p>
                        {task.dueDate && (
                           <p className="text-xs text-muted-foreground">
                              Due: {new Date(task.dueDate).toLocaleDateString()}
                           </p>
                        )}
                     </CardContent>
                  </Card>

                  <Card>
                     <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium flex items-center">
                           <TagIcon className="mr-2 h-4 w-4" />
                           Labels
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <div className="flex flex-wrap gap-1">
                           {task.labels.length > 0 ? (
                              task.labels.map((label) => (
                                 <Badge key={label.id} variant="outline" className="text-xs">
                                    {label.name}
                                 </Badge>
                              ))
                           ) : (
                              <p className="text-sm text-muted-foreground">No labels</p>
                           )}
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>

            <Separator />

            {/* Task Description */}
            <Card>
               <CardHeader>
                  <CardTitle>Description</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="prose prose-sm max-w-none">
                     {task.description ? (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                           {task.description}
                        </p>
                     ) : (
                        <p className="text-sm text-muted-foreground italic">
                           No description provided for this task.
                        </p>
                     )}
                  </div>
               </CardContent>
            </Card>

            {/* Project Information */}
            {task.project && (
               <Card>
                  <CardHeader>
                     <CardTitle>Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-gray-500" />
                        <div>
                           <p className="text-sm font-medium">{task.project.name}</p>
                           <p className="text-xs text-muted-foreground">Project</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            )}
         </div>
      </IndieLayout>
   );
}
