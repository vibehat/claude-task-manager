import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnIssueStatusArgs } from "./args/CreateManyAndReturnIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
import { CreateManyAndReturnIssueStatus } from "../../outputs/CreateManyAndReturnIssueStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueStatus)
export class CreateManyAndReturnIssueStatusResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssueStatus], {
    nullable: false
  })
  async createManyAndReturnIssueStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnIssueStatusArgs): Promise<CreateManyAndReturnIssueStatus[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueStatus.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
