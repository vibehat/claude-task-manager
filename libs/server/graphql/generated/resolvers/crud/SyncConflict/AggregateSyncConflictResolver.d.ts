import type { GraphQLResolveInfo } from "graphql";
import { AggregateSyncConflictArgs } from "./args/AggregateSyncConflictArgs";
import { AggregateSyncConflict } from "../../outputs/AggregateSyncConflict";
export declare class AggregateSyncConflictResolver {
    aggregateSyncConflict(ctx: any, info: GraphQLResolveInfo, args: AggregateSyncConflictArgs): Promise<AggregateSyncConflict>;
}
