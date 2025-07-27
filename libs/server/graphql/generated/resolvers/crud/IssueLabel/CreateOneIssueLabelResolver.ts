import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneIssueLabelArgs } from "./args/CreateOneIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueLabel)
export class CreateOneIssueLabelResolver {
  @TypeGraphQL.Mutation(_returns => IssueLabel, {
    nullable: false
  })
  async createOneIssueLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneIssueLabelArgs): Promise<IssueLabel> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueLabel.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
