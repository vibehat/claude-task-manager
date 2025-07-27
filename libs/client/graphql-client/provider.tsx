'use client';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apollo-client';
import type { ReactNode } from 'react';

interface GraphQLProviderProps {
   children: ReactNode;
}

/**
 * GraphQL Provider component that wraps the app with Apollo Client
 *
 * This should be used at the root of your Next.js application to provide
 * GraphQL functionality to all child components.
 */
export function GraphQLProvider({ children }: GraphQLProviderProps) {
   return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}

export default GraphQLProvider;
