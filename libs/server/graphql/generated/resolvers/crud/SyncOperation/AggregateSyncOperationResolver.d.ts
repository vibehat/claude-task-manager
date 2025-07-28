import type { GraphQLResolveInfo } from "graphql";
import { AggregateSyncOperationArgs } from "./args/AggregateSyncOperationArgs";
import { AggregateSyncOperation } from "../../outputs/AggregateSyncOperation";
export declare class AggregateSyncOperationResolver {
    aggregateSyncOperation(ctx: any, info: GraphQLResolveInfo, args: AggregateSyncOperationArgs): Promise<AggregateSyncOperation>;
}
