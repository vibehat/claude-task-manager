import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneIssueArgs } from "./args/DeleteOneIssueArgs";
import { Issue } from "../../../models/Issue";
export declare class DeleteOneIssueResolver {
    deleteOneIssue(ctx: any, info: GraphQLResolveInfo, args: DeleteOneIssueArgs): Promise<Issue | null>;
}
