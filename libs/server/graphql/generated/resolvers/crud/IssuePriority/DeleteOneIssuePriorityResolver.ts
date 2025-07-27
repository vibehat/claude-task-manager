import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneIssuePriorityArgs } from "./args/DeleteOneIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssuePriority)
export class DeleteOneIssuePriorityResolver {
  @TypeGraphQL.Mutation(_returns => IssuePriority, {
    nullable: true
  })
  async deleteOneIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneIssuePriorityArgs): Promise<IssuePriority | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
