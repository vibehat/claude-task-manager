import { useEffect, useState, useMemo } from 'react';
import { useDataStore } from '../stores/dataStore';
import { useIssuesFilterStore } from '@/features/issues/store/issueFilterStore';
import type { Issue } from '../types/dataModels';

export interface UseIssuesOptions {
   skip?: boolean;
   pollInterval?: number;
}

export interface UseIssuesResult {
   data: Issue[] | undefined;
   loading: boolean;
   error: Error | undefined;
   refetch: () => Promise<void>;
}

export function useIssues(options: UseIssuesOptions = {}): UseIssuesResult {
   const { skip = false, pollInterval } = options;
   const [loading, setLoading] = useState(!skip);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { issues, isInitialized, initialize } = useDataStore();
   const where = useIssuesFilterStore((state) => state.where);

   // Initialize data if needed
   useEffect(() => {
      if (!skip && !isInitialized) {
         initialize()
            .then(() => setLoading(false))
            .catch((err) => {
               setError(err);
               setLoading(false);
            });
      } else if (isInitialized) {
         setLoading(false);
      }
   }, [skip, isInitialized, initialize]);

   // Filter issues based on where clause
   const filteredIssues = useMemo(() => {
      if (!isInitialized || skip) return undefined;

      let result = [...issues];

      // Apply filters
      if (where.parentIssueId?.equals !== undefined) {
         result = result.filter((issue) => issue.parentIssueId === where.parentIssueId.equals);
      }

      if (where.statusId?.in) {
         result = result.filter(
            (issue) => issue.statusId && where.statusId.in.includes(issue.statusId)
         );
      }

      if (where.assigneeId?.in) {
         result = result.filter(
            (issue) => issue.assigneeId && where.assigneeId.in.includes(issue.assigneeId)
         );
      }

      if (where.priorityId?.in) {
         result = result.filter(
            (issue) => issue.priorityId && where.priorityId.in.includes(issue.priorityId)
         );
      }

      if (where.projectId?.in) {
         result = result.filter(
            (issue) => issue.projectId && where.projectId.in.includes(issue.projectId)
         );
      }

      if (where.labels?.some?.labelId?.in) {
         const labelIds = where.labels.some.labelId.in;
         result = result.filter((issue) =>
            issue.labelIds.some((labelId) => labelIds.includes(labelId))
         );
      }

      // Sort by orderIndex
      result.sort((a, b) => a.orderIndex - b.orderIndex);

      return result;
   }, [issues, where, isInitialized, skip]);

   // Refetch function
   const refetch = async () => {
      setLoading(true);
      setError(undefined);
      try {
         await initialize();
      } catch (err) {
         setError(err as Error);
      } finally {
         setLoading(false);
      }
   };

   // Polling
   useEffect(() => {
      if (pollInterval && !skip) {
         const interval = setInterval(refetch, pollInterval);
         return () => clearInterval(interval);
      }
   }, [pollInterval, skip]);

   return {
      data: filteredIssues,
      loading,
      error,
      refetch,
   };
}

// Hook for searching issues
export function useSearchIssues(query: string, options: UseIssuesOptions = {}) {
   const { skip = false } = options;
   const [loading, setLoading] = useState(!skip);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { searchIssues, isInitialized, initialize } = useDataStore();

   // Initialize data if needed
   useEffect(() => {
      if (!skip && !isInitialized) {
         initialize()
            .then(() => setLoading(false))
            .catch((err) => {
               setError(err);
               setLoading(false);
            });
      } else if (isInitialized) {
         setLoading(false);
      }
   }, [skip, isInitialized, initialize]);

   // Search issues
   const results = useMemo(() => {
      if (!isInitialized || skip || !query) return undefined;

      // Filter for parent issues only
      const searchResults = searchIssues(query);
      return searchResults.filter((issue) => !issue.parentIssueId);
   }, [searchIssues, query, isInitialized, skip]);

   const refetch = async () => {
      setLoading(true);
      setError(undefined);
      try {
         await initialize();
      } catch (err) {
         setError(err as Error);
      } finally {
         setLoading(false);
      }
   };

   return {
      data: results,
      loading,
      error,
      refetch,
   };
}

// Hook for getting a single issue
export function useIssue(id: string | undefined) {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { getIssueById, getSubIssues, isInitialized, initialize } = useDataStore();

   // Initialize data if needed
   useEffect(() => {
      if (id && !isInitialized) {
         initialize()
            .then(() => setLoading(false))
            .catch((err) => {
               setError(err);
               setLoading(false);
            });
      } else if (isInitialized || !id) {
         setLoading(false);
      }
   }, [id, isInitialized, initialize]);

   const issue = id ? getIssueById(id) : undefined;
   const subIssues = id ? getSubIssues(id) : [];

   return {
      data: issue,
      subIssues,
      loading,
      error,
   };
}

// Hook for issue mutations
export function useIssueMutations() {
   const { addIssue, updateIssue, deleteIssue, bulkUpdateIssues } = useDataStore();

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<Error | undefined>(undefined);

   const createIssue = async (
      data: Omit<Issue, 'id' | 'createdAt' | 'updatedAt' | 'orderIndex'>
   ) => {
      setLoading(true);
      setError(undefined);
      try {
         const newIssue = addIssue(data);
         setLoading(false);
         return { data: newIssue };
      } catch (err) {
         setError(err as Error);
         setLoading(false);
         return { error: err as Error };
      }
   };

   const updateIssueMutation = async (id: string, updates: Partial<Issue>) => {
      setLoading(true);
      setError(undefined);
      try {
         updateIssue(id, updates);
         setLoading(false);
         return { success: true };
      } catch (err) {
         setError(err as Error);
         setLoading(false);
         return { error: err as Error };
      }
   };

   const deleteIssueMutation = async (id: string) => {
      setLoading(true);
      setError(undefined);
      try {
         deleteIssue(id);
         setLoading(false);
         return { success: true };
      } catch (err) {
         setError(err as Error);
         setLoading(false);
         return { error: err as Error };
      }
   };

   const bulkUpdateIssuesMutation = async (ids: string[], updates: Partial<Issue>) => {
      setLoading(true);
      setError(undefined);
      try {
         bulkUpdateIssues(ids, updates);
         setLoading(false);
         return { success: true };
      } catch (err) {
         setError(err as Error);
         setLoading(false);
         return { error: err as Error };
      }
   };

   return {
      createIssue,
      updateIssue: updateIssueMutation,
      deleteIssue: deleteIssueMutation,
      bulkUpdateIssues: bulkUpdateIssuesMutation,
      loading,
      error,
   };
}
