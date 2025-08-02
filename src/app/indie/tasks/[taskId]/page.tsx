'use client';

import { useParams } from 'next/navigation';
import { IndieLayout } from '@/components/layout/IndieLayout';
import { useTask } from '@/libs/client/hooks/useTasks';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeftIcon, CalendarIcon, UserIcon, FlagIcon, TagIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function TaskDetailPage(): React.JSX.Element {
   const params = useParams();
   const taskId = params?.taskId as string;

   // Fetch single issue using Zustand
   const { data: task, loading, error } = useTask(taskId);
   const { getUserById, getTagById, getStatusById, getPriorityById, getLabelById } = useDataStore();

   // Get related data
   const assignee = task?.assigneeId ? getUserById(task.assigneeId) : null;
   const tag = task?.tagId ? getTagById(task.tagId) : null;
   const status = task?.statusId ? getStatusById(task.statusId) : null;
   const priority = task?.priorityId ? getPriorityById(task.priorityId) : null;
   const labels = task?.labelIds.map((id) => getLabelById(id)).filter(Boolean) || [];

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
               <div className="text-sm text-muted-foreground">{task.id}</div>
            </div>

            {/* Task Header */}
            <div className="space-y-4">
               <div className="flex items-start justify-between">
                  <div className="space-y-2">
                     <h1 className="text-3xl font-bold tracking-tight">{task.title}</h1>
                     <div className="flex items-center gap-2">
                        <Badge variant={status?.name === 'done' ? 'default' : 'secondary'}>
                           {status?.name || 'No Status'}
                        </Badge>
                        <Badge variant="outline">
                           <FlagIcon className="mr-1 h-3 w-3" />
                           {priority?.name || 'No Priority'}
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
                           {assignee ? (
                              <>
                                 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                    <span className="text-xs font-semibold text-white">
                                       {assignee.name.charAt(0).toUpperCase()}
                                    </span>
                                 </div>
                                 <div>
                                    <p className="text-sm font-medium">{assignee.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                       {assignee.email}
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
                        {/* Due date not implemented in current schema */}
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
                           {labels.length > 0 ? (
                              labels.map((label) => (
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

            {/* Tag Information */}
            {tag && (
               <Card>
                  <CardHeader>
                     <CardTitle>Tag</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-gray-500" />
                        <div>
                           <p className="text-sm font-medium">{tag.name}</p>
                           <p className="text-xs text-muted-foreground">Tag</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            )}
         </div>
      </IndieLayout>
   );
}
