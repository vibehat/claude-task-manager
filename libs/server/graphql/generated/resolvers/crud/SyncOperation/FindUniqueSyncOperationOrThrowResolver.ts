import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSyncOperationOrThrowArgs } from "./args/FindUniqueSyncOperationOrThrowArgs";
import { SyncOperation } from "../../../models/SyncOperation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncOperation)
export class FindUniqueSyncOperationOrThrowResolver {
  @TypeGraphQL.Query(_returns => SyncOperation, {
    nullable: true
  })
  async getSyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSyncOperationOrThrowArgs): Promise<SyncOperation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
