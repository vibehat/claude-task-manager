import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTeamProjectArgs } from "./args/CreateOneTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamProject)
export class CreateOneTeamProjectResolver {
  @TypeGraphQL.Mutation(_returns => TeamProject, {
    nullable: false
  })
  async createOneTeamProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTeamProjectArgs): Promise<TeamProject> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamProject.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
