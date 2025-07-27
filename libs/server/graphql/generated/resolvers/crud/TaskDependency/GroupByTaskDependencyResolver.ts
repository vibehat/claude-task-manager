import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTaskDependencyArgs } from "./args/GroupByTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
import { TaskDependencyGroupBy } from "../../outputs/TaskDependencyGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskDependency)
export class GroupByTaskDependencyResolver {
  @TypeGraphQL.Query(_returns => [TaskDependencyGroupBy], {
    nullable: false
  })
  async groupByTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTaskDependencyArgs): Promise<TaskDependencyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
