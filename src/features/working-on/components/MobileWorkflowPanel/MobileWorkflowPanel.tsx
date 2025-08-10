'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Lightbulb, Plus } from 'lucide-react';
import type { MobileWorkflowPanelProps } from '../../types';
import { ARIA_LABELS } from '../../utils/accessibility';

export function MobileWorkflowPanel({
  workflowActions,
  smartSuggestions,
  projectState,
  quickActions,
  onActionToggle,
  onAddAction,
  onRefresh,
  onExecuteWorkflow,
  onDismissSuggestion,
  onQuickActionClick,
}: MobileWorkflowPanelProps): React.JSX.Element {
  return (
    <section
      className="xl:hidden space-y-4"
      role="region"
      aria-label="Mobile workflow and actions panel"
    >
      <Card
        className="bg-card border border-border"
        role="region"
        aria-label={ARIA_LABELS.workflowPanel}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" aria-hidden="true" />
              Workflow Panel
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={onAddAction}
              aria-label="Add new workflow action"
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Add Action</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div role="list" aria-label="Workflow actions" className="space-y-2">
            {workflowActions
              .filter((a) => !a.completed)
              .slice(0, 6)
              .map((action) => (
                <div
                  key={action.id}
                  role="listitem"
                  className="flex items-center gap-3 p-2 rounded border border-border hover:bg-muted cursor-pointer focus-within:bg-muted"
                  onClick={() => onActionToggle(action.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onActionToggle(action.id);
                    }
                  }}
                  tabIndex={0}
                  aria-label={ARIA_LABELS.workflowAction(action.action)}
                >
                  <Checkbox
                    checked={action.completed}
                    aria-describedby={`action-${action.id}-desc`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{action.action}</p>
                    <p
                      id={`action-${action.id}-desc`}
                      className="text-xs text-muted-foreground truncate"
                    >
                      {action.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      <Card
        className="bg-card border border-border"
        role="region"
        aria-label={ARIA_LABELS.quickActions}
      >
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold text-foreground">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <nav
            role="navigation"
            aria-label={ARIA_LABELS.quickNavigation}
            className="grid grid-cols-4 gap-2"
          >
            {quickActions.slice(0, 8).map((action) => (
              <Button
                key={action.id}
                variant="outline"
                size="sm"
                className="h-16 flex flex-col items-center gap-1 p-2"
                onClick={() => onQuickActionClick(action.id)}
                aria-label={`${action.label}${action.shortcut ? ` (${action.shortcut})` : ''}`}
              >
                <span className="text-sm" aria-hidden="true">
                  {action.icon}
                </span>
                <span className="text-xs text-center leading-tight">
                  {action.label.split(' ')[0]}
                </span>
              </Button>
            ))}
          </nav>
        </CardContent>
      </Card>
    </section>
  );
}

export default MobileWorkflowPanel;
