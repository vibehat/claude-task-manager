import { useMemo } from 'react';

/**
 * Hook to safely extract nodes from GraphQL connection edges or return array as-is
 */
export function useEdges<T>(data: { nodes?: T[] } | null | undefined): T[];
export function useEdges<T>(data: T[] | null | undefined): T[];
export function useEdges<T>(data: { nodes?: T[] } | T[] | null | undefined): T[];
export function useEdges<T>(data: any): T[] {
   return useMemo(() => {
      if (!data) {
         return [];
      }
      if (Array.isArray(data)) {
         return data;
      }
      return data.nodes || [];
   }, [data]);
}
