import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneIssueLabelArgs } from "./args/UpdateOneIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
export declare class UpdateOneIssueLabelResolver {
    updateOneIssueLabel(ctx: any, info: GraphQLResolveInfo, args: UpdateOneIssueLabelArgs): Promise<IssueLabel | null>;
}
