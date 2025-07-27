import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTeamProjectArgs } from "./args/CreateManyAndReturnTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
import { CreateManyAndReturnTeamProject } from "../../outputs/CreateManyAndReturnTeamProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamProject)
export class CreateManyAndReturnTeamProjectResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeamProject], {
    nullable: false
  })
  async createManyAndReturnTeamProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTeamProjectArgs): Promise<CreateManyAndReturnTeamProject[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamProject.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
