'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { AIActivityFeedProps } from '../types/workingOnTypes';

const formatTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export function AIActivityFeed({ activities, maxItems }: AIActivityFeedProps) {
  const displayedActivities = maxItems ? activities.slice(-maxItems) : activities;
  const sortedActivities = [...displayedActivities].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  if (activities.length === 0) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Event Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="text-4xl mb-2">📝</div>
            <p className="text-muted-foreground text-sm">No events logged</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-lg font-semibold">Event Log</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full px-6 pb-6">
          <div className="space-y-2">
            {sortedActivities.map((activity) => (
              <div
                key={activity.id}
                className="text-sm border-l-2 border-muted-foreground/20 pl-3 py-1"
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs text-muted-foreground font-mono">
                    {formatTime(activity.timestamp)}
                  </span>
                  <span className="text-sm">{activity.message}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
