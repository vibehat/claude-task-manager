import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { Subtask } from "../../../models/Subtask";
import { Task } from "../../../models/Task";
import { SubtaskIssuesArgs } from "./args/SubtaskIssuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subtask)
export class SubtaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: false
  })
  async parentTask(@TypeGraphQL.Root() subtask: Subtask, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Task> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subtask.findUniqueOrThrow({
      where: {
        id: subtask.id,
      },
    }).parentTask({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Issue], {
    nullable: false
  })
  async issues(@TypeGraphQL.Root() subtask: Subtask, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SubtaskIssuesArgs): Promise<Issue[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subtask.findUniqueOrThrow({
      where: {
        id: subtask.id,
      },
    }).issues({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
