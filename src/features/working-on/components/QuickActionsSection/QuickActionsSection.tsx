'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/empty-states';
import { KbdShortcut } from '@/components/ui/KbdShortcut';
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
                {action.shortcut && <KbdShortcut keys={action.shortcut} size="sm" />}
              </Button>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<span className="text-muted-foreground">⚡</span>}
            title="No quick actions available"
          />
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
            <KbdShortcut keys="⌘K" size="sm" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default QuickActionsSection;
