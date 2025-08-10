'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Command } from 'lucide-react';
import type { QuickActionsSectionProps } from '../../types';

export function QuickActionsSection({
  actions,
  onActionClick,
}: QuickActionsSectionProps): React.JSX.Element {
  return (
    <Card className="bg-card border border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {/* Actions List */}
        {actions.length > 0 ? (
          <div className="space-y-1">
            {actions.map((action) => (
              <Button
                key={action.id}
                variant="ghost"
                className="w-full h-auto p-3 flex items-center justify-between hover:bg-muted transition-colors"
                onClick={() => onActionClick(action.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{action.icon}</span>
                  <span className="font-medium text-sm">{action.label}</span>
                </div>
                {action.shortcut && (
                  <kbd className="px-2 py-1 text-xs font-mono bg-muted rounded border text-muted-foreground">
                    {action.shortcut}
                  </kbd>
                )}
              </Button>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-muted-foreground">
            <div className="w-8 h-8 mx-auto mb-2 bg-muted rounded-full flex items-center justify-center">
              <span className="text-muted-foreground">⚡</span>
            </div>
            <p className="text-sm">No quick actions available</p>
          </div>
        )}

        {/* Command Palette */}
        <div className="pt-2 border-t border-border">
          <Button
            variant="ghost"
            className="w-full h-auto p-3 flex items-center justify-between hover:bg-muted transition-colors"
            onClick={() => onActionClick('command-palette')}
          >
            <div className="flex items-center gap-3">
              <Command className="w-4 h-4" />
              <span className="font-medium text-sm">Command Palette</span>
            </div>
            <kbd className="px-2 py-1 text-xs font-mono bg-muted rounded border text-muted-foreground">
              ⌘K
            </kbd>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default QuickActionsSection;
