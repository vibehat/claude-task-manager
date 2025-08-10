'use client';

import React from 'react';
import type { RightPanelProps } from '../../types';
import { WorkflowSection } from '../WorkflowSection/WorkflowSection';
import { QuickActionsSection } from '../QuickActionsSection/QuickActionsSection';
import { ARIA_LABELS } from '../../utils/accessibility';

export function RightPanel({
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
}: RightPanelProps): React.JSX.Element {
  return (
    <aside
      className="xl:col-span-3 xl:flex xl:flex-col xl:gap-6 hidden xl:block"
      role="complementary"
      aria-label="Workflow and quick actions panel"
    >
      <section
        role="region"
        aria-label={ARIA_LABELS.workflowPanel}
        aria-describedby="workflow-help"
      >
        <div id="workflow-help" className="sr-only">
          AI-suggested workflow actions. Use Space to toggle completion, or Tab to navigate.
        </div>
        <WorkflowSection
          workflowActions={workflowActions}
          smartSuggestions={smartSuggestions}
          projectState={projectState}
          onActionToggle={onActionToggle}
          onAddAction={onAddAction}
          onRefresh={onRefresh}
          onExecuteWorkflow={onExecuteWorkflow}
          onDismissSuggestion={onDismissSuggestion}
        />
      </section>

      <section
        role="region"
        aria-label={ARIA_LABELS.quickActions}
        aria-describedby="quick-actions-help"
      >
        <div id="quick-actions-help" className="sr-only">
          Quick action shortcuts. Each button shows its keyboard shortcut when available.
        </div>
        <QuickActionsSection actions={quickActions} onActionClick={onQuickActionClick} />
      </section>
    </aside>
  );
}

export default RightPanel;
