import type { GraphQLResolveInfo } from "graphql";
import { AggregateIssueLabelArgs } from "./args/AggregateIssueLabelArgs";
import { AggregateIssueLabel } from "../../outputs/AggregateIssueLabel";
export declare class AggregateIssueLabelResolver {
    aggregateIssueLabel(ctx: any, info: GraphQLResolveInfo, args: AggregateIssueLabelArgs): Promise<AggregateIssueLabel>;
}
