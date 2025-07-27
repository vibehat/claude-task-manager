/**
 * GraphQL Context for TaskMaster
 *
 * Provides shared context for all GraphQL resolvers
 */

import { PrismaClient } from '../prisma/generated';
import { TaskMasterDB, TaskMasterSync } from '../taskmaster';

export interface GraphQLContext {
   prisma: PrismaClient;
   taskMasterDB: TaskMasterDB;
   taskMasterSync: TaskMasterSync;
   isAdmin?: boolean;
   userId?: string | null;
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
