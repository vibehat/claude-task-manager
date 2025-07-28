import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIssueLabelArgs } from "./args/FindUniqueIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
export declare class FindUniqueIssueLabelResolver {
    issueLabel(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIssueLabelArgs): Promise<IssueLabel | null>;
}
