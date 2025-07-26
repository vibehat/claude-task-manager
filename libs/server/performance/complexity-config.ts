/**
 * Query Complexity Configuration Loader
 *
 * Loads environment-specific configuration for query complexity analysis
 */

import { QueryComplexityConfig } from './query-complexity';
import complexityConfig from './complexity-config.json';

type Environment = 'development' | 'production' | 'testing';

/**
 * Load query complexity configuration for current environment
 */
export function loadComplexityConfig(env?: Environment): QueryComplexityConfig {
   const environment = env || (process.env.NODE_ENV as Environment) || 'development';

   const config = complexityConfig[environment];

   if (!config) {
      console.warn(
         `No complexity configuration found for environment: ${environment}, using development config`
      );
      return complexityConfig.development;
   }

   return config;
}

/**
 * Get complexity configuration with environment variable overrides
 */
export function getComplexityConfigWithOverrides(env?: Environment): QueryComplexityConfig {
   const baseConfig = loadComplexityConfig(env);

   return {
      maximumComplexity:
         parseInt(process.env.GRAPHQL_MAX_COMPLEXITY || '') || baseConfig.maximumComplexity,
      maximumDepth: parseInt(process.env.GRAPHQL_MAX_DEPTH || '') || baseConfig.maximumDepth,
      introspection: process.env.GRAPHQL_INTROSPECTION === 'true' || baseConfig.introspection,
      scalarCost: parseInt(process.env.GRAPHQL_SCALAR_COST || '') || baseConfig.scalarCost,
      objectCost: parseInt(process.env.GRAPHQL_OBJECT_COST || '') || baseConfig.objectCost,
      listFactor: parseInt(process.env.GRAPHQL_LIST_FACTOR || '') || baseConfig.listFactor,
      depthCostFactor:
         parseInt(process.env.GRAPHQL_DEPTH_COST_FACTOR || '') || baseConfig.depthCostFactor,
   };
}

/**
 * Available environments
 */
export const AVAILABLE_ENVIRONMENTS: Environment[] = ['development', 'production', 'testing'];

/**
 * Get all available configurations
 */
export function getAllConfigurations(): Record<Environment, QueryComplexityConfig> {
   return complexityConfig;
}
