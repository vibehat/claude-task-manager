import type { GraphQLResolveInfo } from "graphql";
import { AggregateIssueStatusArgs } from "./args/AggregateIssueStatusArgs";
import { AggregateIssueStatus } from "../../outputs/AggregateIssueStatus";
export declare class AggregateIssueStatusResolver {
    aggregateIssueStatus(ctx: any, info: GraphQLResolveInfo, args: AggregateIssueStatusArgs): Promise<AggregateIssueStatus>;
}
