import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssuePriorityOrThrowArgs } from "./args/FindFirstIssuePriorityOrThrowArgs";
import { IssuePriority } from "../../../models/IssuePriority";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssuePriority)
export class FindFirstIssuePriorityOrThrowResolver {
  @TypeGraphQL.Query(_returns => IssuePriority, {
    nullable: true
  })
  async findFirstIssuePriorityOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIssuePriorityOrThrowArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
