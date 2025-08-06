import { useState, useEffect, useCallback } from 'react';
import type { SessionState, UseSessionTrackingReturn } from '../types/workingOnTypes';

/**
 * Hook for session time tracking with automatic pause/resume functionality
 * Uses Page Visibility API for intelligent pause detection
 */
export const useSessionTracking = (): UseSessionTrackingReturn => {
  const [sessionState, setSessionState] = useState<SessionState>({
    isActive: false,
    startTime: null,
    totalTime: 0,
    isPaused: false,
    pausedAt: null,
    resumedAt: null,
  });

  // Start a new session
  const startSession = useCallback(() => {
    const now = new Date();
    setSessionState({
      isActive: true,
      startTime: now,
      totalTime: 0,
      isPaused: false,
      pausedAt: null,
      resumedAt: now,
    });
  }, []);

  // Pause the current session
  const pauseSession = useCallback(() => {
    const now = new Date();
    setSessionState((prev) => {
      if (!prev.isActive || prev.isPaused) return prev;

      return {
        ...prev,
        isPaused: true,
        pausedAt: now,
      };
    });
  }, []);

  // Resume a paused session
  const resumeSession = useCallback(() => {
    const now = new Date();
    setSessionState((prev) => {
      if (!prev.isActive || !prev.isPaused) return prev;

      return {
        ...prev,
        isPaused: false,
        pausedAt: null,
        resumedAt: now,
      };
    });
  }, []);

  // End the current session
  const endSession = useCallback(() => {
    setSessionState((prev) => ({
      ...prev,
      isActive: false,
      startTime: null,
      isPaused: false,
      pausedAt: null,
      resumedAt: null,
    }));
  }, []);

  // Format duration as human-readable string
  const getFormattedDuration = useCallback((): string => {
    const duration = getCurrentDuration();

    if (duration < 60) {
      return `${duration}s`;
    } else if (duration < 3600) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return seconds > 0 ? `${minutes}:${seconds.toString().padStart(2, '0')}` : `${minutes}m`;
    } else {
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
    }
  }, [sessionState]);

  // Calculate current session duration
  const getCurrentDuration = useCallback((): number => {
    if (!sessionState.isActive) {
      return sessionState.totalTime;
    }

    const now = new Date();
    let activeDuration = sessionState.totalTime;

    if (sessionState.startTime) {
      if (sessionState.isPaused && sessionState.pausedAt) {
        // If paused, only count time up to pause
        activeDuration += Math.floor(
          (sessionState.pausedAt.getTime() - sessionState.startTime.getTime()) / 1000
        );
      } else if (sessionState.resumedAt) {
        // If resumed, count from resume time
        activeDuration += Math.floor((now.getTime() - sessionState.resumedAt.getTime()) / 1000);
      } else {
        // Normal active counting
        activeDuration += Math.floor((now.getTime() - sessionState.startTime.getTime()) / 1000);
      }
    }

    return activeDuration;
  }, [sessionState]);

  // Page Visibility API integration for automatic pause/resume
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!sessionState.isActive) return;

      if (document.hidden && !sessionState.isPaused) {
        // Page became hidden and session is active - pause
        pauseSession();
      } else if (!document.hidden && sessionState.isPaused) {
        // Page became visible and session is paused - resume
        resumeSession();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [sessionState.isActive, sessionState.isPaused, pauseSession, resumeSession]);

  // Update total time when session is paused
  useEffect(() => {
    if (sessionState.isPaused && sessionState.pausedAt && sessionState.startTime) {
      const pausedDuration = Math.floor(
        (sessionState.pausedAt.getTime() - sessionState.startTime.getTime()) / 1000
      );

      setSessionState((prev) => ({
        ...prev,
        totalTime: prev.totalTime + pausedDuration,
        startTime: null, // Reset start time since we've added the duration to total
      }));
    }
  }, [sessionState.isPaused, sessionState.pausedAt]);

  return {
    sessionState,
    startSession,
    pauseSession,
    resumeSession,
    endSession,
    getFormattedDuration,
  };
};
