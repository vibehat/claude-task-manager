import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneIssueLabelArgs } from "./args/UpsertOneIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueLabel)
export class UpsertOneIssueLabelResolver {
  @TypeGraphQL.Mutation(_returns => IssueLabel, {
    nullable: false
  })
  async upsertOneIssueLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIssueLabelArgs): Promise<IssueLabel> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueLabel.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
