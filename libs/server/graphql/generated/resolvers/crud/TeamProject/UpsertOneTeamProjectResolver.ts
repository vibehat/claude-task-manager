import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTeamProjectArgs } from "./args/UpsertOneTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamProject)
export class UpsertOneTeamProjectResolver {
  @TypeGraphQL.Mutation(_returns => TeamProject, {
    nullable: false
  })
  async upsertOneTeamProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTeamProjectArgs): Promise<TeamProject> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamProject.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
