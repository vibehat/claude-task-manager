import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneIssueStatusArgs } from "./args/UpdateOneIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
export declare class UpdateOneIssueStatusResolver {
    updateOneIssueStatus(ctx: any, info: GraphQLResolveInfo, args: UpdateOneIssueStatusArgs): Promise<IssueStatus | null>;
}
