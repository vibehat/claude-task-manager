import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSyncConflictArgs } from "./args/CreateManyAndReturnSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
import { CreateManyAndReturnSyncConflict } from "../../outputs/CreateManyAndReturnSyncConflict";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SyncConflict)
export class CreateManyAndReturnSyncConflictResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSyncConflict], {
    nullable: false
  })
  async createManyAndReturnSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSyncConflictArgs): Promise<CreateManyAndReturnSyncConflict[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
