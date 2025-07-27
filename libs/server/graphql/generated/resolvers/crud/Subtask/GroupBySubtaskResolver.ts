import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySubtaskArgs } from "./args/GroupBySubtaskArgs";
import { Subtask } from "../../../models/Subtask";
import { SubtaskGroupBy } from "../../outputs/SubtaskGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subtask)
export class GroupBySubtaskResolver {
  @TypeGraphQL.Query(_returns => [SubtaskGroupBy], {
    nullable: false
  })
  async groupBySubtask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySubtaskArgs): Promise<SubtaskGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subtask.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
