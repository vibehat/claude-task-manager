import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTeamProjectArgs } from "./args/DeleteOneTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamProject)
export class DeleteOneTeamProjectResolver {
  @TypeGraphQL.Mutation(_returns => TeamProject, {
    nullable: true
  })
  async deleteOneTeamProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTeamProjectArgs): Promise<TeamProject | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamProject.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
