import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSyncConflictArgs } from "./args/FindFirstSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncConflict)
export class FindFirstSyncConflictResolver {
  @TypeGraphQL.Query(_returns => SyncConflict, {
    nullable: true
  })
  async findFirstSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSyncConflictArgs): Promise<SyncConflict | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
