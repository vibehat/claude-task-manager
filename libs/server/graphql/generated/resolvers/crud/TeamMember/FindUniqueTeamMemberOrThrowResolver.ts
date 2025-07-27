import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTeamMemberOrThrowArgs } from "./args/FindUniqueTeamMemberOrThrowArgs";
import { TeamMember } from "../../../models/TeamMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamMember)
export class FindUniqueTeamMemberOrThrowResolver {
  @TypeGraphQL.Query(_returns => TeamMember, {
    nullable: true
  })
  async getTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTeamMemberOrThrowArgs): Promise<TeamMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
