import { useGetIssuesByStatusQuery } from '@/libs/client/graphql-client/generated';

export interface UseIssuesByStatusOptions {
   statusId: string;
   skip?: boolean;
}

export function useIssuesByStatus(options: UseIssuesByStatusOptions) {
   const { statusId, skip } = options;

   return useGetIssuesByStatusQuery({
      variables: {
         statusId,
      },
      skip,
   });
}
