import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTaskDependencyArgs } from "./args/DeleteOneTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskDependency)
export class DeleteOneTaskDependencyResolver {
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
}
