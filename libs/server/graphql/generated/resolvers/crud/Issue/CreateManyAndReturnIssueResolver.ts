import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnIssueArgs } from "./args/CreateManyAndReturnIssueArgs";
import { Issue } from "../../../models/Issue";
import { CreateManyAndReturnIssue } from "../../outputs/CreateManyAndReturnIssue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Issue)
export class CreateManyAndReturnIssueResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssue], {
    nullable: false
  })
  async createManyAndReturnIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnIssueArgs): Promise<CreateManyAndReturnIssue[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issue.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
