'use client';

import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { AgentBrowser } from '@/features/agents/components/AgentBrowser';

export default function AgentsPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <AgentBrowser />
    </WorkspaceLayout>
  );
}
