import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneIssueLabelArgs } from "./args/DeleteOneIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueLabel)
export class DeleteOneIssueLabelResolver {
  @TypeGraphQL.Mutation(_returns => IssueLabel, {
    nullable: true
  })
  async deleteOneIssueLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneIssueLabelArgs): Promise<IssueLabel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueLabel.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
