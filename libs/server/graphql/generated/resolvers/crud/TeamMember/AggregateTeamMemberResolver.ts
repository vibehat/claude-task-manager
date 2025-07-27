import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTeamMemberArgs } from "./args/AggregateTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
import { AggregateTeamMember } from "../../outputs/AggregateTeamMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamMember)
export class AggregateTeamMemberResolver {
  @TypeGraphQL.Query(_returns => AggregateTeamMember, {
    nullable: false
  })
  async aggregateTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTeamMemberArgs): Promise<AggregateTeamMember> {
    return getPrismaFromContext(ctx).teamMember.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
