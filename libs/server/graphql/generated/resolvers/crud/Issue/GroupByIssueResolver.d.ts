import type { GraphQLResolveInfo } from "graphql";
import { GroupByIssueArgs } from "./args/GroupByIssueArgs";
import { IssueGroupBy } from "../../outputs/IssueGroupBy";
export declare class GroupByIssueResolver {
    groupByIssue(ctx: any, info: GraphQLResolveInfo, args: GroupByIssueArgs): Promise<IssueGroupBy[]>;
}
