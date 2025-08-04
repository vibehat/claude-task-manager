'use client';

import { IndieLayout } from '@/components/layout/IndieLayout';
import { Separator } from '@/components/ui/separator';
import { useTaskMasterData } from '@/hooks/useTaskMasterData';
import {
  OverviewStats,
  ComplexityAnalysis,
  CompletionAnalytics,
  TaskMasterMetrics,
  DependencyPlaceholder,
} from '@/components/analytics';
import { BrainIcon, TrendingUpIcon, NetworkIcon, SettingsIcon } from 'lucide-react';

export default function IndieAnalyticsPage(): React.JSX.Element {
  const { complexityReport, taskMasterData, loading, error } = useTaskMasterData();

  if (error) {
    return (
      <IndieLayout>
        <div className="p-6">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Analytics Error</h1>
            <p className="text-muted-foreground mb-4">Failed to load TaskMaster data: {error}</p>
            <p className="text-sm text-muted-foreground">
              Make sure TaskMaster is properly configured and has generated reports.
            </p>
          </div>
        </div>
      </IndieLayout>
    );
  }

  return (
    <IndieLayout>
      <div className="p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Comprehensive insights into your tasks, complexity, and productivity patterns.
            </p>
          </div>
        </div>

        {/* Overview Stats */}
        <section>
          <OverviewStats complexityReport={complexityReport} loading={loading} />
        </section>

        <Separator />

        {/* Completion Analytics Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUpIcon className="h-6 w-6 text-green-600" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Completion Analytics</h2>
              <p className="text-muted-foreground">
                Task status distribution and completion trends
              </p>
            </div>
          </div>
          <CompletionAnalytics loading={loading} />
        </section>

        <Separator />

        {/* TaskMaster Integration Section - FIRST FOCUS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <SettingsIcon className="h-6 w-6 text-orange-600" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight">TaskMaster Integration</h2>
              <p className="text-muted-foreground">
                AI analysis metrics, project categories, and integration health insights
              </p>
            </div>
          </div>
          <TaskMasterMetrics
            complexityReport={complexityReport}
            taskMasterData={taskMasterData}
            loading={loading}
          />
        </section>

        <Separator />

        {/* Complexity Analysis Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <BrainIcon className="h-6 w-6 text-purple-600" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Complexity Analysis</h2>
              <p className="text-muted-foreground">
                TaskMaster AI-powered complexity insights and task breakdown recommendations
              </p>
            </div>
          </div>
          <ComplexityAnalysis complexityReport={complexityReport} loading={loading} />
        </section>

        <Separator />

        {/* Dependencies Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <NetworkIcon className="h-6 w-6 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Dependencies & Relationships</h2>
              <p className="text-muted-foreground">
                Task dependencies, blocking relationships, and workflow bottlenecks
              </p>
            </div>
          </div>
          <DependencyPlaceholder />
        </section>
      </div>
    </IndieLayout>
  );
}
