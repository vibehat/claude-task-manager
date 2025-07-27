import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSyncConflictArgs } from "./args/AggregateSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
import { AggregateSyncConflict } from "../../outputs/AggregateSyncConflict";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncConflict)
export class AggregateSyncConflictResolver {
  @TypeGraphQL.Query(_returns => AggregateSyncConflict, {
    nullable: false
  })
  async aggregateSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSyncConflictArgs): Promise<AggregateSyncConflict> {
    return getPrismaFromContext(ctx).syncConflict.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
