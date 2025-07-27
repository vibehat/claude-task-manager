import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSyncOperationArgs } from "./args/AggregateSyncOperationArgs";
import { CreateManyAndReturnSyncOperationArgs } from "./args/CreateManyAndReturnSyncOperationArgs";
import { CreateManySyncOperationArgs } from "./args/CreateManySyncOperationArgs";
import { CreateOneSyncOperationArgs } from "./args/CreateOneSyncOperationArgs";
import { DeleteManySyncOperationArgs } from "./args/DeleteManySyncOperationArgs";
import { DeleteOneSyncOperationArgs } from "./args/DeleteOneSyncOperationArgs";
import { FindFirstSyncOperationArgs } from "./args/FindFirstSyncOperationArgs";
import { FindFirstSyncOperationOrThrowArgs } from "./args/FindFirstSyncOperationOrThrowArgs";
import { FindManySyncOperationArgs } from "./args/FindManySyncOperationArgs";
import { FindUniqueSyncOperationArgs } from "./args/FindUniqueSyncOperationArgs";
import { FindUniqueSyncOperationOrThrowArgs } from "./args/FindUniqueSyncOperationOrThrowArgs";
import { GroupBySyncOperationArgs } from "./args/GroupBySyncOperationArgs";
import { UpdateManySyncOperationArgs } from "./args/UpdateManySyncOperationArgs";
import { UpdateOneSyncOperationArgs } from "./args/UpdateOneSyncOperationArgs";
import { UpsertOneSyncOperationArgs } from "./args/UpsertOneSyncOperationArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SyncOperation } from "../../../models/SyncOperation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSyncOperation } from "../../outputs/AggregateSyncOperation";
import { CreateManyAndReturnSyncOperation } from "../../outputs/CreateManyAndReturnSyncOperation";
import { SyncOperationGroupBy } from "../../outputs/SyncOperationGroupBy";

@TypeGraphQL.Resolver(_of => SyncOperation)
export class SyncOperationCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSyncOperation, {
    nullable: false
  })
  async aggregateSyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSyncOperationArgs): Promise<AggregateSyncOperation> {
    return getPrismaFromContext(ctx).syncOperation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySyncOperationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => SyncOperation, {
    nullable: false
  })
  async createOneSyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSyncOperationArgs): Promise<SyncOperation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySyncOperationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SyncOperation, {
    nullable: true
  })
  async deleteOneSyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSyncOperationArgs): Promise<SyncOperation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SyncOperation, {
    nullable: true
  })
  async findFirstSyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSyncOperationArgs): Promise<SyncOperation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SyncOperation, {
    nullable: true
  })
  async findFirstSyncOperationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSyncOperationOrThrowArgs): Promise<SyncOperation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SyncOperation], {
    nullable: false
  })
  async syncOperations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySyncOperationArgs): Promise<SyncOperation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SyncOperation, {
    nullable: true
  })
  async syncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSyncOperationArgs): Promise<SyncOperation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySyncOperationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => SyncOperation, {
    nullable: false
  })
  async upsertOneSyncOperation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSyncOperationArgs): Promise<SyncOperation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).syncOperation.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
