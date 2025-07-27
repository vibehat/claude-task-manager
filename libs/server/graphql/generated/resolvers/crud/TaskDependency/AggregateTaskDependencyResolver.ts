import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTaskDependencyArgs } from "./args/AggregateTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
import { AggregateTaskDependency } from "../../outputs/AggregateTaskDependency";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskDependency)
export class AggregateTaskDependencyResolver {
  @TypeGraphQL.Query(_returns => AggregateTaskDependency, {
    nullable: false
  })
  async aggregateTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTaskDependencyArgs): Promise<AggregateTaskDependency> {
    return getPrismaFromContext(ctx).taskDependency.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
