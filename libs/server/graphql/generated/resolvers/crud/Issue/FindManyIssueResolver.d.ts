import type { GraphQLResolveInfo } from "graphql";
import { FindManyIssueArgs } from "./args/FindManyIssueArgs";
import { Issue } from "../../../models/Issue";
export declare class FindManyIssueResolver {
    issues(ctx: any, info: GraphQLResolveInfo, args: FindManyIssueArgs): Promise<Issue[]>;
}
