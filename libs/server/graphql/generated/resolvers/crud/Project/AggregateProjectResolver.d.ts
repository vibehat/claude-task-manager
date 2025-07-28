import type { GraphQLResolveInfo } from "graphql";
import { AggregateProjectArgs } from "./args/AggregateProjectArgs";
import { AggregateProject } from "../../outputs/AggregateProject";
export declare class AggregateProjectResolver {
    aggregateProject(ctx: any, info: GraphQLResolveInfo, args: AggregateProjectArgs): Promise<AggregateProject>;
}
