import { useMemo } from 'react';

interface IssueWithPriority {
   issuePriority?: {
      order?: number;
   } | null;
}

export function useSortIssuesByPriority<T extends IssueWithPriority>(issues: T[]): T[] {
   return useMemo(() => {
      return issues.slice().sort((a, b) => {
         const aOrder = a.issuePriority?.order ?? Number.MAX_SAFE_INTEGER;
         const bOrder = b.issuePriority?.order ?? Number.MAX_SAFE_INTEGER;
         return aOrder - bOrder;
      });
   }, [issues]);
}
