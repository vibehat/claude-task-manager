import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneIssuePriorityArgs } from "./args/UpsertOneIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssuePriority)
export class UpsertOneIssuePriorityResolver {
  @TypeGraphQL.Mutation(_returns => IssuePriority, {
    nullable: false
  })
  async upsertOneIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIssuePriorityArgs): Promise<IssuePriority> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
