import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIssueLabelOrThrowArgs } from "./args/FindUniqueIssueLabelOrThrowArgs";
import { IssueLabel } from "../../../models/IssueLabel";
export declare class FindUniqueIssueLabelOrThrowResolver {
    getIssueLabel(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIssueLabelOrThrowArgs): Promise<IssueLabel | null>;
}
