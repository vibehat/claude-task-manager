import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTeamMemberArgs } from "./args/CreateManyAndReturnTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
import { CreateManyAndReturnTeamMember } from "../../outputs/CreateManyAndReturnTeamMember";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamMember)
export class CreateManyAndReturnTeamMemberResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeamMember], {
    nullable: false
  })
  async createManyAndReturnTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTeamMemberArgs): Promise<CreateManyAndReturnTeamMember[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
