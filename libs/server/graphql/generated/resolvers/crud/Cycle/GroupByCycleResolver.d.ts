import type { GraphQLResolveInfo } from "graphql";
import { GroupByCycleArgs } from "./args/GroupByCycleArgs";
import { CycleGroupBy } from "../../outputs/CycleGroupBy";
export declare class GroupByCycleResolver {
    groupByCycle(ctx: any, info: GraphQLResolveInfo, args: GroupByCycleArgs): Promise<CycleGroupBy[]>;
}
