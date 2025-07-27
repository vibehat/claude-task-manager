import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTaskDependencyArgs } from "./args/CreateManyAndReturnTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
import { CreateManyAndReturnTaskDependency } from "../../outputs/CreateManyAndReturnTaskDependency";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskDependency)
export class CreateManyAndReturnTaskDependencyResolver {
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
}
