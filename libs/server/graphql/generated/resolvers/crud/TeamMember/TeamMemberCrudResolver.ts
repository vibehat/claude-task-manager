import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTeamMemberArgs } from "./args/AggregateTeamMemberArgs";
import { CreateManyAndReturnTeamMemberArgs } from "./args/CreateManyAndReturnTeamMemberArgs";
import { CreateManyTeamMemberArgs } from "./args/CreateManyTeamMemberArgs";
import { CreateOneTeamMemberArgs } from "./args/CreateOneTeamMemberArgs";
import { DeleteManyTeamMemberArgs } from "./args/DeleteManyTeamMemberArgs";
import { DeleteOneTeamMemberArgs } from "./args/DeleteOneTeamMemberArgs";
import { FindFirstTeamMemberArgs } from "./args/FindFirstTeamMemberArgs";
import { FindFirstTeamMemberOrThrowArgs } from "./args/FindFirstTeamMemberOrThrowArgs";
import { FindManyTeamMemberArgs } from "./args/FindManyTeamMemberArgs";
import { FindUniqueTeamMemberArgs } from "./args/FindUniqueTeamMemberArgs";
import { FindUniqueTeamMemberOrThrowArgs } from "./args/FindUniqueTeamMemberOrThrowArgs";
import { GroupByTeamMemberArgs } from "./args/GroupByTeamMemberArgs";
import { UpdateManyTeamMemberArgs } from "./args/UpdateManyTeamMemberArgs";
import { UpdateOneTeamMemberArgs } from "./args/UpdateOneTeamMemberArgs";
import { UpsertOneTeamMemberArgs } from "./args/UpsertOneTeamMemberArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TeamMember } from "../../../models/TeamMember";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTeamMember } from "../../outputs/AggregateTeamMember";
import { CreateManyAndReturnTeamMember } from "../../outputs/CreateManyAndReturnTeamMember";
import { TeamMemberGroupBy } from "../../outputs/TeamMemberGroupBy";

@TypeGraphQL.Resolver(_of => TeamMember)
export class TeamMemberCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTeamMember, {
    nullable: false
  })
  async aggregateTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTeamMemberArgs): Promise<AggregateTeamMember> {
    return getPrismaFromContext(ctx).teamMember.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTeamMemberArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeamMember], {
    nullable: false
  })
  async createManyAndReturnTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTeamMemberArgs): Promise<CreateManyAndReturnTeamMember[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TeamMember, {
    nullable: false
  })
  async createOneTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTeamMemberArgs): Promise<TeamMember> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTeamMemberArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TeamMember, {
    nullable: true
  })
  async deleteOneTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTeamMemberArgs): Promise<TeamMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TeamMember, {
    nullable: true
  })
  async findFirstTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTeamMemberArgs): Promise<TeamMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TeamMember, {
    nullable: true
  })
  async findFirstTeamMemberOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTeamMemberOrThrowArgs): Promise<TeamMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TeamMember], {
    nullable: false
  })
  async teamMembers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTeamMemberArgs): Promise<TeamMember[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TeamMember, {
    nullable: true
  })
  async teamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTeamMemberArgs): Promise<TeamMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TeamMember, {
    nullable: true
  })
  async getTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTeamMemberOrThrowArgs): Promise<TeamMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TeamMemberGroupBy], {
    nullable: false
  })
  async groupByTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTeamMemberArgs): Promise<TeamMemberGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTeamMemberArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TeamMember, {
    nullable: true
  })
  async updateOneTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTeamMemberArgs): Promise<TeamMember | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TeamMember, {
    nullable: false
  })
  async upsertOneTeamMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTeamMemberArgs): Promise<TeamMember> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).teamMember.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
