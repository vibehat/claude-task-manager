import type { GraphQLResolveInfo } from "graphql";
import { CreateOneIssueLabelArgs } from "./args/CreateOneIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
export declare class CreateOneIssueLabelResolver {
    createOneIssueLabel(ctx: any, info: GraphQLResolveInfo, args: CreateOneIssueLabelArgs): Promise<IssueLabel>;
}
