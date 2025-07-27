import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSyncConflictArgs } from "./args/AggregateSyncConflictArgs";
import { CreateManyAndReturnSyncConflictArgs } from "./args/CreateManyAndReturnSyncConflictArgs";
import { CreateManySyncConflictArgs } from "./args/CreateManySyncConflictArgs";
import { CreateOneSyncConflictArgs } from "./args/CreateOneSyncConflictArgs";
import { DeleteManySyncConflictArgs } from "./args/DeleteManySyncConflictArgs";
import { DeleteOneSyncConflictArgs } from "./args/DeleteOneSyncConflictArgs";
import { FindFirstSyncConflictArgs } from "./args/FindFirstSyncConflictArgs";
import { FindFirstSyncConflictOrThrowArgs } from "./args/FindFirstSyncConflictOrThrowArgs";
import { FindManySyncConflictArgs } from "./args/FindManySyncConflictArgs";
import { FindUniqueSyncConflictArgs } from "./args/FindUniqueSyncConflictArgs";
import { FindUniqueSyncConflictOrThrowArgs } from "./args/FindUniqueSyncConflictOrThrowArgs";
import { GroupBySyncConflictArgs } from "./args/GroupBySyncConflictArgs";
import { UpdateManySyncConflictArgs } from "./args/UpdateManySyncConflictArgs";
import { UpdateOneSyncConflictArgs } from "./args/UpdateOneSyncConflictArgs";
import { UpsertOneSyncConflictArgs } from "./args/UpsertOneSyncConflictArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SyncConflict } from "../../../models/SyncConflict";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSyncConflict } from "../../outputs/AggregateSyncConflict";
import { CreateManyAndReturnSyncConflict } from "../../outputs/CreateManyAndReturnSyncConflict";
import { SyncConflictGroupBy } from "../../outputs/SyncConflictGroupBy";

@TypeGraphQL.Resolver(_of => SyncConflict)
export class SyncConflictCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSyncConflict, {
    nullable: false
  })
  async aggregateSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSyncConflictArgs): Promise<AggregateSyncConflict> {
    return getPrismaFromContext(ctx).syncConflict.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySyncConflictArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => SyncConflict, {
    nullable: false
  })
  async createOneSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSyncConflictArgs): Promise<SyncConflict> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySyncConflictArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SyncConflict, {
    nullable: true
  })
  async deleteOneSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSyncConflictArgs): Promise<SyncConflict | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SyncConflict, {
    nullable: true
  })
  async findFirstSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSyncConflictArgs): Promise<SyncConflict | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SyncConflict, {
    nullable: true
  })
  async findFirstSyncConflictOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSyncConflictOrThrowArgs): Promise<SyncConflict | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SyncConflict], {
    nullable: false
  })
  async syncConflicts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySyncConflictArgs): Promise<SyncConflict[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SyncConflict, {
    nullable: true
  })
  async syncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSyncConflictArgs): Promise<SyncConflict | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySyncConflictArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SyncConflict, {
    nullable: true
  })
  async updateOneSyncConflict(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSyncConflictArgs): Promise<SyncConflict | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncConflict.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
