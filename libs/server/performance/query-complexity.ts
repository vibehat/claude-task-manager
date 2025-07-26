/**
 * GraphQL Query Complexity Analysis
 *
 * Provides query complexity analysis, depth limiting, and cost calculation
 * to prevent expensive queries from overwhelming the system.
 */

import {
   createComplexityRule,
   fieldExtensionsEstimator,
   simpleEstimator,
} from 'graphql-query-complexity';
import { ValidationRule, validate, GraphQLError } from 'graphql';
import type { BaseContext } from '@apollo/server';

/**
 * Configuration for query complexity analysis
 */
export interface QueryComplexityConfig {
   maximumComplexity: number;
   maximumDepth: number;
   introspection: boolean;
   scalarCost: number;
   objectCost: number;
   listFactor: number;
   depthCostFactor: number;
}

/**
 * Default complexity configuration
 */
export const DEFAULT_COMPLEXITY_CONFIG: QueryComplexityConfig = {
   maximumComplexity: 1000,
   maximumDepth: 10,
   introspection: true,
   scalarCost: 1,
   objectCost: 2,
   listFactor: 10,
   depthCostFactor: 2,
};

/**
 * Field complexity estimators based on field types and resolvers
 */
export const FIELD_COMPLEXITY_MAP = {
   // Task-related fields
   'Query.tasks': {
      complexity: ({ args, childComplexity }: any) => {
         const limit = args.pagination?.limit || args.pagination?.first || 50;
         const baseComplexity = Math.min(limit * childComplexity, 500);

         // Add extra cost for complex filters
         let finalComplexity = baseComplexity;
         if (args.filter?.search) finalComplexity *= 1.5;
         if (args.orderBy) finalComplexity *= 1.2;

         return finalComplexity;
      },
   },

   'Query.task': {
      complexity: ({ childComplexity }: any) => childComplexity + 2,
   },

   'Query.readyTasks': {
      complexity: ({ args, childComplexity }: any) => {
         const limit = args.limit || 20;
         return Math.min(limit * childComplexity * 1.5, 400); // More expensive due to dependency calculation
      },
   },

   // Task field complexities
   'Task.subtasks': {
      complexity: ({ childComplexity }: any) => childComplexity * 5, // Subtasks are more expensive
   },

   'Task.dependencies': {
      complexity: ({ childComplexity }: any) => childComplexity * 3,
   },

   // CLI operation fields
   'Query.cliStatus': {
      complexity: 10, // File system operations are moderately expensive
   },

   // Mutation complexities
   'Mutation.executeCliCommand': {
      complexity: ({ args }: any) => {
         const baseComplexity = 50;

         // More complex commands cost more
         if (args.command?.includes('expand')) return baseComplexity * 2;
         if (args.command?.includes('analyze')) return baseComplexity * 3;
         if (args.command?.includes('parse-prd')) return baseComplexity * 4;

         return baseComplexity;
      },
   },

   'Mutation.syncTaskMaster': {
      complexity: 100, // Database sync operations are expensive
   },

   'Mutation.updateTaskStatus': {
      complexity: 20,
   },
};

/**
 * Creates depth limiting validation rule
 */
export function createDepthLimitRule(maxDepth: number): ValidationRule {
   return function depthLimit(context) {
      const depths: Record<string, number> = {};
      let currentDepth = 0;

      return {
         Field: {
            enter() {
               currentDepth++;
               const fieldName = context.getFieldDef()?.name;
               if (fieldName) {
                  depths[fieldName] = Math.max(depths[fieldName] || 0, currentDepth);
               }

               if (currentDepth > maxDepth) {
                  context.reportError(
                     new GraphQLError(
                        `Query depth of ${currentDepth} exceeds maximum depth of ${maxDepth}`,
                        context.getFieldDef()?.astNode
                           ? [context.getFieldDef()?.astNode]
                           : undefined
                     )
                  );
               }
            },
            leave() {
               currentDepth--;
            },
         },
      };
   };
}

/**
 * Creates a custom complexity estimator that uses our field complexity map
 */
export function createCustomComplexityEstimator() {
   return (args: any) => {
      const { field, node, introspection } = args;
      const fieldName = `${field.parent?.name}.${field.name}`;

      // Allow introspection queries if enabled
      if (introspection && (fieldName.startsWith('__') || field.name.startsWith('__'))) {
         return 1;
      }

      // Use custom complexity if defined
      if (FIELD_COMPLEXITY_MAP[fieldName as keyof typeof FIELD_COMPLEXITY_MAP]) {
         const complexityConfig =
            FIELD_COMPLEXITY_MAP[fieldName as keyof typeof FIELD_COMPLEXITY_MAP];
         if (typeof complexityConfig.complexity === 'function') {
            return complexityConfig.complexity(args);
         }
         return complexityConfig.complexity || 1;
      }

      // Fall back to simple estimator
      return simpleEstimator(args);
   };
}

