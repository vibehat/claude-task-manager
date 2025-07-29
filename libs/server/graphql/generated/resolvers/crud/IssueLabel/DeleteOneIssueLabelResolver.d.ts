import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneIssueLabelArgs } from "./args/DeleteOneIssueLabelArgs";
import { IssueLabel } from "../../../models/IssueLabel";
export declare class DeleteOneIssueLabelResolver {
    deleteOneIssueLabel(ctx: any, info: GraphQLResolveInfo, args: DeleteOneIssueLabelArgs): Promise<IssueLabel | null>;
}
