import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSubtaskArgs } from "./args/CreateManyAndReturnSubtaskArgs";
import { Subtask } from "../../../models/Subtask";
import { CreateManyAndReturnSubtask } from "../../outputs/CreateManyAndReturnSubtask";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subtask)
export class CreateManyAndReturnSubtaskResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSubtask], {
    nullable: false
  })
  async createManyAndReturnSubtask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSubtaskArgs): Promise<CreateManyAndReturnSubtask[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subtask.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
