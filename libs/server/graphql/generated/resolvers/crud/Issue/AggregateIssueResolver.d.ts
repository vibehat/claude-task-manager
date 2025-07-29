import type { GraphQLResolveInfo } from "graphql";
import { AggregateIssueArgs } from "./args/AggregateIssueArgs";
import { AggregateIssue } from "../../outputs/AggregateIssue";
export declare class AggregateIssueResolver {
    aggregateIssue(ctx: any, info: GraphQLResolveInfo, args: AggregateIssueArgs): Promise<AggregateIssue>;
}
