'use client';

import { CheckSquare } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function ToDoPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="To Do"
        description="Tasks waiting for you, sorted by what matters most"
        icon={CheckSquare}
        plannedFeatures={[
          'Intelligent prioritization based on dependencies and deadlines',
          'Clean, distraction-free task list view',
          'Quick task details preview without leaving the list',
          'Bulk actions for task management',
          'Smart filtering by priority, project, and tags',
          'Quick task creation with minimal friction',
        ]}
        timeline="Phase 1 - Week 3"
        alternativeLinks={[
          {
            title: 'Current Tasks',
            description: 'View tasks for current tag',
            url: '/workspace/current-tasks',
          },
          {
            title: 'All Tasks',
            description: 'Browse and manage all tasks',
            url: '/workspace/tasks',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
