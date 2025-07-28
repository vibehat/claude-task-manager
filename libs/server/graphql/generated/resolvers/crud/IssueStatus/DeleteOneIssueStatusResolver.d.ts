import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneIssueStatusArgs } from "./args/DeleteOneIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
export declare class DeleteOneIssueStatusResolver {
    deleteOneIssueStatus(ctx: any, info: GraphQLResolveInfo, args: DeleteOneIssueStatusArgs): Promise<IssueStatus | null>;
}
