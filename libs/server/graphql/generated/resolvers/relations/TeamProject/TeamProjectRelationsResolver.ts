import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Project } from "../../../models/Project";
import { Team } from "../../../models/Team";
import { TeamProject } from "../../../models/TeamProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamProject)
export class TeamProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Team, {
    nullable: false
  })
  async team(@TypeGraphQL.Root() teamProject: TeamProject, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Team> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamProject.findUniqueOrThrow({
      where: {
        id: teamProject.id,
      },
    }).team({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() teamProject: TeamProject, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Project> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamProject.findUniqueOrThrow({
      where: {
        id: teamProject.id,
      },
    }).project({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
