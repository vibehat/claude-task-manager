/**
 * GraphQL Context for TaskMaster
 *
 * Provides shared context for all GraphQL resolvers
 */

import { PrismaClient } from '../generated/prisma';
import { TaskMasterDB, TaskMasterSync } from '../taskmaster';

export interface GraphQLContext {
   prisma: PrismaClient;
   taskMasterDB: TaskMasterDB;
   taskMasterSync: TaskMasterSync;
}

export function createGraphQLContext(): GraphQLContext {
   const prisma = new PrismaClient();
   const taskMasterDB = new TaskMasterDB(prisma);
   const taskMasterSync = new TaskMasterSync(prisma);

   return {
      prisma,
      taskMasterDB,
      taskMasterSync,
   };
}
