import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneIssueLabelArgs } from "./args/UpsertOneIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
export declare class UpsertOneIssueLabelResolver {
    upsertOneIssueLabel(ctx: any, info: GraphQLResolveInfo, args: UpsertOneIssueLabelArgs): Promise<IssueLabel>;
}
