import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssueStatusArgs } from "./args/FindFirstIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
export declare class FindFirstIssueStatusResolver {
    findFirstIssueStatus(ctx: any, info: GraphQLResolveInfo, args: FindFirstIssueStatusArgs): Promise<IssueStatus | null>;
}
