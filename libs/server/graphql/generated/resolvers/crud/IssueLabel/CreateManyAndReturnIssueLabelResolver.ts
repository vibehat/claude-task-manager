import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnIssueLabelArgs } from "./args/CreateManyAndReturnIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
import { CreateManyAndReturnIssueLabel } from "../../outputs/CreateManyAndReturnIssueLabel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueLabel)
export class CreateManyAndReturnIssueLabelResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssueLabel], {
    nullable: false
  })
  async createManyAndReturnIssueLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnIssueLabelArgs): Promise<CreateManyAndReturnIssueLabel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueLabel.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
