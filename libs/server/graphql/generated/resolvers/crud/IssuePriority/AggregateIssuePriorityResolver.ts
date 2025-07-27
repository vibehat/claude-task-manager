import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIssuePriorityArgs } from "./args/AggregateIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
import { AggregateIssuePriority } from "../../outputs/AggregateIssuePriority";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssuePriority)
export class AggregateIssuePriorityResolver {
  @TypeGraphQL.Query(_returns => AggregateIssuePriority, {
    nullable: false
  })
  async aggregateIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIssuePriorityArgs): Promise<AggregateIssuePriority> {
    return getPrismaFromContext(ctx).issuePriority.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
