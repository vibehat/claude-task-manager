import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTaskArgs } from "./args/CreateManyAndReturnTaskArgs";
import { Task } from "../../../models/Task";
import { CreateManyAndReturnTask } from "../../outputs/CreateManyAndReturnTask";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class CreateManyAndReturnTaskResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTask], {
    nullable: false
  })
  async createManyAndReturnTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTaskArgs): Promise<CreateManyAndReturnTask[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
