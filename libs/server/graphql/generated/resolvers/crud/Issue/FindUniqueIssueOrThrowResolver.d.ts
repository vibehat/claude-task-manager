import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIssueOrThrowArgs } from "./args/FindUniqueIssueOrThrowArgs";
import { Issue } from "../../../models/Issue";
export declare class FindUniqueIssueOrThrowResolver {
    getIssue(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIssueOrThrowArgs): Promise<Issue | null>;
}
