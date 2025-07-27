import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTeamMemberOrThrowArgs } from "./args/FindFirstTeamMemberOrThrowArgs";
import { TeamMember } from "../../../models/TeamMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamMember)
export class FindFirstTeamMemberOrThrowResolver {
  @TypeGraphQL.Query(_returns => TeamMember, {
    nullable: true
  })
  async findFirstTeamMemberOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTeamMemberOrThrowArgs): Promise<TeamMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
