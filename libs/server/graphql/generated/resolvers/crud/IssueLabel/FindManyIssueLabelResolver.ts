import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyIssueLabelArgs } from "./args/FindManyIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueLabel)
export class FindManyIssueLabelResolver {
  @TypeGraphQL.Query(_returns => [IssueLabel], {
    nullable: false
  })
  async issueLabels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyIssueLabelArgs): Promise<IssueLabel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueLabel.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
