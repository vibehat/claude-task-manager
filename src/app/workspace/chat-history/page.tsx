'use client';

import { MessageSquare } from 'lucide-react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { ComingSoon } from '@/components/layout/ComingSoon';

export default function ChatHistoryPage(): React.JSX.Element {
  return (
    <WorkspaceLayout>
      <ComingSoon
        title="Chat History"
        description="Access to your previous conversations and context with AI assistants"
        icon={MessageSquare}
        plannedFeatures={[
          'Searchable conversation history across all AI sessions',
          'Context preservation and conversation threading',
          'Important conversation bookmarking and tagging',
          'Code snippet and solution extraction from chats',
          'Integration with task documentation and notes',
          'Privacy controls and conversation management',
        ]}
        timeline="Phase 4 - Week 7"
        alternativeLinks={[
          {
            title: 'Terminal',
            description: 'Access Task Master CLI for AI interactions',
            url: '/workspace/terminal',
          },
        ]}
      />
    </WorkspaceLayout>
  );
}
