import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssueStatusOrThrowArgs } from "./args/FindFirstIssueStatusOrThrowArgs";
import { IssueStatus } from "../../../models/IssueStatus";
export declare class FindFirstIssueStatusOrThrowResolver {
    findFirstIssueStatusOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstIssueStatusOrThrowArgs): Promise<IssueStatus | null>;
}
