import { useGetIssuesQuery } from '@/libs/client/graphql-client/generated';
import type { IssueFilterInput } from '../../types/filters.types';

export interface UseIssuesOptions {
   filter?: IssueFilterInput;
   skip?: boolean;
}

export function useIssues(options: UseIssuesOptions = {}) {
   const { filter, skip } = options;

   return useGetIssuesQuery({
      variables: {
         filter,
      },
      skip,
   });
}

export type { IssueFilterInput };
