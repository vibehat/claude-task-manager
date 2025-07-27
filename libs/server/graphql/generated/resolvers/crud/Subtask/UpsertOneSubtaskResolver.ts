import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSubtaskArgs } from "./args/UpsertOneSubtaskArgs";
import { Subtask } from "../../../models/Subtask";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subtask)
export class UpsertOneSubtaskResolver {
  @TypeGraphQL.Mutation(_returns => Subtask, {
    nullable: false
  })
  async upsertOneSubtask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSubtaskArgs): Promise<Subtask> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subtask.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
