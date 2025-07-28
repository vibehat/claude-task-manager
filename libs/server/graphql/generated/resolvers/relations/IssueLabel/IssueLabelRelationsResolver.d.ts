import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { IssueLabel } from "../../../models/IssueLabel";
import { Label } from "../../../models/Label";
export declare class IssueLabelRelationsResolver {
    issue(issueLabel: IssueLabel, ctx: any, info: GraphQLResolveInfo): Promise<Issue>;
    label(issueLabel: IssueLabel, ctx: any, info: GraphQLResolveInfo): Promise<Label>;
}
