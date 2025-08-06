'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ContextViewProps } from '../types/workingOnTypes';
import { useWorkingOnStore } from '../store/workingOnStore';
import { dummyContextItems } from '../data/dummyData';

const getContextTypeIcon = (type: string) => {
  switch (type) {
    case 'documentation':
      return '📚';
    case 'note':
      return '📝';
    case 'research':
      return '🔍';
    case 'decision':
      return '🤔';
    default:
      return '📄';
  }
};

const getContextTypeColor = (type: string) => {
  switch (type) {
    case 'documentation':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
    case 'note':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
    case 'research':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
    case 'decision':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
  }
};

const formatTimeAgo = (timestamp: string) => {
  const now = new Date();
  const time = new Date(timestamp);
  const diffHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));

  if (diffHours < 1) return 'just now';
  if (diffHours < 24) return `${diffHours}h ago`;
  return time.toLocaleDateString();
};

export function ContextView({ taskId, isOpen, onClose }: ContextViewProps) {
  const [selectedTab, setSelectedTab] = useState('documentation');
  const { getTaskById, getContextByTaskId } = useWorkingOnStore();

  const task = getTaskById(taskId);
  const relatedContextItems = dummyContextItems.filter((item) =>
    item.relatedTasks.includes(taskId)
  );

  if (!task) {
    return null;
  }

  const documentationItems = relatedContextItems.filter((item) => item.type === 'documentation');
  const noteItems = relatedContextItems.filter((item) => item.type === 'note');
  const researchItems = relatedContextItems.filter((item) => item.type === 'research');
  const decisionItems = relatedContextItems.filter((item) => item.type === 'decision');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-xl font-semibold">
            Context View - Task {task.id}: {task.title}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="h-full flex flex-col">
            <div className="px-6 pt-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="documentation" className="text-xs">
                  📚 Docs ({documentationItems.length})
                </TabsTrigger>
                <TabsTrigger value="notes" className="text-xs">
                  📝 Notes ({noteItems.length})
                </TabsTrigger>
                <TabsTrigger value="related" className="text-xs">
                  🔗 Related
                </TabsTrigger>
                <TabsTrigger value="activity" className="text-xs">
                  📊 Activity
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-hidden">
              <TabsContent value="documentation" className="h-full p-0">
                <ScrollArea className="h-full px-6 pb-6">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">📚 Related Documentation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-sm mb-2">🏗️ Project Docs:</h4>
                            <div className="space-y-2">
                              {documentationItems.map((item) => (
                                <div
                                  key={item.id}
                                  className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                                >
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-sm">• {item.title}</span>
                                    <Badge className={getContextTypeColor(item.type)}>
                                      {getContextTypeIcon(item.type)} {item.type}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-muted-foreground mb-2">
                                    {item.content}
                                  </p>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span>Created: {formatTimeAgo(item.createdAt)}</span>
                                    <span>•</span>
                                    <span>Tags: {item.tags.join(', ')}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-sm mb-2">🔗 External References:</h4>
                            <div className="space-y-2 text-sm">
                              <div className="p-2 border rounded hover:bg-muted/50 cursor-pointer">
                                <span className="text-blue-600 dark:text-blue-400 hover:underline">
                                  • RFC 7519: JSON Web Token (JWT)
                                </span>
                              </div>
                              <div className="p-2 border rounded hover:bg-muted/50 cursor-pointer">
                                <span className="text-blue-600 dark:text-blue-400 hover:underline">
                                  • OWASP JWT Security Cheat Sheet
                                </span>
                              </div>
                              <div className="p-2 border rounded hover:bg-muted/50 cursor-pointer">
                                <span className="text-blue-600 dark:text-blue-400 hover:underline">
                                  • Node.js jsonwebtoken library docs
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="notes" className="h-full p-0">
                <ScrollArea className="h-full px-6 pb-6">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">📝 Related Notes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-sm mb-2">📋 Recent Notes:</h4>
                            <div className="space-y-2">
                              {[...noteItems, ...researchItems, ...decisionItems].map((item) => (
                                <div
                                  key={item.id}
                                  className="p-3 border rounded-lg hover:bg-muted/50"
                                >
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-sm">
                                      {getContextTypeIcon(item.type)} {item.title}
                                    </span>
                                    <Badge className={getContextTypeColor(item.type)}>
                                      {item.type}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {item.content}
                                  </p>
                                  <div className="text-xs text-muted-foreground">
                                    {formatTimeAgo(item.createdAt)} • Tags: {item.tags.join(', ')}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-sm mb-2">💡 Implementation Ideas:</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start gap-2 p-2">
                                <span>•</span>
                                <span>
                                  Environment-based key management for different deployment stages
                                </span>
                              </div>
                              <div className="flex items-start gap-2 p-2">
                                <span>•</span>
                                <span>
                                  Token blacklisting mechanism for secure logout functionality
                                </span>
                              </div>
                              <div className="flex items-start gap-2 p-2">
                                <span>•</span>
                                <span>Automatic key rotation strategy with graceful fallback</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="related" className="h-full p-0">
                <ScrollArea className="h-full px-6 pb-6">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">🔗 Related Tasks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {task.dependencies.length > 0 && (
                            <div>
                              <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                                🔗 Dependencies:
                              </h4>
                              <div className="space-y-1">
                                {task.dependencies.map((depId) => (
                                  <div
                                    key={depId}
                                    className="flex items-center gap-2 p-2 border rounded"
                                  >
                                    <span className="text-green-600 dark:text-green-400">✅</span>
                                    <span className="text-sm">
                                      Task {depId} - Set up authentication middleware structure
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {task.blockedTasks.length > 0 && (
                            <div>
                              <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                                ➡️ Blocked Tasks:
                              </h4>
                              <div className="space-y-1">
                                {task.blockedTasks.map((blockedId) => (
                                  <div
                                    key={blockedId}
                                    className="flex items-center gap-2 p-2 border rounded bg-red-50/50 dark:bg-red-900/10"
                                  >
                                    <span className="text-red-600 dark:text-red-400">🚫</span>
                                    <span className="text-sm">
                                      Task {blockedId} -{' '}
                                      {blockedId === '28.3'
                                        ? 'Create JWT endpoints'
                                        : 'Implement refresh token mechanism'}{' '}
                                      (waiting for {task.id})
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div>
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                              🏷️ Related:
                            </h4>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 p-2 border rounded hover:bg-muted/50 cursor-pointer">
                                <span>•</span>
                                <span className="text-sm">29.1 User registration endpoint</span>
                              </div>
                              <div className="flex items-center gap-2 p-2 border rounded hover:bg-muted/50 cursor-pointer">
                                <span>•</span>
                                <span className="text-sm">30.2 Role-based access control</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="activity" className="h-full p-0">
                <ScrollArea className="h-full px-6 pb-6">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">📊 Activity Feed & Next Steps</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-sm mb-2">🕒 Recent Activity:</h4>
                            <div className="space-y-2">
                              <div className="flex items-start gap-3 p-2 border-l-2 border-blue-500 pl-3">
                                <span className="text-xs text-muted-foreground">15:42</span>
                                <span className="text-sm">
                                  Research: JWT security best practices
                                </span>
                              </div>
                              <div className="flex items-start gap-3 p-2 border-l-2 border-green-500 pl-3">
                                <span className="text-xs text-muted-foreground">15:35</span>
                                <span className="text-sm">Note: Decided on RS256 over HS256</span>
                              </div>
                              <div className="flex items-start gap-3 p-2 border-l-2 border-yellow-500 pl-3">
                                <span className="text-xs text-muted-foreground">15:20</span>
                                <span className="text-sm">
                                  Task updated: Added performance requirements
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-sm mb-2">📈 Progress Tracking:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">✅</span>
                                <span className="text-sm">Context gathering: Complete</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">✅</span>
                                <span className="text-sm">Requirements analysis: Complete</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-blue-600 dark:text-blue-400">🔄</span>
                                <span className="text-sm">Implementation: In Progress (60%)</span>
                              </div>
                            </div>
                          </div>

                          <Card className="bg-blue-50 dark:bg-blue-900/10">
                            <CardHeader>
                              <CardTitle className="text-base">💡 Next Steps Suggestions</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                                  <div className="flex items-start gap-2">
                                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                                      🚀
                                    </span>
                                    <div>
                                      <div className="font-medium text-sm">
                                        Continue Implementation
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        Resume AI session to complete token generation utilities
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                                  <div className="flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400 mt-0.5">
                                      📖
                                    </span>
                                    <div>
                                      <div className="font-medium text-sm">
                                        Review Existing Patterns
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        Study middleware/auth.ts for consistency
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                                  <div className="flex items-start gap-2">
                                    <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                                      🧪
                                    </span>
                                    <div>
                                      <div className="font-medium text-sm">
                                        Set Up Test Framework
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        Create test structure before completing implementation
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t bg-background flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              📝 Add Note
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              🔍 Research
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              🚀 Hand to AI
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
              🔄 Refresh
            </Button>
            <Button onClick={onClose} className="text-xs">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
