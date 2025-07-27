import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnIssuePriorityArgs } from "./args/CreateManyAndReturnIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
import { CreateManyAndReturnIssuePriority } from "../../outputs/CreateManyAndReturnIssuePriority";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssuePriority)
export class CreateManyAndReturnIssuePriorityResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssuePriority], {
    nullable: false
  })
  async createManyAndReturnIssuePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnIssuePriorityArgs): Promise<CreateManyAndReturnIssuePriority[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).issuePriority.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
