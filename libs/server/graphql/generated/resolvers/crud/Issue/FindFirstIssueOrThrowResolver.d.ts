import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssueOrThrowArgs } from "./args/FindFirstIssueOrThrowArgs";
import { Issue } from "../../../models/Issue";
export declare class FindFirstIssueOrThrowResolver {
    findFirstIssueOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstIssueOrThrowArgs): Promise<Issue | null>;
}
