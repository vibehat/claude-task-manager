import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { IssueStatus } from "../../../models/IssueStatus";
import { IssueStatusIssuesArgs } from "./args/IssueStatusIssuesArgs";
export declare class IssueStatusRelationsResolver {
    issues(issueStatus: IssueStatus, ctx: any, info: GraphQLResolveInfo, args: IssueStatusIssuesArgs): Promise<Issue[]>;
}
