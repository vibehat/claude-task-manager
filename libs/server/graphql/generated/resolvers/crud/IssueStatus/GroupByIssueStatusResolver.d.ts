import type { GraphQLResolveInfo } from "graphql";
import { GroupByIssueStatusArgs } from "./args/GroupByIssueStatusArgs";
import { IssueStatusGroupBy } from "../../outputs/IssueStatusGroupBy";
export declare class GroupByIssueStatusResolver {
    groupByIssueStatus(ctx: any, info: GraphQLResolveInfo, args: GroupByIssueStatusArgs): Promise<IssueStatusGroupBy[]>;
}
