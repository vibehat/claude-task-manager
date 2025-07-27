import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProjectArgs } from "./args/AggregateProjectArgs";
import { Project } from "../../../models/Project";
import { AggregateProject } from "../../outputs/AggregateProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class AggregateProjectResolver {
  @TypeGraphQL.Query(_returns => AggregateProject, {
    nullable: false
  })
  async aggregateProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectArgs): Promise<AggregateProject> {
    return getPrismaFromContext(ctx).project.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
