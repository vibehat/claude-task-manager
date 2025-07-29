import type { GraphQLResolveInfo } from "graphql";
import { AggregateIssuePriorityArgs } from "./args/AggregateIssuePriorityArgs";
import { AggregateIssuePriority } from "../../outputs/AggregateIssuePriority";
export declare class AggregateIssuePriorityResolver {
    aggregateIssuePriority(ctx: any, info: GraphQLResolveInfo, args: AggregateIssuePriorityArgs): Promise<AggregateIssuePriority>;
}
