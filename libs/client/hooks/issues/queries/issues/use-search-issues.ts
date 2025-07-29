import { useSearchIssuesQuery } from '@/libs/client/graphql-client/generated';

export interface UseSearchIssuesOptions {
   query?: string;
   skip?: boolean;
}

export function useSearchIssues(options: UseSearchIssuesOptions = {}) {
   const { query, skip } = options;

   return useSearchIssuesQuery({
      variables: {
         search: query || '',
         where: {},
      },
      skip: skip || !query,
   });
}
