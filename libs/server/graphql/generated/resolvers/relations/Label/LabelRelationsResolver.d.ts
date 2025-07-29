import type { GraphQLResolveInfo } from "graphql";
import { IssueLabel } from "../../../models/IssueLabel";
import { Label } from "../../../models/Label";
import { LabelIssuesArgs } from "./args/LabelIssuesArgs";
export declare class LabelRelationsResolver {
    issues(label: Label, ctx: any, info: GraphQLResolveInfo, args: LabelIssuesArgs): Promise<IssueLabel[]>;
}
