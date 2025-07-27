import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssuePriorityArgs } from "./args/FindFirstIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssuePriority)
export class FindFirstIssuePriorityResolver {
  @TypeGraphQL.Query(_returns => IssuePriority, {
    nullable: true
  })
  async findFirstIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIssuePriorityArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
