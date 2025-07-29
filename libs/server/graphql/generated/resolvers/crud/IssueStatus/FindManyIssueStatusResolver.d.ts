import type { GraphQLResolveInfo } from "graphql";
import { FindManyIssueStatusArgs } from "./args/FindManyIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
export declare class FindManyIssueStatusResolver {
    issueStatuses(ctx: any, info: GraphQLResolveInfo, args: FindManyIssueStatusArgs): Promise<IssueStatus[]>;
}
