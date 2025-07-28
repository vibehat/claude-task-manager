import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssueLabelArgs } from "./args/FindFirstIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
export declare class FindFirstIssueLabelResolver {
    findFirstIssueLabel(ctx: any, info: GraphQLResolveInfo, args: FindFirstIssueLabelArgs): Promise<IssueLabel | null>;
}
