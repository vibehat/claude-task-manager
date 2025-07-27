import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTaskDependencyArgs } from "./args/FindFirstTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskDependency)
export class FindFirstTaskDependencyResolver {
  @TypeGraphQL.Query(_returns => TaskDependency, {
    nullable: true
  })
  async findFirstTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTaskDependencyArgs): Promise<TaskDependency | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
