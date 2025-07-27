import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Task } from "../../../models/Task";
import { TaskDependency } from "../../../models/TaskDependency";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskDependency)
export class TaskDependencyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: false
  })
  async task(@TypeGraphQL.Root() taskDependency: TaskDependency, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Task> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.findUniqueOrThrow({
      where: {
        id: taskDependency.id,
      },
    }).task({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: false
  })
  async dependsOn(@TypeGraphQL.Root() taskDependency: TaskDependency, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Task> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskDependency.findUniqueOrThrow({
      where: {
        id: taskDependency.id,
      },
    }).dependsOn({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
