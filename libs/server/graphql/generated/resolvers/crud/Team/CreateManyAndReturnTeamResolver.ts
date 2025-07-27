import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTeamArgs } from "./args/CreateManyAndReturnTeamArgs";
import { Team } from "../../../models/Team";
import { CreateManyAndReturnTeam } from "../../outputs/CreateManyAndReturnTeam";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Team)
export class CreateManyAndReturnTeamResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeam], {
    nullable: false
  })
  async createManyAndReturnTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTeamArgs): Promise<CreateManyAndReturnTeam[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).team.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
