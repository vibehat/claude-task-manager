'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { CommandPaletteProps, CommandSuggestion } from '../types/workingOnTypes';
import { dummyCommandSuggestions } from '../data/dummyData';
import { cn } from '@/libs/client/utils';

const naturalLanguageToCommands: Record<string, CommandSuggestion[]> = {
  'what should i work on next': [
    {
      command: 'task-master next',
      description: 'Get the next available task to work on',
      confidence: 0.95,
      contextRelevant: true,
    },
  ],
  'show me what to work on next': [
    {
      command: 'task-master next',
      description: 'Get the next available task to work on',
      confidence: 0.95,
      contextRelevant: true,
    },
  ],
  'break down task': [
    {
      command: 'task-master expand --id=28.2',
      description: 'Break down task into subtasks',
      confidence: 0.88,
      contextRelevant: true,
    },
  ],
  'expand this task': [
    {
      command: 'task-master expand --id=28.2',
      description: 'Break down current task into subtasks',
      confidence: 0.9,
      contextRelevant: true,
    },
  ],
  'mark this complete': [
    {
      command: 'task-master set-status --id=28.2 --status=done',
      description: 'Mark current task as complete',
      confidence: 0.95,
      contextRelevant: true,
    },
  ],
  'this task is complete': [
    {
      command: 'task-master set-status --id=28.2 --status=done',
      description: 'Mark task as completed',
      confidence: 0.92,
      contextRelevant: true,
    },
  ],
  'show blocked tasks': [
    {
      command: 'task-master list --status=blocked',
      description: 'Show all blocked tasks',
      confidence: 0.85,
      contextRelevant: false,
    },
  ],
  'list all tasks': [
    {
      command: 'task-master list',
      description: 'Show all tasks',
      confidence: 0.9,
      contextRelevant: false,
    },
  ],
  'get task details': [
    {
      command: 'task-master show --id=28.2',
      description: 'View detailed information about current task',
      confidence: 0.85,
      contextRelevant: true,
    },
  ],
  'research jwt security': [
    {
      command: 'task-master research --prompt="JWT security best practices"',
      description: 'Research JWT security patterns and best practices',
      confidence: 0.92,
      contextRelevant: true,
    },
  ],
  'add context about': [
    {
      command: 'task-master update-subtask --id=28.2 --prompt="Additional context:"',
      description: 'Add context information to current task',
      confidence: 0.88,
      contextRelevant: true,
    },
  ],
};

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 0.9)
    return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
  if (confidence >= 0.8)
    return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
  return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
};

const recentCommands = [
  { query: 'break this task down further', command: 'task-master expand --id=28.2' },
  { query: 'mark this complete', command: 'task-master set-status --id=28.2 --status=done' },
  { query: 'show me blocked tasks', command: 'task-master list --status=blocked' },
];

