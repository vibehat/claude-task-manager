import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIssueStatusArgs } from "./args/AggregateIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
import { AggregateIssueStatus } from "../../outputs/AggregateIssueStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueStatus)
export class AggregateIssueStatusResolver {
  @TypeGraphQL.Query(_returns => AggregateIssueStatus, {
    nullable: false
  })
  async aggregateIssueStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIssueStatusArgs): Promise<AggregateIssueStatus> {
    return getPrismaFromContext(ctx).issueStatus.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
