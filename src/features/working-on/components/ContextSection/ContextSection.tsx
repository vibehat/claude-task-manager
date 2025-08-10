'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Settings,
  Clock,
  Terminal,
  Tag as TagIcon,
  GitBranch,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import type { ContextSectionProps } from '../../types';
import { cn } from '@/libs/client/utils';

export function ContextSection({ context, onSettings }: ContextSectionProps): React.JSX.Element {
  const formatSyncTime = (syncTime: string) => {
    const date = new Date(syncTime);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card className="bg-card border border-border overflow-hidden">
      <CardContent className="p-0">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Project Info Section - Primary Focus */}
          <div className="lg:col-span-5 p-4 lg:p-5 border-b lg:border-b-0 lg:border-r border-border">
            <div className="space-y-3">
              {/* Project Name - Most Prominent */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">{context.project}</h2>

                {/* Tag and Branch Info */}
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    <TagIcon className="h-3 w-3 mr-1" />
                    {context.tag}
                  </Badge>

                  {context.branch && (
                    <div className="inline-flex items-center gap-1.5 text-xs bg-muted/50 px-2 py-1 rounded-md font-mono">
                      <GitBranch className="h-3 w-3 text-muted-foreground" />
                      <span className="text-foreground/90">{context.branch}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Status Indicators Section */}
          <div className="lg:col-span-5 p-4 lg:p-5 border-b lg:border-b-0 lg:border-r border-border">
            <div className="grid grid-cols-3 gap-4">
              {/* Active Tasks */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Activity className="h-3.5 w-3.5" />
                  <span className="text-xs">Active</span>
                </div>
                <div className="text-xl font-semibold text-foreground">{context.activeTasks}</div>
                <div className="text-xs text-muted-foreground">tasks</div>
              </div>

              {/* Connection Status */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Terminal className="h-3.5 w-3.5" />
                  <span className="text-xs">CLI</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-foreground">Connected</span>
                </div>
                <div className="text-xs text-muted-foreground">Ready</div>
              </div>

              {/* Last Sync */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="text-xs">Synced</span>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {context.lastSync ? formatSyncTime(context.lastSync) : 'Never'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {context.lastSync ? 'Auto-sync' : 'Manual'}
                </div>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="lg:col-span-2 p-4 lg:p-5 flex flex-row lg:flex-col gap-2 justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={onSettings}
              className="flex-1 lg:flex-initial"
            >
              <Settings className="h-4 w-4 mr-2" />
              <span>Settings</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContextSection;