export function CommandPalette({ isOpen, onClose, currentContext }: CommandPaletteProps) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<CommandSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Update suggestions based on input
  useEffect(() => {
    if (!input.trim()) {
      setSuggestions(dummyCommandSuggestions);
      return;
    }

    const query = input.toLowerCase().trim();
    let matchingSuggestions: CommandSuggestion[] = [];

    // Exact matches from natural language mapping
    if (naturalLanguageToCommands[query]) {
      matchingSuggestions = [...naturalLanguageToCommands[query]];
    }

    // Partial matches from natural language mapping
    Object.entries(naturalLanguageToCommands).forEach(([key, commands]) => {
      if (key.includes(query) || query.includes(key)) {
        matchingSuggestions.push(
          ...commands.map((cmd) => ({
            ...cmd,
            confidence: cmd.confidence * 0.8, // Reduce confidence for partial matches
          }))
        );
      }
    });

    // Add fuzzy matches from default suggestions
    const fuzzyMatches = dummyCommandSuggestions
      .filter(
        (suggestion) =>
          suggestion.command.toLowerCase().includes(query) ||
          suggestion.description.toLowerCase().includes(query)
      )
      .map((cmd) => ({ ...cmd, confidence: cmd.confidence * 0.7 }));

    matchingSuggestions.push(...fuzzyMatches);

    // Remove duplicates and sort by confidence
    const uniqueSuggestions = Array.from(
      new Map(matchingSuggestions.map((s) => [s.command, s])).values()
    ).sort((a, b) => b.confidence - a.confidence);

    setSuggestions(uniqueSuggestions);
    setSelectedIndex(0);
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions[selectedIndex]) {
        handleExecuteCommand(suggestions[selectedIndex].command);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleExecuteCommand = (command: string) => {
    console.log('Executing command:', command);
    // TODO: Implement actual command execution
    setInput('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl font-semibold">
            Command Palette - Natural Language to Task Master
          </DialogTitle>
        </DialogHeader>

        <div className="px-6">
          <div className="relative">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="what should i work on next"
              className="text-base py-3 pl-4 pr-12"
              autoComplete="off"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs bg-muted rounded">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Command Suggestions */}
        {suggestions.length > 0 && (
          <div className="px-6">
            <div className="mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                💡 Command Suggestions
              </span>
            </div>
            <ScrollArea className="h-64">
              <div className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={`${suggestion.command}-${index}`}
                    onClick={() => handleExecuteCommand(suggestion.command)}
                    className={cn(
                      'p-3 rounded-lg border cursor-pointer transition-all duration-200',
                      'hover:shadow-sm hover:border-primary/20',
                      index === selectedIndex && 'ring-2 ring-primary ring-offset-2 bg-primary/5'
                    )}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                        {suggestion.command}
                      </code>
                      <div className="flex items-center gap-2">
                        {suggestion.contextRelevant && (
                          <Badge variant="secondary" className="text-xs">
                            📍 Context
                          </Badge>
                        )}
                        <Badge className={cn('text-xs', getConfidenceColor(suggestion.confidence))}>
                          {Math.round(suggestion.confidence * 100)}%
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}

        {/* Smart Context Awareness */}
        {currentContext && (
          <div className="px-6 py-4 bg-muted/50">
            <div className="mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                🧠 Smart Context Awareness
              </span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">
              Based on current context (Task {currentContext.taskId} active):
            </div>
            <div className="space-y-2">
              <div className="p-2 bg-background rounded border">
                <div className="flex items-center justify-between">
                  <code className="text-xs font-mono">"add context about security"</code>
                  <Button variant="outline" size="sm" className="text-xs">
                    💡 task-master research --prompt="JWT security best practices"
                  </Button>
                </div>
              </div>
              <div className="p-2 bg-background rounded border">
                <div className="flex items-center justify-between">
                  <code className="text-xs font-mono">"i'm stuck on this"</code>
                  <Button variant="outline" size="sm" className="text-xs">
                    💡 task-master update-subtask --id={currentContext.taskId} --prompt="stuck
                    on..."
                  </Button>
                </div>
              </div>
              <div className="p-2 bg-background rounded border">
                <div className="flex items-center justify-between">
                  <code className="text-xs font-mono">"create a subtask for testing"</code>
                  <Button variant="outline" size="sm" className="text-xs">
                    💡 task-master add-subtask --id={currentContext.taskId} --title="Add unit tests"
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Commands */}
        <div className="px-6 py-4 border-t bg-muted/30">
          <div className="mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Recent Natural Language Commands:
            </span>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            {recentCommands.map((recent, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>• "{recent.query}"</span>
                <span>→</span>
                <code className="bg-muted px-1 py-0.5 rounded font-mono">{recent.command}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t bg-background flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              Learn from Usage
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              View Task Master Docs
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
              Cancel
            </Button>
            {suggestions.length > 0 && (
              <Button
                size="sm"
                onClick={() => handleExecuteCommand(suggestions[selectedIndex]?.command)}
                className="text-xs"
              >
                Execute
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
