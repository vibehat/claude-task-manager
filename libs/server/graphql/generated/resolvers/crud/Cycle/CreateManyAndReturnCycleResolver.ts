import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCycleArgs } from "./args/CreateManyAndReturnCycleArgs";
import { Cycle } from "../../../models/Cycle";
import { CreateManyAndReturnCycle } from "../../outputs/CreateManyAndReturnCycle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cycle)
export class CreateManyAndReturnCycleResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCycle], {
    nullable: false
  })
  async createManyAndReturnCycle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCycleArgs): Promise<CreateManyAndReturnCycle[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cycle.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
