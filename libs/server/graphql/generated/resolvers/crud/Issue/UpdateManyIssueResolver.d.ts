import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyIssueArgs } from "./args/UpdateManyIssueArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyIssueResolver {
    updateManyIssue(ctx: any, info: GraphQLResolveInfo, args: UpdateManyIssueArgs): Promise<AffectedRowsOutput>;
}
