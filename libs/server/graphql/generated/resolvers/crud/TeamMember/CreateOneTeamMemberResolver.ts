import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTeamMemberArgs } from "./args/CreateOneTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamMember)
export class CreateOneTeamMemberResolver {
  @TypeGraphQL.Mutation(_returns => TeamMember, {
    nullable: false
  })
  async createOneTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTeamMemberArgs): Promise<TeamMember> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
