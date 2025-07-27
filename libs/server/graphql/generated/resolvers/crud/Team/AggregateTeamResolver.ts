import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTeamArgs } from "./args/AggregateTeamArgs";
import { Team } from "../../../models/Team";
import { AggregateTeam } from "../../outputs/AggregateTeam";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Team)
export class AggregateTeamResolver {
  @TypeGraphQL.Query(_returns => AggregateTeam, {
    nullable: false
  })
  async aggregateTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTeamArgs): Promise<AggregateTeam> {
    return getPrismaFromContext(ctx).team.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
