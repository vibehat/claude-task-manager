import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { IssuePriority } from "../../../models/IssuePriority";
import { IssuePriorityIssuesArgs } from "./args/IssuePriorityIssuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssuePriority)
export class IssuePriorityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Issue], {
    nullable: false
  })
  async issues(@TypeGraphQL.Root() issuePriority: IssuePriority, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IssuePriorityIssuesArgs): Promise<Issue[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.findUniqueOrThrow({
      where: {
        id: issuePriority.id,
      },
    }).issues({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
