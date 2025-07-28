import { useGetDisplayIssueStatusesQuery } from '@/libs/client/graphql-client/generated';

export function useDisplayIssueStatuses() {
   return useGetDisplayIssueStatusesQuery();
}
