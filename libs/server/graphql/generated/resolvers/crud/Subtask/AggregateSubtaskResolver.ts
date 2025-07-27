import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSubtaskArgs } from "./args/AggregateSubtaskArgs";
import { Subtask } from "../../../models/Subtask";
import { AggregateSubtask } from "../../outputs/AggregateSubtask";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subtask)
export class AggregateSubtaskResolver {
  @TypeGraphQL.Query(_returns => AggregateSubtask, {
    nullable: false
  })
  async aggregateSubtask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSubtaskArgs): Promise<AggregateSubtask> {
    return getPrismaFromContext(ctx).subtask.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
