import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTaskDependencyOrThrowArgs } from "./args/FindFirstTaskDependencyOrThrowArgs";
import { TaskDependency } from "../../../models/TaskDependency";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskDependency)
export class FindFirstTaskDependencyOrThrowResolver {
  @TypeGraphQL.Query(_returns => TaskDependency, {
    nullable: true
  })
  async findFirstTaskDependencyOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTaskDependencyOrThrowArgs): Promise<TaskDependency | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
