import { useUpdateIssueMutation } from '@/libs/client/graphql-client/generated';

export function useUpdateIssue() {
   return useUpdateIssueMutation();
}
