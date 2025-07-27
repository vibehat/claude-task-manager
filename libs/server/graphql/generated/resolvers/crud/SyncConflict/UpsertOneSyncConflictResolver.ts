import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSyncConflictArgs } from "./args/UpsertOneSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncConflict)
export class UpsertOneSyncConflictResolver {
  @TypeGraphQL.Mutation(_returns => SyncConflict, {
    nullable: false
  })
  async upsertOneSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSyncConflictArgs): Promise<SyncConflict> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
