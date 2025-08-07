'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { HandoffInterfaceProps, HandoffMethod } from '../types/workingOnTypes';
import {
  buildTaskContext,
  formatContextForClipboard,
  formatContextForFile,
} from '../utils/contextBuilder';
import { dummyContextItems } from '../data/dummyData';
import { cn } from '@/libs/client/utils';

const handoffMethods = [
  {
    id: 'direct' as HandoffMethod,
    title: 'Direct Integration (Recommended)',
    description: 'Opens Claude Code with task context and related files',
    icon: '🚀',
    recommended: true,
  },
  {
    id: 'clipboard' as HandoffMethod,
    title: 'Copy Context to Clipboard',
    description: 'Formatted prompt ready to paste into any AI tool',
    icon: '📋',
    recommended: false,
  },
  {
    id: 'file' as HandoffMethod,
    title: 'Save Context File',
    description: 'Creates .claude-context.md with all relevant information',
    icon: '💾',
    recommended: false,
  },
];

export function HandoffInterface({ task, isOpen, onClose, onHandoff }: HandoffInterfaceProps) {
  const [selectedMethod, setSelectedMethod] = useState<HandoffMethod>('direct');
  const [contextPreviewExpanded, setContextPreviewExpanded] = useState(false);

  if (!isOpen || !task) return null;

  // Build context for the task
  const relatedContext = dummyContextItems.filter((item) => item.relatedTasks.includes(task.id));
  const handoffContext = buildTaskContext(task, relatedContext);

  const handleHandoff = async () => {
    try {
      switch (selectedMethod) {
        case 'direct':
          console.log('Opening Claude Code with context...');
          // TODO: Implement direct Claude Code integration
          break;

        case 'clipboard':
          const clipboardContent = formatContextForClipboard(handoffContext);
          await navigator.clipboard.writeText(clipboardContent);
          console.log('Context copied to clipboard');
          break;

        case 'file':
          const { filename, content } = formatContextForFile(handoffContext, task);
          // Create and download file
          const blob = new Blob([content], { type: 'text/markdown' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          a.click();
          URL.revokeObjectURL(url);
          console.log('Context file saved');
          break;
      }

      onHandoff(selectedMethod);
      onClose();
    } catch (error) {
      console.error('Handoff error:', error);
    }
  };

  const renderStars = (quality: number, max = 5) => {
    return Array.from({ length: max }, (_, i) => (
      <span key={i} className={i < quality ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-xl font-semibold">
            Handoff to AI - Task {task.id}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <div className="p-6 space-y-6">
            {/* Handoff Method Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📡 Handoff Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {handoffMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={cn(
                        'p-4 border rounded-lg cursor-pointer transition-all duration-200',
                        'hover:shadow-md hover:border-primary/20',
                        selectedMethod === method.id &&
                          'ring-2 ring-primary ring-offset-2 bg-primary/5',
                        method.recommended && 'bg-blue-50/50 dark:bg-blue-900/10'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            'w-4 h-4 rounded-full border-2',
                            selectedMethod === method.id
                              ? 'bg-primary border-primary'
                              : 'border-muted-foreground'
                          )}
                        />
                        <span className="text-2xl">{method.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{method.title}</span>
                            {method.recommended && (
                              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 text-xs">
                                Recommended
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Context Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📋 Context Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm font-medium mb-1">📋 Task:</div>
                    <div className="text-sm text-muted-foreground">{task.title}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">🎯 Priority:</div>
                    <Badge
                      className={cn(
                        'text-xs',
                        task.priority === 'high' &&
                          'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
                        task.priority === 'medium' &&
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
                        task.priority === 'low' &&
                          'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                      )}
                    >
                      {task.priority.toUpperCase()}
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium mb-1">⏱️ Estimated Time:</div>
                  <div className="text-sm text-muted-foreground">{task.estimatedTime}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">📁 Context Includes:</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Task requirements and acceptance criteria</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Related files and existing patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Dependencies and blocked tasks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Implementation notes and research</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">📊 Context Quality:</span>
                    <div className="flex items-center gap-1">
                      {renderStars(task.contextQuality)}
                      <span className="text-sm">({task.contextQuality}/5)</span>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Ready for AI implementation
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Context Preview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    👀 Preview Generated Context ({handoffContext.tokenCount} tokens)
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setContextPreviewExpanded(!contextPreviewExpanded)}
                  >
                    {contextPreviewExpanded ? 'Collapse' : 'View Full Context'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className={contextPreviewExpanded ? 'h-64' : 'h-32'}>
                  <pre className="text-xs bg-muted p-3 rounded overflow-x-auto whitespace-pre-wrap">
                    {contextPreviewExpanded
                      ? handoffContext.generatedContext
                      : handoffContext.generatedContext.slice(0, 500) + '...'}
                  </pre>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t bg-background flex justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Context ready for handoff</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose}>
              Back
            </Button>
            <Button onClick={handleHandoff} className="gap-2">
              {selectedMethod === 'direct' && '🚀'}
              {selectedMethod === 'clipboard' && '📋'}
              {selectedMethod === 'file' && '💾'}
              {selectedMethod === 'direct'
                ? 'Hand to AI'
                : selectedMethod === 'clipboard'
                  ? 'Copy Context'
                  : 'Save File'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
