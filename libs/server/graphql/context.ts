/**
 * GraphQL Context for TaskMaster
 *
 * Provides shared context for all GraphQL resolvers
 */

import { PrismaClient } from '../generated/prisma';
import { TaskMasterDB, TaskMasterSync } from '../taskmaster';
import { createDataLoaders, DataLoaders } from '../performance/dataloaders';

export interface GraphQLContext {
   prisma: PrismaClient;
   taskMasterDB: TaskMasterDB;
   taskMasterSync: TaskMasterSync;
   dataloaders: DataLoaders;
}

export function createGraphQLContext(): GraphQLContext {
   const prisma = new PrismaClient();
   const taskMasterDB = new TaskMasterDB(prisma);
   const taskMasterSync = new TaskMasterSync(prisma);
   const dataloaders = createDataLoaders(prisma);

   return {
      prisma,
      taskMasterDB,
      taskMasterSync,
      dataloaders,
   };
}
