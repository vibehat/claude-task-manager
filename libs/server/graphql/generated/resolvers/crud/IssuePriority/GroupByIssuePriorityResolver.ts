import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByIssuePriorityArgs } from "./args/GroupByIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
import { IssuePriorityGroupBy } from "../../outputs/IssuePriorityGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssuePriority)
export class GroupByIssuePriorityResolver {
  @TypeGraphQL.Query(_returns => [IssuePriorityGroupBy], {
    nullable: false
  })
  async groupByIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIssuePriorityArgs): Promise<IssuePriorityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
