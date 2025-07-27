import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTeamProjectArgs } from "./args/AggregateTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
import { AggregateTeamProject } from "../../outputs/AggregateTeamProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TeamProject)
export class AggregateTeamProjectResolver {
  @TypeGraphQL.Query(_returns => AggregateTeamProject, {
    nullable: false
  })
  async aggregateTeamProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTeamProjectArgs): Promise<AggregateTeamProject> {
    return getPrismaFromContext(ctx).teamProject.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
