import type { GraphQLResolveInfo } from "graphql";
import { AggregateTaskDependencyArgs } from "./args/AggregateTaskDependencyArgs";
import { AggregateTaskDependency } from "../../outputs/AggregateTaskDependency";
export declare class AggregateTaskDependencyResolver {
    aggregateTaskDependency(ctx: any, info: GraphQLResolveInfo, args: AggregateTaskDependencyArgs): Promise<AggregateTaskDependency>;
}
