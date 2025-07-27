import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIssueLabelArgs } from "./args/AggregateIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
import { AggregateIssueLabel } from "../../outputs/AggregateIssueLabel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueLabel)
export class AggregateIssueLabelResolver {
  @TypeGraphQL.Query(_returns => AggregateIssueLabel, {
    nullable: false
  })
  async aggregateIssueLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIssueLabelArgs): Promise<AggregateIssueLabel> {
    return getPrismaFromContext(ctx).issueLabel.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
