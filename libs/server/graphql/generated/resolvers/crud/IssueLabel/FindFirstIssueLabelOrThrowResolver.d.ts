import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssueLabelOrThrowArgs } from "./args/FindFirstIssueLabelOrThrowArgs";
import { IssueLabel } from "../../../models/IssueLabel";
export declare class FindFirstIssueLabelOrThrowResolver {
    findFirstIssueLabelOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstIssueLabelOrThrowArgs): Promise<IssueLabel | null>;
}
