import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCycleArgs } from "./args/AggregateCycleArgs";
import { Cycle } from "../../../models/Cycle";
import { AggregateCycle } from "../../outputs/AggregateCycle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Cycle)
export class AggregateCycleResolver {
  @TypeGraphQL.Query(_returns => AggregateCycle, {
    nullable: false
  })
  async aggregateCycle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCycleArgs): Promise<AggregateCycle> {
    return getPrismaFromContext(ctx).cycle.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
