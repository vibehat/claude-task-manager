import type { GraphQLResolveInfo } from "graphql";
import { FindManyIssueLabelArgs } from "./args/FindManyIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
export declare class FindManyIssueLabelResolver {
    issueLabels(ctx: any, info: GraphQLResolveInfo, args: FindManyIssueLabelArgs): Promise<IssueLabel[]>;
}
