import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIssueStatusOrThrowArgs } from "./args/FindUniqueIssueStatusOrThrowArgs";
import { IssueStatus } from "../../../models/IssueStatus";
export declare class FindUniqueIssueStatusOrThrowResolver {
    getIssueStatus(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIssueStatusOrThrowArgs): Promise<IssueStatus | null>;
}
