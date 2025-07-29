import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIssueStatusArgs } from "./args/FindUniqueIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
export declare class FindUniqueIssueStatusResolver {
    issueStatus(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIssueStatusArgs): Promise<IssueStatus | null>;
}
