import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneIssueArgs } from "./args/UpdateOneIssueArgs";
import { Issue } from "../../../models/Issue";
export declare class UpdateOneIssueResolver {
    updateOneIssue(ctx: any, info: GraphQLResolveInfo, args: UpdateOneIssueArgs): Promise<Issue | null>;
}
