import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSyncOperationArgs } from "./args/UpdateOneSyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncOperation)
export class UpdateOneSyncOperationResolver {
  @TypeGraphQL.Mutation(_returns => SyncOperation, {
    nullable: true
  })
  async updateOneSyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSyncOperationArgs): Promise<SyncOperation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
