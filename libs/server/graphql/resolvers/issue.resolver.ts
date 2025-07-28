/**
 * Issue Resolver - Implementation for issue-related queries
 */

import { Resolver, Query, ObjectType, Field, Int, Ctx } from 'type-graphql';
import { BaseResolver } from './base.resolver';
import { getPrismaFromContext } from '../generated/helpers';

@ObjectType()
export class IssueStats {
   @Field(() => Int)
   total!: number;

   @Field(() => Int)
   completed!: number;

   @Field(() => Int)
   inProgress!: number;

   @Field(() => Int)
   pending!: number;

   @Field(() => Int)
   completionRate!: number;
}

@Resolver()
export class IssueResolver extends BaseResolver {
   @Query(() => String)
   async issueHealthCheck(): Promise<string> {
      return 'Issue resolver is working';
   }

   @Query(() => IssueStats)
   async issuesStats(@Ctx() ctx: any): Promise<IssueStats> {
      const prisma = getPrismaFromContext(ctx);

      const [total, completed, inProgress, pending] = await Promise.all([
         prisma.issue.count(),
         prisma.issue.count({
            where: {
               issueStatus: {
                  id: 'done',
               },
            },
         }),
         prisma.issue.count({
            where: {
               issueStatus: {
                  id: 'in-progress',
               },
            },
         }),
         prisma.issue.count({
            where: {
               issueStatus: {
                  id: 'todo',
               },
            },
         }),
      ]);

      const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

      return {
         total,
         completed,
         inProgress,
         pending,
         completionRate,
      };
   }
}
