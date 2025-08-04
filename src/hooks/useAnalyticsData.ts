import { useMemo } from 'react';
import { useAllTasks, useAllStatuses } from '@/libs/client/stores';
import type { ComplexityReport, TaskMasterData } from './useTaskMasterData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function useComplexityAnalytics(complexityReport: ComplexityReport | null) {
  return useMemo(() => {
    if (!complexityReport) {
      return {
        distribution: [],
        mostComplex: [],
        averageComplexity: 0,
      };
    }

    // Calculate complexity distribution
    const distribution = { Low: 0, Medium: 0, High: 0 };

    complexityReport.complexityAnalysis.forEach((task) => {
      if (task.complexityScore <= 3) distribution.Low++;
      else if (task.complexityScore <= 6) distribution.Medium++;
      else distribution.High++;
    });

    const distributionData = [
      { name: 'Low (1-3)', value: distribution.Low, color: '#00C49F' },
      { name: 'Medium (4-6)', value: distribution.Medium, color: '#FFBB28' },
      { name: 'High (7-10)', value: distribution.High, color: '#FF8042' },
    ];

    // Get most complex tasks
    const mostComplex = complexityReport.complexityAnalysis
      .sort((a, b) => b.complexityScore - a.complexityScore)
      .slice(0, 5);

    // Calculate average complexity
    const averageComplexity =
      complexityReport.complexityAnalysis.reduce((sum, task) => sum + task.complexityScore, 0) /
      complexityReport.complexityAnalysis.length;

    return {
      distribution: distributionData,
      mostComplex,
      averageComplexity,
    };
  }, [complexityReport]);
}

export function useCompletionAnalytics() {
  const tasks = useAllTasks();
  const statuses = useAllStatuses();

  return useMemo(() => {
    // Calculate task metrics
    const total = tasks.length;
    const completed = tasks.filter((task) => {
      const status = statuses.find((s) => s.id === task.statusId);
      return status?.name === 'done';
    }).length;
    const inProgress = tasks.filter((task) => {
      const status = statuses.find((s) => s.id === task.statusId);
      return status?.name === 'in_progress';
    }).length;
    const pending = tasks.filter((task) => {
      const status = statuses.find((s) => s.id === task.statusId);
      return status?.name === 'todo' || status?.name === 'backlog';
    }).length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    // Calculate status distribution
    const statusDistribution: Record<string, number> = {};

    tasks.forEach((task) => {
      const status = statuses.find((s) => s.id === task.statusId);
      const statusName = status?.name || 'unknown';
      statusDistribution[statusName] = (statusDistribution[statusName] || 0) + 1;
    });

    const statusDistributionData = Object.entries(statusDistribution).map(
      ([name, value], index) => ({
        name,
        value,
        color: COLORS[index % COLORS.length],
      })
    );

    // Calculate completion trends (mock data for now - would need actual historical data)
    const completionTrends = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return {
        date: date.toLocaleDateString('en-US', { weekday: 'short' }),
        completed: Math.floor(Math.random() * 10) + 1,
        created: Math.floor(Math.random() * 8) + 2,
      };
    });

    // Get recent tasks (last 5)
    const recentTasks = [...tasks]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5);

    return {
      metrics: { total, completed, inProgress, pending, completionRate },
      statusDistribution: statusDistributionData,
      completionTrends,
      recentTasks,
    };
  }, [tasks, statuses]);
}

export function useTaskMasterMetrics(
  complexityReport: ComplexityReport | null,
  taskMasterData: TaskMasterData | null
) {
  return useMemo(() => {
    if (!complexityReport && !taskMasterData) {
      return {
        analysisOverview: null,
        taskCategories: [],
      };
    }

    const analysisOverview = complexityReport
      ? {
          tasksAnalyzed: complexityReport.meta.tasksAnalyzed,
          totalTasks: complexityReport.meta.totalTasks,
          generatedAt: complexityReport.meta.generatedAt,
          usedResearch: complexityReport.meta.usedResearch,
          thresholdScore: complexityReport.meta.thresholdScore,
          projectName: complexityReport.meta.projectName,
        }
      : null;

    const taskCategories = taskMasterData
      ? Object.entries(taskMasterData).map(([tagName, tagData]) => ({
          name: tagName,
          description: tagData.metadata?.description || `Tasks for ${tagName}`,
          taskCount: tagData.tasks.length,
          created: tagData.metadata?.created,
          updated: tagData.metadata?.updated,
        }))
      : [];

    return {
      analysisOverview,
      taskCategories,
    };
  }, [complexityReport, taskMasterData]);
}
