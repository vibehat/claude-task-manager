import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIssuePriorityArgs } from "./args/AggregateIssuePriorityArgs";
import { CreateManyAndReturnIssuePriorityArgs } from "./args/CreateManyAndReturnIssuePriorityArgs";
import { CreateManyIssuePriorityArgs } from "./args/CreateManyIssuePriorityArgs";
import { CreateOneIssuePriorityArgs } from "./args/CreateOneIssuePriorityArgs";
import { DeleteManyIssuePriorityArgs } from "./args/DeleteManyIssuePriorityArgs";
import { DeleteOneIssuePriorityArgs } from "./args/DeleteOneIssuePriorityArgs";
import { FindFirstIssuePriorityArgs } from "./args/FindFirstIssuePriorityArgs";
import { FindFirstIssuePriorityOrThrowArgs } from "./args/FindFirstIssuePriorityOrThrowArgs";
import { FindManyIssuePriorityArgs } from "./args/FindManyIssuePriorityArgs";
import { FindUniqueIssuePriorityArgs } from "./args/FindUniqueIssuePriorityArgs";
import { FindUniqueIssuePriorityOrThrowArgs } from "./args/FindUniqueIssuePriorityOrThrowArgs";
import { GroupByIssuePriorityArgs } from "./args/GroupByIssuePriorityArgs";
import { UpdateManyIssuePriorityArgs } from "./args/UpdateManyIssuePriorityArgs";
import { UpdateOneIssuePriorityArgs } from "./args/UpdateOneIssuePriorityArgs";
import { UpsertOneIssuePriorityArgs } from "./args/UpsertOneIssuePriorityArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { IssuePriority } from "../../../models/IssuePriority";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIssuePriority } from "../../outputs/AggregateIssuePriority";
import { CreateManyAndReturnIssuePriority } from "../../outputs/CreateManyAndReturnIssuePriority";
import { IssuePriorityGroupBy } from "../../outputs/IssuePriorityGroupBy";

@TypeGraphQL.Resolver(_of => IssuePriority)
export class IssuePriorityCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateIssuePriority, {
    nullable: false
  })
  async aggregateIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIssuePriorityArgs): Promise<AggregateIssuePriority> {
    return getPrismaFromContext(ctx).issuePriority.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyIssuePriorityArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssuePriority], {
    nullable: false
  })
  async createManyAndReturnIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnIssuePriorityArgs): Promise<CreateManyAndReturnIssuePriority[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IssuePriority, {
    nullable: false
  })
  async createOneIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneIssuePriorityArgs): Promise<IssuePriority> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyIssuePriorityArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IssuePriority, {
    nullable: true
  })
  async deleteOneIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneIssuePriorityArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IssuePriority, {
    nullable: true
  })
  async findFirstIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIssuePriorityArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IssuePriority, {
    nullable: true
  })
  async findFirstIssuePriorityOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIssuePriorityOrThrowArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [IssuePriority], {
    nullable: false
  })
  async issuePriorities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyIssuePriorityArgs): Promise<IssuePriority[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IssuePriority, {
    nullable: true
  })
  async issuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIssuePriorityArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IssuePriority, {
    nullable: true
  })
  async getIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIssuePriorityOrThrowArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [IssuePriorityGroupBy], {
    nullable: false
  })
  async groupByIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIssuePriorityArgs): Promise<IssuePriorityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyIssuePriorityArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IssuePriority, {
    nullable: true
  })
  async updateOneIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneIssuePriorityArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IssuePriority, {
    nullable: false
  })
  async upsertOneIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIssuePriorityArgs): Promise<IssuePriority> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
