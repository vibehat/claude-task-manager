import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySyncConflictArgs } from "./args/GroupBySyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
import { SyncConflictGroupBy } from "../../outputs/SyncConflictGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncConflict)
export class GroupBySyncConflictResolver {
  @TypeGraphQL.Query(_returns => [SyncConflictGroupBy], {
    nullable: false
  })
  async groupBySyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySyncConflictArgs): Promise<SyncConflictGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
