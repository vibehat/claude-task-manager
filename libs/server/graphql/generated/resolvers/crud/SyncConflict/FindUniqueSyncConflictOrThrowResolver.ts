import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSyncConflictOrThrowArgs } from "./args/FindUniqueSyncConflictOrThrowArgs";
import { SyncConflict } from "../../../models/SyncConflict";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncConflict)
export class FindUniqueSyncConflictOrThrowResolver {
  @TypeGraphQL.Query(_returns => SyncConflict, {
    nullable: true
  })
  async getSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSyncConflictOrThrowArgs): Promise<SyncConflict | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
