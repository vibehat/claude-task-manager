import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIssueArgs } from "./args/AggregateIssueArgs";
import { Issue } from "../../../models/Issue";
import { AggregateIssue } from "../../outputs/AggregateIssue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Issue)
export class AggregateIssueResolver {
  @TypeGraphQL.Query(_returns => AggregateIssue, {
    nullable: false
  })
  async aggregateIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIssueArgs): Promise<AggregateIssue> {
    return getPrismaFromContext(ctx).issue.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
