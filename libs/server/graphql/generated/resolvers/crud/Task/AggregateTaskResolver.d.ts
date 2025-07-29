import type { GraphQLResolveInfo } from "graphql";
import { AggregateTaskArgs } from "./args/AggregateTaskArgs";
import { AggregateTask } from "../../outputs/AggregateTask";
export declare class AggregateTaskResolver {
    aggregateTask(ctx: any, info: GraphQLResolveInfo, args: AggregateTaskArgs): Promise<AggregateTask>;
}
