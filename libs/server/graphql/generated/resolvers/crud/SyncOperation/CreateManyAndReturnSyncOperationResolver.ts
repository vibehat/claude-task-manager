import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSyncOperationArgs } from "./args/CreateManyAndReturnSyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
import { CreateManyAndReturnSyncOperation } from "../../outputs/CreateManyAndReturnSyncOperation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncOperation)
export class CreateManyAndReturnSyncOperationResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSyncOperation], {
    nullable: false
  })
  async createManyAndReturnSyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSyncOperationArgs): Promise<CreateManyAndReturnSyncOperation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
