import { useDataStore } from '@/libs/client/stores/dataStore';

export function useDisplayIssueStatuses() {
   const { statuses } = useDataStore();
   return {
      data: { issueStatuses: statuses },
      loading: false,
      error: null,
   };
}
