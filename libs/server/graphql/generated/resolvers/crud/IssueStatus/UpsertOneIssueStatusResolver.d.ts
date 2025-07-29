import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneIssueStatusArgs } from "./args/UpsertOneIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
export declare class UpsertOneIssueStatusResolver {
    upsertOneIssueStatus(ctx: any, info: GraphQLResolveInfo, args: UpsertOneIssueStatusArgs): Promise<IssueStatus>;
}
