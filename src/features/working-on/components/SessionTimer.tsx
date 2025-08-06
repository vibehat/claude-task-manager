import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Square, Clock } from 'lucide-react';
import type { SessionTimerProps } from '../types/workingOnTypes';

/**
 * Session Timer Component
 * Gentle time tracking that encourages focus without creating pressure
 */
export const SessionTimer: React.FC<SessionTimerProps> = ({
  sessionState,
  onStart,
  onPause,
  onResume,
  onStop,
}) => {
  // Format time for display
  const formatTime = (seconds: number): string => {
    if (seconds < 60) {
      return `${seconds}s`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return remainingSeconds > 0
        ? `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
        : `${minutes}m`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
    }
  };

  // Calculate current time display
  const getCurrentTime = (): string => {
    if (!sessionState.isActive) {
      return formatTime(sessionState.totalTime);
    }

    const now = new Date();
    let currentTime = sessionState.totalTime;

    if (sessionState.startTime && !sessionState.isPaused) {
      const elapsed = Math.floor((now.getTime() - sessionState.startTime.getTime()) / 1000);
      currentTime += elapsed;
    }

    return formatTime(currentTime);
  };

  // Get status badge properties
  const getStatusProps = () => {
    if (!sessionState.isActive) {
      return {
        variant: 'secondary' as const,
        text: 'Stopped',
        color: 'text-muted-foreground',
      };
    }

    if (sessionState.isPaused) {
      return {
        variant: 'outline' as const,
        text: 'Paused',
        color: 'text-yellow-600 dark:text-yellow-400',
      };
    }

    return {
      variant: 'default' as const,
      text: 'Active',
      color: 'text-blue-600 dark:text-blue-400',
    };
  };

  const statusProps = getStatusProps();

  return (
    <Card className="p-4 min-w-[160px]">
      <div className="space-y-3">
        {/* Timer header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Session</span>
          </div>
          <Badge variant={statusProps.variant} className="text-xs">
            {statusProps.text}
          </Badge>
        </div>

        {/* Time display */}
        <div className="text-center">
          <div className={`text-2xl font-semibold tabular-nums ${statusProps.color}`}>
            {getCurrentTime()}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {sessionState.isActive ? 'Current session' : 'Total time'}
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex justify-center gap-2">
          {!sessionState.isActive ? (
            // Start button when stopped
            <Button
              onClick={onStart}
              size="sm"
              variant="outline"
              className="flex items-center gap-1"
            >
              <Play className="h-3 w-3" />
              Start
            </Button>
          ) : (
            // Pause/Resume and Stop buttons when active
            <>
              {sessionState.isPaused ? (
                <Button
                  onClick={onResume}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <Play className="h-3 w-3" />
                  Resume
                </Button>
              ) : (
                <Button
                  onClick={onPause}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <Pause className="h-3 w-3" />
                  Pause
                </Button>
              )}

              <Button
                onClick={onStop}
                size="sm"
                variant="ghost"
                className="flex items-center gap-1"
              >
                <Square className="h-3 w-3" />
                Stop
              </Button>
            </>
          )}
        </div>

        {/* Session info */}
        {sessionState.isActive && (
          <div className="text-xs text-muted-foreground text-center pt-2 border-t">
            {sessionState.isPaused ? (
              <span>Paused - click Resume to continue</span>
            ) : (
              <span>Focus time - minimize distractions</span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
