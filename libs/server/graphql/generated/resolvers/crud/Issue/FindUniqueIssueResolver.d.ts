import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIssueArgs } from "./args/FindUniqueIssueArgs";
import { Issue } from "../../../models/Issue";
export declare class FindUniqueIssueResolver {
    issue(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIssueArgs): Promise<Issue | null>;
}
