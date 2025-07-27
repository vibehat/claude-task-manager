import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Cycle } from "../../../models/Cycle";
import { Team } from "../../../models/Team";
import { TeamMember } from "../../../models/TeamMember";
import { TeamProject } from "../../../models/TeamProject";
import { TeamCyclesArgs } from "./args/TeamCyclesArgs";
import { TeamMembersArgs } from "./args/TeamMembersArgs";
import { TeamProjectsArgs } from "./args/TeamProjectsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Team)
export class TeamRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TeamMember], {
    nullable: false
  })
  async members(@TypeGraphQL.Root() team: Team, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TeamMembersArgs): Promise<TeamMember[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).team.findUniqueOrThrow({
      where: {
        id: team.id,
      },
    }).members({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TeamProject], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() team: Team, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TeamProjectsArgs): Promise<TeamProject[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).team.findUniqueOrThrow({
      where: {
        id: team.id,
      },
    }).projects({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Cycle], {
    nullable: false
  })
  async cycles(@TypeGraphQL.Root() team: Team, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TeamCyclesArgs): Promise<Cycle[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).team.findUniqueOrThrow({
      where: {
        id: team.id,
      },
    }).cycles({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
