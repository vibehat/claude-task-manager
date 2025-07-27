import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSubtaskOrThrowArgs } from "./args/FindFirstSubtaskOrThrowArgs";
import { Subtask } from "../../../models/Subtask";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subtask)
export class FindFirstSubtaskOrThrowResolver {
  @TypeGraphQL.Query(_returns => Subtask, {
    nullable: true
  })
  async findFirstSubtaskOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSubtaskOrThrowArgs): Promise<Subtask | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).subtask.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
