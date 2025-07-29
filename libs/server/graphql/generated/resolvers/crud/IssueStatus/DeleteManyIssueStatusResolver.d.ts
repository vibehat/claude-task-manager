import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyIssueStatusArgs } from "./args/DeleteManyIssueStatusArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyIssueStatusResolver {
    deleteManyIssueStatus(ctx: any, info: GraphQLResolveInfo, args: DeleteManyIssueStatusArgs): Promise<AffectedRowsOutput>;
}
