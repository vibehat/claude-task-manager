import type { GraphQLResolveInfo } from "graphql";
import { CreateOneIssueArgs } from "./args/CreateOneIssueArgs";
import { Issue } from "../../../models/Issue";
export declare class CreateOneIssueResolver {
    createOneIssue(ctx: any, info: GraphQLResolveInfo, args: CreateOneIssueArgs): Promise<Issue>;
}