/**
 * Creates query complexity analysis plugin for Apollo Server
 */
export function createQueryComplexityPlugin(config: Partial<QueryComplexityConfig> = {}) {
   const finalConfig = { ...DEFAULT_COMPLEXITY_CONFIG, ...config };

   return {
      requestDidStart() {
         return {
            didResolveOperation({ request, document }) {
               const complexityRule = createComplexityRule({
                  estimators: [
                     fieldExtensionsEstimator(),
                     createCustomComplexityEstimator(),
                     simpleEstimator({ defaultComplexity: 1 }),
                  ],
                  maximumComplexity: finalConfig.maximumComplexity,
                  onComplete: (complexity: number) => {
                     console.log(`Query complexity: ${complexity}`);

                     // Log high complexity queries for monitoring
                     if (complexity > finalConfig.maximumComplexity * 0.8) {
                        console.warn(
                           `High complexity query detected: ${complexity}/${finalConfig.maximumComplexity}`
                        );
                     }
                  },
               });

               const depthRule = createDepthLimitRule(finalConfig.maximumDepth);

               const errors = validate(request.schema, document, [complexityRule, depthRule]);

               if (errors.length > 0) {
                  throw new GraphQLError(
                     `Query validation failed: ${errors.map((e) => e.message).join(', ')}`,
                     errors[0].nodes
                  );
               }
            },
         };
      },
   };
}

/**
 * Query complexity analyzer for custom validation
 */
export class QueryComplexityAnalyzer {
   private config: QueryComplexityConfig;

   constructor(config: Partial<QueryComplexityConfig> = {}) {
      this.config = { ...DEFAULT_COMPLEXITY_CONFIG, ...config };
   }

   /**
    * Analyze query complexity and return metrics
    */
   analyzeQuery(
      schema: any,
      document: any
   ): {
      complexity: number;
      depth: number;
      isValid: boolean;
      errors: string[];
      recommendations: string[];
   } {
      const errors: string[] = [];
      const recommendations: string[] = [];
      let complexity = 0;
      let depth = 0;

      try {
         const complexityRule = createComplexityRule({
            estimators: [
               fieldExtensionsEstimator(),
               createCustomComplexityEstimator(),
               simpleEstimator({ defaultComplexity: 1 }),
            ],
            maximumComplexity: this.config.maximumComplexity,
            onComplete: (calculatedComplexity: number) => {
               complexity = calculatedComplexity;
            },
         });

         const validationErrors = validate(schema, document, [
            complexityRule,
            createDepthLimitRule(this.config.maximumDepth),
         ]);

         errors.push(...validationErrors.map((e) => e.message));

         // Generate recommendations
         if (complexity > this.config.maximumComplexity * 0.7) {
            recommendations.push('Consider adding pagination to reduce query complexity');
            recommendations.push('Use field selection to limit returned data');
         }

         if (depth > this.config.maximumDepth * 0.8) {
            recommendations.push('Reduce query nesting depth');
            recommendations.push('Consider breaking complex queries into multiple requests');
         }

         if (complexity > 500) {
            recommendations.push('Consider using query fragments to reuse common selections');
         }
      } catch (error) {
         errors.push(`Analysis failed: ${error}`);
      }

      return {
         complexity,
         depth,
         isValid: errors.length === 0,
         errors,
         recommendations,
      };
   }

   /**
    * Update configuration
    */
   updateConfig(newConfig: Partial<QueryComplexityConfig>): void {
      this.config = { ...this.config, ...newConfig };
   }

   /**
    * Get current configuration
    */
   getConfig(): QueryComplexityConfig {
      return { ...this.config };
   }
}

/**
 * Default query complexity analyzer instance
 */
export const defaultComplexityAnalyzer = new QueryComplexityAnalyzer();

/**
 * Utility function to get field complexity for documentation/debugging
 */
export function getFieldComplexity(fieldName: string): any {
   return FIELD_COMPLEXITY_MAP[fieldName as keyof typeof FIELD_COMPLEXITY_MAP] || { complexity: 1 };
}

/**
 * Utility function to estimate query cost before execution (for caching decisions)
 */
export function estimateQueryCost(fieldSelections: string[]): number {
   return fieldSelections.reduce((total, field) => {
      const complexity = getFieldComplexity(field);
      return total + (typeof complexity.complexity === 'number' ? complexity.complexity : 10);
   }, 0);
}
