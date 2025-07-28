import type { GraphQLResolveInfo } from "graphql";
import { GroupByIssueLabelArgs } from "./args/GroupByIssueLabelArgs";
import { IssueLabelGroupBy } from "../../outputs/IssueLabelGroupBy";
export declare class GroupByIssueLabelResolver {
    groupByIssueLabel(ctx: any, info: GraphQLResolveInfo, args: GroupByIssueLabelArgs): Promise<IssueLabelGroupBy[]>;
}
