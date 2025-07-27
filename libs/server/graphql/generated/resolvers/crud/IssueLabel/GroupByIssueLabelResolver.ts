import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByIssueLabelArgs } from "./args/GroupByIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
import { IssueLabelGroupBy } from "../../outputs/IssueLabelGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueLabel)
export class GroupByIssueLabelResolver {
  @TypeGraphQL.Query(_returns => [IssueLabelGroupBy], {
    nullable: false
  })
  async groupByIssueLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIssueLabelArgs): Promise<IssueLabelGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueLabel.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
