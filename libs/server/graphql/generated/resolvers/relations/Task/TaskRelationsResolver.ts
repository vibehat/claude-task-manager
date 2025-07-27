import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { Subtask } from "../../../models/Subtask";
import { Task } from "../../../models/Task";
import { TaskDependency } from "../../../models/TaskDependency";
import { TaskDependenciesArgs } from "./args/TaskDependenciesArgs";
import { TaskDependentsArgs } from "./args/TaskDependentsArgs";
import { TaskIssuesArgs } from "./args/TaskIssuesArgs";
import { TaskSubtasksArgs } from "./args/TaskSubtasksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Subtask], {
    nullable: false
  })
  async subtasks(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TaskSubtasksArgs): Promise<Subtask[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findUniqueOrThrow({
      where: {
        id: task.id,
      },
    }).subtasks({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TaskDependency], {
    nullable: false
  })
  async dependencies(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TaskDependenciesArgs): Promise<TaskDependency[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findUniqueOrThrow({
      where: {
        id: task.id,
      },
    }).dependencies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TaskDependency], {
    nullable: false
  })
  async dependents(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TaskDependentsArgs): Promise<TaskDependency[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findUniqueOrThrow({
      where: {
        id: task.id,
      },
    }).dependents({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Issue], {
    nullable: false
  })
  async issues(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TaskIssuesArgs): Promise<Issue[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).task.findUniqueOrThrow({
      where: {
        id: task.id,
      },
    }).issues({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
