/**
 * GraphQL Client - Core client implementation
 */

export interface GraphQLResponse<T = any> {
   data?: T;
   errors?: Array<{
      message: string;
      locations?: Array<{
         line: number;
         column: number;
      }>;
      path?: string[];
      extensions?: Record<string, any>;
   }>;
   extensions?: Record<string, any>;
}

export interface GraphQLClientConfig {
   endpoint: string;
   headers?: Record<string, string>;
   timeout?: number;
   retries?: number;
   retryDelay?: number;
}

export class GraphQLClient {
   private endpoint: string;
   private headers: Record<string, string>;
   private timeout: number;
   private retries: number;
   private retryDelay: number;

   constructor(config: GraphQLClientConfig) {
      this.endpoint = config.endpoint;
      this.headers = {
         'Content-Type': 'application/json',
         ...config.headers,
      };
      this.timeout = config.timeout || 30000; // 30 seconds
      this.retries = config.retries || 3;
      this.retryDelay = config.retryDelay || 1000; // 1 second
   }

   async query<T = any>(
      query: string,
      variables?: Record<string, any>,
      options?: {
         headers?: Record<string, string>;
         timeout?: number;
      }
   ): Promise<GraphQLResponse<T>> {
      const requestHeaders = {
         ...this.headers,
         ...options?.headers,
      };

      const requestBody = {
         query,
         variables: variables || {},
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
         controller.abort();
      }, options?.timeout || this.timeout);

      try {
         const response = await this.executeWithRetry(async () => {
            const res = await fetch(this.endpoint, {
               method: 'POST',
               headers: requestHeaders,
               body: JSON.stringify(requestBody),
               signal: controller.signal,
            });

            if (!res.ok) {
               throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
            }

            return res.json();
         });

         clearTimeout(timeoutId);
         return response;
      } catch (error) {
         clearTimeout(timeoutId);
         throw this.handleError(error);
      }
   }

   async mutate<T = any>(
      mutation: string,
      variables?: Record<string, any>,
      options?: {
         headers?: Record<string, string>;
         timeout?: number;
      }
   ): Promise<GraphQLResponse<T>> {
      // Mutations use the same transport as queries
      return this.query<T>(mutation, variables, options);
   }

   private async executeWithRetry<T>(operation: () => Promise<T>): Promise<T> {
      let lastError: Error;

      for (let attempt = 0; attempt <= this.retries; attempt++) {
         try {
            return await operation();
         } catch (error) {
            lastError = error as Error;

            if (attempt === this.retries) {
               break;
            }

            // Don't retry on client errors (4xx)
            if (error instanceof Error && error.message.includes('HTTP Error: 4')) {
               break;
            }

            // Wait before retrying
            await new Promise((resolve) => setTimeout(resolve, this.retryDelay * (attempt + 1)));
         }
      }

      throw lastError!;
   }

   private handleError(error: any): Error {
      if (error.name === 'AbortError') {
         return new Error('GraphQL request timeout');
      }

      if (error instanceof Error) {
         return error;
      }

      return new Error(`GraphQL request failed: ${String(error)}`);
   }

   // Update client configuration
   updateConfig(config: Partial<GraphQLClientConfig>): void {
      if (config.endpoint) {
         this.endpoint = config.endpoint;
      }
      if (config.headers) {
         this.headers = { ...this.headers, ...config.headers };
      }
      if (config.timeout !== undefined) {
         this.timeout = config.timeout;
      }
      if (config.retries !== undefined) {
         this.retries = config.retries;
      }
      if (config.retryDelay !== undefined) {
         this.retryDelay = config.retryDelay;
      }
   }

   // Get current configuration
   getConfig(): GraphQLClientConfig {
      return {
         endpoint: this.endpoint,
         headers: { ...this.headers },
         timeout: this.timeout,
         retries: this.retries,
         retryDelay: this.retryDelay,
      };
   }
}

// Default client instance
export const createGraphQLClient = (config?: Partial<GraphQLClientConfig>): GraphQLClient => {
   const defaultConfig: GraphQLClientConfig = {
      endpoint: '/api/graphql',
      timeout: 30000,
      retries: 3,
      retryDelay: 1000,
   };

   return new GraphQLClient({ ...defaultConfig, ...config });
};
