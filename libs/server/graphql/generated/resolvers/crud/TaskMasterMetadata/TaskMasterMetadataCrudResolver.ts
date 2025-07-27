import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTaskMasterMetadataArgs } from "./args/AggregateTaskMasterMetadataArgs";
import { CreateManyAndReturnTaskMasterMetadataArgs } from "./args/CreateManyAndReturnTaskMasterMetadataArgs";
import { CreateManyTaskMasterMetadataArgs } from "./args/CreateManyTaskMasterMetadataArgs";
import { CreateOneTaskMasterMetadataArgs } from "./args/CreateOneTaskMasterMetadataArgs";
import { DeleteManyTaskMasterMetadataArgs } from "./args/DeleteManyTaskMasterMetadataArgs";
import { DeleteOneTaskMasterMetadataArgs } from "./args/DeleteOneTaskMasterMetadataArgs";
import { FindFirstTaskMasterMetadataArgs } from "./args/FindFirstTaskMasterMetadataArgs";
import { FindFirstTaskMasterMetadataOrThrowArgs } from "./args/FindFirstTaskMasterMetadataOrThrowArgs";
import { FindManyTaskMasterMetadataArgs } from "./args/FindManyTaskMasterMetadataArgs";
import { FindUniqueTaskMasterMetadataArgs } from "./args/FindUniqueTaskMasterMetadataArgs";
import { FindUniqueTaskMasterMetadataOrThrowArgs } from "./args/FindUniqueTaskMasterMetadataOrThrowArgs";
import { GroupByTaskMasterMetadataArgs } from "./args/GroupByTaskMasterMetadataArgs";
import { UpdateManyTaskMasterMetadataArgs } from "./args/UpdateManyTaskMasterMetadataArgs";
import { UpdateOneTaskMasterMetadataArgs } from "./args/UpdateOneTaskMasterMetadataArgs";
import { UpsertOneTaskMasterMetadataArgs } from "./args/UpsertOneTaskMasterMetadataArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTaskMasterMetadata } from "../../outputs/AggregateTaskMasterMetadata";
import { CreateManyAndReturnTaskMasterMetadata } from "../../outputs/CreateManyAndReturnTaskMasterMetadata";
import { TaskMasterMetadataGroupBy } from "../../outputs/TaskMasterMetadataGroupBy";

@TypeGraphQL.Resolver(_of => TaskMasterMetadata)
export class TaskMasterMetadataCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTaskMasterMetadata, {
    nullable: false
  })
  async aggregateTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTaskMasterMetadataArgs): Promise<AggregateTaskMasterMetadata> {
    return getPrismaFromContext(ctx).taskMasterMetadata.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTaskMasterMetadataArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTaskMasterMetadata], {
    nullable: false
  })
  async createManyAndReturnTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTaskMasterMetadataArgs): Promise<CreateManyAndReturnTaskMasterMetadata[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TaskMasterMetadata, {
    nullable: false
  })
  async createOneTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTaskMasterMetadataArgs): Promise<TaskMasterMetadata> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTaskMasterMetadataArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TaskMasterMetadata, {
    nullable: true
  })
  async deleteOneTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTaskMasterMetadataArgs): Promise<TaskMasterMetadata | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TaskMasterMetadata, {
    nullable: true
  })
  async findFirstTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTaskMasterMetadataArgs): Promise<TaskMasterMetadata | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TaskMasterMetadata, {
    nullable: true
  })
  async findFirstTaskMasterMetadataOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTaskMasterMetadataOrThrowArgs): Promise<TaskMasterMetadata | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TaskMasterMetadata], {
    nullable: false
  })
  async findManyTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTaskMasterMetadataArgs): Promise<TaskMasterMetadata[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TaskMasterMetadata, {
    nullable: true
  })
  async findUniqueTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTaskMasterMetadataArgs): Promise<TaskMasterMetadata | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TaskMasterMetadata, {
    nullable: true
  })
  async findUniqueTaskMasterMetadataOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTaskMasterMetadataOrThrowArgs): Promise<TaskMasterMetadata | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TaskMasterMetadataGroupBy], {
    nullable: false
  })
  async groupByTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTaskMasterMetadataArgs): Promise<TaskMasterMetadataGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTaskMasterMetadataArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TaskMasterMetadata, {
    nullable: true
  })
  async updateOneTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTaskMasterMetadataArgs): Promise<TaskMasterMetadata | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TaskMasterMetadata, {
    nullable: false
  })
  async upsertOneTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTaskMasterMetadataArgs): Promise<TaskMasterMetadata> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
