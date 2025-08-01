import { useState, useEffect } from 'react';

// Types for TaskMaster data
export interface ComplexityAnalysis {
   taskId: number;
   taskTitle: string;
   complexityScore: number;
   recommendedSubtasks: number;
   expansionPrompt: string;
   reasoning: string;
}

export interface ComplexityReport {
   meta: {
      generatedAt: string;
      tasksAnalyzed: number;
      totalTasks: number;
      analysisCount: number;
      thresholdScore: number;
      projectName: string;
      usedResearch: boolean;
   };
   complexityAnalysis: ComplexityAnalysis[];
}

export interface TaskMasterTask {
   id: number;
   title: string;
   description: string;
   status: string;
   priority: string;
   dependencies: number[];
   subtasks: Array<{
      id: number;
      title: string;
      status: string;
   }>;
}

export interface TaskMasterData {
   [tagName: string]: {
      tasks: TaskMasterTask[];
      metadata: {
         created: string;
         updated: string;
         description: string;
      };
   };
}

export function useComplexityReport() {
   const [data, setData] = useState<ComplexityReport | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchComplexityReport = async () => {
         try {
            setLoading(true);
            setError(null);

            const response = await fetch('/api/taskmaster/complexity-report');

            if (!response.ok) {
               throw new Error('Failed to fetch complexity report');
            }

            const report = await response.json();
            setData(report);
         } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
            console.error('Error loading complexity report:', err);
         } finally {
            setLoading(false);
         }
      };

      fetchComplexityReport();
   }, []);

   return { data, loading, error, refetch: () => window.location.reload() };
}

export function useTaskMasterTasks() {
   const [data, setData] = useState<TaskMasterData | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchTaskMasterTasks = async () => {
         try {
            setLoading(true);
            setError(null);

            const response = await fetch('/api/taskmaster/tasks');

            if (!response.ok) {
               throw new Error('Failed to fetch TaskMaster tasks');
            }

            const tasksData = await response.json();
            setData(tasksData);
         } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
            console.error('Error loading TaskMaster tasks:', err);
         } finally {
            setLoading(false);
         }
      };

      fetchTaskMasterTasks();
   }, []);

   return { data, loading, error, refetch: () => window.location.reload() };
}

export function useTaskMasterData() {
   const complexityReport = useComplexityReport();
   const taskMasterTasks = useTaskMasterTasks();

   const loading = complexityReport.loading || taskMasterTasks.loading;
   const error = complexityReport.error || taskMasterTasks.error;

   return {
      complexityReport: complexityReport.data,
      taskMasterData: taskMasterTasks.data,
      loading,
      error,
      refetch: () => {
         complexityReport.refetch();
         taskMasterTasks.refetch();
      },
   };
}
