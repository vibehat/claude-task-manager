import { useAllStatuses } from '@/libs/client/stores';

export function useDisplayIssueStatuses() {
   const statuses = useAllStatuses();
   return {
      data: { issueStatuses: statuses },
      loading: false,
      error: null,
   };
}
