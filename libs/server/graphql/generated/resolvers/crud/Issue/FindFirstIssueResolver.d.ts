import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssueArgs } from "./args/FindFirstIssueArgs";
import { Issue } from "../../../models/Issue";
export declare class FindFirstIssueResolver {
    findFirstIssue(ctx: any, info: GraphQLResolveInfo, args: FindFirstIssueArgs): Promise<Issue | null>;
}
