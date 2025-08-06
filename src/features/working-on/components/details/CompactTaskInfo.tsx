'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { FileText, TestTube, ChevronDown, ChevronUp } from 'lucide-react';
import type { TaskMasterTask } from '@/libs/client/types';

interface CompactTaskInfoProps {
  task: TaskMasterTask;
  variant: 'mobile' | 'desktop';
}

/**
 * Compact markdown viewer for task content
 * Simplified version without full editing capabilities for the Working On context
 */
const CompactMarkdownViewer: React.FC<{ content: string; maxLines?: number }> = ({
  content,
  maxLines = 5,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = content.split('\n').length > maxLines;

  const displayContent =
    shouldTruncate && !isExpanded
      ? content.split('\n').slice(0, maxLines).join('\n') + '...'
      : content;

  return (
    <div className="space-y-2">
      <div className="text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
        {displayContent || <span className="italic">No content provided</span>}
      </div>

      {shouldTruncate && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs flex items-center gap-1 p-0 h-auto text-primary hover:text-primary/80"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-3 w-3" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="h-3 w-3" />
              Show more
            </>
          )}
        </Button>
      )}
    </div>
  );
};

/**
 * Compact Task Info component adapted from TaskInfoSection
 * Provides read-only view of task description, details, and test strategy
 * Optimized for the Working On page's focused workflow
 */
export const CompactTaskInfo: React.FC<CompactTaskInfoProps> = ({ task, variant }) => {
  const isMobile = variant === 'mobile';

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Task Information</Label>
      </div>

      <div className="space-y-4">
        {/* Description Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-blue-500" />
            <Label className="text-sm font-medium text-blue-600">Description</Label>
          </div>
          <div className={`rounded-lg p-3 bg-muted/30 ${isMobile ? 'text-sm' : ''}`}>
            <CompactMarkdownViewer content={task.description || ''} maxLines={isMobile ? 3 : 5} />
          </div>
        </div>

        {/* Implementation Details Section */}
        {task.details && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-green-500" />
              <Label className="text-sm font-medium text-green-600">Implementation Details</Label>
            </div>
            <div className={`rounded-lg p-3 bg-muted/30 ${isMobile ? 'text-sm' : ''}`}>
              <CompactMarkdownViewer content={task.details} maxLines={isMobile ? 3 : 5} />
            </div>
          </div>
        )}

        {/* Test Strategy Section */}
        {task.testStrategy && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TestTube className="h-4 w-4 text-orange-500" />
              <Label className="text-sm font-medium text-orange-600">Test Strategy</Label>
            </div>
            <div className={`rounded-lg p-3 bg-muted/30 ${isMobile ? 'text-sm' : ''}`}>
              <CompactMarkdownViewer content={task.testStrategy} maxLines={isMobile ? 3 : 5} />
            </div>
          </div>
        )}

        {/* Empty state when no additional info */}
        {!task.details && !task.testStrategy && (
          <div className="text-center py-4 text-muted-foreground text-sm">
            <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>Additional task details will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompactTaskInfo;
