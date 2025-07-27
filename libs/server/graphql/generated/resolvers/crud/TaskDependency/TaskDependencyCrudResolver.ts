import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTaskDependencyArgs } from "./args/AggregateTaskDependencyArgs";
import { CreateManyAndReturnTaskDependencyArgs } from "./args/CreateManyAndReturnTaskDependencyArgs";
import { CreateManyTaskDependencyArgs } from "./args/CreateManyTaskDependencyArgs";
import { CreateOneTaskDependencyArgs } from "./args/CreateOneTaskDependencyArgs";
import { DeleteManyTaskDependencyArgs } from "./args/DeleteManyTaskDependencyArgs";
import { DeleteOneTaskDependencyArgs } from "./args/DeleteOneTaskDependencyArgs";
import { FindFirstTaskDependencyArgs } from "./args/FindFirstTaskDependencyArgs";
import { FindFirstTaskDependencyOrThrowArgs } from "./args/FindFirstTaskDependencyOrThrowArgs";
import { FindManyTaskDependencyArgs } from "./args/FindManyTaskDependencyArgs";
import { FindUniqueTaskDependencyArgs } from "./args/FindUniqueTaskDependencyArgs";
import { FindUniqueTaskDependencyOrThrowArgs } from "./args/FindUniqueTaskDependencyOrThrowArgs";
import { GroupByTaskDependencyArgs } from "./args/GroupByTaskDependencyArgs";
import { UpdateManyTaskDependencyArgs } from "./args/UpdateManyTaskDependencyArgs";
import { UpdateOneTaskDependencyArgs } from "./args/UpdateOneTaskDependencyArgs";
import { UpsertOneTaskDependencyArgs } from "./args/UpsertOneTaskDependencyArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TaskDependency } from "../../../models/TaskDependency";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTaskDependency } from "../../outputs/AggregateTaskDependency";
import { CreateManyAndReturnTaskDependency } from "../../outputs/CreateManyAndReturnTaskDependency";
import { TaskDependencyGroupBy } from "../../outputs/TaskDependencyGroupBy";

@TypeGraphQL.Resolver(_of => TaskDependency)
export class TaskDependencyCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTaskDependency, {
    nullable: false
  })
  async aggregateTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTaskDependencyArgs): Promise<AggregateTaskDependency> {
    return getPrismaFromContext(ctx).taskDependency.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTaskDependencyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTaskDependency], {
    nullable: false
  })
  async createManyAndReturnTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTaskDependencyArgs): Promise<CreateManyAndReturnTaskDependency[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TaskDependency, {
    nullable: false
  })
  async createOneTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTaskDependencyArgs): Promise<TaskDependency> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTaskDependencyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TaskDependency, {
    nullable: true
  })
  async deleteOneTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTaskDependencyArgs): Promise<TaskDependency | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TaskDependency, {
    nullable: true
  })
  async findFirstTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTaskDependencyArgs): Promise<TaskDependency | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TaskDependency, {
    nullable: true
  })
  async findFirstTaskDependencyOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTaskDependencyOrThrowArgs): Promise<TaskDependency | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TaskDependency], {
    nullable: false
  })
  async taskDependencies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTaskDependencyArgs): Promise<TaskDependency[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TaskDependency, {
    nullable: true
  })
  async taskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTaskDependencyArgs): Promise<TaskDependency | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TaskDependency, {
    nullable: true
  })
  async getTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTaskDependencyOrThrowArgs): Promise<TaskDependency | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TaskDependencyGroupBy], {
    nullable: false
  })
  async groupByTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTaskDependencyArgs): Promise<TaskDependencyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTaskDependencyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TaskDependency, {
    nullable: true
  })
  async updateOneTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTaskDependencyArgs): Promise<TaskDependency | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TaskDependency, {
    nullable: false
  })
  async upsertOneTaskDependency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTaskDependencyArgs): Promise<TaskDependency> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
