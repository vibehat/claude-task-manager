'use client';

import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { AIActivityFeedProps, AIActivity } from '../types/workingOnTypes';
import { cn } from '@/libs/client/utils';

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'progress':
      return '🔄';
    case 'completion':
      return '✅';
    case 'question':
      return '❓';
    case 'error':
      return '❌';
    case 'research':
      return '🔍';
    default:
      return '📝';
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case 'progress':
      return 'bg-blue-50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800';
    case 'completion':
      return 'bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800';
    case 'question':
      return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/10 dark:border-yellow-800';
    case 'error':
      return 'bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800';
    case 'research':
      return 'bg-purple-50 border-purple-200 dark:bg-purple-900/10 dark:border-purple-800';
    default:
      return 'bg-gray-50 border-gray-200 dark:bg-gray-900/10 dark:border-gray-800';
  }
};

const getActivityTypeColor = (type: string) => {
  switch (type) {
    case 'progress':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
    case 'completion':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
    case 'question':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
    case 'error':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
    case 'research':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
  }
};

const formatTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

const formatTimeAgo = (timestamp: string) => {
  const now = new Date();
  const time = new Date(timestamp);
  const diffMs = now.getTime() - time.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffMinutes < 1) return 'now';
  if (diffMinutes < 60) return `${diffMinutes}m`;
  return `${Math.floor(diffMinutes / 60)}h`;
};

interface ActivityItemProps {
  activity: AIActivity;
  showMetadata?: boolean;
}

function ActivityItem({ activity, showMetadata = true }: ActivityItemProps) {
  return (
    <div className={cn('p-3 rounded-lg border', getActivityColor(activity.type))}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <span className="text-lg" role="img" aria-label={activity.type}>
            {getActivityIcon(activity.type)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <Badge
              variant="secondary"
              className={cn('text-xs px-2 py-0', getActivityTypeColor(activity.type))}
            >
              {activity.type}
            </Badge>
            <div className="text-xs text-muted-foreground">
              <span className="hidden sm:inline">{formatTime(activity.timestamp)}</span>
              <span className="sm:hidden">{formatTimeAgo(activity.timestamp)}</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-2">{activity.message}</p>

          {showMetadata && activity.metadata && (
            <div className="text-xs text-muted-foreground space-y-1">
              {activity.metadata.filesChanged && activity.metadata.filesChanged.length > 0 && (
                <div className="flex items-center gap-1">
                  <span>📄</span>
                  <span>Files: {activity.metadata.filesChanged.join(', ')}</span>
                </div>
              )}
              {activity.metadata.linesAdded && (
                <div className="flex items-center gap-1">
                  <span>➕</span>
                  <span>Lines added: {activity.metadata.linesAdded}</span>
                </div>
              )}
              {activity.metadata.testsRun && (
                <div className="flex items-center gap-1">
                  <span>🧪</span>
                  <span>Tests run: {activity.metadata.testsRun}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function AIActivityFeed({ activities, maxItems, autoScroll = true }: AIActivityFeedProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new activities are added
  useEffect(() => {
    if (autoScroll && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activities, autoScroll]);

  const displayedActivities = maxItems ? activities.slice(-maxItems) : activities;
  const sortedActivities = [...displayedActivities].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  if (activities.length === 0) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">AI Activity Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="text-4xl mb-2">🤖</div>
            <p className="text-muted-foreground text-sm">No AI activity</p>
            <p className="text-muted-foreground text-xs mt-1">
              Activity will appear here when AI agents are working
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            AI Activity Feed
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {activities.length} updates
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea ref={scrollRef} className="h-full px-6 pb-6">
          <div className="space-y-3">
            {sortedActivities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} showMetadata={true} />
            ))}
          </div>
        </ScrollArea>

        <div className="px-6 pb-4 pt-2 border-t bg-background/80 backdrop-blur-sm">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs"
              onClick={() => {
                /* TODO: Open full conversation */
              }}
            >
              View Full Conversation History
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs"
              onClick={() => {
                /* TODO: Export transcript */
              }}
            >
              Export Chat Transcript
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Real-time updates from active AI sessions
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
