import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTeamMemberArgs } from "./args/GroupByTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
import { TeamMemberGroupBy } from "../../outputs/TeamMemberGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamMember)
export class GroupByTeamMemberResolver {
  @TypeGraphQL.Query(_returns => [TeamMemberGroupBy], {
    nullable: false
  })
  async groupByTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTeamMemberArgs): Promise<TeamMemberGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
