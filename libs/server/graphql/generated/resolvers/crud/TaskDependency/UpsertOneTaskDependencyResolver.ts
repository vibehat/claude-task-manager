import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTaskDependencyArgs } from "./args/UpsertOneTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskDependency)
export class UpsertOneTaskDependencyResolver {
  @TypeGraphQL.Mutation(_returns => TaskDependency, {
    nullable: false
  })
  async upsertOneTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTaskDependencyArgs): Promise<TaskDependency> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
