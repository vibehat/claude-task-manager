import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIssueStatusOrThrowArgs } from "./args/FindUniqueIssueStatusOrThrowArgs";
import { IssueStatus } from "../../../models/IssueStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueStatus)
export class FindUniqueIssueStatusOrThrowResolver {
  @TypeGraphQL.Query(_returns => IssueStatus, {
    nullable: true
  })
  async getIssueStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIssueStatusOrThrowArgs): Promise<IssueStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueStatus.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
