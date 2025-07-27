import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { IssueLabel } from "../../../models/IssueLabel";
import { Label } from "../../../models/Label";
import { LabelIssuesArgs } from "./args/LabelIssuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Label)
export class LabelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [IssueLabel], {
    nullable: false
  })
  async issues(@TypeGraphQL.Root() label: Label, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LabelIssuesArgs): Promise<IssueLabel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).label.findUniqueOrThrow({
      where: {
        id: label.id,
      },
    }).issues({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
