'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw, X } from 'lucide-react';
import { cn } from '@/libs/client/utils';
import type { WorkflowSectionProps, WorkflowAction, SmartWorkflowSuggestion } from '../../types';

function WorkflowItem({
  title,
  description,
  id,
  onAction,
  onDismiss,
  actionLabel,
  completed = false,
}: {
  title: string;
  description: string;
  id: string;
  onAction: (id: string) => void;
  onDismiss: (id: string) => void;
  actionLabel: string;
  completed?: boolean;
}): React.JSX.Element {
  return (
    <div
      className={cn('p-3 rounded-lg border border-border bg-muted/30', completed && 'opacity-60')}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <h3
            className={cn('font-medium text-sm text-foreground mb-1', completed && 'line-through')}
          >
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDismiss(id)}
          className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <Button variant="outline" size="sm" onClick={() => onAction(id)} disabled={completed}>
        {actionLabel}
      </Button>
    </div>
  );
}

export function WorkflowSection({
  workflowActions,
  smartSuggestions,
  projectState,
  onActionToggle,
  onAddAction,
  onRefresh,
  onExecuteWorkflow,
  onDismissSuggestion,
}: WorkflowSectionProps): React.JSX.Element {
  const totalItems = smartSuggestions.length + workflowActions.length;
  const pendingCount = workflowActions.filter((action) => !action.completed).length;

  return (
    <Card className="bg-card border border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">Workflow</CardTitle>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={onRefresh} className="h-8 w-8 p-0">
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onAddAction} className="h-8 w-8 p-0">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Progress Summary */}
        {totalItems > 0 && <div className="text-sm text-muted-foreground">{totalItems} items</div>}
      </CardHeader>

      <CardContent className="space-y-2">
        {/* All Workflow Items */}
        {smartSuggestions.map((suggestion) => (
          <WorkflowItem
            key={suggestion.id}
            id={suggestion.id}
            title={suggestion.title}
            description={suggestion.description}
            onAction={onExecuteWorkflow}
            onDismiss={onDismissSuggestion}
            actionLabel="Execute"
          />
        ))}

        {workflowActions.map((action) => (
          <WorkflowItem
            key={action.id}
            id={action.id}
            title={action.action}
            description={action.description}
            onAction={onActionToggle}
            onDismiss={() => {}}
            actionLabel="Done"
            completed={action.completed}
          />
        ))}

        {/* Empty State */}
        {smartSuggestions.length === 0 && workflowActions.length === 0 && (
          <div className="text-center py-6 text-muted-foreground">
            <p className="text-sm mb-3">No workflow items</p>
            <Button variant="outline" size="sm" onClick={onAddAction}>
              <Plus className="w-3 h-3 mr-1" />
              Add Action
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default WorkflowSection;
