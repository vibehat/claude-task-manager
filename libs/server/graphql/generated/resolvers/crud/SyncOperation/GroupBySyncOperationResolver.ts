import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySyncOperationArgs } from "./args/GroupBySyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
import { SyncOperationGroupBy } from "../../outputs/SyncOperationGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncOperation)
export class GroupBySyncOperationResolver {
  @TypeGraphQL.Query(_returns => [SyncOperationGroupBy], {
    nullable: false
  })
  async groupBySyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySyncOperationArgs): Promise<SyncOperationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
