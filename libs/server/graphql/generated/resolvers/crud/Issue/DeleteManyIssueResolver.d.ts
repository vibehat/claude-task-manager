import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyIssueArgs } from "./args/DeleteManyIssueArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyIssueResolver {
    deleteManyIssue(ctx: any, info: GraphQLResolveInfo, args: DeleteManyIssueArgs): Promise<AffectedRowsOutput>;
}
