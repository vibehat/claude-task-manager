'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/empty-states';
import { WorkflowItem, type WorkflowItemData } from '@/components/ui/WorkflowItem';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/TooltipProvider';
import {
  Plus,
  RefreshCw,
  X,
  Brain,
  Lightbulb,
  Rocket,
  Pause,
  ArrowRight,
  CheckCircle,
  Target,
} from 'lucide-react';
import { cn } from '@/libs/client/utils';
import { workflowEngine } from '../../utils/workflowEngine';
import type { WorkflowSectionProps, WorkflowAction, SmartWorkflowSuggestion } from '../../types';

// Helper function to convert workflow action to WorkflowItemData
function convertToWorkflowItemData(action: any): WorkflowItemData {
  return {
    id: action.id,
    title: action.action || action.title,
    description: action.description,
    completed: action.completed || false,
  };
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

  // Generate contextual smart suggestions using the workflow engine
  const contextualSuggestions = useMemo(() => {
    return workflowEngine.generateSuggestions(projectState);
  }, [projectState]);

  // Determine the workflow state and primary action
  const getWorkflowState = () => {
    if (!projectState.currentTask && projectState.taskQueue.length === 0) {
      return {
        state: 'empty',
        primaryAction: 'Start',
        icon: Rocket,
        contextualHelp: 'No active tasks - Start by parsing your PRD',
      };
    }

    if (projectState.currentTask?.status === 'in-progress') {
      return {
        state: 'working',
        primaryAction: 'Go',
        icon: ArrowRight,
        contextualHelp: `Continue working on ${projectState.currentTask.title}`,
      };
    }

    if (pendingCount === 0 && workflowActions.some((a) => a.completed)) {
      return {
        state: 'completed',
        primaryAction: 'Finish',
        icon: CheckCircle,
        contextualHelp: 'Mark complete and find next task',
      };
    }

    return {
      state: 'ready',
      primaryAction: 'Go',
      icon: ArrowRight,
      contextualHelp: 'Ready to implement - Start working on features',
    };
  };

  const workflowState = getWorkflowState();
  const StateIcon = workflowState.icon;

  // Combine all workflow items with proper categorization
  const coreWorkflowActions = [
    {
      id: 'next-task',
      title: 'Next Task',
      description: 'Get the next available task',
      type: 'workflow' as const,
      priority: 'high' as const,
      category: 'smart' as const,
      completed: false,
      action: 'Next Task',
    },
    {
      id: 'plan-work',
      title: 'Plan Work',
      description: 'Organize and break down work',
      type: 'planning' as const,
      priority: 'medium' as const,
      category: 'smart' as const,
      completed: false,
      action: 'Plan Work',
    },
    {
      id: 'code-feature',
      title: 'Code Feature',
      description: 'Ready to implement',
      type: 'implementation' as const,
      priority: 'high' as const,
      category: 'smart' as const,
      completed: false,
      action: 'Code Feature',
    },
    {
      id: 'fix-issues',
      title: 'Fix Issues',
      description: 'Debug errors and resolve blockers',
      type: 'maintenance' as const,
      priority: 'high' as const,
      category: 'smart' as const,
      completed: false,
      action: 'Fix Issues',
    },
    {
      id: 'review-test',
      title: 'Review & Test',
      description: 'Validate work and mark complete',
      type: 'review' as const,
      priority: 'medium' as const,
      category: 'smart' as const,
      completed: false,
      action: 'Review & Test',
    },
  ];

  const handleSmartWorkflow = () => {
    // Execute the top contextual suggestion or show smart workflow dialog
    if (contextualSuggestions.length > 0) {
      onExecuteWorkflow(contextualSuggestions[0].id);
    } else {
      // Fallback to general workflow guidance
      onExecuteWorkflow('smart-workflow-guide');
    }
  };

  return (
    <Card className="bg-card border border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">Workflow</CardTitle>
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={onRefresh} className="h-8 w-8 p-0">
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Refresh workflow suggestions</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={onAddAction} className="h-8 w-8 p-0">
                  <Plus className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Add custom workflow action</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Smart Workflow Button */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 p-4 h-auto text-left bg-accent/30 hover:bg-accent/50 border-accent"
            onClick={handleSmartWorkflow}
          >
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-accent-foreground" />
              <Lightbulb className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm">Start Smart Workflow</div>
              <div className="text-xs text-muted-foreground truncate">
                {workflowState.contextualHelp}
              </div>
            </div>
          </Button>
        </div>

        {/* Core Workflow Actions */}
        <div className="space-y-2">
          {coreWorkflowActions.map((action) => (
            <WorkflowItem
              key={action.id}
              item={convertToWorkflowItemData(action)}
              onAction={onActionToggle}
              actionLabel="☐"
              variant="compact"
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2">
          <Button
            variant={workflowState.state === 'completed' ? 'default' : 'outline'}
            size="sm"
            className="flex-1 gap-2"
            onClick={() => onActionToggle('primary-action')}
          >
            <StateIcon className="w-4 h-4" />
            {workflowState.primaryAction}
          </Button>
          {workflowState.state === 'working' && (
            <Button variant="ghost" size="sm" onClick={() => onActionToggle('pause-action')}>
              <Pause className="w-4 h-4" />
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={onRefresh}>
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>

        {/* Empty State */}
        {coreWorkflowActions.length === 0 && (
          <EmptyState
            icon={<Target className="w-4 h-4 text-muted-foreground opacity-50" />}
            title="No workflow items"
            action={{
              label: 'Add Action',
              onClick: onAddAction,
              variant: 'outline',
              size: 'sm',
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}

export default WorkflowSection;
