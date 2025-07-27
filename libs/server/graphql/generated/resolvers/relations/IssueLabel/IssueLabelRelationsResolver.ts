import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { IssueLabel } from "../../../models/IssueLabel";
import { Label } from "../../../models/Label";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueLabel)
export class IssueLabelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Issue, {
    nullable: false
  })
  async issue(@TypeGraphQL.Root() issueLabel: IssueLabel, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Issue> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueLabel.findUniqueOrThrow({
      where: {
        id: issueLabel.id,
      },
    }).issue({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Label, {
    nullable: false
  })
  async label(@TypeGraphQL.Root() issueLabel: IssueLabel, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Label> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issueLabel.findUniqueOrThrow({
      where: {
        id: issueLabel.id,
      },
    }).label({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
