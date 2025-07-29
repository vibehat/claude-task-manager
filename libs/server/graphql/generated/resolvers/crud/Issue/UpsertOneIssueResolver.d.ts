import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneIssueArgs } from "./args/UpsertOneIssueArgs";
import { Issue } from "../../../models/Issue";
export declare class UpsertOneIssueResolver {
    upsertOneIssue(ctx: any, info: GraphQLResolveInfo, args: UpsertOneIssueArgs): Promise<Issue>;
}
