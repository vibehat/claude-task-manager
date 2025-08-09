import React from 'react';
import { ContextIntelligenceHeader } from './ContextIntelligenceHeader';
import { ContextSidebar } from '../sidebar/ContextSidebar';
import { MainOrchestrationArea } from './MainOrchestrationArea';

export interface AppLayoutProps {
  variant?:
    | 'bootstrap'
    | 'task-planning'
    | 'ai-handoff'
    | 'parallel-productivity'
    | 'ai-supervision';
}

export default function AppLayout({ variant = 'task-planning' }: AppLayoutProps) {
  return (
    <div className="h-screen bg-background text-foreground flex flex-col">
      {/* Fixed Header - 48px */}
      <ContextIntelligenceHeader variant={variant} />

      {/* Main Layout - Rest of viewport */}
      <div className="flex flex-1 min-h-0">
        {/* Fixed Sidebar - 280px */}
        <ContextSidebar variant={variant} />

        {/* Main Content Area - Flexible width */}
        <MainOrchestrationArea variant={variant} />
      </div>
    </div>
  );
}
