import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTeamProjectOrThrowArgs } from "./args/FindUniqueTeamProjectOrThrowArgs";
import { TeamProject } from "../../../models/TeamProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamProject)
export class FindUniqueTeamProjectOrThrowResolver {
  @TypeGraphQL.Query(_returns => TeamProject, {
    nullable: true
  })
  async getTeamProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTeamProjectOrThrowArgs): Promise<TeamProject | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamProject.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
