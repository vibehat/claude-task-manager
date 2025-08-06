'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useDataStore } from '@/libs/client/stores/dataStore';
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
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { formatTaskIdForDisplay } from '@/libs/client/utils';

export default function WorkspaceDashboardPage(): React.JSX.Element {
  const tasks = useDataStore((state) => state.allTasks);

  // Get recent tasks (last 5)
  const recentTasks = useMemo(() => {
    // Since TaskMasterTask doesn't have createdAt, just take the first 5 tasks
    return tasks.slice(0, 5);
  }, [tasks]);

  // Calculate stats from local data
  const taskStats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => {
      return task.status === 'done';
    }).length;
    const inProgress = tasks.filter((task) => {
      return task.status === 'in-progress';
    }).length;
    const pending = tasks.filter((task) => {
      return task.status === 'pending' || task.status === 'todo' || task.status === 'backlog';
    }).length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, inProgress, pending, completionRate };
  }, [tasks]);

  return (
    <WorkspaceLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome to your workspace. Manage your tasks and track your progress.
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/workspace/to-do">
                <CircleIcon className="mr-2 h-4 w-4" />
                View To Do
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
              <div className="text-2xl font-bold">{false ? '...' : taskStats.total}</div>
              <p className="text-xs text-muted-foreground">All your tasks</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircleIcon className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{false ? '...' : taskStats.completed}</div>
              <p className="text-xs text-muted-foreground">
                {false ? '...' : `${taskStats.completionRate}% completion rate`}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <ClockIcon className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{false ? '...' : taskStats.inProgress}</div>
              <p className="text-xs text-muted-foreground">Currently working on</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <TrendingUpIcon className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{false ? '...' : taskStats.pending}</div>
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
                          task.status === 'done'
                            ? 'bg-green-500'
                            : task.status === 'in-progress'
                              ? 'bg-blue-500'
                              : 'bg-gray-400'
                        }`}
                      />
                      <div>
                        <p className="text-sm font-medium">{task.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatTaskIdForDisplay(String(task.id))}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{task.status}</Badge>
                      <Badge variant="outline">{task.priority || 'no priority'}</Badge>
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
                <Link href="/workspace/working-on">
                  <CircleIcon className="mr-2 h-4 w-4" />
                  Working On
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/workspace/to-do">
                  <PlusIcon className="mr-2 h-4 w-4" />
                  To Do Tasks
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/workspace/my-settings">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  My Settings
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </WorkspaceLayout>
  );
}
