import type { GraphQLResolveInfo } from "graphql";
import { AggregateSubtaskArgs } from "./args/AggregateSubtaskArgs";
import { AggregateSubtask } from "../../outputs/AggregateSubtask";
export declare class AggregateSubtaskResolver {
    aggregateSubtask(ctx: any, info: GraphQLResolveInfo, args: AggregateSubtaskArgs): Promise<AggregateSubtask>;
}
