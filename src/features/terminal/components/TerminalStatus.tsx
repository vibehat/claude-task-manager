'use client';

import React from 'react';
import { Terminal, Wifi, WifiOff, AlertCircle, RotateCcw } from 'lucide-react';
import type { TerminalStatusProps } from '../types/terminal';
import { TerminalConnectionStatus } from '../types/terminal';
import { Button } from '@/components/ui/button';
import { cn } from '@/libs/client/utils';

export function TerminalStatus({ status, session, error, onReconnect }: TerminalStatusProps) {
  const getStatusInfo = () => {
    switch (status) {
      case TerminalConnectionStatus.CONNECTED:
        return {
          icon: <Wifi className="h-4 w-4" />,
          text: 'Connected',
          color: 'text-green-600 dark:text-green-400',
          bgColor: 'bg-green-50 dark:bg-green-900/20',
        };
      case TerminalConnectionStatus.CONNECTING:
        return {
          icon: (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          ),
          text: 'Connecting...',
          color: 'text-blue-600 dark:text-blue-400',
          bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        };
      case TerminalConnectionStatus.RECONNECTING:
        return {
          icon: (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
          ),
          text: 'Reconnecting...',
          color: 'text-yellow-600 dark:text-yellow-400',
          bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        };
      case TerminalConnectionStatus.ERROR:
        return {
          icon: <AlertCircle className="h-4 w-4" />,
          text: 'Connection Error',
          color: 'text-red-600 dark:text-red-400',
          bgColor: 'bg-red-50 dark:bg-red-900/20',
        };
      default:
        return {
          icon: <WifiOff className="h-4 w-4" />,
          text: 'Disconnected',
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-50 dark:bg-gray-900/20',
        };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div
      className={cn(
        'flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700',
        statusInfo.bgColor
      )}
    >
      <div className="flex items-center space-x-3">
        <Terminal className="h-4 w-4 text-gray-600 dark:text-gray-400" />

        <div className="flex items-center space-x-2">
          {statusInfo.icon}
          <span className={cn('text-sm font-medium', statusInfo.color)}>{statusInfo.text}</span>
        </div>

        {session && (
          <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
            <span>•</span>
            <span>{session.shell}</span>
            <span>•</span>
            <span>{session.platform}</span>
            {session.cwd && (
              <>
                <span>•</span>
                <span className="font-mono">{session.cwd}</span>
              </>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        {error && (
          <div className="flex items-center space-x-2 text-xs text-red-600 dark:text-red-400">
            <AlertCircle className="h-3 w-3" />
            <span>{error}</span>
          </div>
        )}

        {(status === TerminalConnectionStatus.ERROR ||
          status === TerminalConnectionStatus.DISCONNECTED) &&
          onReconnect && (
            <Button size="sm" variant="outline" onClick={onReconnect} className="h-7 px-2 text-xs">
              <RotateCcw className="h-3 w-3 mr-1" />
              Reconnect
            </Button>
          )}
      </div>
    </div>
  );
}

export default TerminalStatus;
