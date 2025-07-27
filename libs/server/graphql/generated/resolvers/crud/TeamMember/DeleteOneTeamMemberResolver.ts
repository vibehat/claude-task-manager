import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTeamMemberArgs } from "./args/DeleteOneTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamMember)
export class DeleteOneTeamMemberResolver {
  @TypeGraphQL.Mutation(_returns => TeamMember, {
    nullable: true
  })
  async deleteOneTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTeamMemberArgs): Promise<TeamMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
