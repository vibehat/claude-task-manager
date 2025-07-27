import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByIssueStatusArgs } from "./args/GroupByIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
import { IssueStatusGroupBy } from "../../outputs/IssueStatusGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueStatus)
export class GroupByIssueStatusResolver {
  @TypeGraphQL.Query(_returns => [IssueStatusGroupBy], {
    nullable: false
  })
  async groupByIssueStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIssueStatusArgs): Promise<IssueStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
