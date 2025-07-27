import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTaskArgs } from "./args/AggregateTaskArgs";
import { Task } from "../../../models/Task";
import { AggregateTask } from "../../outputs/AggregateTask";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class AggregateTaskResolver {
  @TypeGraphQL.Query(_returns => AggregateTask, {
    nullable: false
  })
  async aggregateTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTaskArgs): Promise<AggregateTask> {
    return getPrismaFromContext(ctx).task.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
