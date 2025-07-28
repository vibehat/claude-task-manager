import type { GraphQLResolveInfo } from "graphql";
import { AggregateLabelArgs } from "./args/AggregateLabelArgs";
import { AggregateLabel } from "../../outputs/AggregateLabel";
export declare class AggregateLabelResolver {
    aggregateLabel(ctx: any, info: GraphQLResolveInfo, args: AggregateLabelArgs): Promise<AggregateLabel>;
}
