import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneIssueStatusArgs } from "./args/DeleteOneIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueStatus)
export class DeleteOneIssueStatusResolver {
  @TypeGraphQL.Mutation(_returns => IssueStatus, {
    nullable: true
  })
  async deleteOneIssueStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneIssueStatusArgs): Promise<IssueStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
