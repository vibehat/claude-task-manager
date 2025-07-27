import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSyncOperationArgs } from "./args/AggregateSyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
import { AggregateSyncOperation } from "../../outputs/AggregateSyncOperation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncOperation)
export class AggregateSyncOperationResolver {
  @TypeGraphQL.Query(_returns => AggregateSyncOperation, {
    nullable: false
  })
  async aggregateSyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSyncOperationArgs): Promise<AggregateSyncOperation> {
    return getPrismaFromContext(ctx).syncOperation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
