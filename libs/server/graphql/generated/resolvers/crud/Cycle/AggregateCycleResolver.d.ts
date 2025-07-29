import type { GraphQLResolveInfo } from "graphql";
import { AggregateCycleArgs } from "./args/AggregateCycleArgs";
import { AggregateCycle } from "../../outputs/AggregateCycle";
export declare class AggregateCycleResolver {
    aggregateCycle(ctx: any, info: GraphQLResolveInfo, args: AggregateCycleArgs): Promise<AggregateCycle>;
}
